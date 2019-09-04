<?php
/**
 * Created by PhpStorm.
 * User: ltochapn
 * Date: 22/01/2019
 * Time: 11:10.
 */

namespace App\Constraints;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 * Class PasswordCheck
 */
class PasswordCheck extends Constraint
{
	public $message = 'Password does not match policy';

	public function validatedBy()
	{
		return \get_class($this) . 'Validator';
	}
}
