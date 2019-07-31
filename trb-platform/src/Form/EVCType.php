<?php

namespace App\Form;

use App\Entity\EVC;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EVCType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('ETCS_ID' ,null, [
                'label' => 'ETCS ID',
                'attr' => [
                    'placeholder' => 'ID ETCS',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => EVC::class,
        ]);
    }
}
