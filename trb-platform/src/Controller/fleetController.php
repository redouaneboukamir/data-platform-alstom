<?php

namespace App\Controller;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use App\Entity\Fleets;
use App\Entity\FleetSearch;
use App\Entity\Projects;
use App\Repository\FleetsRepository;
use App\Form\ProjectSearchType;
use App\Form\FleetType;
use App\Repository\ProjectsRepository;
use App\Repository\TrainsRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ObjectManager;
use App\Services\HttpClientKeycloakInterface;

class fleetController extends alstomController
{

    /**
     * @var ObjectManager
     */
    private $em;
    const SESSION = 'session';

    public function __construct(ObjectManager $em, HttpClientKeycloakInterface $httpClientKeycloak)
    {
        $fleet_user = [];
        $this->em = $em;
        $this->fleet_user = $fleet_user;
        $tabEquipt = array();
        $this->tabEquipt = $tabEquipt;
        $this->httpClientKeycloak = $httpClientKeycloak;

        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $this->encoders = $encoders;
        $serializer = new Serializer($normalizers, $encoders);
        $this->serializer = $serializer;
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

    //    PAGE FLEET -------------------------------------------------------------
    /**
     * @Route("/alstom/fleets", name="alstom.fleets")
     * @return Response
     */
    //    Vue de la page projects
    public function fleets(FleetsRepository $FleetsRepository, Request $request, ProjectsRepository $projectsRepository): Response
    {
        $search = new FleetSearch();
        $form = $this->createForm(ProjectSearchType::class, $search);
        $form->handleRequest($request);

        $fleets = $FleetsRepository->findAll();
        $projects = $projectsRepository->findAll();
        $users = $this->httpClientKeycloak->getUsers();
        foreach ($users as $key => $value) {
            if ($value['id'] == $this->getUser()->getKeycloakId()) {
                $user = ($value);
            }
        }
        if (array_key_exists('fleets', $user)) {
            $id_fleet = $user['fleets'];
        } else {
            $id_fleet = "";
        }
        if (array_key_exists('projects', $user)) {
            $id_project = $user['projects'];
        } else {
            $id_project = "";
        }
        dump($fleets);
        return $this->render(('alstom/fleets/fleets.html.twig'), [
            'current_menu' => 'fleets',
            'fleets' => $fleets,
            'projects' => $projects,
            'id_fleets' => $id_fleet,
            'id_project' => $id_project,
            'form' => $form->createView()
        ]);
    }
    /**
     * @Route("/alstom/search-fleet", name="alstom.search-fleet")
     * @return Response
     */
    public function search_fleet(FleetsRepository $FleetsRepository, Request $request)
    {

        $fleet_user = [];

        if ($request->request->get('motclef')) {
            $motclef = strtoupper($request->request->get('motclef'));
            $q = array('motclef' => $motclef . '%');
            $fleetsSearch = $FleetsRepository->findAllFleets($motclef, $q);
        }
        $users = $this->httpClientKeycloak->getUsers();
        foreach ($users as $key => $user) {

            if ($user['id'] == $this->getUser()->getKeycloakId()) {

                foreach ($fleetsSearch as $key => $fleet) {

                    foreach ($user['fleets'] as $key => $value) {
                        if ($fleet['name'] == $FleetsRepository->find((int) $value)->getName()) {
                            array_push($fleet_user, $fleet['name']);
                        }
                    }
                }
            }
        }

        $jsonObjectEquipt = $this->serializer->serialize($fleet_user, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);

        return $this->json(['fleetsFound' => $jsonObjectEquipt], 200);
    }
    /**
     * @Route("/alstom/fleets/{name}", name="alstom.show-fleet")
     * @return Response
     */
    public function show_fleet_name(Fleets $fleets, FleetsRepository $FleetsRepository)
    {
        $fleet_user = [];
        $users = $this->httpClientKeycloak->getUsers();
        foreach ($users as $key => $value) {
            if ($value['id'] == $this->getUser()->getKeycloakId()) {
                foreach ($value['fleets'] as $key => $value) {
                    array_push($fleet_user, $FleetsRepository->find((int) $value)->getName());
                }
            }
        }
        if (in_array($fleets->getName(), $fleet_user)) {
            return $this->render('alstom/fleets/show-fleet.html.twig', [
                'current_menu' => 'fleets',
                'project' => $fleets,
            ]);
        } else {
            return $this->redirectToRoute('alstom.forbidden');
        };
    }
    /**
     * @Route("/alstom/fleets/{id}", name="alstom.fleet-show")
     * @return Response
     */
    public function show_project(Fleets $fleets, FleetsRepository $FleetsRepository)
    {
        $fleet_user = [];
        $users = $this->httpClientKeycloak->getUsers();

        foreach ($users as $key => $value) {
            if ($value['id'] == $this->getUser()->getKeycloakId()) {
                foreach ($value['fleets'] as $key => $value) {
                    array_push($fleet_user, (int) $value);
                }
            }
        }
        if (in_array($fleets->getId(), $fleet_user)) {
            return $this->render('alstom/fleets/show-fleet.html.twig', [
                'current_menu' => 'fleets',
                'fleet' => $fleets,
            ]);
        } else {
            return $this->redirectToRoute('alstom.forbidden');
        };
    }


    //    page création FLEET
    /**
     * @Route("/alstom/create-fleet/{id}", name="alstom.create-fleet")
     * @return Response
     */
    public function create_fleet(Projects $projects, Request $request): Response
    {

        $fleets = new Fleets();
        $form = $this->createForm(FleetType::class, $fleets);
        $form->handleRequest($request);

        //        Validation du formulaire
        if ($form->isSubmitted() && $form->isValid()) {
            $fleets->getAvailable(true);
            $this->em->persist($fleets);
            $this->em->flush();
            $this->addFlash('success', 'Fleet create with success');
            return $this->redirectToRoute('alstom.fleets');
        }

        return $this->render('alstom/fleets/create-fleet.html.twig', [
            'current_menu' => 'fleets',
            'button' => 'Create',
            'form' => $form->createView()
        ]);
    }



    //    Page d'edit de project
    /**
     * @Route("/alstom/edit-fleet/{id}", name="alstom.edit-fleet", methods={"GET", "POST"})
     * @return Response
     */
    public function edit_fleet(Request $request, Fleets $fleets): Response
    {
        $form = $this->createForm(FleetType::class, $fleets);
        $form->handleRequest($request);

        //        Validation du formulaire
        if ($form->isSubmitted() && $form->isValid()) {

            $this->em->flush();
            $this->addFlash('success', 'Fleet edit with success');
            return $this->redirectToRoute('alstom.fleets');
        }

        return $this->render('alstom/fleets/edit-project.html.twig', [
            'current_menu' => 'fleets',
            'button' => 'Edit',
            'fleet' => $fleets,
            'form' => $form->createView()
        ]);
    }
    //    suppresion de fleet
    /**
     * @Route("/alstom/fleet/{id}/delete", name="alstom.delete-fleet", methods={"DELETE"})
     * @param Request $request
     * @return Response
     */
    public function delete_fleet(Fleets $fleets, Request $request): Response
    {
        if ($this->isCsrfTokenValid('delete' . $fleets->getId(), $request->get('_token'))) {

            $fleets->setAvailable(false);
            $this->em->flush();
            $this->addFlash('success', 'Fleet delete with success');
        }
        return $this->redirectToRoute('alstom.fleets');
    }
    /**
     * @Route("alstom/checkTrains", name="alstom.checkTrains")
     * @return Response
     */
    public function checkTrains(Request $request, TrainsRepository $trainsRepository)
    {

        $trains = $trainsRepository->findAll();
        $jsonObjectSubtype = $this->serializer->serialize($trains, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);

        return new Response($jsonObjectSubtype, 200, ['Content-Type' => 'application/json']);
    }
    /**
     * @Route("alstom/addTrainToFleet/{id}", name="alstom.addTrainToFleet")
     * @return Response
     */
    public function addTrainToFleet(Fleets $fleets, Request $request, TrainsRepository $trainsRepository)
    {

        $id_train = $request->request->get('train-flet');
        $trains = $trainsRepository->find($id_train);
        $fleets->addTrain($trains);
        $this->em->flush();
        $jsonObjectSubtype = $this->serializer->serialize($trains, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);

        return new Response($jsonObjectSubtype, 200, ['Content-Type' => 'application/json']);
    }
}
