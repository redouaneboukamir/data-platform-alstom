<?php

namespace App\Repository;

use App\Entity\Fleets;
use App\Entity\FleetSearch;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Doctrine\ORM\QueryBuilder;
use phpDocumentor\Reflection\Types\Object_;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Fleets|null find($id, $lockMode = null, $lockVersion = null)
 * @method Fleets|null findOneBy(array $criteria, array $orderBy = null)
 * @method Fleets[]    findAll()
 * @method Fleets[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FleetsRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Fleets::class);
        $that = $this;
        $this->that = $that;
    }


    public function  findAvailable(): QueryBuilder
    {
        return $this->createQueryBuilder('f')
            ->orderBy('f.name', 'ASC')
            ->where('f.available = true');
    }

    public function findTrainsInFleets()
    {
        return $this->createQueryBuilder('p');
    }
    public function findByAccess($value)
    {

        // return $this->createQueryBuilder('p')
        //     ->andWhere('p.id = :val')
        //     ->setParameter('val', $value)
        //     ->getQuery()
        //     ->getResult();
    }
    public function findByName($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.name = :val')
            ->setParameter('val', $value[0]['name'])
            ->getQuery()
            ->getResult();
    }
    public function findAllFleets($search, $q): array
    {
        $em = $this->getEntityManager();
        $query = $em->createQuery(
            'SELECT f.name 
            FROM App\Entity\Fleets f 
            WHERE f.name LIKE :motclef 
            ORDER BY f.name ASC'
        )
            ->setParameter('motclef', $search);
        return $query->execute($q);
    }

    // /**
    //  * @return Fleets[] Returns an array of Fleets objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Fleets
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
