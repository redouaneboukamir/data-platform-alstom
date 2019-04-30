<?php

namespace App\Form;

use App\Entity\EVC;
use App\Entity\Projects;
use App\Entity\Trains;
use App\Repository\ProjectsRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
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
                'attr' => [
                    'id' => 'choice_project'
                ],
                'choice_label' => 'name',
//                'multiple' => true,
                'required' => false
            ])
            ->add('trainType', ChoiceType::class, [
                'choices' => [
                    'Locomotive' => 'locomotive',
                    'Train' => 'train'
                ],
                'attr' => [
                    'class' => 'test'
                ]
            ])
            ->add('eVC', EntityType::class, [
                'label' => 'Choose EVC',
                'class' => EVC::class,
                'choice_label' => 'ETCSID',
                'required' => false,
                'attr' => [
                    'placeholder' => 'Choose EVC to train',
                ]
            ])
            ->add('eVC',EVCType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Trains::class,
        ]);
    }
}
