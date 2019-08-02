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

/* alstom/baseline/create-baseline.html.twig */
class __TwigTemplate_b0012985eceeb4bb2018991a80f3b67560c01ad30dfcd8528549ab4f0f92cb7d extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'stylesheets' => [$this, 'block_stylesheets'],
            'body' => [$this, 'block_body'],
            'javascripts' => [$this, 'block_javascripts'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 6
        return "alstom/index.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/baseline/create-baseline.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/baseline/create-baseline.html.twig"));

        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/baseline/create-baseline.html.twig", 6);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 1
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 2
        echo "    <link href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css\" rel=\"stylesheet\">
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 7
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 8
        echo "    <div class=\"spinner-border text-info wait-spinner\" id=\"wait-spinner\" role=\"status\">
        <span class=\"sr-only\">
            Loading...
        </span>
    </div>
    <main class=\"col-md-9 ml-sm-auto col-lg-12 pl-5 px-4 main-baseline\" role=\"main\">
        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
            <h2>
                <i class=\"fa fa-angle-right\"></i>
                Add baseline</h2>
        </div>
        <div class=\"jumbotron content-form-engineer\">
            ";
        // line 20
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_baseline"]) || array_key_exists("form_baseline", $context) ? $context["form_baseline"] : (function () { throw new RuntimeError('Variable "form_baseline" does not exist.', 20, $this->source); })()), 'form_start', ["action" => $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.addBaseline"), "attr" => ["id" => "form_baseline"]]);
        // line 21
        echo "

            <div class=\"row\">
                <div class=\"col-md-12\">
                    ";
        // line 25
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_baseline"]) || array_key_exists("form_baseline", $context) ? $context["form_baseline"] : (function () { throw new RuntimeError('Variable "form_baseline" does not exist.', 25, $this->source); })()), "name", [], "any", false, false, false, 25), 'row');
        echo "</div>

            </div>
            <button class=\"btn btn-primary mt-4\" data-target=\"#modal_equipement\" data-toggle=\"modal\" id=\"create-baseline\">";
        // line 28
        echo twig_escape_filter($this->env, (((isset($context["button"]) || array_key_exists("button", $context))) ? (_twig_default_filter((isset($context["button"]) || array_key_exists("button", $context) ? $context["button"] : (function () { throw new RuntimeError('Variable "button" does not exist.', 28, $this->source); })()), "Add")) : ("Add")), "html", null, true);
        echo "</button>

            ";
        // line 30
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_baseline"]) || array_key_exists("form_baseline", $context) ? $context["form_baseline"] : (function () { throw new RuntimeError('Variable "form_baseline" does not exist.', 30, $this->source); })()), 'form_end');
        echo "
        </div>

        <!-- Modal -->
        <div aria-hidden=\"true\" aria-labelledby=\"modal_equipementLabel\" class=\"modal fade modal-equipement\" id=\"modal_equipement\" role=\"dialog\" tabindex=\"-1\">
            <div class=\"modal-dialog\" role=\"document\">
                <div class=\"modal-content\">
                    <div class=\"modal-header\">
                        <h5 class=\"modal-title title-baseline\" id=\"modal_equipementLabel\"></h5>
                        <button aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">
                            <span aria-hidden=\"true\">&times;</span>
                        </button>
                    </div>
                    <div class=\"modal-body content-allEquipement\">
                        <div class=\"show-equipment\" id=\"show-equipment\"></div>

                        <div id=\"modal-content-form-equipement\">
                            ";
        // line 47
        echo twig_include($this->env, $context, "alstom/ertms/_form-equipment.html.twig", ["form" => (isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 47, $this->source); })())]);
        echo "
                        </div>

                        <div class=\" mt-4\">
                            <a class=\"btn-add-equipment col-5 ml-5 mb-5\" id=\"create-equipment\">Add equipement</a>
                        </div>
                    </div>
                    <a class=\"previous-equipment\" href=\"\" id=\"previous-equipment\">Previous</a>
                    <div class=\"modal-footer\">
                        <button class=\"btn btn-primary\" id=\"valid-all-equipments\" type=\"button\">Valid All Equipments</button>
                        <button class=\"btn btn-secondary\" data-dismiss=\"modal\" id=\"close-equipement\" type=\"button\">Close</button>
                    </div>
                </div>
            </div>
        </div>


    </main>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 66
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        echo "<script>// \$('select').select2();</script>";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "alstom/baseline/create-baseline.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  173 => 66,  144 => 47,  124 => 30,  119 => 28,  113 => 25,  107 => 21,  105 => 20,  91 => 8,  81 => 7,  70 => 2,  60 => 1,  37 => 6,);
    }

    public function getSourceContext()
    {
        return new Source("{% block stylesheets %}
    <link href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css\" rel=\"stylesheet\">
{% endblock %}


{% extends 'alstom/index.html.twig' %}
{% block body %}
    <div class=\"spinner-border text-info wait-spinner\" id=\"wait-spinner\" role=\"status\">
        <span class=\"sr-only\">
            Loading...
        </span>
    </div>
    <main class=\"col-md-9 ml-sm-auto col-lg-12 pl-5 px-4 main-baseline\" role=\"main\">
        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
            <h2>
                <i class=\"fa fa-angle-right\"></i>
                Add baseline</h2>
        </div>
        <div class=\"jumbotron content-form-engineer\">
            {{ form_start(form_baseline, {'action': path('alstom.addBaseline'), 
               'attr': {'id': 'form_baseline'}})}}

            <div class=\"row\">
                <div class=\"col-md-12\">
                    {{form_row(form_baseline.name)}}</div>

            </div>
            <button class=\"btn btn-primary mt-4\" data-target=\"#modal_equipement\" data-toggle=\"modal\" id=\"create-baseline\">{{ button|default('Add') }}</button>

            {{ form_end(form_baseline) }}
        </div>

        <!-- Modal -->
        <div aria-hidden=\"true\" aria-labelledby=\"modal_equipementLabel\" class=\"modal fade modal-equipement\" id=\"modal_equipement\" role=\"dialog\" tabindex=\"-1\">
            <div class=\"modal-dialog\" role=\"document\">
                <div class=\"modal-content\">
                    <div class=\"modal-header\">
                        <h5 class=\"modal-title title-baseline\" id=\"modal_equipementLabel\"></h5>
                        <button aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">
                            <span aria-hidden=\"true\">&times;</span>
                        </button>
                    </div>
                    <div class=\"modal-body content-allEquipement\">
                        <div class=\"show-equipment\" id=\"show-equipment\"></div>

                        <div id=\"modal-content-form-equipement\">
                            {{ include (\"alstom/ertms/_form-equipment.html.twig\", {form: form_equipement}) }}
                        </div>

                        <div class=\" mt-4\">
                            <a class=\"btn-add-equipment col-5 ml-5 mb-5\" id=\"create-equipment\">Add equipement</a>
                        </div>
                    </div>
                    <a class=\"previous-equipment\" href=\"\" id=\"previous-equipment\">Previous</a>
                    <div class=\"modal-footer\">
                        <button class=\"btn btn-primary\" id=\"valid-all-equipments\" type=\"button\">Valid All Equipments</button>
                        <button class=\"btn btn-secondary\" data-dismiss=\"modal\" id=\"close-equipement\" type=\"button\">Close</button>
                    </div>
                </div>
            </div>
        </div>


    </main>
{% endblock %}
{% block javascripts %}<script>// \$('select').select2();</script>{% endblock %}
", "alstom/baseline/create-baseline.html.twig", "C:\\Users\\L_200606688\\OneDrive - Alstom\\data-platform-alstom\\trb-platform\\templates\\alstom\\Baseline\\create-baseline.html.Twig");
    }
}
