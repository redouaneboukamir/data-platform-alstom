<?php

use Symfony\Component\Routing\Matcher\Dumper\PhpMatcherTrait;
use Symfony\Component\Routing\RequestContext;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class srcApp_KernelDevDebugContainerUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
{
    use PhpMatcherTrait;

    public function __construct(RequestContext $context)
    {
        $this->context = $context;
        $this->staticRoutes = [
            '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
            '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
            '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
            '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
            '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
            '/' => [
                [['_route' => 'connect_keycloack_start', '_controller' => 'App\\Controller\\KeyCloakAuthController::connectAction'], null, null, null, false, false, null],
                [['_route' => 'login', '_controller' => 'App\\Controller\\securityController::login'], null, null, null, false, false, null],
            ],
            '/check' => [[['_route' => 'connect_keycloak_check', '_controller' => 'App\\Controller\\KeyCloakAuthController::connectCheckAction'], null, null, null, false, false, null]],
            '/logout' => [
                [['_route' => 'app_logout_1', '_controller' => 'App\\Controller\\KeyCloakAuthController::logout'], null, null, null, false, false, null],
                [['_route' => 'logout'], null, null, null, false, false, null],
            ],
            '/alstom' => [[['_route' => 'alstom.home', '_controller' => 'App\\Controller\\alstomController::index'], null, null, null, false, false, null]],
            '/alstom/clients' => [[['_route' => 'alstom.client', '_controller' => 'App\\Controller\\alstomController::clients'], null, null, null, false, false, null]],
            '/alstom/create-clients' => [[['_route' => 'alstom.create-client', '_controller' => 'App\\Controller\\alstomController::create_clients'], null, null, null, false, false, null]],
            '/alstom/engineers' => [[['_route' => 'alstom.engineers', '_controller' => 'App\\Controller\\alstomController::engineers'], null, null, null, false, false, null]],
            '/alstom/create-engineer' => [[['_route' => 'alstom.create-engineer', '_controller' => 'App\\Controller\\alstomController::create_engineer'], null, null, null, false, false, null]],
            '/alstom/projects' => [[['_route' => 'alstom.projects', '_controller' => 'App\\Controller\\alstomController::projects'], null, null, null, false, false, null]],
            '/alstom/create-project' => [[['_route' => 'alstom.create-project', '_controller' => 'App\\Controller\\alstomController::create_project'], null, null, null, false, false, null]],
            '/alstom/trains' => [[['_route' => 'alstom.trains', '_controller' => 'App\\Controller\\alstomController::trains'], null, null, null, false, false, null]],
            '/alstom/create-train' => [[['_route' => 'alstom.create-train', '_controller' => 'App\\Controller\\alstomController::create_train'], null, null, null, false, false, null]],
            '/alstom/addTrains' => [[['_route' => 'alstom.addTrains', '_controller' => 'App\\Controller\\alstomController::addTrains'], null, ['POST' => 0], null, false, false, null]],
            '/alstom/ertms' => [[['_route' => 'alstom.ertms', '_controller' => 'App\\Controller\\alstomController::ertms'], null, null, null, false, false, null]],
            '/alstom/checkSubtype' => [[['_route' => 'alstom.checkSubtype', '_controller' => 'App\\Controller\\alstomController::checkSubtype'], null, null, null, false, false, null]],
            '/alstom/addEquipment' => [[['_route' => 'alstom.addEquipment', '_controller' => 'App\\Controller\\alstomController::addEquipement'], null, null, null, false, false, null]],
            '/alstom/addErtms' => [[['_route' => 'alstom.addErtms', '_controller' => 'App\\Controller\\alstomController::addErtms'], null, ['POST' => 0], null, false, false, null]],
            '/alstom/flush-all-equipt' => [[['_route' => 'alstom.flush-all-equipt', '_controller' => 'App\\Controller\\alstomController::flush_all_equipt'], null, null, null, false, false, null]],
            '/alstom/create-ertms' => [[['_route' => 'alstom.create-ertms', '_controller' => 'App\\Controller\\alstomController::create_ertms'], null, null, null, false, false, null]],
            '/alstom/maintener/association' => [[['_route' => 'alstom.association', '_controller' => 'App\\Controller\\alstomController::association'], null, null, null, false, false, null]],
            '/alstom/design/baseline' => [[['_route' => 'alstom.baseline', '_controller' => 'App\\Controller\\alstomController::baseline'], null, null, null, false, false, null]],
            '/alstom/design/create-baseline' => [[['_route' => 'alstom.create-baseline', '_controller' => 'App\\Controller\\alstomController::create_baseline'], null, null, null, false, false, null]],
            '/client' => [[['_route' => 'client.home', '_controller' => 'App\\Controller\\clientController::index'], null, null, null, false, false, null]],
            '/client/projects' => [[['_route' => 'client.projects', '_controller' => 'App\\Controller\\clientController::projects'], null, null, null, false, false, null]],
            '/client/trains' => [[['_route' => 'client.trains', '_controller' => 'App\\Controller\\clientController::trains'], null, null, null, false, false, null]],
            '/client/create-train' => [[['_route' => 'client.create-train', '_controller' => 'App\\Controller\\clientController::create_train'], null, null, null, false, false, null]],
            '/client/users' => [[['_route' => 'client.users', '_controller' => 'App\\Controller\\clientController::users'], null, null, null, false, false, null]],
            '/forbidden' => [[['_route' => 'alstom.forbidden', '_controller' => 'App\\Controller\\securityController::forbidden_route'], null, null, null, false, false, null]],
            '/alstom/create-user' => [[['_route' => 'alstom.create-user', '_controller' => 'App\\Controller\\securityController::create_user_alstom'], null, null, null, false, false, null]],
            '/client/create-user' => [[['_route' => 'client.create-user', '_controller' => 'App\\Controller\\securityController::create_user_client'], null, null, null, false, false, null]],
        ];
        $this->regexpList = [
            0 => '{^(?'
                    .'|/_(?'
                        .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                        .'|wdt/([^/]++)(*:57)'
                        .'|profiler/([^/]++)(?'
                            .'|/(?'
                                .'|search/results(*:102)'
                                .'|router(*:116)'
                                .'|exception(?'
                                    .'|(*:136)'
                                    .'|\\.css(*:149)'
                                .')'
                            .')'
                            .'|(*:159)'
                        .')'
                    .')'
                    .'|/alstom/(?'
                        .'|client(?'
                            .'|s/([^/]++)(*:199)'
                            .'|/([^/]++)(*:216)'
                        .')'
                        .'|e(?'
                            .'|dit\\-(?'
                                .'|client/([^/]++)(*:252)'
                                .'|engineer/([^/]++)(*:277)'
                                .'|project/([^/]++)(*:301)'
                                .'|train/([^/]++)(*:323)'
                            .')'
                            .'|ngineer/([^/]++)(?'
                                .'|(*:351)'
                                .'|/delete(*:366)'
                            .')'
                        .')'
                        .'|project/([^/]++)(?'
                            .'|(*:395)'
                            .'|/delete(*:410)'
                        .')'
                        .'|train(?'
                            .'|s/([^/]++)(*:437)'
                            .'|/([^/]++)(*:454)'
                        .')'
                        .'|design/baseline/([^/]++)(*:487)'
                    .')'
                    .'|/client/(?'
                        .'|project/([^/]++)(*:523)'
                        .'|edit\\-train/([^/]++)(*:551)'
                        .'|train(?'
                            .'|s/([^/]++)(*:577)'
                            .'|/([^/]++)(*:594)'
                        .')'
                    .')'
                .')/?$}sDu',
        ];
        $this->dynamicRoutes = [
            38 => [[['_route' => '_twig_error_test', '_controller' => 'twig.controller.preview_error::previewErrorPageAction', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
            57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
            102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
            116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
            136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception::showAction'], ['token'], null, null, false, false, null]],
            149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception::cssAction'], ['token'], null, null, false, false, null]],
            159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
            199 => [[['_route' => 'alstom.client-show', '_controller' => 'App\\Controller\\alstomController::show_clients'], ['id'], null, null, false, true, null]],
            216 => [[['_route' => 'alstom.delete-client', '_controller' => 'App\\Controller\\alstomController::delete_client'], ['id'], ['DELETE' => 0], null, false, true, null]],
            252 => [[['_route' => 'alstom.edit-client', '_controller' => 'App\\Controller\\alstomController::edit_client'], ['id'], ['GET' => 0, 'POST' => 1], null, false, true, null]],
            277 => [[['_route' => 'alstom.edit-engineer', '_controller' => 'App\\Controller\\alstomController::edit_engineer'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            301 => [[['_route' => 'alstom.edit-project', '_controller' => 'App\\Controller\\alstomController::edit_project'], ['id'], ['GET' => 0, 'POST' => 1], null, false, true, null]],
            323 => [[['_route' => 'alstom.edit-train', '_controller' => 'App\\Controller\\alstomController::edit_train'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            351 => [[['_route' => 'alstom.engineer-show', '_controller' => 'App\\Controller\\alstomController::show_engineer'], ['id'], null, null, false, true, null]],
            366 => [[['_route' => 'alstom.delete-engineer', '_controller' => 'App\\Controller\\alstomController::delete_engineer'], ['id'], ['DELETE' => 0], null, false, false, null]],
            395 => [[['_route' => 'alstom.project-show', '_controller' => 'App\\Controller\\alstomController::show_project'], ['id'], null, null, false, true, null]],
            410 => [[['_route' => 'alstom.delete-project', '_controller' => 'App\\Controller\\alstomController::delete_project'], ['id'], ['DELETE' => 0], null, false, false, null]],
            437 => [[['_route' => 'alstom.show-train', '_controller' => 'App\\Controller\\alstomController::show_train'], ['id'], null, null, false, true, null]],
            454 => [[['_route' => 'alstom.delete-train', '_controller' => 'App\\Controller\\alstomController::delete_train'], ['id'], ['DELETE' => 0], null, false, true, null]],
            487 => [[['_route' => 'alstom.delete-baseline', '_controller' => 'App\\Controller\\alstomController::delete_baseline'], ['id'], ['DELETE' => 0], null, false, true, null]],
            523 => [[['_route' => 'client.project-show', '_controller' => 'App\\Controller\\clientController::show_project'], ['id'], null, null, false, true, null]],
            551 => [[['_route' => 'client.edit-train', '_controller' => 'App\\Controller\\clientController::edit_train'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            577 => [[['_route' => 'client.show-train', '_controller' => 'App\\Controller\\clientController::show_train'], ['id'], null, null, false, true, null]],
            594 => [[['_route' => 'client.delete-train', '_controller' => 'App\\Controller\\clientController::delete_train'], ['id'], ['DELETE' => 0], null, false, true, null]],
        ];
    }
}
