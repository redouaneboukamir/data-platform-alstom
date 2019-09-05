<?php

/**
 * Created by PhpStorm.
 * User: ltochapn
 * Date: 29/11/2018
 * Time: 14:30.
 */

namespace App\Controller;

use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Services\HttpClientKeycloakMock;
use App\Form\User\AddFormType;
use App\Form\User\DeleteFormType;
use Symfony\Component\HttpFoundation\Response;

class KeyCloakAuthController extends MainController
{
	/**
	 * @param ClientRegistry $clientRegistry
	 *
	 * @return \Symfony\Component\HttpFoundation\RedirectResponse
	 * @Route("/", name="connect_keycloack_start")
	 */
	public function connectAction(ClientRegistry $clientRegistry)
	{
		return $clientRegistry
			->getClient('keycloak')
			->redirect([
				'public_profile' => '',
			]);
	}

	/**
	 * @Route("/check", name="connect_keycloak_check")
	 */
	public function connectCheckAction()
	{
		$ROLE_ALSTOM_ADMIN = false;
		$ROLE_ALSTOM_DESIGN = false;
		$ROLE_ALSTOM_MAINTENER = false;
		$ROLE_ALSTOM_COMMISSIONER = false;
		$ROLE_ALSTOM_SERVICE = false;
		$ROLE_CLIENT_USER = false;
		$ROLE_CLIENT_ADMIN = false;
		// ** if you want to *authenticate* the user, then
		// leave this method blank and create a Guard authenticator
		// (read below)
		$userRole = $this->getUser()->getRoles();

		foreach ($userRole as $key => $value) {

			switch ($value) {
				case 'ROLE_ALSTOM_ADMIN':
					$ROLE_ALSTOM_ADMIN = true;
					break;
				case 'ROLE_ALSTOM_DESIGN':
					$ROLE_ALSTOM_DESIGN = true;
					break;
				case 'ROLE_ALSTOM_MAINTENER':
					$ROLE_ALSTOM_MAINTENER = true;
					break;
				case 'ROLE_ALSTOM_COMMISSIONER':
					$ROLE_ALSTOM_COMMISSIONER = true;
					break;
				case 'ROLE_ALSTOM_SERVICE':
					$ROLE_ALSTOM_SERVICE = true;
					break;
				case 'ROLE_CLIENT_USER':
					$ROLE_CLIENT_USER = true;
					break;
				case 'ROLE_CLIENT_ADMIN':
					$ROLE_CLIENT_ADMIN = true;
					break;

				default:
					# code...
					break;
			}
		}

		if (
			$ROLE_ALSTOM_ADMIN || $ROLE_ALSTOM_DESIGN || $ROLE_ALSTOM_MAINTENER
			||  $ROLE_ALSTOM_COMMISSIONER ||  $ROLE_ALSTOM_SERVICE
		) {
			return $this->redirectToRoute('alstom.home');
		} else if ($ROLE_CLIENT_USER || $ROLE_CLIENT_ADMIN) {
			return $this->redirectToRoute('client.home');
		}
		// if (
		// 	$userRole == ['ROLE_ALSTOM_ADMIN'] || $userRole == ['ROLE_ALSTOM_DESIGN'] || $userRole == ['ROLE_ALSTOM_MAINTENER']
		// 	||  $userRole == ['ROLE_ALSTOM_COMMISSIONER'] ||  $userRole == ['ROLE_ALSTOM_SERVICE']
		// ) {
		// 	return $this->redirectToRoute('alstom.home');
		// } else if ($userRole == ['ROLE_CLIENT_USER'] || $userRole == ['ROLE_CLIENT_ADMIN']) {
		// 	return $this->redirectToRoute('client.home');
		// } else {
		// 	$this->redirectToRoute('connect_keycloack_start');
		// }
	}

	/**
	 * @Route("/logout", name="app_logout_1")
	 */
	public function logout(Request $request)
	{
		$this->get('security.token_storage')->setToken(null);
		$request->getSession()->invalidate();
		$redirect = getenv('OAUTH_KEYCLOAK_LOGOUT') . 'http://' . $request->server->get('HTTP_HOST');

		return $this->redirect($redirect);
	}


	/**
	 * @Route("/admin/users", name="users")
	 */
	public function users()

	{

		try {
			$users = $this->httpClientKeycloak->getUsers();
			dump($users);
		} catch (HttpException $e) {
			$this->get(KEY_SESSION)->getFlashBag()->clear();
			$this->addFlash(KEY_ERROR, $e->getMessage());

			return $this->redirectToRoute(ROUTE_HOME);
		} catch (TokenAccessException $e) {
			$users = $this->httpClientKeycloak->getUsers();
		}

		return $this->render('user/view.html.twig', [
			KEY_ENTITY_ARRAY => $users,
			'current_menu' => 'fleet'
		]);
	}
	/**
	 * @Route("/admin/user/add", name="user_add")
	 */
	public function add(Request $request)
	{
		try {
			$users = $this->httpClientKeycloak->getUsers();
		} catch (HttpException $e) {
			$this->get(KEY_SESSION)->getFlashBag()->clear();
			$this->addFlash(KEY_ERROR, $e->getMessage());

			return $this->redirectToRoute(KEY_USERS);
		} catch (TokenAccessException $e) {
			$users = $this->httpClientKeycloak->getUsers();
		}

		$groups = $this->httpClientKeycloak->getGroups();

		$groupsSelection = $this->utility->arrayFormatForSelection($groups);
		$form = $this->createForm(AddFormType::class, [KEY_GROUPS => $groupsSelection]);

		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$data = $form->getData();

			if ($this->httpClientKeycloak instanceof HttpClientKeycloakMock) {
				$data[KEY_ID] = $this->httpClientKeycloak->generateRandom($data['username']);
			}

			try {
				$response = $this->httpClientKeycloak->addUser($data);
				if (Response::HTTP_OK == $response->getStatusCode()) {
					$this->addFlash(KEY_SUCCESS, 'User has been created successfully');
					return $this->redirectToRoute('users');
				}
			} catch (HttpException $e) {
				$this->get(KEY_SESSION)->getFlashBag()->clear();
				$this->addFlash(KEY_ERROR, $e->getMessage());

				return $this->redirectToRoute('user_add');
			}

			return $this->redirectToRoute(KEY_USERS);
		}

		return $this->render('user/add.html.twig', [
			KEY_ENTITY_ARRAY => $users,
			KEY_FORM => $form->createView(),
			'current_menu' => 'fleet'
		]);
	}
	/**
	 * @Route("/admin/user/{id}/edit", name="user_edit")
	 */
	public function edit(Request $request, $id)
	{
		try {
			$users = $this->httpClientKeycloak->getUsers();
		} catch (HttpException $e) {
			$this->addFlash(KEY_ERROR, $e->getMessage());

			return $this->redirectToRoute(KEY_USERS);
		} catch (TokenAccessException $e) {
			$users = $this->httpClientKeycloak->getUsers();
		}

		$userResponse = $this->httpClientKeycloak->getUser($id);
		$groups = $this->httpClientKeycloak->getGroups();
		if ($userResponse) {
			$user = json_decode($userResponse->getContent(), true);
		}
		$groupsSelection = $this->utility->arrayFormatForSelection($groups);
		$initialGroup = $user['group'];
		$form = $this->createForm(AddFormType::class, [
			KEY_GROUPS => $groupsSelection,
			'currentUser' => $user,
			'disabled' => true,
		]);

		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$data = $form->getData();
			//Put Id user in data
			$data[KEY_ID] = $id;
			//Put the id of the initial group
			$data['initialGroup'] = $initialGroup;

			try {
				$this->httpClientKeycloak->updateUser($data);
				$this->addFlash(KEY_SUCCESS, 'User updated successfully');
			} catch (HttpException $e) {
				$this->addFlash(KEY_MODAL_ERROR, $e->getMessage());

				return $this->redirectToRoute('user_edit', [KEY_ID => $id]);
			}

			return $this->redirectToRoute(KEY_USERS);
		}

		return $this->render('user/edit.html.twig', [
			KEY_ENTITY_ARRAY => $users,
			'current_menu' => 'fleet',
			KEY_FORM => $form->createView(),
		]);
	}

	/**
	 * @Route("/admin/user/{id}/delete", name="user_delete")
	 *
	 * @param $id
	 * @param Request $request
	 *
	 * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
	 *
	 * @throws HttpException
	 */
	public function delete($id, Request $request)
	{
		$form = $this->createForm(DeleteFormType::class);
		$form->handleRequest($request);

		try {
			$users = $this->httpClientKeycloak->getUsers();
		} catch (HttpException $e) {
			$this->addFlash(KEY_ERROR, 'User not found');

			return $this->redirectToRoute(KEY_USERS);
		} catch (TokenAccessException $e) {
			$users = $this->httpClientKeycloak->getUsers();
		}

		try {
			$response = $this->httpClientKeycloak->getUser($id);
			if ($response && Response::HTTP_OK === $response->getStatusCode()) {
				$user = json_decode($response->getContent());
			}
			if ($form->isSubmitted() && $form->isValid()) {
				$this->httpClientKeycloak->deleteUser($id);
				$this->addFlash(KEY_SUCCESS, 'User deleted successfully');
				return $this->redirectToRoute(KEY_USERS);
			}
		} catch (HttpException $e) {
			$this->addFlash(KEY_ERROR, 'User not found');

			return $this->redirectToRoute(KEY_USERS);
		}

		return $this->render('user/delete.html.twig', [
			KEY_ENTITY_ARRAY => $users,
			'userTodelete' => $user,
			'current_menu' => 'fleet',
			KEY_FORM => $form->createView(),
		]);
	}
}
