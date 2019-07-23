<?php

namespace App\Repository;

use App\Entity\AssocEvcCarte;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method AssocEvcCarte|null find($id, $lockMode = null, $lockVersion = null)
 * @method AssocEvcCarte|null findOneBy(array $criteria, array $orderBy = null)
 * @method AssocEvcCarte[]    findAll()
 * @method AssocEvcCarte[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AssocEvcCarteRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AssocEvcCarte::class);
    }

    // /**
    //  * @return AssocEvcCarte[] Returns an array of AssocEvcCarte objects
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
    public function findOneBySomeField($value): ?AssocEvcCarte
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
