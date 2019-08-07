<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;


/**
 * @ORM\Entity(repositoryClass="App\Repository\BaselineRepository")
 * @UniqueEntity("name")
 */
class Baseline
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
     * @ORM\ManyToOne(targetEntity="App\Entity\Trains", inversedBy="baselines")
     */
    private $Trains;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ConfigLogiciel", inversedBy="baselines")
     */
    private $ConfigLogiciel;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\VersionLogiciel", inversedBy="baselines")
     */
    private $VersionLogiciel;

    /**
     * @ORM\Column(type="datetime")
     */
    private $Date;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Status;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Original;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\AssociationEquiptERTMS", mappedBy="baseline" ,cascade={"persist"})
     */
    private $ERTMS;

    public function __construct()
    {
        $this->Original = true;
        $this->Status = false;
        $this->Date = new DateTime();
        $this->ERTMS = new ArrayCollection();
    }
    public function __toString()
    {
        return $this->name;
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

    public function getTrains(): ?Trains
    {
        return $this->Trains;
    }

    public function setTrains(?Trains $Trains): self
    {
        $this->Trains = $Trains;

        return $this;
    }

    public function getConfigLogiciel(): ?ConfigLogiciel
    {
        return $this->ConfigLogiciel;
    }

    public function setConfigLogiciel(?ConfigLogiciel $ConfigLogiciel): self
    {
        $this->ConfigLogiciel = $ConfigLogiciel;

        return $this;
    }

    public function getVersionLogiciel(): ?VersionLogiciel
    {
        return $this->VersionLogiciel;
    }

    public function setVersionLogiciel(?VersionLogiciel $VersionLogiciel): self
    {
        $this->VersionLogiciel = $VersionLogiciel;

        return $this;
    }

    public function getDate()
    {
        return $this->Date;
    }

    public function setDate(\DateTimeInterface $Date): self
    {
        $this->Date = new \DateTime();

        return $this;
    }

    public function getStatus(): ?bool
    {
        return $this->Status;
    }

    public function setStatus(bool $Status): self
    {
        $this->Status = $Status;

        return $this;
    }

    public function getOriginal(): ?bool
    {
        return $this->Original;
    }

    public function setOriginal(bool $Original): self
    {
        $this->Original = $Original;

        return $this;
    }

    /**
     * @return Collection|AssociationEquiptERTMS[]
     */
    public function getERTMS(): Collection
    {
        return $this->ERTMS;
    }

    public function addERTM(AssociationEquiptERTMS $eRTM): self
    {
        if (!$this->ERTMS->contains($eRTM)) {
            $this->ERTMS[] = $eRTM;
            $eRTM->setBaseline($this);
        }

        return $this;
    }

    public function removeERTM(AssociationEquiptERTMS $eRTM): self
    {
        if ($this->ERTMS->contains($eRTM)) {
            $this->ERTMS->removeElement($eRTM);
            // set the owning side to null (unless already changed)
            if ($eRTM->getBaseline() === $this) {
                $eRTM->setBaseline(null);
            }
        }

        return $this;
    }
}
