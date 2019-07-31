<?php
/**
 * Created by PhpStorm.
 * User: ltochapn
 * Date: 19/12/2018
 * Time: 10:04.
 */

namespace App\Controller;

use App\Helper\Utility;
use App\Services\HttpClientKeycloakInterface;
use App\Services\RancherClientInterface;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{
	/**
	 * @var HttpClientKeycloakInterface
	 */
	protected $httpClientKeycloak;

	/**
	 * @var RancherClientInterface
	 */
	protected $httpClientRancher;

	/**
	 * @var Utility
	 */
	protected $utility;

	protected $logger;

	/**
	 * MainController constructor.
	 *
	 * @param HttpClientKeycloakInterface $httpClientKeycloak
	 * @param RancherClientInterface      $httpClientRancher
	 * @param Utility                     $utility
	 */
	public function __construct(
		HttpClientKeycloakInterface $httpClientKeycloak,
		RancherClientInterface $httpClientRancher,
		Utility $utility,
		LoggerInterface $logger
	) {
		$this->logger = $logger;
		$this->httpClientKeycloak = $httpClientKeycloak;
		$this->httpClientRancher = $httpClientRancher;
		$this->utility = $utility;
	}

	
}
