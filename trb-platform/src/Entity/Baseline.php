<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints\DateTime;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BaselineRepository")
 */
class Baseline
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
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Trains", inversedBy="baselines")
     */
    private $Trains;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AssociationEquiptERTMS", inversedBy="baselines")
     */
    private $Equipment_ertms;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ConfigLogiciel", inversedBy="baselines")
     */
    private $ConfigLogiciel;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\VersionLogiciel", inversedBy="baselines")
     */
    private $VersionLogiciel;

    /**
     * @ORM\Column(type="datetime")
     */
    private $Date;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Status;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Original;

    public function __construct()
    {
        $this->Original = true;
        $this->Status = false;
        $this->Date = new DateTime();
    }
    public function __toString()
    {
        return $this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getTrains(): ?Trains
    {
        return $this->Trains;
    }

    public function setTrains(?Trains $Trains): self
    {
        $this->Trains = $Trains;

        return $this;
    }

    public function getEquipmentErtms(): ?AssociationEquiptERTMS
    {
        return $this->Equipment_ertms;
    }

    public function setEquipmentErtms(?AssociationEquiptERTMS $Equipment_ertms): self
    {
        $this->Equipment_ertms = $Equipment_ertms;

        return $this;
    }

    public function getConfigLogiciel(): ?ConfigLogiciel
    {
        return $this->ConfigLogiciel;
    }

    public function setConfigLogiciel(?ConfigLogiciel $ConfigLogiciel): self
    {
        $this->ConfigLogiciel = $ConfigLogiciel;

        return $this;
    }

    public function getVersionLogiciel(): ?VersionLogiciel
    {
        return $this->VersionLogiciel;
    }

    public function setVersionLogiciel(?VersionLogiciel $VersionLogiciel): self
    {
        $this->VersionLogiciel = $VersionLogiciel;

        return $this;
    }

    public function getDate()
    {
        return $this->Date;
    }

    public function setDate(\DateTimeInterface $Date): self
    {
        $this->Date = new \DateTime();

        return $this;
    }

    public function getStatus(): ?bool
    {
        return $this->Status;
    }

    public function setStatus(bool $Status): self
    {
        $this->Status = $Status;

        return $this;
    }

    public function getOriginal(): ?bool
    {
        return $this->Original;
    }

    public function setOriginal(bool $Original): self
    {
        $this->Original = $Original;

        return $this;
    }
}
