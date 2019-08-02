<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ConfigLogicielRepository")
 */
class ConfigLogiciel
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
     * @ORM\Column(type="string", length=255)
     */
    private $plug;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Baseline", mappedBy="ConfigLogiciel")
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
        $this->name = $name;

        return $this;
    }

    public function getPlug(): ?string
    {
        return $this->plug;
    }

    public function setPlug(string $plug): self
    {
        $this->plug = $plug;

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
            $baseline->setConfigLogiciel($this);
        }

        return $this;
    }

    public function removeBaseline(Baseline $baseline): self
    {
        if ($this->baselines->contains($baseline)) {
            $this->baselines->removeElement($baseline);
            // set the owning side to null (unless already changed)
            if ($baseline->getConfigLogiciel() === $this) {
                $baseline->setConfigLogiciel(null);
            }
        }

        return $this;
    }
}
