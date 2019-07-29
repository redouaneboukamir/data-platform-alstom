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


class securityController extends AbstractController
{

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

        if (
            TRUE === $this->get('security.authorization_checker')->isGranted('ROLE_ALSTOM_ADMIN')
            || (TRUE === $this->get('security.authorization_checker')->isGranted('ROLE_ALSTOM_MAINTENER'))
            || (TRUE === $this->get('security.authorization_checker')->isGranted('ROLE_ALSTOM_DESIGN'))
            || (TRUE === $this->get('security.authorization_checker')->isGranted('ROLE_ALSTOM_COMMISSIONER'))
        ) {

            $user = $this->getUser();
            return $this->redirectToRoute('alstom.home', [
                'user' => $user
            ]);
        } else if (
            TRUE === $this->get('security.authorization_checker')->isGranted('ROLE_CLIENT_ADMIN')
            || (TRUE === $this->get('security.authorization_checker')->isGranted('ROLE_CLIENT_USER'))
        ) {

            $user = $this->getUser();
            dump($user);
            return $this->redirect($this->generateUrl('client.home', [
                'user' => $user
            ]));
        } else {
            return $this->render('home/login.html.twig', [
                'last_username' => $last_username,
                'error' => $error
            ]);
        }
    }

    /**
     * @Route("/alstom/create-user", name="alstom.create-user")
     * @return Response
     */
    public function create_user_alstom(Request $request): Response
    {

        $user = new User();

        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            if (($form->getData()->getClient()) != null) {
                $user->setEmail($form->getData()->getClient()->getEmail());
            }
            //            $user->setRoles(array('ROLE_CLIENT_ADMIN'));
            $user->setPassword($this->encoder->encodePassword($user, $form->getData()->getPassword()));

            $this->em->persist($user);
            $this->em->flush();
            //            $this->addFlash('success', 'User create with success');
            return $this->redirectToRoute('alstom.home');
        }

        return $this->render('alstom/user/create-user.html.twig', [
            'current_menu' => 'create-user',
            'button' => 'Create',
            'form' => $form->createView()
        ]);
    }


    /**
     * @Route("/client/create-user", name="client.create-user")
     * @return Response
     */
    public function create_user_client(Request $request): Response
    {

        $user = new User();

        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);


        if ($form->isSubmitted() && $form->isValid()) {

            //            recuperer l'email du form de client_user et l'attribuer ici pour le compte user
            //            $user->setEmail($form->getData()->getClient()->getEmail());
            $user->setRoles(array('ROLE_CLIENT_USER'));
            $user->setPassword($this->encoder->encodePassword($user, $form->getData()->getPassword()));
            $this->em->persist($user);
            $this->em->flush();
            //            $this->addFlash('success', 'User create with success');
            return $this->redirectToRoute('client.home');
        }

        return $this->render('client/user/create-user.html.twig', [
            'current_menu' => 'create-user',
            'button' => 'Create',
            'form' => $form->createView()
        ]);
    }
}
