<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\VersionLogicielRepository")
 */
class VersionLogiciel
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
    private $release_note;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getReleaseNote(): ?string
    {
        return $this->release_note;
    }

    public function setReleaseNote(string $release_note): self
    {
        $this->release_note = $release_note;

        return $this;
    }
}
