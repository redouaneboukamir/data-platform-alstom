<?php

namespace App\Services;

use GuzzleHttp\Client;
use Symfony\Component\HttpFoundation\JsonResponse;

interface HttpClientKeycloakInterface
{
    /***** CLIENT MANAGEMENT *****/

    public function getKeycloakClient(): Client;

    /***** USER GROUPS MANAGEMENT *****/

    public function getGroups(): array;

    public function getProfilesFromGroup($id): array;

    public function getGroup($id): JsonResponse;

    public function addGroup($name, $profiles = null): JsonResponse;

    public function updateGroup($group, $profiles = null): JsonResponse;

    public function deleteGroup($id): JsonResponse;

    /***** PROFILES MANAGEMENT *****/

    public function getProfiles($entityTarget = null): array;

    public function getServicesFromProfil($id): array;

    public function getProfileNameById($id): string;

    public function getProfile($id): JsonResponse;

    public function addProfile($name, $services = null): JsonResponse;

    public function updateProfile($profile, $services = null): JsonResponse;

    public function deleteProfile($id): JsonResponse;

    /***** USER MANAGEMENT *****/

    public function getUsers(): array;

    public function getGroupOfUser($id): array;

    public function getUser($id): JsonResponse;

    public function addUser($name, $groups = null): JsonResponse;

    public function updateUser($user, $groups = null): JsonResponse;

    public function deleteUser($id): JsonResponse;

    /***** SECURITY *****/

    public function loadUser($username): JsonResponse;

    public function authenticate($credentials): JsonResponse;

    public function getAllServices(): array;

    public function getUserServices($id): array;

    /***** COMMUN *****/

    public function filterServices(): array;

    /***** ***** ***** ***** DEVICES ***** ***** ***** *****/

    /***** DEVICES CLIENT MANAGEMENT *****/

    public function getKeycloakDevicesClient(): Client;

    /***** DEVICES MANAGEMENT *****/

    public function getDevices(): array;

    public function getDeviceById($id): JsonResponse;

    public function addDevice($name): JsonResponse;

    public function updateDevice($id, $expireTimestamp): JsonResponse;

    public function getDeviceClientSecret($id): JsonResponse;

    public function createToken($clientId, $clientSecret): JsonResponse;

    public function deleteDevice($id): JsonResponse;

    public function servicesFilter($servicesAvailables, $userServices): array;

    public function addServiceClient($name): JsonResponse;

    public function deleteClient($id): JsonResponse;
}
