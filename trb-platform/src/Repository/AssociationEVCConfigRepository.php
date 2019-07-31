<?php

namespace App\Repository;

use App\Entity\AssociationEVCConfig;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method AssociationEVCConfig|null find($id, $lockMode = null, $lockVersion = null)
 * @method AssociationEVCConfig|null findOneBy(array $criteria, array $orderBy = null)
 * @method AssociationEVCConfig[]    findAll()
 * @method AssociationEVCConfig[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AssociationEVCConfigRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AssociationEVCConfig::class);
    }

    // /**
    //  * @return AssociationEVCConfig[] Returns an array of AssociationEVCConfig objects
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
    public function findOneBySomeField($value): ?AssociationEVCConfig
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
