<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AssocEvcCarteRepository")
 */
class AssocEvcCarte
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
     * @ORM\OneToMany(targetEntity="App\Entity\Equipement", mappedBy="assocEvcCarte")
     */
    private $CARD;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\ERTMSEquipement", cascade={"persist", "remove"})
     */
    private $ERTMS;

    public function __construct()
    {
        $this->CARD = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEVC(): ?Equipement
    {
        return $this->EVC;
    }

    public function setEVC(?Equipement $EVC): self
    {
        $this->EVC = $EVC;

        return $this;
    }

    /**
     * @return Collection|Equipement[]
     */
    public function getCARD(): Collection
    {
        return $this->CARD;
    }

    public function addCARD(Equipement $cARD): self
    {
        if (!$this->CARD->contains($cARD)) {
            $this->CARD[] = $cARD;
            $cARD->setAssocEvcCarte($this);
        }

        return $this;
    }

    public function removeCARD(Equipement $cARD): self
    {
        if ($this->CARD->contains($cARD)) {
            $this->CARD->removeElement($cARD);
            // set the owning side to null (unless already changed)
            if ($cARD->getAssocEvcCarte() === $this) {
                $cARD->setAssocEvcCarte(null);
            }
        }

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
}
