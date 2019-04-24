<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TrainsRepository")
 */
class Trains
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
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $train_type;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Projects", inversedBy="trains")
     */
    private $Projects;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\EVC", cascade={"persist", "remove"})
     */
    private $EVC;

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

    public function getProjects(): ?Projects
    {
        return $this->Projects;
    }

    public function setProjects(?Projects $Projects): self
    {
        $this->Projects = $Projects;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getTrainType()
    {
        return $this->train_type;
    }

    /**
     * @param mixed $train_type
     */
    public function setTrainType($train_type): void
    {
        $this->train_type = $train_type;
    }

    public function getEVC(): ?EVC
    {
        return $this->EVC;
    }

    public function setEVC(?EVC $EVC): self
    {
        $this->EVC = $EVC;

        return $this;
    }
}
