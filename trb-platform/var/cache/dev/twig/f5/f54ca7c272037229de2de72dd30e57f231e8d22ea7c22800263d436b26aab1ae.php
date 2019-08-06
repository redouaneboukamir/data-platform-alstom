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
        echo "    ";
        // line 24
        echo "
    <main class=\"col-md-12 ml-sm-auto col-lg-12 pl-5 px-3 main-fleet\" role=\"main\">


        <h1 class=\"title_fleet_management\">";
        // line 28
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 28, $this->source); })()), "name", [], "any", false, false, false, 28)), "html", null, true);
        echo "</h1>

        <div class=\"card content-train\">
            <a class=\"btn-edit\" href=\"";
        // line 31
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-train", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 31, $this->source); })()), "id", [], "any", false, false, false, 31)]), "html", null, true);
        echo "\">
                <button class=\"btn btn-secondary \">
                    <i class=\"fas fa-edit\"></i>
                </button>
            </a>

            <figure class=\"panel meta\">
                ";
        // line 38
        if ((twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 38, $this->source); })()), "trainType", [], "any", false, false, false, 38) == "train")) {
            // line 39
            echo "                    <div class=\"img img-fluid\">
                        <img src=\"";
            // line 40
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/train-select.svg"), "html", null, true);
            echo "\" alt=\"\">
                    </div>
                ";
        } else {
            // line 43
            echo "                    <div class=\"img img-fluid\">
                        <img src=\"";
            // line 44
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/locomotive-select.svg"), "html", null, true);
            echo "\" alt=\"\">
                    </div>
                ";
        }
        // line 47
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
                                        ";
        // line 76
        if (twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 76, $this->source); })()), "projects", [], "any", false, false, false, 76)) {
            // line 77
            echo "                                            <a href=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.project-show", ["id" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 77, $this->source); })()), "projects", [], "any", false, false, false, 77), "id", [], "any", false, false, false, 77)]), "html", null, true);
            echo "\">
                                                ";
            // line 78
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 78, $this->source); })()), "projects", [], "any", false, false, false, 78), "name", [], "any", false, false, false, 78), "html", null, true);
            echo "
                                            </a>
                                        ";
        }
        // line 81
        echo "
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p class=\"btn-primary btn col-12\" data-target=\"#modal-form-train\" data-toggle=\"modal\">Add baseline</p>
                        <p class=\"btn-success btn col-12\">Update baseline</p>

                        <table class=\"table table-striped table-show-project table-content\">
                            <thead class=\"thead-dark\">
                                <tr>
                                    <th scope=\"col\">Baseline :</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class=\"col-md-12 title-table\">
                                    ";
        // line 98
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 98, $this->source); })()), "baselines", [], "any", false, false, false, 98));
        foreach ($context['_seq'] as $context["_key"] => $context["baseline"]) {
            // line 99
            echo "                                        ";
            if (twig_get_attribute($this->env, $this->source, $context["baseline"], "status", [], "any", false, false, false, 99)) {
                // line 100
                echo "                                            <td class=\"td-table\">
                                                <a href=\"";
                // line 101
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.show-baseline", ["id" => twig_get_attribute($this->env, $this->source, $context["baseline"], "id", [], "any", false, false, false, 101)]), "html", null, true);
                echo "\">
                                                    ";
                // line 102
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["baseline"], "name", [], "any", false, false, false, 102), "html", null, true);
                echo "
                                                </a>
                                            </td>
                                        ";
            }
            // line 106
            echo "
                                    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['baseline'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 108
        echo "                                </tr>
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
        return array (  203 => 108,  196 => 106,  189 => 102,  185 => 101,  182 => 100,  179 => 99,  175 => 98,  156 => 81,  150 => 78,  145 => 77,  143 => 76,  112 => 47,  106 => 44,  103 => 43,  97 => 40,  94 => 39,  92 => 38,  82 => 31,  76 => 28,  70 => 24,  68 => 5,  58 => 4,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'alstom/index.html.twig' %}


{% block body %}
    {# <div id=\"modal-content-form-equipement-edit\">
                            <button aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" id=\"close-modal-form-equipment-edit\" style=\"color:red; position:absolute; right:20px; margin-top:-10px;\" type=\"button\">
                                <span aria-hidden=\"true\">&times;</span>
                            </button>
                            <div class=\"form-equipment\" id=\"formulaire-equipment\">
                                {{ form_start(form_equipement, {'action': path('alstom.addEquipment'), 
                                   'attr': {'id': 'form_equipement_edit'}}) }}
                                {{form_row(form_equipement.Type)}}
                                {{form_row(form_equipement.sous_type)}}
                                {{form_row(form_equipement.DTR_board)}}
                                {{form_row(form_equipement.Indice_DTR)}}
                                {{form_row(form_equipement.Num_serie)}}
                                {{form_row(form_equipement._token)}}
                    
                                <p><input class=\"btn-valid-Equipment\" id=\"soumission-equipement-edit\" name=\"soumission_edit_equipement\" type=\"submit\" value=\"Update\"/></p>
                    
                                {{form_end(form_equipement)}}</div>
                    
                        </div> #}

    <main class=\"col-md-12 ml-sm-auto col-lg-12 pl-5 px-3 main-fleet\" role=\"main\">


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
                                        {% if train.projects %}
                                            <a href=\"{{ path('alstom.project-show', {id: train.projects.id}) }}\">
                                                {{ train.projects.name }}
                                            </a>
                                        {% endif %}

                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p class=\"btn-primary btn col-12\" data-target=\"#modal-form-train\" data-toggle=\"modal\">Add baseline</p>
                        <p class=\"btn-success btn col-12\">Update baseline</p>

                        <table class=\"table table-striped table-show-project table-content\">
                            <thead class=\"thead-dark\">
                                <tr>
                                    <th scope=\"col\">Baseline :</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class=\"col-md-12 title-table\">
                                    {% for baseline in train.baselines %}
                                        {% if baseline.status %}
                                            <td class=\"td-table\">
                                                <a href=\"{{ path('alstom.show-baseline', {id: baseline.id}) }}\">
                                                    {{ baseline.name }}
                                                </a>
                                            </td>
                                        {% endif %}

                                    {% endfor %}
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    </div>

</main>{% endblock %}
", "alstom/trains/show-train.html.twig", "C:\\Users\\L_200606688\\OneDrive - Alstom\\data-platform-alstom\\trb-platform\\templates\\alstom\\trains\\show-train.html.twig");
    }
}
