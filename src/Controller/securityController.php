<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class securityController extends AbstractController{


    /**
     * @Route("/", name="login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        $last_username = $authenticationUtils->getLastUsername();
        $error = $authenticationUtils->getLastAuthenticationError();

        if (TRUE === $this->get('security.authorization_checker')->isGranted('ROLE_ALSTOM')){
            return $this->redirectToRoute('alstom.home');
        }else if (TRUE === $this->get('security.authorization_checker')->isGranted('ROLE_CLIENT')){
            return $this->redirectToRoute('client.home');
        }else{
            return $this->render('home/login.html.twig', [
                'last_username' => $last_username,
                'error' => $error
            ]);

        }

    }


}