<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AssociationBaselineRepository")
 */
class AssociationBaseline
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Baseline", cascade={"persist", "remove"})
     */
    private $baseline;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\VersionLogiciel", cascade={"persist", "remove"})
     */
    private $VersionLogiciel;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\ConfigLogiciel", cascade={"persist", "remove"})
     */
    private $ConfigLogiciel;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\ERTMSEquipement", cascade={"persist", "remove"})
     */
    private $ERTMS;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Status;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBaseline(): ?Baseline
    {
        return $this->baseline;
    }

    public function setBaseline(?Baseline $baseline): self
    {
        $this->baseline = $baseline;

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

    public function getConfigLogiciel(): ?ConfigLogiciel
    {
        return $this->ConfigLogiciel;
    }

    public function setConfigLogiciel(?ConfigLogiciel $ConfigLogiciel): self
    {
        $this->ConfigLogiciel = $ConfigLogiciel;

        return $this;
    }

    public function getERTMS(): ?ERTMSEquipement
    {
        return $this->ERTMS;
    }

    public function setERTMS(?ERTMSEquipement $ERTMS): self
    {
        $this->ERTMS = $ERTMS;

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
}
