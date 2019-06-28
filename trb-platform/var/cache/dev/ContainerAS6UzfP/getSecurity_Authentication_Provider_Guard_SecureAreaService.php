<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private 'security.authentication.provider.guard.secure_area' shared service.

include_once $this->targetDirs[3].'\\vendor\\symfony\\security-core\\Authentication\\Provider\\AuthenticationProviderInterface.php';
include_once $this->targetDirs[3].'\\vendor\\symfony\\security-guard\\Provider\\GuardAuthenticationProvider.php';
include_once $this->targetDirs[3].'\\vendor\\symfony\\security-core\\User\\UserCheckerInterface.php';
include_once $this->targetDirs[3].'\\vendor\\symfony\\security-core\\User\\UserChecker.php';
include_once $this->targetDirs[3].'\\vendor\\symfony\\security-core\\User\\UserProviderInterface.php';
include_once $this->targetDirs[3].'\\src\\Security\\ProviderInterface.php';
include_once $this->targetDirs[3].'\\src\\Security\\KeycloakProvider.php';

return $this->privates['security.authentication.provider.guard.secure_area'] = new \Symfony\Component\Security\Guard\Provider\GuardAuthenticationProvider(new RewindableGenerator(function () {
    yield 0 => ($this->privates['App\\Security\\KeycloakAuthenticator'] ?? $this->load('getKeycloakAuthenticatorService.php'));
}, 1), ($this->privates['App\\Security\\KeycloakProvider'] ?? ($this->privates['App\\Security\\KeycloakProvider'] = new \App\Security\KeycloakProvider())), 'secure_area', new \Symfony\Component\Security\Core\User\UserChecker());