<?php

namespace App\Security;

use App\Security\Entity\User;
use App\Services\HttpClientKeycloakInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\HttpFoundation\Response;

class MockProvider implements UserProviderInterface
{
	/**
	 * @var SessionInterface
	 */
	private $session;

	/**
	 * @var HttpClientKeycloakInterface
	 */
	private $httpClientKeycloak;

	/**
	 * UserProvider constructor.
	 *
	 * @param SessionInterface            $session
	 * @param HttpClientKeycloakInterface $httpClientKeycloak
	 */
	public function __construct(SessionInterface $session, HttpClientKeycloakInterface $httpClientKeycloak)
	{
		$this->session = $session;
		$this->httpClientKeycloak = $httpClientKeycloak;
	}

	/**
	 * Symfony calls this method if you use features like switch_user
	 * or remember_me.
	 *
	 * If you're not using these features, you do not need to implement
	 * this method.
	 *
	 * @return UserInterface
	 *
	 * @throws UsernameNotFoundException if the user is not found
	 */
	public function loadUserByUsername($username)
	{
		// Load a User object from your data source or throw UsernameNotFoundException.
		// The $username argument may not actually be a username:
		// it is whatever value is being returned by the getUsername()
		// method in your User class.
		$response = $this->httpClientKeycloak->loadUser($username);
		$user = null;
		if ($response && Response::HTTP_OK === $response->getStatusCode()) {
			$user = new User();
			$body = json_decode($response->getContent());
			$user->setEmail($body->user->username);
		}

		return $user;
	}

	/**
	 * Refreshes the user after being reloaded from the session.
	 *
	 * When a user is logged in, at the beginning of each request, the
	 * User object is loaded from the session and then this method is
	 * called. Your job is to make sure the user's data is still fresh by,
	 * for example, re-querying for fresh User data.
	 *
	 * If your firewall is "stateless: true" (for a pure API), this
	 * method is not called.
	 *
	 * @return UserInterface
	 */
	public function refreshUser(UserInterface $user)
	{
		if (!$user instanceof User) {
			throw new UnsupportedUserException(sprintf('Invalid user class "%s".', get_class($user)));
		}

		$services = $this->session->get('services');
		$user->setServices($services);

		// Return a User object after making sure its data is "fresh".
		$matchServices = $this->httpClientKeycloak->filterServices();
		$this->session->set('services', $matchServices);
		$user->setServices($matchServices);

		return $user;
		// Or throw a UsernameNotFoundException if the user no longer exists.
	}

	/**
	 * Tells Symfony to use this provider for this User class.
	 */
	public function supportsClass($class)
	{
		return User::class === $class;
	}
}
