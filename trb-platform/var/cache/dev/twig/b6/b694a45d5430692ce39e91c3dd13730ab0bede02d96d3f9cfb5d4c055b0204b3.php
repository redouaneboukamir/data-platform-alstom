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

/* alstom/projects/show-project.html.twig */
class __TwigTemplate_5098821c23b95ef640050798f9b13adb59526309157b1ef968bfef59b885ae35 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "alstom/index.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/projects/show-project.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/projects/show-project.html.twig"));

        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/projects/show-project.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 5
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "
    <main class=\"col-md-12 ml-sm-auto col-lg-12 pl-5 px-4 main-show-fleet\" role=\"main\">
        <div class=\"container-header container-fluid\">
            <div class=\"row content-details-img\">
                <a class=\"btn-edit\" href=\"";
        // line 10
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-project", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 10, $this->source); })()), "id", [], "any", false, false, false, 10)]), "html", null, true);
        echo "\">
                    <i class=\"fas fa-edit\"></i>
                </a>
                <div class=\"col-md-3 img\">
                    <img id=\"img-project\" class=\"img-project img-fluid img-rounded\" src=\"";
        // line 14
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/projects/img-test.png"), "html", null, true);
        echo "\" alt=\"";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 14, $this->source); })()), "name", [], "any", false, false, false, 14), "html", null, true);
        echo "\">
                </div>
                <div class=\"col-md-9 details\">

                    <h1>";
        // line 18
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 18, $this->source); })()), "name", [], "any", false, false, false, 18)), "html", null, true);
        echo "</h1>
                    <div class=\"mt-5\">
                        <p class=\"btn-primary btn col-2\" data-target=\"#modal-form-train\" data-toggle=\"modal\">Add trains</p>
                        <p class=\"btn-success btn col-2\">Create train</p>
                    </div>

                </div>
            </div>
            <div class=\"border-separate-picture-info\"></div>
            <div class=\"row content-dashboard-table\">
                <div class=\"col-md-8 content-dasboard\">
                    <img class=\"img img-responsive img-fluid\" src=\"";
        // line 29
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/dashboard.png"), "html", null, true);
        echo "\">
                </div>
                <div class=\"col-md-3\" style=\"padding:0\">
                    <table class=\"table table-striped table-show-project table-content\">
                        <thead class=\"thead-dark\">
                            <tr>
                                <th scope=\"col\">Trains :</th>
                            </tr>
                        </thead>
                        <tbody>
                            ";
        // line 39
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 39, $this->source); })()), "trains", [], "any", false, false, false, 39));
        foreach ($context['_seq'] as $context["_key"] => $context["train"]) {
            // line 40
            echo "                                <tr class=\"col-md-12 title-table\">
                                    <td class=\"td-table\">
                                        <a href=\"";
            // line 42
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.show-train", ["id" => twig_get_attribute($this->env, $this->source, $context["train"], "id", [], "any", false, false, false, 42)]), "html", null, true);
            echo "\">
                                            ";
            // line 43
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["train"], "name", [], "any", false, false, false, 43), "html", null, true);
            echo "
                                        </a>
                                    </td>
                                </tr>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['train'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 48
        echo "                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    </main>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "alstom/projects/show-project.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  140 => 48,  129 => 43,  125 => 42,  121 => 40,  117 => 39,  104 => 29,  90 => 18,  81 => 14,  74 => 10,  68 => 6,  58 => 5,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'alstom/index.html.twig' %}


{# <h1 class=\"title_fleet_management\">{{ project.name|upper }}</h1> #}
{% block body %}

    <main class=\"col-md-12 ml-sm-auto col-lg-12 pl-5 px-4 main-show-fleet\" role=\"main\">
        <div class=\"container-header container-fluid\">
            <div class=\"row content-details-img\">
                <a class=\"btn-edit\" href=\"{{ path('alstom.edit-project',{id: project.id}) }}\">
                    <i class=\"fas fa-edit\"></i>
                </a>
                <div class=\"col-md-3 img\">
                    <img id=\"img-project\" class=\"img-project img-fluid img-rounded\" src=\"{{ asset('../build/img/projects/img-test.png') }}\" alt=\"{{ project.name }}\">
                </div>
                <div class=\"col-md-9 details\">

                    <h1>{{ project.name|upper }}</h1>
                    <div class=\"mt-5\">
                        <p class=\"btn-primary btn col-2\" data-target=\"#modal-form-train\" data-toggle=\"modal\">Add trains</p>
                        <p class=\"btn-success btn col-2\">Create train</p>
                    </div>

                </div>
            </div>
            <div class=\"border-separate-picture-info\"></div>
            <div class=\"row content-dashboard-table\">
                <div class=\"col-md-8 content-dasboard\">
                    <img class=\"img img-responsive img-fluid\" src=\"{{ asset('../build/img/dashboard.png') }}\">
                </div>
                <div class=\"col-md-3\" style=\"padding:0\">
                    <table class=\"table table-striped table-show-project table-content\">
                        <thead class=\"thead-dark\">
                            <tr>
                                <th scope=\"col\">Trains :</th>
                            </tr>
                        </thead>
                        <tbody>
                            {% for train in project.trains %}
                                <tr class=\"col-md-12 title-table\">
                                    <td class=\"td-table\">
                                        <a href=\"{{ path('alstom.show-train', {id: train.id}) }}\">
                                            {{ train.name }}
                                        </a>
                                    </td>
                                </tr>
                            {% endfor %}
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    </main>
{% endblock %}
", "alstom/projects/show-project.html.twig", "C:\\Users\\L_200606688\\OneDrive - Alstom\\data-platform-alstom\\trb-platform\\templates\\alstom\\projects\\show-project.html.twig");
    }
}
