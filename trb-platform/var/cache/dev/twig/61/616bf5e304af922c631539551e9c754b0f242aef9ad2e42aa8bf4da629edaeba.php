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

/* alstom/clients/clients.html.twig */
class __TwigTemplate_f720599ae406dba0301278b655696103a4f82c245f2128611868e63e958ad0ee extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'body' => [$this, 'block_body'],
            'javascripts' => [$this, 'block_javascripts'],
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/clients/clients.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/clients/clients.html.twig"));

        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/clients/clients.html.twig", 1);
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
        echo "                <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
                    <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
                        <h2><i class=\"fa fa-angle-right\"></i> Clients</h2>
                        <a href=\"";
        // line 7
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.create-client");
        echo "\"><button class=\"btn btn-primary\">New</button></a>
                    </div>
                    ";
        // line 9
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 9, $this->source); })()), "flashes", [0 => "success"], "method", false, false, false, 9));
        foreach ($context['_seq'] as $context["_key"] => $context["message"]) {
            // line 10
            echo "                        <div class=\"alert alert-success\">
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
                        <div class=\"pull-left search\">
                            ";
        // line 17
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 17, $this->source); })()), 'form_start');
        echo "
                                ";
        // line 18
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 18, $this->source); })()), "name_client", [], "any", false, false, false, 18), 'row');
        echo "
                            ";
        // line 19
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 19, $this->source); })()), 'form_end');
        echo "
                        </div>

                        <table class=\"table table-condensed table-content card-body table-full-width \">
                            <thead class=\"title-table\">
                                    <th class=\"\">Name</th>
                                    <th scope=\"col\" class=\" numeric\">Number of trains</th>
                                    <th scope=\"col\" class=\"\">Email</th>
                                    <th scope=\"col\" class=\"\"> Countries</th>
                                    <th scope=\"col\" class=\"th-empty\"></th>
                            </thead>
                            <tbody>
                            ";
        // line 32
        echo "                            ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["clients"]) || array_key_exists("clients", $context) ? $context["clients"] : (function () { throw new RuntimeError('Variable "clients" does not exist.', 32, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["client"]) {
            // line 33
            echo "                                <tr class=\"td-table\">
                                    <td><a href=\"";
            // line 34
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.client-show", ["id" => twig_get_attribute($this->env, $this->source, $context["client"], "id", [], "any", false, false, false, 34)]), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["client"], "name", [], "any", false, false, false, 34), "html", null, true);
            echo "</a></td>
                                    <td>";
            // line 35
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["client"], "trains", [], "any", false, false, false, 35), "html", null, true);
            echo "</td>
                                    <td>";
            // line 36
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["client"], "email", [], "any", false, false, false, 36), "html", null, true);
            echo "</td>
                                    ";
            // line 38
            echo "                                    <td>
                                        ";
            // line 39
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["client"], "Countries", [], "any", false, false, false, 39));
            foreach ($context['_seq'] as $context["_key"] => $context["country"]) {
                // line 40
                echo "                                            <p class=\"flag flag-";
                echo twig_escape_filter($this->env, twig_lower_filter($this->env, twig_get_attribute($this->env, $this->source, $context["country"], "iso", [], "any", false, false, false, 40)), "html", null, true);
                echo "\"></p>
                                        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['country'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 42
            echo "                                    </td>
                                    <td class=\"content-btn-edit-delete\">
                                        <a href=\"";
            // line 44
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-client", ["id" => twig_get_attribute($this->env, $this->source, $context["client"], "id", [], "any", false, false, false, 44)]), "html", null, true);
            echo "\"><i class=\"fas fa-user-edit btn-edit\"></i> </a>
                                        <form method=\"post\" action=\"";
            // line 45
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.delete-client", ["id" => twig_get_attribute($this->env, $this->source, $context["client"], "id", [], "any", false, false, false, 45)]), "html", null, true);
            echo "\" onsubmit=\"return confirm('Are you sure to delete this client?')\">
                                            <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
                                            <input type=\"hidden\" name=\"_token\" value=\"";
            // line 47
            echo twig_escape_filter($this->env, $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken(("delete" . twig_get_attribute($this->env, $this->source, $context["client"], "id", [], "any", false, false, false, 47))), "html", null, true);
            echo "\">
                                            <button class=\"btn btn-danger btn-delete-client\"><i class=\"fas fa-trash-alt\"></i></button>
                                        </form>
                                    </td>
                                </tr>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['client'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 53
        echo "                            </tbody>
                        </table>
                    </section>
                </main>

            ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 59
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
        return "alstom/clients/clients.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  201 => 59,  186 => 53,  174 => 47,  169 => 45,  165 => 44,  161 => 42,  152 => 40,  148 => 39,  145 => 38,  141 => 36,  137 => 35,  131 => 34,  128 => 33,  123 => 32,  108 => 19,  104 => 18,  100 => 17,  95 => 14,  86 => 11,  83 => 10,  79 => 9,  74 => 7,  69 => 4,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'alstom/index.html.twig' %}

            {% block body %}
                <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
                    <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
                        <h2><i class=\"fa fa-angle-right\"></i> Clients</h2>
                        <a href=\"{{ path('alstom.create-client') }}\"><button class=\"btn btn-primary\">New</button></a>
                    </div>
                    {% for message in app.flashes('success') %}
                        <div class=\"alert alert-success\">
                            {{ message }}
                        </div>
                    {% endfor %}

                    <section id=\"unseen \" class=\"\">
                        <div class=\"pull-left search\">
                            {{ form_start(form) }}
                                {{ form_row(form.name_client) }}
                            {{ form_end(form) }}
                        </div>

                        <table class=\"table table-condensed table-content card-body table-full-width \">
                            <thead class=\"title-table\">
                                    <th class=\"\">Name</th>
                                    <th scope=\"col\" class=\" numeric\">Number of trains</th>
                                    <th scope=\"col\" class=\"\">Email</th>
                                    <th scope=\"col\" class=\"\"> Countries</th>
                                    <th scope=\"col\" class=\"th-empty\"></th>
                            </thead>
                            <tbody>
                            {#                        <div class=\"noresult_found jumbotron\">{{ result_notfound }}</div>#}
                            {% for client in clients %}
                                <tr class=\"td-table\">
                                    <td><a href=\"{{ path('alstom.client-show', {id: client.id}) }}\">{{ client.name }}</a></td>
                                    <td>{{ client.trains }}</td>
                                    <td>{{ client.email }}</td>
                                    {#                                Recuperer country des clients et afficher drapeau en fonction #}
                                    <td>
                                        {% for country in client.Countries %}
                                            <p class=\"flag flag-{{ country.iso|lower }}\"></p>
                                        {% endfor %}
                                    </td>
                                    <td class=\"content-btn-edit-delete\">
                                        <a href=\"{{ path('alstom.edit-client', {id: client.id}) }}\"><i class=\"fas fa-user-edit btn-edit\"></i> </a>
                                        <form method=\"post\" action=\"{{ path('alstom.delete-client' ,{id:client.id}) }}\" onsubmit=\"return confirm('Are you sure to delete this client?')\">
                                            <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
                                            <input type=\"hidden\" name=\"_token\" value=\"{{ csrf_token('delete' ~ client.id) }}\">
                                            <button class=\"btn btn-danger btn-delete-client\"><i class=\"fas fa-trash-alt\"></i></button>
                                        </form>
                                    </td>
                                </tr>
                            {% endfor %}
                            </tbody>
                        </table>
                    </section>
                </main>

            {% endblock %}
{% block javascripts %}
{% endblock %}
", "alstom/clients/clients.html.twig", "C:\\Users\\L_200606688\\Documents\\Travaux-Alstom\\data-platform-alstom\\trb-platform\\templates\\alstom\\clients\\clients.html.twig");
    }
}
