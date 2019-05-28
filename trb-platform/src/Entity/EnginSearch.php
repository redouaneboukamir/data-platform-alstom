<?php

namespace App\Entity;

class EnginSearch{

    /**
     * @var string|null
     */
    private $name_engineer;
    /**
     * @var integer|null
     */
    private $num_badge;

    /**
     * @return string|null
     */
    public function getNameEngineer(): ?string
    {
        return $this->name_engineer;
    }

    /**
     * @param string|null $name_engineer
     */
    public function setNameEngineer(?string $name_engineer): void
    {
        $this->name_engineer = $name_engineer;
    }

    /**
     * @return int|null
     */
    public function getNumBadge(): ?int
    {
        return $this->num_badge;
    }

    /**
     * @param int|null $num_badge
     */
    public function setNumBadge(?int $num_badge): void
    {
        $this->num_badge = $num_badge;
    }


}