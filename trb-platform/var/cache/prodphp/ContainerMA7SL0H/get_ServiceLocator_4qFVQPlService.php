<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private '.service_locator.4qFVQPl' shared service.

return $this->privates['.service_locator.4qFVQPl'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($this->getService, [
    'trainsRepository' => ['privates', 'App\\Repository\\TrainsRepository', 'getTrainsRepositoryService.php', true],
]);