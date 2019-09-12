<?php

namespace App\Controller;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use App\Entity\Projects;
use App\Entity\ProjectSearch;
use App\Repository\ProjectsRepository;
use App\Form\ProjectSearchType;
use App\Form\ProjectType;
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
        dump($id_fleet);

        // $projects = $projectsRepository->findByAccess($id);

        return $this->render(('alstom/projects/projects.html.twig'), [
            'current_menu' => 'projects',
            'projects' => $projects,
            'id_projects' => $id_fleet,
            'form' => $form->createView()
        ]);
    }
    /**
     * @Route("/alstom/search-fleet", name="alstom.search-fleet")
     * @return Response
     */
    public function search_fleet(ProjectsRepository $projectsRepository, Request $request)
    {

        $fleet_user = [];

        if ($request->request->get('motclef')) {
            $motclef = strtoupper($request->request->get('motclef'));
            $q = array('motclef' => $motclef . '%');
            $projectSearch = $projectsRepository->findAllProjects($motclef, $q);
        }
        $users = $this->httpClientKeycloak->getUsers();
        foreach ($users as $key => $user) {

            if ($user['id'] == $this->getUser()->getKeycloakId()) {

                foreach ($projectSearch as $key => $fleet) {

                    foreach ($user['fleets'] as $key => $value) {

                        if ($fleet['name'] == $projectsRepository->find((int) $value)->getName()) {
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

        return $this->json(['projectsFound' => $jsonObjectEquipt], 200);
    }
    /**
     * @Route("/alstom/project/{name}", name="alstom.show-project")
     * @return Response
     */
    public function show_project_name(Projects $projects, ProjectsRepository $projectsRepository)
    {
        $fleet_user = [];
        $users = $this->httpClientKeycloak->getUsers();
        foreach ($users as $key => $value) {
            if ($value['id'] == $this->getUser()->getKeycloakId()) {
                foreach ($value['fleets'] as $key => $value) {
                    array_push($fleet_user, $projectsRepository->find((int) $value)->getName());
                }
            }
        }
        if (in_array($projects->getName(), $fleet_user)) {
            return $this->render('alstom/projects/show-project.html.twig', [
                'current_menu' => 'projects',
                'project' => $projects,
            ]);
        } else {
            return $this->redirectToRoute('alstom.forbidden');
        };
    }
    /**
     * @Route("/alstom/projects/{id}", name="alstom.project-show")
     * @return Response
     */
    public function show_project(Projects $projects, ProjectsRepository $projectsRepository)
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
        if (in_array($projects->getId(), $fleet_user)) {
            return $this->render('alstom/projects/show-project.html.twig', [
                'current_menu' => 'projects',
                'project' => $projects,
            ]);
        } else {
            return $this->redirectToRoute('alstom.forbidden');
        };
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
    public function addTrainToFleet(Projects $project, Request $request, TrainsRepository $trainsRepository)
    {

        $id_train = $request->request->get('train-flet');
        $trains = $trainsRepository->find($id_train);
        $project->addTrain($trains);
        $this->em->flush();
        $jsonObjectSubtype = $this->serializer->serialize($trains, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);

        return new Response($jsonObjectSubtype, 200, ['Content-Type' => 'application/json']);
    }
}
