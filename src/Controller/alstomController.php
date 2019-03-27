<?php

namespace App\Controller;

use App\Entity\Clients;
use App\Form\ClientsType;
use App\Repository\ClientsRepository;
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

    /**
     * @return Response
     */
//    Vue de la page client
    public function clients(ClientsRepository $clientsRepository): Response
    {
        $clients = $clientsRepository->findAll();
        return $this->render(('alstom\clients.html.twig'), [
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

        return $this->render('alstom/create-client.html.twig',[
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

        return $this->render('alstom/edit-client.html.twig', [
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

}
