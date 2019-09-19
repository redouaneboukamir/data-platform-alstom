<?php

namespace App\Form;

use App\Entity\Engineers;
use App\Entity\Fleets;
use App\Repository\FleetsRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EngineerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('Name')
            ->add('Surname')
            ->add('fleets', EntityType::class, [
                'class' => Fleets::class,
                'query_builder' => function (FleetsRepository $FleetsRepository) {
                    return $FleetsRepository->findAvailable();
                },
                'choice_label' => 'name',
                'multiple' => true,
                'required' => false
            ])
            ->add('Num_Badge', null, [
                'label' => 'Number of badge'
            ])
            ->add('profilePicture', FileType::class, [
                'label' => 'Image profile (PNG, JPG, PDF)',
                'required' => false,
                'attr' => [
                    'id' => 'logo-id',
                    'class' => 'text-center center-block file-upload'
                ]

            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Engineers::class,
        ]);
    }
}
