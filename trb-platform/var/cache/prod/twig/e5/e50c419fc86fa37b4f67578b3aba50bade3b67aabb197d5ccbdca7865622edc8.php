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
class __TwigTemplate_9fa3e98a62a00ea568ed95209c57da8cb09260698e4810443b937c5faf8dbb26 extends \Twig\Template
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
    <title>";
        // line 5
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">
        <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\">
    <link rel=\"icon\" type=\"image/png\" href=\"";
        // line 8
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/img/logo-alstom.png"), "html", null, true);
        echo "\">
    <link rel=\"stylesheet\" href=\"";
        // line 9
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/css/app.css"), "html", null, true);
        echo "\">
    ";
        // line 10
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 12
        echo "</head>
<body>
    ";
        // line 15
        echo "    <nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow navbar-fullscreen\">
        <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Client user</a>
        <input class=\"form-control form-control-dark w-100\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">
            <ul class=\"navbar-nav px-3\">
                <li class=\"nav-item text-nowrap\">
                    <a class=\"nav-link\" href=\"";
        // line 20
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("logout");
        echo "\">Sign out</a>
                </li>
            </ul>
        
    </nav>

    ";
        // line 27
        echo "    <div class=\"pos-f-t navbar-smallscreen\">
        <div class=\"collapse\" id=\"navbarToggleExternalContent\">
            <div class=\"bg-dark p-4\">
                <a class=\"navbar-brand col-sm-12 mr-0 tit\" href=\"#\">Client user</a>
                <input class=\"form-control form-control-dark w-100\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">
                <ul class=\"navbar-nav px-3\">
                    <li class=\"nav-item\">
                        <a class=\"nav-link ";
        // line 34
        if ((($context["current_menu"] ?? null) == "projects")) {
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
        // line 40
        if ((($context["current_menu"] ?? null) == "trains")) {
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
        // line 46
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
        // line 60
        echo "    <div class=\"container-fluid\">
        <div class=\"row\">
            <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">
                <div class=\"sidebar-sticky sidebar-client\">
                    <ul class=\"nav flex-column item-sidebar\">
                        <li class=\"nav-item \">
                            <a class=\"nav-link ";
        // line 66
        if ((($context["current_menu"] ?? null) == "home")) {
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
        // line 73
        if ((($context["current_menu"] ?? null) == "projects")) {
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
        // line 80
        if ((($context["current_menu"] ?? null) == "trains")) {
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
        // line 87
        if ((($context["current_menu"] ?? null) == "users")) {
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
        // line 96
        if ((($context["current_menu"] ?? null) == "home")) {
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
        // line 102
        if ((($context["current_menu"] ?? null) == "create-user")) {
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
        // line 114
        $this->displayBlock('body', $context, $blocks);
        // line 129
        echo "        </div>
    </div>
    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>
    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>
    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>

    <script src=\"";
        // line 135
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/js/app.js"), "html", null, true);
        echo "\"></script>
";
        // line 136
        $this->displayBlock('javascripts', $context, $blocks);
        // line 138
        echo "</body>
</html>
";
    }

    // line 5
    public function block_title($context, array $blocks = [])
    {
        echo "Client";
    }

    // line 10
    public function block_stylesheets($context, array $blocks = [])
    {
        // line 11
        echo "    ";
    }

    // line 114
    public function block_body($context, array $blocks = [])
    {
        // line 115
        echo "                <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
                    <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
                        <h1 class=\"h2\"><i class=\"fas fa-chart-pie\"></i>Dashboard</h1>
                    </div>
                    <div class=\"content-api-logs\">
                        <div class=\"col-md-10 content-api-grafana\">

                        </div>
                        <div  class=\"col-md-2 content-btn-logs\">
                            Logs
                        </div>
                    </div>
                </main>
            ";
    }

    // line 136
    public function block_javascripts($context, array $blocks = [])
    {
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
        return array (  285 => 136,  268 => 115,  265 => 114,  261 => 11,  258 => 10,  252 => 5,  246 => 138,  244 => 136,  240 => 135,  232 => 129,  230 => 114,  211 => 102,  198 => 96,  182 => 87,  168 => 80,  154 => 73,  140 => 66,  132 => 60,  116 => 46,  103 => 40,  90 => 34,  81 => 27,  72 => 20,  65 => 15,  61 => 12,  59 => 10,  55 => 9,  51 => 8,  45 => 5,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "client/index.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\client\\index.html.twig");
    }
}
