<?php

namespace App\Controller;

use App\Entity\Clients;
use App\Entity\Engineers;
use App\Form\ClientsType;
use App\Form\EngineerType;
use App\Repository\ClientsRepository;
use App\Repository\EngineersRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class alstomController extends AbstractController
{
    /**
     * @var ObjectManager
     */
    private $em;


    public function __construct(ObjectManager $em)
    {

        $this->em = $em;

    }
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


//    PAGE CLIENT -------------------------------------------------------------
    /**
     * @return Response
     */
//    Vue de tout les client
    public function clients(ClientsRepository $clientsRepository): Response
    {
        $clients = $clientsRepository->findAll();
        return $this->render(('alstom/clients/clients.html.twig'), [
            'current_menu' => 'client',
            'clients' => $clients
        ]);
    }
//    Page d'ajouts de clients
    /**
     * @param Request $request
     * @return Response
     */
    public function create_clients(Request $request): Response
    {
        $client = new Clients();
        $form = $this->createForm(ClientsType::class, $client);
        $form->handleRequest($request);

//        Validation du formulaire
        if($form->isSubmitted() && $form->isValid()){

            $this->em->persist($client);
            $this->em->flush();
            $this->addFlash('success', 'Client create with success');
            return $this->redirectToRoute('alstom.client');
        }

        return $this->render('alstom/clients/create-client.html.twig',[
            'current_menu' => 'client',
            'button' =>'Create',
            'form' => $form->createView()
        ]);
    }

    //    Page d'edit de clients
    /**
     * @param Request $request
     * @return Response
     */
    public function edit_client(Request $request, Clients $clients): Response
    {

        $form = $this->createForm(ClientsType::class, $clients);
        $form->handleRequest($request);

        //        Validation du formulaire
        if($form->isSubmitted() && $form->isValid()){

            $this->em->flush();
            $this->addFlash('success', 'Client modified with success');
            return $this->redirectToRoute('alstom.client');
        }

        return $this->render('alstom/clients/edit-client.html.twig', [
            'current_menu' => 'client',
            'button' =>'Edit',
            'client' => $clients,
            'form' => $form->createView()
        ]);

    }


    //    suppresion de clients
    /**
     * @param Request $request
     * @return Response
     */
    public function delete_client(Clients $clients, Request $request): Response
    {
        if($this->isCsrfTokenValid('delete'.$clients->getId(), $request->get('_token'))){

            $this->em->remove($clients);
            $this->em->flush();
            $this->addFlash('success', 'Client delete with success');

        }
            return $this->redirectToRoute('alstom.client');


    }

//    PAGE ENGINEER -------------------------------------------------------------

//    Vue de la page client
    public function engineers(EngineersRepository $engineersRepository): Response
    {
        $engineersRepository = $engineersRepository->findAll();
        return $this->render(('alstom/engineers/engineers.html.twig'), [
            'current_menu' => 'engineers',
            'engineers' => $engineersRepository
        ]);
    }

//    page création engineer

    public function create_engineer(Request $request): Response
    {
        $engineer = new Engineers();
        $form = $this->createForm(EngineerType::class, $engineer);
        $form->handleRequest($request);

//        Validation du formulaire
        if($form->isSubmitted() && $form->isValid()){
            $this->em->persist($engineer);
            $this->em->flush();
            $this->addFlash('success', 'Engineer create with success');
            return $this->redirectToRoute('alstom.engineers');
        }

        return $this->render('alstom/engineers/create-engineer.html.twig',[
            'current_menu' => 'engineers',
            'button' =>'Create',
            'form' => $form->createView()
        ]);
    }

//    Page d'edit d'ingénieur
    public function edit_engineer(Request $request, Engineers $engineers): Response
    {
        $form = $this->createForm(EngineerType::class, $engineers);
        $form->handleRequest($request);

        //        Validation du formulaire
        if($form->isSubmitted() && $form->isValid()){

            $this->em->flush();
            $this->addFlash('success', 'Engineer modified with success');
            return $this->redirectToRoute('alstom.engineers');
        }

        return $this->render('alstom/engineers/edit-engineer.html.twig', [
            'current_menu' => 'engineers',
            'button' =>'Edit',
            'client' => $engineers,
            'form' => $form->createView()
        ]);
    }
    //    suppresion d'ingénieur
    /**
     * @param Request $request
     * @return Response
     */
    public function delete_engineer(Engineers $engineers, Request $request): Response
    {
        if($this->isCsrfTokenValid('delete'.$engineers->getId(), $request->get('_token'))){

            $this->em->remove($engineers);
            $this->em->flush();
            $this->addFlash('success', 'Engineer delete with success');

        }
        return $this->redirectToRoute('alstom.engineers');


    }

}
