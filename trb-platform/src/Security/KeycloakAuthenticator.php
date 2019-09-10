<?php

/**
 * Created by PhpStorm.
 * User: ltochapn
 * Date: 29/11/2018
 * Time: 15:23.
 */

namespace App\Security;

use App\Security\Entity\User;
use App\Services\HttpClientKeycloakInterface;
use App\Services\RancherClientInterface;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use KnpU\OAuth2ClientBundle\Security\Authenticator\SocialAuthenticator;
use Psr\Container\ContainerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;

class KeycloakAuthenticator extends SocialAuthenticator
{
    const ADMINPROFILE = 'admin';
    const TRB_ROLE = 'alstom_test';
    const SESSION = 'session';

    /**
     * @var ClientRegistry
     */
    private $clientRegistry;

    /**
     * @var HttpClientKeycloakInterface
     */
    private $httpClientKeycloak;

    /**
     * @var ContainerInterface
     */
    private $container;

    /**
     * @var RancherClientInterface
     */
    private $rancherClient;

    /**
     * @var array[]
     */
    private $rancherEnvs;

    /**
     * KeycloakAuthenticator constructor.
     *
     * @param ClientRegistry              $clientRegistry
     * @param HttpClientKeycloakInterface $httpClientKeycloak
     * @param RancherClientInterface      $rancherClient
     * @param ContainerInterface          $container
     */
    public function __construct(
        ClientRegistry $clientRegistry,
        HttpClientKeycloakInterface $httpClientKeycloak,
        RancherClientInterface $rancherClient,
        ContainerInterface $container
    ) {
        $this->clientRegistry = $clientRegistry;
        $this->httpClientKeycloak = $httpClientKeycloak;
        $this->container = $container;
        $this->rancherClient = $rancherClient;

        $this->rancherEnvs = preg_split('/[, ]+/', getenv('RANCHER_ENVIRONMENTS_IDS'), -1, PREG_SPLIT_NO_EMPTY);
    }

    /**
     * Returns a response that directs the user to authenticate.
     *
     * This is called when an anonymous request accesses a resource that
     * requires authentication. The job of this method is to return some
     * response that "helps" the user start into the authentication process.
     *
     * Examples:
     *
     * - For a form login, you might redirect to the login page
     *
     *     return new RedirectResponse('/login');
     *
     * - For an API token authentication system, you return a 401 response
     *
     *     return new Response('Auth header required', 401);
     *
     * @param Request                 $request       The request that resulted in an AuthenticationException
     * @param AuthenticationException $authException The exception that started the authentication process
     *
     * @return Response
     */
    public function start(Request $request, AuthenticationException $authException = null)
    {
        return new RedirectResponse(
            '/',
            Response::HTTP_TEMPORARY_REDIRECT
        );
    }

    /**
     * Does the authenticator support the given Request?
     *
     * If this returns false, the authenticator will be skipped.
     *
     * @param Request $request
     *
     * @return bool
     */
    public function supports(Request $request)
    {
        // continue ONLY if the current ROUTE matches the check ROUTE
        return 'connect_keycloak_check' === $request->attributes->get('_route');
    }

    /**
     * Get the authentication credentials from the request and return them
     * as any type (e.g. an associate array).
     *
     * Whatever value you return here will be passed to getUser() and checkCredentials()
     *
     * For example, for a form login, you might:
     *
     *      return array(
     *          'username' => $request->request->get('_username'),
     *          'password' => $request->request->get('_password'),
     *      );
     *
     * Or for an API token that's on a header, you might use:
     *
     *      return array('api_key' => $request->headers->get('X-API-TOKEN'));
     *
     * @param Request $request
     *
     * @return mixed Any non-null value
     *
     * @throws \UnexpectedValueException If null is returned
     */
    public function getCredentials(Request $request)
    {
        $token = $this->fetchAccessToken($this->getKeycloakClient());

        $request->getSession()->set('accessToken', $token);

        return $token;
    }

    /**
     * Return a UserInterface object based on the credentials.
     *
     * The *credentials* are the return value from getCredentials()
     *
     * You may throw an AuthenticationException if you wish. If you return
     * null, then a UsernameNotFoundException is thrown for you.
     *
     * @param mixed                 $credentials
     * @param UserProviderInterface $userProvider
     *
     * @throws AuthenticationException
     *
     * @return UserInterface
     */
    public function getUser($credentials, UserProviderInterface $userProvider)
    {
        $keycloakUser = $this->getKeycloakClient()->fetchUserFromToken($credentials);
        $username = $keycloakUser->toArray()['preferred_username'];
        $userId = $keycloakUser->toArray()['sub'];
        $group = $this->httpClientKeycloak->getGroupOfUser($userId);

        $profilesArray = [];

        if (isset($group['id'])) {
            $profilesArray = $this->httpClientKeycloak->getProfilesFromGroup($group['id']);
        }

        $services = $this->httpClientKeycloak->getUserServices($userId);

        //Get Available services
        $servicesAvailables = [];

        try {
            foreach ($this->rancherEnvs as $rancherEnv) {
                $servicesAvailables += $this->rancherClient->getAllServices($rancherEnv, true);
            }
        } catch (\Exception $e) {
            $this->container->get(self::SESSION)->getFlashBag()->add('error', $e->getMessage());
        }

        //Filter services
        $services = $this->httpClientKeycloak->servicesFilter($servicesAvailables, $services);

        $user = new User();
        // $current_fleets = $this->httpClientKeycloak->getAttribute($userId);

        $current_group = $this->httpClientKeycloak->getGroupOfUser($userId);
        foreach ($this->httpClientKeycloak->getGroups() as $group) {

            if ($current_group['name'] == $group['name']) {
                $roleUser = 'users/' . $userId . '/role-mappings';
                $response = $this->httpClientKeycloak->getKeycloakClient()->request('GET', $roleUser);

                if (null !== $response->getBody()) {
                    $body = json_decode($response->getBody(), true);
                    dump($body);
                    if ($current_group['name'] != null) {
                        switch ($current_group['name']) {
                            case 'trb_admin':
                                $user->addRole('ROLE_ALSTOM_ADMIN');
                                break;
                            case 'trb_designer':
                                $user->addRole('ROLE_ALSTOM_DESIGN');
                                break;
                            case 'trb_maintener':
                                $user->addRole('ROLE_ALSTOM_MAINTENER');
                                break;
                            case 'trb_commissioner':
                                $user->addRole('ROLE_ALSTOM_COMMISSIONER');
                                break;
                            case 'trb_service':
                                $user->addRole('ROLE_ALSTOM_SERVICE');
                                break;
                            case 'trb_client_user':
                                $user->addRole('ROLE_CLIENT_USER');
                                break;
                            case 'trb_client_admin':
                                $user->addRole('ROLE_CLIENT_ADMIN');
                                break;
                        }
                    }
                }
            }
            // $attributes = $this->httpClientKeycloak->getGroup($group[KEY_ID]);
        }


        $this->container->get(self::SESSION)->set('userId', $userId);
        $this->container->get(self::SESSION)->set('services', $services);

        $user->setEmail($username);


        return $user;
    }

    /**
     * Called when authentication executed, but failed (e.g. wrong username password).
     *
     * This should return the Response sent back to the user, like a
     * RedirectResponse to the login page or a 403 response.
     *
     * If you return null, the request will continue, but the user will
     * not be authenticated. This is probably not what you want to do.
     *
     * @param Request                 $request
     * @param AuthenticationException $exception
     *
     * @return Response|null
     */
    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        $message = strtr($exception->getMessageKey(), $exception->getMessageData());

        return new Response($message, Response::HTTP_FORBIDDEN);
    }

    /**
     * Called when authentication executed and was successful!
     *
     * This should return the Response sent back to the user, like a
     * RedirectResponse to the last page they visited.
     *
     * If you return null, the current request will continue, and the user
     * will be authenticated. This makes sense, for example, with an API.
     *
     * @param Request        $request
     * @param TokenInterface $token
     * @param string         $providerKey The provider (i.e. firewall) key
     *
     * @return Response|null
     */
    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey)
    {
        return null;
    }

    private function getKeycloakClient()
    {
        return $this->clientRegistry
            // "keycloak" is the key used in config/packages/knpu_oauth2_client.yaml
            ->getClient('keycloak');
    }
}
