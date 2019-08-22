<?php

namespace App\Controller;

use App\Repository\AssocPlugBaselineRepository;
use App\Repository\BaselineRepository;
use App\Entity\Baseline;
use App\Repository\TypeEquipementRepository;
use App\Repository\SoustypeEquipementRepository;
use App\Entity\AssocEvcCarte;
use App\Entity\AssociationEquiptERTMS;
use App\Repository\ERTMSEquipementRepository;
use App\Repository\AssociationEquiptERTMSRepository;
use App\Entity\VersionLogiciel;
use App\Entity\Equipement;
use App\Entity\ERTMSEquipement;
use App\Form\EquipementType;
use App\Form\BaselineType;
use App\Form\VersionType;
use App\Entity\ConfigLogiciel;
use App\Form\ConfigLogicielType;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class baselineController extends AbstractController
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
}
