<?php

namespace App\Entity;

class ClientsSearch{

    /**
     * @var string|null
     */
    private $name_client;
//    /**
//     * @var string|null
//     */
//    private $country;

    /**
     * @return string|null
     */
    public function getNameClient(): ?string
    {
        return $this->name_client;
    }

    /**
     * @param string|null $name_client
     */
    public function setNameClient(?string $name_client): void
    {
        $this->name_client = $name_client;
    }

//    /**
//     * @return string|null
//     */
//    public function getCountry(): ?string
//    {
//        return $this->country;
//    }
//
//    /**
//     * @param string|null $country
//     */
//    public function setCountry(?string $country): void
//    {
//        $this->country = $country;
//    }

}