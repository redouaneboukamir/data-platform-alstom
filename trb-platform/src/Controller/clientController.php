<?php

namespace App\Controller;

use App\Entity\Fleets;
use App\Entity\FleetSearch;
use App\Entity\Trains;
use App\Entity\TrainsSearch;
use App\Entity\User;
use App\Form\ProjectSearchType;
use App\Form\TrainsSearchType;
use App\Form\TrainsType;
use App\Repository\ClientsUserRepository;
use App\Repository\FleetsRepository;
use App\Repository\TrainsRepository;
use App\Repository\UserRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
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
     * @Route("/client", name="client.home")
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
     * @Route("/client/projects", name="client.projects")
     * @return Response
     */
    // public function projects(FleetsRepository $FleetsRepository, Request $request): Response
    // {
    //     $search = new Fleetsearch();
    //     $form = $this->createForm(ProjectSearchType::class, $search);
    //     $form->handleRequest($request);
    //     $projects = $FleetsRepository->findAllFleets($search);

    //     return $this->render('client\projects\project.html.twig', [
    //         'current_menu' => 'projects',
    //         'projects' => $projects,
    //         'form' => $form->createView()
    //     ]);
    // }
    /**
     * @Route("/client/project/{id}", name="client.project-show")
     * @return Response
     */
    public function show_project(Fleets $fleets)
    {

        return $this->render('client/projects/show-project.html.twig', [
            'current_menu' => 'projects',
            'project' => $fleets,
        ]);
    }



    // Page TRAINS ---------------------------------------------
    /**
     * @Route("/client/trains", name="client.trains")
     * @return Response
     */
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

    /**
     * @Route("/client/create-train", name="client.create-train")
     * @return Response
     */
    public function create_train(Request $request): Response
    {
        $train = new Trains();
        $form = $this->createForm(TrainsType::class, $train);
        $form->handleRequest($request);


        //        Validation du formulaire
        if ($form->isSubmitted() && $form->isValid()) {

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


    /**
     * @Route("/client/edit-train/{id}", name="client.edit-train", methods={"POST","GET"})
     * @return Response
     */
    public function edit_train(Request $request, Trains $trains)
    {
        $form = $this->createForm(TrainsType::class, $trains);
        $form->handleRequest($request);

        //        Validation du formulaire
        if ($form->isSubmitted() && $form->isValid()) {

            $this->em->flush();
            $this->addFlash('success', 'Trains modified with success');
            return $this->redirectToRoute('client.trains');
        }

        return $this->render('client/trains/edit-train.html.twig', [
            'current_menu' => 'trains',
            'button' => 'Edit',
            'train' => $trains,
            'form' => $form->createView()
        ]);
    }
    /**
     * @Route("/client/trains/{id}", name="client.show-train")
     * @return Response
     */
    public function show_train(Trains $trains)
    {
        return $this->render('client/trains/show-train.html.twig', [
            'current_menu' => 'trains',
            'train' => $trains
        ]);
    }
    //    suppresion de train
    /**
     * @Route("/client/train/{id}", name="client.delete-train", methods={"DELETE"})
     * @param Request $request
     * @return Response
     */
    public function delete_train(Trains $trains, Request $request): Response
    {
        if ($this->isCsrfTokenValid('delete' . $trains->getId(), $request->get('_token'))) {

            $this->em->remove($trains);
            $this->em->flush();
            $this->addFlash('success', 'Train delete with success');
        }
        return $this->redirectToRoute('client.trains');
    }
    //    Page user -----------------------------------------------------
    /**
     * @Route("/client/users", name="client.users")
     * @return Response
     */
    public function users(UserRepository $userRepository, Request $request): Response
    {
        $users = [];
        //        $search = new TrainsSearch();
        //        $form = $this->createForm(TrainsSearchType::class, $search);
        //        $form->handleRequest($request);
        $all_users = $userRepository->findAll();
        foreach ($all_users as $val) {
            if (($val->getRoles()[0]) == "ROLE_CLIENT_USER") {

                array_push($users, $val);
            }
        }

        return $this->render('client/client_user/user.html.twig', [
            'current_menu' => 'users',
            'users' => $users,
            //            'form' => $form->createView()
        ]);
    }
}
