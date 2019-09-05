<?php

namespace App\Services;

use App\Exception\CustomException;
use App\Exception\DuplicateEntryException;
use App\Exception\EntityNotFoundException;
use App\Exception\GrantAccessException;
use App\Exception\RefreshTokenExpireException;
use App\Exception\TokenAccessException;
use DateTime;
use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Jumbojett\OpenIDConnectClient;
use League\OAuth2\Client\Token\AccessToken;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class HttpClientKeycloak implements HttpClientKeycloakInterface
{
	private $container;
	private $logger;
	private $utility;

	private $keycloakServices;
	private $keycloakProfiles;
	private $keycloakAdminProfile;

	/**
	 * HttpClientKeycloak constructor.
	 *
	 * @param ContainerInterface $container
	 */
	public function __construct(ContainerInterface $container, LoggerInterface $logger)
	{
		$this->container = $container;
		$this->logger = $logger;
		$this->utility = $container->get('app.mdp.utility');

		$this->keycloakServices = preg_split('/[, ]+/', getenv('KEYCLOAK_ORIGIN_CLIENTS'), -1, PREG_SPLIT_NO_EMPTY);
		$this->keycloakProfiles = preg_split('/[, ]+/', getenv('KEYCLOAK_ORIGIN_ROLES'), -1, PREG_SPLIT_NO_EMPTY);
		$this->keycloakAdminProfile = getenv('KEYCLOAK_ADMIN_ROLE');
	}

	/***** CLIENT MANAGEMENT *****/

	/**
	 * @return Client
	 */
	public function getKeycloakClient(): Client
	{
		$token = $this->container->get(KEY_SESSION)->get(KEY_ACCESS_TOKEN);
		/*        dump(getenv('OAUTH_KEYCLOAK_REQUEST_URL'));*/
		return new Client([
			GUZZLE_BASE_URI => getenv('OAUTH_KEYCLOAK_REQUEST_URL'),
			GUZZLE_HEADERS => [
				'Authorization' => "Bearer {$token}",
				GUZZLE_CONTENT_TYPE => GUZZLE_APPLICATION_JSON,
				'Accept' => GUZZLE_APPLICATION_JSON,
			],
		]);
	}

	public function refreshTokenClient()
	{
		return new Client(
			[
				GUZZLE_BASE_URI => getenv('KEYCLOAK_REFRESH_TOKEN_URL'),
				GUZZLE_HEADERS => [
					GUZZLE_CONTENT_TYPE => 'application/x-www-form-urlencoded',
				],
			]
		);
	}

	/**
	 * @param $name
	 *
	 * @return JsonResponse
	 *
	 * @throws Exception
	 */
	public function addServiceClient($name): JsonResponse
	{
		$uriClients = GUZZLE_CLIENTS;

		try {
			//Create client in keycloak
			$response = $this->getKeycloakClient()->request(
				'POST',
				$uriClients,
				[
					'body' => json_encode([
						GUZZLE_CLIENT_ID => $name,
						GUZZLE_ROOT_URL => getenv('OAUTH_KEYCLOAK_IP') . '/' . $name,
						'redirectUris' => ['*'],
						'directAccessGrantsEnabled' => true,
						'serviceAccountsEnabled' => true,
						'authorizationServicesEnabled' => true,
					]),
				]
			);

			if (Response::HTTP_CREATED === $response->getStatusCode()) {
				//Create role [equivalent as profile portal] associated for this service
				$location = $response->getHeaderLine(GUZZLE_LOCATION);

				$this->getKeycloakClient()->request(
					'POST',
					$location . '/roles',
					[
						'body' => json_encode(['name' => $name]),
					]
				);
			}
		} catch (GuzzleException $ex) {
			$this->logger->critical('=========================ERRORRRRRRRRRRRRRRRRR');
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($ex);

			if (Response::HTTP_CONFLICT === $ex->getCode()) {
				throw new DuplicateEntryException(
					'image_upload',
					'Service with this name already exists. name : ' . $name,
					'modal-error',
					Response::HTTP_CONFLICT
				);
			}

			throw new HttpException(
				$ex->getCode(),
				'Add service failed, please try again or contact administrator'
			);
		}
		$json = new \stdClass();
		$json->location = $location;

		return new JsonResponse($json, Response::HTTP_OK);
	}

	/**
	 * @param $id string client id in keycloak
	 *
	 * @return JsonResponse
	 *
	 * @throws Exception
	 */
	public function deleteClient($id): JsonResponse
	{
		$uri = GUZZLE_CLIENT_SLASH . $id;

		try {
			$this->getKeycloakClient()->request(
				'DELETE',
				$uri
			);
		} catch (GuzzleException $ex) {
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($ex);

			throw new HttpException(
				$ex->getCode(),
				'Fail to delete keycloak associated services, please try again or contact administrator'
			);
		}

		return new JsonResponse(true, Response::HTTP_OK);
	}

	/***** USER GROUPS MANAGEMENT *****/

	/**
	 * Fetch the list of the groups defined in Keycloak.
	 *
	 * @return array
	 *
	 * @throws Exception
	 */
	public function getGroups(): array
	{
		$groupsArray = [];
		$uriGroups = GUZZLE_GROUPS;

		try {
			$response = $this->getKeycloakClient()->request(
				'GET',
				$uriGroups
			);

			if (null !== $response->getBody()) {
				$body = json_decode($response->getBody(), true);

				foreach ($body as $group) {
					$id = $group['id'];
					$profiles = $this->getProfilesFromGroup($id);
					$groupArray = ['id' => $group['id'], 'name' => $group['name'], GUZZLE_PROFILES => $profiles];
					$groupsArray[] = $groupArray;
				}
			}
		} catch (GuzzleException $e) {
			$this->logDevelopersErrors($e);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__ . ' at Line ' . __LINE__);
			$this->checkAuthorizationException($e);

			throw new HttpException($e->getCode(), 'Get groups error, verify your network connection and please try again or contact administrator');
		}

		return $groupsArray;
	}

	/**
	 * Fetch the list of the profiles mapped to one group id.
	 *
	 * @param string $id
	 *
	 * @return array
	 *
	 * @throws HttpException
	 */
	public function getProfilesFromGroup($id): array
	{
		if (null === $id) {
			return [];
		}

		$profilesNameList = [];
		$uriProfilsByIdGroup = GUZZLE_GROUPS_SLASH . $id . '/role-mappings';

		try {
			$response = $this->getKeycloakClient()->request(
				'GET',
				$uriProfilsByIdGroup
			);
		} catch (GuzzleException $e) {
			$this->logDevelopersErrors($e);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($e);

			throw new HttpException($e->getCode(), GUZZLE_HTTP_RESPONSE_ERROR_WITH_CODE . $e->getCode()
				. ' with error message ' . $e->getMessage()
				. GUZZLE_DOT_FUNCTION . __METHOD__);
		}

		if (null !== $response->getBody()) {
			$body = json_decode($response->getBody(), true);
			/* if no profil return empty string */
			if (!isset($body['realmMappings'])) {
				return [];
			}

			$profilesList = $body['realmMappings'];

			foreach ($profilesList as $profile) {
				if (!in_array($profile['name'], $this->keycloakProfiles)) {
					$profilesNameList[] = ['id' => $profile['id'], 'name' => $profile['name']];
				}
			}
		}

		return $profilesNameList;
	}

	/**
	 * Show the details of one group id.
	 *
	 * @param string $id
	 *
	 * @return JsonResponse
	 *
	 * @throws HttpException
	 */
	public function getGroup($id): JsonResponse
	{
		$group = [];

		if (null === $id) {
			return new JsonResponse(false, Response::HTTP_NOT_FOUND);
		}

		$uriGroupById = GUZZLE_GROUPS_SLASH . $id;

		try {
			$response = $this->getKeycloakClient()->request(
				'GET',
				$uriGroupById
			);
		} catch (GuzzleException $e) {
			$this->logDevelopersErrors($e);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($e);

			if (Response::HTTP_NOT_FOUND === $e->getCode()) {
				throw new EntityNotFoundException(
					GUZZLE_GROUPS,
					'User Group not found',
					GUZZLE_ERROR,
					Response::HTTP_NOT_FOUND
				);
			}

			throw new HttpException(Response::HTTP_INTERNAL_SERVER_ERROR, GUZZLE_HTTP_RESPONSE_ERROR_WITH_CODE . GUZZLE_DOT_FUNCTION . __METHOD__);
		}

		if (null !== $response->getBody()) {
			$body = json_decode($response->getBody(), true);
			$group = ['id' => $body['id'], 'name' => $body['name'], GUZZLE_PROFILES => $body['realmRoles']];
			// dump($body);
			// dump($body['clientRoles']);
			if (isset($body['attributes']['admin'])) {
				$group['isSuperAdmin'] = true;
			}
		}

		return new JsonResponse($group, Response::HTTP_OK);
	}

	/**
	 * Create a new group in Keycloak.
	 *
	 * @param array  $group
	 * @param string $profiles
	 *
	 * @return JsonResponse
	 *
	 * @throws Exception
	 */
	public function addGroup($group, $profiles = null): JsonResponse
	{
		$uriGroups = GUZZLE_GROUPS;

		/* Creation du group */

		try {
			$response = $this->getKeycloakClient()->request(
				'POST',
				$uriGroups,
				[
					'body' => json_encode(['name' => $group['name']]),
				]
			);

			if (Response::HTTP_CREATED === $response->getStatusCode()) {
				$location = $response->getHeaderLine(GUZZLE_LOCATION);
				$json[] = [
					'id' => getenv('KEYCLOAK_REQUEST_ROLE_ID'),
					'name' => getenv('KEYCLOAK_REQUEST_ROLE_NAME'),
				];
				foreach ($profiles as $profile) {
					$json[] = [
						'id' => $profile['id'],
						'name' => $profile['name'],
					];
				}

				//Associate role of group
				$response1 = $this->getKeycloakClient()->request(
					'post',
					$location . GUZZLE_ROLE_MAPPING_REALM_URL,
					[
						'body' => json_encode($json),
					]
				);
			}
		} catch (GuzzleException $e) {
			$this->logDevelopersErrors($e);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__ . ' At line : ' . __LINE__);
			//Delete Group if occurs error for profiles association
			if (isset($response)) {
				if (!isset($response1) && Response::HTTP_CREATED === $response->getStatusCode()) {
					$idGroup = $this->utility->truncate($location);
					$this->deleteGroup($idGroup[2]);
				}
			}

			//If group already exists with the same name
			if (Response::HTTP_CONFLICT == $e->getCode()) {
				throw new DuplicateEntryException('group_add', 'One group user already exists with the same name');
			}

			throw new HttpException(
				$e->getCode(),
				'User Group creation error, please try again or contact administrator'
			);
		}

		return new JsonResponse(true, Response::HTTP_CREATED);
	}

	/**
	 * Update the details of one group.
	 *
	 * @param $group
	 * @param null $profiles
	 *
	 * @return JsonResponse
	 *
	 * @throws HttpException
	 */
	public function updateGroup($group, $profiles = null): JsonResponse
	{
		$profilesToDeleteFormatted = [];
		$profilesToAddFormatted = [];

		$status = $this->ifExistGroup($group);
		if ($status) {
			return new JsonResponse(false, Response::HTTP_CONFLICT);
		}

		$uriGroupById = GUZZLE_GROUPS_SLASH . $group['currentGroup']['id'];

		//Profiles that need to be deleted
		$profilesToDelete = array_diff($group['currentProfiles'], $group['profiles']);

		//Right format for the request to Keycloak
		foreach ($profilesToDelete as $profiles) {
			$profilesToDeleteFormatted[] = [
				'id' => $profiles,
				'name' => $this->getProfileNameById($profiles),
			];
		}

		//Profiles that need to be added
		$profilesToAdd = array_diff($group['profiles'], $group['currentProfiles']);

		//Right format for the request to Keycloak
		foreach ($profilesToAdd as $profiles) {
			$profilesToAddFormatted[] = ['id' => $profiles, 'name' => $this->getProfileNameById($profiles)];
		}

		//Request to update the name of the group
		try {
			$response = $this->getKeycloakClient()->request(
				'PUT',
				$uriGroupById,
				[
					'body' => json_encode([
						'name' => $group['name'],
					]),
				]
			);

			//Request to delete the unwanted roles -- don't need to get this response
			$this->getKeycloakClient()->request(
				GUZZLE_DELETE,
				$uriGroupById . GUZZLE_ROLE_MAPPING_REALM_URL,
				[
					'body' => json_encode($profilesToDeleteFormatted),
				]
			);

			//Request to add the new roles -- don't need to get this response
			$this->getKeycloakClient()->request(
				'POST',
				$uriGroupById . GUZZLE_ROLE_MAPPING_REALM_URL,
				[
					'body' => json_encode($profilesToAddFormatted),
				]
			);
		} catch (GuzzleException $e) {
			$this->logDevelopersErrors($e);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($e);

			throw new HttpException(
				$e->getCode(),
				'User Group update error, please try again or contact administrator'
			);
		}

		return new JsonResponse(true, Response::HTTP_OK);
	}

	/**
	 * Delete a group from Keycloak.
	 *
	 * @param string $id
	 *
	 * @throws HttpException
	 *
	 * @return array
	 */
	public function deleteGroup($id): JsonResponse
	{
		if (null === $id) {
			return new JsonResponse(false, Response::HTTP_NOT_FOUND);
		}

		$uriGroupById = GUZZLE_GROUPS_SLASH . $id;

		try {
			$this->getKeycloakClient()->request(
				GUZZLE_DELETE,
				$uriGroupById
			);
		} catch (GuzzleException $e) {
			$this->logDevelopersErrors($e);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($e);

			throw new HttpException(
				$e->getCode(),
				'User Group suppression error, please try again or contact administrator'
			);
		}

		return new JsonResponse(true, Response::HTTP_NO_CONTENT);
	}

	/** Profiles MANAGEMENT **/

	/**
	 * Fetch the list of the profiles defined in Keycloak.
	 *
	 * @return array
	 *
	 * @throws HttpException
	 */
	public function getProfiles($entityTarget = null): array
	{
		$profilesArray = [];
		$uriProfiles = 'roles';

		try {
			$response = $this->getKeycloakClient()->request(
				'GET',
				$uriProfiles
			);
		} catch (GuzzleException $e) {
			$this->logDevelopersErrors($e);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($e);

			throw new HttpException(
				$e->getCode(),
				'Get services from profile failed, please try again or contact administrator'
			);
		}

		if (Response::HTTP_OK !== $response->getStatusCode()) {
			throw new HttpException(
				$response->getStatusCode(),
				$response->getBody()->getContents()
					. $response->getStatusCode()
					. GUZZLE_DOT_FUNCTION . __METHOD__
			);
		}

		if (null !== $response->getBody()) {
			$body = json_decode($response->getBody(), true);

			$keycloakProfilesWithAdmin = $this->keycloakProfiles;
			if (KEY_GROUP !== $entityTarget) {
				$keycloakProfilesWithAdmin[] = $this->keycloakAdminProfile;
			}

			foreach ($body as $profile) {
				if (!in_array($profile['name'], $keycloakProfilesWithAdmin)) {
					$name = $profile['name'];
					$servicesofprofil = $this->getServicesFromProfil($name);
					$profilArray = [
						'id' => $profile['id'],
						'name' => $profile['name'],
						GUZZLE_SERVICES => $servicesofprofil,
					];
					$profilesArray[] = $profilArray;
				}
			}
		}

		return $profilesArray;
	}

	/**
	 * Fetch the list of the services mapped to one profile id.
	 *
	 * @param string $id
	 *
	 * @return array
	 *
	 * @throws HttpException
	 */
	public function getServicesFromProfil($name): array
	{
		if (null === $name) {
			return [];
		}

		$servicesList = [];
		$uriServicesByIdProfil = 'roles/' . $name . GUZZLE_SLASH_COMPOSITES;

		try {
			$response = $this->getKeycloakClient()->request(
				'GET',
				$uriServicesByIdProfil
			);
		} catch (GuzzleException $e) {
			$this->logDevelopersErrors($e);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($e);

			throw new HttpException(
				$e->getCode(),
				'Get services from profile failed, please try again or contact administrator'
			);
		}

		if (Response::HTTP_OK !== $response->getStatusCode()) {
			throw new HttpException(
				$response->getStatusCode(),
				$response->getBody()->getContents()
					. $response->getStatusCode()
					. GUZZLE_DOT_FUNCTION . __METHOD__
			);
		}

		if (null !== $response->getBody()) {
			$body = json_decode($response->getBody(), true);

			/* if no profil return empty string */
			if (!isset($body['0'])) {
				return [];
			}

			foreach ($body as $cle => $valeur) {
				$servicesList[] = ['id' => $valeur['id'], 'name' => $valeur['name'], GUZZLE_CONTAINER_ID => $valeur[GUZZLE_CONTAINER_ID]];
			}
		}

		return $servicesList;
	}

	/**
	 * @param $id
	 *
	 * @return string
	 *
	 * @throws Exception
	 */
	public function getProfileNameById($id): string
	{
		$uriProfile = GUZZLE_ROLES_BY_IS_SLASH . $id;
		$profileName = '';

		try {
			$response = $this->getKeycloakClient()->request(
				'GET',
				$uriProfile
			);
		} catch (GuzzleException $e) {
			$this->logDevelopersErrors($e);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($e);

			throw new HttpException(
				$e->getCode(),
				'Get user profile failed, please try again or contact administrator'
			);
		}

		if (Response::HTTP_OK !== $response->getStatusCode()) {
			throw new HttpException(
				$response->getStatusCode(),
				$response->getBody()->getContents()
					. $response->getStatusCode()
					. GUZZLE_DOT_FUNCTION . __METHOD__
			);
		}

		if (null !== $response->getBody()) {
			$body = json_decode($response->getBody(), true);
			$profileName = $body['name'];
		}

		return $profileName;
	}

	/**
	 * Show the details of one profile.
	 *
	 * @param $id
	 *
	 * @return JsonResponse
	 *
	 * @throws HttpException
	 */
	public function getProfile($id): JsonResponse
	{
		if (null === $id) {
			return new JsonResponse(false, Response::HTTP_NOT_FOUND);
		}

		$uriProfilById = GUZZLE_ROLES_BY_IS_SLASH . $id;

		try {
			$response = $this->getKeycloakClient()->request(
				'GET',
				$uriProfilById
			);
		} catch (GuzzleException $e) {
			$this->logDevelopersErrors($e);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($e);

			if (Response::HTTP_NOT_FOUND === $e->getCode()) {
				throw new EntityNotFoundException(
					GUZZLE_PROFILES,
					"This profile doesn't exist.",
					GUZZLE_ERROR,
					Response::HTTP_NOT_FOUND
				);
			}

			throw new HttpException(
				$e->getCode(),
				'Get user profile failed, please try again or contact administrator'
			);
		}

		if (Response::HTTP_OK !== $response->getStatusCode()) {
			throw new HttpException(
				$response->getStatusCode(),
				$response->getBody()->getContents()
					. $response->getStatusCode()
					. GUZZLE_DOT_FUNCTION . __METHOD__
			);
		}

		if (null !== $response->getBody()) {
			$body = json_decode($response->getBody(), true);
			$profile = [
				'id' => $body['id'],
				'name' => $body['name'],
				GUZZLE_SERVICES => $this->getServicesFromProfil($body['name']),
			];
		}

		return new JsonResponse($profile, Response::HTTP_OK);
	}

	/**
	 * Create a new profile in Keycloak.
	 *
	 * @param $profile
	 * @param null $services
	 *
	 * @return JsonResponse
	 *
	 * @throws HttpException
	 */
	public function addProfile($profile, $services = null): JsonResponse
	{
		$uriProfiles = 'roles';

		//Right format for the services array:
		$servicesArray = [];
		foreach ($services as $service) {
			$servicesArray[] = [
				GUZZLE_CLIENT_ROLE => 'true',
				GUZZLE_COMPOSITE => GUZZLE_FFALSE,
				GUZZLE_CONTAINER_ID => $service[GUZZLE_CLIENT_ID],
				'id' => $service['id'],
				'name' => $service['name'],
				GUZZLE_SCOPE_PARAM_REQUIRED => GUZZLE_FFALSE,
			];
		}

		try {
			/** Creation du profile */

			$response = $this->getKeycloakClient()->request(
				'POST',
				$uriProfiles,
				[
					'body' => json_encode([
						'name' => $profile['name'],
					]),
				]
			);

			if (Response::HTTP_CREATED !== $response->getStatusCode()) {
				throw new HttpException(GUZZLE_HTTP_RESPONSE_ERROR_WITH_CODE
					. $response->getStatusCode()
					. GUZZLE_DOT_FUNCTION . __METHOD__);
			}

			//Add the services to the profile
			$returnedUri = $response->getHeaderLine(GUZZLE_LOCATION);
			$this->getKeycloakClient()->request(
				'POST',
				$returnedUri . GUZZLE_SLASH_COMPOSITES,
				[
					'body' => json_encode($servicesArray),
				]
			);
		} catch (GuzzleException $ex) {
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($ex);

			if (Response::HTTP_CONFLICT == $ex->getCode()) {
				throw new DuplicateEntryException(
					'profile_add',
					"Profile's name already exists",
					'error-modal',
					Response::HTTP_CONFLICT
				);
			}

			//Todo : Delete profile if services association failed!!

			throw new HttpException(
				$ex->getCode(),
				'Create profile failed, please try again or contact administrator'
			);
		}

		return new JsonResponse(true, Response::HTTP_OK);
	}

	/**
	 * Update the details of one profile.
	 *
	 * @param $profile
	 * @param null $services
	 *
	 * @return JsonResponse
	 *
	 * @throws HttpException
	 */
	public function updateProfile($profile, $services = null): JsonResponse
	{
		$initialServices = $profile['currentProfile'][GUZZLE_SERVICES];
		$servicesToDeleteFormatted = [];
		$servicesToAddFormatted = [];

		$uriServices = 'roles/' . $profile['name'] . GUZZLE_SLASH_COMPOSITES;

		//Profiles that need to be deleted
		$servicesToDelete = array_diff($profile['currentServices'], $profile[GUZZLE_SERVICES]);

		//Right format for the request to Keycloak
		foreach ($servicesToDelete as $service) {
			$serviceDetailed = $this->getServicesDetailsFromListOfServices($service, $initialServices);

			$servicesToDeleteFormatted[] = [
				GUZZLE_CLIENT_ROLE => 'true',
				GUZZLE_COMPOSITE => GUZZLE_FFALSE,
				GUZZLE_CONTAINER_ID => $serviceDetailed[GUZZLE_CONTAINER_ID],
				'id' => $service,
				'name' => $serviceDetailed['name'],
				GUZZLE_SCOPE_PARAM_REQUIRED => GUZZLE_FFALSE,
			];
		}

		//Profiles that need to be added
		$servicesToAdd = array_diff($profile[GUZZLE_SERVICES], $profile['currentServices']);

		//Right format for the request to Keycloak
		foreach ($servicesToAdd as $service) {
			$serviceDetailed = $this->getServicesDetailsFromListOfServices($service, $services);
			$servicesToAddFormatted[] = [
				GUZZLE_CLIENT_ROLE => 'true',
				GUZZLE_COMPOSITE => GUZZLE_FFALSE,
				GUZZLE_CONTAINER_ID => $serviceDetailed[GUZZLE_CLIENT_ID],
				'id' => $service,
				'name' => $serviceDetailed['name'],
				GUZZLE_SCOPE_PARAM_REQUIRED => GUZZLE_FFALSE,
			];
		}

		try {
			//Request to delete the unwanted services
			$this->getKeycloakClient()->request(
				GUZZLE_DELETE,
				$uriServices,
				[
					'body' => json_encode($servicesToDeleteFormatted),
				]
			);

			//Request to add the new services
			$this->getKeycloakClient()->request(
				'POST',
				$uriServices,
				[
					'body' => json_encode($servicesToAddFormatted),
				]
			);
		} catch (GuzzleException $e) {
			$this->logDevelopersErrors($e);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($e);

			throw new HttpException(
				$e->getCode(),
				'Update profile failed, please try again or contact administrator'
			);
		}

		return new JsonResponse(true, Response::HTTP_OK);
	}

	/**
	 * Delete a profile from Keycloak.
	 *
	 * @param string $id
	 *
	 * @return JsonResponse
	 */
	public function deleteProfile($id): JsonResponse
	{
		$uriProfilById = GUZZLE_ROLES_BY_IS_SLASH . $id;

		if (null == $id) {
			return new JsonResponse(false, Response::HTTP_NOT_FOUND);
		}

		try {
			$this->getKeycloakClient()->request(
				GUZZLE_DELETE,
				$uriProfilById
			);
		} catch (GuzzleException $e) {
			$this->logDevelopersErrors($e);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($e);

			throw new HttpException(
				$e->getCode(),
				'Delete profile failed, please try again or contact administrator'
			);
		}

		return new JsonResponse(true, Response::HTTP_OK);
	}
	/*    public function __toString()
    {
        return (string) $this->getUsers();
    }*/
	/***** USER  MANAGEMENT *****/

	/**
	 * Fetch the list of the users defined in Keycloak.
	 *
	 * @return array
	 *
	 * @throws Exception
	 */
	public function getUsers(): array
	{
		$usersArray = [];
		$uriUsers = GUZZLE_USERS;

		try {
			$response = $this->getKeycloakClient()->request(
				'GET',
				$uriUsers
			);

			if (Response::HTTP_OK === $response->getStatusCode()) {
				$body = json_decode($response->getBody(), true);
				if (is_array($body)) {
					foreach ($body as $user) {
						$id = $user['id'];
						$group = $this->getGroupOfUser($id);

						if (!isset($group['name'])) {
							$group['name'] = '';
						}

						$userArray = ['id' => $user['id'], GUZZLE_USERNAME => $user[GUZZLE_USERNAME], GUZZLE_GROUP => $group['name']];
						if (isset($user['attributes']['admin'])) {

							$userArray['isSuperAdmin'] = true;
						}
						$usersArray[] = $userArray;
					}
				}
			}
			/* else return empty $groupsArray */
		} catch (GuzzleException $e) {
			$this->logDevelopersErrors($e);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($e);

			throw new HttpException(
				$e->getCode(),
				'Get users list error, please try again or contact administrator'
			);
		}

		return $usersArray;
	}

	/**
	 * Fetch the group mapped to one user id.
	 *
	 * @param string $id
	 *
	 * @return array
	 *
	 * @throws Exception
	 */
	public function getGroupOfUser($id): array
	{

		if (null === $id) {
			return [];
		}

		$groupofuser = [];
		$uriGroupByUser = GUZZLE_USER_SLASH . $id . '/groups';

		try {
			$response = $this->getKeycloakClient()->request(
				'GET',
				$uriGroupByUser
			);

			if (Response::HTTP_OK === $response->getStatusCode()) {
				$body = json_decode($response->getBody(), true);
				if (is_array($body)) {
					if (!isset($body['0'])) {
						return [];
					}
					$groupofuser = $body['0'];
				}
			}
		} catch (GuzzleException $ex) {
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			//Check if user has access right and his token isn't expire
			$this->checkAuthorizationException($ex);

			throw new HttpException(
				Response::HTTP_INTERNAL_SERVER_ERROR,
				'Failed to get group of user, Please contact administrator.'
			);
		}

		return $groupofuser;
	}

	/**
	 * Show the details of one user.
	 *
	 * @param string $id
	 *
	 * @return JsonResponse
	 *
	 * @throws HttpException
	 */
	public function getUser($id): JsonResponse
	{
		if (null === $id) {
			throw new EntityNotFoundException(
				GUZZLE_USERS,
				'User not found.',
				GUZZLE_ERROR,
				Response::HTTP_NOT_FOUND
			);
		}

		$uriUserById = GUZZLE_USER_SLASH . $id;
		$user = [];

		try {
			$response = $this->getKeycloakClient()->request(
				'GET',
				$uriUserById
			);

			if (Response::HTTP_OK === $response->getStatusCode()) {
				$body = json_decode($response->getBody(), true);
				if (is_array($body)) {
					$group = $this->getGroupOfUser($id);
					if (!isset($group['id'])) {
						$group['id'] = '';
					}
					$user = ['id' => $body['id'], GUZZLE_USERNAME => $body[GUZZLE_USERNAME], GUZZLE_GROUP => $group['id']];
					dump($user);
				}
			}
		} catch (GuzzleException $ex) {
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($ex);

			if (Response::HTTP_NOT_FOUND === $ex->getCode()) {
				throw new EntityNotFoundException(
					GUZZLE_USERS,
					'User not found',
					GUZZLE_ERROR,
					Response::HTTP_NOT_FOUND
				);
			}

			throw new HttpException(
				$ex->getCode(),
				'Get user by Id failed, Please contact an administrator'
			);
		}

		return new JsonResponse($user, Response::HTTP_OK);
	}

	/**
	 * Add user.
	 *
	 * @param array $user
	 * @param null  $groups
	 *
	 * @throws Exception
	 *
	 * @return JsonResponse
	 */
	public function addUser($user, $groups = null): JsonResponse
	{
		$uriGroups = GUZZLE_USERS;

		try {
			/** Creation du user */
			$response1 = $this->getKeycloakClient()->request(
				'POST',
				$uriGroups,
				[
					'body' => json_encode([
						GUZZLE_USERNAME => $user[GUZZLE_USERNAME],
						'enabled' => true,
					]),
				]
			);

			if (Response::HTTP_CREATED === $response1->getStatusCode()) {
				/** Add a group to the user */
				$location = $response1->getHeaderLine(GUZZLE_LOCATION);
				$response2 = $this->getKeycloakClient()->request(
					'PUT',
					$location . GUZZLE_SLASH_GROUPS_SLASH . $user[GUZZLE_GROUP]
				);

				/** Add a password to the user */
				$response3 = $this->getKeycloakClient()->request(
					'PUT',
					$location . '/reset-password',
					[
						'body' => json_encode([
							'temporary' => GUZZLE_FFALSE,
							'type' => GUZZLE_STRING_CRED_CONF,
							'value' => $user[GUZZLE_STRING_CRED_CONF],
						]),
					]
				);
			}
		} catch (GuzzleException $ex) {
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($ex);
			//Delete created user if group and password association failed
			if (isset($response1) && (!isset($response2) || !isset($response3))) {
				if (Response::HTTP_CREATED === $response1->getStatusCode()) {
					$idUser = $this->utility->truncate($location)[2];
					$this->deleteUser($idUser);
				}
			}

			if (Response::HTTP_CONFLICT === $ex->getCode()) {
				throw new DuplicateEntryException('user_add', 'User with this username already exists');
			}

			throw new HttpException(
				$ex->getCode(),
				'User creation error, please try again or contact administrator'
			);
		}

		return new JsonResponse(true, Response::HTTP_OK);
	}

	/**
	 * Update the information of a user.
	 *
	 * @param array $user
	 * @param $groups
	 *
	 * @throws Exception
	 *
	 * @return JsonResponse
	 */
	public function updateUser($user, $groups = null): JsonResponse
	{
		$uriUsers = GUZZLE_USER_SLASH . $user['id'];

		try {
			/** Creation du user */
			$response = $this->getKeycloakClient()->request(
				'PUT',
				$uriUsers,
				[
					'body' => json_encode([
						GUZZLE_USERNAME => $user[GUZZLE_USERNAME],
					]),
				]
			);

			/* if first request execute correctly */
			if (Response::HTTP_NO_CONTENT === $response->getStatusCode()) {
				//Delete the previous group
				if ('' !== $user['initialGroup']) {
					$this->getKeycloakClient()->request(
						GUZZLE_DELETE,
						$uriUsers . GUZZLE_SLASH_GROUPS_SLASH . $user['initialGroup']
					);
				}

				//Associate new group to user
				$this->getKeycloakClient()->request(
					'PUT',
					$uriUsers . GUZZLE_SLASH_GROUPS_SLASH . $user[GUZZLE_GROUP]
				);

				/* change the password to the user */
				$this->getKeycloakClient()->request(
					'PUT',
					$uriUsers . '/reset-password',
					[
						'body' => json_encode([
							'temporary' => GUZZLE_FFALSE,
							'type' => GUZZLE_STRING_CRED_CONF,
							'value' => $user[GUZZLE_STRING_CRED_CONF],
						]),
					]
				);
			}
		} catch (GuzzleException $ex) {
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			//Throw authorization exception for listener
			$this->checkAuthorizationException($ex);

			throw new HttpException(
				$ex->getCode(),
				'User update failed, please try again or contact administrator'
			);
		}

		return new JsonResponse(true, Response::HTTP_OK);
	}

	/**
	 * Delete a user.
	 *
	 * @param string $id
	 *
	 * @return JsonResponse
	 *
	 * @throws Exception
	 */
	public function deleteUser($id): JsonResponse
	{
		$uriUserById = GUZZLE_USER_SLASH . $id;

		try {
			$this->getKeycloakClient()->request(
				GUZZLE_DELETE,
				$uriUserById
			);
		} catch (GuzzleException $ex) {
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($ex);

			throw new HttpException(
				$ex->getCode(),
				'User delete failed, please try again or contact administrator'
			);
		}

		return new JsonResponse(true, Response::HTTP_OK);
	}

	/***** SECURITY *****/

	/**
	 * @param $username
	 *
	 * @return JsonResponse
	 */
	public function loadUser($username): JsonResponse
	{
		// TODO: Implement loadUser() method.
		return new JsonResponse();
	}

	/**
	 * @param $credentials
	 *
	 * @return JsonResponse
	 */
	public function authenticate($credentials): JsonResponse
	{
		// TODO: Implement authenticate() method.
		return new JsonResponse();
	}

	/***** SERVICES *****/

	/**
	 * Fetch all the services linked to a Keycloak client.
	 *
	 * @param string $id
	 *
	 * @throws Exception
	 *
	 * @return array
	 */
	public function getServicesFromClient($id): array
	{
		$servicessArray = [];
		$uriServices = GUZZLE_CLIENT_SLASH . $id . '/roles';

		try {
			$response = $this->getKeycloakClient()->request(
				'GET',
				$uriServices
			);

			/* If http return code of response is different of Response::HTTP_OK  */
			if (Response::HTTP_OK !== $response->getStatusCode()) {
				throw new Exception(GUZZLE_HTTP_RESPONSE_ERROR_WITH_CODE . $response->getStatusCode()
					. GUZZLE_DOT_FUNCTION . __METHOD__);
			}

			if (null !== $response->getBody()) {
				$body = json_decode($response->getBody(), true);
				foreach ($body as $service) {
					$serviceArray = [
						'id' => $service['id'],
						'name' => $service['name'],
						GUZZLE_CLIENT_ID => $service[GUZZLE_CONTAINER_ID],
					];
					$servicessArray[] = $serviceArray;
				}
			}
		} catch (GuzzleException $ex) {
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($ex);

			throw new HttpException(
				$ex->getCode(),
				'Get services from client failed, please try again or contact administrator'
			);
		}

		return $servicessArray;
	}

	/**
	 * Fetch all the services available.
	 *
	 * @throws Exception
	 *
	 * @return array
	 */
	public function getAllServices(): array
	{
		$servicesArray = [];
		$uriServices = GUZZLE_CLIENTS;

		try {
			$response = $this->getKeycloakClient()->request(
				'GET',
				$uriServices
			);

			/* If http return code of response is different of Response::HTTP_OK  */
			if (Response::HTTP_OK !== $response->getStatusCode()) {
				throw new Exception(GUZZLE_HTTP_RESPONSE_ERROR_WITH_CODE . $response->getStatusCode()
					. GUZZLE_DOT_FUNCTION . __METHOD__);
			}

			if (null !== $response->getBody()) {
				$body = json_decode($response->getBody(), true);
				foreach ($body as $client) {
					if (!in_array($client[GUZZLE_CLIENT_ID], $this->keycloakServices)) {
						$service = $this->getServicesFromClient($client['id']);
						if (!empty($service)) {
							foreach ($service as $serviceItem) {
								$servicesArray[] = $serviceItem;
							}
						}
					}
				}
			}
			/* else return empty $groupsArray */
		} catch (GuzzleException $ex) {
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($ex);

			throw new HttpException(
				$ex->getCode(),
				"Get all user's services failed, please try again or contact administrator"
			);
		}

		return $servicesArray;
	}

	/**
	 * Get the information related to one service in an array of services.
	 *
	 * @param string $id
	 * @param array  $listOfServices
	 *
	 * @return array
	 */
	public function getServicesDetailsFromListOfServices($id, $listOfServices): array
	{
		$serviceDetailed = [];

		foreach ($listOfServices as $service) {
			if ($service['id'] == $id) {
				$serviceDetailed = $service;
			}
		}

		return $serviceDetailed;
	}

	/**
	 * @param $id
	 *
	 * @return array
	 *
	 * @throws HttpException
	 */
	public function getUserServices($id): array
	{
		$userServicesArray = [];
		$uriServices = GUZZLE_CLIENTS;
		$uriUserServices = GUZZLE_USER_SLASH . $id . '/role-mappings/clients/';

		try {
			$response = $this->getKeycloakClient()->request(
				'GET',
				$uriServices
			);

			if (null !== $response->getBody()) {
				$body = json_decode($response->getBody(), true);
				foreach ($body as $client) {
					if (!in_array($client[GUZZLE_CLIENT_ID], $this->keycloakServices)) {
						$response2 = $this->getKeycloakClient()->request(
							'GET',
							$uriUserServices . $client['id'] . '/composite'
						);

						if (null !== $response2->getBody()) {
							$services = json_decode($response2->getBody(), true);
						}

						if (!empty($services)) {
							foreach ($services as $service) {
								$userServicesArray[] = [
									'id' => $service['id'],
									'name' => $service['name'],
									GUZZLE_CLIENT_ID => $service[GUZZLE_CONTAINER_ID],
									'route' => isset($client[GUZZLE_ROOT_URL]) ? $client[GUZZLE_ROOT_URL] : '#',
								];
							}
						}
					}
				}
			}
		} catch (GuzzleException $ex) {
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($ex);

			throw new HttpException(
				$ex->getCode(),
				'Failed to get logged user services, Please contact administrator.'
			);
		}

		return $userServicesArray;
	}

	/***** COMMUN *****/

	/**
	 * @return array
	 */
	public function filterServices(): array
	{
		// TODO: Implement filterServices() method.
		return [];
	}

	/**
	 * @param $servicesAvailables
	 * @param $userServices
	 *
	 * @return array
	 */
	public function servicesFilter($servicesAvailables, $userServices): array
	{
		$services = [];
		foreach ($servicesAvailables as $key => $serviceAvalaible) {
			foreach ($userServices as $service) {
				if ($key === $service['name']) {
					$services[] = $service;

					continue;
				}
			}
		}

		return $services;
	}

	/**
	 * Write error log for developers in var directory.
	 *
	 * @param Exception $e
	 */
	private function logDevelopersErrors(Exception $e)
	{
		$this->logger->error('Code : ' . $e->getCode() . ' Message : ' . $e->getMessage());
	}

	/**
	 * Return an array response for HTTP Forbidden code response request.
	 *
	 * @return array
	 */
	private function displayForbiddenError()
	{
		return [
			'status' => false,
			'code' => Response::HTTP_FORBIDDEN,
		];
	}

	/**
	 * Check if a group with the specify group name already exists.
	 *
	 * @param $array
	 *
	 * @return bool
	 *
	 * @throws Exception
	 */
	private function ifExistGroup($currentGroup)
	{
		$groups = $this->getGroups();
		$status = false;
		foreach ($groups as $group) {
			if (($group['name'] === $currentGroup['name']) && ($currentGroup['currentGroup']['id'] !== $group['id'])) {
				$status = true;
			}
		}

		return $status;
	}

	/**
	 * Get user errors for  expiration token and user access right for ressource.
	 *
	 * @param Exception $exception
	 *
	 * @throws Exception
	 */
	public function checkAuthorizationException(Exception $exception)
	{
		$this->logger->info('************************** Starting token refresh **************************');
		if (Response::HTTP_UNAUTHORIZED === $exception->getCode()) {
			$token = $this->container->get(KEY_SESSION)->get(KEY_ACCESS_TOKEN);
			dump($token);
			try {
				$refreshTokenResponse = $this->refreshTokenClient()->request(
					'POST',
					'protocol/openid-connect/token',

					[
						'form_params' => [
							'grant_type' => 'refresh_token',
							'client_id' => getenv('OAUTH_KEYCLOAK_CLIENT_ID'),
							'client_secret' => getenv('OAUTH_KEYCLOAK_CLIENT_SECRET'),
							'refresh_token' => $token->getRefreshToken(),
						],
					]
				)->getBody()->getContents();
				$refreshToken = json_decode($refreshTokenResponse, true);
				$accessToken = new AccessToken($refreshToken);
				$this->container->get(KEY_SESSION)->set(KEY_ACCESS_TOKEN, $accessToken);

				$this->logger->info('************************** Token refresh successfully *****************************');

				throw new TokenAccessException();
			} catch (GuzzleException $e) {
				$this->logDevelopersErrors($e);
				$this->logger->info('************************** Refresh token failed ****************************');

				//If SSO session is ended on IDP keycloak or refresh token is invalid
				if (Response::HTTP_BAD_REQUEST === $e->getCode()) {
					$this->logger->info('**** Refresh token expired because SSO session expired from IDP Keycloak *****');
					$this->logger->info('**** The connected user will disconnected *****');

					throw new RefreshTokenExpireException(
						CustomException::ROUTE_LOGOUT
					);
				}

				throw new HttpException(
					$e->getCode(),
					'Failed to refresh token, Please contact administrator.'
				);
			}
		} elseif (Response::HTTP_FORBIDDEN === $exception->getCode()) {
			throw new GrantAccessException(
				CustomException::ROUTE_LOGOUT,
				"User don't have access right for get this resource, Please contact administrator.",
				Response::HTTP_UNAUTHORIZED
			);
		}
	}

	/***** ***** ***** ***** DEVICES ***** ***** ***** *****/

	/***** DEVICES CLIENT MANAGEMENT *****/

	public function getKeycloakDevicesClient(): Client
	{
		$oidc = new OpenIDConnectClient(
			getenv('DEVICES_KEYCLOAK_AUTH_URL'),
			getenv('DEVICES_KEYCLOAK_CLIENT_ID'),
			getenv('DEVICES_KEYCLOAK_CLIENT_SECRET')
		);

		$oidc->providerConfigParam([
			'token_endpoint' => getenv('DEVICES_KEYCLOAK_TOKEN_URL'),
		]);
		$oidc->setVerifyPeer(false);

		$token = $oidc->requestClientCredentialsToken();
		$tokenArray = json_decode(json_encode($token), true);
		$deviceAccessToken = new AccessToken($tokenArray);

		return new Client([
			GUZZLE_BASE_URI => getenv('DEVICES_KEYCLOAK_REQUEST_URL'),
			GUZZLE_HEADERS => [
				'Authorization' => "Bearer {$deviceAccessToken}",
				GUZZLE_CONTENT_TYPE => GUZZLE_APPLICATION_JSON,
				'Accept' => GUZZLE_APPLICATION_JSON,
			],
		]);
	}

	/***** DEVICES MANAGEMENT *****/

	public function getDevices(): array
	{
		$return = [];
		$uri = GUZZLE_CLIENTS;

		try {
			$response = $this->getKeycloakDevicesClient()->request(
				'GET',
				$uri
			);

			$body = json_decode($response->getBody(), true);

			foreach ($body as $client) {
				if (!in_array($client[GUZZLE_CLIENT_ID], $this->keycloakServices)) {
					$expire = '';
					if (isset($client[GUZZLE_DESCRIPTION])) {
						$expireTimestamp = isset(json_decode($client[GUZZLE_DESCRIPTION], true)[GUZZLE_EXPIRE]) ?
							json_decode($client[GUZZLE_DESCRIPTION], true)[GUZZLE_EXPIRE] : 1;

						$now = time();
						$date = date(DateTime::COOKIE, $expireTimestamp);
						$expireMsg = $expireTimestamp <= $now ? ' Token Expired' : '';

						$array = [
							'id' => $client['id'],
							'clientid' => $client[GUZZLE_CLIENT_ID],
							'date' => $date,
							GUZZLE_EXPIRE => $expireMsg,
						];

						$return[] = $array;
					}
				}
			}
		} catch (GuzzleException $ex) {
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($ex);

			throw new HttpException(
				$ex->getCode(),
				'Get devices failed, please try again or contact administrator'
			);
		}

		return $return;
	}

	public function addDevice($name): JsonResponse
	{
		$uriClients = GUZZLE_CLIENTS;

		try {
			$responseAddDevice = $this->getKeycloakDevicesClient()->request(
				'POST',
				$uriClients,
				[
					'body' => json_encode([
						GUZZLE_CLIENT_ID => $name,
						'redirectUris' => ['*'],
						'directAccessGrantsEnabled' => true,
						'serviceAccountsEnabled' => true,
						'authorizationServicesEnabled' => true,
					]),
				]
			);
			$location = $responseAddDevice->getHeaderLine(GUZZLE_LOCATION);
		} catch (GuzzleException $ex) {
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($ex);

			if (Response::HTTP_CONFLICT === $ex->getCode()) {
				throw new DuplicateEntryException(
					'add_device',
					'Device with this name already exists',
					'modal-error',
					Response::HTTP_CONFLICT
				);
			}

			throw new HttpException(
				$ex->getCode(),
				'Add device failed, please try again or contact administrator'
			);
		}

		return new JsonResponse($location, Response::HTTP_OK);
	}

	/**
	 * @param $id
	 *
	 * @return JsonResponse
	 *
	 * @throws Exception
	 */
	public function getDeviceClientSecret($id): JsonResponse
	{
		$uri = GUZZLE_CLIENT_SLASH . $id . '/client-secret';

		try {
			$response = $this->getKeycloakDevicesClient()->request(
				'GET',
				$uri
			);

			$secret = json_decode($response->getBody(), true);
		} catch (GuzzleException $ex) {
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($ex);

			throw new HttpException(
				$ex->getCode(),
				'Add device failed, please try again or contact administrator'
			);
		}

		return new JsonResponse($secret, Response::HTTP_OK);
	}

	public function createToken($clientId, $clientSecret): JsonResponse
	{
		$oidc = new OpenIDConnectClient(
			getenv('DEVICES_KEYCLOAK_AUTH_URL'),
			$clientId,
			$clientSecret
		);

		$oidc->providerConfigParam([
			'token_endpoint' => getenv('DEVICES_KEYCLOAK_TOKEN_URL'),
		]);

		$token = $oidc->requestClientCredentialsToken();

		return new JsonResponse($token, Response::HTTP_OK);
	}

	public function updateDevice($id, $expireTimestamp): JsonResponse
	{
		$body = $this->getDeviceById($id);

		$bodyContent = json_decode($body->getContent());

		$bodyContent->description = json_encode([GUZZLE_EXPIRE => $expireTimestamp]);

		$uri = GUZZLE_CLIENT_SLASH . $id;

		try {
			$response = $this->getKeycloakDevicesClient()->request(
				'PUT',
				$uri,
				['body' => json_encode($bodyContent)]
			);
		} catch (GuzzleException $ex) {
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($ex);

			throw new HttpException(
				$ex->getCode(),
				'Update token failed, please try again or contact administrator'
			);
		}

		return new JsonResponse($bodyContent, $response->getStatusCode());
	}

	public function getDeviceById($id): JsonResponse
	{
		$uri = GUZZLE_CLIENT_SLASH;

		try {
			$response = $this->getKeycloakDevicesClient()->request(
				'GET',
				$uri . $id
			);

			$return = json_decode($response->getBody());
		} catch (GuzzleException $ex) {
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($ex);

			throw new HttpException(
				$ex->getCode(),
				'Get device failed, please try again or contact administrator'
			);
		}

		return new JsonResponse($return, Response::HTTP_OK);
	}

	/**
	 * Delete a device.
	 *
	 * @param string $id
	 *
	 * @return JsonResponse
	 *
	 * @throws Exception
	 */
	public function deleteDevice($id): JsonResponse
	{
		$uri = GUZZLE_CLIENT_SLASH . $id;

		try {
			$this->getKeycloakDevicesClient()->request(
				GUZZLE_DELETE,
				$uri
			);
		} catch (GuzzleException $ex) {
			$this->logDevelopersErrors($ex);
			$this->logger->error(GUZZLE_NO_HTTP_RESPONSE_ERROR . __METHOD__);
			$this->checkAuthorizationException($ex);

			throw new HttpException(
				$ex->getCode(),
				'Device delete failed, please try again or contact administrator'
			);
		}

		return new JsonResponse(true, Response::HTTP_OK);
	}
}
