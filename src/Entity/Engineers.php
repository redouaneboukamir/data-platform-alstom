<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraint as Assert;



/**
 * @ORM\Entity(repositoryClass="App\Repository\EngineersRepository")
 */
//* @UniqueEntity("Num_Badge") A tester
class Engineers
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
    private $Name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Surname;

    /**
     * @ORM\Column(type="integer")
     */
    //  @Assert\Range(min=9) A tester
    private $Num_Badge;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): self
    {
        $this->Name = $Name;

        return $this;
    }

    public function getSurname(): ?string
    {
        return $this->Surname;
    }

    public function setSurname(string $Surname): self
    {
        $this->Surname = $Surname;

        return $this;
    }

    public function getNumBadge(): ?int
    {
        return $this->Num_Badge;
    }

    public function setNumBadge(int $Num_Badge): self
    {
        $this->Num_Badge = $Num_Badge;

        return $this;
    }
}
