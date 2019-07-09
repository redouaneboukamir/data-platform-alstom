<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SoustypeEquipementRepository")
 */
class SoustypeEquipement
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
     * @ORM\OneToMany(targetEntity="App\Entity\Equipement", mappedBy="SousType")
     */
    private $equipements;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeEquipement", inversedBy="SousType")
     */
    private $typeEquipement;

    public function __toString()
    {
        return $this->name;
    }

    public function __construct()
    {
        $this->equipements = new ArrayCollection();
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

    /**
     * @return Collection|Equipement[]
     */
    public function getEquipements(): Collection
    {
        return $this->equipements;
    }

    public function addEquipement(Equipement $equipement): self
    {
        if (!$this->equipements->contains($equipement)) {
            $this->equipements[] = $equipement;
            $equipement->setSousType($this);
        }

        return $this;
    }

    public function removeEquipement(Equipement $equipement): self
    {
        if ($this->equipements->contains($equipement)) {
            $this->equipements->removeElement($equipement);
            // set the owning side to null (unless already changed)
            if ($equipement->getSousType() === $this) {
                $equipement->setSousType(null);
            }
        }

        return $this;
    }

    public function getTypeEquipement(): ?TypeEquipement
    {
        return $this->typeEquipement;
    }

    public function setTypeEquipement(?TypeEquipement $typeEquipement): self
    {
        $this->typeEquipement = $typeEquipement;

        return $this;
    }
}
