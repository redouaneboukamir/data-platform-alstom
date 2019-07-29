<?php

/**
 * Created by PhpStorm.
 * User: ltochapn
 * Date: 29/11/2018
 * Time: 14:30.
 */

namespace App\Controller;

use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class KeyCloakAuthController extends AbstractController
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
		// ** if you want to *authenticate* the user, then
		// leave this method blank and create a Guard authenticator
		// (read below)
		$userRole = $this->getUser()->getRoles();
		dump($userRole);
		if (
			$userRole == ['ROLE_ALSTOM_ADMIN'] || $userRole == ['ROLE_ALSTOM_DESIGN'] || $userRole == ['ROLE_ALSTOM_MAINTENER']
			||  $userRole == ['ROLE_ALSTOM_COMMISSIONER'] ||  $userRole == ['ROLE_ALSTOM_SERVICE']
		) {
			return $this->redirectToRoute('alstom.home');
		} else if ($userRole == ['ROLE_CLIENT_USER'] || $userRole == ['ROLE_CLIENT_ADMIN']) {
			return $this->redirectToRoute('client.home');
		}
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
}
