<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

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
     * @ORM\Column(type="string", length=255)
     */
    private $Type;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Sous_type;


    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AssociationEquiptERTMS", inversedBy="equipement")
     */
    private $AssociationEquiptERTMS;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $DTR_board;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Indive_DTR;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Num_serie;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): ?string
    {
        return $this->Type;
    }

    public function setType(string $Type): self
    {
        $this->Type = $Type;

        return $this;
    }

    public function getSousType(): ?string
    {
        return $this->Sous_type;
    }

    public function setSousType(string $Sous_type): self
    {
        $this->Sous_type = $Sous_type;

        return $this;
    }

    /**
     * @return mixed
     */
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

    public function getIndiveDTR(): ?string
    {
        return $this->Indive_DTR;
    }

    public function setIndiveDTR(string $Indive_DTR): self
    {
        $this->Indive_DTR = $Indive_DTR;

        return $this;
    }

    public function getNumSerie(): ?string
    {
        return $this->Num_serie;
    }

    public function setNumSerie(string $Num_serie): self
    {
        $this->Num_serie = $Num_serie;

        return $this;
    }
}
