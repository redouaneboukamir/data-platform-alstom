<?php

namespace App\Repository;

use App\Entity\TrainsSearch;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TrainsSearch|null find($id, $lockMode = null, $lockVersion = null)
 * @method TrainsSearch|null findOneBy(array $criteria, array $orderBy = null)
 * @method TrainsSearch[]    findAll()
 * @method TrainsSearch[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrainsSearchRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TrainsSearch::class);
    }

    // /**
    //  * @return TrainsSearch[] Returns an array of TrainsSearch objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TrainsSearch
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
