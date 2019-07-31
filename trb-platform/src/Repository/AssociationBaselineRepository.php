<?php

namespace App\Repository;

use App\Entity\AssociationBaseline;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method AssociationBaseline|null find($id, $lockMode = null, $lockVersion = null)
 * @method AssociationBaseline|null findOneBy(array $criteria, array $orderBy = null)
 * @method AssociationBaseline[]    findAll()
 * @method AssociationBaseline[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AssociationBaselineRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AssociationBaseline::class);
    }

    // /**
    //  * @return AssociationBaseline[] Returns an array of AssociationBaseline objects
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
    public function findOneBySomeField($value): ?AssociationBaseline
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
