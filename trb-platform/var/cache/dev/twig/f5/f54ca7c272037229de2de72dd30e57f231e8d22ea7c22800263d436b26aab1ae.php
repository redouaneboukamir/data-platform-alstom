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

/* alstom/trains/show-train.html.twig */
class __TwigTemplate_a5790e20fab79ad4c3a3e86eddaa051c54ecb1a24dc6a90d59ac92682256cc8d extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/trains/show-train.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/trains/show-train.html.twig"));

        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/trains/show-train.html.twig", 1);
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
        echo "
    <main class=\"col-md-9 ml-sm-auto col-lg-12 pl-5 px-3 main-fleet\" role=\"main\">


        <h1 class=\"title_fleet_management\">";
        // line 9
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 9, $this->source); })()), "name", [], "any", false, false, false, 9)), "html", null, true);
        echo "</h1>

        <div class=\"card content-train\">
            <a class=\"btn-edit\" href=\"";
        // line 12
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-train", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 12, $this->source); })()), "id", [], "any", false, false, false, 12)]), "html", null, true);
        echo "\">
                <button class=\"btn btn-secondary \">
                    <i class=\"fas fa-edit\"></i>
                </button>
            </a>

            <figure class=\"panel meta\">
                ";
        // line 19
        if ((twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 19, $this->source); })()), "trainType", [], "any", false, false, false, 19) == "train")) {
            // line 20
            echo "                    <div class=\"img img-fluid\">
                        <img src=\"";
            // line 21
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/train-select.svg"), "html", null, true);
            echo "\" alt=\"\">
                    </div>
                ";
        } else {
            // line 24
            echo "                    <div class=\"img img-fluid\">
                        <img src=\"";
            // line 25
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/locomotive-select.svg"), "html", null, true);
            echo "\" alt=\"\">
                    </div>
                ";
        }
        // line 28
        echo "            </figure>

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
                                    <th scope=\"col\">Fleet :</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class=\"col-md-12 title-table\">
                                    <td class=\"td-table\">
                                        <a href=\"";
        // line 57
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.project-show", ["id" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 57, $this->source); })()), "projects", [], "any", false, false, false, 57), "id", [], "any", false, false, false, 57)]), "html", null, true);
        echo "\">
                                            ";
        // line 58
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 58, $this->source); })()), "projects", [], "any", false, false, false, 58), "name", [], "any", false, false, false, 58), "html", null, true);
        echo "
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class=\"table table-striped table-show-project table-content\">
                            <thead class=\"thead-dark\">
                                <tr>
                                    <th scope=\"col\">Baseline :</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class=\"col-md-12 title-table\">
                                    <td class=\"td-table\"></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    </div>

</main>";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "alstom/trains/show-train.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  145 => 58,  141 => 57,  110 => 28,  104 => 25,  101 => 24,  95 => 21,  92 => 20,  90 => 19,  80 => 12,  74 => 9,  68 => 5,  58 => 4,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'alstom/index.html.twig' %}


{% block body %}

    <main class=\"col-md-9 ml-sm-auto col-lg-12 pl-5 px-3 main-fleet\" role=\"main\">


        <h1 class=\"title_fleet_management\">{{ train.name|upper }}</h1>

        <div class=\"card content-train\">
            <a class=\"btn-edit\" href=\"{{ path('alstom.edit-train',{id: train.id}) }}\">
                <button class=\"btn btn-secondary \">
                    <i class=\"fas fa-edit\"></i>
                </button>
            </a>

            <figure class=\"panel meta\">
                {% if train.trainType == \"train\" %}
                    <div class=\"img img-fluid\">
                        <img src=\"{{ asset('../build/img/trains/train-select.svg') }}\" alt=\"\">
                    </div>
                {% else %}
                    <div class=\"img img-fluid\">
                        <img src=\"{{ asset('../build/img/trains/locomotive-select.svg') }}\" alt=\"\">
                    </div>
                {% endif %}
            </figure>

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
                                    <th scope=\"col\">Fleet :</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class=\"col-md-12 title-table\">
                                    <td class=\"td-table\">
                                        <a href=\"{{ path('alstom.project-show', {id: train.projects.id}) }}\">
                                            {{ train.projects.name }}
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class=\"table table-striped table-show-project table-content\">
                            <thead class=\"thead-dark\">
                                <tr>
                                    <th scope=\"col\">Baseline :</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class=\"col-md-12 title-table\">
                                    <td class=\"td-table\"></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    </div>

</main>{% endblock %}
", "alstom/trains/show-train.html.twig", "C:\\Users\\jdacquin\\Documents\\Data Platform\\Webapp\\data-platform-alstom\\trb-platform\\templates\\alstom\\trains\\show-train.html.twig");
    }
}
