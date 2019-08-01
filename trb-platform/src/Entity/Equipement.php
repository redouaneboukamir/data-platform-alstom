<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\TypeEquipement;
use App\Entity\SoustypeEquipement;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EquipementRepository")
 */
class Equipement
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AssociationEquiptERTMS", inversedBy="equipements")
     */
    private $AssociationEquiptERTMS;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $DTR_board;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Indice_DTR;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Num_serie;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeEquipement")
     */
    private $type;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SoustypeEquipement")
     */
    private $SousType;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AssocEvcCarte", inversedBy="CARD")
     */
    private $assocEvcCarte;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $Status;


    public function getId(): ?int
    {
        return $this->id;
    }

    // /**
    //  * @return mixed
    //  */
    public function getAssociationEquiptERTMS()
    {
        return $this->AssociationEquiptERTMS;
    }

    /**
     * @param mixed $AssociationEquiptERTMS
     */
    public function setAssociationEquiptERTMS($AssociationEquiptERTMS): void
    {
        $this->AssociationEquiptERTMS = $AssociationEquiptERTMS;
    }

    public function getDTRBoard(): ?string
    {
        return $this->DTR_board;
    }

    public function setDTRBoard(string $DTR_board): self
    {
        $this->DTR_board = $DTR_board;

        return $this;
    }

    public function getIndiceDTR(): ?string
    {
        return $this->Indice_DTR;
    }

    public function setIndiceDTR(string $Indice_DTR): self
    {
        $this->Indice_DTR = $Indice_DTR;

        return $this;
    }

    public function getNumSerie(): ?string
    {
        return $this->Num_serie;
    }

    public function setNumSerie(string $Num_serie): ?self
    {
        $this->Num_serie = $Num_serie;
        return $this;
    }

    public function getType(): ?TypeEquipement
    {
        return $this->type;
    }
    public function setType(?TypeEquipement $type)
    {
        $this->type = $type;
        return $this->type;
    }

    public function getSousType(): ?SoustypeEquipement
    {
        return $this->SousType;
    }
    public function setSousType(?SoustypeEquipement $SousType)
    {
        $this->SousType = $SousType;
        return $this->SousType;
    }

    public function getAssocEvcCarte(): ?AssocEvcCarte
    {
        return $this->assocEvcCarte;
    }

    public function setAssocEvcCarte(?AssocEvcCarte $assocEvcCarte): self
    {
        $this->assocEvcCarte = $assocEvcCarte;

        return $this;
    }

    public function getStatus(): ?bool
    {
        return $this->Status;
    }

    public function setStatus(?bool $Status): self
    {
        $this->Status = $Status;

        return $this;
    }
}
