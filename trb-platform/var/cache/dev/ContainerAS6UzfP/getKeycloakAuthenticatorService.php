<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private 'App\Security\KeycloakAuthenticator' shared autowired service.

include_once $this->targetDirs[3].'\\vendor\\symfony\\security-http\\EntryPoint\\AuthenticationEntryPointInterface.php';
include_once $this->targetDirs[3].'\\vendor\\symfony\\security-guard\\AuthenticatorInterface.php';
include_once $this->targetDirs[3].'\\vendor\\symfony\\security-guard\\AbstractGuardAuthenticator.php';
include_once $this->targetDirs[3].'\\vendor\\knpuniversity\\oauth2-client-bundle\\src\\Security\\Helper\\FinishRegistrationBehavior.php';
include_once $this->targetDirs[3].'\\vendor\\knpuniversity\\oauth2-client-bundle\\src\\Security\\Helper\\PreviousUrlHelper.php';
include_once $this->targetDirs[3].'\\vendor\\knpuniversity\\oauth2-client-bundle\\src\\Security\\Helper\\SaveAuthFailureMessage.php';
include_once $this->targetDirs[3].'\\vendor\\knpuniversity\\oauth2-client-bundle\\src\\Security\\Authenticator\\SocialAuthenticator.php';
include_once $this->targetDirs[3].'\\src\\Security\\KeycloakAuthenticator.php';
include_once $this->targetDirs[3].'\\vendor\\knpuniversity\\oauth2-client-bundle\\src\\Client\\ClientRegistry.php';

return $this->privates['App\\Security\\KeycloakAuthenticator'] = new \App\Security\KeycloakAuthenticator(($this->services['knpu.oauth2.registry'] ?? ($this->services['knpu.oauth2.registry'] = new \KnpU\OAuth2ClientBundle\Client\ClientRegistry($this, ['keycloak' => 'knpu.oauth2.client.keycloak']))), ($this->privates['App\\Services\\HttpClientKeycloakInterface'] ?? $this->load('getHttpClientKeycloakInterfaceService.php')), ($this->privates['App\\Services\\RancherClient'] ?? $this->load('getRancherClientService.php')), $this);
