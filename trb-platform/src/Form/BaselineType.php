<?php

namespace App\Form;

use App\Entity\Baseline;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Entity\Projects;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;



class BaselineType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, [
                'label' => "Add name baseline"
            ])
            ->add('projects', EntityType::class, [
                'class' => Projects::class,
                // 'data' => null != $project ? $project : '',
                'attr' => [
                    'id' => 'select-project-fleet',
                    'readonly' => true,
                ],
                'label' => 'Project',
                'choice_label' => 'name',
                'multiple' => false,
                'required' => false
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Baseline::class,
        ]);
    }
}
