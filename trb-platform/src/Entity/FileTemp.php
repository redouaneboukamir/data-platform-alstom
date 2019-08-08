<?php

namespace App\Entity;

use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FileTempRepository")
 * @Vich\Uploadable()
 */
class FileTemp
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
    private $Filename;
    /**
     * @Vich\UploadableField(mapping="plug_upload", fileNameProperty="image")
     * @var File
     */
    private $File;
    /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $updatedAt;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFilename(): ?string
    {
        return $this->Filename;
    }

    public function setFilename(string $Filename): self
    {
        $this->Filename = $Filename;

        return $this;
    }
    /**
     * @return File|null
     */
    public function getFile(): ?File
    {
        return $this->File;
    }

    /**
     * @param null|File $File
     * @return FileTemp
     * @throws \Exception
     */
    public function setFile(?File $File): FileTemp
    {
        $this->File = $File;
        if ($this->File instanceof UploadedFile) {
            $this->updatedAt = new \DateTime('now');
        }
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
