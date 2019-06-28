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

/* alstom/evc/evc.html.twig */
class __TwigTemplate_45d48328c9222b08e7b80f090372b432e77d6fbd2813c009c6c90ce4a27b3b1c extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/evc/evc.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/evc/evc.html.twig"));

        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/evc/evc.html.twig", 1);
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
        <h2><i class=\"fa fa-angle-right\"></i> EVC</h2>
        <a href=\"";
        // line 7
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.create-evc");
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
        echo "
        <section id=\"unseen \" class=\"\">
";
        // line 21
        echo "
            <table class=\"table table-condensed table-content card-body table-full-width \">
                <thead class=\"title-table\">
                    <th class=\"\">ETCS ID</th>
                    <th scope=\"col\" class=\"th-empty\"></th>
                </thead>
                <tbody>
                ";
        // line 29
        echo "                ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["evcs"]) || array_key_exists("evcs", $context) ? $context["evcs"] : (function () { throw new RuntimeError('Variable "evcs" does not exist.', 29, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["evc"]) {
            // line 30
            echo "                    <tr class=\"td-table\">
";
            // line 32
            echo "                        <td>";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["evc"], "ETCSID", [], "any", false, false, false, 32), "html", null, true);
            echo "</td>

";
            // line 40
            echo "                        <td class=\"content-btn-edit-delete\">
";
            // line 42
            echo "                            <form method=\"post\" action=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.delete-evc", ["id" => twig_get_attribute($this->env, $this->source, $context["evc"], "id", [], "any", false, false, false, 42)]), "html", null, true);
            echo "\" onsubmit=\"return confirm('Are you sure to delete this evc?')\">
                                <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
                                <input type=\"hidden\" name=\"_token\" value=\"";
            // line 44
            echo twig_escape_filter($this->env, $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken(("delete" . twig_get_attribute($this->env, $this->source, $context["evc"], "id", [], "any", false, false, false, 44))), "html", null, true);
            echo "\">
                                <button class=\"btn btn-danger btn-delete-client\"><i class=\"fas fa-trash-alt\"></i></button>
                            </form>
                        </td>
                    </tr>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['evc'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 50
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
        return "alstom/evc/evc.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  142 => 50,  130 => 44,  124 => 42,  121 => 40,  115 => 32,  112 => 30,  107 => 29,  98 => 21,  94 => 14,  85 => 11,  82 => 10,  78 => 9,  73 => 7,  68 => 4,  58 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'alstom/index.html.twig' %}

{% block body %}
    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
    <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
        <h2><i class=\"fa fa-angle-right\"></i> EVC</h2>
        <a href=\"{{ path('alstom.create-evc') }}\"><button class=\"btn btn-primary\">New</button></a>
    </div>
        {% for message in app.flashes('success') %}
            <div class=\"alert alert-success\">
                {{ message }}
            </div>
        {% endfor %}

        <section id=\"unseen \" class=\"\">
{#            <div class=\"pull-left search\">#}
{#                {{ form_start(form) }}#}
{#                {{ form_row(form.name_client) }}#}
{#                {{ form_end(form) }}#}
{#            </div>#}

            <table class=\"table table-condensed table-content card-body table-full-width \">
                <thead class=\"title-table\">
                    <th class=\"\">ETCS ID</th>
                    <th scope=\"col\" class=\"th-empty\"></th>
                </thead>
                <tbody>
                {#                        <div class=\"noresult_found jumbotron\">{{ result_notfound }}</div>#}
                {% for evc in evcs %}
                    <tr class=\"td-table\">
{#                        <td><a href=\"{{ path('alstom.client-show', {id: client.id}) }}\">{{ client.name }}</a></td>#}
                        <td>{{ evc.ETCSID }}</td>

{#                        #}{#                                Recuperer country des clients et afficher drapeau en fonction #}
{#                        <td>#}
{#                            {% for country in client.Countries %}#}
{#                                <p class=\"flag flag-{{ country.iso|lower }}\"></p>#}
{#                            {% endfor %}#}
{#                        </td>#}
                        <td class=\"content-btn-edit-delete\">
{#                            <a href=\"{{ path('alstom.edit-evc', {id: evc.id}) }}\"><i class=\"fas fa-user-edit btn-edit\"></i> </a>#}
                            <form method=\"post\" action=\"{{ path('alstom.delete-evc' ,{id:evc.id}) }}\" onsubmit=\"return confirm('Are you sure to delete this evc?')\">
                                <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
                                <input type=\"hidden\" name=\"_token\" value=\"{{ csrf_token('delete' ~ evc.id) }}\">
                                <button class=\"btn btn-danger btn-delete-client\"><i class=\"fas fa-trash-alt\"></i></button>
                            </form>
                        </td>
                    </tr>
                {% endfor %}
                </tbody>
            </table>
        </section>


    </main>
{% endblock %}", "alstom/evc/evc.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\evc\\evc.html.twig");
    }
}
