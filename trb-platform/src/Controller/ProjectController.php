<?php

namespace App\Controller;

use App\Entity\Projects;
use App\Form\ProjectType;
use App\Repository\ProjectsRepository;
use Doctrine\Common\Persistence\ObjectManager;
use App\Services\HttpClientKeycloakInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProjectController extends alstomController
{

    /**
     * @var ObjectManager
     */
    private $em;
    const SESSION = 'session';

    public function __construct(ObjectManager $em, HttpClientKeycloakInterface $httpClientKeycloak)
    {
        $this->em = $em;
    }

    //    PAGE FLEET -------------------------------------------------------------
    /**
     * @Route("/alstom/projects", name="alstom.projects")
     * @return Response
     */
    //    Vue de la page projects
    public function projects(ProjectsRepository $projectsRepository, Request $request): Response
    {

        $projects = $projectsRepository->findAll();
        dump($projects);

        return $this->render(('alstom/project/projects.html.twig'), [
            'current_menu' => 'projects',
            'projects' => $projects,
        ]);
    }

    //    page création FLEET
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

            $this->em->persist($project);
            $this->em->flush();
            $this->addFlash('success', 'Project create with success');
            return $this->redirectToRoute('alstom.projects');
        }

        return $this->render('alstom/project/create-project.html.twig', [
            'current_menu' => 'projects',
            'button' => 'Create',
            'form' => $form->createView()
        ]);
    }
    /**
     * @Route("/alstom/projects/{id}", name="alstom.show-project")
     * @return Response
     */
    public function show_project(Projects $project)
    {

        return $this->render('alstom/project/show-project.html.twig', [
            'current_menu' => 'projects',
            'project' => $project,
        ]);
    }
}
