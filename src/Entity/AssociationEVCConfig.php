<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AssociationEVCConfigRepository")
 */
class AssociationEVCConfig
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Equipement", cascade={"persist", "remove"})
     */
    private $EVC;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Equipement", cascade={"persist", "remove"})
     */
    private $Config;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEVCId(): ?Equipement
    {
        return $this->EVC;
    }

    public function setEVCId(?Equipement $EVC): self
    {
        $this->EVC = $EVC;

        return $this;
    }

    public function getConfigId(): ?Equipement
    {
        return $this->Config;
    }

    public function setConfigId(?Equipement $Config): self
    {
        $this->Config = $Config;

        return $this;
    }
}
