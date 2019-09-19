<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

//Nom unique pur chaque client, à laisser ou retirer a voir
/**
 * @ORM\Entity(repositoryClass="App\Repository\ClientsRepository")
 * @UniqueEntity("email")
 * @Vich\Uploadable()
 */
class Clients
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
     * @Vich\UploadableField(mapping="client_image", fileNameProperty="filename")
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
     *
     */
    private $name;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $trains;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Country", inversedBy="clients")
     */
    private $countries;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Fleets", inversedBy="clients")
     */
    private $Fleets;

    /**
     * @ORM\Column(type="datetime",nullable=true)
     */
    private $updated_at;


    public function __construct()
    {
        $this->countries = new ArrayCollection();
        $this->Fleets = new ArrayCollection();
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

    /**
     * @return Collection|Country[]
     */
    public function getCountries(): Collection
    {
        return $this->countries;
    }

    public function addCountry(Country $country): self
    {
        if (!$this->countries->contains($country)) {
            $this->countries[] = $country;
        }

        return $this;
    }

    public function removeCountry(Country $country): self
    {
        if ($this->countries->contains($country)) {
            $this->countries->removeElement($country);
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getTrains()
    {
        return $this->trains;
    }

    /**
     * @param mixed $trains
     */
    public function setTrains($trains): void
    {
        $this->trains = $trains;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

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

    public function removefleets(Fleets $fleet): self
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
     * @return Clients
     * @throws \Exception
     */
    public function setProfilePicture(?File $profile_picture): Clients
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
