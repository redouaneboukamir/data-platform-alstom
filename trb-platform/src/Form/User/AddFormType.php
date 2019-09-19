<?php

namespace App\Form\User;

use App\Constraints\PasswordCheck;
use App\Entity\Fleets;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use App\Repository\FleetsRepository;

//use Symfony\Component\Validator\Constraints\NotBlank;

class AddFormType extends AbstractType
{
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		/** @var */
		dump($options['data']);

		$listAllGroups = $options['data']['groups'];
		array_shift($listAllGroups);
		array_shift($listAllGroups);
		array_pop($listAllGroups);

		$currentName = isset($options['data']['lastName']) ? $options['data']['lastName'] : null;
		$currentSurname = isset($options['data']['firstName']) ? $options['data']['firstName'] : null;
		$currentEmail = isset($options['data']['email']) ? $options['data']['email'] : null;

		// $currentFleets = isset($options['data']['attributes'][0]) ? $options['data']['attributes'][0] : null;
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
			->add('name', TextType::class, [
				'label' => 'Last Name',
				'data' => null != $currentName ? $currentName : '',
				'required' => true,
			])
			->add('surname', TextType::class, [
				'label' => 'First Name',
				'data' => null != $currentSurname ? $currentSurname : '',
				'required' => true,
			])
			->add('email', TextType::class, [
				'label' => 'Email',
				'data' => null != $currentEmail ? $currentEmail : '',
				'required' => true,
			])
			->add('fleets', EntityType::class, [
				'class' => Fleets::class,
				'query_builder' => static function (FleetsRepository $FleetsRepository) {
					return $FleetsRepository->findAvailable();
				},
				'attr' => [
					'id' => 'choice_project',
				],
				'label' => 'Fleets',
				// 'data' => null != $currentFleets ? $currentFleets : '',
				'choice_label' => 'name',
				'multiple' => true,
				'required' => false
			])
			->add('group', ChoiceType::class, [
				'choices' => $listAllGroups,
				'data' => null != $currentUser ? $currentUser['group'] : '',
				'placeholder' => '',
				'label' => 'User Group',
				/*'required' => false,
				'constraints' => [new NotBlank()],*/
			]);
		// ->add('password', RepeatedType::class, [
		// 	'type' => PasswordType::class,
		// 	'invalid_message' => 'The password fields must match.',
		// 	'options' => ['attr' => ['class' => 'password-field']],
		// 	'required' => true,
		// 	'constraints' => [/*new NotBlank(),*/new PasswordCheck()],
		// 	'first_options' => [
		// 		'label' => 'Password',
		// 		'help' => "16 characters minimum, at least one uppercase, one lowercase, one numeric and one non-alphanumeric characters",
		// 	],
		// 	'second_options' => ['label' => 'Repeat Password'],
		// ]);
	}
}
