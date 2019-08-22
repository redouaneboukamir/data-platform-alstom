<?php

namespace App\Controller;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
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
use App\Entity\Trains;
use App\Entity\TrainsSearch;
use App\Form\BaselineType;
use App\Form\ClientsSearchType;
use App\Form\ClientsType;
use App\Form\EngineerType;
use App\Form\EnginSearchType;
use App\Form\EquipementType;
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
use App\Repository\SoustypeEquipementRepository;
use App\Repository\ERTMSEquipementRepository;
use App\Entity\AssocEvcCarte;
use App\Entity\AssocLogBaseline;
use App\Repository\AssociationEquiptERTMSRepository;
use App\Entity\VersionLogiciel;
use App\Form\VersionType;
//Allow the use of AWS object Storage
use Aws\S3\S3Client;
use Aws\Exception\AwsException;
use Aws\S3\MultipartUploader;
use Aws\Exception\MultipartUploadException;
use Aws\S3\MultipartCopy;
use Vich\UploaderBundle\Templating\Helper\UploaderHelper;
use App\Entity\ConfigLogiciel;
use App\Form\ConfigLogicielType;
use App\Entity\Plugs;
use App\Entity\AssocPlugBaseline;
use App\Entity\Logs;
use App\Repository\AssocPlugBaselineRepository;

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

        $projects = $projectsRepository->findAll();

        return $this->render(('alstom/projects/projects.html.twig'), [
            'current_menu' => 'projects',
            'projects' => $projects,
            'form' => $form->createView()
        ]);
    }
    /**
     * @Route("/alstom/search-fleet", name="alstom.search-fleet")
     * @return Response
     */
    public function search_fleet(ProjectsRepository $projectsRepository, Request $request)
    {
        // if ($request->request->get('data')) {
        //     $motclef = ($request->request->get('data'));
        //     $q = array('motclef' => $motclef);
        // }
        $search = new ProjectSearch();
        $searchName = $request->request->get('motclef');
        $search->setNameProject($searchName);

        $projectSearch = $projectsRepository->findAllProjects($search);
        dump($projectSearch);
        foreach ($projectSearch as $item) {
            $item->setNumberTrains(count($item->getTrains()));
            dump($item);
            $this->em->persist($item);
            $this->em->flush();
        }
        $jsonObjectEquipt = $this->serializer->serialize($projectSearch, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);

        return $this->json(['projectsFound' => $jsonObjectEquipt], 200);
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

    public function trains(TrainsRepository $trainsRepository, ProjectsRepository $projectsRepository, Request $request): Response
    {

        $search = new TrainsSearch();
        $form = $this->createForm(TrainsSearchType::class, $search);
        $form->handleRequest($request);
        $trains = $trainsRepository->findAllTrains($search);
        $fleets = $projectsRepository->findAll();
        return $this->render('alstom/trains/trains.html.twig', [
            'current_menu' => 'trains',
            'trains' => $trains,
            'fleets' => $fleets,
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

        //        Validation du formulaire
        if ($form_train->isSubmitted() && $form_train->isValid()) {
            $this->em->persist($train);
            $this->em->flush();
            return $this->redirectToRoute('alstom.addBaselineToTrain', ['id' => $train->getId()]);
        }

        return $this
            ->render('alstom/trains/create-trains.html.twig', [
                'current_menu' => 'trains',
                'button' => 'Create',
                'form_train' => $form_train->createView()
            ]);
    }
    /**
     * @Route("alstom/InstanceBaseline/{id}", name="alstom.addBaselineToTrain", methods={"POST","GET"})
     * @return Response
     */
    public function addBaselineToTrain(Request $request, Trains $train): Response
    {

        $equipement = new Equipement;
        $form_equipement = $this->createForm(EquipementType::class, $equipement);
        $form_equipement->handleRequest($request);

        return $this->render('alstom/baseline/addBaselineToTrain.html.twig', [
            'current_menu' => 'baseline',
            'train' => $train,
            'form_equipement' => $form_equipement->createView(),
        ]);
    }
    /**
     * @Route("alstom/CheckEquipements/{id}", name="alstom.CheckEquipements", methods={"POST","GET"})
     * @return Response
     */
    public function checkEquipements(Request $request, Baseline $baseline): Response
    {
        dump($baseline);
        foreach ($baseline->getERTMS() as $key => $value) {
            $equipements = $value->getEquipements();
        }
        // $equipements = $baseline->getERTMS()->getEquipements();

        $jsonObjectEquipt = $this->serializer->serialize($equipements, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);

        return $this->json(['equipments' => $jsonObjectEquipt], 200);
    }
    /**
     * @Route("alstom/addBaselineInstancier", name="alstom.addBaselineInstancier", methods={"POST"})
     * @return Response
     */
    public function addBaselineInstancier(
        Request $request,
        TrainsRepository $trainsRepository,
        BaselineRepository $baselineRepository,
        TypeEquipementRepository $typeEquipementRepository,
        SoustypeEquipementRepository $soustypeEquipementRepository
    ): Response {

        $tabEquipt = $request->request->get("new_equipt");
        $train = $trainsRepository->find($request->request->get('id_train'));
        $baseline = $baselineRepository->find($request->request->get('baseline'));

        $new_assoc = new AssociationEquiptERTMS;
        $assoc_evc_carte = new AssocEvcCarte;
        $new_ertms = new ERTMSEquipement;
        $new_baseline = new Baseline;

        foreach ($tabEquipt as  $value) {

            $equipement = new Equipement;
            $equipement->setType($typeEquipementRepository->find($value['type']['id']));

            if ($value['SousType'] != "") {
                $equipement->setSousType($soustypeEquipementRepository->find($value['SousType']['id']));
            }
            $equipement->setDTRBoard($value['dTRBoard']);
            $equipement->setIndiceDTR($value['indiceDTR']);
            $equipement->setNumSerie($value['numSerie']);
            $equipement->setStatus(true);

            $this->em->persist($equipement);
            $new_assoc->addEquipement($equipement);

            switch ($value['type']['id']) {
                case "1":
                    $assoc_evc_carte->setEVC($equipement);
                    break;
                case "2":
                    $assoc_evc_carte->addCARD($equipement);
                    break;
            }
        }
        $new_ertms->setDate(new \Datetime('now'));
        $new_assoc->setSolution($new_ertms);
        $new_assoc->setStatus(true);

        $new_baseline->setName($baseline->getName());
        $new_baseline->setTrains($train);
        $new_baseline->addERTM($new_assoc);
        $new_baseline->setConfigLogiciel($baseline->getConfigLogiciel());
        $new_baseline->setVersionLogiciel($baseline->getVersionLogiciel());
        $new_baseline->setDate(new \Datetime('now'));
        $new_baseline->setStatus(true);
        $new_baseline->setOriginal(false);

        dump($new_assoc);
        dump($new_baseline);
        dump($new_ertms);
        dump($train);
        $this->em->persist($assoc_evc_carte);
        $this->em->persist($new_baseline);
        $this->em->persist($new_assoc);
        $train->addBaseline($new_baseline);
        $this->em->flush();
        return $this->json([
            'idbaseline' => $new_baseline->getId()
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

        $baselines = $trains->getBaselines();

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
            'baselines' => $baselines,
            'form_train' => $form_train->createView(),
        ]);
    }

    /**
     * @Route("/alstom/trains/{id}", name="alstom.show-train")
     * @return Response
     */
    public function show_train(Trains $trains, Request $request)
    {
        return $this->render('alstom/trains/show-train.html.twig', [
            'current_menu' => 'trains',
            'train' => $trains,
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

            dump($trains->getERTMS());

            $this->em->remove($trains);
            $this->em->flush();
            $this->addFlash('success', 'Train delete with success');
        }
        return $this->redirectToRoute('alstom.trains');
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

    // ----------------------PLUG


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
    public function addLogs(Request $request)
    {
        return $this->render('alstom/logs/add_logs.html.twig', [
            'current_menu' => "logs"
        ]);
    }
    /**
     * @Route("/alstom/create-logs", name="alstom.create-logs")
     */
    public function createLogs(Request $request, UploaderHelper $uploaderHelper): Response
    {
        $upload_success = null;
        $upload_error = '';

        if (!empty($_FILES['files'])) {
            /*
            the code for file upload;
            $upload_success – becomes "true" or "false" if upload was unsuccessful;
            $upload_error – an error message of if upload was unsuccessful;
          */
            dump($_FILES['files']);
            $is_success = true;
            $error_msg = "c'est le pied BB";
        } else {
            $is_success = false;
            $error_msg = "too bad";
        }
        $testUpload = array(
            "status" => 'success'
        );
        $jsonObjectestUpload = (json_encode(['success' => $is_success, 'error' => $error_msg]));
        return new Response($jsonObjectestUpload, 200, ['Content-Type' => 'application/json']);
        /* $tab = [];
        
        foreach ($test as $key => $value) {
            # code...
            array_push($tab, $value);
        }
        return $this->json([
            'code' => 200
        ], 200); */
    }

    /**
     * @Route("/alstom/search-logs", name="alstom.search-logs")
     * @param Request $request
     * @return Response
     */
    public function searchLogs(Request $request): Response
    {



        return $this->render('alstom/logs/search_logs.html.twig', [
            'current_menu' => "logs",

        ]);
    }
    /**
     * @Route("alstom/uploadLog", name="alstom.uploadLog")
     * @return Response
     */
    public function uploadLog(Request $request)
    {
        $upload_success = null;
        $upload_error = '';
        dump($request->request);
        if (!empty($_FILES['files'])) { // si un fichier est envoyé via POST (requète AJAX)
            $s3 = new S3Client([
                'version' => 'latest',
                'region'  => 'us-east-1',
                //'endpoint' => 'http://minio-azure.default.svc.cluster.local:9000',
                'endpoint' => 'http://localhost:5555',
                'use_path_style_endpoint' => true,
                'credentials' => [
                    'key'    => 'amdptestdeployv7private',
                    'secret' => 'pxq7omdDjm1vnqFI7cL2G6SHk72B/4G+tinSBr28ddnwN8FGmezQKftGVgLJQEmfzBkIwLubLwmRJ9X31Wez0w==',
                ],
            ]);
            //definition du bucket 
            //  => 'logs' pour les fichiers log
            //  => 'configuration' pour les plugs
            $bucket = 'temp';
            //$_FILES est le fichier envoyé via POST
            $nameFile = $_FILES['files']['name'][1]; //key minio
            $source = $_FILES['files']['tmp_name'][1]; //chemin temporaire
            //instanciation de l'uploader PHP / MINIO
            $uploader = new MultipartUploader(
                $s3,
                $source,
                [
                    'bucket' => $bucket,
                    'key' => $nameFile,
                    'before_upload' => function (\Aws\Command $command) { //Nettoyage de la mémoire avant upload
                        gc_collect_cycles();
                    }
                ]
            );
            //Upload du fichier et suppression des parties si l'upload ne marche pas.
            try {
                $result = $uploader->upload();

                $key_plug = $result['Key'];
            } catch (MultipartUploadException $e) {
                // State contains the "Bucket", "Key", and "UploadId"
                $params = $e->getState()->getId(); //récupération de l'id de l'upload
                $result = $s3->abortMultipartUpload($params); //suppression de l'upload
                $is_success = false; //on gérére l'erreur remontée au javscript
                $error_msg = "Error during the upload of the file, please retry !"; // on génère le message d'erreur
            }
            $is_success = true; //on génére le succès de l'opération 
            $error_msg = "Upload is done"; //msg du succès
        } else { // il n'y a pas de fichier à uploader
            $is_success = false; //génération de l'erreur
            $error_msg = "No file to upload"; //génération du msg d'erreur
        }
        //encodage en JSON pour le return  vers le javascript
        $jsonObjectestUpload = (json_encode(['success' => $is_success, 'error' => $error_msg, 'key_plug' => $key_plug]));
        return new Response($jsonObjectestUpload, 200, ['Content-Type' => 'application/json']);
    }
    /**
     * @Route("alstom/flush-log", name="alstom.flush_log")
     * @return Response
     */
    public function flush_log(Request $request, BaselineRepository $baselinerepository)
    {
        $s3 = new S3Client([
            'version' => 'latest',
            'region'  => 'us-east-1',
            //'endpoint' => 'http://minio-azure.default.svc.cluster.local:9000',
            'endpoint' => 'http://localhost:5555',
            'use_path_style_endpoint' => true,
            'credentials' => [
                'key'    => 'amdptestdeployv7private',
                'secret' => 'pxq7omdDjm1vnqFI7cL2G6SHk72B/4G+tinSBr28ddnwN8FGmezQKftGVgLJQEmfzBkIwLubLwmRJ9X31Wez0w==',
            ],
        ]);
        $assoc_log_baseline = new AssocLogBaseline;
        $log_entity = new Logs;
        $baseline = $baselinerepository->find($request->request->get('baseline'));
        $log = $request->request->get('log');

        $result = $s3->copy('temp', $log['key_log'], 'logs', $log['key_log']);

        $s3->deleteObject([
            'Bucket' => 'temp',
            'Key'    => $log['key_log']
        ]);

        try {
            dump($result);
            // $result = $copier->copy();
            dump("Copy complete: {$result['ObjectURL']}\n");
        } catch (MultipartUploadException $e) {
            dump($e->getMessage() . "\n");
        }

        $log_entity->setKeyLogs($log['key_log']);
        $log_entity->setDateAdd(new \Datetime('now'));
        $log_entity->setUpdatedAt(new \Datetime('now'));
        $this->em->persist($log_entity);
        $assoc_log_baseline->addLog($log_entity);
        dump($log_entity);


        $assoc_log_baseline->setBaseline($baseline);
        $assoc_log_baseline->setDate(new \Datetime('now'));
        $assoc_log_baseline->setTypeFile($log['name_log']);
        $this->em->persist($assoc_log_baseline);
        $baseline->addAssoclogBaseline($assoc_log_baseline);
        dump($assoc_log_baseline);
        $this->em->flush();
        return $this->json([
            'sucess' => 'ok'
        ]);
    }
    /**
     * @Route("alstom/checkFleet", name="alstom.checkFleet")
     * @return Response
     */
    public function checkFleet(Request $request, ProjectsRepository $projectsRepository)
    {

        $projects = $projectsRepository->findAll();

        $jsonObjectSubtype = $this->serializer->serialize($projects, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);

        return new Response($jsonObjectSubtype, 200, ['Content-Type' => 'application/json']);
    }
    /**
     * @Route("alstom/checkTrainByFleet", name="alstom.checkTrainByFleet")
     * @return Response
     */
    public function checkTrainByFleet(Request $request, TrainsRepository $trainsRepository)
    {

        dump($request->request);
        $trains = $trainsRepository->findTrainByFleet($request->request->get('id'));
        dump($trains);
        $jsonObjectSubtype = $this->serializer->serialize($trains, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);

        return new Response($jsonObjectSubtype, 200, ['Content-Type' => 'application/json']);
    }
    /**
     * @Route("alstom/checkErtmsByTrain", name="alstom.checkErtmsByTrain")
     * @return Response
     */
    public function checkErtmsByTrain(Request $request,  TrainsRepository $trainsRepository)
    {
        $version_ertms = [];
        $baselines = $trainsRepository->find($request->request->get('id'))->getBaselines();

        $jsonObjectSubtype = $this->serializer->serialize($baselines, 'json', [

            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);

        return new Response($jsonObjectSubtype, 200, ['Content-Type' => 'application/json']);
    }
    // ----------------------BASELINE

    /**
     * @Route("alstom/checkBaseline", name="alstom.checkBaseline")
     * @return Response
     */
    public function checkBaseline(Request $request, BaselineRepository $baselineRepository)
    {
        $baselines = $baselineRepository->findAvailableBaseline();

        $jsonObjectSubtype = $this->serializer->serialize($baselines, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);

        return new Response($jsonObjectSubtype, 200, ['Content-Type' => 'application/json']);
    }
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
    public function create_baseline(Request $request): Response
    {
        $baseline = new Baseline;
        $form_baseline = $this->createForm(BaselineType::class, $baseline);
        $form_baseline->handleRequest($request);

        $equipement = new Equipement;
        $form_equipement = $this->createForm(EquipementType::class, $equipement);
        $form_equipement->handleRequest($request);

        return $this->render('alstom/baseline/create_baseline.html.twig', [
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

        $ertms->setDate(new \Datetime('now'));
        $this->em->persist($ertms);

        $baseline->setStatus(true);
        $baseline->setOriginal(true);
        $baseline->setDate(new \DateTime('now'));
        $this->em->persist($baseline);

        $assoc_ertms_equipement->setSolution($ertms);
        $assoc_ertms_equipement->setBaseline($baseline);
        $assoc_ertms_equipement->setStatus(true);

        $assoc_evc_carte->setERTMS($ertms);

        //Parcours du tableau d'equipement pour tous les flusher
        foreach ($tabEquipt as $value) {

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
        $baseline->addERTM($assoc_ertms_equipement);
        $this->em->persist($assoc_evc_carte);
        $this->em->flush();

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
        Request $request
    ) {
        $evc = "";
        $card = [];
        $equipements = [];

        foreach ($baseline->getERTMS() as $value) {
            dump($value);
            if ($value->getbaseline()->getOriginal() == true) {
                foreach ($value->getequipements() as $value) {
                    $id = $value->gettype()->getId();
                    dump($value);
                    if ($id == 1) {
                        $evc = $value;
                    } else if ($id == 2) {
                        array_push($card, $value);
                    } else {
                        array_push($equipements, $value);
                    }
                }
            }
        }
        dump($baseline);
        $equipement = new Equipement;
        $version = new VersionLogiciel;

        $form_equipement = $this->createForm(EquipementType::class, $equipement);
        $form_version = $this->createForm(VersionType::class, $version);

        $form_equipement->handleRequest($request);
        $form_version->handleRequest($request);


        return $this->render('alstom/baseline/show-baseline.html.twig', [
            'current_menu' => 'baseline',
            'baseline' => $baseline,
            'equipement' => $equipement,
            'evc' => $evc,
            'cards' => $card,
            'equipements' => $equipements,
            'form_equipement' => $form_equipement->createView(),
            'form_version' => $form_version->createView()

        ]);
    }
    /**
     * @Route("/alstom/baseline-train/{id}", name="alstom.show-baseline-train")
     * @return Response
     */
    public function show_baseline_train(
        Baseline $baseline,
        Request $request,
        AssocPlugBaselineRepository $assocPlugBaselineRepository
    ) {
        $evc = "";
        $card = [];
        $plugs = "";
        $equipements = [];
        foreach ($baseline->getERTMS() as $value) {
            dump($value);
            if ($value->getStatus()) {
                foreach ($value->getequipements() as $value) {
                    $id = $value->gettype()->getId();
                    dump($value);
                    if ($id == 1) {
                        $evc = $value;
                    } else if ($id == 2) {
                        array_push($card, $value);
                    } else {
                        array_push($equipements, $value);
                    }
                }
            }
        }

        $assoc_plug = $baseline->getAssocPlugBaselines();
        if ($assoc_plug != null) {
            foreach ($assoc_plug as $value) {
                if ($value->getStatus()) {
                    $plugs = $value->getPlug();
                    dump($plugs);
                }
            }
        }

        $plug = new ConfigLogiciel;
        $equipement = new Equipement;
        $version = new VersionLogiciel;

        $form_config = $this->createForm(ConfigLogicielType::class, $plug);
        $form_equipement = $this->createForm(EquipementType::class, $equipement);
        $form_version = $this->createForm(VersionType::class, $version);

        $form_equipement->handleRequest($request);
        $form_version->handleRequest($request);



        return $this->render('alstom/baseline/show-baseline-train.html.twig', [
            'current_menu' => 'baseline',
            'baseline_train' => true,
            'baseline' => $baseline,
            'equipement' => $equipement,
            'equipements' => $equipements,
            'cards' => $card,
            'evc' => $evc,
            'plugs' => $plugs,
            'form_equipement' => $form_equipement->createView(),
            'form_version' => $form_version->createView(),
            'form_config' => $form_config->createView()
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
        $new_assoc = new AssociationEquiptERTMS;
        $new_baseline = new Baseline;

        $current_equipement = $equipement;
        $new_equipement = $request->request->get('equipement');

        //Parcours les valeurs du nouvel equipement pour flush
        if ($new_equipement != null) {

            foreach ($new_equipement as $key => $value) {

                switch ($key) {
                    case 'equipement[Type':
                        $equipement_new->setType($typeEquipementRepository->find($value));
                        switch ($value) {
                            case "1":
                                $assoc_evc_carte->setEVC($equipement);
                                break;
                            case "2":
                                $assoc_evc_carte->CARD($equipement);
                                break;
                        }
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
            // attribut le statut actif au nouvel equipement
            $equipement_new->setStatus(true);
            // Et false a l'ancienne equipement
            $current_equipement->setStatus(false);
        }


        // Va rechercher l'association courante
        $id_assoc = $equipement->getAssociationEquiptERTMS();
        $assoc_equipt_ertms = $associationEquiptERTMSRepository->find($id_assoc);
        // va rechercher l'id de l'ertms courant
        $id_Ertms = (int) $request->request->get('idErtms');
        $current_ertms = $eRTMSEquipementRepository->find($id_Ertms);

        // Attribut le nouvel equipement a l'association courante
        $assoc_equipt_ertms->addEquipement($equipement_new);

        // $assoc_equipt_ertms->setSolution($current_ertms);

        // $new_baseline->setEquipmentErtms();
        if ($request->get('soumission_edit_equipement')) {
            dump($equipement_new);
            $this->em->persist($equipement_new);
            $this->em->persist($assoc_equipt_ertms);
            $this->em->persist($assoc_evc_carte);
            $this->em->flush();
            $jsonObjectEquipt = $this->serializer->serialize($equipement_new, 'json', [
                'circular_reference_handler' => function ($object) {
                    return $object->getId();
                }
            ]);
        } else if ($new_equipement['soumission_edit_equipement'] == "Update") {
            dump($equipement_new);
            $this->em->persist($equipement_new);
            $this->em->persist($assoc_equipt_ertms);
            $this->em->persist($assoc_evc_carte);
            $this->em->flush();

            $jsonObjectEquipt = $this->serializer->serialize($equipement_new, 'json', [
                'circular_reference_handler' => function ($object) {
                    return $object->getId();
                }
            ]);
        } else {

            $jsonObjectEquipt = $this->serializer->serialize($current_equipement, 'json', [
                'circular_reference_handler' => function ($object) {
                    return $object->getId();
                }
            ]);
        }
        return new Response($jsonObjectEquipt, 200, ['Content-Type' => 'application/json']);
    }
    /**
     * @Route("/alstom/edit-equipment-instance/{id}", name="alstom.edit-equipment-instance", methods={"POST","GET"})
     * @return Response
     */
    public function edit_equipement_instance(
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
        $new_assoc = new AssociationEquiptERTMS;
        $new_ertms = new ERTMSEquipement;

        $current_equipement = $equipement;
        $new_equipement = $request->request->get('equipement');
        $current_assoc = $current_equipement->getAssociationEquiptERTMS();
        $baseline = $current_assoc->getBaseline();
        //Parcours les valeurs du nouvel equipement pour flush

        if ($request->get('soumission_edit_equipement')) {

            dump($current_assoc);

            foreach ($new_equipement as $key => $value) {

                switch ($key) {
                    case 'equipement[Type':
                        $equipement_new->setType($typeEquipementRepository->find($value));
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

                // attribut le statut actif au nouvel equipement
                $equipement_new->setStatus(true);
                // Et false a l'ancienne equipement
                $current_equipement->setStatus(false);
            }

            foreach ($current_assoc->getequipements() as $value) {
                if ($value->getId() != $request->get('idequipment')) {
                    $new_assoc->addEquipement($value);
                } else {
                    //Traitement enregistrement de l'équipement (historique)
                    dump($value);
                }
            };


            $new_ertms->setDate(new \Datetime('now'));
            $new_assoc->setSolution($new_ertms);
            $new_assoc->addEquipement($equipement_new);
            $baseline->addERTM($new_assoc);
            $new_assoc->setStatus(true);
            $current_assoc->setStatus(false);

            dump($new_assoc);
            dump($new_ertms);
            dump($equipement_new);
            $this->em->persist($equipement_new);
            $this->em->persist($new_ertms);
            $this->em->persist($new_assoc);
            $this->em->persist($assoc_evc_carte);
            $this->em->flush();
            $jsonObjectEquipt = $this->serializer->serialize($equipement_new, 'json', [
                'circular_reference_handler' => function ($object) {
                    return $object->getId();
                }
            ]);
        } else {

            $jsonObjectEquipt = $this->serializer->serialize($current_equipement, 'json', [
                'circular_reference_handler' => function ($object) {
                    return $object->getId();
                }
            ]);
        }
        return new Response($jsonObjectEquipt, 200, ['Content-Type' => 'application/json']);
    }
    /**
     * @Route("/alstom/edit-equipment-baseline/{id}", name="alstom.edit-equipment-baseline", methods={"POST","GET"})
     * @return Response
     */
    public function edit_equipement_baseline(
        Equipement $equipement,
        Request $request,
        ERTMSEquipementRepository $eRTMSEquipementRepository,
        AssociationEquiptERTMSRepository $associationEquiptERTMSRepository,
        TypeEquipementRepository $typeEquipementRepository,
        SoustypeEquipementRepository $soustypeEquipementRepository
    ) {

        $assoc_evc_carte = new AssocEvcCarte;
        $equipement_new = new Equipement;
        $new_assoc = new AssociationEquiptERTMS;

        $new_equipement = $request->request->get('equipement');
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

            $jsonObjectEquipt = $this->serializer->serialize($equipement_new, 'json', [
                'circular_reference_handler' => function ($object) {
                    return $object->getId();
                }
            ]);
        } else {

            $jsonObjectEquipt = $this->serializer->serialize($equipement, 'json', [
                'circular_reference_handler' => function ($object) {
                    return $object->getId();
                }
            ]);
        }

        return new Response($jsonObjectEquipt, 200, ['Content-Type' => 'application/json']);
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
    public function addVersion(Request $request, BaselineRepository $baselineRepository): Response
    {
        $version = new VersionLogiciel;

        $baseline = $baselineRepository->find($request->request->get('idBaseline'));

        $name_version = $request->request->get('version')['version[release_note'];
        $version->setReleaseNote($name_version);
        $version->setDate(new \DateTime('now'));
        $this->em->persist($version);

        $baseline->setVersionLogiciel($version);
        $this->em->persist($baseline);

        dump($version);
        dump($baseline);
        $this->em->flush();

        return $this->json([
            'version' => $version->getReleaseNote()
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

    /*
        ------- MINIO Service -----
    */
    /**
     * @Route("alstom/donwloadFile", name="alstom.donwloadFile")
     * @return Response
     */
    public function donwloadFile(Request $request)
    {
        $s3 = new S3Client([
            'version' => 'latest',
            'region'  => 'us-east-1',
            //'endpoint' => 'http://minio-azure.default.svc.cluster.local:9000',
            'endpoint' => 'http://localhost:5555',
            'use_path_style_endpoint' => true,
            'credentials' => [
                'key'    => 'amdptestdeployv7private',
                'secret' => 'pxq7omdDjm1vnqFI7cL2G6SHk72B/4G+tinSBr28ddnwN8FGmezQKftGVgLJQEmfzBkIwLubLwmRJ9X31Wez0w==',
            ],
        ]);
        $key_name = $request->request->get('key');

        $command = $s3->getCommand('GetObject', [
            'Bucket' => 'plugs',
            'Key'    => $key_name
        ]);
        dump($command);
        // Create a pre-signed URL for a request with duration of 10 miniutes
        $presignedRequest = $s3->createPresignedRequest($command, '+10 minutes');

        // Get the actual presigned-url
        $presignedUrl =  (string)  $presignedRequest->getUri();

        $jsonObjectestUpload = $this->serializer->serialize($presignedUrl, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);
        return new Response($jsonObjectestUpload, 200, ['Content-Type' => 'application/json']);
    }


    /**
     * @Route("alstom/seeFile", name="alstom.seeFile")
     * @return Response
     */
    public function seeFile(Request $request)
    {
        $s3 = new S3Client([
            'version' => 'latest',
            'region'  => 'us-east-1',
            //'endpoint' => 'http://minio-azure.default.svc.cluster.local:9000',
            'endpoint' => 'http://localhost:5555',
            'use_path_style_endpoint' => true,
            'credentials' => [
                'key'    => 'amdptestdeployv7private',
                'secret' => 'pxq7omdDjm1vnqFI7cL2G6SHk72B/4G+tinSBr28ddnwN8FGmezQKftGVgLJQEmfzBkIwLubLwmRJ9X31Wez0w==',
            ],
        ]);

        // Use the high-level iterators (returns ALL of your objects).
        $objects_ts3 = $s3->listObjects([
            'Bucket' => 'plugs'
        ]);

        foreach ($objects_ts3['Contents'] as $s3_filename) {

            $name_s3 = $s3_filename['Key'];
            $command = $s3->getCommand('GetObject', [
                'Bucket' => 'temp',
                'Key'    => $name_s3
            ]);

            // Create a pre-signed URL for a request with duration of 10 miniutes
            $presignedRequest = $s3->createPresignedRequest($command, '+10 minutes');

            // Get the actual presigned-url
            $presignedUrl =  (string)  $presignedRequest->getUri();
            echo '<a href="' . $presignedUrl . '">' . $name_s3 . '</a><br/>';
        }
        $jsonObjectestUpload = $this->serializer->serialize($presignedUrl, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);
        return new Response($jsonObjectestUpload, 200, ['Content-Type' => 'application/json']);
    }

    /**
     * @Route("alstom/uploadFile", name="alstom.uploadFile")
     * @return Response
     */
    public function uploadFile(Request $request)
    {
        $upload_success = null;
        $upload_error = '';

        if (!empty($_FILES['files'])) { // si un fichier est envoyé via POST (requète AJAX)
            $s3 = new S3Client([
                'version' => 'latest',
                'region'  => 'us-east-1',
                //'endpoint' => 'http://minio-azure.default.svc.cluster.local:9000',
                'endpoint' => 'http://localhost:5555',
                'use_path_style_endpoint' => true,
                'credentials' => [
                    'key'    => 'amdptestdeployv7private',
                    'secret' => 'pxq7omdDjm1vnqFI7cL2G6SHk72B/4G+tinSBr28ddnwN8FGmezQKftGVgLJQEmfzBkIwLubLwmRJ9X31Wez0w==',
                ],
            ]);
            //definition du bucket 
            //  => 'logs' pour les fichiers log
            //  => 'configuration' pour les plugs
            $bucket = 'temp';
            //$_FILES est le fichier envoyé via POST
            $nameFile = $_FILES['files']['name'][1]; //key minio
            $source = $_FILES['files']['tmp_name'][1]; //chemin temporaire
            //instanciation de l'uploader PHP / MINIO
            $uploader = new MultipartUploader(
                $s3,
                $source,
                [
                    'bucket' => $bucket,
                    'key' => $nameFile,
                    'before_upload' => function (\Aws\Command $command) { //Nettoyage de la mémoire avant upload
                        gc_collect_cycles();
                    }
                ]
            );
            //Upload du fichier et suppression des parties si l'upload ne marche pas.
            try {
                $result = $uploader->upload();

                $key_plug = $result['Key'];
            } catch (MultipartUploadException $e) {
                // State contains the "Bucket", "Key", and "UploadId"
                $params = $e->getState()->getId(); //récupération de l'id de l'upload
                $result = $s3->abortMultipartUpload($params); //suppression de l'upload
                $is_success = false; //on gérére l'erreur remontée au javscript
                $error_msg = "Error during the upload of the file, please retry !"; // on génère le message d'erreur
            }
            $is_success = true; //on génére le succès de l'opération 
            $error_msg = "Upload is done"; //msg du succès
        } else { // il n'y a pas de fichier à uploader
            $is_success = false; //génération de l'erreur
            $error_msg = "No file to upload"; //génération du msg d'erreur
        }
        //encodage en JSON pour le return  vers le javascript
        $jsonObjectestUpload = (json_encode(['success' => $is_success, 'error' => $error_msg, 'key_plug' => $key_plug]));
        return new Response($jsonObjectestUpload, 200, ['Content-Type' => 'application/json']);
    }

    /**
     * @Route("alstom/flush-plug", name="alstom.flush_plug")
     * @return Response
     */
    public function flush_plug(Request $request, BaselineRepository $baselinerepository)
    {
        $s3 = new S3Client([
            'version' => 'latest',
            'region'  => 'us-east-1',
            //'endpoint' => 'http://minio-azure.default.svc.cluster.local:9000',
            'endpoint' => 'http://localhost:5555',
            'use_path_style_endpoint' => true,
            'credentials' => [
                'key'    => 'amdptestdeployv7private',
                'secret' => 'pxq7omdDjm1vnqFI7cL2G6SHk72B/4G+tinSBr28ddnwN8FGmezQKftGVgLJQEmfzBkIwLubLwmRJ9X31Wez0w==',
            ],
        ]);

        $assoc_plug_baseline = new AssocPlugBaseline;
        $baseline = $baselinerepository->find($request->request->get('idBaseline'));
        $tabPlugs = $request->request->get('Plugs');
        foreach ($baseline->getAssocPlugBaselines() as $value) {
            $value->setStatus(false);
        }
        foreach ($tabPlugs as $value) {
            $result = $s3->copy('temp', $value['key_plug'], 'plugs', $value['key_plug']);
            $s3->deleteObject([
                'Bucket' => 'temp',
                'Key'    => $value['key_plug']
            ]);
            // $copier = new MultipartCopy($s3, 'temp/' . $value['key_plug'], [
            //     'bucket' => 'plugs',
            //     'key' => $value['key_plug'],
            // ]);
            // dump($copier);
            //dump($copier->copy());
            try {
                dump($result);
                // $result = $copier->copy();
                dump("Copy complete: {$result['ObjectURL']}\n");
            } catch (MultipartUploadException $e) {
                dump($e->getMessage() . "\n");
            }

            $plug = new Plugs;
            $plug->setName($value['name_plug']);
            $plug->setPlug($value['key_plug']);
            $plug->setUpdatedAt(new \Datetime('now'));
            $this->em->persist($plug);
            $assoc_plug_baseline->addPlug($plug);
            dump($plug);
        }

        $assoc_plug_baseline->setDate(new \Datetime('now'));
        $assoc_plug_baseline->setStatus(true);
        $this->em->persist($assoc_plug_baseline);
        $baseline->addAssocPlugBaseline($assoc_plug_baseline);
        dump($assoc_plug_baseline);
        $this->em->flush();
        return $this->json([
            'sucess' => 'ok'
        ]);
    }
}
