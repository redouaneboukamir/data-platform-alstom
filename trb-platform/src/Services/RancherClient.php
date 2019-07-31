<?php
/**
 * Created by PhpStorm.
 * User: ltochapn
 * Date: 02/01/2019
 * Time: 10:27.
 */

namespace App\Services;

use App\Helper\Utility;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class RancherClient implements RancherClientInterface
{
	private $logger;
	private $utility;

	public function __construct(LoggerInterface $logger, Utility $utility)
	{
		$this->logger = $logger;
		$this->utility = $utility;
	}

	public function getRancherClient(): Client
	{
		$token = getenv('RANCHER_BEARER_TOKEN');
		$endpoint = getenv('RANCHER_IP') . '/v3';

		return new Client([
			'base_uri' => $endpoint,
			'headers' => [
				'Authorization' => "Bearer {$token}",
				'Content-Type' => 'application/json',
				'Accept' => 'application/json',
			],
			'verify' => false,
		]);
	}

	/**
	 * Get client for python API to interact with Rancher api.
	 *
	 * @return Client
	 */
	public function getRancherPycli(): Client
	{
		$endpoint = getenv('API_PYTHON_ENDPOINT');

		return new Client([
			'base_uri' => $endpoint,
			'headers' => [
				'Content-Type' => 'multipart/form-data',
				'Accept' => 'application/json',
			],
			'verify' => false,
		]);
	}

	public function getPrometheusCli(): Client
	{
		return new Client([
			'base_uri' => getenv('PROMETHEUS_SERVER_ENDPOINT'),
			'headers' => [
				'Content-Type' => 'multipart/form-data',
				'Accept' => 'application/json',
			],
			'verify' => false,
		]);
	}

	/**
	 * Upload and deploy any docker image.
	 *
	 * @param $file
	 * @param $params
	 *
	 * @return JsonResponse
	 *
	 * @throws HttpException
	 */
	public function uploadAndDeployDockerImage($file, $params): JsonResponse
	{
		$client = $this->getRancherPycli();

		try {
			$response = $client->request(
				'POST',
				'/docker/upload',
				[
					'multipart' => [
						[
							'name' => 'file',
							'contents' => fopen($file['fullPathName'], 'r'),
							'filename' => $file['fullName'],
						],
						[
							'name' => 'name',
							'contents' => $params['name'],
						],
						[
							'name' => 'port',
							'contents' => $params['port'],
						],
						[
							'name' => 'id_keycloak',
							'contents' => $params['keycloak_service_id'],
						],
						[
							'name' => 'enable_external_access',
							'contents' => $params['enable_external_access'],
						],
					],
				]
			);
			$response = new JsonResponse(
				json_decode($response->getBody()->getContents(), $response->getStatusCode()),
				$response->getStatusCode()
			);
		} catch (GuzzleException $e) {
			$this->logger->critical($e->getMessage());

			throw new HttpException($e->getCode(), $e->getMessage());
		}

		return $response;
	}

	/**
	 * @param $rancherEnv
	 * @param bool $isCustom
	 *
	 * @return array
	 *
	 * @throws \Exception
	 */
	public function getAllServices($rancherEnv, $isCustom = false): array
	{
		try {
			$response = $this->getRancherClient()->request(
				'GET',
				'/v3/projects/' .
				getenv('RANCHER_CLUSTER_ID') .
				':' . $rancherEnv . '/workloads'
			);
			$services = [];
			if (Response::HTTP_OK === $response->getStatusCode()) {
				$arrayResp = json_decode($response->getBody()->getContents(), true);
				$data = $arrayResp['data'];
				foreach ($data as $service) {
					if ('daemonSet' === $service['type'] ||
						'statefulSet' === $service['type'] ||
						'deployment' === $service['type'] ||
						'replicaSet' === $service['type']) {
						$podsNumber = 0;
						if ('daemonSet' === $service['type']) {
							$podsNumber = $service['daemonSetStatus']['numberReady'];
						}
						if ('statefulSet' === $service['type']) {
							$podsNumber = $service['statefulSetStatus']['readyReplicas'];
						}
						if ('deployment' === $service['type']) {
							$podsNumber = $service['deploymentStatus']['readyReplicas'];
						}
						if ('replicaSet' === $service['type']) {
							$podsNumber = $service['replicaSetStatus']['readyReplicas'];
						}

						$haveCustomServices = $isCustom ? true : getenv('CUSTOM_NAMESPACE_ID') !== $service['namespaceId'];
						$serviceData = [
							'name' => $service['name'],
							'state' => $service['state'],
							'podsnumber' => $podsNumber,
							'app' => isset($service['labels']['app']) ? $service['labels']['app'] : '',
							'release' => isset($service['labels']['release']) ? $service['labels']['release'] : '',
							'version' => isset($service['labels']['version']) ? $service['labels']['version'] : '',
							'type' => $service['type'],
							'namespace' => $service['namespaceId'],
							'projectId' => $service['projectId'],
							'keycloakId' => isset($service['labels']['id_keycloak']) ? $service['labels']['id_keycloak'] : null,
							'registryName' => $service['containers'][0]['image'],
						];

						if (isset($service['labels']['app']) && $haveCustomServices && !isset($service['labels']['component'])) {
							$services[$service['labels']['app']] = $serviceData;
						} elseif (isset($service['labels']['app']) && $haveCustomServices && isset($service['labels']['component'])) {
							$serviceData['app'] = $service['labels']['app'] . '-' . $service['labels']['component'];
							$services[$serviceData['app']] = $serviceData;
						}
					}
				}
			}

			//Add port mapping
			$dns = $this->getDns($rancherEnv);
			$services = $this->addPortRedirectionValue($services, $dns);
		} catch (GuzzleException $e) {
			$this->logger->error('Code : ' . $e->getCode() . ' message : ' . $e->getMessage());

			throw new \Exception('Fail to get services in Rancher, please try again or contact administrator');
		}

		return $services;
	}

	/**
	 * @return array
	 *
	 * @throws \Exception
	 */
	public function getCustomServices(): array
	{
		try {
			$response = $this->getRancherClient()->request(
				'GET',
				'/v3/projects/' .
				getenv('RANCHER_CLUSTER_ID') .
				':' . getenv('PROJECT_APPS') .
				'/workloads?namespaceId=' .
				getenv('CUSTOM_NAMESPACE_ID')
			);
			$services = [];
			if (Response::HTTP_OK === $response->getStatusCode()) {
				$arrayResp = json_decode($response->getBody()->getContents(), true);
				$data = $arrayResp['data'];

				foreach ($data as $service) {
					if ('daemonSet' === $service['type'] ||
						'statefulSet' === $service['type'] ||
						'deployment' === $service['type'] ||
						'replicaSet' === $service['type']) {
						$podsNumber = 0;
						if ('daemonSet' === $service['type']) {
							$podsNumber = $service['daemonSetStatus']['numberReady'];
						}
						if ('statefulSet' === $service['type']) {
							$podsNumber = $service['statefulSetStatus']['readyReplicas'];
						}
						if ('deployment' === $service['type']) {
							$podsNumber = $service['deploymentStatus']['readyReplicas'];
						}
						if ('replicaSet' === $service['type']) {
							$podsNumber = $service['replicaSetStatus']['readyReplicas'];
						}

						$serviceData = [
							'name' => $service['name'],
							'state' => $service['state'],
							'podsnumber' => $podsNumber,
							'app' => isset($service['labels']['app']) ? $service['labels']['app'] : '',
							'release' => isset($service['labels']['release']) ? $service['labels']['release'] : '',
							'version' => isset($service['labels']['version']) ? $service['labels']['version'] : '',
							'type' => $service['type'],
							'namespace' => $service['namespaceId'],
							'projectId' => $service['projectId'],
							'keycloakId' => isset($service['labels']['id_keycloak']) ? $service['labels']['id_keycloak'] : null,
							'registryName' => $service['containers'][0]['image'],
						];

						if (isset($service['labels']['app'])) {
							$services[$service['labels']['app']] = $serviceData;
						}
					}
				}
			}

			//Add ports mapping
			$customDns = $this->getCustomDns();
			$services = $this->addPortRedirectionValue($services, $customDns);
		} catch (GuzzleException $e) {
			$this->logger->error('Code : ' . $e->getCode() . ' message : ' . $e->getMessage());

			throw new \Exception('Fail to get services in Rancher, please try again or contact administrator');
		}

		return $services;
	}

	/**
	 * @param $projectId
	 * @param $fqdn
	 *
	 * @return bool
	 *
	 * @throws HttpException
	 */
	public function deleteKubernetesPod($projectId, $fqdn): bool
	{
		$uriPart = '/v3/project/' .
			$projectId .
			'/workloads/' .
			$fqdn['type'] . ':' .
			$fqdn['namespace'] . ':' .
			$fqdn['name'];

		try {
			$response = $this->getRancherClient()->request(
				'DELETE',
				$uriPart
			);
			if (Response::HTTP_NO_CONTENT === $response->getStatusCode()) {
				$this->deleteAssociatedService($projectId, $fqdn);

				return true;
			}
		} catch (GuzzleException $e) {
			$this->logger->critical($e->getMessage());
			$this->logger->error('Error in File : ' . $e->getFile() . ' at Line : ' . $e->getLine());

			throw new HttpException($e->getCode(), 'Delete kubernetes service failed, please try again or contact an administrator');
		}

		return false;
	}

	/**
	 * @param $rancherEnv
	 *
	 * @return array
	 *
	 * @throws \Exception
	 */
	public function getDns($rancherEnv): array
	{
		$ports = [];

		try {
			$response = $this->getRancherClient()->request(
				'GET',
				'/v3/projects/' . getenv('RANCHER_CLUSTER_ID') . ':' . $rancherEnv . '/dnsRecords'
			);
			if (Response::HTTP_OK === $response->getStatusCode()) {
				$arrayResp = json_decode($response->getBody()->getContents(), true);
				$data = $arrayResp['data'];

				foreach ($data as $dns) {
					if (isset($dns['labels']['app']) || isset($dns['name'])) {
						if (isset($dns['ports'])) {
							$dns['ports'][0]['nodePort'] = (0 === $dns['ports'][0]['nodePort']) ? 'N/A' : $dns['ports'][0]['nodePort'];
							$dns['ports'][0]['port'] = (0 === $dns['ports'][0]['port']) ? 'N/A' : $dns['ports'][0]['port'];
						}
						if (isset($dns['labels']['app']) && !isset($dns['labels']['component'])) {
							$ports[$dns['labels']['app']] = $dns['ports'];
						} elseif (isset($dns['name'])) {
							$ports[$dns['name']] = $dns['ports'];
						} elseif (isset($dns['labels']['app']) && isset($dns['labels']['component'])) {
							$ports[$dns['labels']['app'] . '-' . $dns['labels']['component']] = $dns['ports'];
						}
					}
				}
			}
		} catch (GuzzleException $e) {
			$this->logger->error('Code : ' . $e->getCode() . ' message : ' . $e->getMessage());

			throw new \Exception('Fail to get services in Rancher, please try again or contact administrator');
		}

		return $ports;
	}

	/**
	 * @return array
	 *
	 * @throws \Exception
	 */
	public function getCustomDns(): array
	{
		$ports = [];

		try {
			$response = $this->getRancherClient()->request(
				'GET',
				'/v3/projects/' .
				getenv('RANCHER_CLUSTER_ID') .
				':' . getenv('PROJECT_APPS') .
				'/dnsRecords?namespaceId=' .
				getenv('CUSTOM_NAMESPACE_ID')
			);
			if (Response::HTTP_OK === $response->getStatusCode()) {
				$arrayResp = json_decode($response->getBody()->getContents(), true);
				$data = $arrayResp['data'];

				foreach ($data as $dns) {
					if (isset($dns['labels']['app']) || isset($dns['name'])) {
						if (isset($dns['ports'])) {
							$dns['ports'][0]['nodePort'] = (0 === $dns['ports'][0]['nodePort']) ? 'N/A' : $dns['ports'][0]['nodePort'];
							$dns['ports'][0]['port'] = (0 === $dns['ports'][0]['port']) ? 'N/A' : $dns['ports'][0]['port'];
						}

						if (isset($dns['labels']['app'])) {
							$ports[$dns['labels']['app']] = $dns['ports'];
						} elseif (isset($dns['name'])) {
							$ports[$dns['name']] = $dns['ports'];
						}
					}
				}
			}
		} catch (GuzzleException $e) {
			$this->logger->error('Code : ' . $e->getCode() . ' message : ' . $e->getMessage());

			throw new \Exception('Fail to get services in Rancher, please try again or contact administrator');
		}

		return $ports;
	}

	private function deleteAssociatedService($projectId, $param): bool
	{
		$uriPart = '/v3/project/' .
			$projectId .
			'/dnsRecords/' .
			$param['namespace'] . ':' .
			$param['name'];

		try {
			$response = $this->getRancherClient()->request(
				'DELETE',
				$uriPart
			);
			if (Response::HTTP_NO_CONTENT === $response->getStatusCode()) {
				return true;
			}
		} catch (GuzzleException $e) {
			$this->logger->critical($e->getMessage());
			$this->logger->error('Error in File : ' . $e->getFile() . ' at Line : ' . $e->getLine());
		}

		return false;
	}

	/**
	 * @param $workloads
	 * @param $services
	 *
	 * @return mixed
	 */
	private function addPortRedirectionValue($workloads, $services)
	{
		foreach ($workloads as $name => $image) {
			if (isset($services[$name])) {
				//Get first mapping of ports  between cluster and container
				$workloads[$name]['ports'] = $services[$name][0];
				if (isset($services[$name . '-' . getenv('RANCHER_NODEPORT_SUFFIX')])) {
					$workloads[$name]['ports'] = $services[$name . '-' . getenv('RANCHER_NODEPORT_SUFFIX')][0];
				}
			} else {
				$workloads[$name]['ports'] = null;
			}
		}

		return $workloads;
	}

	/**
	 * Export docker image.
	 *
	 * @param $image
	 * @param $filePath
	 *
	 * @return mixed|\Psr\Http\Message\ResponseInterface|JsonResponse
	 *
	 * @throws HttpException
	 */
	public function export($image, $filePath)
	{
		$client = $this->getRancherPycli();

		try {
			$response = $client->request(
				'POST',
				'/docker/export',
				[
					'multipart' => [
						[
							'name' => 'name',
							'contents' => $image,
						],
					],
					'save_to' => $filePath,
				]
			);

			$response = new JsonResponse(
				json_decode($response->getBody()->getContents(), $response->getStatusCode()),
				$response->getStatusCode()
			);
		} catch (GuzzleException $e) {
			$this->logger->critical($e->getMessage());

			throw new HttpException($e->getCode(), $e->getMessage());
		}

		return $response;
	}

	/**
	 * Get nifi data flow.
	 *
	 * @param string $instance
	 * @param string $status
	 *
	 * @return mixed|\Psr\Http\Message\ResponseInterface
	 *
	 * @throws HttpException
	 */
	public function getNifiMetrics(
		$instance = 'nifi-mdp',
		$status = 'transferred'
	) {
		try {
			$response = $this->getPrometheusCli()->request(
				'GET',
				'/api/v1/query?query=process_group_amount_bytes_total' .
				"{status=\"${status}\", instance=\"${instance}\"}"
			);
		} catch (GuzzleException $e) {
			$this->logger->critical($e->getMessage());

			throw new HttpException($e->getCode(), $e->getMessage());
		}
		$data = json_decode($response->getBody()->getContents());
		$metrics = $data->data->result;
		$flow = (isset($metrics[0]) ? $this->utility->formatSizeUnits($metrics[0]->value[1]) : '0 bytes');

		return $flow;
	}

	/**
	 * Get nifi data flow.
	 *
	 * @param string $instance
	 * @param string $status
	 *
	 * @return mixed|\Psr\Http\Message\ResponseInterface
	 *
	 * @throws HttpException
	 */
	public function getMinioMetrics()
	{
		try {
			$response = $this->getPrometheusCli()->request(
				'GET',
				'/api/v1/query?query=minio_disk_storage_bytes'
			);
		} catch (GuzzleException $e) {
			$this->logger->critical($e->getMessage());

			throw new HttpException($e->getCode(), $e->getMessage());
		}
		$data = json_decode($response->getBody()->getContents());

		$metrics = $data->data->result;
		$flow = (isset($metrics[0]) ? $this->utility->formatSizeUnits($metrics[0]->value[1]) : '0 bytes');

		return $flow;
	}
}
