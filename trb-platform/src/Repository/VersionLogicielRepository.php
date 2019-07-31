<?php

namespace App\Repository;

use App\Entity\VersionLogiciel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method VersionLogiciel|null find($id, $lockMode = null, $lockVersion = null)
 * @method VersionLogiciel|null findOneBy(array $criteria, array $orderBy = null)
 * @method VersionLogiciel[]    findAll()
 * @method VersionLogiciel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VersionLogicielRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, VersionLogiciel::class);
    }

    public function findByRelease($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.release_note = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getResult();
    }
    // /**
    //  * @return VersionLogiciel[] Returns an array of VersionLogiciel objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?VersionLogiciel
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
