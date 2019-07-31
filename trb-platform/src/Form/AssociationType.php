<?php

namespace App\Form;

use App\Entity\AssociationBaseline;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\VersionLogiciel;
use App\Entity\ConfigLogiciel;
use App\Entity\ERTMSEquipement;
use App\Entity\Baseline;

class AssociationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            // ->add('Status')
            ->add('baseline', EntityType::class, [
                'label' => 'Select baseline',
                'class' => Baseline::class,
                'choice_label' => 'name',
                'required' => true
            ])
            ->add('VersionLogiciel', EntityType::class, [
                'label' => 'Select version',
                'class' => VersionLogiciel::class,
                'choice_label' => 'name',
                'required' => true
            ])
            ->add('ConfigLogiciel', EntityType::class, [
                'label' => 'Select baseline',
                'class' => ConfigLogiciel::class,
                'choice_label' => 'name',
                'required' => true
            ])
            ->add('ERTMS', EntityType::class, [
                'label' => 'Select baseline',
                'class' => ERTMSEquipement::class,
                'choice_label' => 'name_configuration',
                'required' => true
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => AssociationBaseline::class,
        ]);
    }
}
