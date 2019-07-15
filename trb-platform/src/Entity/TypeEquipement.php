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
     * @ORM\OneToMany(targetEntity="App\Entity\SoustypeEquipement", mappedBy="typeEquipement")
     */
    private $SousType;

    public function __toString()
    {
        return $this->name;
    }

    public function __construct()
    {
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
     * @return Collection|SoustypeEquipement[]
     */
    public function getSousType(): Collection
    {
        return $this->SousType;
    }

    public function addSousType(SoustypeEquipement $sousType): self
    {
        if (!$this->SousType->contains($sousType)) {
            $this->SousType[] = $sousType;
            $sousType->setTypeEquipement($this);
        }

        return $this;
    }

    public function removeSousType(SoustypeEquipement $sousType): self
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
