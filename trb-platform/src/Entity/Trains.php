<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TrainsRepository")
 * @UniqueEntity("name")
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
     * @ORM\ManyToOne(targetEntity="App\Entity\Fleets", inversedBy="trains")
     */
    private $Fleets;

    /**
     * @ORM\Column(type="json_array", nullable=true)
     */
    private $position_ERTMS;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Baseline", mappedBy="Trains",cascade={"persist"})
     */
    private $baselines;


    public function __construct()
    {
        $this->baselines = new ArrayCollection();
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
        $this->name = \strtoupper($name);

        return $this;
    }

    public function getFleets(): ?Fleets
    {
        return $this->Fleets;
    }

    public function setFleets(?Fleets $Fleets): self
    {
        $this->Fleets = $Fleets;

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
     * @return Collection|Baseline[]
     */
    public function getBaselines(): Collection
    {
        return $this->baselines;
    }

    public function addBaseline(Baseline $baseline): self
    {
        if (!$this->baselines->contains($baseline)) {
            $this->baselines[] = $baseline;
            $baseline->setTrains($this);
        }

        return $this;
    }

    public function removeBaseline(Baseline $baseline): self
    {
        if ($this->baselines->contains($baseline)) {
            $this->baselines->removeElement($baseline);
            // set the owning side to null (unless already changed)
            if ($baseline->getTrains() === $this) {
                $baseline->setTrains(null);
            }
        }

        return $this;
    }
}
