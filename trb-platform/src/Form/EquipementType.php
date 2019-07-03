<?php

namespace App\Form;

use App\Entity\Equipement;
use App\Entity\SoustypeEquipement;
use App\Entity\TypeEquipement;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EquipementType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('Type', EntityType::class, [
                'class' => TypeEquipement::class,
                'choice_label' => 'name',
                'required' => true
            ])
            ->add('Sous_type', EntityType::class, [
                'class' => SoustypeEquipement::class,
                'choice_label' => 'name',
                'required' => true
            ])
            ->add('DTR_board')
            ->add('Indice_DTR')
            ->add('Num_serie')
            // ->add('save', SubmitType::class, [
            //     'attr' => ['class' => 'btn-create-ertms']
            // ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Equipement::class,
        ]);
    }
}
