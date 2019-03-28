<?php

namespace App\Form;

use App\Entity\Clients;
use App\Entity\Country;
use function PHPSTORM_META\type;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;


class ClientsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, [
                'label' => 'Name client'
            ])
            ->add('trains', null, [
                'label' => 'Number of trains'
            ])
            ->add('countries', EntityType::class,[
                'class' => Country::class,
                'choice_label' => 'name',
                'multiple' => true,
                'required' => false
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email'
//                'required' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Clients::class,
        ]);
    }
}
