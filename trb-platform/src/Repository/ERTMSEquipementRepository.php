<?php

namespace App\Repository;

use App\Entity\ERTMSEquipement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ERTMSEquipement|null find($id, $lockMode = null, $lockVersion = null)
 * @method ERTMSEquipement|null findOneBy(array $criteria, array $orderBy = null)
 * @method ERTMSEquipement[]    findAll()
 * @method ERTMSEquipement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ERTMSEquipementRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ERTMSEquipement::class);
    }
    public function findByNameConfig($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.name_configuration = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getResult();
    }
    // /**
    //  * @return ERTMSEquipement[] Returns an array of ERTMSEquipement objects
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
    public function findOneBySomeField($value): ?ERTMSEquipement
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
