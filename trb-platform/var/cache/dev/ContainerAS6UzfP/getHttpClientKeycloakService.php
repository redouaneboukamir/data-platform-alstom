<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private 'App\Services\HttpClientKeycloak' shared autowired service.

include_once $this->targetDirs[3].'\\src\\Services\\HttpClientKeycloakInterface.php';
include_once $this->targetDirs[3].'\\src\\Services\\HttpClientKeycloak.php';

return $this->privates['App\\Services\\HttpClientKeycloak'] = new \App\Services\HttpClientKeycloak($this, ($this->privates['monolog.logger'] ?? $this->getMonolog_LoggerService()));
