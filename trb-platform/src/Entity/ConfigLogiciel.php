<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ConfigLogicielRepository")
 * @Vich\Uploadable()
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
     * @Vich\UploadableField(mapping="plug_upload", fileNameProperty="plug")
     * @var File
     */
    private $File;
    /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $updatedAt;

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
    public function setFile(?File $File): ConfigLogiciel
    {
        $this->File = $File;
        if ($File) {
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
