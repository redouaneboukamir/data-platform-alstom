<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ConfigLogicielRepository")
 */
class ConfigLogiciel
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
    private $identif_plug;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdentifPlug(): ?string
    {
        return $this->identif_plug;
    }

    public function setIdentifPlug(string $identif_plug): self
    {
        $this->identif_plug = $identif_plug;

        return $this;
    }
}
