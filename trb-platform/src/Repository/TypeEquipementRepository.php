<?php

namespace App\Repository;

use App\Entity\TypeEquipement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TypeEquipement|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeEquipement|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeEquipement[]    findAll()
 * @method TypeEquipement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeEquipementRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TypeEquipement::class);
    }

    // /**
    //  * @return TypeEquipement[] Returns an array of TypeEquipement objects
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
    public function findOneBySomeField($value): ?TypeEquipement
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
