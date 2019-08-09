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
        echo "    <main class=\"col-md-12 ml-sm-auto col-lg-12 pl-5 px-3 main-fleet\" role=\"main\">
        <div class=\"container-header container-fluid\">
            <div class=\"row content-details-img\">
                <a class=\"btn-edit\" href=\"";
        // line 8
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-train", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 8, $this->source); })()), "id", [], "any", false, false, false, 8)]), "html", null, true);
        echo "\">
                    <i class=\"fas fa-edit\"></i>
                </a>
                <div class=\"col-md-3 img\">
                    ";
        // line 12
        if ((twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 12, $this->source); })()), "trainType", [], "any", false, false, false, 12) == "train")) {
            // line 13
            echo "                        <div class=\"img img-fluid\">
                            <img src=\"";
            // line 14
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/train-select.svg"), "html", null, true);
            echo "\" alt=\"\">
                        </div>
                    ";
        } else {
            // line 17
            echo "                        <div class=\"img img-fluid\">
                            <img src=\"";
            // line 18
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/locomotive-select.svg"), "html", null, true);
            echo "\" alt=\"\">
                        </div>
                    ";
        }
        // line 21
        echo "                </div>
                <div class=\"col-md-9 details\">
                    <h1>";
        // line 23
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 23, $this->source); })()), "name", [], "any", false, false, false, 23)), "html", null, true);
        echo "</h1>
                    <span class=\"content-title-details\">
                        <h3>Type :</h3>
                        <p>";
        // line 26
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 26, $this->source); })()), "TrainType", [], "any", false, false, false, 26), "html", null, true);
        echo "</p>
                    </span>
                    <span class=\"content-title-details\">
                        <h3>Fleet :</h3>
                        <h5>";
        // line 30
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 30, $this->source); })()), "Projects", [], "any", false, false, false, 30), "name", [], "any", false, false, false, 30), "html", null, true);
        echo "</h5>

                    </span>

                </div>
            </div>
            <div class=\"border-separate-picture-info\"></div>
            <div class=\"row content-dashboard-table\">
                <div class=\"col-md-8 content-dasboard\">
                    <img class=\"img img-responsive img-fluid\" src=\"";
        // line 39
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/dashboard.png"), "html", null, true);
        echo "\">
                </div>
                <div class=\"col-md-3\" style=\"padding:0\">
                    <table class=\"table table-striped table-show-project table-content\">
                        <thead class=\"thead-dark\">
                            <tr>
                                <th scope=\"col\">Equipments :</th>
                            </tr>
                        </thead>
                        <tbody>
                            ";
        // line 49
        $context["presence_baseline"] = false;
        $context["id_baseline"] = 0;
        // line 50
        echo "                            ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 50, $this->source); })()), "baselines", [], "any", false, false, false, 50));
        foreach ($context['_seq'] as $context["_key"] => $context["baseline"]) {
            // line 51
            echo "                                ";
            $context["presence_baseline"] = true;
            // line 52
            echo "                                ";
            if (twig_get_attribute($this->env, $this->source, $context["baseline"], "status", [], "any", false, false, false, 52)) {
                // line 53
                echo "                                    <td class=\"td-table\">
                                        <a href=\"";
                // line 54
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.show-baseline-train", ["id" => twig_get_attribute($this->env, $this->source, $context["baseline"], "id", [], "any", false, false, false, 54)]), "html", null, true);
                echo "\">
                                            ";
                // line 55
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["baseline"], "name", [], "any", false, false, false, 55), "html", null, true);
                echo "
                                            ";
                // line 56
                $context["id_baseline"] = twig_get_attribute($this->env, $this->source, $context["baseline"], "id", [], "any", false, false, false, 56);
                // line 57
                echo "                                        </a>
                                    </td>
                                ";
            }
            // line 60
            echo "                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['baseline'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 61
        echo "
                        </tbody>
                    </table>
                    ";
        // line 64
        if (((isset($context["presence_baseline"]) || array_key_exists("presence_baseline", $context) ? $context["presence_baseline"] : (function () { throw new RuntimeError('Variable "presence_baseline" does not exist.', 64, $this->source); })()) == false)) {
            // line 65
            echo "                        <a href=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.addBaselineToTrain", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["train"]) || array_key_exists("train", $context) ? $context["train"] : (function () { throw new RuntimeError('Variable "train" does not exist.', 65, $this->source); })()), "id", [], "any", false, false, false, 65)]), "html", null, true);
            echo "\" class=\"btn-primary btn col-12\">Add Equipment</a>
                    ";
        }
        // line 67
        echo "
                </div>

            </div>
        </div>


    </main>
";
        
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
        return array (  193 => 67,  187 => 65,  185 => 64,  180 => 61,  174 => 60,  169 => 57,  167 => 56,  163 => 55,  159 => 54,  156 => 53,  153 => 52,  150 => 51,  145 => 50,  142 => 49,  129 => 39,  117 => 30,  110 => 26,  104 => 23,  100 => 21,  94 => 18,  91 => 17,  85 => 14,  82 => 13,  80 => 12,  73 => 8,  68 => 5,  58 => 4,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'alstom/index.html.twig' %}


{% block body %}
    <main class=\"col-md-12 ml-sm-auto col-lg-12 pl-5 px-3 main-fleet\" role=\"main\">
        <div class=\"container-header container-fluid\">
            <div class=\"row content-details-img\">
                <a class=\"btn-edit\" href=\"{{ path('alstom.edit-train',{id: train.id}) }}\">
                    <i class=\"fas fa-edit\"></i>
                </a>
                <div class=\"col-md-3 img\">
                    {% if train.trainType == \"train\" %}
                        <div class=\"img img-fluid\">
                            <img src=\"{{ asset('../build/img/trains/train-select.svg') }}\" alt=\"\">
                        </div>
                    {% else %}
                        <div class=\"img img-fluid\">
                            <img src=\"{{ asset('../build/img/trains/locomotive-select.svg') }}\" alt=\"\">
                        </div>
                    {% endif %}
                </div>
                <div class=\"col-md-9 details\">
                    <h1>{{ train.name|upper }}</h1>
                    <span class=\"content-title-details\">
                        <h3>Type :</h3>
                        <p>{{train.TrainType}}</p>
                    </span>
                    <span class=\"content-title-details\">
                        <h3>Fleet :</h3>
                        <h5>{{train.Projects.name}}</h5>

                    </span>

                </div>
            </div>
            <div class=\"border-separate-picture-info\"></div>
            <div class=\"row content-dashboard-table\">
                <div class=\"col-md-8 content-dasboard\">
                    <img class=\"img img-responsive img-fluid\" src=\"{{ asset('../build/img/dashboard.png') }}\">
                </div>
                <div class=\"col-md-3\" style=\"padding:0\">
                    <table class=\"table table-striped table-show-project table-content\">
                        <thead class=\"thead-dark\">
                            <tr>
                                <th scope=\"col\">Equipments :</th>
                            </tr>
                        </thead>
                        <tbody>
                            {% set presence_baseline = false%}{% set id_baseline = 0 %}
                            {% for baseline in train.baselines %}
                                {% set presence_baseline = true %}
                                {% if baseline.status %}
                                    <td class=\"td-table\">
                                        <a href=\"{{ path('alstom.show-baseline-train', {id: baseline.id}) }}\">
                                            {{ baseline.name }}
                                            {% set id_baseline =  baseline.id %}
                                        </a>
                                    </td>
                                {% endif %}
                            {% endfor %}

                        </tbody>
                    </table>
                    {% if presence_baseline == false %}
                        <a href=\"{{path('alstom.addBaselineToTrain',{id:train.id})}}\" class=\"btn-primary btn col-12\">Add Equipment</a>
                    {% endif %}

                </div>

            </div>
        </div>


    </main>
{% endblock %}
", "alstom/trains/show-train.html.twig", "C:\\Users\\L_200606688\\Documents\\Travaux-Alstom\\data-platform-alstom\\trb-platform\\templates\\alstom\\trains\\show-train.html.twig");
    }
}
