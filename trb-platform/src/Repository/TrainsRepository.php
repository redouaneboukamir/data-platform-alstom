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

    /**
     * @param TrainsSearch $search
     * @return array
     */
    public function findAllTrains(TrainsSearch $search): array
    {

        $query = $this->findASCTrains();
        $AllTrains = $this->findAll();
        $findTrains = [];


        if ($search->getNameTrain()) {

            foreach ($AllTrains as $currentTrain){
                $find = false;
                $compar = "";


                for ($i = 0; $i < (strlen($currentTrain->getName())); $i++) {

                    $compar .= $currentTrain->getName()[$i];
                    if($find === false) {

                        if (strtolower($currentTrain->getName()[$i]) === strtolower($search->getNameTrain()) ||
                            strtolower($compar) === strtolower($search->getNameTrain())) {
                            array_push($findTrains, $currentTrain);
                            $find = true;

                        }

                    }
                }

            }
            $query = $query
                ->where('t.name = :name')
                ->setParameter('name',$findTrains)
                ->getQuery()->getParameters()->getValues()[0]->getValue();
            return $query;
        }else{
            return $query->getQuery()->getResult();

        }

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
