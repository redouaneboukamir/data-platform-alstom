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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/projects/show-project.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/projects/show-project.html.twig"));

        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/projects/show-project.html.twig", 1);
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
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-project", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 7, $this->source); })()), "id", [], "any", false, false, false, 7)]), "html", null, true);
        echo "\"><button class=\"btn btn-secondary \"><i class=\"fas fa-edit\"></i></button></a>

            <div class=\"background-panel-project\">

                <figure class=\"panel meta\">
                <div class=\"img-description-project\">
                    ";
        // line 13
        if (twig_test_empty(twig_get_attribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 13, $this->source); })()), "filename", [], "any", false, false, false, 13))) {
            // line 14
            echo "                        <img id=\"img-project\" class=\"img-project img-fluid\" src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/projects/project-background.jpg"), "html", null, true);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 14, $this->source); })()), "name", [], "any", false, false, false, 14), "html", null, true);
            echo "\">
                    ";
        } else {
            // line 16
            echo "                        <img id=\"img-project\" class=\"img-project img-fluid\" src=\"../build/img/projects/";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 16, $this->source); })()), "filename", [], "any", false, false, false, 16), "html", null, true);
            echo "\">
                    ";
        }
        // line 18
        echo "                </div>
                    <figcaption>
                        <h2 class=\"name\" style=\"font-weight: bold\">";
        // line 20
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 20, $this->source); })()), "name", [], "any", false, false, false, 20)), "html", null, true);
        echo "</h2>
                    </figcaption>
                </figure>

            </div>

            <div class=\"border-separate-picture-info\"></div>
            <div class=\"panel info\">
                <div class=\"row content-panel mt mb\">
                    <div class=\"col-md-9\">
                        <div class=\"col-md-11\">
                            <h2>Dashio is a fully responsive admin dashboard template built with Bootstrap 3.1.1 Framework</h2>
                        </div>
                        <div class=\"text-descrip-project col-md-11\">
                            <p class=\"mt\">Later, when we reached the city, and glanced down the chief avenue, smouldering in its crushed-strawberry tint, those splendid effects were repeated; for every balcony, and every fanciful bird-cage of a snuggery countersunk in the house-fronts,
                                and all the long lines of roofs were crowded with people, and each crowd was an explosion of brilliant color.</p>
                            <p >For color, and picturesqueness, and novelty, and outlandishness, and sustained interest and fascination, it was the most satisfying show I had ever seen, and I suppose I shall not have the privilege of looking upon its like again.</p>
                            <p>In the first place God made idiots. This was for practice. Then He made School Boards. --Pudd'nhead Wilson's New Calendar.</p>
                            <p>\"I pray please to give me some action (work) for I am very poor boy I have no one to help me even so father for it so it seemed in thy good sight, you give the Telegraph Office, and another work what is your wish I am very poor boy, this understand
                                what is your wish you my father I am your son this understand what is your wish.</p>
                        </div>

                    </div>
                    <div class=\"col-md-3\">
                        <table class=\"table table-striped table-show-project table-content\">
                            <thead class=\"thead-dark\">
                            <tr>
                                <th scope=\"col\">Clients :</th>
                            </tr>
                            </thead>
                            <tbody>
                            ";
        // line 51
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 51, $this->source); })()), "clients", [], "any", false, false, false, 51));
        foreach ($context['_seq'] as $context["_key"] => $context["client"]) {
            // line 52
            echo "                                <tr class=\"col-md-12 title-table\">
                                    <td class=\"td-table\">
                                        <a href=\"";
            // line 54
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.client-show", ["id" => twig_get_attribute($this->env, $this->source, $context["client"], "id", [], "any", false, false, false, 54)]), "html", null, true);
            echo "\">
                                            ";
            // line 55
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["client"], "name", [], "any", false, false, false, 55), "html", null, true);
            echo "
                                        </a>
                                    </td>
                                </tr>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['client'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 60
        echo "                            </tbody>
                        </table>
                        <table class=\"table table-striped table-show-project table-content\">
                            <thead class=\"thead-dark\">
                            <tr>
                                <th scope=\"col\">Engineers :</th>
                            </tr>
                            </thead>
                            <tbody>
                            ";
        // line 69
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 69, $this->source); })()), "engineers", [], "any", false, false, false, 69));
        foreach ($context['_seq'] as $context["_key"] => $context["engineer"]) {
            // line 70
            echo "                                <tr class=\"col-md-12 title-table\">
                                    <td class=\"td-table\">
                                        <a href=\"";
            // line 72
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.engineer-show", ["id" => twig_get_attribute($this->env, $this->source, $context["engineer"], "id", [], "any", false, false, false, 72)]), "html", null, true);
            echo "\">
                                            ";
            // line 73
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["engineer"], "name", [], "any", false, false, false, 73), "html", null, true);
            echo "
                                        </a>
                                    </td>
                                </tr>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['engineer'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 78
        echo "                            </tbody>
                        </table>

                    </div>
                </div>
                </div>

            </div>

        </section>

    </main>
    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">

    </main>

";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 96
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 97
        echo "    <script>
        let click = false;
        \$('#img-project').click(function(){

            if(click == false){
                \$('.img-description-project').addClass('clicked');
                click = true;
            }else{
                \$('.img-description-project').removeClass('clicked');
                click = false;
            }

        });

    </script>
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
        return array (  229 => 97,  219 => 96,  193 => 78,  182 => 73,  178 => 72,  174 => 70,  170 => 69,  159 => 60,  148 => 55,  144 => 54,  140 => 52,  136 => 51,  102 => 20,  98 => 18,  92 => 16,  84 => 14,  82 => 13,  73 => 7,  69 => 5,  59 => 4,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'alstom/index.html.twig' %}


{% block body %}
    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
        <section class=\"card mt-3\">
            <a class=\"btn-edit\" href=\"{{ path('alstom.edit-project',{id: project.id}) }}\"><button class=\"btn btn-secondary \"><i class=\"fas fa-edit\"></i></button></a>

            <div class=\"background-panel-project\">

                <figure class=\"panel meta\">
                <div class=\"img-description-project\">
                    {% if project.filename  is empty %}
                        <img id=\"img-project\" class=\"img-project img-fluid\" src=\"{{ asset('../build/img/projects/project-background.jpg') }}\" alt=\"{{ project.name }}\">
                    {% else %}
                        <img id=\"img-project\" class=\"img-project img-fluid\" src=\"../build/img/projects/{{ project.filename }}\">
                    {% endif %}
                </div>
                    <figcaption>
                        <h2 class=\"name\" style=\"font-weight: bold\">{{ project.name|upper }}</h2>
                    </figcaption>
                </figure>

            </div>

            <div class=\"border-separate-picture-info\"></div>
            <div class=\"panel info\">
                <div class=\"row content-panel mt mb\">
                    <div class=\"col-md-9\">
                        <div class=\"col-md-11\">
                            <h2>Dashio is a fully responsive admin dashboard template built with Bootstrap 3.1.1 Framework</h2>
                        </div>
                        <div class=\"text-descrip-project col-md-11\">
                            <p class=\"mt\">Later, when we reached the city, and glanced down the chief avenue, smouldering in its crushed-strawberry tint, those splendid effects were repeated; for every balcony, and every fanciful bird-cage of a snuggery countersunk in the house-fronts,
                                and all the long lines of roofs were crowded with people, and each crowd was an explosion of brilliant color.</p>
                            <p >For color, and picturesqueness, and novelty, and outlandishness, and sustained interest and fascination, it was the most satisfying show I had ever seen, and I suppose I shall not have the privilege of looking upon its like again.</p>
                            <p>In the first place God made idiots. This was for practice. Then He made School Boards. --Pudd'nhead Wilson's New Calendar.</p>
                            <p>\"I pray please to give me some action (work) for I am very poor boy I have no one to help me even so father for it so it seemed in thy good sight, you give the Telegraph Office, and another work what is your wish I am very poor boy, this understand
                                what is your wish you my father I am your son this understand what is your wish.</p>
                        </div>

                    </div>
                    <div class=\"col-md-3\">
                        <table class=\"table table-striped table-show-project table-content\">
                            <thead class=\"thead-dark\">
                            <tr>
                                <th scope=\"col\">Clients :</th>
                            </tr>
                            </thead>
                            <tbody>
                            {% for client in project.clients %}
                                <tr class=\"col-md-12 title-table\">
                                    <td class=\"td-table\">
                                        <a href=\"{{ path('alstom.client-show', {id: client.id}) }}\">
                                            {{ client.name }}
                                        </a>
                                    </td>
                                </tr>
                            {% endfor %}
                            </tbody>
                        </table>
                        <table class=\"table table-striped table-show-project table-content\">
                            <thead class=\"thead-dark\">
                            <tr>
                                <th scope=\"col\">Engineers :</th>
                            </tr>
                            </thead>
                            <tbody>
                            {% for engineer in project.engineers %}
                                <tr class=\"col-md-12 title-table\">
                                    <td class=\"td-table\">
                                        <a href=\"{{ path('alstom.engineer-show', {id: engineer.id}) }}\">
                                            {{ engineer.name }}
                                        </a>
                                    </td>
                                </tr>
                            {% endfor %}
                            </tbody>
                        </table>

                    </div>
                </div>
                </div>

            </div>

        </section>

    </main>
    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">

    </main>

{% endblock %}

{% block javascripts %}
    <script>
        let click = false;
        \$('#img-project').click(function(){

            if(click == false){
                \$('.img-description-project').addClass('clicked');
                click = true;
            }else{
                \$('.img-description-project').removeClass('clicked');
                click = false;
            }

        });

    </script>
{% endblock %}
", "alstom/projects/show-project.html.twig", "C:\\Users\\L_200606688\\OneDrive - Alstom\\data-platform\\trb-platform\\templates\\alstom\\projects\\show-project.html.twig");
    }
}
