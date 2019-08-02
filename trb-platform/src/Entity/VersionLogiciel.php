<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\VersionLogicielRepository")
 */
class VersionLogiciel
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
    private $release_note;

    /**
     * @ORM\Column(type="datetime")
     */
    private $Date;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Baseline", mappedBy="VersionLogiciel")
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

    public function getReleaseNote(): ?string
    {
        return $this->release_note;
    }

    public function setReleaseNote(string $release_note): self
    {
        $this->release_note = $release_note;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->Date;
    }

    public function setDate(\DateTimeInterface $Date): self
    {
        $this->Date = $Date;

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
            $baseline->setVersionLogiciel($this);
        }

        return $this;
    }

    public function removeBaseline(Baseline $baseline): self
    {
        if ($this->baselines->contains($baseline)) {
            $this->baselines->removeElement($baseline);
            // set the owning side to null (unless already changed)
            if ($baseline->getVersionLogiciel() === $this) {
                $baseline->setVersionLogiciel(null);
            }
        }

        return $this;
    }
}
