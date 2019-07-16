<?php

namespace App\Repository;

use App\Entity\SoustypeEquipement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Doctrine\DBAL\Query\QueryBuilder;

/**
 * @method SoustypeEquipement|null find($id, $lockMode = null, $lockVersion = null)
 * @method SoustypeEquipement|null findOneBy(array $criteria, array $orderBy = null)
 * @method SoustypeEquipement[]    findAll()
 * @method SoustypeEquipement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SoustypeEquipementRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, SoustypeEquipement::class);
    }

    public function findTypeById($id)
    {
        return $this->createQueryBuilder('s')
            ->where('s.typeEquipement = :id')
            ->setParameter('id', $id);
    }
    // /**
    //  * @return SoustypeEquipement[] Returns an array of SoustypeEquipement objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SoustypeEquipement
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
