<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TrainsSearchRepository")
 */
class TrainsSearch
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name_train;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameTrain(): ?string
    {
        return $this->name_train;
    }

    public function setNameTrain(?string $name_train): self
    {
        $this->name_train = $name_train;

        return $this;
    }
}
