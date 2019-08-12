<?php

namespace App\Form;

use App\Entity\ConfigLogiciel;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Validator\Constraints\File;

class ConfigLogicielType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            // ->add('plug')
            ->add('File', FileType::class, [
                'label' => false,
                'required' => true,
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
