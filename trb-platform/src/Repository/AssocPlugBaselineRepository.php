<?php

namespace App\Repository;

use App\Entity\AssocPlugBaseline;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method AssocPlugBaseline|null find($id, $lockMode = null, $lockVersion = null)
 * @method AssocPlugBaseline|null findOneBy(array $criteria, array $orderBy = null)
 * @method AssocPlugBaseline[]    findAll()
 * @method AssocPlugBaseline[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AssocPlugBaselineRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AssocPlugBaseline::class);
    }
    public function findByBaseline($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.baseline = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getResult();
    }
    // /**
    //  * @return AssocPlugBaseline[] Returns an array of AssocPlugBaseline objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AssocPlugBaseline
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
