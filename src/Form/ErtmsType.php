<?php

namespace App\Form;

use App\Entity\ERTMSEquipement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ErtmsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name_configuration', null,[
                'attr' => [
                    'label' => "test",

                    ]

            ])
            ->add('save', SubmitType::class, [
                'attr' => ['class' => 'btn btn-primary']
            ])

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ERTMSEquipement::class,
        ]);
    }
}
