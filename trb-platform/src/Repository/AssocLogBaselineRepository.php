<?php

namespace App\Repository;

use App\Entity\AssocLogBaseline;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method AssocLogBaseline|null find($id, $lockMode = null, $lockVersion = null)
 * @method AssocLogBaseline|null findOneBy(array $criteria, array $orderBy = null)
 * @method AssocLogBaseline[]    findAll()
 * @method AssocLogBaseline[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AssocLogBaselineRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AssocLogBaseline::class);
    }

    // /**
    //  * @return AssocLogBaseline[] Returns an array of AssocLogBaseline objects
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
    public function findOneBySomeField($value): ?AssocLogBaseline
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
