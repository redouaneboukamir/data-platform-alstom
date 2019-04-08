<?php

namespace App\Form;

use App\Entity\Projects;
use App\Entity\Trains;
use App\Repository\ProjectsRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TrainsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('projects', EntityType::class, [
                'class' => Projects::class,
                'query_builder' => static function(ProjectsRepository $projectsRepository){
                    return $projectsRepository->findAvailable();
                },
                'choice_label' => 'name',
//                'multiple' => true,
                'required' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Trains::class,
        ]);
    }
}
