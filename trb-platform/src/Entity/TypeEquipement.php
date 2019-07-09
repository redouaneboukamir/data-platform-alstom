<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TypeEquipementRepository")
 */
class TypeEquipement
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
     * @ORM\OneToMany(targetEntity="App\Entity\Equipement", mappedBy="Type")
     */
    private $equipements;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\SousTypeEquipement", mappedBy="typeEquipement")
     */
    private $SousType;

    public function __toString()
    {
        return $this->name;
    }

    public function __construct()
    {
        $this->equipements = new ArrayCollection();
        $this->SousType = new ArrayCollection();
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
            $equipement->setType($this);
        }

        return $this;
    }

    public function removeEquipement(Equipement $equipement): self
    {
        if ($this->equipements->contains($equipement)) {
            $this->equipements->removeElement($equipement);
            // set the owning side to null (unless already changed)
            if ($equipement->getType() === $this) {
                $equipement->setType(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|SousTypeEquipement[]
     */
    public function getSousType(): Collection
    {
        return $this->SousType;
    }

    public function addSousType(SousTypeEquipement $sousType): self
    {
        if (!$this->SousType->contains($sousType)) {
            $this->SousType[] = $sousType;
            $sousType->setTypeEquipement($this);
        }

        return $this;
    }

    public function removeSousType(SousTypeEquipement $sousType): self
    {
        if ($this->SousType->contains($sousType)) {
            $this->SousType->removeElement($sousType);
            // set the owning side to null (unless already changed)
            if ($sousType->getTypeEquipement() === $this) {
                $sousType->setTypeEquipement(null);
            }
        }

        return $this;
    }
}
