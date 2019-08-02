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
        echo "    <main class=\"col-md-9 ml-sm-auto col-lg-12 pl-5 px-4 main-fleet\" role=\"main\">

        <h1 class=\"title_fleet_management\">";
        // line 7
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 7, $this->source); })()), "name", [], "any", false, false, false, 7)), "html", null, true);
        echo "</h1>

        <section class=\"card mt-3 container-fluid\">
            <a class=\"btn-edit\" href=\"";
        // line 10
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-project", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 10, $this->source); })()), "id", [], "any", false, false, false, 10)]), "html", null, true);
        echo "\">
                <button class=\"btn btn-secondary \">
                    <i class=\"fas fa-edit\"></i>
                </button>
            </a>

            <div class=\"background-panel-project\">
                <figure class=\"panel meta\">
                    <div class=\"img-description-project\">
                        <img id=\"img-project\" class=\"img-project img-fluid\" src=\"";
        // line 19
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/projects/project-background.jpg"), "html", null, true);
        echo "\" alt=\"";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 19, $this->source); })()), "name", [], "any", false, false, false, 19), "html", null, true);
        echo "\">
                    </div>
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
                            <p>For color, and picturesqueness, and novelty, and outlandishness, and sustained interest and fascination, it was the most satisfying show I had ever seen, and I suppose I shall not have the privilege of looking upon its like again.</p>
                            <p>In the first place God made idiots. This was for practice. Then He made School Boards. --Pudd'nhead Wilson's New Calendar.</p>
                            <p>\"I pray please to give me some action (work) for I am very poor boy I have no one to help me even so father for it so it seemed in thy good sight, you give the Telegraph Office, and another work what is your wish I am very poor boy, this understand
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                what is your wish you my father I am your son this understand what is your wish.</p>
                        </div>

                    </div>
                    <div class=\"col-md-3\">
                        <table class=\"table table-striped table-show-project table-content\">
                            <thead class=\"thead-dark\">
                                <tr>
                                    <th scope=\"col\">Trains :</th>
                                </tr>
                            </thead>
                            <tbody>
                                ";
        // line 50
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 50, $this->source); })()), "trains", [], "any", false, false, false, 50));
        foreach ($context['_seq'] as $context["_key"] => $context["train"]) {
            // line 51
            echo "                                    <tr class=\"col-md-12 title-table\">
                                        <td class=\"td-table\">
                                            <a href=\"";
            // line 53
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.show-train", ["id" => twig_get_attribute($this->env, $this->source, $context["train"], "id", [], "any", false, false, false, 53)]), "html", null, true);
            echo "\">
                                                ";
            // line 54
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["train"], "name", [], "any", false, false, false, 54), "html", null, true);
            echo "
                                            </a>
                                        </td>
                                    </tr>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['train'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 59
        echo "                            </tbody>
                        </table>

                    </div>
                </div>
            </div>


        </section>
    </main>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 70
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 71
        echo "    <script>
        let click = false;
        \$('#img-project').click(function () {

            if (click == false) {
                \$('.img-description-project').addClass('clicked');
                click = true;
            } else {
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
        return array (  180 => 71,  170 => 70,  150 => 59,  139 => 54,  135 => 53,  131 => 51,  127 => 50,  91 => 19,  79 => 10,  73 => 7,  69 => 5,  59 => 4,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'alstom/index.html.twig' %}


{% block body %}
    <main class=\"col-md-9 ml-sm-auto col-lg-12 pl-5 px-4 main-fleet\" role=\"main\">

        <h1 class=\"title_fleet_management\">{{ project.name|upper }}</h1>

        <section class=\"card mt-3 container-fluid\">
            <a class=\"btn-edit\" href=\"{{ path('alstom.edit-project',{id: project.id}) }}\">
                <button class=\"btn btn-secondary \">
                    <i class=\"fas fa-edit\"></i>
                </button>
            </a>

            <div class=\"background-panel-project\">
                <figure class=\"panel meta\">
                    <div class=\"img-description-project\">
                        <img id=\"img-project\" class=\"img-project img-fluid\" src=\"{{ asset('../build/img/projects/project-background.jpg') }}\" alt=\"{{ project.name }}\">
                    </div>
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
                            <p>For color, and picturesqueness, and novelty, and outlandishness, and sustained interest and fascination, it was the most satisfying show I had ever seen, and I suppose I shall not have the privilege of looking upon its like again.</p>
                            <p>In the first place God made idiots. This was for practice. Then He made School Boards. --Pudd'nhead Wilson's New Calendar.</p>
                            <p>\"I pray please to give me some action (work) for I am very poor boy I have no one to help me even so father for it so it seemed in thy good sight, you give the Telegraph Office, and another work what is your wish I am very poor boy, this understand
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                what is your wish you my father I am your son this understand what is your wish.</p>
                        </div>

                    </div>
                    <div class=\"col-md-3\">
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


        </section>
    </main>
{% endblock %}
{% block javascripts %}
    <script>
        let click = false;
        \$('#img-project').click(function () {

            if (click == false) {
                \$('.img-description-project').addClass('clicked');
                click = true;
            } else {
                \$('.img-description-project').removeClass('clicked');
                click = false;
            }

        });
    </script>
{% endblock %}
", "alstom/projects/show-project.html.twig", "C:\\Users\\L_200606688\\OneDrive - Alstom\\data-platform-alstom\\trb-platform\\templates\\alstom\\projects\\show-project.html.twig");
    }
}
