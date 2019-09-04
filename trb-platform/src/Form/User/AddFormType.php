<?php

namespace App\Form\User;

use App\Constraints\PasswordCheck;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

//use Symfony\Component\Validator\Constraints\NotBlank;

class AddFormType extends AbstractType
{
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		/** @var */
		$listAllGroups = $options['data']['groups'];
		$currentUser = isset($options['data']['currentUser']) ? $options['data']['currentUser'] : null;
		$disabled = isset($options['data']['disabled']);
		$help = false === $disabled ? 'The user name must be unique and case insensitive' : '';
		$required = !$disabled;

		$builder
			->add('username', TextType::class, [
				'label' => 'User Name',
				'help' => $help,
				'data' => null != $currentUser ? $currentUser['username'] : '',
				'required' => $required,
				'attr' => [
					'readonly' => $disabled,
				],
				/*'required' => false,
				'constraints' => [new NotBlank()],*/
			])
			->add('group', ChoiceType::class, [
				'choices' => $listAllGroups,
				'data' => null != $currentUser ? $currentUser['group'] : '',
				'placeholder' => '',
				'label' => 'User Group',
				/*'required' => false,
				'constraints' => [new NotBlank()],*/
			])
			->add('password', RepeatedType::class, [
				'type' => PasswordType::class,
				'invalid_message' => 'The password fields must match.',
				'options' => ['attr' => ['class' => 'password-field']],
				'required' => true,
				'constraints' => [/*new NotBlank(),*/new PasswordCheck()],
				'first_options' => [
					'label' => 'Password',
					'help' => "16 characters minimum, at least one uppercase, one lowercase, one numeric and one non-alphanumeric characters",
				],
				'second_options' => ['label' => 'Repeat Password'],
			]);
	}
}
