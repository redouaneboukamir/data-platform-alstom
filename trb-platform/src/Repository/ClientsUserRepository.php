<?php

namespace App\Repository;

use App\Entity\ClientsUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ClientsUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method ClientsUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method ClientsUser[]    findAll()
 * @method ClientsUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ClientsUserRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ClientsUser::class);
    }

    // /**
    //  * @return ClientsUser[] Returns an array of ClientsUser objects
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
    public function findOneBySomeField($value): ?ClientsUser
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
