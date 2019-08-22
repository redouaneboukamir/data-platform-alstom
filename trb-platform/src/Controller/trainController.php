<?php

namespace App\Controller;

use App\Entity\Equipement;
use App\Entity\ERTMSEquipement;
use App\Entity\Trains;
use App\Entity\TrainsSearch;
use App\Form\TrainsSearchType;
use App\Form\TrainsType;
use App\Repository\TrainsRepository;
use App\Repository\ProjectsRepository;
use App\Repository\BaselineRepository;
use App\Entity\Baseline;
use App\Repository\TypeEquipementRepository;
use App\Repository\SoustypeEquipementRepository;
use App\Entity\AssociationEquiptERTMS;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class trainController extends AbstractController
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
}
