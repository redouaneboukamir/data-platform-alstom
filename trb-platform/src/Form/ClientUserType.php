<?php

namespace App\Form;

use App\Entity\ClientsUser;
use App\Entity\Projects;
use App\Repository\ProjectsRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ClientUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class, [
                'label' => 'Email',
                'attr' => [
                    'placeholder' => 'you@email.com',
                ]
//                'required' => false
            ])
            ->add('name', null, [
                'label' => 'Name client',
                'attr' => [
                    'placeholder' => 'Name',
                ]
            ])
            ->add('projects', EntityType::class, [
                'class' => Projects::class,
                'query_builder' => function(ProjectsRepository $projectsRepository){
                    return $projectsRepository->findAvailable();
                },
                'choice_label' => 'name',
                'multiple' => true,
                'required' => false,
                'attr' => [
                    'placeholder' => 'Choose projects to clients',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ClientsUser::class,
        ]);
    }
}
