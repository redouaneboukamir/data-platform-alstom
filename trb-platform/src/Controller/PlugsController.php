<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PlugsController extends AbstractController
{
    /**
     * @Route("/plugs", name="plugs")
     */
    public function index()
    {
        return $this->render('plugs/index.html.twig', [
            'controller_name' => 'PlugsController',
        ]);
    }

    /**
     * @Route("/plugs/addplugs", name="addplugs")
     */
    public function addplugs()
    {
        
        
        
        
        return $this->render('plugs/index.html.twig', [
            'controller_name' => 'PlugsController',
        ]);
    }  
}
