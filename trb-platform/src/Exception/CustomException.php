<?php
/**
 * Created by PhpStorm.
 * User: ltochapn
 * Date: 07/12/2018
 * Time: 17:04.
 */

namespace App\Exception;

use Throwable;

class CustomException extends \RuntimeException
{
	protected $redirectRoute;

	protected $errorClassname;
	const ROUTE_LOGOUT = 'app_logout_1';

	public function __construct(
		$redirectRoute = self::ROUTE_LOGOUT,
		string $message = '',
		string $errorClassname = 'modal-error',
		int $code = 0,
		Throwable $previous = null
	) {
		parent::__construct($message, $code, $previous);
		$this->redirectRoute = $redirectRoute;
		$this->errorClassname = $errorClassname;
	}

	/**
	 * @return mixed
	 */
	public function getRedirectRoute()
	{
		return $this->redirectRoute;
	}

	/**
	 * @return string
	 */
	public function getErrorClassname(): string
	{
		return $this->errorClassname;
	}

	/**
	 * @param string $redirectRoute
	 */
	public function setRedirectRoute(string $redirectRoute): void
	{
		$this->redirectRoute = $redirectRoute;
	}
}
