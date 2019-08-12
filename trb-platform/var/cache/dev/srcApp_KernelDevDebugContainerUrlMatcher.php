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
            '/alstom/addBaselineInstancier' => [[['_route' => 'alstom.addBaselineInstancier', '_controller' => 'App\\Controller\\alstomController::addBaselineInstancier'], null, ['POST' => 0], null, false, false, null]],
            '/alstom/checkSubtype' => [[['_route' => 'alstom.checkSubtype', '_controller' => 'App\\Controller\\alstomController::checkSubtype'], null, null, null, false, false, null]],
            '/alstom/addEquipment' => [[['_route' => 'alstom.addEquipment', '_controller' => 'App\\Controller\\alstomController::addEquipement'], null, null, null, false, false, null]],
            '/alstom/addErtms' => [[['_route' => 'alstom.addErtms', '_controller' => 'App\\Controller\\alstomController::addErtms'], null, ['POST' => 0], null, false, false, null]],
            '/alstom/logs' => [[['_route' => 'alstom.logs', '_controller' => 'App\\Controller\\alstomController::logs'], null, null, null, false, false, null]],
            '/alstom/add-logs' => [[['_route' => 'alstom.add-logs', '_controller' => 'App\\Controller\\alstomController::addLogs'], null, null, null, false, false, null]],
            '/alstom/create-logs' => [[['_route' => 'alstom.create-logs', '_controller' => 'App\\Controller\\alstomController::createLogs'], null, null, null, false, false, null]],
            '/alstom/search-logs' => [[['_route' => 'alstom.search-logs', '_controller' => 'App\\Controller\\alstomController::searchLogs'], null, null, null, false, false, null]],
            '/alstom/checkBaseline' => [[['_route' => 'alstom.checkBaseline', '_controller' => 'App\\Controller\\alstomController::checkBaseline'], null, null, null, false, false, null]],
            '/alstom/baseline' => [[['_route' => 'alstom.baseline', '_controller' => 'App\\Controller\\alstomController::baseline'], null, null, null, false, false, null]],
            '/alstom/create_baseline' => [[['_route' => 'alstom.create-baseline', '_controller' => 'App\\Controller\\alstomController::create_baseline'], null, null, null, false, false, null]],
            '/alstom/flush-all-equipt' => [[['_route' => 'alstom.flush-all-equipt', '_controller' => 'App\\Controller\\alstomController::flush_all_equipt'], null, null, null, false, false, null]],
            '/alstom/addAssocBaseline' => [[['_route' => 'alstom.addAssocBaseline', '_controller' => 'App\\Controller\\alstomController::addAssocBaseline'], null, ['POST' => 0], null, false, false, null]],
            '/alstom/addBaseline' => [[['_route' => 'alstom.addBaseline', '_controller' => 'App\\Controller\\alstomController::addBaseline'], null, ['POST' => 0], null, false, false, null]],
            '/alstom/addVersion' => [[['_route' => 'alstom.addVersion', '_controller' => 'App\\Controller\\alstomController::addVersion'], null, ['POST' => 0], null, false, false, null]],
            '/alstom/fleet_management' => [[['_route' => 'alstom.fleet_management', '_controller' => 'App\\Controller\\alstomController::fleet_management'], null, null, null, false, false, null]],
            '/client' => [[['_route' => 'client.home', '_controller' => 'App\\Controller\\clientController::index'], null, null, null, false, false, null]],
            '/client/projects' => [[['_route' => 'client.projects', '_controller' => 'App\\Controller\\clientController::projects'], null, null, null, false, false, null]],
            '/client/trains' => [[['_route' => 'client.trains', '_controller' => 'App\\Controller\\clientController::trains'], null, null, null, false, false, null]],
            '/client/create-train' => [[['_route' => 'client.create-train', '_controller' => 'App\\Controller\\clientController::create_train'], null, null, null, false, false, null]],
            '/client/users' => [[['_route' => 'client.users', '_controller' => 'App\\Controller\\clientController::users'], null, null, null, false, false, null]],
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
                                .'|e(?'
                                    .'|ngineer/([^/]++)(*:280)'
                                    .'|quipment(?'
                                        .'|/([^/]++)(*:308)'
                                        .'|\\-(?'
                                            .'|instance/([^/]++)(*:338)'
                                            .'|baseline/([^/]++)(*:363)'
                                        .')'
                                    .')'
                                .')'
                                .'|project/([^/]++)(*:390)'
                                .'|train/([^/]++)(*:412)'
                            .')'
                            .'|ngineer/([^/]++)(?'
                                .'|(*:440)'
                                .'|/delete(*:455)'
                            .')'
                        .')'
                        .'|project/([^/]++)(?'
                            .'|(*:484)'
                            .'|/delete(*:499)'
                        .')'
                        .'|InstanceBaseline/([^/]++)(*:533)'
                        .'|CheckEquipements/([^/]++)(*:566)'
                        .'|train(?'
                            .'|s/([^/]++)(*:592)'
                            .'|/([^/]++)(*:609)'
                        .')'
                        .'|add\\-plug/([^/]++)(*:636)'
                        .'|baseline(?'
                            .'|/([^/]++)(*:664)'
                            .'|\\-train/([^/]++)(*:688)'
                        .')'
                    .')'
                    .'|/client/(?'
                        .'|project/([^/]++)(*:725)'
                        .'|edit\\-train/([^/]++)(*:753)'
                        .'|train(?'
                            .'|s/([^/]++)(*:779)'
                            .'|/([^/]++)(*:796)'
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
            280 => [[['_route' => 'alstom.edit-engineer', '_controller' => 'App\\Controller\\alstomController::edit_engineer'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            308 => [[['_route' => 'alstom.edit-equipment', '_controller' => 'App\\Controller\\alstomController::edit_equipement'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            338 => [[['_route' => 'alstom.edit-equipment-instance', '_controller' => 'App\\Controller\\alstomController::edit_equipement_instance'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            363 => [[['_route' => 'alstom.edit-equipment-baseline', '_controller' => 'App\\Controller\\alstomController::edit_equipement_baseline'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            390 => [[['_route' => 'alstom.edit-project', '_controller' => 'App\\Controller\\alstomController::edit_project'], ['id'], ['GET' => 0, 'POST' => 1], null, false, true, null]],
            412 => [[['_route' => 'alstom.edit-train', '_controller' => 'App\\Controller\\alstomController::edit_train'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            440 => [[['_route' => 'alstom.engineer-show', '_controller' => 'App\\Controller\\alstomController::show_engineer'], ['id'], null, null, false, true, null]],
            455 => [[['_route' => 'alstom.delete-engineer', '_controller' => 'App\\Controller\\alstomController::delete_engineer'], ['id'], ['DELETE' => 0], null, false, false, null]],
            484 => [[['_route' => 'alstom.project-show', '_controller' => 'App\\Controller\\alstomController::show_project'], ['id'], null, null, false, true, null]],
            499 => [[['_route' => 'alstom.delete-project', '_controller' => 'App\\Controller\\alstomController::delete_project'], ['id'], ['DELETE' => 0], null, false, false, null]],
            533 => [[['_route' => 'alstom.addBaselineToTrain', '_controller' => 'App\\Controller\\alstomController::addBaselineToTrain'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            566 => [[['_route' => 'alstom.CheckEquipements', '_controller' => 'App\\Controller\\alstomController::checkEquipements'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            592 => [[['_route' => 'alstom.show-train', '_controller' => 'App\\Controller\\alstomController::show_train'], ['id'], null, null, false, true, null]],
            609 => [[['_route' => 'alstom.delete-train', '_controller' => 'App\\Controller\\alstomController::delete_train'], ['id'], ['DELETE' => 0], null, false, true, null]],
            636 => [[['_route' => 'alstom.add-plug', '_controller' => 'App\\Controller\\alstomController::addPlug'], ['id'], null, null, false, true, null]],
            664 => [[['_route' => 'alstom.show-baseline', '_controller' => 'App\\Controller\\alstomController::show_baseline'], ['id'], null, null, false, true, null]],
            688 => [[['_route' => 'alstom.show-baseline-train', '_controller' => 'App\\Controller\\alstomController::show_baseline_train'], ['id'], null, null, false, true, null]],
            725 => [[['_route' => 'client.project-show', '_controller' => 'App\\Controller\\clientController::show_project'], ['id'], null, null, false, true, null]],
            753 => [[['_route' => 'client.edit-train', '_controller' => 'App\\Controller\\clientController::edit_train'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            779 => [[['_route' => 'client.show-train', '_controller' => 'App\\Controller\\clientController::show_train'], ['id'], null, null, false, true, null]],
            796 => [[['_route' => 'client.delete-train', '_controller' => 'App\\Controller\\clientController::delete_train'], ['id'], ['DELETE' => 0], null, false, true, null]],
        ];
    }
}
