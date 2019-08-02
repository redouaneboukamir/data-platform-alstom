<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ERTMSEquipementRepository")
 */
class ERTMSEquipement
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Trains", inversedBy="ERTMS")
     */
    private $trains;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTrains(): ?Trains
    {
        return $this->trains;
    }

    public function setTrains(?Trains $trains): self
    {
        $this->trains = $trains;

        return $this;
    }
}
