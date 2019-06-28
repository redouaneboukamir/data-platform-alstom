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
class __TwigTemplate_d549fedca6eec01f0f0155828eea5495020575cc742a627e6a09b831599465d6 extends \Twig\Template
{
    private $source;

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
        // line 1
        echo "<!DOCTYPE html>
<html>
<head>
    <meta charset=\"UTF-8\">
    <title>Alstom";
        // line 5
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">
        <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\">
        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css\">
        <link rel=\"icon\" type=\"image/png\" href=\"";
        // line 9
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/img/logo-alstom.png"), "html", null, true);
        echo "\">l
        <link rel=\"stylesheet\" href=\"";
        // line 10
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/app.css"), "html", null, true);
        echo "\">
    ";
        // line 11
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 12
        echo "</head>
<body>

";
        // line 16
        echo "    <nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow navbar-fullscreen\">
        <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"";
        // line 17
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.home");
        echo "\">
            ";
        // line 18
        if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_ADMIN")) {
            // line 19
            echo "                Alstom Admin
            ";
        } elseif ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_DESIGN")) {
            // line 21
            echo "                Alstom Designer
            ";
        } elseif ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_MAINTENER")) {
            // line 23
            echo "                Alstom Maintener
            ";
        } elseif ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_COMMISSIONER")) {
            // line 25
            echo "                Alstom Commissioner
            ";
        } elseif ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_SERVICE")) {
            // line 27
            echo "                Alstom Service
            ";
        } else {
            // line 29
            echo "                Alstom User
            ";
        }
        // line 31
        echo "
        </a>
        <input class=\"form-control form-control-dark w-100\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">
        <ul class=\"navbar-nav px-3\">
            <li class=\"nav-item text-nowrap\">
                <a class=\"nav-link\" href=\"";
        // line 36
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("logout");
        echo "\">Sign out</a>
            </li>
        </ul>
    </nav>

";
        // line 42
        echo "    <div class=\"pos-f-t navbar-smallscreen\">
        <div class=\"collapse\" id=\"navbarToggleExternalContent\">
            <div class=\"bg-dark p-4\">
                <a class=\"navbar-brand col-sm-12 mr-0 tit\" href=\"#\">Alstom user</a>
                <input class=\"form-control form-control-dark w-100\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">
                <ul class=\"navbar-nav px-3\">
                    <li class=\"nav-item\">
                        <a class=\"nav-link ";
        // line 49
        if ((($context["current_menu"] ?? null) == "client")) {
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
        // line 55
        if ((($context["current_menu"] ?? null) == "engineers")) {
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
        // line 61
        if ((($context["current_menu"] ?? null) == "projects")) {
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
        // line 67
        if ((($context["current_menu"] ?? null) == "trains")) {
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
        // line 73
        if ((($context["current_menu"] ?? null) == "EVC")) {
            echo "active";
        }
        echo "\" href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.evc");
        echo "\">
                            <span data-feather=\"layers\">EVC</span>

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
            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\" aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
                <span class=\"navbar-toggler-icon\"></span>
            </button>
        </nav>
    </div>

";
        // line 92
        echo "    <div class=\"container-fluid\">
        <div class=\"row\">
            <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">
                <div class=\"sidebar-sticky\">
                    <ul class=\"nav flex-column item-sidebar\">
                        <li class=\"nav-item\">
                            <a class=\"nav-link ";
        // line 98
        if ((($context["current_menu"] ?? null) == "home")) {
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
            echo "                            <li class=\"nav-item\">
                                <a class=\"nav-link ";
            // line 106
            if ((($context["current_menu"] ?? null) == "client")) {
                echo "active";
            }
            echo "\" href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.client");
            echo "\">
                                    <i class=\"fas fa-user-tie\"></i>
                                    <span data-feather=\"layers\">Clients</span>

                                </a>
                            </li>
                            <li class=\"nav-item\">
                                <a class=\"nav-link ";
            // line 113
            if ((($context["current_menu"] ?? null) == "engineers")) {
                echo "active";
            }
            echo "\" href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.engineers");
            echo "\">
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
        if ((($context["current_menu"] ?? null) == "projects")) {
            echo "active";
        }
        echo "\" href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.projects");
        echo "\">
                                <i class=\"fas fa-project-diagram\"></i>
                                <span data-feather=\"layers\">Projects</span>

                            </a>
                        </li>
                        ";
        // line 128
        if (($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_COMMISSIONER") || $this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_ADMIN"))) {
            // line 129
            echo "                        <li class=\"nav-item\">
                            <a class=\"nav-link ";
            // line 130
            if ((($context["current_menu"] ?? null) == "trains")) {
                echo "active";
            }
            echo "\" href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.trains");
            echo "\">
                                <i class=\"fas fa-subway\"></i>
                                <span data-feather=\"layers\">Trains</span>

                            </a>
                        </li>
                        ";
        }
        // line 137
        echo "                        ";
        if ((($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_COMMISSIONER") || $this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_MAINTENER")) || $this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_ADMIN"))) {
            // line 138
            echo "                        <li class=\"nav-item\">
                            <a class=\"nav-link ";
            // line 139
            if ((($context["current_menu"] ?? null) == "EVC")) {
                echo "active";
            }
            echo "\" href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.evc");
            echo "\">
                                <svg width=\"20px\" height=\"30px\" viewBox=\"0 0 80 80\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;\">
                                    <g id=\"Calque1\">
                                        <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                        <g transform=\"matrix(2.65412,0,0,1,-19.9734,0)\">
                                            <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                        </g>
                                        <g transform=\"matrix(2.65412,0,0,1,-13.2465,0)\">
                                            <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                        </g>
                                        <g transform=\"matrix(2.65412,0,0,1,-6.77352,0)\">
                                            <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                        </g>
                                        <g transform=\"matrix(2.65412,0,0,1,-0.0465809,0)\">
                                            <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                        </g>
                                        <g transform=\"matrix(2.65412,0,0,1,6.26475,0)\">
                                            <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                        </g>
                                        <g transform=\"matrix(2.65412,0,0,1,12.9917,0)\">
                                            <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                        </g>
                                        <g transform=\"matrix(2.65412,0,0,1,19.4646,0)\">
                                            <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                        </g>
                                        <g transform=\"matrix(1.18846,0,0,1,46.0348,0)\">
                                            <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                        </g>
                                    </g>
                                    <g id=\"Calque2\">
                                        <rect x=\"14.173\" y=\"25.594\" width=\"0.882\" height=\"0.818\" style=\"fill:white;\"/>
                                        <g transform=\"matrix(1,0,0,0.549182,0,13.2272)\">
                                            <rect x=\"14.173\" y=\"25.594\" width=\"0.882\" height=\"0.818\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1,0,0,-1,0,79.6654)\">
                                            <rect x=\"14.173\" y=\"25.594\" width=\"0.882\" height=\"0.818\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1,0,0,-0.549182,0,66.4381)\">
                                            <rect x=\"14.173\" y=\"25.594\" width=\"0.882\" height=\"0.818\" style=\"fill:white;\"/>
                                        </g>
                                        <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                        <g transform=\"matrix(1,0,0,1.24601,1.33092,8.2405)\">
                                            <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1,0,0,1.24601,-1.36814,8.2405)\">
                                            <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1,0,0,1,6.67043,0)\">
                                            <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1,0,0,1,13.2433,0)\">
                                            <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1,0,0,1,39.5358,0)\">
                                            <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                        </g>
                                        <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        <g transform=\"matrix(1,0,0,1,1.1725,0)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.846349,2.03271,6.80653)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.846349,-0.0736045,6.80653)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.846349,2.13644,9.48465)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.846349,0.0301262,9.48465)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.846349,15.238,-8.11855)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.846349,13.1317,-8.11855)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.846349,15.3418,-5.44043)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.846349,13.2355,-5.44043)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.846349,2.11289,12.1217)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.846349,0.00657755,12.1217)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.452347,8.60135,24.7379)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.452347,6.56208,24.7379)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.452347,8.60135,27.3214)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.452347,6.56208,27.3214)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.452347,8.60135,29.9343)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.452347,6.56208,29.9343)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.452347,15.2121,24.7379)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.328225,25.4301,37.2802)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.328225,25.4301,38.6249)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.328225,25.4301,11.2413)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.328225,25.4301,12.586)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.452347,13.2881,24.7379)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.452347,15.2121,27.3214)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.452347,13.1728,27.3214)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.452347,15.2121,29.9343)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1.21588,0,0,0.452347,13.1728,29.9343)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1,0,0,1,2.46637,0)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1,0,0,1,26.116,0)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1,0,0,1,27.2885,0)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1,0,0,1,28.5823,0)\">
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1,0,0,1.24601,8.00135,8.2405)\">
                                            <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(0.420318,0,0,2.41683,55.3933,-36.801)\">
                                            <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(1,0,0,1.24601,5.30229,8.2405)\">
                                            <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                        </g>
                                        <g transform=\"matrix(0.5636,0,0,17.5741,6.63016,-417.173)\">
                                            <rect x=\"14.173\" y=\"25.594\" width=\"0.882\" height=\"0.818\" style=\"fill:white;\"/>
                                        </g>
                                    </g>
</svg>
                                <span data-feather=\"layers\">EVC</span>

                            </a>
                        </li>
                        ";
        }
        // line 308
        echo "                        ";
        if (($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_DESIGN") || $this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_ADMIN"))) {
            // line 309
            echo "                            <li class=\"nav-item\">
                                <a class=\"nav-link ";
            // line 310
            if ((($context["current_menu"] ?? null) == "baseline")) {
                echo "active";
            }
            echo "\" href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.baseline");
            echo "\">
                                    <svg width=\"20px\" height=\"30px\" viewBox=\"0 0 80 80\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;\">
                                        <g id=\"Calque1\">
                                            <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                            <g transform=\"matrix(2.65412,0,0,1,-19.9734,0)\">
                                                <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                            </g>
                                            <g transform=\"matrix(2.65412,0,0,1,-13.2465,0)\">
                                                <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                            </g>
                                            <g transform=\"matrix(2.65412,0,0,1,-6.77352,0)\">
                                                <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                            </g>
                                            <g transform=\"matrix(2.65412,0,0,1,-0.0465809,0)\">
                                                <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                            </g>
                                            <g transform=\"matrix(2.65412,0,0,1,6.26475,0)\">
                                                <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                            </g>
                                            <g transform=\"matrix(2.65412,0,0,1,12.9917,0)\">
                                                <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                            </g>
                                            <g transform=\"matrix(2.65412,0,0,1,19.4646,0)\">
                                                <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                            </g>
                                            <g transform=\"matrix(1.18846,0,0,1,46.0348,0)\">
                                                <rect x=\"13.773\" y=\"24.283\" width=\"2.219\" height=\"30.991\" class=\"nav-link\"/>
                                            </g>
                                        </g>
                                        <g id=\"Calque2\">
                                            <rect x=\"14.173\" y=\"25.594\" width=\"0.882\" height=\"0.818\" style=\"fill:white;\"/>
                                            <g transform=\"matrix(1,0,0,0.549182,0,13.2272)\">
                                                <rect x=\"14.173\" y=\"25.594\" width=\"0.882\" height=\"0.818\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1,0,0,-1,0,79.6654)\">
                                                <rect x=\"14.173\" y=\"25.594\" width=\"0.882\" height=\"0.818\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1,0,0,-0.549182,0,66.4381)\">
                                                <rect x=\"14.173\" y=\"25.594\" width=\"0.882\" height=\"0.818\" style=\"fill:white;\"/>
                                            </g>
                                            <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                            <g transform=\"matrix(1,0,0,1.24601,1.33092,8.2405)\">
                                                <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1,0,0,1.24601,-1.36814,8.2405)\">
                                                <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1,0,0,1,6.67043,0)\">
                                                <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1,0,0,1,13.2433,0)\">
                                                <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1,0,0,1,39.5358,0)\">
                                                <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                            </g>
                                            <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            <g transform=\"matrix(1,0,0,1,1.1725,0)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.846349,2.03271,6.80653)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.846349,-0.0736045,6.80653)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.846349,2.13644,9.48465)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.846349,0.0301262,9.48465)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.846349,15.238,-8.11855)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.846349,13.1317,-8.11855)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.846349,15.3418,-5.44043)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.846349,13.2355,-5.44043)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.846349,2.11289,12.1217)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.846349,0.00657755,12.1217)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.452347,8.60135,24.7379)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.452347,6.56208,24.7379)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.452347,8.60135,27.3214)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.452347,6.56208,27.3214)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.452347,8.60135,29.9343)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.452347,6.56208,29.9343)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.452347,15.2121,24.7379)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.328225,25.4301,37.2802)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.328225,25.4301,38.6249)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.328225,25.4301,11.2413)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.328225,25.4301,12.586)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.452347,13.2881,24.7379)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.452347,15.2121,27.3214)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.452347,13.1728,27.3214)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.452347,15.2121,29.9343)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1.21588,0,0,0.452347,13.1728,29.9343)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1,0,0,1,2.46637,0)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1,0,0,1,26.116,0)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1,0,0,1,27.2885,0)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1,0,0,1,28.5823,0)\">
                                                <rect x=\"31.186\" y=\"44.504\" width=\"0.728\" height=\"1.839\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1,0,0,1.24601,8.00135,8.2405)\">
                                                <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(0.420318,0,0,2.41683,55.3933,-36.801)\">
                                                <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(1,0,0,1.24601,5.30229,8.2405)\">
                                                <rect x=\"18.86\" y=\"28.676\" width=\"1.411\" height=\"5.976\" style=\"fill:white;\"/>
                                            </g>
                                            <g transform=\"matrix(0.5636,0,0,17.5741,6.63016,-417.173)\">
                                                <rect x=\"14.173\" y=\"25.594\" width=\"0.882\" height=\"0.818\" style=\"fill:white;\"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <span data-feather=\"layers\">Baseline</span>

                                </a>
                            </li>
                        ";
        }
        // line 479
        echo "                        ";
        if (($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_COMMISSIONER") || $this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_ADMIN"))) {
            // line 480
            echo "                            <li class=\"nav-item\">
                                <a class=\"nav-link ";
            // line 481
            if ((($context["current_menu"] ?? null) == "association")) {
                echo "active";
            }
            echo "\" href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.association");
            echo "\">
                                    <i class=\"fas fa-layer-group\"></i>
                                    <span data-feather=\"layers\">Association</span>
                                </a>
                            </li>
                        ";
        }
        // line 487
        echo "

                    </ul>
                    <ul class=\"nav flex-column item-sidebar\">
                        <li class=\"nav-item\">
                            <a class=\"nav-link ";
        // line 492
        if ((($context["current_menu"] ?? null) == "home")) {
            echo "active";
        }
        echo " second-title-sidebar\" href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.home");
        echo "\">
                                <i class=\"fas fa-cog\"></i>
                                <span data-feather=\"home\">Settings</span>
                            </a>
                        </li>
                        ";
        // line 497
        if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ALSTOM_ADMIN")) {
            // line 498
            echo "                            <li class=\"nav-item\">
                                <a class=\"nav-link ";
            // line 499
            if ((($context["current_menu"] ?? null) == "create-user")) {
                echo "active";
            }
            echo "\" href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.create-user");
            echo "\">
                                    <i class=\"fas fa-user-plus\"></i>
                                    <span data-feather=\"layers\">Create user</span>
                                </a>
                            </li>
                        ";
        }
        // line 505
        echo "
                    </ul>


                </div>
            </nav>

            ";
        // line 512
        $this->displayBlock('body', $context, $blocks);
        // line 530
        echo "        </div>
    </div>
    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>
    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>
    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>
    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js\"></script>
    <script>
        // \$('select').select2();
    </script>
    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>
    <script src=\"";
        // line 540
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/js/app.js"), "html", null, true);
        echo "\"></script>

";
        // line 542
        $this->displayBlock('javascripts', $context, $blocks);
        // line 545
        echo "</body>
</html>
";
    }

    // line 5
    public function block_title($context, array $blocks = [])
    {
    }

    // line 11
    public function block_stylesheets($context, array $blocks = [])
    {
    }

    // line 512
    public function block_body($context, array $blocks = [])
    {
        // line 513
        echo "                <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
                    <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
                        <h1 class=\"h2\"><i class=\"fas fa-chart-pie\"></i> Dashboard</h1>
                    </div>
                    <div class=\"content-api-logs row\">
                        <div class=\"col-md-10 content-api-grafana\">

                        </div>
                        <div  class=\"col-md-2 content-btn-logs\">
                            <a href=\"\">
                                <button class=\"btn-add-logs\">
                                    <p><i class=\"fas fa-plus\"> </i> Add Logs</p>
                                </button></a>
                        </div>
                    </div>
                </main>
            ";
    }

    // line 542
    public function block_javascripts($context, array $blocks = [])
    {
        // line 543
        echo "
";
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
        return array (  786 => 543,  783 => 542,  763 => 513,  760 => 512,  755 => 11,  750 => 5,  744 => 545,  742 => 542,  737 => 540,  725 => 530,  723 => 512,  714 => 505,  701 => 499,  698 => 498,  696 => 497,  684 => 492,  677 => 487,  664 => 481,  661 => 480,  658 => 479,  482 => 310,  479 => 309,  476 => 308,  300 => 139,  297 => 138,  294 => 137,  280 => 130,  277 => 129,  275 => 128,  262 => 122,  258 => 120,  244 => 113,  230 => 106,  227 => 105,  225 => 104,  212 => 98,  204 => 92,  189 => 79,  176 => 73,  163 => 67,  150 => 61,  137 => 55,  124 => 49,  115 => 42,  107 => 36,  100 => 31,  96 => 29,  92 => 27,  88 => 25,  84 => 23,  80 => 21,  76 => 19,  74 => 18,  70 => 17,  67 => 16,  62 => 12,  60 => 11,  56 => 10,  52 => 9,  45 => 5,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "alstom/index.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\index.html.twig");
    }
}
