<?php

namespace App\Form;

use App\Entity\ClientsSearch;
use Doctrine\DBAL\Types\StringType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ClientsSearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name_client', TextType::class,[
                'required' => false,
                'label' => false,
                'attr' => [
                    'value' => '',
                    'placeholder' => 'Name client'
                ]
            ])
//            ->add('country', TextType::class,[
//                'required' => false,
//                'label' => false,
//                'attr' => [
//                    'placeholder' => 'Country client'
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
            'data_class' => ClientsSearch::class,
            'method' => 'get',
            'csrf_protection' => false
        ]);
    }
    public function getBlockPrefix()
    {
        return '';
    }
}
