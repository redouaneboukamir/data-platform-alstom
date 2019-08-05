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
        echo "            <div class=\"pos-f-t navbar-smallscreen\">
                <div class=\"collapse\" id=\"navbarToggleExternalContent\">
                    <div class=\"bg-dark p-4\">
                        <a class=\"navbar-brand col-sm-12 mr-0 tit\" href=\"#\">Alstom user</a>
                        <input aria-label=\"Search\" class=\"form-control form-control-dark w-100\" placeholder=\"Search\" type=\"text\">
                        <ul class=\"navbar-nav px-3\">
                            <li class=\"nav-item\">
                                <a class=\"nav-link ";
        // line 24
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 24, $this->source); })()) == " client")) {
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
        // line 30
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 30, $this->source); })()) == " engineers")) {
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
        // line 36
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 36, $this->source); })()) == " projects")) {
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
        // line 42
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 42, $this->source); })()) == " trains")) {
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
        // line 48
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 48, $this->source); })()) == " ertms")) {
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
        // line 53
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
        // line 66
        if (((((((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 66, $this->source); })()) == "trains") || ((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 66, $this->source); })()) == "projects")) || ((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 66, $this->source); })()) == "logs")) || (        // line 67
(isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 67, $this->source); })()) == "baseline")) || ((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 67, $this->source); })()) == "maintenance"))) {
            // line 68
            echo "
                ";
            // line 69
            $this->loadTemplate("alstom/_sidebar.html.twig", "alstom/index.html.twig", 69)->display($context);
            // line 70
            echo "            ";
        }
        // line 71
        echo "            ";
        $this->displayBlock('body', $context, $blocks);
        // line 141
        echo "            ";
        $this->displayBlock('javascripts', $context, $blocks);
        // line 142
        echo "            <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>
            <script crossorigin=\"anonymous\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>
            <script src=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js\"></script>
            <script crossorigin=\"anonymous\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>
            <script src=\"https://unpkg.com/axios/dist/axios.min.js\"></script>
            <script src=\"";
        // line 147
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/runtime.js"), "html", null, true);
        echo "\"></script>
            <script src=\"";
        // line 148
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/vendors~app.js"), "html", null, true);
        echo "\"></script>
            <script src=\"";
        // line 149
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/app.js"), "html", null, true);
        echo "\"></script>
        </body>
    </html>
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

    // line 71
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 72
        echo "                <main class=\"main-home container-fluid\" role=\"main\">
                    <div class=\"content-logo\">
                        <img alt=\"Alstom logo\" class=\"alstom-logo-home img-fluid\" src=\"build/img/logo-alstom.svg\">
                    </div>

                    <div class=\"d-flex  flex-wrap flex-md-nowrap pb-2 content-post-module\" style=\"background-color:transparent\">
                        <div
                            class=\"post-module col-md-3 col-sm-9 col-xs-9  mb-3\">
                            <!-- Thumbnail-->
                            <div class=\"thumbnail\">
                                <img src=\"/build/img/home-fleet.png\"/></div>
                            <a
                                href=\"";
        // line 84
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.fleet_management");
        echo "\">
                                <!-- Post Content-->
                                <div class=\"post-content\">
                                    <h1 class=\"title\">Fleet management</h1>
                                    <h2 class=\"sub_title\">Lorem ipsum</h2>
                                    <p class=\"description\"></p>
                                </div>
                            </a>
                        </div>
                        <div
                            class=\"post-module col-md-3 col-sm-9 col-xs-9 mb-3\">
                            <!-- Thumbnail-->
                            <div class=\"thumbnail\">
                                <img src=\"/build/img/home-logs.png\"/></div>

                            <!-- Post Content-->
                            <a href=\"";
        // line 100
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
                            class=\"post-module col-md-3 col-sm-9 col-xs-9 mb-3\">

                            <!-- Thumbnail-->
                            <div class=\"thumbnail\">
                                <img src=\"/build/img/home-tools.png\"/></div>

                            <!-- Post Content-->
                            <div class=\"post-content\">
                                <h1 class=\"title\">TOOLS</h1>
                                <h2 class=\"sub_title\">Lorem ipsum</h2>
                                <p class=\"description\"></p>

                            </div>
                        </div>

                    </div>


                </main>
            ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 141
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
        return array (  340 => 141,  289 => 100,  270 => 84,  256 => 72,  246 => 71,  228 => 12,  210 => 6,  196 => 149,  192 => 148,  188 => 147,  181 => 142,  178 => 141,  175 => 71,  172 => 70,  170 => 69,  167 => 68,  165 => 67,  164 => 66,  148 => 53,  136 => 48,  123 => 42,  110 => 36,  97 => 30,  84 => 24,  75 => 17,  70 => 13,  66 => 12,  62 => 11,  56 => 7,  54 => 6,  47 => 1,);
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


            {% if current_menu == \"trains\"  or current_menu == \"projects\" or current_menu == \"logs\" 
or current_menu == \"baseline\"  or current_menu == \"maintenance\" %}

                {% include \"alstom/_sidebar.html.twig\" %}
            {% endif %}
            {% block body %}
                <main class=\"main-home container-fluid\" role=\"main\">
                    <div class=\"content-logo\">
                        <img alt=\"Alstom logo\" class=\"alstom-logo-home img-fluid\" src=\"build/img/logo-alstom.svg\">
                    </div>

                    <div class=\"d-flex  flex-wrap flex-md-nowrap pb-2 content-post-module\" style=\"background-color:transparent\">
                        <div
                            class=\"post-module col-md-3 col-sm-9 col-xs-9  mb-3\">
                            <!-- Thumbnail-->
                            <div class=\"thumbnail\">
                                <img src=\"/build/img/home-fleet.png\"/></div>
                            <a
                                href=\"{{path('alstom.fleet_management')}}\">
                                <!-- Post Content-->
                                <div class=\"post-content\">
                                    <h1 class=\"title\">Fleet management</h1>
                                    <h2 class=\"sub_title\">Lorem ipsum</h2>
                                    <p class=\"description\"></p>
                                </div>
                            </a>
                        </div>
                        <div
                            class=\"post-module col-md-3 col-sm-9 col-xs-9 mb-3\">
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
                            class=\"post-module col-md-3 col-sm-9 col-xs-9 mb-3\">

                            <!-- Thumbnail-->
                            <div class=\"thumbnail\">
                                <img src=\"/build/img/home-tools.png\"/></div>

                            <!-- Post Content-->
                            <div class=\"post-content\">
                                <h1 class=\"title\">TOOLS</h1>
                                <h2 class=\"sub_title\">Lorem ipsum</h2>
                                <p class=\"description\"></p>

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
    </html>
", "alstom/index.html.twig", "C:\\Users\\L_200606688\\OneDrive - Alstom\\data-platform-alstom\\trb-platform\\templates\\alstom\\index.html.twig");
    }
}
