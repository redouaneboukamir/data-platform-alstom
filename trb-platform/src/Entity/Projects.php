<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProjectsRepository")
 */
class Projects
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
    private $Name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Description;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Fleets", mappedBy="projects")
     */
    private $Fleets;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Baseline", mappedBy="projects")
     */
    private $Baselines;

    public function __construct()
    {
        $this->Fleets = new ArrayCollection();
        $this->Baselines = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): self
    {
        $this->Name = $Name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->Description;
    }

    public function setDescription(string $Description): self
    {
        $this->Description = $Description;

        return $this;
    }

    /**
     * @return Collection|Fleets[]
     */
    public function getFleets(): Collection
    {
        return $this->Fleets;
    }

    public function addFleet(Fleets $fleet): self
    {
        if (!$this->Fleets->contains($fleet)) {
            $this->Fleets[] = $fleet;
            $fleet->setProjects($this);
        }

        return $this;
    }

    public function removeFleet(Fleets $fleet): self
    {
        if ($this->Fleets->contains($fleet)) {
            $this->Fleets->removeElement($fleet);
            // set the owning side to null (unless already changed)
            if ($fleet->getProjects() === $this) {
                $fleet->setProjects(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Baseline[]
     */
    public function getBaselines(): Collection
    {
        return $this->Baselines;
    }

    public function addBaseline(Baseline $baseline): self
    {
        if (!$this->Baselines->contains($baseline)) {
            $this->Baselines[] = $baseline;
            $baseline->setProjects($this);
        }

        return $this;
    }

    public function removeBaseline(Baseline $baseline): self
    {
        if ($this->Baselines->contains($baseline)) {
            $this->Baselines->removeElement($baseline);
            // set the owning side to null (unless already changed)
            if ($baseline->getProjects() === $this) {
                $baseline->setProjects(null);
            }
        }

        return $this;
    }
}
