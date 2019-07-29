<?php

use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Psr\Log\LoggerInterface;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class srcApp_KernelDevDebugContainerUrlGenerator extends Symfony\Component\Routing\Generator\UrlGenerator
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
        '_twig_error_test' => [['code', '_format'], ['_controller' => 'twig.controller.preview_error::previewErrorPageAction', '_format' => 'html'], ['code' => '\\d+'], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '\\d+', 'code', true], ['text', '/_error']], [], []],
        '_wdt' => [['token'], ['_controller' => 'web_profiler.controller.profiler::toolbarAction'], [], [['variable', '/', '[^/]++', 'token', true], ['text', '/_wdt']], [], []],
        '_profiler_home' => [[], ['_controller' => 'web_profiler.controller.profiler::homeAction'], [], [['text', '/_profiler/']], [], []],
        '_profiler_search' => [[], ['_controller' => 'web_profiler.controller.profiler::searchAction'], [], [['text', '/_profiler/search']], [], []],
        '_profiler_search_bar' => [[], ['_controller' => 'web_profiler.controller.profiler::searchBarAction'], [], [['text', '/_profiler/search_bar']], [], []],
        '_profiler_phpinfo' => [[], ['_controller' => 'web_profiler.controller.profiler::phpinfoAction'], [], [['text', '/_profiler/phpinfo']], [], []],
        '_profiler_search_results' => [['token'], ['_controller' => 'web_profiler.controller.profiler::searchResultsAction'], [], [['text', '/search/results'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
        '_profiler_open_file' => [[], ['_controller' => 'web_profiler.controller.profiler::openAction'], [], [['text', '/_profiler/open']], [], []],
        '_profiler' => [['token'], ['_controller' => 'web_profiler.controller.profiler::panelAction'], [], [['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
        '_profiler_router' => [['token'], ['_controller' => 'web_profiler.controller.router::panelAction'], [], [['text', '/router'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
        '_profiler_exception' => [['token'], ['_controller' => 'web_profiler.controller.exception::showAction'], [], [['text', '/exception'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
        '_profiler_exception_css' => [['token'], ['_controller' => 'web_profiler.controller.exception::cssAction'], [], [['text', '/exception.css'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
        'connect_keycloack_start' => [[], ['_controller' => 'App\\Controller\\KeyCloakAuthController::connectAction'], [], [['text', '/']], [], []],
        'connect_keycloak_check' => [[], ['_controller' => 'App\\Controller\\KeyCloakAuthController::connectCheckAction'], [], [['text', '/check']], [], []],
        'app_logout_1' => [[], ['_controller' => 'App\\Controller\\KeyCloakAuthController::logout'], [], [['text', '/logout']], [], []],
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
        'alstom.addTrains' => [[], ['_controller' => 'App\\Controller\\alstomController::addTrains'], [], [['text', '/alstom/addTrains']], [], []],
        'alstom.edit-train' => [['id'], ['_controller' => 'App\\Controller\\alstomController::edit_train'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/edit-train']], [], []],
        'alstom.show-train' => [['id'], ['_controller' => 'App\\Controller\\alstomController::show_train'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/trains']], [], []],
        'alstom.delete-train' => [['id'], ['_controller' => 'App\\Controller\\alstomController::delete_train'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/train']], [], []],
        'alstom.ertms' => [[], ['_controller' => 'App\\Controller\\alstomController::ertms'], [], [['text', '/alstom/ertms']], [], []],
        'alstom.checkSubtype' => [[], ['_controller' => 'App\\Controller\\alstomController::checkSubtype'], [], [['text', '/alstom/checkSubtype']], [], []],
        'alstom.addEquipment' => [[], ['_controller' => 'App\\Controller\\alstomController::addEquipement'], [], [['text', '/alstom/addEquipment']], [], []],
        'alstom.addErtms' => [[], ['_controller' => 'App\\Controller\\alstomController::addErtms'], [], [['text', '/alstom/addErtms']], [], []],
        'alstom.flush-all-equipt' => [[], ['_controller' => 'App\\Controller\\alstomController::flush_all_equipt'], [], [['text', '/alstom/flush-all-equipt']], [], []],
        'alstom.create-ertms' => [[], ['_controller' => 'App\\Controller\\alstomController::create_ertms'], [], [['text', '/alstom/create-ertms']], [], []],
        'alstom.show-ertms' => [['id'], ['_controller' => 'App\\Controller\\alstomController::show_ertms'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/ertms']], [], []],
        'alstom.edit-equipment' => [['id'], ['_controller' => 'App\\Controller\\alstomController::edit_equipement'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/edit-equipment']], [], []],
        'alstom.delete-ertms' => [['id'], ['_controller' => 'App\\Controller\\alstomController::delete_ertms'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/alstom/ertms']], [], []],
        'client.home' => [[], ['_controller' => 'App\\Controller\\clientController::index'], [], [['text', '/client']], [], []],
        'client.projects' => [[], ['_controller' => 'App\\Controller\\clientController::projects'], [], [['text', '/client/projects']], [], []],
        'client.project-show' => [['id'], ['_controller' => 'App\\Controller\\clientController::show_project'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/client/project']], [], []],
        'client.trains' => [[], ['_controller' => 'App\\Controller\\clientController::trains'], [], [['text', '/client/trains']], [], []],
        'client.create-train' => [[], ['_controller' => 'App\\Controller\\clientController::create_train'], [], [['text', '/client/create-train']], [], []],
        'client.edit-train' => [['id'], ['_controller' => 'App\\Controller\\clientController::edit_train'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/client/edit-train']], [], []],
        'client.show-train' => [['id'], ['_controller' => 'App\\Controller\\clientController::show_train'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/client/trains']], [], []],
        'client.delete-train' => [['id'], ['_controller' => 'App\\Controller\\clientController::delete_train'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/client/train']], [], []],
        'client.users' => [[], ['_controller' => 'App\\Controller\\clientController::users'], [], [['text', '/client/users']], [], []],
        'login' => [[], ['_controller' => 'App\\Controller\\securityController::login'], [], [['text', '/']], [], []],
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
