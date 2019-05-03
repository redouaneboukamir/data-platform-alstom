<?php

namespace App\Form;

use App\Entity\Clients;
use App\Entity\ClientsUser;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;

use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class, [
                'required' => true
            ])
//            ->add('roles')
            ->add('password', PasswordType::class,[
                'required' => true
            ])
            ->add('Client', EntityType::class, [
                'class' => Clients::class,
                'label' => "If client exist, select this email",
                'choice_label' => 'email',
                'multiple' => false,
                'required' => false
            ])
            ->add('clientUser', ClientUserType::class,[
                'required' => false

            ])
            
        ;

    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
