<?php

namespace App\Form;

use App\Entity\AssociationBaseline;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AssociationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('Status')
            ->add('baseline')
            ->add('VersionLogiciel')
            ->add('ConfigLogiciel')
            ->add('ERTMS')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => AssociationBaseline::class,
        ]);
    }
}
