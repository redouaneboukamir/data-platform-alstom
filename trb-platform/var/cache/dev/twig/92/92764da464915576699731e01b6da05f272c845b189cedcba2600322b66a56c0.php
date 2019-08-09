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

/* client/index.html.twig */
class __TwigTemplate_02ac86de2a8fe61811bd5ae335c6f0c998138decdc6c65ab8888b19c5b01ad17 extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "client/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "client/index.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\">
        <title>
            ";
        // line 6
        $this->displayBlock('title', $context, $blocks);
        // line 8
        echo "        </title>
        <link crossorigin=\"anonymous\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" rel=\"stylesheet\">
        <link crossorigin=\"anonymous\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" rel=\"stylesheet\">
        <link rel=\"icon\" type=\"image/png\" href=\"";
        // line 11
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/img/logo-alstom.png"), "html", null, true);
        echo "\">
        <link rel=\"stylesheet\" href=\"";
        // line 12
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/app.css"), "html", null, true);
        echo "\"> ";
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 13
        echo "
        </head>
        <body>
            ";
        // line 17
        echo "            <nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow navbar-fullscreen\">
                <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Client user</a>
                <input aria-label=\"Search\" class=\"form-control form-control-dark w-100\" placeholder=\"Search\" type=\"text\">
                <ul class=\"navbar-nav px-3\">
                    <li class=\"nav-item text-nowrap\">
                        <a class=\"nav-link\" href=\"";
        // line 22
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("logout");
        echo "\">Sign out</a>
                    </li>
                </ul>

            </nav>

            ";
        // line 29
        echo "            <div class=\"pos-f-t navbar-smallscreen\">
                <div class=\"collapse\" id=\"navbarToggleExternalContent\">
                    <div class=\"bg-dark p-4\">
                        <a class=\"navbar-brand col-sm-12 mr-0 tit\" href=\"#\">Client user</a>
                        <input aria-label=\"Search\" class=\"form-control form-control-dark w-100\" placeholder=\"Search\" type=\"text\">
                        <ul class=\"navbar-nav px-3\">
                            <li class=\"nav-item\">
                                <a class=\"nav-link ";
        // line 36
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 36, $this->source); })()) == " projects")) {
            echo "active";
        }
        echo "\" href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("client.projects");
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
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("client.trains");
        echo "\">
                                    <span data-feather=\"layers\"></span>
                                    Trains
                                </a>
                            </li>
                            <li class=\"nav-item text-nowrap\">
                                <a class=\"nav-link signout-burger\" href=\"";
        // line 48
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
        // line 62
        echo "            <div class=\"container-fluid\">
                <div class=\"row\">
                    <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">
                        <div class=\"sidebar-sticky sidebar-client\">
                            <ul class=\"nav flex-column item-sidebar\">
                                <li class=\"nav-item \">
                                    <a class=\"nav-link ";
        // line 68
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 68, $this->source); })()) == " home")) {
            echo "active";
        }
        echo " title-sidebar\" href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("client.home");
        echo "\">
                                        <i class=\"fas fa-home\"></i>
                                        <span data-feather=\"home\">Home</span>

                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link ";
        // line 75
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 75, $this->source); })()) == " projects")) {
            echo "active";
        }
        echo "\" href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("client.projects");
        echo "\">
                                        <i class=\"fas fa-project-diagram\"></i>
                                        <span data-feather=\"layers\">Projects</span>

                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link ";
        // line 82
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 82, $this->source); })()) == " trains")) {
            echo "active";
        }
        echo "\" href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("client.trains");
        echo "\">
                                        <i class=\"fas fa-subway\"></i>
                                        <span data-feather=\"layers\">Trains</span>

                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link ";
        // line 89
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 89, $this->source); })()) == " users")) {
            echo "active";
        }
        echo "\" href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("client.users");
        echo "\">
                                        <i class=\"fas fa-user-friends\"></i>
                                        <span data-feather=\"layers\">Users</span>

                                    </a>
                                </li>
                            </ul>
                            <ul class=\"nav flex-column item-sidebar\">
                                <li class=\"nav-item\">
                                    <a class=\"nav-link ";
        // line 98
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 98, $this->source); })()) == " home")) {
            echo "active";
        }
        echo " second-title-sidebar\" href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("client.home");
        echo "\">
                                        <i class=\"fas fa-cog\"></i>
                                        <span data-feather=\"home\">Settings</span>
                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link ";
        // line 104
        if (((isset($context["current_menu"]) || array_key_exists("current_menu", $context) ? $context["current_menu"] : (function () { throw new RuntimeError('Variable "current_menu" does not exist.', 104, $this->source); })()) == " create-user")) {
            echo "active";
        }
        echo "\" href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("client.create-user");
        echo "\">
                                        <i class=\"fas fa-user-plus\"></i>
                                        <span data-feather=\"layers\">Create user</span>

                                    </a>
                                </li>

                            </ul>

                        </div>
                    </nav>

                    ";
        // line 116
        $this->displayBlock('body', $context, $blocks);
        // line 130
        echo "                </div>
            </div>
            <script crossorigin=\"anonymous\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"></script>
            <script crossorigin=\"anonymous\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>
            <script crossorigin=\"anonymous\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>
            <script src=\"";
        // line 135
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/runtime.js"), "html", null, true);
        echo "\"></script>
            <script src=\"";
        // line 136
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/app.js"), "html", null, true);
        echo "\"></script>

            ";
        // line 138
        $this->displayBlock('javascripts', $context, $blocks);
        // line 139
        echo "        </body>
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

        echo "Client
            ";
        
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

    // line 116
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 117
        echo "                        <main class=\"col-md-9 ml-sm-auto col-lg-10 px-4\" role=\"main\">
                            <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
                                <h1 class=\"h2\">
                                    <i class=\"fas fa-chart-pie\"></i>Dashboard</h1>
                            </div>
                            <div class=\"content-api-logs\">
                                <div class=\"col-md-10 content-api-grafana\"></div>
                                <div class=\"col-md-2 content-btn-logs\">
                                    Logs
                                </div>
                            </div>
                        </main>
                    ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 138
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
        return "client/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  341 => 138,  319 => 117,  309 => 116,  291 => 12,  271 => 6,  259 => 139,  257 => 138,  252 => 136,  248 => 135,  241 => 130,  239 => 116,  220 => 104,  207 => 98,  191 => 89,  177 => 82,  163 => 75,  149 => 68,  141 => 62,  125 => 48,  112 => 42,  99 => 36,  90 => 29,  81 => 22,  74 => 17,  69 => 13,  65 => 12,  61 => 11,  56 => 8,  54 => 6,  47 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\">
        <title>
            {% block title %}Client
            {% endblock %}
        </title>
        <link crossorigin=\"anonymous\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" rel=\"stylesheet\">
        <link crossorigin=\"anonymous\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" rel=\"stylesheet\">
        <link rel=\"icon\" type=\"image/png\" href=\"{{ asset('build/img/logo-alstom.png') }}\">
        <link rel=\"stylesheet\" href=\"{{ asset('build/app.css') }}\"> {% block stylesheets %}{% endblock %}

        </head>
        <body>
            {#    Navbar de base en plein écran#}
            <nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow navbar-fullscreen\">
                <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Client user</a>
                <input aria-label=\"Search\" class=\"form-control form-control-dark w-100\" placeholder=\"Search\" type=\"text\">
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
                        <a class=\"navbar-brand col-sm-12 mr-0 tit\" href=\"#\">Client user</a>
                        <input aria-label=\"Search\" class=\"form-control form-control-dark w-100\" placeholder=\"Search\" type=\"text\">
                        <ul class=\"navbar-nav px-3\">
                            <li class=\"nav-item\">
                                <a class=\"nav-link {% if(current_menu == \" projects\") %}active{% endif %}\" href=\"{{ path('client.projects') }}\">
                                    <span data-feather=\"layers\"></span>
                                    Projects
                                </a>
                            </li>
                            <li class=\"nav-item\">
                                <a class=\"nav-link {% if(current_menu == \" trains\") %}active{% endif %}\" href=\"{{ path('client.trains') }}\">
                                    <span data-feather=\"layers\"></span>
                                    Trains
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

            {# Sidebar en plein écran#}
            <div class=\"container-fluid\">
                <div class=\"row\">
                    <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">
                        <div class=\"sidebar-sticky sidebar-client\">
                            <ul class=\"nav flex-column item-sidebar\">
                                <li class=\"nav-item \">
                                    <a class=\"nav-link {% if(current_menu == \" home\") %}active{% endif %} title-sidebar\" href=\"{{ path('client.home') }}\">
                                        <i class=\"fas fa-home\"></i>
                                        <span data-feather=\"home\">Home</span>

                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link {% if(current_menu == \" projects\") %}active{% endif %}\" href=\"{{ path('client.projects') }}\">
                                        <i class=\"fas fa-project-diagram\"></i>
                                        <span data-feather=\"layers\">Projects</span>

                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link {% if(current_menu == \" trains\") %}active{% endif %}\" href=\"{{ path('client.trains') }}\">
                                        <i class=\"fas fa-subway\"></i>
                                        <span data-feather=\"layers\">Trains</span>

                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link {% if(current_menu == \" users\") %}active{% endif %}\" href=\"{{ path('client.users') }}\">
                                        <i class=\"fas fa-user-friends\"></i>
                                        <span data-feather=\"layers\">Users</span>

                                    </a>
                                </li>
                            </ul>
                            <ul class=\"nav flex-column item-sidebar\">
                                <li class=\"nav-item\">
                                    <a class=\"nav-link {% if(current_menu == \" home\") %}active{% endif %} second-title-sidebar\" href=\"{{ path('client.home') }}\">
                                        <i class=\"fas fa-cog\"></i>
                                        <span data-feather=\"home\">Settings</span>
                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link {% if(current_menu == \" create-user\") %}active{% endif %}\" href=\"{{ path('client.create-user') }}\">
                                        <i class=\"fas fa-user-plus\"></i>
                                        <span data-feather=\"layers\">Create user</span>

                                    </a>
                                </li>

                            </ul>

                        </div>
                    </nav>

                    {% block body %}
                        <main class=\"col-md-9 ml-sm-auto col-lg-10 px-4\" role=\"main\">
                            <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
                                <h1 class=\"h2\">
                                    <i class=\"fas fa-chart-pie\"></i>Dashboard</h1>
                            </div>
                            <div class=\"content-api-logs\">
                                <div class=\"col-md-10 content-api-grafana\"></div>
                                <div class=\"col-md-2 content-btn-logs\">
                                    Logs
                                </div>
                            </div>
                        </main>
                    {% endblock %}
                </div>
            </div>
            <script crossorigin=\"anonymous\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"></script>
            <script crossorigin=\"anonymous\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>
            <script crossorigin=\"anonymous\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>
            <script src=\"{{ asset('build/runtime.js') }}\"></script>
            <script src=\"{{ asset('build/app.js') }}\"></script>

            {% block javascripts %}{% endblock %}
        </body>
    </html>
", "client/index.html.twig", "C:\\Users\\L_200606688\\Documents\\Travaux-Alstom\\data-platform-alstom\\trb-platform\\templates\\client\\index.html.twig");
    }
}
