<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ClientsUserRepository")
 */
class ClientsUser
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Fleets", inversedBy="clientsUsers")
     */
    private $Fleets;

    public function __construct()
    {
        $this->Fleets = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Fleets[]
     */
    public function getFleets(): Collection
    {
        return $this->Fleets;
    }

    public function addProject(Fleets $fleet): self
    {
        if (!$this->Fleets->contains($fleet)) {
            $this->Fleets[] = $fleet;
        }

        return $this;
    }

    public function removeFleet(Fleets $fleet): self
    {
        if ($this->Fleets->contains($fleet)) {
            $this->Fleets->removeElement($fleet);
        }

        return $this;
    }
}
