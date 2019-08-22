<?php

namespace App\Controller;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use App\Repository\BaselineRepository;
use App\Repository\ProjectsRepository;
use App\Repository\TrainsRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\AssocLogBaseline;
//Allow the use of AWS object Storage
use Aws\S3\S3Client;
use Aws\S3\MultipartUploader;
use Aws\Exception\MultipartUploadException;
use Aws\S3\MultipartCopy;
use Vich\UploaderBundle\Templating\Helper\UploaderHelper;
use App\Entity\Plugs;
use App\Entity\AssocPlugBaseline;
use App\Entity\Logs;

class PlugsController extends AbstractController
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
