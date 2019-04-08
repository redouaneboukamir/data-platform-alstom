<?php

namespace App\Form;

use App\Entity\TrainsSearch;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TrainsSearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name_train', TextType::class,[
                'required' => false,
                'label' => false,
                'attr' => [
                    'value' => '',
                    'placeholder' => 'Name train'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => TrainsSearch::class,
        ]);
    }
}
