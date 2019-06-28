<?php

namespace App\Repository;

use App\Entity\AssociationEquiptERTMS;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method AssociationEquiptERTMS|null find($id, $lockMode = null, $lockVersion = null)
 * @method AssociationEquiptERTMS|null findOneBy(array $criteria, array $orderBy = null)
 * @method AssociationEquiptERTMS[]    findAll()
 * @method AssociationEquiptERTMS[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AssociationEquiptERTMSRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AssociationEquiptERTMS::class);
    }

    // /**
    //  * @return AssociationEquiptERTMS[] Returns an array of AssociationEquiptERTMS objects
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
    public function findOneBySomeField($value): ?AssociationEquiptERTMS
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
