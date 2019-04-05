<?php

namespace App\Controller;

use App\Entity\Projects;
use App\Entity\ProjectSearch;
use App\Entity\Trains;
use App\Entity\TrainsSearch;
use App\Form\ProjectSearchType;
use App\Form\TrainsSearchType;
use App\Form\TrainsType;
use App\Repository\ProjectsRepository;
use App\Repository\TrainsRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class clientController extends AbstractController
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
    public function index(): Response
    {
        return $this->render('client\index.html.twig', [
            'current_menu' => 'home'
        ]);
    }
// Page PROJECTS ---------------------------------------------
    /**
     * @return Response
     */
    public function projects(ProjectsRepository $projectsRepository, Request $request): Response
    {
        $search = new ProjectSearch();
        $form = $this->createForm(ProjectSearchType::class, $search);
        $form->handleRequest($request);
        $projects = $projectsRepository->findAllProjects($search);

        return $this->render('client\projects\project.html.twig', [
            'current_menu' => 'projects',
            'projects' => $projects,
            'form' => $form->createView()
        ]);
    }

    public function show_project(Projects $projects){

        return $this->render('client/projects/show-project.html.twig', [
            'current_menu' => 'projects',
            'project' => $projects,
        ]);
    }



// Page TRAINS ---------------------------------------------

    public function trains(TrainsRepository $trainsRepository, Request $request): Response
    {

        $search = new TrainsSearch();
        $form = $this->createForm(TrainsSearchType::class, $search);
        $form->handleRequest($request);
        $trains = $trainsRepository->findAllTrains($search);

        return $this->render('client/trains/trains.html.twig', [
            'current_menu' => 'trains',
            'trains' => $trains,
            'form' => $form->createView()
        ]);
    }

    public function create_train(Request $request, ProjectsRepository $projectsRepository, TrainsRepository $trainsRepository): Response
    {
        $train = new Trains();
        $form = $this->createForm(TrainsType::class, $train);
        $form->handleRequest($request);

        //        Validation du formulaire
        if($form->isSubmitted() && $form->isValid()){

            $this->em->persist($train);
            $this->em->flush();
            $this->addFlash('success', 'Train create with success');
            return $this->redirectToRoute('client.trains');
        }
        return $this->render('client/trains/create-trains.html.twig', [
            'current_menu' => 'trains',
            'button' => 'Create',
            'form' => $form->createView()
        ]);

    }



    public function edit_train(Request $request, Trains $trains)
    {
        $form = $this->createForm(TrainsType::class, $trains);
        $form->handleRequest($request);

        //        Validation du formulaire
        if($form->isSubmitted() && $form->isValid()){

            $this->em->flush();
            $this->addFlash('success', 'Trains modified with success');
            return $this->redirectToRoute('client.trains');
        }

        return $this->render('client/trains/edit-train.html.twig', [
            'current_menu' => 'trains',
            'button' =>'Edit',
            'train' => $trains,
            'form' => $form->createView()
        ]);
    }

    public function show_train(Trains $trains)
    {
        return $this->render('client/trains/show-train.html.twig', [
            'current_menu' => 'trains',
            'train' => $trains
        ]);
    }
    //    suppresion de train
    /**
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
        return $this->redirectToRoute('client.trains');


    }
}