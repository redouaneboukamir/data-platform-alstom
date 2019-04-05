<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use phpDocumentor\Reflection\Types\Self_;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProjectsRepository")
 * @UniqueEntity("name")
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

    public function __construct()
    {
        $this->clients = new ArrayCollection();
        $this->engineers = new ArrayCollection();
        $this->trains = new ArrayCollection();
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
}
