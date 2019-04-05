<?php

namespace App\Form;

use App\Entity\Clients;
use App\Entity\Country;
use App\Entity\Projects;
use App\Repository\ProjectsRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;


class ClientsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, [
                'label' => 'Name client'
            ])
            ->add('projects', EntityType::class, [
                'class' => Projects::class,
                'query_builder' => function(ProjectsRepository $projectsRepository){
                    return $projectsRepository->findAvailable();
                },
                'choice_label' => 'name',
                'multiple' => true,
                'required' => false
            ])
            ->add('countries', EntityType::class,[
                'class' => Country::class,
                'choice_label' => 'name',
                'multiple' => true,
                'required' => false
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email'
//                'required' => false
            ])

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Clients::class,
        ]);
    }
}
