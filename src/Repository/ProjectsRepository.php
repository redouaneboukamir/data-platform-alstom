<?php

namespace App\Repository;

use App\Entity\Projects;
use App\Entity\ProjectSearch;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Doctrine\ORM\QueryBuilder;
use phpDocumentor\Reflection\Types\Object_;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Projects|null find($id, $lockMode = null, $lockVersion = null)
 * @method Projects|null findOneBy(array $criteria, array $orderBy = null)
 * @method Projects[]    findAll()
 * @method Projects[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProjectsRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Projects::class);
    }


    private function  findAvailable():QueryBuilder
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.name', 'ASC')
            ->where('p.available = true');
    }



    public function findAllProjects(ProjectSearch $search): array
    {
        $query =  $this->findAvailable();

        if($search->getNameProject()){

            $query =  $query
                ->where('p.name = :name')
                ->setParameter('name',$search->getNameProject());

        }

        return $query->getQuery()->getResult();
    }
    // /**
    //  * @return Projects[] Returns an array of Projects objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Projects
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
