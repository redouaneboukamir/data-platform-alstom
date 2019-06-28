<?php

namespace Proxies\__CG__\App\Entity;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Projects extends \App\Entity\Projects implements \Doctrine\ORM\Proxy\Proxy
{
    /**
     * @var \Closure the callback responsible for loading properties in the proxy object. This callback is called with
     *      three parameters, being respectively the proxy object to be initialized, the method that triggered the
     *      initialization process and an array of ordered parameters that were passed to that method.
     *
     * @see \Doctrine\Common\Persistence\Proxy::__setInitializer
     */
    public $__initializer__;

    /**
     * @var \Closure the callback responsible of loading properties that need to be copied in the cloned object
     *
     * @see \Doctrine\Common\Persistence\Proxy::__setCloner
     */
    public $__cloner__;

    /**
     * @var boolean flag indicating if this object was already initialized
     *
     * @see \Doctrine\Common\Persistence\Proxy::__isInitialized
     */
    public $__isInitialized__ = false;

    /**
     * @var array properties to be lazy loaded, with keys being the property
     *            names and values being their default values
     *
     * @see \Doctrine\Common\Persistence\Proxy::__getLazyProperties
     */
    public static $lazyPropertiesDefaults = [];



    /**
     * @param \Closure $initializer
     * @param \Closure $cloner
     */
    public function __construct($initializer = null, $cloner = null)
    {

        $this->__initializer__ = $initializer;
        $this->__cloner__      = $cloner;
    }







    /**
     * 
     * @return array
     */
    public function __sleep()
    {
        if ($this->__isInitialized__) {
            return ['__isInitialized__', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'id', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'profile_picture', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'filename', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'name', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'number_trains', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'available', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'clients', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'engineers', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'trains', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'updated_at', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'clientsUsers'];
        }

        return ['__isInitialized__', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'id', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'profile_picture', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'filename', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'name', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'number_trains', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'available', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'clients', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'engineers', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'trains', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'updated_at', '' . "\0" . 'App\\Entity\\Projects' . "\0" . 'clientsUsers'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (Projects $proxy) {
                $proxy->__setInitializer(null);
                $proxy->__setCloner(null);

                $existingProperties = get_object_vars($proxy);

                foreach ($proxy->__getLazyProperties() as $property => $defaultValue) {
                    if ( ! array_key_exists($property, $existingProperties)) {
                        $proxy->$property = $defaultValue;
                    }
                }
            };

        }
    }

    /**
     * 
     */
    public function __clone()
    {
        $this->__cloner__ && $this->__cloner__->__invoke($this, '__clone', []);
    }

    /**
     * Forces initialization of the proxy
     */
    public function __load()
    {
        $this->__initializer__ && $this->__initializer__->__invoke($this, '__load', []);
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __isInitialized()
    {
        return $this->__isInitialized__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitialized($initialized)
    {
        $this->__isInitialized__ = $initialized;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitializer(\Closure $initializer = null)
    {
        $this->__initializer__ = $initializer;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __getInitializer()
    {
        return $this->__initializer__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setCloner(\Closure $cloner = null)
    {
        $this->__cloner__ = $cloner;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific cloning logic
     */
    public function __getCloner()
    {
        return $this->__cloner__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     * @static
     */
    public function __getLazyProperties()
    {
        return self::$lazyPropertiesDefaults;
    }

    
    /**
     * {@inheritDoc}
     */
    public function getId(): ?int
    {
        if ($this->__isInitialized__ === false) {
            return (int)  parent::getId();
        }


        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getId', []);

        return parent::getId();
    }

    /**
     * {@inheritDoc}
     */
    public function getName(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getName', []);

        return parent::getName();
    }

    /**
     * {@inheritDoc}
     */
    public function setName(string $name): \App\Entity\Projects
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setName', [$name]);

        return parent::setName($name);
    }

    /**
     * {@inheritDoc}
     */
    public function getNumberTrains(): ?int
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNumberTrains', []);

        return parent::getNumberTrains();
    }

    /**
     * {@inheritDoc}
     */
    public function setNumberTrains(?int $number_trains): \App\Entity\Projects
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNumberTrains', [$number_trains]);

        return parent::setNumberTrains($number_trains);
    }

    /**
     * {@inheritDoc}
     */
    public function getAvailable(): ?bool
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAvailable', []);

        return parent::getAvailable();
    }

    /**
     * {@inheritDoc}
     */
    public function setAvailable(?bool $available): \App\Entity\Projects
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAvailable', [$available]);

        return parent::setAvailable($available);
    }

    /**
     * {@inheritDoc}
     */
    public function getClients(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getClients', []);

        return parent::getClients();
    }

    /**
     * {@inheritDoc}
     */
    public function addClient(\App\Entity\Clients $client): \App\Entity\Projects
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addClient', [$client]);

        return parent::addClient($client);
    }

    /**
     * {@inheritDoc}
     */
    public function removeClient(\App\Entity\Clients $client): \App\Entity\Projects
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeClient', [$client]);

        return parent::removeClient($client);
    }

    /**
     * {@inheritDoc}
     */
    public function getEngineers(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getEngineers', []);

        return parent::getEngineers();
    }

    /**
     * {@inheritDoc}
     */
    public function addEngineer(\App\Entity\Engineers $engineer): \App\Entity\Projects
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addEngineer', [$engineer]);

        return parent::addEngineer($engineer);
    }

    /**
     * {@inheritDoc}
     */
    public function removeEngineer(\App\Entity\Engineers $engineer): \App\Entity\Projects
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeEngineer', [$engineer]);

        return parent::removeEngineer($engineer);
    }

    /**
     * {@inheritDoc}
     */
    public function getTrains(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getTrains', []);

        return parent::getTrains();
    }

    /**
     * {@inheritDoc}
     */
    public function addTrain(\App\Entity\Trains $train): \App\Entity\Projects
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addTrain', [$train]);

        return parent::addTrain($train);
    }

    /**
     * {@inheritDoc}
     */
    public function removeTrain(\App\Entity\Trains $train): \App\Entity\Projects
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeTrain', [$train]);

        return parent::removeTrain($train);
    }

    /**
     * {@inheritDoc}
     */
    public function getProfilePicture(): ?\Symfony\Component\HttpFoundation\File\File
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getProfilePicture', []);

        return parent::getProfilePicture();
    }

    /**
     * {@inheritDoc}
     */
    public function setProfilePicture(?\Symfony\Component\HttpFoundation\File\File $profile_picture): \App\Entity\Projects
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setProfilePicture', [$profile_picture]);

        return parent::setProfilePicture($profile_picture);
    }

    /**
     * {@inheritDoc}
     */
    public function getFilename(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getFilename', []);

        return parent::getFilename();
    }

    /**
     * {@inheritDoc}
     */
    public function setFilename(?string $filename): void
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setFilename', [$filename]);

        parent::setFilename($filename);
    }

    /**
     * {@inheritDoc}
     */
    public function getUpdatedAt()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUpdatedAt', []);

        return parent::getUpdatedAt();
    }

    /**
     * {@inheritDoc}
     */
    public function setUpdatedAt($updated_at): void
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUpdatedAt', [$updated_at]);

        parent::setUpdatedAt($updated_at);
    }

    /**
     * {@inheritDoc}
     */
    public function getClientsUsers(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getClientsUsers', []);

        return parent::getClientsUsers();
    }

    /**
     * {@inheritDoc}
     */
    public function addClientsUser(\App\Entity\ClientsUser $clientsUser): \App\Entity\Projects
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addClientsUser', [$clientsUser]);

        return parent::addClientsUser($clientsUser);
    }

    /**
     * {@inheritDoc}
     */
    public function removeClientsUser(\App\Entity\ClientsUser $clientsUser): \App\Entity\Projects
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeClientsUser', [$clientsUser]);

        return parent::removeClientsUser($clientsUser);
    }

}