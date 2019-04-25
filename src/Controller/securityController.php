<?php


namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class securityController extends AbstractController{

    /**
     * @var ObjectManager
     */
    private $em;
    /**
     * @var UserPasswordEncoderInterface
     */
    private $encoder;


        public function __construct(ObjectManager $em, UserPasswordEncoderInterface $encoder)
    {

        $this->em = $em;
        $this->encoder = $encoder;

    }
    /**
     * @Route("/", name="login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        $last_username = $authenticationUtils->getLastUsername();
        $error = $authenticationUtils->getLastAuthenticationError();

        if (TRUE === $this->get('security.authorization_checker')->isGranted('ROLE_ALSTOM')){

            return $this->redirectToRoute('alstom.home');

        }else if (TRUE === $this->get('security.authorization_checker')->isGranted('ROLE_CLIENT')){

            return $this->redirectToRoute('client.home',[

            ]);

        }else{

            return $this->render('home/login.html.twig', [
                'last_username' => $last_username,
                'error' => $error
            ]);

        }

    }
    /**
     * @Route("/forbidden", name="alstom.forbidden")
     * @return Response
     */
    public function forbidden_route(): Response
    {
        return $this->render('forbidden.html.twig');
    }

    /**
     * @Route("/alstom/create-user", name="alstom.create-user")
     * @return Response
     */
    public function create_user(Request $request): Response
    {

        $user = new User();

//        $user->setRoles(array('ROLE_CLIENT'));

        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);
//        dump($form->getData()->getClient()->getEmail());
//        Validation du formulaire
        if($form->isSubmitted() && $form->isValid()){

            $user->setEmail($form->getData()->getClient()->getEmail());
            $user->setRoles(array('ROLE_CLIENT'));
            $user->setPassword($this->encoder->encodePassword($user, $form->getData()->getPassword()));

            $this->em->persist($user);
            $this->em->flush();
//            $this->addFlash('success', 'User create with success');
            return $this->redirectToRoute('alstom.home');
        }

        return $this->render('alstom/user/create-user.html.twig',[
            'current_menu' => 'create-user',
            'button' =>'Create',
            'form' => $form->createView()
        ]);
    }


}