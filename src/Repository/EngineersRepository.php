<?php

namespace App\Repository;

use App\Entity\ClientsSearch;
use App\Entity\Engineers;
use App\Entity\EnginSearch;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Engineers|null find($id, $lockMode = null, $lockVersion = null)
 * @method Engineers|null findOneBy(array $criteria, array $orderBy = null)
 * @method Engineers[]    findAll()
 * @method Engineers[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EngineersRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Engineers::class);
    }

    private function findASCEngineer(): QueryBuilder
    {

        return $this->createQueryBuilder('e')
            ->orderBy('e.Name', 'ASC');

    }


    /**
     * @return Query
     */
    public function findAllEngineer(EnginSearch $search): array
    {
        $query =  $this->findASCEngineer();

        if($search->getNameEngineer()){

            $query =  $query
                ->where('e.Name = :name')
                ->setParameter('name',$search->getNameEngineer());

        }

        return $query->getQuery()->getResult();
    }
    // /**
    //  * @return Engineers[] Returns an array of Engineers objects
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
    public function findOneBySomeField($value): ?Engineers
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
