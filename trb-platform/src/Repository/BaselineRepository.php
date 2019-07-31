<?php

namespace App\Repository;

use App\Entity\Baseline;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Baseline|null find($id, $lockMode = null, $lockVersion = null)
 * @method Baseline|null findOneBy(array $criteria, array $orderBy = null)
 * @method Baseline[]    findAll()
 * @method Baseline[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BaselineRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Baseline::class);
    }
    public function findByName($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.name = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getResult();
    }
    // /**
    //  * @return Baseline[] Returns an array of Baseline objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Baseline
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
