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

/* alstom/engineers/engineers.html.twig */
class __TwigTemplate_b8f6eb29f5aab08ed77582d46af1c8af7c6a6c1d90162c96d675a47e8dbbcee6 extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/engineers/engineers.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/engineers/engineers.html.twig"));

        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/engineers/engineers.html.twig", 1);
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
                        <h2><i class=\"fa fa-angle-right\"></i> Engineers</h2>
                        <a href=\"";
        // line 7
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.create-engineer");
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
        echo "                    <section id=\"unseen\">
                        <div class=\"pull-left search\">
                            ";
        // line 16
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 16, $this->source); })()), 'form_start');
        echo "
                            ";
        // line 17
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 17, $this->source); })()), "name_engineer", [], "any", false, false, false, 17), 'row');
        echo "
                            ";
        // line 18
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 18, $this->source); })()), 'form_end');
        echo "
                        </div>
                        <table class=\"table table-condensed table-content\">
                            ";
        // line 22
        echo "                            <thead>
                            <tr class=\"title-table\">
                                <th scope=\"col\">Name</th>
                                <th scope=\"col\" class=\"\">Surname</th>
                                <th scope=\"col\" class=\"\">Number of badge</th>
                                <th scope=\"col\" class=\"\">Projects</th>
                                <th scope=\"col\" class=\"th-empty\"></th>
                            </tr>
                            </thead>
                            <tbody>
                            ";
        // line 32
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["engineers"]) || array_key_exists("engineers", $context) ? $context["engineers"] : (function () { throw new RuntimeError('Variable "engineers" does not exist.', 32, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["engineer"]) {
            // line 33
            echo "
                                <tr class=\"td-table\">
                                    <td><a href=\"";
            // line 35
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.engineer-show", ["id" => twig_get_attribute($this->env, $this->source, $context["engineer"], "id", [], "any", false, false, false, 35)]), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["engineer"], "name", [], "any", false, false, false, 35), "html", null, true);
            echo "</a></td>
                                    <td>";
            // line 36
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["engineer"], "surname", [], "any", false, false, false, 36), "html", null, true);
            echo "</td>
                                    <td>";
            // line 37
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["engineer"], "NumBadge", [], "any", false, false, false, 37), "html", null, true);
            echo "</td>
                                    <td>
                                        ";
            // line 39
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["engineer"], "projects", [], "any", false, false, false, 39));
            foreach ($context['_seq'] as $context["_key"] => $context["project"]) {
                // line 40
                echo "                                            <a href=\"";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.project-show", ["id" => twig_get_attribute($this->env, $this->source, $context["project"], "id", [], "any", false, false, false, 40)]), "html", null, true);
                echo "\"><p>";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["project"], "name", [], "any", false, false, false, 40), "html", null, true);
                echo "</p></a>
                                        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['project'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 42
            echo "                                    </td>

                                    <td class=\"content-btn-edit-delete\">
                                        <a href=\"";
            // line 45
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-engineer", ["id" => twig_get_attribute($this->env, $this->source, $context["engineer"], "id", [], "any", false, false, false, 45)]), "html", null, true);
            echo "\"><i class=\"fas fa-user-edit\"></i> </a>
                                        <form method=\"post\" action=\"";
            // line 46
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.delete-engineer", ["id" => twig_get_attribute($this->env, $this->source, $context["engineer"], "id", [], "any", false, false, false, 46)]), "html", null, true);
            echo "\" onsubmit=\"return confirm('Are you sure to delete this engineer?')\">
                                            <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
                                            <input type=\"hidden\" name=\"_token\" value=\"";
            // line 48
            echo twig_escape_filter($this->env, $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken(("delete" . twig_get_attribute($this->env, $this->source, $context["engineer"], "id", [], "any", false, false, false, 48))), "html", null, true);
            echo "\">
                                            <button class=\"btn btn-danger btn-delete-client\"><i class=\"fas fa-trash-alt\"></i></button>
                                        </form>
                                    </td>
                                </tr>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['engineer'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 54
        echo "                            </tbody>
                        </table>
                    </section>
                </main>
            ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "alstom/engineers/engineers.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  188 => 54,  176 => 48,  171 => 46,  167 => 45,  162 => 42,  151 => 40,  147 => 39,  142 => 37,  138 => 36,  132 => 35,  128 => 33,  124 => 32,  112 => 22,  106 => 18,  102 => 17,  98 => 16,  94 => 14,  85 => 11,  82 => 10,  78 => 9,  73 => 7,  68 => 4,  58 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'alstom/index.html.twig' %}

            {% block body %}
                <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
                    <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
                        <h2><i class=\"fa fa-angle-right\"></i> Engineers</h2>
                        <a href=\"{{ path('alstom.create-engineer') }}\"><button class=\"btn btn-primary\">New</button></a>
                    </div>
                    {% for message in app.flashes('success') %}
                        <div class=\"alert alert-success\">
                            {{ message }}
                        </div>
                    {% endfor %}
                    <section id=\"unseen\">
                        <div class=\"pull-left search\">
                            {{ form_start(form) }}
                            {{ form_row(form.name_engineer) }}
                            {{ form_end(form) }}
                        </div>
                        <table class=\"table table-condensed table-content\">
                            {#                        <table class=\"table  table-striped table-condensed table-content\">#}
                            <thead>
                            <tr class=\"title-table\">
                                <th scope=\"col\">Name</th>
                                <th scope=\"col\" class=\"\">Surname</th>
                                <th scope=\"col\" class=\"\">Number of badge</th>
                                <th scope=\"col\" class=\"\">Projects</th>
                                <th scope=\"col\" class=\"th-empty\"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {% for engineer in engineers %}

                                <tr class=\"td-table\">
                                    <td><a href=\"{{ path('alstom.engineer-show', {id: engineer.id}) }}\">{{ engineer.name }}</a></td>
                                    <td>{{ engineer.surname }}</td>
                                    <td>{{ engineer.NumBadge }}</td>
                                    <td>
                                        {% for project in engineer.projects %}
                                            <a href=\"{{ path('alstom.project-show', {id: project.id}) }}\"><p>{{ project.name }}</p></a>
                                        {% endfor %}
                                    </td>

                                    <td class=\"content-btn-edit-delete\">
                                        <a href=\"{{ path('alstom.edit-engineer', {id: engineer.id}) }}\"><i class=\"fas fa-user-edit\"></i> </a>
                                        <form method=\"post\" action=\"{{ path('alstom.delete-engineer' ,{id:engineer.id}) }}\" onsubmit=\"return confirm('Are you sure to delete this engineer?')\">
                                            <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
                                            <input type=\"hidden\" name=\"_token\" value=\"{{ csrf_token('delete' ~ engineer.id) }}\">
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
", "alstom/engineers/engineers.html.twig", "C:\\Users\\jdacquin\\Documents\\Data Platform\\Webapp\\data-platform-alstom\\trb-platform\\templates\\alstom\\engineers\\engineers.html.twig");
    }
}
