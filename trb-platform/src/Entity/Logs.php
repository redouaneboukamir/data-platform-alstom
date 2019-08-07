<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;


/**
 * @ORM\Entity(repositoryClass="App\Repository\LogsRepository")
 * @Vich\Uploadable
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
     * @ORM\Column(type="File")
     * @Vich\UploadableField(mapping="temp_upload", fileNameProperty="tempAdress")
     */
    private $tempAdress;

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

    public function getTempAdress(): ?string
    {
        return $this->tempAdress;
    }

    public function setTempAdress(?string $tempAdress): self
    {
        
        $this->tempAdress = $tempAdress;
        if ($tempAdress)
            $this->updatedAt = new \DateTime();
        
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
}
