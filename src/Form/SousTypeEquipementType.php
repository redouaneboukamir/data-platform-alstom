<?php

namespace App\Form;

use App\Entity\SoustypeEquipement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SousTypeEquipementType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, [
                'label' => "Name sous type"
            ])
            ->add('save', SubmitType::class, [
                'attr' => ['class' => 'btn btn-secondary  mt-4']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => SoustypeEquipement::class,
        ]);
    }
}
