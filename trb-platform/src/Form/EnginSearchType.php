<?php

namespace App\Form;

use App\Entity\EnginSearch;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EnginSearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name_engineer', TextType::class,[
                'required' => false,
                'label' => false,
                'attr' => [
                    'value' => '',
                    'placeholder' => 'Name engineer'
                ]
            ])
//            ->add('num_badge', IntegerType::class,[
//                'required' => false,
//                'label' => false,
//                'attr' => [
//                    'placeholder' => 'Number of badge'
//                ]
//            ])
//            ->add('submit', SubmitType::class, [
//                'label' => 'Search'
//            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => EnginSearch::class,
            'method' => 'get',
            'csrf_protection' => false
        ]);
    }
    public function getBlockPrefix()
    {
        return '';
    }
}
