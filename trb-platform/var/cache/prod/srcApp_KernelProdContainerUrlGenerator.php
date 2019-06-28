<?php

use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Psr\Log\LoggerInterface;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class srcApp_KernelProdContainerUrlGenerator extends Symfony\Component\Routing\Generator\UrlGenerator
{
    private static $declaredRoutes;
    private $defaultLocale;

    public function __construct(RequestContext $context, LoggerInterface $logger = null, string $defaultLocale = null)
    {
        $this->context = $context;
        $this->logger = $logger;
        $this->defaultLocale = $defaultLocale;
        if (null === self::$declaredRoutes) {
            self::$declaredRoutes = [
        'alstom.home' => [[], ['_controller' => 'App\\Controller\\alstomController::index'], [], [['text', '/alstom']], [], []],
        'alstom.client' => [[], ['_controller' => 'App\\Controller\\alstomController::clients'], [], [['text', '/alstom/clients']], [], []],
        'alstom.client-show' => [['id'], ['_controller' => 'App\\Controller\\alstomController::show_clients'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/clients']], [], []],
        'alstom.create-client' => [[], ['_controller' => 'App\\Controller\\alstomController::create_clients'], [], [['text', '/alstom/create-clients']], [], []],
        'alstom.edit-client' => [['id'], ['_controller' => 'App\\Controller\\alstomController::edit_client'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/edit-client']], [], []],
        'alstom.delete-client' => [['id'], ['_controller' => 'App\\Controller\\alstomController::delete_client'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/client']], [], []],
        'alstom.engineers' => [[], ['_controller' => 'App\\Controller\\alstomController::engineers'], [], [['text', '/alstom/engineers']], [], []],
        'alstom.engineer-show' => [['id'], ['_controller' => 'App\\Controller\\alstomController::show_engineer'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/engineer']], [], []],
        'alstom.create-engineer' => [[], ['_controller' => 'App\\Controller\\alstomController::create_engineer'], [], [['text', '/alstom/create-engineer']], [], []],
        'alstom.edit-engineer' => [['id'], ['_controller' => 'App\\Controller\\alstomController::edit_engineer'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/edit-engineer']], [], []],
        'alstom.delete-engineer' => [['id'], ['_controller' => 'App\\Controller\\alstomController::delete_engineer'], [], [['text', '/delete'], ['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/engineer']], [], []],
        'alstom.projects' => [[], ['_controller' => 'App\\Controller\\alstomController::projects'], [], [['text', '/alstom/projects']], [], []],
        'alstom.project-show' => [['id'], ['_controller' => 'App\\Controller\\alstomController::show_project'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/project']], [], []],
        'alstom.create-project' => [[], ['_controller' => 'App\\Controller\\alstomController::create_project'], [], [['text', '/alstom/create-project']], [], []],
        'alstom.edit-project' => [['id'], ['_controller' => 'App\\Controller\\alstomController::edit_project'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/edit-project']], [], []],
        'alstom.delete-project' => [['id'], ['_controller' => 'App\\Controller\\alstomController::delete_project'], [], [['text', '/delete'], ['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/project']], [], []],
        'alstom.trains' => [[], ['_controller' => 'App\\Controller\\alstomController::trains'], [], [['text', '/alstom/trains']], [], []],
        'alstom.create-train' => [[], ['_controller' => 'App\\Controller\\alstomController::create_train'], [], [['text', '/alstom/create-train']], [], []],
        'alstom.edit-train' => [['id'], ['_controller' => 'App\\Controller\\alstomController::edit_train'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/edit-train']], [], []],
        'alstom.show-train' => [['id'], ['_controller' => 'App\\Controller\\alstomController::show_train'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/trains']], [], []],
        'alstom.delete-train' => [['id'], ['_controller' => 'App\\Controller\\alstomController::delete_train'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/train']], [], []],
        'alstom.evc' => [[], ['_controller' => 'App\\Controller\\alstomController::evc'], [], [['text', '/alstom/evc']], [], []],
        'alstom.create-evc' => [[], ['_controller' => 'App\\Controller\\alstomController::create_evc'], [], [['text', '/alstom/create-evc']], [], []],
        'alstom.delete-evc' => [['id'], ['_controller' => 'App\\Controller\\alstomController::delete_evc'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/evc']], [], []],
        'alstom.association' => [[], ['_controller' => 'App\\Controller\\alstomController::association'], [], [['text', '/alstom/maintener/association']], [], []],
        'alstom.baseline' => [[], ['_controller' => 'App\\Controller\\alstomController::baseline'], [], [['text', '/alstom/design/baseline']], [], []],
        'alstom.create-baseline' => [[], ['_controller' => 'App\\Controller\\alstomController::create_baseline'], [], [['text', '/alstom/design/create-baseline']], [], []],
        'alstom.delete-baseline' => [['id'], ['_controller' => 'App\\Controller\\alstomController::delete_baseline'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/design/baseline']], [], []],
        'client.home' => [[], ['_controller' => 'App\\Controller\\clientController::index'], [], [['text', '/client']], [], []],
        'client.projects' => [[], ['_controller' => 'App\\Controller\\clientController::projects'], [], [['text', '/client/projects']], [], []],
        'client.project-show' => [['id'], ['_controller' => 'App\\Controller\\clientController::show_project'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/client/project']], [], []],
        'client.trains' => [[], ['_controller' => 'App\\Controller\\clientController::trains'], [], [['text', '/client/trains']], [], []],
        'client.create-train' => [[], ['_controller' => 'App\\Controller\\clientController::create_train'], [], [['text', '/client/create-train']], [], []],
        'client.edit-train' => [['id'], ['_controller' => 'App\\Controller\\clientController::edit_train'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/client/edit-train']], [], []],
        'client.show-train' => [['id'], ['_controller' => 'App\\Controller\\clientController::show_train'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/client/trains']], [], []],
        'client.delete-train' => [['id'], ['_controller' => 'App\\Controller\\clientController::delete_train'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/client/train']], [], []],
        'client.users' => [[], ['_controller' => 'App\\Controller\\clientController::users'], [], [['text', '/client/users']], [], []],
        'login' => [[], ['_controller' => 'App\\Controller\\securityController::login'], [], [['text', '/home']], [], []],
        'alstom.forbidden' => [[], ['_controller' => 'App\\Controller\\securityController::forbidden_route'], [], [['text', '/forbidden']], [], []],
        'alstom.create-user' => [[], ['_controller' => 'App\\Controller\\securityController::create_user_alstom'], [], [['text', '/alstom/create-user']], [], []],
        'client.create-user' => [[], ['_controller' => 'App\\Controller\\securityController::create_user_client'], [], [['text', '/client/create-user']], [], []],
        'logout' => [[], [], [], [['text', '/logout']], [], []],
    ];
        }
    }

    public function generate($name, $parameters = [], $referenceType = self::ABSOLUTE_PATH)
    {
        $locale = $parameters['_locale']
            ?? $this->context->getParameter('_locale')
            ?: $this->defaultLocale;

        if (null !== $locale && null !== $name) {
            do {
                if ((self::$declaredRoutes[$name.'.'.$locale][1]['_canonical_route'] ?? null) === $name) {
                    unset($parameters['_locale']);
                    $name .= '.'.$locale;
                    break;
                }
            } while (false !== $locale = strstr($locale, '_', true));
        }

        if (!isset(self::$declaredRoutes[$name])) {
            throw new RouteNotFoundException(sprintf('Unable to generate a URL for the named route "%s" as such route does not exist.', $name));
        }

        list($variables, $defaults, $requirements, $tokens, $hostTokens, $requiredSchemes) = self::$declaredRoutes[$name];

        return $this->doGenerate($variables, $defaults, $requirements, $tokens, $parameters, $name, $referenceType, $hostTokens, $requiredSchemes);
    }
}
