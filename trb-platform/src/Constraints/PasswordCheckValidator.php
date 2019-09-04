<?php
/**
 * Created by PhpStorm.
 * User: ltochapn
 * Date: 22/01/2019
 * Time: 15:01.
 */

namespace App\Constraints;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;

class PasswordCheckValidator extends ConstraintValidator
{
	/**
	 * Checks if the passed value is valid.
	 *
	 * @param mixed      $value      The value that should be validated
	 * @param Constraint $constraint The constraint for the validation
	 */
	public function validate($value, Constraint $constraint)
	{
		if (!$constraint instanceof PasswordCheck) {
			throw new UnexpectedTypeException($constraint, PasswordCheck::class);
		}

		// custom constraints should ignore null and empty values to allow
		// other constraints (NotBlank, NotNull, etc.) take care of that
		if (null === $value || '' === $value) {
			return;
		}

		$pattern = '/(?-i)(?=^.{16,}$)(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)^.*$/';
		if (!preg_match($pattern, $value, $matches)) {
			$this->context->buildViolation($constraint->message)
				->setParameter('{{ string }}', $value)
				->addViolation();
		}
	}
}
