<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private 'security.firewall.map.context.secure_area' shared service.

include_once $this->targetDirs[3].'\\vendor\\symfony\\security-bundle\\Security\\FirewallContext.php';
include_once $this->targetDirs[3].'\\vendor\\symfony\\security-http\\Util\\TargetPathTrait.php';
include_once $this->targetDirs[3].'\\vendor\\symfony\\security-http\\Firewall\\ExceptionListener.php';
include_once $this->targetDirs[3].'\\vendor\\symfony\\security-http\\HttpUtils.php';
include_once $this->targetDirs[3].'\\vendor\\symfony\\security-bundle\\Security\\FirewallConfig.php';

$a = ($this->services['router'] ?? $this->getRouterService());

return $this->privates['security.firewall.map.context.secure_area'] = new \Symfony\Bundle\SecurityBundle\Security\FirewallContext(new RewindableGenerator(function () {
    yield 0 => ($this->privates['security.channel_listener'] ?? $this->load('getSecurity_ChannelListenerService.php'));
    yield 1 => ($this->privates['security.context_listener.0'] ?? $this->load('getSecurity_ContextListener_0Service.php'));
    yield 2 => ($this->privates['security.authentication.listener.guard.secure_area'] ?? $this->load('getSecurity_Authentication_Listener_Guard_SecureAreaService.php'));
    yield 3 => ($this->privates['security.authentication.listener.anonymous.secure_area'] ?? $this->load('getSecurity_Authentication_Listener_Anonymous_SecureAreaService.php'));
    yield 4 => ($this->privates['security.access_listener'] ?? $this->load('getSecurity_AccessListenerService.php'));
}, 5), new \Symfony\Component\Security\Http\Firewall\ExceptionListener(($this->services['security.token_storage'] ?? ($this->services['security.token_storage'] = new \Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage())), ($this->privates['security.authentication.trust_resolver'] ?? ($this->privates['security.authentication.trust_resolver'] = new \Symfony\Component\Security\Core\Authentication\AuthenticationTrustResolver(NULL, NULL))), new \Symfony\Component\Security\Http\HttpUtils($a, $a, '{^https?://%s$}i', '{^https://%s$}i'), 'secure_area', ($this->privates['App\\Security\\KeycloakAuthenticator'] ?? $this->load('getKeycloakAuthenticatorService.php')), NULL, NULL, ($this->privates['monolog.logger.security'] ?? $this->load('getMonolog_Logger_SecurityService.php')), false), NULL, new \Symfony\Bundle\SecurityBundle\Security\FirewallConfig('secure_area', 'security.user_checker', NULL, true, false, 'security.user.provider.concrete.app_user_provider', 'secure_area', 'App\\Security\\KeycloakAuthenticator', NULL, NULL, [0 => 'guard', 1 => 'anonymous'], NULL));
