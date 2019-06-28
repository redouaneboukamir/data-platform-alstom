<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TrainsRepository")
 */
class Trains
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
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $train_type;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Projects", inversedBy="trains")
     */
    private $Projects;

    /**
     * @ORM\Column(type="json_array", nullable=true)
     */
    private $position_ERTMS;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ERTMSEquipement", mappedBy="trains")
     */
    private $ERTMS;

    public function __construct()
    {
        $this->ERTMS = new ArrayCollection();
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

    public function getProjects(): ?Projects
    {
        return $this->Projects;
    }

    public function setProjects(?Projects $Projects): self
    {
        $this->Projects = $Projects;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getTrainType()
    {
        return $this->train_type;
    }

    /**
     * @param mixed $train_type
     */
    public function setTrainType($train_type): void
    {
        $this->train_type = $train_type;
    }

    public function getPositionERTMS()
    {
        return $this->position_ERTMS;
    }

    public function setPositionERTMS($position_ERTMS): self
    {
        $this->position_ERTMS = $position_ERTMS;

        return $this;
    }

    /**
     * @return Collection|ERTMSEquipement[]
     */
    public function getERTMS(): Collection
    {
        return $this->ERTMS;
    }

    public function addERTM(ERTMSEquipement $eRTM): self
    {
        if (!$this->ERTMS->contains($eRTM)) {
            $this->ERTMS[] = $eRTM;
            $eRTM->setTrains($this);
        }

        return $this;
    }

    public function removeERTM(ERTMSEquipement $eRTM): self
    {
        if ($this->ERTMS->contains($eRTM)) {
            $this->ERTMS->removeElement($eRTM);
            // set the owning side to null (unless already changed)
            if ($eRTM->getTrains() === $this) {
                $eRTM->setTrains(null);
            }
        }

        return $this;
    }

}
