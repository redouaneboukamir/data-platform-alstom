<?php

namespace App\Security\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * Class User.
 */
class User implements UserInterface
{
	private $email;

	private $keycloakId;

	/**
	 * @var array
	 */
	private $roles = [];

	/**
	 * @var string The hashed password
	 */
	private $password;

	/**
	 * @var
	 */
	private $services;

	/**
	 * @return string
	 */
	public function getEmail(): string
	{
		$this->services = new ArrayCollection();

		return $this->email;
	}

	/**
	 * @param string $email
	 *
	 * @return User
	 */
	public function setEmail(string $email): self
	{
		$this->email = $email;

		return $this;
	}

	/**
	 * A visual identifier that represents this user.
	 *
	 * @see UserInterface
	 */
	public function getUsername(): string
	{
		return (string) $this->email;
	}

	/**
	 * @see UserInterface
	 */
	public function getRoles(): array
	{
		$roles = $this->roles;
		// guarantee every user at least has ROLE_USER
		// $roles[] = 'ROLE_ALSTOM_ADMIN';

		return array_unique($roles);
	}

	public function addRole(string $role)
	{
		$this->roles[] = $role;
	}

	public function setRoles(array $roles): self
	{
		$this->roles = $roles;

		return $this;
	}

	/**
	 * @see UserInterface
	 */
	public function getPassword(): string
	{
		return (string) $this->password;
	}

	public function setPassword(string $password): self
	{
		$this->password = $password;

		return $this;
	}

	/**
	 * @see UserInterface
	 */
	public function getSalt()
	{
		// not needed when using the "bcrypt" algorithm in security.yaml
	}

	/**
	 * @see UserInterface
	 */
	public function eraseCredentials()
	{
		// If you store any temporary, sensitive data on the user, clear it here
	}

	/**
	 * @return mixed
	 */
	public function getServices()
	{
		return $this->services;
	}

	/**
	 * @param mixed $services
	 */
	public function setServices($services): void
	{
		$this->services = $services;
	}

	/**
	 * @return mixed
	 */
	public function getKeycloakId()
	{
		return $this->keycloakId;
	}

	/**
	 * @param mixed $keycloakId
	 */
	public function setKeycloakId($keycloakId): void
	{
		$this->keycloakId = $keycloakId;
	}
}
