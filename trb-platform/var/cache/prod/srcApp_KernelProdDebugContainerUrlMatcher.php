<?php

use Symfony\Component\Routing\Matcher\Dumper\PhpMatcherTrait;
use Symfony\Component\Routing\RequestContext;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class srcApp_KernelProdDebugContainerUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
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
            '/alstom/addTrains' => [[['_route' => 'alstom.addTrains', '_controller' => 'App\\Controller\\alstomController::addTrains'], null, ['POST' => 0], null, false, false, null]],
            '/alstom/ertms' => [[['_route' => 'alstom.ertms', '_controller' => 'App\\Controller\\alstomController::ertms'], null, null, null, false, false, null]],
            '/alstom/checkSubtype' => [[['_route' => 'alstom.checkSubtype', '_controller' => 'App\\Controller\\alstomController::checkSubtype'], null, null, null, false, false, null]],
            '/alstom/addEquipment' => [[['_route' => 'alstom.addEquipment', '_controller' => 'App\\Controller\\alstomController::addEquipement'], null, null, null, false, false, null]],
            '/alstom/addErtms' => [[['_route' => 'alstom.addErtms', '_controller' => 'App\\Controller\\alstomController::addErtms'], null, ['POST' => 0], null, false, false, null]],
            '/alstom/flush-all-equipt' => [[['_route' => 'alstom.flush-all-equipt', '_controller' => 'App\\Controller\\alstomController::flush_all_equipt'], null, null, null, false, false, null]],
            '/alstom/create-ertms' => [[['_route' => 'alstom.create-ertms', '_controller' => 'App\\Controller\\alstomController::create_ertms'], null, null, null, false, false, null]],
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
                                    .'|quipment/([^/]++)(*:140)'
                                .')'
                                .'|project/([^/]++)(*:165)'
                                .'|train/([^/]++)(*:187)'
                            .')'
                            .'|ngineer/([^/]++)(?'
                                .'|(*:215)'
                                .'|/delete(*:230)'
                            .')'
                            .'|rtms/([^/]++)(?'
                                .'|(*:255)'
                            .')'
                        .')'
                        .'|project/([^/]++)(?'
                            .'|(*:284)'
                            .'|/delete(*:299)'
                        .')'
                        .'|train(?'
                            .'|s/([^/]++)(*:326)'
                            .'|/([^/]++)(*:343)'
                        .')'
                    .')'
                    .'|/client/(?'
                        .'|project/([^/]++)(*:380)'
                        .'|edit\\-train/([^/]++)(*:408)'
                        .'|train(?'
                            .'|s/([^/]++)(*:434)'
                            .'|/([^/]++)(*:451)'
                        .')'
                    .')'
                .')/?$}sDu',
        ];
        $this->dynamicRoutes = [
            37 => [[['_route' => 'alstom.client-show', '_controller' => 'App\\Controller\\alstomController::show_clients'], ['id'], null, null, false, true, null]],
            53 => [[['_route' => 'alstom.delete-client', '_controller' => 'App\\Controller\\alstomController::delete_client'], ['id'], ['DELETE' => 0], null, false, true, null]],
            88 => [[['_route' => 'alstom.edit-client', '_controller' => 'App\\Controller\\alstomController::edit_client'], ['id'], ['GET' => 0, 'POST' => 1], null, false, true, null]],
            115 => [[['_route' => 'alstom.edit-engineer', '_controller' => 'App\\Controller\\alstomController::edit_engineer'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            140 => [[['_route' => 'alstom.edit-equipment', '_controller' => 'App\\Controller\\alstomController::edit_equipement'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            165 => [[['_route' => 'alstom.edit-project', '_controller' => 'App\\Controller\\alstomController::edit_project'], ['id'], ['GET' => 0, 'POST' => 1], null, false, true, null]],
            187 => [[['_route' => 'alstom.edit-train', '_controller' => 'App\\Controller\\alstomController::edit_train'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            215 => [[['_route' => 'alstom.engineer-show', '_controller' => 'App\\Controller\\alstomController::show_engineer'], ['id'], null, null, false, true, null]],
            230 => [[['_route' => 'alstom.delete-engineer', '_controller' => 'App\\Controller\\alstomController::delete_engineer'], ['id'], ['DELETE' => 0], null, false, false, null]],
            255 => [
                [['_route' => 'alstom.show-ertms', '_controller' => 'App\\Controller\\alstomController::show_ertms'], ['id'], null, null, false, true, null],
                [['_route' => 'alstom.delete-ertms', '_controller' => 'App\\Controller\\alstomController::delete_ertms'], ['id'], ['DELETE' => 0], null, false, true, null],
            ],
            284 => [[['_route' => 'alstom.project-show', '_controller' => 'App\\Controller\\alstomController::show_project'], ['id'], null, null, false, true, null]],
            299 => [[['_route' => 'alstom.delete-project', '_controller' => 'App\\Controller\\alstomController::delete_project'], ['id'], ['DELETE' => 0], null, false, false, null]],
            326 => [[['_route' => 'alstom.show-train', '_controller' => 'App\\Controller\\alstomController::show_train'], ['id'], null, null, false, true, null]],
            343 => [[['_route' => 'alstom.delete-train', '_controller' => 'App\\Controller\\alstomController::delete_train'], ['id'], ['DELETE' => 0], null, false, true, null]],
            380 => [[['_route' => 'client.project-show', '_controller' => 'App\\Controller\\clientController::show_project'], ['id'], null, null, false, true, null]],
            408 => [[['_route' => 'client.edit-train', '_controller' => 'App\\Controller\\clientController::edit_train'], ['id'], ['POST' => 0, 'GET' => 1], null, false, true, null]],
            434 => [[['_route' => 'client.show-train', '_controller' => 'App\\Controller\\clientController::show_train'], ['id'], null, null, false, true, null]],
            451 => [[['_route' => 'client.delete-train', '_controller' => 'App\\Controller\\clientController::delete_train'], ['id'], ['DELETE' => 0], null, false, true, null]],
        ];
    }
}
