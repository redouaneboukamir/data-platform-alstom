<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AssocPlugBaselineRepository")
 */
class AssocPlugBaseline
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $status;

    /**
     * @ORM\Column(type="datetime",nullable=true)
     */
    private $date;
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Plugs", mappedBy="assocPlugBaseline")
     */
    private $plug;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Baseline", inversedBy="assocPlugBaselines")
     */
    private $baseline;

    public function __construct()
    {
        $this->plug = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(?bool $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    /**
     * @return Collection|Plugs[]
     */
    public function getPlug(): Collection
    {
        return $this->plug;
    }

    public function addPlug(Plugs $plug): self
    {
        if (!$this->plug->contains($plug)) {
            $this->plug[] = $plug;
            $plug->setAssocPlugBaseline($this);
        }

        return $this;
    }

    public function removePlug(Plugs $plug): self
    {
        if ($this->plug->contains($plug)) {
            $this->plug->removeElement($plug);
            // set the owning side to null (unless already changed)
            if ($plug->getAssocPlugBaseline() === $this) {
                $plug->setAssocPlugBaseline(null);
            }
        }

        return $this;
    }

    public function getBaseline(): ?Baseline
    {
        return $this->baseline;
    }

    public function setBaseline(?Baseline $baseline): self
    {
        $this->baseline = $baseline;

        return $this;
    }
}
