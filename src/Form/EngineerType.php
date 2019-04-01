<?php

namespace App\Form;

use App\Entity\Engineers;
use App\Entity\Projects;
use App\Repository\ProjectsRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EngineerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('Name')
            ->add('Surname')
            ->add('projects', EntityType::class, [
                'class' => Projects::class,
                'query_builder' => function(ProjectsRepository $projectsRepository){
                    return $projectsRepository->findAvailable();
                },
                'choice_label' => 'name',
                'multiple' => true,
                'required' => false
            ])
            ->add('Num_Badge', null,[
                'label' => 'Number of badge'
            ])

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Engineers::class,
        ]);
    }
}
