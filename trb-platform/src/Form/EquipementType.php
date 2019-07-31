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
use App\Repository\SoustypeEquipementRepository;
use Symfony\Component\Form\Extension\Validator\Constraints\Form;
use Symfony\Component\HttpFoundation\Request;

class EquipementType extends AbstractType
{
    public function __construct(ObjectManager $em)
    {
        $this->em = $em;
    }
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->builder = $builder;

        $builder
            ->add('Type', EntityType::class, [
                'class' => TypeEquipement::class,
                'choice_label' => 'name',
                'required' => true
            ]);
        $builder->add('sous_type', EntityType::class, [
            'class' => SoustypeEquipement::class,
            // 'query_builder' => function (SoustypeEquipementRepository $soustypeEquipementRepository) {

            //     $data = $this->builder->getData()->getType();
            //     dump($data);
            //     // if ($data != null) {
            //     //     return $soustypeEquipementRepository->findTypeById($data->getId());
            //     // } else {
            //     //     return  $soustypeEquipementRepository->findTypeById('2');
            //     // }
            // },
            'choice_label' => 'name',
            'required' => true
        ])

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
    public function getSubType($data, SoustypeEquipementRepository $soustypeEquipementRepository)
    {
        if ($data != null) {
            return $soustypeEquipementRepository->findTypeById($data->getId());
        } else {
            return  $soustypeEquipementRepository->findTypeById('1');
        }
    }
}
