<?php

namespace App\Form;

use App\Entity\ClientsUser;
use App\Entity\Fleets;
use App\Repository\FleetsRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ClientUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class, [
                'label' => 'Email',
                'attr' => [
                    'placeholder' => 'you@email.com',
                ]
                //                'required' => false
            ])
            ->add('name', null, [
                'label' => 'Name client',
                'attr' => [
                    'placeholder' => 'Name',
                ]
            ])
            ->add('fleets', EntityType::class, [
                'class' => Fleets::class,
                'query_builder' => function (FleetsRepository $FleetsRepository) {
                    return $FleetsRepository->findAvailable();
                },
                'choice_label' => 'name',
                'multiple' => true,
                'required' => false,
                'attr' => [
                    'placeholder' => 'Choose projects to clients',
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ClientsUser::class,
        ]);
    }
}
