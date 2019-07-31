<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EVCRepository")
 */
class EVC
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $ETCS_ID;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getETCSID(): ?int
    {
        return $this->ETCS_ID;
    }

    public function setETCSID(int $ETCS_ID): self
    {
        $this->ETCS_ID = $ETCS_ID;

        return $this;
    }
}
