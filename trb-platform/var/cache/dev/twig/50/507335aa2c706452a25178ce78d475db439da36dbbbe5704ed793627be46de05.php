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

/* client/trains/trains.html.twig */
class __TwigTemplate_12a22e2dfa93d5f0c6def93b56cff34286eab0b25bc22fd74a775b5edadf1de3 extends \Twig\Template
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
        return "client/index.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "client/trains/trains.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "client/trains/trains.html.twig"));

        $this->parent = $this->loadTemplate("client/index.html.twig", "client/trains/trains.html.twig", 1);
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
        echo "    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
            <h2><i class=\"fa fa-angle-right\"></i> Trains</h2>
            <a href=\"";
        // line 7
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("client.create-train");
        echo "\"><button class=\"btn btn-primary\">New</button></a>
        </div>
        ";
        // line 9
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 9, $this->source); })()), "flashes", [0 => "success"], "method", false, false, false, 9));
        foreach ($context['_seq'] as $context["_key"] => $context["message"]) {
            // line 10
            echo "            <div class=\"alert alert-success\">
                ";
            // line 11
            echo twig_escape_filter($this->env, $context["message"], "html", null, true);
            echo "
            </div>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['message'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 14
        echo "        <section id=\"unseen\">
";
        // line 20
        echo "            <table class=\"table table-condensed table-content\">
                <thead>
                <tr class=\"title-table\">
                    <th scope=\"col\">Name</th>
                    <th scope=\"col\">Name project</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                ";
        // line 29
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["trains"]) || array_key_exists("trains", $context) ? $context["trains"] : (function () { throw new RuntimeError('Variable "trains" does not exist.', 29, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["train"]) {
            // line 30
            echo "                    <tr class=\"td-table\">
                        <td ><a href=\"";
            // line 31
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("client.show-train", ["id" => twig_get_attribute($this->env, $this->source, $context["train"], "id", [], "any", false, false, false, 31)]), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["train"], "name", [], "any", false, false, false, 31), "html", null, true);
            echo "</td>
                        <td>";
            // line 32
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["train"], "Projects", [], "any", false, false, false, 32), "name", [], "any", false, false, false, 32), "html", null, true);
            echo "</td>


                <td class=\"content-btn-edit-delete\">
                    <a href=\"";
            // line 36
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("client.edit-train", ["id" => twig_get_attribute($this->env, $this->source, $context["train"], "id", [], "any", false, false, false, 36)]), "html", null, true);
            echo "\"><i class=\"fas fa-edit\"></i></a>
                    <form method=\"post\" action=\"";
            // line 37
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("client.delete-train", ["id" => twig_get_attribute($this->env, $this->source, $context["train"], "id", [], "any", false, false, false, 37)]), "html", null, true);
            echo "\" onsubmit=\"return confirm('Are you sure to delete this train?')\">
                        <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
                        <input type=\"hidden\" name=\"_token\" value=\"";
            // line 39
            echo twig_escape_filter($this->env, $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken(("delete" . twig_get_attribute($this->env, $this->source, $context["train"], "id", [], "any", false, false, false, 39))), "html", null, true);
            echo "\">
                        <button class=\"btn btn-danger btn-delete-client\"><i class=\"fas fa-trash-alt\"></i></button>
                    </form>
                </td>
                </tr>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['train'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 45
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
        return "client/trains/trains.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  149 => 45,  137 => 39,  132 => 37,  128 => 36,  121 => 32,  115 => 31,  112 => 30,  108 => 29,  97 => 20,  94 => 14,  85 => 11,  82 => 10,  78 => 9,  73 => 7,  68 => 4,  58 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'client/index.html.twig' %}

{% block body %}
    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
            <h2><i class=\"fa fa-angle-right\"></i> Trains</h2>
            <a href=\"{{ path('client.create-train') }}\"><button class=\"btn btn-primary\">New</button></a>
        </div>
        {% for message in app.flashes('success') %}
            <div class=\"alert alert-success\">
                {{ message }}
            </div>
        {% endfor %}
        <section id=\"unseen\">
{#            <div class=\"pull-left search\">#}
{#                {{ form_start(form) }}#}
{#                {{ form_row(form.name_train) }}#}
{#                {{ form_end(form) }}#}
{#            </div>#}
            <table class=\"table table-condensed table-content\">
                <thead>
                <tr class=\"title-table\">
                    <th scope=\"col\">Name</th>
                    <th scope=\"col\">Name project</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {% for train in trains %}
                    <tr class=\"td-table\">
                        <td ><a href=\"{{ path('client.show-train', {id: train.id}) }}\">{{  train.name }}</td>
                        <td>{{ train.Projects.name }}</td>


                <td class=\"content-btn-edit-delete\">
                    <a href=\"{{ path('client.edit-train', {id: train.id}) }}\"><i class=\"fas fa-edit\"></i></a>
                    <form method=\"post\" action=\"{{ path('client.delete-train' ,{id:train.id}) }}\" onsubmit=\"return confirm('Are you sure to delete this train?')\">
                        <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
                        <input type=\"hidden\" name=\"_token\" value=\"{{ csrf_token('delete' ~ train.id) }}\">
                        <button class=\"btn btn-danger btn-delete-client\"><i class=\"fas fa-trash-alt\"></i></button>
                    </form>
                </td>
                </tr>
                {% endfor %}
                </tbody>
            </table>
        </section>
    </main>
{% endblock %}", "client/trains/trains.html.twig", "C:\\Users\\L_200606688\\Documents\\Travaux-Alstom\\data-platform-alstom\\trb-platform\\templates\\client\\trains\\trains.html.twig");
    }
}
