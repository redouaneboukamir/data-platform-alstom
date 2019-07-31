<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* alstom/index.html.twig */
class __TwigTemplate_1dc6a5cc65e1dcb8a0285c88e9af7c7c1645f06a68cfed0239e09c2841c9a0d9 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'stylesheets' => [$this, 'block_stylesheets'],
            'body' => [$this, 'block_body'],
            'javascripts' => [$this, 'block_javascripts'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/index.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\">
        <title>Alstom
            ";
        // line 6
        $this->displayBlock('title', $context, $blocks);
        // line 7
        echo "        </title>
        <link crossorigin=\"anonymous\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" rel=\"stylesheet\">
        <link crossorigin=\"anonymous\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" rel=\"stylesheet\">
        <link href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css\" rel=\"stylesheet\">
        <link rel=\"icon\" type=\"image/png\" href=\"";
        // line 11
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/img/logo-alstom.png"), "html", null, true);
        echo "\">l
        <link rel=\"stylesheet\" href=\"";
        // line 12
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/app.css"), "html", null, true);
        echo "\"> ";
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 13
        echo "        </head>
        <body>

            ";
        // line 17
        echo "            <nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow navbar-fullscreen\">
                <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"";
        // line 18
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.home");
        echo "\">
                    ";
        // line 19
        if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_ADMIN")) {
            // line 20
            echo "                        Alstom Admin
                    ";
        } elseif ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_DESIGN")) {
            // line 22
            echo "                        Alstom Designer
                    ";
        } elseif ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_MAINTENER")) {
            // line 24
            echo "                        Alstom Maintener
                    ";
        } elseif ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_COMMISSIONER")) {
            // line 26
            echo "                        Alstom Commissioner
                    ";
        } elseif ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_SERVICE")) {
            // line 28
            echo "                        Alstom Service
                    ";
        } else {
            // line 30
            echo "                        Alstom User
                    ";
        }
        // line 32
        echo "
                </a>
                ";
        // line 35
        echo "                <ul class=\"navbar-nav px-3\">
                    <li class=\"nav-item text-nowrap\">
                        <a class=\"nav-link\" href=\"";
        // line 37
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("logout");
        echo "\">Sign out</a>
                    </li>
                </ul>
            </nav>

            ";
        // line 43
        echo "            <div class=\"pos-f-t navbar-smallscreen\">
                <div class=\"collapse\" id=\"navbarToggleExternalContent\">
                    <div class=\"bg-dark p-4\">
                        <a class=\"navbar-brand col-sm-12 mr-0 tit\" href=\"#\">Alstom user</a>
                        <input aria-label=\"Search\" class=\"form-control form-control-dark w-100\" placeholder=\"Search\" type=\"text\">
                        <ul class=\"navbar-nav px-3\">
                            <li class=\"nav-item\">
                                <a class=\"nav-link ";
        // line 50
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 50, $this->source); })()) == " client")) {
            echo "active";
        }
        echo "\" href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.client");
        echo "\">
                                    <span data-feather=\"layers\"></span>
                                    Clients
                                </a>
                            </li>
                            <li class=\"nav-item\">
                                <a class=\"nav-link ";
        // line 56
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 56, $this->source); })()) == " engineers")) {
            echo "active";
        }
        echo "\" href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.engineers");
        echo "\">
                                    <span data-feather=\"layers\"></span>
                                    Engineers
                                </a>
                            </li>
                            <li class=\"nav-item\">
                                <a class=\"nav-link ";
        // line 62
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 62, $this->source); })()) == " projects")) {
            echo "active";
        }
        echo "\" href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.projects");
        echo "\">
                                    <span data-feather=\"layers\"></span>
                                    Projects
                                </a>
                            </li>
                            <li class=\"nav-item\">
                                <a class=\"nav-link ";
        // line 68
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 68, $this->source); })()) == " trains")) {
            echo "active";
        }
        echo "\" href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.trains");
        echo "\">
                                    <span data-feather=\"layers\"></span>
                                    Trains
                                </a>
                            </li>
                            <li class=\"nav-item\">
                                <a class=\"nav-link ";
        // line 74
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 74, $this->source); })()) == " ertms")) {
            echo "active";
        }
        echo "\" href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.ertms");
        echo "\">
                                    <span data-feather=\"layers\">ERTMS</span>
                                </a>
                            </li>
                            <li class=\"nav-item text-nowrap\">
                                <a class=\"nav-link signout-burger\" href=\"";
        // line 79
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("logout");
        echo "\">Sign out</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <nav class=\"navbar navbar-dark bg-dark\">
                    <button aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\" data-target=\"#navbarToggleExternalContent\" data-toggle=\"collapse\" type=\"button\">
                        <span class=\"navbar-toggler-icon\"></span>
                    </button>
                </nav>
            </div>
            ";
        // line 90
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 90, $this->source); })()) != "home")) {
            // line 91
            echo "                ";
            // line 92
            echo "                <div class=\"container-fluid\">
                    <div class=\"row\">
                        <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">
                            <div class=\"sidebar-sticky\">
                                <ul class=\"nav flex-column item-sidebar\">
                                    <li class=\"nav-item\">
                                        <a class=\"nav-link ";
            // line 98
            if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 98, $this->source); })()) == "home")) {
                echo "active";
            }
            echo " title-sidebar\" href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.home");
            echo "\">
                                            <i class=\"fas fa-home\"></i>
                                            <span data-feather=\"home\">Home</span>

                                        </a>
                                    </li>
                                    ";
            // line 104
            if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_ADMIN")) {
                // line 105
                echo "                                        <li class=\"nav-item\">
                                            <a class=\"nav-link ";
                // line 106
                if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 106, $this->source); })()) == "client")) {
                    echo "active ";
                }
                echo " \" href=\" ";
                echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.client");
                echo " \">
                                                <i class=\"fas fa-user-tie\"></i>
                                                <span data-feather=\"layers\">Clients</span>

                                            </a>
                                        </li>
                                        <li class=\"nav-item\">
                                            <a class=\"nav-link ";
                // line 113
                if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 113, $this->source); })()) == "engineers")) {
                    echo "active ";
                }
                echo " \" href=\" ";
                echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.engineers");
                echo " \">
                                                <i class=\"fas fa-user-friends\"></i>
                                                <span data-feather=\"layers\">Engineers</span>

                                            </a>
                                        </li>
                                    ";
            }
            // line 120
            echo "
                                    <li class=\"nav-item\">
                                        <a class=\"nav-link ";
            // line 122
            if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 122, $this->source); })()) == "projects")) {
                echo "active ";
            }
            echo " \" href=\" ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.projects");
            echo " \">
                                            <i class=\"fas fa-project-diagram\"></i>
                                            <span data-feather=\"layers\">Projects</span>

                                        </a>
                                    </li>


                                    ";
            // line 130
            if (($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_COMMISSIONER") || $this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_ADMIN"))) {
                // line 131
                echo "                                        <li class=\"nav-item\">
                                            <a class=\"nav-link ";
                // line 132
                if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 132, $this->source); })()) == "trains")) {
                    echo "active ";
                }
                echo " \" href=\" ";
                echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.trains");
                echo " \">
                                                <i class=\"fas fa-subway\"></i>
                                                <span data-feather=\"layers\">Trains</span>

                                            </a>
                                        </li>
                                    ";
            }
            // line 139
            echo "                                    ";
            if ((($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_COMMISSIONER") || $this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_MAINTENER")) || $this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_ADMIN"))) {
                // line 140
                echo "                                        <li class=\"nav-item\">
                                            <a class=\"nav-link ";
                // line 141
                if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 141, $this->source); })()) == "ertms")) {
                    echo "active ";
                }
                echo " \" href=\" ";
                echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.ertms");
                echo " \">

                                                <svg height=\"30px\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;\" viewbox=\"0 0 80 80\" width=\"20px\">
                                                    <g id=\"Calque1\">
                                                        <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        <g transform=\"matrix(2.65412,0,0,1,-19.9734,0)\">
                                                            <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        </g>
                                                        <g transform=\"matrix(2.65412,0,0,1,-13.2465,0)\">
                                                            <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        </g>
                                                        <g transform=\"matrix(2.65412,0,0,1,-6.77352,0)\">
                                                            <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        </g>
                                                        <g transform=\"matrix(2.65412,0,0,1,-0.0465809,0)\">
                                                            <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        </g>
                                                        <g transform=\"matrix(2.65412,0,0,1,6.26475,0)\">
                                                            <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        </g>
                                                        <g transform=\"matrix(2.65412,0,0,1,12.9917,0)\">
                                                            <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        </g>
                                                        <g transform=\"matrix(2.65412,0,0,1,19.4646,0)\">
                                                            <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.18846,0,0,1,46.0348,0)\">
                                                            <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        </g>
                                                    </g>
                                                    <g id=\"Calque2\">
                                                        <rect height=\"0.818\" style=\"fill:white;\" width=\"0.882\" x=\"14.173\" y=\"25.594\"/>
                                                        <g transform=\"matrix(1,0,0,0.549182,0,13.2272)\">
                                                            <rect height=\"0.818\" style=\"fill:white;\" width=\"0.882\" x=\"14.173\" y=\"25.594\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,-1,0,79.6654)\">
                                                            <rect height=\"0.818\" style=\"fill:white;\" width=\"0.882\" x=\"14.173\" y=\"25.594\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,-0.549182,0,66.4381)\">
                                                            <rect height=\"0.818\" style=\"fill:white;\" width=\"0.882\" x=\"14.173\" y=\"25.594\"/>
                                                        </g>
                                                        <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        <g transform=\"matrix(1,0,0,1.24601,1.33092,8.2405)\">
                                                            <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1.24601,-1.36814,8.2405)\">
                                                            <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1,6.67043,0)\">
                                                            <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1,13.2433,0)\">
                                                            <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1,39.5358,0)\">
                                                            <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        </g>
                                                        <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        <g transform=\"matrix(1,0,0,1,1.1725,0)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,2.03271,6.80653)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,-0.0736045,6.80653)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,2.13644,9.48465)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,0.0301262,9.48465)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,15.238,-8.11855)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,13.1317,-8.11855)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,15.3418,-5.44043)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,13.2355,-5.44043)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,2.11289,12.1217)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,0.00657755,12.1217)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,8.60135,24.7379)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,6.56208,24.7379)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,8.60135,27.3214)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,6.56208,27.3214)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,8.60135,29.9343)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,6.56208,29.9343)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,15.2121,24.7379)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.328225,25.4301,37.2802)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.328225,25.4301,38.6249)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.328225,25.4301,11.2413)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.328225,25.4301,12.586)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,13.2881,24.7379)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,15.2121,27.3214)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,13.1728,27.3214)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,15.2121,29.9343)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,13.1728,29.9343)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1,2.46637,0)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1,26.116,0)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1,27.2885,0)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1,28.5823,0)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1.24601,8.00135,8.2405)\">
                                                            <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        </g>
                                                        <g transform=\"matrix(0.420318,0,0,2.41683,55.3933,-36.801)\">
                                                            <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1.24601,5.30229,8.2405)\">
                                                            <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        </g>
                                                        <g transform=\"matrix(0.5636,0,0,17.5741,6.63016,-417.173)\">
                                                            <rect height=\"0.818\" style=\"fill:white;\" width=\"0.882\" x=\"14.173\" y=\"25.594\"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span data-feather=\"layers\">ERTMS</span>

                                            </a>
                                        </li>
                                    ";
            }
            // line 311
            echo "                                    <li class=\"nav-item\">
                                        <a class=\"nav-link ";
            // line 312
            if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 312, $this->source); })()) == "baseline")) {
                echo "active ";
            }
            echo " \" href=\" ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.baseline");
            echo " \">
                                            <i class=\"fas fa-memory\"></i>
                                            <span data-feather=\"layers\">Baseline</span>

                                        </a>
                                    </li>
                                    <li class=\"nav-item\">
                                        <a class=\"nav-link ";
            // line 319
            if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 319, $this->source); })()) == "logs")) {
                echo "active ";
            }
            echo " \" href=\" ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.logs");
            echo " \">
                                            <i class=\"fas fa-file-upload\"></i>

                                            <span data-feather=\"layers\">Logs</span>

                                        </a>
                                    </li>


                                </ul>


                            </div>
                        </nav>

                        ";
        } else {
            // line 335
            echo "
                    ";
        }
        // line 337
        echo "
                    ";
        // line 338
        $this->displayBlock('body', $context, $blocks);
        // line 406
        echo "                    ";
        $this->displayBlock('javascripts', $context, $blocks);
        // line 407
        echo "                    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>
                    <script crossorigin=\"anonymous\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>
                    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js\"></script>
                    <script crossorigin=\"anonymous\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>
                    <script src=\"https://unpkg.com/axios/dist/axios.min.js\"></script>
                    <script src=\"";
        // line 412
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/runtime.js"), "html", null, true);
        echo "\"></script>
                    <script src=\"";
        // line 413
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/vendors~app.js"), "html", null, true);
        echo "\"></script>
                    <script src=\"";
        // line 414
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/app.js"), "html", null, true);
        echo "\"></script>
                </body>
            </body>
        </body>
    </html>
</body></html>
";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 6
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 12
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 338
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 339
        echo "                        <main class=\"col-12 main-home container\" role=\"main\">
                            <img alt=\"Alstom logo\" class=\"alstom-logo-home img-fluid\" src=\"build/img/logo-alstom.svg\">
                            <div class=\"d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pb-2 \" style=\"background-color:transparent\">
                                <div
                                    class=\"post-module col-md-4 col-sm-9 col-xs-9 mr-2  mb-3\">
                                    <!-- Thumbnail-->
                                    <div class=\"thumbnail\">
                                        <img src=\"/build/img/home-fleet.png\"/></div>
                                    <a
                                        href=\"";
        // line 348
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.ertms");
        echo "\">
                                        <!-- Post Content-->
                                        <div class=\"post-content\">
                                            <h1 class=\"title\">Fleet management</h1>
                                            <h2 class=\"sub_title\">Lorem ipsum</h2>
                                            <p class=\"description\">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    class=\"post-module col-md-4 col-sm-9 col-xs-9 mr-2 mb-3\">
                                    <!-- Thumbnail-->
                                    <div class=\"thumbnail\">
                                        <img src=\"/build/img/home-logs.png\"/></div>

                                    <!-- Post Content-->
                                    <a href=\"";
        // line 364
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.logs");
        echo "\">
                                        <div class=\"post-content\">
                                            <h1 class=\"title\">LOGS</h1>
                                            <h2 class=\"sub_title\">Add / Search logs
                                            </h2>
                                            <p class=\"description\">
                                                <button class=\"btn btn-warning\" type=\"button\">Add
                                                    <i class=\"fas fa-plus\"></i>
                                                </button>
                                                <button class=\"btn btn-info\" type=\"button\">Search
                                                    <i class=\"fas fa-search\"></i>
                                                </button>

                                            </p>


                                        </div>
                                    </div>
                                </a>

                                <div
                                    class=\"post-module col-md-4 col-sm-9 col-xs-9 mr-2  mb-3\">


                                    <!-- Thumbnail-->
                                    <div class=\"thumbnail\">
                                        <img src=\"/build/img/home-tools.png\"/></div>

                                    <!-- Post Content-->
                                    <div class=\"post-content\">
                                        <h1 class=\"title\">TOOLS</h1>
                                        <h2 class=\"sub_title\">Lorem ipsum</h2>
                                        <p class=\"description\">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>

                                    </div>
                                </div>

                            </div>


                        </main>
                    ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 406
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "alstom/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  702 => 406,  650 => 364,  631 => 348,  620 => 339,  610 => 338,  592 => 12,  574 => 6,  557 => 414,  553 => 413,  549 => 412,  542 => 407,  539 => 406,  537 => 338,  534 => 337,  530 => 335,  507 => 319,  493 => 312,  490 => 311,  313 => 141,  310 => 140,  307 => 139,  293 => 132,  290 => 131,  288 => 130,  273 => 122,  269 => 120,  255 => 113,  241 => 106,  238 => 105,  236 => 104,  223 => 98,  215 => 92,  213 => 91,  211 => 90,  197 => 79,  185 => 74,  172 => 68,  159 => 62,  146 => 56,  133 => 50,  124 => 43,  116 => 37,  112 => 35,  108 => 32,  104 => 30,  100 => 28,  96 => 26,  92 => 24,  88 => 22,  84 => 20,  82 => 19,  78 => 18,  75 => 17,  70 => 13,  66 => 12,  62 => 11,  56 => 7,  54 => 6,  47 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\">
        <title>Alstom
            {% block title %}{% endblock %}
        </title>
        <link crossorigin=\"anonymous\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" rel=\"stylesheet\">
        <link crossorigin=\"anonymous\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" rel=\"stylesheet\">
        <link href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css\" rel=\"stylesheet\">
        <link rel=\"icon\" type=\"image/png\" href=\"{{ asset('build/img/logo-alstom.png') }}\">l
        <link rel=\"stylesheet\" href=\"{{ asset('build/app.css') }}\"> {% block stylesheets %}{% endblock %}
        </head>
        <body>

            {#    Navbar de base en plein écran#}
            <nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow navbar-fullscreen\">
                <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"{{ path('alstom.home') }}\">
                    {% if is_granted('ROLE_ALSTOM_ADMIN') %}
                        Alstom Admin
                    {% elseif is_granted('ROLE_ALSTOM_DESIGN') %}
                        Alstom Designer
                    {% elseif is_granted('ROLE_ALSTOM_MAINTENER') %}
                        Alstom Maintener
                    {% elseif is_granted('ROLE_ALSTOM_COMMISSIONER') %}
                        Alstom Commissioner
                    {% elseif is_granted('ROLE_ALSTOM_SERVICE') %}
                        Alstom Service
                    {% else %}
                        Alstom User
                    {% endif %}

                </a>
                {# <input aria-label=\"Search\" class=\"form-control form-control-dark w-100\" placeholder=\"Search\" type=\"text\"> #}
                <ul class=\"navbar-nav px-3\">
                    <li class=\"nav-item text-nowrap\">
                        <a class=\"nav-link\" href=\"{{ path('logout') }}\">Sign out</a>
                    </li>
                </ul>
            </nav>

            {# Navbar burger en petit écran + la sidebar#}
            <div class=\"pos-f-t navbar-smallscreen\">
                <div class=\"collapse\" id=\"navbarToggleExternalContent\">
                    <div class=\"bg-dark p-4\">
                        <a class=\"navbar-brand col-sm-12 mr-0 tit\" href=\"#\">Alstom user</a>
                        <input aria-label=\"Search\" class=\"form-control form-control-dark w-100\" placeholder=\"Search\" type=\"text\">
                        <ul class=\"navbar-nav px-3\">
                            <li class=\"nav-item\">
                                <a class=\"nav-link {% if(current_menu == \" client\") %}active{% endif %}\" href=\"{{ path('alstom.client') }}\">
                                    <span data-feather=\"layers\"></span>
                                    Clients
                                </a>
                            </li>
                            <li class=\"nav-item\">
                                <a class=\"nav-link {% if(current_menu == \" engineers\") %}active{% endif %}\" href=\"{{ path('alstom.engineers') }}\">
                                    <span data-feather=\"layers\"></span>
                                    Engineers
                                </a>
                            </li>
                            <li class=\"nav-item\">
                                <a class=\"nav-link {% if(current_menu == \" projects\") %}active{% endif %}\" href=\"{{ path('alstom.projects') }}\">
                                    <span data-feather=\"layers\"></span>
                                    Projects
                                </a>
                            </li>
                            <li class=\"nav-item\">
                                <a class=\"nav-link {% if(current_menu == \" trains\") %}active{% endif %}\" href=\"{{ path('alstom.trains') }}\">
                                    <span data-feather=\"layers\"></span>
                                    Trains
                                </a>
                            </li>
                            <li class=\"nav-item\">
                                <a class=\"nav-link {% if (current_menu == \" ertms\") %}active{% endif %}\" href=\"{{ path('alstom.ertms') }}\">
                                    <span data-feather=\"layers\">ERTMS</span>
                                </a>
                            </li>
                            <li class=\"nav-item text-nowrap\">
                                <a class=\"nav-link signout-burger\" href=\"{{ path('logout') }}\">Sign out</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <nav class=\"navbar navbar-dark bg-dark\">
                    <button aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\" data-target=\"#navbarToggleExternalContent\" data-toggle=\"collapse\" type=\"button\">
                        <span class=\"navbar-toggler-icon\"></span>
                    </button>
                </nav>
            </div>
            {% if (current_menu != \"home\")  %}
                {# Sidebar en plein écran#}
                <div class=\"container-fluid\">
                    <div class=\"row\">
                        <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">
                            <div class=\"sidebar-sticky\">
                                <ul class=\"nav flex-column item-sidebar\">
                                    <li class=\"nav-item\">
                                        <a class=\"nav-link {% if (current_menu == 'home') %}active{% endif %} title-sidebar\" href=\"{{ path('alstom.home') }}\">
                                            <i class=\"fas fa-home\"></i>
                                            <span data-feather=\"home\">Home</span>

                                        </a>
                                    </li>
                                    {% if is_granted('ROLE_ALSTOM_ADMIN') %}
                                        <li class=\"nav-item\">
                                            <a class=\"nav-link {% if (current_menu == 'client' ) %}active {% endif %} \" href=\" {{ path('alstom.client') }} \">
                                                <i class=\"fas fa-user-tie\"></i>
                                                <span data-feather=\"layers\">Clients</span>

                                            </a>
                                        </li>
                                        <li class=\"nav-item\">
                                            <a class=\"nav-link {% if (current_menu == 'engineers' ) %}active {% endif %} \" href=\" {{ path('alstom.engineers') }} \">
                                                <i class=\"fas fa-user-friends\"></i>
                                                <span data-feather=\"layers\">Engineers</span>

                                            </a>
                                        </li>
                                    {% endif %}

                                    <li class=\"nav-item\">
                                        <a class=\"nav-link {% if (current_menu == 'projects' ) %}active {% endif %} \" href=\" {{ path('alstom.projects') }} \">
                                            <i class=\"fas fa-project-diagram\"></i>
                                            <span data-feather=\"layers\">Projects</span>

                                        </a>
                                    </li>


                                    {% if is_granted('ROLE_ALSTOM_COMMISSIONER') or is_granted('ROLE_ALSTOM_ADMIN')%}
                                        <li class=\"nav-item\">
                                            <a class=\"nav-link {% if (current_menu == 'trains' ) %}active {% endif %} \" href=\" {{ path('alstom.trains') }} \">
                                                <i class=\"fas fa-subway\"></i>
                                                <span data-feather=\"layers\">Trains</span>

                                            </a>
                                        </li>
                                    {% endif %}
                                    {% if is_granted('ROLE_ALSTOM_COMMISSIONER') or is_granted('ROLE_ALSTOM_MAINTENER') or is_granted('ROLE_ALSTOM_ADMIN') %}
                                        <li class=\"nav-item\">
                                            <a class=\"nav-link {% if (current_menu == 'ertms') %}active {% endif %} \" href=\" {{ path('alstom.ertms') }} \">

                                                <svg height=\"30px\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;\" viewbox=\"0 0 80 80\" width=\"20px\">
                                                    <g id=\"Calque1\">
                                                        <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        <g transform=\"matrix(2.65412,0,0,1,-19.9734,0)\">
                                                            <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        </g>
                                                        <g transform=\"matrix(2.65412,0,0,1,-13.2465,0)\">
                                                            <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        </g>
                                                        <g transform=\"matrix(2.65412,0,0,1,-6.77352,0)\">
                                                            <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        </g>
                                                        <g transform=\"matrix(2.65412,0,0,1,-0.0465809,0)\">
                                                            <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        </g>
                                                        <g transform=\"matrix(2.65412,0,0,1,6.26475,0)\">
                                                            <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        </g>
                                                        <g transform=\"matrix(2.65412,0,0,1,12.9917,0)\">
                                                            <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        </g>
                                                        <g transform=\"matrix(2.65412,0,0,1,19.4646,0)\">
                                                            <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.18846,0,0,1,46.0348,0)\">
                                                            <rect class=\"nav-link\" height=\"30.991\" width=\"2.219\" x=\"13.773\" y=\"24.283\"/>
                                                        </g>
                                                    </g>
                                                    <g id=\"Calque2\">
                                                        <rect height=\"0.818\" style=\"fill:white;\" width=\"0.882\" x=\"14.173\" y=\"25.594\"/>
                                                        <g transform=\"matrix(1,0,0,0.549182,0,13.2272)\">
                                                            <rect height=\"0.818\" style=\"fill:white;\" width=\"0.882\" x=\"14.173\" y=\"25.594\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,-1,0,79.6654)\">
                                                            <rect height=\"0.818\" style=\"fill:white;\" width=\"0.882\" x=\"14.173\" y=\"25.594\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,-0.549182,0,66.4381)\">
                                                            <rect height=\"0.818\" style=\"fill:white;\" width=\"0.882\" x=\"14.173\" y=\"25.594\"/>
                                                        </g>
                                                        <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        <g transform=\"matrix(1,0,0,1.24601,1.33092,8.2405)\">
                                                            <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1.24601,-1.36814,8.2405)\">
                                                            <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1,6.67043,0)\">
                                                            <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1,13.2433,0)\">
                                                            <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1,39.5358,0)\">
                                                            <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        </g>
                                                        <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        <g transform=\"matrix(1,0,0,1,1.1725,0)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,2.03271,6.80653)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,-0.0736045,6.80653)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,2.13644,9.48465)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,0.0301262,9.48465)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,15.238,-8.11855)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,13.1317,-8.11855)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,15.3418,-5.44043)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,13.2355,-5.44043)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,2.11289,12.1217)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.846349,0.00657755,12.1217)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,8.60135,24.7379)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,6.56208,24.7379)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,8.60135,27.3214)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,6.56208,27.3214)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,8.60135,29.9343)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,6.56208,29.9343)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,15.2121,24.7379)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.328225,25.4301,37.2802)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.328225,25.4301,38.6249)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.328225,25.4301,11.2413)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.328225,25.4301,12.586)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,13.2881,24.7379)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,15.2121,27.3214)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,13.1728,27.3214)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,15.2121,29.9343)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1.21588,0,0,0.452347,13.1728,29.9343)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1,2.46637,0)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1,26.116,0)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1,27.2885,0)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1,28.5823,0)\">
                                                            <rect height=\"1.839\" style=\"fill:white;\" width=\"0.728\" x=\"31.186\" y=\"44.504\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1.24601,8.00135,8.2405)\">
                                                            <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        </g>
                                                        <g transform=\"matrix(0.420318,0,0,2.41683,55.3933,-36.801)\">
                                                            <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        </g>
                                                        <g transform=\"matrix(1,0,0,1.24601,5.30229,8.2405)\">
                                                            <rect height=\"5.976\" style=\"fill:white;\" width=\"1.411\" x=\"18.86\" y=\"28.676\"/>
                                                        </g>
                                                        <g transform=\"matrix(0.5636,0,0,17.5741,6.63016,-417.173)\">
                                                            <rect height=\"0.818\" style=\"fill:white;\" width=\"0.882\" x=\"14.173\" y=\"25.594\"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span data-feather=\"layers\">ERTMS</span>

                                            </a>
                                        </li>
                                    {% endif %}
                                    <li class=\"nav-item\">
                                        <a class=\"nav-link {% if (current_menu == 'baseline') %}active {% endif %} \" href=\" {{ path('alstom.baseline') }} \">
                                            <i class=\"fas fa-memory\"></i>
                                            <span data-feather=\"layers\">Baseline</span>

                                        </a>
                                    </li>
                                    <li class=\"nav-item\">
                                        <a class=\"nav-link {% if (current_menu == 'logs' ) %}active {% endif %} \" href=\" {{ path('alstom.logs') }} \">
                                            <i class=\"fas fa-file-upload\"></i>

                                            <span data-feather=\"layers\">Logs</span>

                                        </a>
                                    </li>


                                </ul>


                            </div>
                        </nav>

                        {% else %}

                    {% endif %}

                    {% block body %}
                        <main class=\"col-12 main-home container\" role=\"main\">
                            <img alt=\"Alstom logo\" class=\"alstom-logo-home img-fluid\" src=\"build/img/logo-alstom.svg\">
                            <div class=\"d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pb-2 \" style=\"background-color:transparent\">
                                <div
                                    class=\"post-module col-md-4 col-sm-9 col-xs-9 mr-2  mb-3\">
                                    <!-- Thumbnail-->
                                    <div class=\"thumbnail\">
                                        <img src=\"/build/img/home-fleet.png\"/></div>
                                    <a
                                        href=\"{{path('alstom.ertms')}}\">
                                        <!-- Post Content-->
                                        <div class=\"post-content\">
                                            <h1 class=\"title\">Fleet management</h1>
                                            <h2 class=\"sub_title\">Lorem ipsum</h2>
                                            <p class=\"description\">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    class=\"post-module col-md-4 col-sm-9 col-xs-9 mr-2 mb-3\">
                                    <!-- Thumbnail-->
                                    <div class=\"thumbnail\">
                                        <img src=\"/build/img/home-logs.png\"/></div>

                                    <!-- Post Content-->
                                    <a href=\"{{path('alstom.logs')}}\">
                                        <div class=\"post-content\">
                                            <h1 class=\"title\">LOGS</h1>
                                            <h2 class=\"sub_title\">Add / Search logs
                                            </h2>
                                            <p class=\"description\">
                                                <button class=\"btn btn-warning\" type=\"button\">Add
                                                    <i class=\"fas fa-plus\"></i>
                                                </button>
                                                <button class=\"btn btn-info\" type=\"button\">Search
                                                    <i class=\"fas fa-search\"></i>
                                                </button>

                                            </p>


                                        </div>
                                    </div>
                                </a>

                                <div
                                    class=\"post-module col-md-4 col-sm-9 col-xs-9 mr-2  mb-3\">


                                    <!-- Thumbnail-->
                                    <div class=\"thumbnail\">
                                        <img src=\"/build/img/home-tools.png\"/></div>

                                    <!-- Post Content-->
                                    <div class=\"post-content\">
                                        <h1 class=\"title\">TOOLS</h1>
                                        <h2 class=\"sub_title\">Lorem ipsum</h2>
                                        <p class=\"description\">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>

                                    </div>
                                </div>

                            </div>


                        </main>
                    {% endblock %}
                    {% block javascripts %}{% endblock %}
                    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>
                    <script crossorigin=\"anonymous\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>
                    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js\"></script>
                    <script crossorigin=\"anonymous\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>
                    <script src=\"https://unpkg.com/axios/dist/axios.min.js\"></script>
                    <script src=\"{{ asset('build/runtime.js') }}\"></script>
                    <script src=\"{{ asset('build/vendors~app.js') }}\"></script>
                    <script src=\"{{ asset('build/app.js') }}\"></script>
                </body>
            </body>
        </body>
    </html>
</body></html>
", "alstom/index.html.twig", "C:\\Users\\L_200606688\\OneDrive - Alstom\\data-platform\\trb-platform\\templates\\alstom\\index.html.twig");
    }
}
