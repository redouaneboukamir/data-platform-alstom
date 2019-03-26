<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class clientController extends AbstractController
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        return $this->render(('client\index.html.twig'), [
            'current_menu' => 'home'
        ]);
    }


}