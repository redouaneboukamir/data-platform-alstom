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

/* alstom/projects/projects.html.twig */
class __TwigTemplate_1663b4d07ba58d39158070354642175cbf68739a56ed55514d957cdfb9dc3ee0 extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/projects/projects.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/projects/projects.html.twig"));

        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/projects/projects.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 3
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 4
        echo "
    <main class=\"col-md-9 ml-sm-auto col-lg-10 px-3\" role=\"main\">
        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
            <h2>
                <i class=\"fa fa-angle-right\"></i>
                Fleet</h2>
            <a href=\"";
        // line 10
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.create-project");
        echo "\">
                <button class=\"btn btn-primary\">New</button>
            </a>
        </div>
        ";
        // line 14
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 14, $this->source); })()), "flashes", [0 => "success"], "method", false, false, false, 14));
        foreach ($context['_seq'] as $context["_key"] => $context["message"]) {
            // line 15
            echo "            <div class=\"alert alert-success\">
                ";
            // line 16
            echo twig_escape_filter($this->env, $context["message"], "html", null, true);
            echo "
            </div>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['message'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 19
        echo "        <section id=\"unseen\">
            <div class=\"pull-left search\">
                ";
        // line 21
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 21, $this->source); })()), 'form_start');
        echo "
                ";
        // line 22
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 22, $this->source); })()), "name_project", [], "any", false, false, false, 22), 'row');
        echo "
                ";
        // line 23
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 23, $this->source); })()), 'form_end');
        echo "
            </div>
            <table
                class=\"table table-condensed table-content\">
                ";
        // line 28
        echo "                <thead>
                    <tr class=\"title-table\">
                        <th class=\"\">Name</th>
                        <th class=\" numeric\" scope=\"col\">Number of trains</th>
                        <th class=\"th-empty\" scope=\"col\"></th>
                    </tr>
                </thead>
                <tbody>
                    ";
        // line 36
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["projects"]) || array_key_exists("projects", $context) ? $context["projects"] : (function () { throw new RuntimeError('Variable "projects" does not exist.', 36, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["project"]) {
            // line 37
            echo "                        <tr class=\"td-table\">
                            <td>
                                <a href=\"";
            // line 39
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.project-show", ["id" => twig_get_attribute($this->env, $this->source, $context["project"], "id", [], "any", false, false, false, 39)]), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["project"], "name", [], "any", false, false, false, 39), "html", null, true);
            echo "</td>
                            </td>
                            <td>
                                ";
            // line 43
            echo "                                ";
            echo twig_escape_filter($this->env, twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, $context["project"], "trains", [], "any", false, false, false, 43)), "html", null, true);
            echo "
                                ";
            // line 45
            echo "                            </td>
                            <td class=\"content-btn-edit-delete\">
                                <a href=\"";
            // line 47
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-project", ["id" => twig_get_attribute($this->env, $this->source, $context["project"], "id", [], "any", false, false, false, 47)]), "html", null, true);
            echo "\">
                                    <i class=\"fas fa-edit\"></i>
                                </a>
                                ";
            // line 57
            echo "                            </td>
                        </tr>
                    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['project'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 60
        echo "                </tbody>
            </table>
        </section>
    </main>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "alstom/projects/projects.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  167 => 60,  159 => 57,  153 => 47,  149 => 45,  144 => 43,  136 => 39,  132 => 37,  128 => 36,  118 => 28,  111 => 23,  107 => 22,  103 => 21,  99 => 19,  90 => 16,  87 => 15,  83 => 14,  76 => 10,  68 => 4,  58 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'alstom/index.html.twig' %}

{% block body %}

    <main class=\"col-md-9 ml-sm-auto col-lg-10 px-3\" role=\"main\">
        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
            <h2>
                <i class=\"fa fa-angle-right\"></i>
                Fleet</h2>
            <a href=\"{{ path('alstom.create-project') }}\">
                <button class=\"btn btn-primary\">New</button>
            </a>
        </div>
        {% for message in app.flashes('success') %}
            <div class=\"alert alert-success\">
                {{ message }}
            </div>
        {% endfor %}
        <section id=\"unseen\">
            <div class=\"pull-left search\">
                {{ form_start(form) }}
                {{ form_row(form.name_project) }}
                {{ form_end(form) }}
            </div>
            <table
                class=\"table table-condensed table-content\">
                {#                        <table class=\"table  table-striped table-condensed table-content\">#}
                <thead>
                    <tr class=\"title-table\">
                        <th class=\"\">Name</th>
                        <th class=\" numeric\" scope=\"col\">Number of trains</th>
                        <th class=\"th-empty\" scope=\"col\"></th>
                    </tr>
                </thead>
                <tbody>
                    {% for project in projects %}
                        <tr class=\"td-table\">
                            <td>
                                <a href=\"{{ path('alstom.project-show', {id: project.id}) }}\">{{  project.name }}</td>
                            </td>
                            <td>
                                {#                                       {% for train in project.trains %}#}
                                {{  project.trains|length }}
                                {#                                        {% endfor %}#}
                            </td>
                            <td class=\"content-btn-edit-delete\">
                                <a href=\"{{ path('alstom.edit-project', {id: project.id}) }}\">
                                    <i class=\"fas fa-edit\"></i>
                                </a>
                                {# <form method=\"post\" action=\"{{ path('alstom.delete-project' ,{id:project.id}) }}\" onsubmit=\"return confirm('Are you sure to delete this project?')\">
                                                                                                                                                                                                                                    <input name=\"_method\" type=\"hidden\" value=\"DELETE\">
                                                                                                                                                                                                                                    <input type=\"hidden\" name=\"_token\" value=\"{{ csrf_token('delete' ~ project.id) }}\">
                                                                                                                                                                                                                                    <button class=\"btn btn-danger btn-delete-client\">
                                                                                                                                                                                                                                        <i class=\"fas fa-trash-alt\"></i>
                                                                                                                                                                                                                                    </button>
                                                                                                                                                                                                                                </form> #}
                            </td>
                        </tr>
                    {% endfor %}
                </tbody>
            </table>
        </section>
    </main>
{% endblock %}
", "alstom/projects/projects.html.twig", "C:\\Users\\L_200606688\\OneDrive - Alstom\\data-platform-alstom\\trb-platform\\templates\\alstom\\projects\\projects.html.twig");
    }
}
