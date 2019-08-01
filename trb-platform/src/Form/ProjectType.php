<?php

namespace App\Form;

use App\Entity\Clients;
use App\Entity\Engineers;
use App\Entity\Projects;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProjectType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('available', HiddenType::class, [
                'data' => true
            ]);
        // ->add('profilePicture', FileType::class, [
        //     'label' => 'Image project (PNG, JPG, PDF)',
        //     'required' => false,
        //     'attr' => ['id' => 'file', 'class' => 'inputfile']
        // ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Projects::class,
        ]);
    }
}
