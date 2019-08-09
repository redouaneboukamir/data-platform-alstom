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

/* alstom/clients/show-clients.html.twig */
class __TwigTemplate_541a5c2b7339fa2ebe124bc7a5dd994f1f6f9a0a70ba83c27d8cf0dc3a606653 extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/clients/show-clients.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/clients/show-clients.html.twig"));

        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/clients/show-clients.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 4
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 5
        echo "        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4 jumbotron\">
            <section class=\"card mt-3\">
                <a class=\"btn-edit\" href=\"";
        // line 7
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-client", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["client"]) || array_key_exists("client", $context) ? $context["client"] : (function () { throw new RuntimeError('Variable "client" does not exist.', 7, $this->source); })()), "id", [], "any", false, false, false, 7)]), "html", null, true);
        echo "\"><button class=\"btn btn-secondary \"><i class=\"fas fa-user-edit\"></i></button></a>
                <div class=\"background-panel-client\">

                    <figure class=\"panel meta\">
                        <picture class=\"picture-client\">
                            ";
        // line 12
        if (twig_test_empty(twig_get_attribute($this->env, $this->source, (isset($context["client"]) || array_key_exists("client", $context) ? $context["client"] : (function () { throw new RuntimeError('Variable "client" does not exist.', 12, $this->source); })()), "filename", [], "any", false, false, false, 12))) {
            // line 13
            echo "                                <img class=\"avatar\" src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/clients/avatar-client.svg"), "html", null, true);
            echo "\" alt=\"\">
                            ";
        } else {
            // line 15
            echo "                                <img class=\"img-fluid\" src=\"../build/img/clients/";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["client"]) || array_key_exists("client", $context) ? $context["client"] : (function () { throw new RuntimeError('Variable "client" does not exist.', 15, $this->source); })()), "filename", [], "any", false, false, false, 15), "html", null, true);
            echo "\" alt=\"card-img-top\">
                            ";
        }
        // line 17
        echo "                        </picture>
                        <figcaption>
                            <h1 class=\"name\" >";
        // line 19
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["client"]) || array_key_exists("client", $context) ? $context["client"] : (function () { throw new RuntimeError('Variable "client" does not exist.', 19, $this->source); })()), "name", [], "any", false, false, false, 19)), "html", null, true);
        echo "</h1>
                            <p class=\"item-show-client col-4 title\">";
        // line 20
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["client"]) || array_key_exists("client", $context) ? $context["client"] : (function () { throw new RuntimeError('Variable "client" does not exist.', 20, $this->source); })()), "countries", [], "any", false, false, false, 20));
        foreach ($context['_seq'] as $context["_key"] => $context["country"]) {
            // line 21
            echo "                                    <p class=\"flag flag-";
            echo twig_escape_filter($this->env, twig_lower_filter($this->env, twig_get_attribute($this->env, $this->source, $context["country"], "iso", [], "any", false, false, false, 21)), "html", null, true);
            echo " flag-country-client\"></p>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['country'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 22
        echo "</p>
                        </figcaption>
                    </figure>

                </div>

                <div class=\"border-separate-picture-info\"></div>
                <dv class=\"panel info\">
                    <dl class=\"skillz\">
                        <dt><i class=\"fas fa-at\"></i>   </dt>
                        <dd>";
        // line 32
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["client"]) || array_key_exists("client", $context) ? $context["client"] : (function () { throw new RuntimeError('Variable "client" does not exist.', 32, $this->source); })()), "email", [], "any", false, false, false, 32), "html", null, true);
        echo "</dd>
                        <dt><i class=\"fas fa-project-diagram\"></i>

                            </dt>
                        <dd>
                            ";
        // line 37
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["client"]) || array_key_exists("client", $context) ? $context["client"] : (function () { throw new RuntimeError('Variable "client" does not exist.', 37, $this->source); })()), "projects", [], "any", false, false, false, 37));
        foreach ($context['_seq'] as $context["_key"] => $context["project"]) {
            // line 38
            echo "                                <p> ";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["project"], "name", [], "any", false, false, false, 38), "html", null, true);
            echo " </p>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['project'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 40
        echo "                        </dd>
                        <dt><i class=\"fas fa-train\"></i></dt>
                        <dd>";
        // line 42
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["client"]) || array_key_exists("client", $context) ? $context["client"] : (function () { throw new RuntimeError('Variable "client" does not exist.', 42, $this->source); })()), "trains", [], "any", false, false, false, 42), "html", null, true);
        echo "</dd>

                    </dl>

                </dv>

            </section>

        </main>

";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 53
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 54
        echo "    <script>
    </script>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "alstom/clients/show-clients.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  184 => 54,  174 => 53,  153 => 42,  149 => 40,  140 => 38,  136 => 37,  128 => 32,  116 => 22,  107 => 21,  103 => 20,  99 => 19,  95 => 17,  89 => 15,  83 => 13,  81 => 12,  73 => 7,  69 => 5,  59 => 4,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'alstom/index.html.twig' %}


{% block body %}
        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4 jumbotron\">
            <section class=\"card mt-3\">
                <a class=\"btn-edit\" href=\"{{ path('alstom.edit-client',{id: client.id}) }}\"><button class=\"btn btn-secondary \"><i class=\"fas fa-user-edit\"></i></button></a>
                <div class=\"background-panel-client\">

                    <figure class=\"panel meta\">
                        <picture class=\"picture-client\">
                            {% if client.filename  is empty %}
                                <img class=\"avatar\" src=\"{{ asset('../build/img/clients/avatar-client.svg') }}\" alt=\"\">
                            {% else %}
                                <img class=\"img-fluid\" src=\"../build/img/clients/{{ client.filename }}\" alt=\"card-img-top\">
                            {% endif %}
                        </picture>
                        <figcaption>
                            <h1 class=\"name\" >{{ client.name|upper }}</h1>
                            <p class=\"item-show-client col-4 title\">{% for country in client.countries %}
                                    <p class=\"flag flag-{{ country.iso|lower }} flag-country-client\"></p>
                                {% endfor %}</p>
                        </figcaption>
                    </figure>

                </div>

                <div class=\"border-separate-picture-info\"></div>
                <dv class=\"panel info\">
                    <dl class=\"skillz\">
                        <dt><i class=\"fas fa-at\"></i>   </dt>
                        <dd>{{ client.email }}</dd>
                        <dt><i class=\"fas fa-project-diagram\"></i>

                            </dt>
                        <dd>
                            {% for project in client.projects %}
                                <p> {{ project.name }} </p>
                            {% endfor %}
                        </dd>
                        <dt><i class=\"fas fa-train\"></i></dt>
                        <dd>{{ client.trains }}</dd>

                    </dl>

                </dv>

            </section>

        </main>

{% endblock %}
{% block javascripts %}
    <script>
    </script>
{% endblock %}", "alstom/clients/show-clients.html.twig", "C:\\Users\\L_200606688\\Documents\\Travaux-Alstom\\data-platform-alstom\\trb-platform\\templates\\alstom\\clients\\show-clients.html.twig");
    }
}
