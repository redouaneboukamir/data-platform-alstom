<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use phpDocumentor\Reflection\Types\Self_;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProjectsRepository")
 * @UniqueEntity("name")
 * @Vich\Uploadable()
 */
class Projects
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
     * @Vich\UploadableField(mapping="project_image", fileNameProperty="filename")
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
    private $name;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $number_trains;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */

    private $available;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Clients", mappedBy="Projects")
     */
    private $clients;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Engineers", mappedBy="Projects")
     */
    private $engineers;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Trains", mappedBy="Projects")
     */
    private $trains;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\ClientsUser", mappedBy="projects")
     */
    private $clientsUsers;

    public function __construct()
    {
        $this->clients = new ArrayCollection();
        $this->engineers = new ArrayCollection();
        $this->trains = new ArrayCollection();
        $this->clientsUsers = new ArrayCollection();
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

    public function getNumberTrains(): ?int
    {
        return $this->number_trains;
    }

    public function setNumberTrains(?int $number_trains): self
    {
        $this->number_trains = $number_trains;

        return $this;
    }

    public function getAvailable(): ?bool
    {
        return $this->available;
    }

    public function setAvailable(?bool $available): self
    {
        $this->available = $available;

        return $this;
    }

    /**
     * @return Collection|Clients[]
     */
    public function getClients(): Collection
    {
        return $this->clients;
    }

    public function addClient(Clients $client): self
    {
        if (!$this->clients->contains($client)) {
            $this->clients[] = $client;
            $client->addProject($this);
        }

        return $this;
    }

    public function removeClient(Clients $client): self
    {
        if ($this->clients->contains($client)) {
            $this->clients->removeElement($client);
            $client->removeProject($this);
        }

        return $this;
    }

    /**
     * @return Collection|Engineers[]
     */
    public function getEngineers(): Collection
    {
        return $this->engineers;
    }

    public function addEngineer(Engineers $engineer): self
    {
        if (!$this->engineers->contains($engineer)) {
            $this->engineers[] = $engineer;
            $engineer->addProject($this);
        }

        return $this;
    }

    public function removeEngineer(Engineers $engineer): self
    {
        if ($this->engineers->contains($engineer)) {
            $this->engineers->removeElement($engineer);
            $engineer->removeProject($this);
        }

        return $this;
    }

    /**
     * @return Collection|Trains[]
     */
    public function getTrains(): Collection
    {
        return $this->trains;
    }

    public function addTrain(Trains $train): self
    {
        if (!$this->trains->contains($train)) {
            $this->trains[] = $train;
            $train->setProject($this);
        }

        return $this;
    }

    public function removeTrain(Trains $train): self
    {
        if ($this->trains->contains($train)) {
            $this->trains->removeElement($train);
            // set the owning side to null (unless already changed)
            if ($train->getProject() === $this) {
                $train->setProject(null);
            }
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
     * @param File|null $profile_picture
     * @return Projects
     * @throws \Exception
     */
    public function setProfilePicture(?File $profile_picture): Projects
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

    /**
     * @return mixed
     */
    public function getUpdatedAt()
    {
        return $this->updated_at;
    }

    /**
     * @param mixed $updated_at
     */
    public function setUpdatedAt($updated_at): void
    {
        $this->updated_at = $updated_at;
    }

    /**
     * @return Collection|ClientsUser[]
     */
    public function getClientsUsers(): Collection
    {
        return $this->clientsUsers;
    }

    public function addClientsUser(ClientsUser $clientsUser): self
    {
        if (!$this->clientsUsers->contains($clientsUser)) {
            $this->clientsUsers[] = $clientsUser;
            $clientsUser->addProject($this);
        }

        return $this;
    }

    public function removeClientsUser(ClientsUser $clientsUser): self
    {
        if ($this->clientsUsers->contains($clientsUser)) {
            $this->clientsUsers->removeElement($clientsUser);
            $clientsUser->removeProject($this);
        }

        return $this;
    }


}
