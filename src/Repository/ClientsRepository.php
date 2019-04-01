<?php

namespace App\Repository;

use App\Entity\Clients;
use App\Entity\ClientsSearch;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Clients|null find($id, $lockMode = null, $lockVersion = null)
 * @method Clients|null findOneBy(array $criteria, array $orderBy = null)
 * @method Clients[]    findAll()
 * @method Clients[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ClientsRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Clients::class);
    }


    public function findASCClients(): QueryBuilder
    {

        return $this->createQueryBuilder('c')
            ->orderBy('c.name', 'ASC');

    }

    /**
     * @param ClientsSearch $search
     * @return array
     */
    public function findAllClients(ClientsSearch $search): array
    {

        $query = $this->findASCClients();
        $AllClients = $this->findAll();
        $findClients = [];


        if ($search->getNameClient()) {

            foreach ($AllClients as $currentClient){
                    $find = false;
                    $compar = "";


                        for ($i = 0; $i < (strlen($currentClient->getName())); $i++) {

                            $compar .= $currentClient->getName()[$i];
                            if($find === false) {

                                if (strtolower($currentClient->getName()[$i]) === strtolower($search->getNameClient()) ||
                                    strtolower($compar) === strtolower($search->getNameClient())) {

                                    array_push($findClients, $currentClient);
                                    $find = true;

                                }

                        }
                    }

            }
                $query = $query
                    ->where('c.name = :name')
                    ->setParameter('name',$findClients)
                    ->getQuery()->getParameters()->getValues()[0]->getValue();
                return $query;
        }else{
            return $query->getQuery()->getResult();

        }

    }

    // /**
    //  * @return Clients[] Returns an array of Clients objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Clients
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
