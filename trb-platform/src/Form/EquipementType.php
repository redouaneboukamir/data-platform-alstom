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
use Symfony\Component\Form\FormInterface;
use Doctrine\DBAL\Types\Type;
use App\Repository\EquipementRepository;
use Doctrine\Common\Persistence\ObjectManager;

class EquipementType extends AbstractType
{
    public function __construct(ObjectManager $em)
    {
        $this->em = $em;
    }
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('Type', EntityType::class, [
                'class' => TypeEquipement::class,
                'choice_label' => 'name',
                'required' => true
            ])
            // $formModifier = function (FormInterface $form, TypeEquipement $typeEquipement = null) {
            //     $soustype = null === $typeEquipement ? [] : $typeEquipement->getSousType()->getValues();
            //     $soustype = $typeEquipement->getSousType()->getValues();
            //     dump($typeEquipement->getSousType()->getValues());

            //     $form->getParent()->add('Sous_type', EntityType::class, [
            //         'class' => SoustypeEquipement::class,
            //         'placeholder' => '',
            //         'choices' => $soustype,
            //     ]);
            // };

            ->add('sous_type', EntityType::class, [
                'class' => SoustypeEquipement::class,
                'choice_label' => 'name',
                'required' => true
            ])
            // $builder->get('Type')->addEventListener(
            //     FormEvents::PRE_SUBMIT,
            //     function (FormEvent $event) use ($formModifier) {
            //         $form = $event->getForm();
            //         $data = $event->getData();
            //         $type = $this->em->getRepository(TypeEquipement::class)->find($data);

            //         $formModifier($event->getForm(), $type);

            //         $form->getParent()->add('Sous_type', EntityType::class, [
            //             'class' => SoustypeEquipement::class,
            //             'choices' => $form->getData()->getSousType(),
            //             'attr' => [

            //                 'id' => 'equipement_Sous_Type'
            //             ]
            //         ]);
            //     }
            // );


            ->add('DTR_board')
            ->add('Indice_DTR')
            ->add('Num_serie');
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
