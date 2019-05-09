<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AssociationEquiptERTMSRepository")
 */
class AssociationEquiptERTMS
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\ERTMSEquipement", cascade={"persist", "remove"})
     */
    private $solution;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Equipement" , cascade={"persist", "remove"}
     *     ,mappedBy="AssociationEquiptERTMS")
     */
    private $equipements;

    /**
     * @ORM\Column(type="boolean")
     */
    private $status;


    public function __construct()
    {
        $this->equipements = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSolution(): ?ERTMSEquipement
    {
        return $this->solution;
    }

    public function setSolution(?ERTMSEquipement $solution): self
    {
        $this->solution = $solution;

        return $this;
    }

    /**
     * @return Collection|Equipements[]
     */
    public function getEquipements(): ?Collection
    {
        return $this->equipements;
    }

    public function addEquipement(Equipement $equipement): self
    {
        if (!$this->equipements->contains($equipement)) {
            $this->equipements[] = $equipement;
            $equipement->setAssociationEquiptERTMS($this);
        }

        return $this;
    }

    public function removeEquipement(Equipements $equipement): self
    {
        if ($this->equipements->contains($equipement)) {
            $this->equipements->removeElement($equipement);
            // set the owning side to null (unless already changed)
            if ($equipement->getAssociationEquiptERTMS() === $this) {
                $equipement->setAssociationEquiptERTMS(null);
            }
        }

        return $this;
    }
//
//
//    public function setEquipement(?Equipement $equipement): self
//    {
//        $this->equipement = $equipement;
//
//        return $this;
//    }

    public function getStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(bool $status): self
    {
        $this->status = $status;

        return $this;
    }
}
