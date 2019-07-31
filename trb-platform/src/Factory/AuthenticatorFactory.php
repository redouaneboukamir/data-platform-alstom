<?php
/**
 * Created by PhpStorm.
 * User: ltochapn
 * Date: 20/11/2018
 * Time: 14:25.
 */

namespace App\Factory;

use App\Security\KeycloakProvider;
use App\Security\MockProvider;
use App\Security\ProviderInterface;
use App\Services\HttpClientKeycloakInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class AuthenticatorFactory
{
	const KEYCLOAK_MOCK = 'mock';

	public static function switchService(SessionInterface $session, HttpClientKeycloakInterface $httpClientKeycloak): ProviderInterface
	{
		$provider = new KeycloakProvider();

		if (self::KEYCLOAK_MOCK === getenv('KEYCLOAK_SERVICE')) {
			$provider = new MockProvider($session, $httpClientKeycloak);
		}

		return $provider;
	}
}
