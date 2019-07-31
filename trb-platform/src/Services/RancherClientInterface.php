<?php
/**
 * Created by PhpStorm.
 * User: ltochapn
 * Date: 02/01/2019
 * Time: 10:25.
 */

namespace App\Services;

use GuzzleHttp\Client;
use Symfony\Component\HttpFoundation\JsonResponse;

interface RancherClientInterface
{
	/**
	 * @return Client
	 */
	public function getRancherClient(): Client;

	public function getRancherPycli(): Client;

	public function getAllServices($rancherEnv, $isCustom = false): array;

	public function deleteKubernetesPod($env, $id): bool;

	public function getDns($rancherEnv): array;

	public function getCustomDns(): array;

	public function getCustomServices(): array;

	public function uploadAndDeployDockerImage($file, $params): JsonResponse;

	public function export($image, $filePath);

	public function getPrometheusCli(): Client;

	public function getNifiMetrics($instance = 'nifi-mdp', $status = 'transferred');

	public function getMinioMetrics();
}
