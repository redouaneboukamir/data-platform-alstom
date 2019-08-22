<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AssocLogBaselineRepository")
 */
class AssocLogBaseline
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Baseline", inversedBy="assocLogBaselines")
     */
    private $baseline;


    /**
     * @ORM\Column(type="string", length=255)
     */
    private $TypeFile;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Logs", mappedBy="assocLogBaseline")
     */
    private $logs;

    public function __construct()
    {
        $this->logs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getTypeFile(): ?string
    {
        return $this->TypeFile;
    }

    public function setTypeFile(string $TypeFile): self
    {
        $this->TypeFile = $TypeFile;

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
     * @return Collection|Logs[]
     */
    public function getLogs(): Collection
    {
        return $this->logs;
    }

    public function addLog(Logs $log): self
    {
        if (!$this->logs->contains($log)) {
            $this->logs[] = $log;
            $log->setAssocLogBaseline($this);
        }

        return $this;
    }

    public function removeLog(Logs $log): self
    {
        if ($this->logs->contains($log)) {
            $this->logs->removeElement($log);
            // set the owning side to null (unless already changed)
            if ($log->getAssocLogBaseline() === $this) {
                $log->setAssocLogBaseline(null);
            }
        }

        return $this;
    }
}
