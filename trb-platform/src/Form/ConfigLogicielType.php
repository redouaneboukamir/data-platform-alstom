<?php

namespace App\Form;

use App\Entity\ConfigLogiciel;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ConfigLogicielType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('plug')
            ->add('File', FileType::class, [
                'label' => 'File',
                'required' => false,
                'attr' => [
                    'id' => 'file_temp',
                    'class' => 'text-center center-block file-upload'
                ]
            ]);;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ConfigLogiciel::class,
        ]);
    }
}
