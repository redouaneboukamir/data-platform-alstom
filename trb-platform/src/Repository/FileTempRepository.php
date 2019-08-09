<?php

namespace App\Repository;

use App\Entity\FileTemp;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method FileTemp|null find($id, $lockMode = null, $lockVersion = null)
 * @method FileTemp|null findOneBy(array $criteria, array $orderBy = null)
 * @method FileTemp[]    findAll()
 * @method FileTemp[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FileTempRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, FileTemp::class);
    }

    // /**
    //  * @return FileTemp[] Returns an array of FileTemp objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?FileTemp
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
