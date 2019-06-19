<?php
/**
 * Created by PhpStorm.
 * User: ltochapn
 * Date: 20/11/2018
 * Time: 14:25.
 */

namespace App\Factory;

use App\Services\HttpClientKeycloak;
use App\Services\HttpClientKeycloakInterface;
use App\Services\HttpClientKeycloakMock;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;

class ManagerFactory
{
	const KEYCLOAK_MOCK = 'mock';

	public static function switchService(ContainerInterface $container, LoggerInterface $logger): HttpClientKeycloakInterface
	{
		$serviceKeycloak = new HttpClientKeycloak($container, $logger);

		if (self::KEYCLOAK_MOCK === getenv('KEYCLOAK_SERVICE')) {
			$serviceKeycloak = new HttpClientKeycloakMock($container);
		}

		return $serviceKeycloak;
	}
}
