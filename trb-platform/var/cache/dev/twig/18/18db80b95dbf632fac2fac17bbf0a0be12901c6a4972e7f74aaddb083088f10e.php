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

/* alstom/trains/trains.html.twig */
class __TwigTemplate_059b45532fffc66c2316825b94bb04a94156a047be46c3e3e4318d8c9259f357 extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/trains/trains.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/trains/trains.html.twig"));

        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/trains/trains.html.twig", 1);
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
        echo "    <main class=\"col-md-9 ml-sm-auto col-lg-10 px-4\" role=\"main\">
        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
            <h2>
                <i class=\"fa fa-angle-right\"></i>
                Trains</h2>
            <a href=\"";
        // line 9
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.create-train");
        echo "\">
                <button class=\"btn btn-primary\">New</button>
            </a>
        </div>
        ";
        // line 13
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 13, $this->source); })()), "flashes", [0 => "success"], "method", false, false, false, 13));
        foreach ($context['_seq'] as $context["_key"] => $context["message"]) {
            // line 14
            echo "            <div class=\"alert alert-success\">
                ";
            // line 15
            echo twig_escape_filter($this->env, $context["message"], "html", null, true);
            echo "
            </div>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['message'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 18
        echo "        <section id=\"unseen\">
            <div class=\"pull-left search\">
                ";
        // line 20
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 20, $this->source); })()), 'form_start');
        echo "
                ";
        // line 21
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 21, $this->source); })()), "name_train", [], "any", false, false, false, 21), 'row');
        echo "
                ";
        // line 22
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 22, $this->source); })()), 'form_end');
        echo "
            </div>
            <table
                class=\"table table-condensed table-content\">
                ";
        // line 27
        echo "                <thead>
                    <tr class=\"title-table\">
                        <th scope=\"col\">Name</th>
                        <th class=\"\" scope=\"col\">Projects</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ";
        // line 35
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["trains"]) || array_key_exists("trains", $context) ? $context["trains"] : (function () { throw new RuntimeError('Variable "trains" does not exist.', 35, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["train"]) {
            // line 36
            echo "                        <tr class=\"td-table\">
                            <td class=\"mt-4\">
                                <a href=\"";
            // line 38
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.show-train", ["id" => twig_get_attribute($this->env, $this->source, $context["train"], "id", [], "any", false, false, false, 38)]), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["train"], "name", [], "any", false, false, false, 38), "html", null, true);
            echo "</td>
                            </td>
                            <td>";
            // line 40
            echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["train"], "Projects", [], "any", false, false, false, 40), "name", [], "any", false, false, false, 40)), "html", null, true);
            echo "</td>
                            <td class=\"content-btn-edit-delete\">
                                <a href=\"";
            // line 42
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-train", ["id" => twig_get_attribute($this->env, $this->source, $context["train"], "id", [], "any", false, false, false, 42)]), "html", null, true);
            echo "\">
                                    <i class=\"fas fa-edit\"></i>
                                </a>
                                <form method=\"post\" action=\"";
            // line 45
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.delete-train", ["id" => twig_get_attribute($this->env, $this->source, $context["train"], "id", [], "any", false, false, false, 45)]), "html", null, true);
            echo "\" onsubmit=\"return confirm('Are you sure to delete this train?')\">
                                    <input name=\"_method\" type=\"hidden\" value=\"DELETE\">
                                    <input type=\"hidden\" name=\"_token\" value=\"";
            // line 47
            echo twig_escape_filter($this->env, $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken(("delete" . twig_get_attribute($this->env, $this->source, $context["train"], "id", [], "any", false, false, false, 47))), "html", null, true);
            echo "\">
                                    <button class=\"btn btn-danger btn-delete-client\">
                                        <i class=\"fas fa-trash-alt\"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['train'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 55
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
        return "alstom/trains/trains.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  172 => 55,  158 => 47,  153 => 45,  147 => 42,  142 => 40,  135 => 38,  131 => 36,  127 => 35,  117 => 27,  110 => 22,  106 => 21,  102 => 20,  98 => 18,  89 => 15,  86 => 14,  82 => 13,  75 => 9,  68 => 4,  58 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'alstom/index.html.twig' %}

{% block body %}
    <main class=\"col-md-9 ml-sm-auto col-lg-10 px-4\" role=\"main\">
        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
            <h2>
                <i class=\"fa fa-angle-right\"></i>
                Trains</h2>
            <a href=\"{{ path('alstom.create-train') }}\">
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
                {{ form_row(form.name_train) }}
                {{ form_end(form) }}
            </div>
            <table
                class=\"table table-condensed table-content\">
                {#                        <table class=\"table  table-striped table-condensed table-content\">#}
                <thead>
                    <tr class=\"title-table\">
                        <th scope=\"col\">Name</th>
                        <th class=\"\" scope=\"col\">Projects</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {% for train in trains %}
                        <tr class=\"td-table\">
                            <td class=\"mt-4\">
                                <a href=\"{{ path('alstom.show-train', {id: train.id}) }}\">{{  train.name }}</td>
                            </td>
                            <td>{{ train.Projects.name|upper }}</td>
                            <td class=\"content-btn-edit-delete\">
                                <a href=\"{{ path('alstom.edit-train', {id: train.id}) }}\">
                                    <i class=\"fas fa-edit\"></i>
                                </a>
                                <form method=\"post\" action=\"{{ path('alstom.delete-train' ,{id:train.id}) }}\" onsubmit=\"return confirm('Are you sure to delete this train?')\">
                                    <input name=\"_method\" type=\"hidden\" value=\"DELETE\">
                                    <input type=\"hidden\" name=\"_token\" value=\"{{ csrf_token('delete' ~ train.id) }}\">
                                    <button class=\"btn btn-danger btn-delete-client\">
                                        <i class=\"fas fa-trash-alt\"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                    {% endfor %}
                </tbody>
            </table>
        </section>
    </main>
{% endblock %}
", "alstom/trains/trains.html.twig", "C:\\Users\\L_200606688\\OneDrive - Alstom\\data-platform-alstom\\trb-platform\\templates\\alstom\\trains\\trains.html.twig");
    }
}
