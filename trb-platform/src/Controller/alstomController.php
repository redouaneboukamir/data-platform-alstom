<?php

namespace App\Controller;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use App\Entity\AssociationBaseline;
use App\Entity\AssociationEquiptERTMS;
use App\Entity\Baseline;
use App\Entity\Clients;
use App\Entity\ClientsSearch;
use App\Entity\Engineers;
use App\Entity\EnginSearch;
use App\Entity\Equipement;
use App\Entity\ERTMSEquipement;

use App\Entity\Projects;
use App\Entity\ProjectSearch;
use App\Entity\SoustypeEquipement;
use App\Entity\Trains;
use App\Entity\TrainsSearch;
use App\Entity\TypeEquipement;

use App\Form\AssociationType;
use App\Form\BaselineType;
use App\Form\ClientsSearchType;
use App\Form\ClientsType;
use App\Form\EngineerType;
use App\Form\EnginSearchType;
use App\Form\EquipementType;
use App\Form\ErtmsType;
use App\Form\ProjectSearchType;
use App\Form\ProjectType;
use App\Form\TrainsSearchType;
use App\Form\TrainsType;
use App\Repository\BaselineRepository;
use App\Repository\ClientsRepository;
use App\Repository\EngineersRepository;
use App\Repository\ProjectsRepository;
use App\Repository\TrainsRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Annotation\Route;
use App\Services\HttpClientKeycloak;
use App\Repository\TypeEquipementRepository;
use App\Repository\EquipementRepository;
use App\Repository\SoustypeEquipementRepository;
use App\Services\ApiService;
use App\Repository\ERTMSEquipementRepository;
use App\Entity\AssocEvcCarte;
use App\Repository\AssociationEquiptERTMSRepository;
use App\Entity\VersionLogiciel;
use App\Form\VersionType;
use App\Repository\VersionLogicielRepository;
use App\Repository\ConfigLogicielRepository;
use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Component\Validator\Constraints\Date;

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


    //    PAGE Projects -------------------------------------------------------------
    /**
     * @Route("/alstom/projects", name="alstom.projects")
     * @return Response
     */
    //    Vue de la page projects
    public function projects(ProjectsRepository $projectsRepository, Request $request): Response
    {
        $search = new ProjectSearch();
        $form = $this->createForm(ProjectSearchType::class, $search);
        $form->handleRequest($request);

        $project = $projectsRepository->findAllProjects($search);

        foreach ($project as $item) {
            $item->setNumberTrains(count($item->getTrains()));
            $this->em->persist($item);
            $this->em->flush();
        }

        return $this->render(('alstom/projects/projects.html.twig'), [
            'current_menu' => 'projects',
            'projects' => $project,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/alstom/project/{id}", name="alstom.project-show")
     * @return Response
     */
    public function show_project(Projects $projects)
    {

        return $this->render('alstom/projects/show-project.html.twig', [
            'current_menu' => 'projects',
            'project' => $projects,
        ]);
    }


    //    page création projects
    /**
     * @Route("/alstom/create-project", name="alstom.create-project")
     * @return Response
     */
    public function create_project(Request $request): Response
    {
        $project = new Projects();
        $form = $this->createForm(ProjectType::class, $project);
        $form->handleRequest($request);

        //        Validation du formulaire
        if ($form->isSubmitted() && $form->isValid()) {
            $project->getAvailable(true);
            $this->em->persist($project);
            $this->em->flush();
            $this->addFlash('success', 'Project create with success');
            return $this->redirectToRoute('alstom.projects');
        }

        return $this->render('alstom/projects/create-project.html.twig', [
            'current_menu' => 'projects',
            'button' => 'Create',
            'form' => $form->createView()
        ]);
    }


    //    Page d'edit de project
    /**
     * @Route("/alstom/edit-project/{id}", name="alstom.edit-project", methods={"GET", "POST"})
     * @return Response
     */
    public function edit_project(Request $request, Projects $projects): Response
    {
        $form = $this->createForm(ProjectType::class, $projects);
        $form->handleRequest($request);

        //        Validation du formulaire
        if ($form->isSubmitted() && $form->isValid()) {

            $this->em->flush();
            $this->addFlash('success', 'Project edit with success');
            return $this->redirectToRoute('alstom.projects');
        }

        return $this->render('alstom/projects/edit-project.html.twig', [
            'current_menu' => 'projects',
            'button' => 'Edit',
            'project' => $projects,
            'form' => $form->createView()
        ]);
    }
    //    suppresion de project
    /**
     * @Route("/alstom/project/{id}/delete", name="alstom.delete-project", methods={"DELETE"})
     * @param Request $request
     * @return Response
     */
    public function delete_project(Projects $projects, Request $request): Response
    {
        if ($this->isCsrfTokenValid('delete' . $projects->getId(), $request->get('_token'))) {

            $projects->setAvailable(false);
            $this->em->flush();
            $this->addFlash('success', 'Project delete with success');
        }
        return $this->redirectToRoute('alstom.projects');
    }

    // Page TRAINS ---------------------------------------------
    /**
     * @Route("/alstom/trains", name="alstom.trains")
     * @return Response
     */

    public function trains(TrainsRepository $trainsRepository, Request $request): Response
    {

        $search = new TrainsSearch();
        $form = $this->createForm(TrainsSearchType::class, $search);
        $form->handleRequest($request);
        $trains = $trainsRepository->findAllTrains($search);

        return $this->render('alstom/trains/trains.html.twig', [
            'current_menu' => 'trains',
            'trains' => $trains,
            'form' => $form->createView()
        ]);
    }
    /**
     * @Route("/alstom/create-train", name="alstom.create-train")
     * @return Response
     */
    public function create_train(Request $request): Response
    {


        //formulaire du train
        $train = new Trains();
        $form_train = $this->createForm(TrainsType::class, $train);
        $form_train->handleRequest($request);

        if ($form_train->isSubmitted() && $form_train->isValid()) {

            $this->em->persist($train);
            $this->em->flush();
            $this->addFlash('success', 'Train create with success');
            return $this->redirectToRoute('alstom.trains');
        }


        return $this
            ->render('alstom/trains/create-trains.html.twig', [
                'current_menu' => 'trains',
                'button' => 'Create',
                'form_train' => $form_train->createView()
            ]);
    }
    /**
     * @Route("alstom/addTrains", name="alstom.addTrains", methods={"POST"})
     * @return Response
     */
    public function addTrains(Request $request): Response
    {

        $trains = $request->request->get('trains');
        // $trains = $this->serializer->deserialize($train, Trains::class, 'json');
        // $train->setName($trains['name']);
        // $train->setTrainType($trains['trainType']);

        // $this->em->persist($trains);
        // $this->em->flush();

        return $this->json([
            'code' => 200,
            'messsage' => "train ",
            'trains' => $trains['name'],
            'trains_projects' => $trains['projects'],
            'trains_type' => $trains['trainType'],

        ], 200);
    }



    /**
     * @Route("/alstom/edit-train/{id}", name="alstom.edit-train", methods={"POST","GET"})
     * @return Response
     */
    public function edit_train(Request $request, Trains $trains)
    {
        $form_train = $this->createForm(TrainsType::class, $trains);
        $form_train->handleRequest($request);

        //        Validation du formulaire
        if ($form_train->isSubmitted() && $form_train->isValid()) {

            $this->em->flush();
            $this->addFlash('success', 'Trains modified with success');
            return $this->redirectToRoute('alstom.trains');
        }

        return $this->render('alstom/trains/edit-train.html.twig', [
            'current_menu' => 'trains',
            'button' => 'Edit',
            'train' => $trains,
            'form_train' => $form_train->createView(),
        ]);
    }

    /**
     * @Route("/alstom/trains/{id}", name="alstom.show-train")
     * @return Response
     */
    public function show_train(Trains $trains)
    {
        return $this->render('alstom/trains/show-train.html.twig', [
            'current_menu' => 'trains',
            'train' => $trains
        ]);
    }
    //    suppresion de train
    /**
     * @Route("/alstom/train/{id}", name="alstom.delete-train", methods={"DELETE"})
     * @param Request $request
     * @return Response
     */
    public function delete_train(Trains $trains, Request $request): Response
    {
        if ($this->isCsrfTokenValid('delete' . $trains->getId(), $request->get('_token'))) {

            if ($trains->getERTMS()) {
                $trains->removeErtm($trains->getERTMS()->getValues()[0]);
            };

            $this->em->remove($trains);
            $this->em->flush();
            $this->addFlash('success', 'Train delete with success');
        }
        return $this->redirectToRoute('alstom.trains');
    }
    //    ERTMS-----------------------------------------------------------
    //


    /**
     * @Route("/alstom/ertms", name="alstom.ertms")
     * @return Response
     */

    public function ertms(ERTMSEquipementRepository $eRTMSEquipementRepository, Request $request): Response
    {
        $ertms = $eRTMSEquipementRepository->findAll();

        return $this->render('alstom/ertms/ertms.html.twig', [
            'current_menu' => 'ERTMS',
            'ertms' => $ertms,

        ]);
    }


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


    //    suppresion de ertms
    /**
     * @Route("/alstom/delete-ertms/{id}", name="alstom.delete-ertms", methods={"DELETE"})
     * @param Request $request
     * @return Response
     */
    public function delete_ertms(
        Request $request,
        ERTMSEquipement $ertms,
        AssociationEquiptERTMSRepository $associationEquiptERTMSRepository
    ) {

        // if ($this->isCsrfTokenValid('delete' . $ertms->getId(), $request->get('_token'))) {
        //     dump($ertms);

        //     $assoc = $associationEquiptERTMSRepository->findbySolution($ertms->getid());
        //     dump($assoc[0]->getEquipements());
        //     foreach ($assoc[0]->getEquipements() as $key => $value) {
        //         # code...
        //         dump($value);
        //         if ($value->getAssocEvcCarte()) {
        //             $this->em->remove($value->getAssocEvcCarte());
        //         }
        //         $this->em->remove($value);
        //     }
        //     $this->em->remove($ertms);
        //     $this->em->remove($assoc[0]);
        //     $this->em->flush();
        //     $this->addFlash('success', 'Ertms delete with success');
        //     return $this->redirectToRoute('alstom.ertms');
        // }
    }

    // ----------------------LOGS
    /**
     * @Route("/alstom/logs", name="alstom.logs")
     * @param Request $request
     * @return Response
     */
    public function logs(): Response
    {

        return $this->render('alstom/logs/logs.html.twig', [
            'current_menu' => "logs"
        ]);
    }
    /**
     * @Route("/alstom/add-logs", name="alstom.add-logs")
     * @param Request $request
     * @return Response
     */
    public function addLogs(Request $request): Response
    {
        $assoc_baseline = new AssociationBaseline;
        dump($request->request);


        return $this->render('alstom/logs/add_logs.html.twig', [
            'current_menu' => "logs"
        ]);
    }
    /**
     * @Route("/alstom/create-logs", name="alstom.create-logs")
     * @param Request $request
     * @return Response
     */
    public function createLogs(
        Request $request,
        BaselineRepository $baselineRepository,
        VersionLogicielRepository $versionLogicielRepository,
        ConfigLogicielRepository $configLogicielRepository,
        ERTMSEquipementRepository $eRTMSEquipementRepository
    ): Response {
        $assoc_baseline = new AssociationBaseline;

        $request_assoc = $request->request->get("assoc");
        dump($assoc_baseline);
        dump($request_assoc['baseline']);
        foreach ($request_assoc as $key => $value) {
            switch ($key) {
                case 'baseline':
                    $name_baseline = $baselineRepository->findByName($value);
                    if ($name_baseline == "") { }
                    break;
                case 'version':
                    $release_note = $versionLogicielRepository->findByRelease($value);
                    dump($release_note);
                    break;
                case 'config':
                    $identif_plug = $configLogicielRepository->findByPlug($value);
                    dump($identif_plug);
                    break;
                case 'ertms':
                    $ertms = $eRTMSEquipementRepository->findByNameConfig($value);
                    dump($ertms);
                    break;
                default:
                    break;
            }
        }

        return $this->json([
            'code' => 200
        ], 200);
    }
    /**
     * @Route("/alstom/search-logs", name="alstom.search-logs")
     * @param Request $request
     * @return Response
     */
    public function searchLogs(Request $request): Response
    {
        $assoc_baseline = new AssociationBaseline;

        $form = $this->createform(AssociationType::class, $assoc_baseline);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $assoc_baseline->setStatus(true);
            $this->em->persist($assoc_baseline);
            $this->em->flush();
        }

        return $this->render('alstom/logs/search_logs.html.twig', [
            'current_menu' => "logs",
            'form' => $form->createView()
        ]);
    }


    // ----------------------BASELINE
    /**
     * @Route("/alstom/baseline", name="alstom.baseline")
     * @param Request $request
     * @return Response
     */
    public function baseline(BaselineRepository $baselineRepository): Response
    {
        $baselines = $baselineRepository->findAll();

        return $this->render('alstom/baseline/baseline.html.twig', [
            'current_menu' => "baseline",
            'baselines' => $baselines
        ]);
    }
    /**
     * @Route("/alstom/create_baseline", name="alstom.create-baseline")
     * @param Request $request
     * @return Response
     */
    public function create_baseline(Request $request, BaselineRepository $baselineRepository): Response
    {
        $baseline = new Baseline;
        $form_baseline = $this->createForm(BaselineType::class, $baseline);
        $form_baseline->handleRequest($request);

        $equipement = new Equipement;
        $form_equipement = $this->createForm(EquipementType::class, $equipement);
        $form_equipement->handleRequest($request);

        return $this->render('alstom/baseline/create-baseline.html.twig', [
            'current_menu' => "baseline",
            'form_baseline' => $form_baseline->createView(),
            'form_equipement' => $form_equipement->createView()
        ]);
    }
    /**
     * @Route("/alstom/flush-all-equipt", name="alstom.flush-all-equipt")
     * @return Response
     */
    public function flush_all_equipt(Request $request, TypeEquipementRepository $typeEquipementRepository, SoustypeEquipementRepository $soustypeEquipementRepository)
    {
        $assoc_ertms_equipement = new AssociationEquiptERTMS;
        $ertms = new ERTMSEquipement;
        $baseline  = new Baseline;
        $assoc_evc_carte = new AssocEvcCarte;

        $tabEquipt = $request->request->get('tabEquipts');
        $baseline->setName($request->request->get('baselineName'));


        $this->em->persist($ertms);

        $baseline->setStatus(true);
        $baseline->setOriginal(true);
        $baseline->setDate(new \DateTime());
        $this->em->persist($baseline);

        $assoc_ertms_equipement->setSolution($ertms);
        $assoc_ertms_equipement->addBaseline($baseline);

        $assoc_evc_carte->setERTMS($ertms);

        //Parcours du tableau d'equipement pour tous les flusher
        foreach ($tabEquipt as $key => $value) {

            $equipement = new Equipement;
            $equipement->setType($typeEquipementRepository->find($value['equipement[Type']));
            if ($value['equipement[sous_type'] != "") {
                $equipement->setSousType($soustypeEquipementRepository->find($value['equipement[sous_type']));
            }
            $equipement->setDTRBoard($value['equipement[DTR_board']);
            $equipement->setIndiceDTR($value['equipement[Indice_DTR']);
            $equipement->setNumSerie($value['equipement[Num_serie']);
            $equipement->setStatus(true);

            $this->em->persist($equipement);
            $assoc_ertms_equipement->addEquipement($equipement);

            switch ($value['equipement[Type']) {
                case "1":
                    $assoc_evc_carte->setEVC($equipement);
                    dump($equipement);
                    break;
                case "2":
                    $assoc_evc_carte->addCARD($equipement);
                    dump($equipement);
                    break;
            }
        }

        $this->em->persist($assoc_ertms_equipement);
        $baseline->setEquipmentErtms($assoc_ertms_equipement);
        dump($baseline);
        $this->em->persist($assoc_evc_carte);
        // $this->em->flush();
        $jsonObjectEquipt = $this->serializer->serialize($baseline, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);
        //return $this->redirectToRoute('alstom.ertms');
        return $this->json([
            "baseline" => $baseline->getId()
        ]);
    }

    /**
     * @Route("/alstom/baseline/{id}", name="alstom.show-baseline")
     * @return Response
     */
    public function show_baseline(
        Baseline $baseline,
        AssociationEquiptERTMSRepository $associationEquiptERTMSRepository,
        Request $request
    ) {
        dump($baseline);
        $idErtms = $request->attributes->get('id');

        $equipements = $associationEquiptERTMSRepository->findbySolution($idErtms)[0]->getEquipements();
        //$equipement = $request->request;
        $equipement = new Equipement;
        $form_equipement = $this->createForm(EquipementType::class, $equipement);
        $form_equipement->handleRequest($request);

        if ($form_equipement->isSubmitted() && $form_equipement->isValid()) {
            dump($request->request->get('tabEquipts'));
            foreach ($equipements as $key => $value) {
                if ($equipement->getId() == $value->getId()) {
                    dump($value);
                }
            }
            // $this->em->persist($equipement);
        }
        return $this->render('alstom/baseline/show-baseline.html.twig', [
            'current_menu' => 'ERTMS',
            'baseline' => $baseline,
            'ertms' => $eRTMSEquipement,
            'equipement' => $equipement,
            'equipements' => $equipements,
            'form_equipement' => $form_equipement->createView(),

        ]);
    }

    /**
     * @Route("/alstom/edit-equipment/{id}", name="alstom.edit-equipment", methods={"POST","GET"})
     * @return Response
     */
    public function edit_equipement(
        Equipement $equipement,
        Request $request,
        ERTMSEquipementRepository $eRTMSEquipementRepository,
        AssociationEquiptERTMSRepository $associationEquiptERTMSRepository,
        TypeEquipementRepository $typeEquipementRepository,
        SoustypeEquipementRepository $soustypeEquipementRepository
    ) {

        // $new_assoc_equipt_ertms = new AssociationEquiptERTMS;
        $assoc_evc_carte = new AssocEvcCarte;
        $equipement_new = new Equipement;
        $current_equipement = $equipement;
        $new_equipement = $request->request->get('equipement');

        //Parcours les valeurs du nouvel equipement pour flush
        if ($new_equipement != null) {

            foreach ($new_equipement as $key => $value) {

                switch ($key) {
                    case 'equipement[Type':
                        $equipement_new->setType($typeEquipementRepository->find($value));
                        // switch ($value) {
                        //     case "1":
                        //         $assoc_evc_carte->setEVC($equipement);
                        //         break;
                        //     case "2":
                        //         $assoc_evc_carte->addCARD($equipement);
                        //         break;
                        // }
                        break;
                    case 'equipement[sous_type':
                        if ($value != "") {
                            $equipement_new->setSousType($soustypeEquipementRepository->find($value));
                        }
                        break;
                    case 'equipement[DTR_board':
                        $equipement_new->setDTRBoard($value);
                        break;
                    case 'equipement[Indice_DTR':
                        $equipement_new->setIndiceDTR($value);
                        break;
                    case 'equipement[Num_serie':
                        $equipement_new->setNumSerie($value);
                        break;
                }
            }
        }
        // attribut le statut actif au nouvel equipement
        $equipement_new->setStatus(true);

        // Et false a l'ancienne equipement
        $current_equipement->setStatus(false);

        // Va rechercher l'association courante
        $id_assoc = $equipement->getAssociationEquiptERTMS();
        $assoc_equipt_ertms = $associationEquiptERTMSRepository->find($id_assoc);
        // va rechercher l'id de l'ertms courant
        $id_Ertms = (int) $request->request->get('idErtms');
        $current_ertms = $eRTMSEquipementRepository->find($id_Ertms);

        // Attribut le nouvel equipement a l'association courante
        $assoc_equipt_ertms->addEquipement($equipement_new);

        // $assoc_equipt_ertms->setSolution($current_ertms);
        dump($request);

        if ($request->get('soumission_edit_equipement')) {
            dump($equipement_new);
            dump($assoc_equipt_ertms);

            $this->em->persist($equipement_new);
            $this->em->persist($assoc_equipt_ertms);
            $this->em->persist($assoc_evc_carte);
            $this->em->flush();
            return $this->json([
                "flush" => 200
            ]);
        } else {

            $jsonObjectEquipt = $this->serializer->serialize($current_equipement, 'json', [
                'circular_reference_handler' => function ($object) {
                    return $object->getId();
                }
            ]);

            return new Response($jsonObjectEquipt, 200, ['Content-Type' => 'application/json']);
        }
    }

    /**
     * @Route("alstom/addAssocBaseline", name="alstom.addAssocBaseline", methods={"POST"})
     * @return Response
     */
    public function addAssocBaseline(Request $request): Response
    {
        dump($request->request);
        return $this->json([
            'code' => 200
        ], 200);
    }
    /**
     * @Route("alstom/addBaseline", name="alstom.addBaseline", methods={"POST"})
     * @return Response
     */
    public function addBaseline(Request $request): Response
    {
        $baseline = $request->request->get('baseline')['baseline[name'];

        return $this->json([
            'code' => 200,
            'baseline' => $baseline
        ], 200);
    }
    /**
     * @Route("alstom/addVersion", name="alstom.addVersion", methods={"POST"})
     * @return Response
     */
    public function addVersion(Request $request): Response
    {
        $version = new VersionLogiciel;

        $name_version = $request->request->get('version')['version[release_note'];
        $version->setReleaseNote($name_version);
        dump($version);
        // $this->em->persist($version);
        // $this->em->flush();

        return $this->json([
            'code' => 200,
            'version' => $version
        ], 200);
    }

    // ----------------------------------FLEET

    /**
     * @Route("alstom/fleet_management", name="alstom.fleet_management")
     * @return Response
     */
    public function fleet_management(): Response
    {
        return $this->render('alstom/fleet.html.twig', [
            'current_menu' => 'fleet'
        ]);
    }
}
