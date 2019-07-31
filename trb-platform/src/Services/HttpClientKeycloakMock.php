<?php

namespace App\Services;

use GuzzleHttp\Client;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;

class HttpClientKeycloakMock
{
	const ADMINUSER = 'admin';

	public $servicesAvailaible;

	public $services;

	public $groups;

	public $profiles;

	public $users;

	private $session;

	private $user;

	private $pass;

	public function __construct($session)
	{
		$this->session = $session;

		$this->user = 'dev';

		$this->pass = 'dev';

		$this->servicesAvailaible = [
			[
				'label' => 'minio',
				'icon' => 'fas fa-cloud-upload-alt',
				'url' => 'http://13.93.32.192:9000/minio',
				'name' => 'minio',
				'id' => '1',
			],
			[
				'label' => 'nifi',
				'icon' => 'fas fa-cloud-upload-alt',
				'url' => 'http://10.230.1.8:8080/nifi',
				'name' => 'nifi',
				'id' => '2',
			],
			[
				'label' => 'Analytics',
				'icon' => 'fas fa-cloud-upload-alt',
				'url' => 'https://analytics.smart-mobility.alstom.com/',
				'name' => 'Analytics',
				'id' => '3',
			],
			[
				'label' => 'Docker',
				'icon' => 'fas fa-cloud-upload-alt',
				'url' => 'service_url_4',
				'name' => 'Docker',
				'id' => '4',
			],
			[
				'label' => 'Kubernetes',
				'icon' => 'fas fa-cloud-upload-alt',
				'url' => 'service_url_5',
				'name' => 'Kubernetes',
				'id' => '5',
			],
			[
				'label' => 'aws',
				'icon' => 'fas fa-cloud-upload-alt',
				'url' => 'service_url_6',
				'name' => 'aws',
				'id' => '6',
			],
			[
				'label' => 'Online Documentation',
				'icon' => 'fas fa-cloud-upload-alt',
				'url' => 'http://online-documentation.com/',
				'name' => 'Online-Documentation',
				'id' => '7',
			],
		];

		if (self::ADMINUSER === $this->session->get('userProfil')) {
			$this->services = [
				[
					'label' => 'minio',
					'icon' => 'fas fa-cloud-upload-alt',
					'url' => 'http://13.93.32.192:9000/minio',
					'name' => 'minio',
					'id' => '1',
				],
				[
					'label' => 'nifi',
					'icon' => 'fas fa-cloud-upload-alt',
					'url' => 'http://10.230.1.8:8080/nifi',
					'name' => 'nifi',
					'id' => '2',
				],
				[
					'label' => 'Analytics',
					'icon' => 'fas fa-cloud-upload-alt',
					'url' => 'https://analytics.smart-mobility.alstom.com/',
					'name' => 'Analytics',
					'id' => '3',
				],
				[
					'label' => 'Docker',
					'icon' => 'fas fa-cloud-upload-alt',
					'url' => 'service_url_4',
					'name' => 'Docker',
					'id' => '4',
				],
				[
					'label' => 'Kubernetes',
					'icon' => 'fas fa-cloud-upload-alt',
					'url' => 'service_url_5',
					'name' => 'Kubernetes',
					'id' => '5',
				],
				[
					'label' => 'aws',
					'icon' => 'fas fa-cloud-upload-alt',
					'url' => 'service_url_6',
					'name' => 'aws',
					'id' => '6',
				],
				[
					'label' => 'Online Documentation',
					'icon' => 'fas fa-cloud-upload-alt',
					'url' => 'http://online-documentation.com/',
					'name' => 'Online-Documentation',
					'id' => '7',
				],
			];
		} else {
			$this->services = [
				[
					'label' => 'minio',
					'icon' => 'fas fa-cloud-upload-alt',
					'url' => 'http://13.93.32.192:9000/minio',
					'name' => 'minio',
					'id' => '1',
				],
				[
					'label' => 'nifi',
					'icon' => 'fas fa-cloud-upload-alt',
					'url' => 'http://10.230.1.8:8080/nifi',
					'name' => 'nifi',
					'id' => '2',
				],
				[
					'label' => 'Online Documentation',
					'icon' => 'fas fa-cloud-upload-alt',
					'url' => 'http://online-documentation.com/',
					'name' => 'Online-Documentation',
					'id' => '7',
				],
			];
		}

		$this->groups = [
			'3622b3e8-c2f5-41fb-a47e-f23bcbcec086' => [
				'id' => '3622b3e8-c2f5-41fb-a47e-f23bcbcec086',
				'name' => 'Admin',
				'profiles' => [
					'grafana' => 'grafana',
					'minio' => 'minio',
					'nifi' => 'nifi',
					'portail-admin' => 'portail-admin',
				],
			],
			'5c662feb-0917-47c0-be60-a121178fa3b2' => [
				'id' => '5c662feb-0917-47c0-be60-a121178fa3b2',
				'name' => 'client A',
				'profiles' => [
					'nifi' => 'nifi',
					'minio' => 'minio',
				],
			],
			'ac5bbb07-f8e9-430f-a837-40bfd6dbb017' => [
				'id' => 'ac5bbb07-f8e9-430f-a837-40bfd6dbb017',
				'name' => 'dev',
				'profiles' => [
					'portail-admin' => 'portail-admin',
				],
			],
			'76afe4d1-8986-4141-8f53-d18352e6e364' => [
				'id' => '76afe4d1-8986-4141-8f53-d18352e6e364',
				'name' => 'mdp-admin',
				'profiles' => [
					'portail-admin' => 'portail-admin',
				],
			],
			'6a7628c6-0d18-4278-9727-68bd4b767452' => [
				'id' => '6a7628c6-0d18-4278-9727-68bd4b767452',
				'name' => 'userAdvanced',
				'profiles' => [
					'advanced user' => 'advanced user',
				],
			],
			'e90b3d88-5642-498f-ad6c-066ebb946f71' => [
				'id' => 'e90b3d88-5642-498f-ad6c-066ebb946f71',
				'name' => 'visualize',
				'profiles' => [
					'Tableau' => 'Tableau',
					'grafana' => 'grafana',
				],
			],
		];

		$this->profiles = [
			'c9d5807a-3a79-48e0-9e78-a5c8496ea426' => [
				'id' => 'c9d5807a-3a79-48e0-9e78-a5c8496ea426',
				'name' => 'advanced user',
				'services' => [
					'minio' => 'minio',
					'nifi' => 'nifi',
					'notebook' => 'notebook',
					'container' => 'container',
				],
			],
			'9bdc1fc0-22b2-4287-97cc-3d263602dc9e' => [
				'id' => '9bdc1fc0-22b2-4287-97cc-3d263602dc9e',
				'name' => 'grafana',
				'services' => [
					'grafana' => 'grafana',
				],
			],
			'a581c1c8-e8b1-43e2-873c-fef137eb990d' => [
				'id' => 'a581c1c8-e8b1-43e2-873c-fef137eb990d',
				'name' => 'minio',
				'services' => [
					'minio' => 'minio',
				],
			],
			'b23f68d7-f22a-439d-aaa8-320c66d60852' => [
				'id' => 'b23f68d7-f22a-439d-aaa8-320c66d60852',
				'name' => 'nifi',
				'services' => [
					'nifi' => 'nifi',
				],
			],
			'6a7628c6-0d18-4278-9727-68bd4b767452' => [
				'id' => '6a7628c6-0d18-4278-9727-68bd4b767452',
				'name' => 'userAdvanced',
				'services' => [
					'advanced user' => 'advanced user',
				],
			],
			'92a80494-0d5a-4ee0-860b-ebdd53231e48' => [
				'id' => '92a80494-0d5a-4ee0-860b-ebdd53231e48',
				'name' => 'portail-admin',
				'services' => ['profiles', 'users', 'groups'],
			],
			'1f1e6a2d-1cd1-465c-81f4-b0fdc40c7ed7' => [
				'id' => '1f1e6a2d-1cd1-465c-81f4-b0fdc40c7ed7',
				'name' => 'Tableau',
				'services' => [
					'Tableau Server' => 'Tableau Server',
					'Tableau Reader' => 'Tableau Reader',
				],
			],
		];

		$this->users = [
			'c36ec097-9991-4a38-ae1a-8ebd49e6f340' => [
				'id' => 'c36ec097-9991-4a38-ae1a-8ebd49e6f340',
				'username' => 'admin',
				'password' => 'password',
				'group' => 'admin',
			],
			'f7614e51-8224-4bfb-b731-4c87e996c48d' => [
				'id' => 'f7614e51-8224-4bfb-b731-4c87e996c48d',
				'username' => 'dev',
				'password' => 'password',
				'group' => 'dev',
			],
			'6abd0e56-f91a-43c9-8d50-ea12d7afaf52' => [
				'id' => '6abd0e56-f91a-43c9-8d50-ea12d7afaf52',
				'username' => 'maurice',
				'password' => 'password',
				'group' => 'userAdvanced',
			],
			'e6c8da51-3e11-41bf-894d-615b4ac97c48' => [
				'id' => 'e6c8da51-3e11-41bf-894d-615b4ac97c48',
				'username' => 'user1',
				'password' => 'password',
				'group' => 'client A',
			],
			'1f7c613c-b4dd-47b7-9fc9-e22690401c9a' => [
				'id' => '1f7c613c-b4dd-47b7-9fc9-e22690401c9a',
				'username' => 'user2',
				'group' => 'visualize',
				'password' => 'password',
			],
		];
	}

	/***** TOKEN MANAGEMENT *****/

	public function getAccessToken(): Client
	{
		//Not use in mock
		return new Client();
	}

	/***** USER GROUPS MANAGEMENT *****/

	public function getGroups(): array
	{
		return $this->session->get('initialsData')['groups'];
	}

	public function getProfilesFromGroup($id): array
	{
		return [];
	}

	public function getGroup($id): JsonResponse
	{
		$groups = $this->getGroups();
		foreach ($groups as $group) {
			if (in_array($id, $group)) {
				return new JsonResponse($group, Response::HTTP_OK);
			}
		}

		throw new ResourceNotFoundException('Group not found');
	}

	public function addGroup($group, $profiles = null): JsonResponse
	{
		$initials = $this->session->get('initialsData');

		$initials['groups'][$group['id']] = $group;
		$this->session->set('initialsData', $initials);

		return new JsonResponse(true, Response::HTTP_OK);
	}

	public function updateGroup($group, $profiles = null): JsonResponse
	{
		$initials = $this->session->get('initialsData');
		$initials['groups'][$group['currentGroup']['id']] = $group;
		$this->session->set('initialsData', $initials);

		return new JsonResponse(true, Response::HTTP_OK);
	}

	public function deleteGroup($id): JsonResponse
	{
		$groups = $this->getGroups();

		$response = $this->getGroup($id);
		if ($response) {
			if (Response::HTTP_OK === $response->getStatusCode()) {
				unset($groups[$id]);
				$initials = $this->session->get('initialsData');
				$initials['groups'] = $groups;
				$this->session->set('initialsData', $initials);

				return new JsonResponse(true, Response::HTTP_OK);
			}
		}

		return new JsonResponse(false, Response::HTTP_NOT_FOUND);
	}

	/***** PROFILES MANAGEMENT *****/

	public function getProfiles(): array
	{
		return $this->session->get('initialsData')['profiles'];
	}

	public function getProfile($id): JsonResponse
	{
		$profiles = $this->getProfiles();
		foreach ($profiles as $profile) {
			if (in_array($id, $profile)) {
				return new JsonResponse($profile, Response::HTTP_OK);
			}
		}

		throw new ResourceNotFoundException('User not found');
	}

	public function getServicesFromProfil($id): array
	{
		return [];
	}

	public function getProfileNameById($id): string
	{
		return '';
	}

	public function addProfile($profile, $services = null): JsonResponse
	{
		$initials = $this->session->get('initialsData');
		$initials['profiles'][$profile['id']] = $profile;
		$this->session->set('initialsData', $initials);

		return new JsonResponse(true, Response::HTTP_OK);
	}

	public function updateProfile($profile, $services = null): JsonResponse
	{
		$initials = $this->session->get('initialsData');
		$initials['profiles'][$profile['currentProfile']['id']] = $profile;
		$this->session->set('initialsData', $initials);

		return new JsonResponse(true, Response::HTTP_OK);
	}

	public function deleteProfile($id): JsonResponse
	{
		$profiles = $this->getProfiles();

		$response = $this->getProfile($id);
		if ($response) {
			if (Response::HTTP_OK === $response->getStatusCode()) {
				unset($profiles[$id]);
				$initials = $this->session->get('initialsData');
				$initials['profiles'] = $profiles;
				$this->session->set('initialsData', $initials);

				return new JsonResponse(true, Response::HTTP_OK);
			}
		}

		return new JsonResponse(false, Response::HTTP_NOT_FOUND);
	}

	/***** USER  MANAGEMENT *****/

	public function getUsers(): array
	{
		return $this->session->get('initialsData')['users'];
	}

	public function getGroupOfUser($id): array
	{
		return '';
	}

	public function getUser($id): JsonResponse
	{
		$users = $this->getUsers();
		foreach ($users as $user) {
			if (in_array($id, $user)) {
				return new JsonResponse($user, Response::HTTP_OK);
			}
		}

		throw new ResourceNotFoundException('User not found');
	}

	public function addUser($user, $groups = null): JsonResponse
	{
		$initials = $this->session->get('initialsData');

		$initials['users'][$user['id']] = $user;
		$this->session->set('initialsData', $initials);

		return new JsonResponse(true, Response::HTTP_OK);
	}

	public function updateUser($user, $groups = null): JsonResponse
	{
		$initials = $this->session->get('initialsData');
		$initials['users'][$user['currentUser']['id']] = $user;
		$this->session->set('initialsData', $initials);

		return new JsonResponse(true, Response::HTTP_OK);
	}

	public function deleteUser($id): JsonResponse
	{
		$users = $this->getUsers();

		$response = $this->getUser($id);
		if ($response) {
			if (Response::HTTP_OK === $response->getStatusCode()) {
				unset($users[$id]);
				$initials = $this->session->get('initialsData');
				$initials['users'] = $users;
				$this->session->set('initialsData', $initials);

				return new JsonResponse(true, Response::HTTP_OK);
			}
		}

		return new JsonResponse(false, Response::HTTP_NOT_FOUND);
	}

	/***** SECURITY *****/

	public $usersArray = [
		'admin' => 'admin',
		'dev' => 'dev',
	];

	public function defineUserPermissions($username)
	{
		if ('admin' === $username) {
			$this->user = 'admin';
			$this->pass = 'admin';
		}
	}

	public function loadUser($username): JsonResponse
	{
		$this->defineUserPermissions($username);

		if ($username === $this->user) {
			$this->session->set('userProfil', $username);

			return new JsonResponse([
				'user' => [
					'username' => $this->user,
				],
			], Response::HTTP_OK);
		}

		return new JsonResponse(false, Response::HTTP_NOT_FOUND);
	}

	public function authenticate($credentials): JsonResponse
	{
		if ($credentials['password'] === $this->pass) {
			return new JsonResponse(['status' => true], Response::HTTP_OK);
		}

		return new JsonResponse(['status' => false], Response::HTTP_NOT_FOUND);
	}

	public function getAllServices(): array
	{
		return $this->servicesAvailaible;
	}

	public function getUserServices($username): array
	{
		return $this->services;
	}

	/***** COMMUN *****/

	public function filterServices(): array
	{
		$matchServices = [];
		foreach ($this->servicesAvailaible as $availableService) {
			foreach ($this->services as $service) {
				if ($availableService == $service) {
					$matchServices[] = $service;
				}
			}
		}

		return $matchServices;
	}

	public function intializeData(): array
	{
		return [
			'users' => $this->users,
			'groups' => $this->groups,
			'profiles' => $this->profiles,
			'services' => $this->servicesAvailaible,
		];
	}

	public function generateRandom($uniqueUsername): string
	{
		return md5(uniqid($uniqueUsername, true));
	}

	public function addServiceClient($name): JsonResponse
	{
		return null;
	}

	public function deleteClient($id)
	{
		return null;
	}
}
