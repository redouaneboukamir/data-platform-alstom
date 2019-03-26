<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class alstomController extends AbstractController
{
    /**
     * @return Response
     */
//    Vue de la homepage
    public function index(): Response
    {
        return $this->render(('alstom\index.html.twig'), [
            'current_menu' => 'home'
        ]);
    }

    /**
     * @return Response
     */
//    Vue de la page client
    public function clients(): Response
    {
        return $this->render(('alstom\clients.html.twig'), [
            'current_menu' => 'client'
        ]);
    }

}