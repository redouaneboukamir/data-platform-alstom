<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PlugsRepository")
 */
class Plugs
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=300)
     */
    private $name;

    /**
     * @ORM\Column(type="string")
     */
    private $plug;

    /**
     * @ORM\Column(type="datetime")
     * @var string A "Y-m-d" formatted value
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AssocPlugBaseline", inversedBy="plug")
     */
    private $assocPlugBaseline;

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

    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getAssocPlugBaseline(): ?AssocPlugBaseline
    {
        return $this->assocPlugBaseline;
    }

    public function setAssocPlugBaseline(?AssocPlugBaseline $assocPlugBaseline): self
    {
        $this->assocPlugBaseline = $assocPlugBaseline;

        return $this;
    }
}
