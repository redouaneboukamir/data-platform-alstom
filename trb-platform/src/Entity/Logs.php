<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="App\Repository\LogsRepository")
 */
class Logs
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="bigint", nullable=true)
     */
    private $idlog;

    /**
     * @ORM\Column(type="string", length=1000)
     */
    private $keyLogs;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateAdd;

    /**
     * @ORM\Column(type="datetime")
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AssocLogBaseline", inversedBy="logs")
     */
    private $assocLogBaseline;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdlog(): ?int
    {
        return $this->idlog;
    }

    public function setIdlog(?int $idlog): self
    {
        $this->idlog = $idlog;

        return $this;
    }

    public function getKeyLogs(): ?string
    {
        return $this->keyLogs;
    }

    public function setKeyLogs(string $keyLogs): self
    {
        $this->keyLogs = $keyLogs;

        return $this;
    }

    public function getDateAdd(): ?\DateTimeInterface
    {
        return $this->dateAdd;
    }

    public function setDateAdd(\DateTimeInterface $dateAdd): self
    {
        $this->dateAdd = $dateAdd;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getAssocLogBaseline(): ?AssocLogBaseline
    {
        return $this->assocLogBaseline;
    }

    public function setAssocLogBaseline(?AssocLogBaseline $assocLogBaseline): self
    {
        $this->assocLogBaseline = $assocLogBaseline;

        return $this;
    }
}
