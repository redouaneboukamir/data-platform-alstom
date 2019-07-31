<?php

namespace App\Repository;

use App\Entity\ConfigLogiciel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ConfigLogiciel|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConfigLogiciel|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConfigLogiciel[]    findAll()
 * @method ConfigLogiciel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConfigLogicielRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ConfigLogiciel::class);
    }

    public function findByPlug($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.identif_plug = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getResult();
    }
    // /**
    //  * @return ConfigLogiciel[] Returns an array of ConfigLogiciel objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ConfigLogiciel
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
