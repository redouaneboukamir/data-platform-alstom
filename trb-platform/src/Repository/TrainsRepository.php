<?php

namespace App\Repository;

use App\Entity\Trains;
use App\Entity\TrainsSearch;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Trains|null find($id, $lockMode = null, $lockVersion = null)
 * @method Trains|null findOneBy(array $criteria, array $orderBy = null)
 * @method Trains[]    findAll()
 * @method Trains[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrainsRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Trains::class);
    }

    public function findASCTrains(): QueryBuilder
    {

        return $this->createQueryBuilder('t')
            ->orderBy('t.name', 'ASC');
    }
    public function findTrainByFleet($fleet)
    {
        return $this->createQueryBuilder('t')
            ->where('t.Fleets = :fleet')
            ->setParameter('fleet', $fleet)
            ->getQuery()
            ->getResult();
    }
    /**
     * @param TrainsSearch $search
     * @return array
     */
    public function findAllTrains($search, $q): array
    {

        $em = $this->getEntityManager();
        $query = $em->createQuery(
            'SELECT t.name 
            FROM App\Entity\Trains t
            WHERE t.name LIKE :motclef 
            ORDER BY t.name ASC'
        )
            ->setParameter('motclef', $search);

        // returns an array of Product objects
        return $query
            ->execute($q);
    }
    // /**
    //  * @return Trains[] Returns an array of Trains objects
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
    public function findOneBySomeField($value): ?Trains
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
