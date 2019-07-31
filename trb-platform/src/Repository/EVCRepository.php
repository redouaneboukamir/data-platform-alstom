<?php

namespace App\Repository;

use App\Entity\EVC;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method EVC|null find($id, $lockMode = null, $lockVersion = null)
 * @method EVC|null findOneBy(array $criteria, array $orderBy = null)
 * @method EVC[]    findAll()
 * @method EVC[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EVCRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, EVC::class);
    }

    // /**
    //  * @return EVC[] Returns an array of EVC objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?EVC
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
