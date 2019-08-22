<?php

namespace App\Controller;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use App\Entity\Clients;
use App\Entity\ClientsSearch;
use App\Entity\Engineers;
use App\Entity\EnginSearch;
use App\Entity\Equipement;
use App\Entity\ERTMSEquipement;
use App\Form\ClientsSearchType;
use App\Form\ClientsType;
use App\Form\EngineerType;
use App\Form\EnginSearchType;
use App\Repository\ClientsRepository;
use App\Repository\EngineersRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Annotation\Route;
use App\Services\HttpClientKeycloak;
use App\Repository\TypeEquipementRepository;
use App\Repository\SoustypeEquipementRepository;


class alstomController extends AbstractController
{
    /**
     * @var ObjectManager
     */
    private $em;
    const SESSION = 'session';

    public function __construct(ObjectManager $em)
    {

        $this->em = $em;
        $tabEquipt = array();
        $this->tabEquipt = $tabEquipt;

        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $this->encoders = $encoders;
        $serializer = new Serializer($normalizers, $encoders);
        $this->serializer = $serializer;
    }

    /**
     * @Route("/alstom", name="alstom.home")
     * @return Response
     */
    //    Vue de la homepage
    public function index(HttpClientKeycloak $clientKeycloak): Response
    {

        $userRoles = $this->getUser()->getRoles();
        $userId = $this->container->get(KEY_SESSION)->get('userId');

        // dump($clientKeycloak->getUser($userId));   

        // dump($userRoles);

        return $this->render(('alstom\index.html.twig'), [
            'current_menu' => 'home'
        ]);
    }


    //    PAGE CLIENT -------------------------------------------------------------
    /**
     * @Route("/alstom/clients", name="alstom.client")
     * @return Response
     */
    //    Vue de tout les client
    public function clients(ClientsRepository $clientsRepository, Request $request): Response
    {
        $session = new Session();

        $search = new ClientsSearch();
        $form = $this->createForm(ClientsSearchType::class, $search);
        $form->handleRequest($request);
        $clients = $clientsRepository->findAllClients($search);

        $result_found = $session->get('result_notfound');

        return $this->render(('alstom/clients/clients.html.twig'), [
            'current_menu' => 'client',
            'clients' => $clients,
            'form' => $form->createView(),
            'result_notfound' => $result_found
        ]);
    }

    //    Vue de Client individuel

    /**
     * @Route("/alstom/clients/{id}", name="alstom.client-show")
     * @return Response
     */

    public function show_clients(Clients $clients, Request $request): Response
    {
        $form = $this->createForm(ClientsType::class, $clients);
        $form->handleRequest($request);

        //        Validation du formulaire
        if ($form->isSubmitted() && $form->isValid()) {

            $this->em->flush();
            $this->addFlash('success', 'Client modified with success');
            return $this->redirectToRoute('alstom.client');
        }

        return $this->render('alstom/clients/show-clients.html.twig', [
            'current_menu' => 'client',
            'client' => $clients,
            'form' => $form->createView()
        ]);
    }


    //    Page d'ajouts de clients
    /**
     * @Route("/alstom/create-clients", name="alstom.create-client")
     * @param Request $request
     * @return Response
     */
    public function create_clients(Request $request): Response
    {
        $client = new Clients();
        $form = $this->createForm(ClientsType::class, $client);
        $form->handleRequest($request);

        //        Validation du formulaire
        if ($form->isSubmitted() && $form->isValid()) {

            $this->em->persist($client);
            $this->em->flush();
            $this->addFlash('success', 'Client create with success');
            return $this->redirectToRoute('alstom.client');
        }

        return $this->render('alstom/clients/create-client.html.twig', [
            'current_menu' => 'client',
            'button' => 'Create',
            'form' => $form->createView()
        ]);
    }

    //    Page d'edit de clients
    /**
     * @Route("/alstom/edit-client/{id}", name="alstom.edit-client", methods={"GET","POST"} )
     * @param Request $request
     * @return Response
     */
    public function edit_client(Request $request, Clients $clients): Response
    {

        $form = $this->createForm(ClientsType::class, $clients);
        $form->handleRequest($request);

        //        Validation du formulaire
        if ($form->isSubmitted() && $form->isValid()) {

            $this->em->flush();
            $this->addFlash('success', 'Client modified with success');
            return $this->redirectToRoute('alstom.client');
        }

        return $this->render('alstom/clients/edit-client.html.twig', [
            'current_menu' => 'client',
            'button' => 'Edit',
            'client' => $clients,
            'form' => $form->createView()
        ]);
    }


    //    suppresion de clients
    /**
     * @Route("/alstom/client/{id}", name="alstom.delete-client", methods={"DELETE"})
     * @param Request $request
     * @return Response
     */
    public function delete_client(Clients $clients, Request $request): Response
    {
        if ($this->isCsrfTokenValid('delete' . $clients->getId(), $request->get('_token'))) {

            $this->em->remove($clients);
            $this->em->flush();
            $this->addFlash('success', 'Client delete with success');
        }
        return $this->redirectToRoute('alstom.client');
    }

    //    PAGE ENGINEER -------------------------------------------------------------

    /**
     * @Route("/alstom/engineers", name="alstom.engineers")
     * @return Response
     */
    //    Vue de la page engineers
    public function engineers(EngineersRepository $engineersRepository, Request $request): Response
    {
        $search = new EnginSearch();
        $form = $this->createForm(EnginSearchType::class, $search);
        $form->handleRequest($request);

        $engineersRepository = $engineersRepository->findAllEngineer($search);
        return $this->render(('alstom/engineers/engineers.html.twig'), [
            'current_menu' => 'engineers',
            'engineers' => $engineersRepository,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/alstom/engineer/{id}", name="alstom.engineer-show")
     * @return Response
     */
    public function show_engineer(Engineers $engineers)
    {
        return $this->render('alstom/engineers/show-engineer.html.twig', [
            'current_menu' => 'engineer',
            'engineer' => $engineers,
        ]);
    }
    //    page création engineer
    /**
     * @Route("/alstom/create-engineer", name="alstom.create-engineer")
     * @return Response
     */
    public function create_engineer(Request $request): Response
    {
        $engineer = new Engineers();
        $form = $this->createForm(EngineerType::class, $engineer);
        $form->handleRequest($request);

        //        Validation du formulaire
        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($engineer);
            $this->em->flush();
            $this->addFlash('success', 'Engineer create with success');
            return $this->redirectToRoute('alstom.engineers');
        }

        return $this->render('alstom/engineers/create-engineer.html.twig', [
            'current_menu' => 'engineers',
            'button' => 'Create',
            'form' => $form->createView()
        ]);
    }

    //    Page d'edit d'ingénieur
    /**
     * @Route("/alstom/edit-engineer/{id}", name="alstom.edit-engineer", methods={"POST", "GET"})
     * @return Response
     */
    public function edit_engineer(Request $request, Engineers $engineers): Response
    {
        $form = $this->createForm(EngineerType::class, $engineers);
        $form->handleRequest($request);

        //        Validation du formulaire
        if ($form->isSubmitted() && $form->isValid()) {

            $this->em->flush();
            $this->addFlash('success', 'Engineer modified with success');
            return $this->redirectToRoute('alstom.engineers');
        }

        return $this->render('alstom/engineers/edit-engineer.html.twig', [
            'current_menu' => 'engineers',
            'button' => 'Edit',
            'engineer' => $engineers,
            'form' => $form->createView()
        ]);
    }
    //    suppresion d'ingénieur
    /**
     * @Route("/alstom/engineer/{id}/delete", name="alstom.delete-engineer", methods={"DELETE"})
     * @param Request $request
     * @return Response
     */
    public function delete_engineer(Engineers $engineers, Request $request): Response
    {

        if ($this->isCsrfTokenValid('delete' . $engineers->getId(), $request->get('_token'))) {

            $this->em->remove($engineers);
            $this->em->flush();
            $this->addFlash('success', 'Engineer delete with success');
        }
        return $this->redirectToRoute('alstom.engineers');
    }


    // Fonction permettant de retourner le sous type en focntion du Type recu

    /**
     * @Route("alstom/checkSubtype", name="alstom.checkSubtype")
     * @return Response
     */
    public function checkSubtype(Request $request, SoustypeEquipementRepository $soustypeEquipementRepository)
    {

        $soustype = $soustypeEquipementRepository->findTypeById($request->request->get('equipement')['Type']);

        $jsonObjectSubtype = $this->serializer->serialize($soustype, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);

        return new Response($jsonObjectSubtype, 200, ['Content-Type' => 'application/json']);
    }



    // Fonction de création d'équipement
    /**
     * @Route("alstom/addEquipment", name="alstom.addEquipment")
     * @return Response
     */
    public function addEquipement(
        Request $request,
        TypeEquipementRepository $typeEquipementRepository,
        SoustypeEquipementRepository $soustypeEquipementRepository
    ) {
        $tabEquipt = $request->request->get('tabEquipts');
        foreach ($tabEquipt as $key => $value) {
            $equipement = new Equipement;
            $equipement->setType($typeEquipementRepository->find($value['equipement[Type']));
            if ($value['equipement[sous_type'] != "") {
                $equipement->setSousType($soustypeEquipementRepository->find($value['equipement[sous_type']));
            }
            $equipement->setDTRBoard($value['equipement[DTR_board']);
            $equipement->setIndiceDTR($value['equipement[Indice_DTR']);
            $equipement->setNumSerie($value['equipement[Num_serie']);
        }

        $jsonObjectEquipt = $this->serializer->serialize($equipement, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);

        return new Response($jsonObjectEquipt, 200, ['Content-Type' => 'application/json']);
    }

    /**
     * @Route("alstom/addErtms", name="alstom.addErtms", methods={"POST"})
     * @return Response
     */
    public function addErtms(Request $request): Response
    {
        $ertms = new ERTMSEquipement;

        $ertms_request = $request->request->get('ertmsName');
        $ertms->setNameConfiguration($ertms_request['ertms[name_configuration']);
        dump($request);
        return $this->json([
            'code' => 200,
            'ertms' => $ertms

        ], 200);
    }
}
