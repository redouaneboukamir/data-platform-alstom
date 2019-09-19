<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraint as Assert;
use Vich\UploaderBundle\Mapping\Annotation as Vich;



/**
 * @ORM\Entity(repositoryClass="App\Repository\EngineersRepository")
 * @Vich\Uploadable()
 */
//* @UniqueEntity("Num_Badge") A tester
class Engineers
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * NOTE: This is not a mapped field of entity metadata, just a simple property.
     *
     * @Vich\UploadableField(mapping="engineer_image", fileNameProperty="filename")
     *
     * @var File|null
     */
    private $profile_picture;

    /**
     * @var string|null
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $filename;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Surname;

    /**
     * @ORM\Column(type="integer")
     */
    //  @Assert\Range(min=9) A tester
    private $Num_Badge;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Fleets", inversedBy="engineers")
     */
    private $Fleets;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;


    public function __construct()
    {
        $this->Fleets = new ArrayCollection();
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

    public function getSurname(): ?string
    {
        return $this->Surname;
    }

    public function setSurname(string $Surname): self
    {
        $this->Surname = $Surname;

        return $this;
    }

    public function getNumBadge(): ?int
    {
        return $this->Num_Badge;
    }

    public function setNumBadge(int $Num_Badge): self
    {
        $this->Num_Badge = $Num_Badge;

        return $this;
    }

    /**
     * @return Collection|Fleets[]
     */
    public function getFleets(): Collection
    {
        return $this->Fleets;
    }

    public function addProject(Fleets $fleet): self
    {
        if (!$this->Fleets->contains($fleet)) {
            $this->Fleets[] = $fleet;
        }

        return $this;
    }

    public function removefleet(Fleets $fleet): self
    {
        if ($this->Fleets->contains($fleet)) {
            $this->Fleets->removeElement($fleet);
        }

        return $this;
    }


    /**
     * @return File|null
     */
    public function getProfilePicture(): ?File
    {
        return $this->profile_picture;
    }

    /**
     * @param null|File $profile_picture
     * @return Engineers
     * @throws \Exception
     */
    public function setProfilePicture(?File $profile_picture): Engineers
    {
        $this->profile_picture = $profile_picture;
        if ($this->profile_picture instanceof UploadedFile) {
            $this->updated_at = new \DateTime('now');
        }
        return $this;
    }

    /**
     * @return string|null
     */
    public function getFilename(): ?string
    {
        return $this->filename;
    }

    /**
     * @param string|null $filename
     */
    public function setFilename(?string $filename): void
    {
        $this->filename = $filename;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }
}
