<?php

use Symfony\Component\Routing\Matcher\Dumper\PhpMatcherTrait;
use Symfony\Component\Routing\RequestContext;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class srcApp_KernelProdContainerUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
{
    use PhpMatcherTrait;

    public function __construct(RequestContext $context)
    {
        $this->context = $context;
        $this->staticRoutes = [
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
                    .'|/alstom/(?'
                        .'|client(?'
                            .'|s/([^/]++)(*:37)'
                            .'|/([^/]++)(*:53)'
                        .')'
                        .'|e(?'
                            .'|dit\\-(?'
                                .'|client/([^/]++)(*:88)'
                                .'|e(?'
                                    .'|ngineer/([^/]++)(*:115)'
                                    .'|quipment(?'
                                        .'|/([^/]++)(*:143)'
                                        .'|\\-(?'
                                            .'|instance/([^/]++)(*:173)'
                                            .'|baseline/([^/]++)(*:198)'
                                        .')'
                                    .')'
                                .')'
                                .'|project/([^/]++)(*:225)'
                                .'|train/([^/]++)(*:247)'
                            .')'
                            .'|ngineer/([^/]++)(?'
                                .'|(*:275)'
                                .'|/delete(*:290)'
                            .')'
                        .')'
                        .'|project/([^/]++)(?'
                            .'|(*:319)'
                            .'|/delete(*:334)'
                        .')'
                        .'|InstanceBaseline/([^/]++)(*:368)'
                        .'|CheckEquipements/([^/]++)(*:401)'
                        .'|train(?'
                            .'|s/([^/]++)(*:427)'
                            .'|/([^/]++)(*:444)'
                        .')'
                        .'|add\\-plug/([^/]++)(*:471)'
                        .'|baseline(?'
                            .'|/([^/]++)(*:499)'
                            .'|\\-train/([^/]++)(*:523)'
                        .')'
                    .')'
                    .'|/client/(?'
                        .'|project/([^/]++)(*:560)'
                        .'|edit\\-train/([^/]++)(*:588)'
                        .'|train(?'
                            .'|s/([^/]++)(*:614)'
                            .'|/([^/]++)(*:631)'
                        .')'
                    .')'
                .')/?$}sDu',
        ];
        $this->dynamicRoutes = [
            37 => [[['_route' => 'alstom.client-show', '_controller' => 'App\\Controller\\alstomController::show_clients'], ['id'], null, null, false, true, null]],
            53 => [[['_route' => 'alstom.delete-client', '_controller' => 'App\\Controller\\alstomController::delete_client'], ['id'], ['DELETE' => 0], null, false, true, null]],
            88 => [[['_route' => 'alstom.edit-client', '_controller' => 'App\\Controller\\alstomController::edit_client'], ['id'], ['GET' => 0, 'POST' => 1], null, false, true, null]],
            115 => [[['_route' => 'alstom.edit-engineer', '_controller' => 'App\\Controller\\alstomController::edit_engineer'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            143 => [[['_route' => 'alstom.edit-equipment', '_controller' => 'App\\Controller\\alstomController::edit_equipement'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            173 => [[['_route' => 'alstom.edit-equipment-instance', '_controller' => 'App\\Controller\\alstomController::edit_equipement_instance'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            198 => [[['_route' => 'alstom.edit-equipment-baseline', '_controller' => 'App\\Controller\\alstomController::edit_equipement_baseline'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            225 => [[['_route' => 'alstom.edit-project', '_controller' => 'App\\Controller\\alstomController::edit_project'], ['id'], ['GET' => 0, 'POST' => 1], null, false, true, null]],
            247 => [[['_route' => 'alstom.edit-train', '_controller' => 'App\\Controller\\alstomController::edit_train'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            275 => [[['_route' => 'alstom.engineer-show', '_controller' => 'App\\Controller\\alstomController::show_engineer'], ['id'], null, null, false, true, null]],
            290 => [[['_route' => 'alstom.delete-engineer', '_controller' => 'App\\Controller\\alstomController::delete_engineer'], ['id'], ['DELETE' => 0], null, false, false, null]],
            319 => [[['_route' => 'alstom.project-show', '_controller' => 'App\\Controller\\alstomController::show_project'], ['id'], null, null, false, true, null]],
            334 => [[['_route' => 'alstom.delete-project', '_controller' => 'App\\Controller\\alstomController::delete_project'], ['id'], ['DELETE' => 0], null, false, false, null]],
            368 => [[['_route' => 'alstom.addBaselineToTrain', '_controller' => 'App\\Controller\\alstomController::addBaselineToTrain'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            401 => [[['_route' => 'alstom.CheckEquipements', '_controller' => 'App\\Controller\\alstomController::checkEquipements'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            427 => [[['_route' => 'alstom.show-train', '_controller' => 'App\\Controller\\alstomController::show_train'], ['id'], null, null, false, true, null]],
            444 => [[['_route' => 'alstom.delete-train', '_controller' => 'App\\Controller\\alstomController::delete_train'], ['id'], ['DELETE' => 0], null, false, true, null]],
            471 => [[['_route' => 'alstom.add-plug', '_controller' => 'App\\Controller\\alstomController::addPlug'], ['id'], null, null, false, true, null]],
            499 => [[['_route' => 'alstom.show-baseline', '_controller' => 'App\\Controller\\alstomController::show_baseline'], ['id'], null, null, false, true, null]],
            523 => [[['_route' => 'alstom.show-baseline-train', '_controller' => 'App\\Controller\\alstomController::show_baseline_train'], ['id'], null, null, false, true, null]],
            560 => [[['_route' => 'client.project-show', '_controller' => 'App\\Controller\\clientController::show_project'], ['id'], null, null, false, true, null]],
            588 => [[['_route' => 'client.edit-train', '_controller' => 'App\\Controller\\clientController::edit_train'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            614 => [[['_route' => 'client.show-train', '_controller' => 'App\\Controller\\clientController::show_train'], ['id'], null, null, false, true, null]],
            631 => [[['_route' => 'client.delete-train', '_controller' => 'App\\Controller\\clientController::delete_train'], ['id'], ['DELETE' => 0], null, false, true, null]],
        ];
    }
}
