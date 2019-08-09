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

/* alstom/engineers/show-engineer.html.twig */
class __TwigTemplate_c39cd2319465279024d2db9b65f90f67e957ee163f26c76c6c75e27569e1eda9 extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/engineers/show-engineer.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/engineers/show-engineer.html.twig"));

        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/engineers/show-engineer.html.twig", 1);
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
        echo "    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
        <section class=\"card mt-3\">
            <a class=\"btn-edit\" href=\"";
        // line 7
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-engineer", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["engineer"]) || array_key_exists("engineer", $context) ? $context["engineer"] : (function () { throw new RuntimeError('Variable "engineer" does not exist.', 7, $this->source); })()), "id", [], "any", false, false, false, 7)]), "html", null, true);
        echo "\"><button class=\"btn btn-secondary \"><i class=\"fas fa-user-edit\"></i></button></a>
            <div class=\"background-panel-engin\">

                <figure class=\"panel meta\">
                    <picture class=\"picture-client\">
                        ";
        // line 12
        if (twig_test_empty(twig_get_attribute($this->env, $this->source, (isset($context["engineer"]) || array_key_exists("engineer", $context) ? $context["engineer"] : (function () { throw new RuntimeError('Variable "engineer" does not exist.', 12, $this->source); })()), "filename", [], "any", false, false, false, 12))) {
            // line 13
            echo "                            <img class=\"avatar\" src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/engineers/avatar-engineer.svg"), "html", null, true);
            echo "\" alt=\"\">
                        ";
        } else {
            // line 15
            echo "                            <img class=\"img-fluid\" src=\"/build/img/engineers/";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["engineer"]) || array_key_exists("engineer", $context) ? $context["engineer"] : (function () { throw new RuntimeError('Variable "engineer" does not exist.', 15, $this->source); })()), "filename", [], "any", false, false, false, 15), "html", null, true);
            echo "\" alt=\"card-img-top\">
                        ";
        }
        // line 17
        echo "                    </picture>

                    <figcaption>
                        <h2 class=\"name\" style=\"font-weight: bold\">";
        // line 20
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["engineer"]) || array_key_exists("engineer", $context) ? $context["engineer"] : (function () { throw new RuntimeError('Variable "engineer" does not exist.', 20, $this->source); })()), "name", [], "any", false, false, false, 20)), "html", null, true);
        echo "</h2>
                        <h2 class=\"name\">";
        // line 21
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["engineer"]) || array_key_exists("engineer", $context) ? $context["engineer"] : (function () { throw new RuntimeError('Variable "engineer" does not exist.', 21, $this->source); })()), "surname", [], "any", false, false, false, 21)), "html", null, true);
        echo "</h2>
                    </figcaption>
                </figure>

            </div>

            <div class=\"border-separate-picture-info\"></div>
            <dv class=\"panel info\">
                <dl class=\"skillz\">
                    <dt>Numero badge   </dt>
                    <dd>";
        // line 31
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["engineer"]) || array_key_exists("engineer", $context) ? $context["engineer"] : (function () { throw new RuntimeError('Variable "engineer" does not exist.', 31, $this->source); })()), "numBadge", [], "any", false, false, false, 31), "html", null, true);
        echo "</dd>
                    <dt><i class=\"fas fa-project-diagram\"></i>

                    </dt>
                    <dd>
                        ";
        // line 36
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["engineer"]) || array_key_exists("engineer", $context) ? $context["engineer"] : (function () { throw new RuntimeError('Variable "engineer" does not exist.', 36, $this->source); })()), "projects", [], "any", false, false, false, 36));
        foreach ($context['_seq'] as $context["_key"] => $context["project"]) {
            // line 37
            echo "                            <p> ";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["project"], "name", [], "any", false, false, false, 37), "html", null, true);
            echo " </p>
                        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['project'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 39
        echo "                    </dd>

                </dl>

            </dv>

        </section>

    </main>

";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "alstom/engineers/show-engineer.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  137 => 39,  128 => 37,  124 => 36,  116 => 31,  103 => 21,  99 => 20,  94 => 17,  88 => 15,  82 => 13,  80 => 12,  72 => 7,  68 => 5,  58 => 4,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'alstom/index.html.twig' %}


{% block body %}
    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
        <section class=\"card mt-3\">
            <a class=\"btn-edit\" href=\"{{ path('alstom.edit-engineer',{id: engineer.id}) }}\"><button class=\"btn btn-secondary \"><i class=\"fas fa-user-edit\"></i></button></a>
            <div class=\"background-panel-engin\">

                <figure class=\"panel meta\">
                    <picture class=\"picture-client\">
                        {% if engineer.filename  is empty %}
                            <img class=\"avatar\" src=\"{{ asset('../build/img/engineers/avatar-engineer.svg') }}\" alt=\"\">
                        {% else %}
                            <img class=\"img-fluid\" src=\"/build/img/engineers/{{ engineer.filename }}\" alt=\"card-img-top\">
                        {% endif %}
                    </picture>

                    <figcaption>
                        <h2 class=\"name\" style=\"font-weight: bold\">{{ engineer.name|upper }}</h2>
                        <h2 class=\"name\">{{ engineer.surname |upper }}</h2>
                    </figcaption>
                </figure>

            </div>

            <div class=\"border-separate-picture-info\"></div>
            <dv class=\"panel info\">
                <dl class=\"skillz\">
                    <dt>Numero badge   </dt>
                    <dd>{{ engineer.numBadge }}</dd>
                    <dt><i class=\"fas fa-project-diagram\"></i>

                    </dt>
                    <dd>
                        {% for project in engineer.projects %}
                            <p> {{ project.name }} </p>
                        {% endfor %}
                    </dd>

                </dl>

            </dv>

        </section>

    </main>

{% endblock %}
", "alstom/engineers/show-engineer.html.twig", "C:\\Users\\L_200606688\\Documents\\Travaux-Alstom\\data-platform-alstom\\trb-platform\\templates\\alstom\\engineers\\show-engineer.html.twig");
    }
}
