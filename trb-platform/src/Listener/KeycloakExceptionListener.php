<?php
/**
 * Created by PhpStorm.
 * User: ltochapn
 * Date: 06/12/2018
 * Time: 11:56.
 */

namespace App\Listener;

use App\Exception\CustomException;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\GetResponseForExceptionEvent;

class KeycloakExceptionListener
{
	private $logger;
	private $session;
	private $router;

	public function __construct(ContainerInterface $container, LoggerInterface $logger)
	{
		$this->session = $container->get('session');
		$this->logger = $logger;
		$this->router = $container->get('router');
	}

	public function onKernelException(GetResponseForExceptionEvent $event)
	{
		$exception = $event->getException();

		if ($exception instanceof CustomException) {
			$this->session->getFlashBag()->add($exception->getErrorClassname(), $exception->getMessage());
			$event->setResponse(
				new RedirectResponse(
					$this->router->generate($exception->getRedirectRoute()),
					Response::HTTP_FOUND
				)
			);
		}
	}
}
