<?php

namespace App\Form;

use App\Entity\Equipement;
use App\Entity\SoustypeEquipement;
use App\Entity\TypeEquipement;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
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
            ]);
        $builder->get('Type')->addEventListener(
            FormEvents::POST_SUBMIT,
            function (FormEvent $event) {
                $form = $event->getForm();

                $form->getParent()->add('Sous_type', EntityType::class, [
                    'class' => SoustypeEquipement::class,
                    'choices' => $form->getData()->getSousType()
                ]);
            }
        );
        // ->add('Sous_type', EntityType::class, [
        //     'class' => SoustypeEquipement::class,
        //     'choice_label' => 'name',
        //     'required' => true
        // ])
        // ->add('DTR_board')
        // ->add('Indice_DTR')
        // ->add('Num_serie');
        // ->add('Add', SubmitType::class, [
        //     'attr' => ['class' => 'btn btn-primary']
        // ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Equipement::class,
        ]);
    }
}
