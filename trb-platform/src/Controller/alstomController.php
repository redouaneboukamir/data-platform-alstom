<?php

namespace App\Controller;

use App\Entity\AssociationBaseline;
use App\Entity\AssociationEquiptERTMS;
use App\Entity\Baseline;
use App\Entity\Clients;
use App\Entity\ClientsSearch;
use App\Entity\Engineers;
use App\Entity\EnginSearch;
use App\Entity\Equipement;
use App\Entity\ERTMSEquipement;
use App\Entity\EVC;
use App\Entity\Projects;
use App\Entity\ProjectSearch;
use App\Entity\SoustypeEquipement;
use App\Entity\Trains;
use App\Entity\TrainsSearch;
use App\Entity\TypeEquipement;
use App\Form\AssociationERTMSType;
use App\Form\AssociationType;
use App\Form\BaselineType;
use App\Form\ClientsSearchType;
use App\Form\ClientsType;
use App\Form\EngineerType;
use App\Form\EnginSearchType;
use App\Form\EquipementType;
use App\Form\ErtmsType;
use App\Form\EVCType;
use App\Form\ProjectSearchType;
use App\Form\ProjectType;
use App\Form\SousTypeEquipementType;
use App\Form\TrainsSearchType;
use App\Form\TrainsType;
use App\Form\TypeEquipementType;
use App\Repository\BaselineRepository;
use App\Repository\ClientsRepository;
use App\Repository\EngineersRepository;
use App\Repository\EVCRepository;
use App\Repository\ProjectsRepository;
use App\Repository\TrainsRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Annotation\Route;

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
     * @Route("/alstom", name="alstom.home")
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
        if($form->isSubmitted() && $form->isValid()){

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
     * @Route("/alstom/edit-client/{id}", name="alstom.edit-client", methods={"GET","POST"} )
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
     * @Route("/alstom/client/{id}", name="alstom.delete-client", methods={"DELETE"})
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
    /**
     * @Route("/alstom/edit-engineer/{id}", name="alstom.edit-engineer", methods={"POST", "GET"})
     * @return Response
     */
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

        if($this->isCsrfTokenValid('delete'.$engineers->getId(), $request->get('_token'))){

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

        foreach ($project as $item){
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
    public function show_project(Projects $projects){

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
        if($form->isSubmitted() && $form->isValid()){
            $project->getAvailable(true);
            $this->em->persist($project);
            $this->em->flush();
            $this->addFlash('success', 'Project create with success');
            return $this->redirectToRoute('alstom.projects');
        }

        return $this->render('alstom/projects/create-project.html.twig',[
            'current_menu' => 'projects',
            'button' =>'Create',
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
        if($form->isSubmitted() && $form->isValid()){

            $this->em->flush();
            $this->addFlash('success', 'Project edit with success');
            return $this->redirectToRoute('alstom.projects');
        }

        return $this->render('alstom/projects/edit-project.html.twig', [
            'current_menu' => 'projects',
            'button' =>'Edit',
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
        if($this->isCsrfTokenValid('delete'.$projects->getId(), $request->get('_token'))){

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
        $train = new Trains();
        $form = $this->createForm(TrainsType::class, $train);
        $form->handleRequest($request);

        $type = new TypeEquipement();
        $form_type = $this->createForm(TypeEquipementType::class, $type);
        $form_type->handleRequest($request);

        $soustype = new SoustypeEquipement();
        $form_soustype = $this->createForm(SousTypeEquipementType::class, $soustype);
        $form_soustype->handleRequest($request);


        $ertms = new ERTMSEquipement();
        $form_ertms = $this->createForm(ErtmsType::class, $ertms);
        $form_ertms->handleRequest($request);
        $train->addERTM($ertms);
        dump($train->getERTMS());
/*        if($form_ertms->get('save')->isClicked()){
            $this->em->persist($ertms);
        }*/
        $equipement = new Equipement();
        $form_equipt = $this->createForm(EquipementType::class, $equipement);
        $form_equipt->handleRequest($request);

        $assoc_ertms = new AssociationEquiptERTMS();
/*        $form_assoc_ertms = $this->createForm(AssociationERTMSType::class, $assoc_ertms);
        $form_assoc_ertms->handleRequest($request);*/

        $assoc_ertms->setSolution($ertms);
        $assoc_ertms->addEquipement($equipement);


        dump($form_ertms->getData());

        //        Validation du formulaire
        if($form->isSubmitted() && $form->isValid()){

/*            $assoc_ertms->setSolution($form_ertms->getData());*/
            $this->em->persist($train);
            $this->em->persist($ertms);
            $this->em->persist($type);
            $this->em->persist($soustype);
            $this->em->flush();
            $this->addFlash('success', 'Train create with success');
            return $this->redirectToRoute('alstom.trains');
        }

        return $this->render('alstom/trains/create-trains.html.twig', [
            'current_menu' => 'trains',
            'button' => 'Create',
            'form' => $form->createView(),
            'form_ertms' => $form_ertms->createView(),
            'form_equipement' => $form_equipt->createView(),
            'form_type' => $form_type->createView(),
            'form_soustype' => $form_soustype->createView()
        ]);



    }


    /**
     * @Route("/alstom/edit-train/{id}", name="alstom.edit-train", methods={"POST","GET"})
     * @return Response
     */
    public function edit_train(Request $request, Trains $trains)
    {
        $form = $this->createForm(TrainsType::class, $trains);
        $form->handleRequest($request);


        //        Validation du formulaire
        if($form->isSubmitted() && $form->isValid()){

            $this->em->persist();
            $this->em->flush();
            $this->addFlash('success', 'Trains modified with success');
            return $this->redirectToRoute('alstom.trains');
        }

        return $this->render('alstom/trains/edit-train.html.twig', [
            'current_menu' => 'trains',
            'button' =>'Edit',
            'train' => $trains,
            'form' => $form->createView(),
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
        if($this->isCsrfTokenValid('delete'.$trains->getId(), $request->get('_token'))){

            $this->em->remove($trains);
            $this->em->flush();
            $this->addFlash('success', 'Train delete with success');

        }
        return $this->redirectToRoute('alstom.trains');


    }


//    EVC-----------------------------------------------------------
//


    /**
     * @Route("/alstom/evc", name="alstom.evc")
     * @return Response
     */

    public function evc(EVCRepository $EVCRepository, Request $request): Response
    {

//        $search = new TrainsSearch();
//        $form = $this->createForm(TrainsSearchType::class, $search);
//        $form->handleRequest($request);
//        $trains = $trainsRepository->findAllTrains($search);
        $evcs = $EVCRepository->findAll();

        return $this->render('alstom/evc/evc.html.twig', [
            'current_menu' => 'EVC',
            'evcs' => $evcs,
//            'form' => $form->createView()
        ]);
    }



    /**
     * @Route("/alstom/create-evc", name="alstom.create-evc")
     * @return Response
     */
    public function create_evc(Request $request): Response
    {
        $evc = new EVC();
        $form = $this->createForm(EVCType::class, $evc);
        $form->handleRequest($request);


        //        Validation du formulaire
        if($form->isSubmitted() && $form->isValid()){

            $this->em->persist($evc);
            $this->em->flush();
            $this->addFlash('success', 'EVC create with success');
            return $this->redirectToRoute('alstom.evc');
        }
        return $this->render('alstom/evc/create-evc.html.twig', [
            'current_menu' => 'trains',
            'button' => 'Create',
            'form' => $form->createView(),
        ]);

    }


    //    suppresion de evc
    /**
     * @Route("/alstom/evc/{id}", name="alstom.delete-evc", methods={"DELETE"})
     * @param Request $request
     * @return Response
     */
    public function delete_evc(EVC $EVC, Request $request): Response
    {
        if($this->isCsrfTokenValid('delete'.$EVC->getId(), $request->get('_token'))){

            $this->em->remove($EVC);
            $this->em->flush();
            $this->addFlash('success', 'EVC delete with success');

        }
        return $this->redirectToRoute('alstom.evc');


    }


//    PART ASSOCIATION ---------------------------------------------------------
    /**
     * @Route("/alstom/maintener/association", name="alstom.association")
     * @param Request $request
     * @return Response
     */
        public function association(Request $request):Response
        {
            $Association = new AssociationBaseline();
            $form =  $this->createForm(AssociationType::class, $Association);

            $form->handleRequest($request);
            dump($Association);


            //        Validation du formulaire
            if($form->isSubmitted() && $form->isValid()){

                $this->em->persist($Association);
                $this->em->flush();
                $this->addFlash('success', 'Association create with success');
                return $this->redirectToRoute('alstom.association');
            }



            return $this->render('alstom/association/association.html.twig', [
                'current_menu' => 'association',
                'form' => $form->createView(),
                'button' => 'Associate'
            ]);
        }
// PAGE BASELINE-------------------------------------------------------
    /**
     * @Route("/alstom/design/baseline", name="alstom.baseline")
     * @param Request $request
     * @return Response
     */
    public function baseline(Request $request, BaselineRepository $baselineRepository):Response
    {
        //        $search = new TrainsSearch();
//        $form = $this->createForm(TrainsSearchType::class, $search);
//        $form->handleRequest($request);
//        $trains = $trainsRepository->findAllTrains($search);

        $baseline = $baselineRepository->findAll();

        return $this->render('alstom/baseline/baseline.html.twig', [
            'current_menu' => 'baseline',
            'baselines' => $baseline,
//            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/alstom/design/create-baseline", name="alstom.create-baseline")
     * @return Response
     */
    public function create_baseline(Request $request): Response
    {
        $baseline = new Baseline();
        $form = $this->createForm(BaselineType::class, $baseline);
        $form->handleRequest($request);


        //        Validation du formulaire
        if($form->isSubmitted() && $form->isValid()){

            $this->em->persist($baseline);
            $this->em->flush();
            $this->addFlash('success', 'Baseline create with success');
            return $this->redirectToRoute('alstom.baseline');
        }

        return $this->render('alstom/baseline/create-baseline.html.twig', [
            'current_menu' => 'baseline',
            'button' => 'Create',
            'form' => $form->createView(),
        ]);

    }

    //    suppresion de baseline
    /**
     * @Route("/alstom/design/baseline/{id}", name="alstom.delete-baseline", methods={"DELETE"})
     * @param Request $request
     * @return Response
     */
    public function delete_baseline(Baseline $baseline, Request $request): Response
    {
        if($this->isCsrfTokenValid('delete'.$baseline->getId(), $request->get('_token'))){

            $this->em->remove($baseline);
            $this->em->flush();
            $this->addFlash('success', 'Baseline delete with success');

        }
        return $this->redirectToRoute('alstom.baseline');


    }


}
