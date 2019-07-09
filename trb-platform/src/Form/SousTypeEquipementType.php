<?php

namespace App\Form;

use App\Entity\SoustypeEquipement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SousTypeEquipementType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, [
                'label' => false,
                'attr' => [
                    'class' => '',
                    'placeholder' => '  '
                ]
            ])
            // ->add('save', ButtonType::class, [
            //     'attr' => [
            //         'class' => 'btn-success btn-add'
            //     ]
            // ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => SoustypeEquipement::class,
        ]);
    }
}
