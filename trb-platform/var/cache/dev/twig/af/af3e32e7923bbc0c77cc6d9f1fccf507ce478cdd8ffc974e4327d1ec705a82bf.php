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

/* alstom/trains/_form-train.html.twig */
class __TwigTemplate_590b5553f523b8c218e694817b64b6ebb3f1695d4c3a81c3fc0991471aeb006b extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'stylesheets' => [$this, 'block_stylesheets'],
            'javascripts' => [$this, 'block_javascripts'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/trains/_form-train.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/trains/_form-train.html.twig"));

        // line 1
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 4
        echo "

<!-- Ici ton contenu 1 -->

<!-- Ici ton contenu 2 -->


";
        // line 11
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 11, $this->source); })()), 'form_start', ["action" => $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.addTrains"), "method" => "POST", "attr" => ["id" => "form_train"]]);
        // line 13
        echo "


<div class=\"row\">
    <div class=\"col-md-10\">";
        // line 17
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 17, $this->source); })()), "name", [], "any", false, false, false, 17), 'row');
        echo "</div>
    <div class=\"col-md-10\">";
        // line 18
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 18, $this->source); })()), "projects", [], "any", false, false, false, 18), 'row');
        echo "</div>
    <div class=\"col-md-10\">";
        // line 19
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 19, $this->source); })()), "trainType", [], "any", false, false, false, 19), 'row');
        echo "</div>
    ";
        // line 20
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 20, $this->source); })()), "position_ERTMS", [], "any", false, false, false, 20), 'widget', ["attr" => ["style" => "display:none !important"]]);
        // line 24
        echo "


    ";
        // line 28
        echo "

    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_locomotive\">
        <h4>Select EVC :
        </h4>
        <img src=\"";
        // line 33
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/locomotive-select.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"col-md-10 img-type-train\">
        <figure class=\"content-ertms col-md-10\">
            <img src=\"";
        // line 35
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms \" id=\"ertms-loco-1\">
            <img src=\"";
        // line 36
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms \" id=\"ertms-loco-2\">

        </figure>
    </div>

    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_train\">
        <h4>Select EVC :
        </h4>
        <img src=\"";
        // line 44
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/train-select.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"col-md-10  img-type-train\">
        <figure class=\"content-ertms col-md-10\">
            <img src=\"";
        // line 46
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms\" id=\"ertms-train-1\">
            <img src=\"";
        // line 47
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms\" id=\"ertms-train-2\">
            <img src=\"";
        // line 48
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms \" id=\"ertms-train-3\">
        </figure>
    </div>

    <div class=\"col-md-10 mt-4\" id=\"btn-choice-ertms\">
        <div class=\"content-btn-train col-12\">
            <a href=\"\"></a>
            <button class=\"btn btn-secondary\" data-target=\"#modalPoll-1\" data-toggle=\"modal\" id=\"create-ertms-1\" type=\"button\">Add ERTMS</button>
            <button class=\"btn btn-secondary\" data-target=\"#modalPoll-1\" data-toggle=\"modal\" id=\"create-ertms-2\" type=\"button\">Add ERTMS</button>
        </div>
    </div>
    <div class=\"name-ertms\">
        <div aria-hidden=\"true\" aria-labelledby=\"exampleModalLabel\" class=\"modal fade right\" data-backdrop=\"false\" id=\"modalPoll-1\" role=\"dialog\" tabindex=\"-1\">
            <div class=\"modal-dialog modal-full-height modal-right modal-notify modal-info\">

                <div class=\"modal-content\">
                    <button aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" id=\"close-modal\" type=\"button\">
                        <span aria-hidden=\"true\" class=\"white-text close-name-ertms\">×</span>
                    </button>
                    <!--Header-->
                    <div class=\"modal-header\" id=\"modal-header\">
                        ";
        // line 69
        $this->loadTemplate("alstom/trains/_form-ertms.html.twig", "alstom/trains/_form-train.html.twig", 69)->display($context);
        // line 70
        echo "                        ";
        $this->loadTemplate("alstom/trains/_form-equipment.html.twig", "alstom/trains/_form-train.html.twig", 70)->display($context);
        // line 71
        echo "                        ";
        // line 73
        echo "
                    </div>


                </div>
            </div>
        </div>
    </div>
</div>
";
        // line 83
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 83, $this->source); })()), 'form_end');
        echo "

";
        // line 85
        $this->displayBlock('javascripts', $context, $blocks);
        
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

    // line 85
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
        return "alstom/trains/_form-train.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  201 => 85,  190 => 2,  180 => 1,  170 => 85,  165 => 83,  154 => 73,  152 => 71,  149 => 70,  147 => 69,  123 => 48,  119 => 47,  115 => 46,  110 => 44,  99 => 36,  95 => 35,  90 => 33,  83 => 28,  78 => 24,  76 => 20,  72 => 19,  68 => 18,  64 => 17,  58 => 13,  56 => 11,  47 => 4,  45 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% block stylesheets %}
    <link href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css\" rel=\"stylesheet\">
{% endblock %}


<!-- Ici ton contenu 1 -->

<!-- Ici ton contenu 2 -->


{{ form_start(form_train, {'action': path('alstom.addTrains'), 'method': 'POST',
               'attr': {'id': 'form_train'}
}) }}


<div class=\"row\">
    <div class=\"col-md-10\">{{ form_row(form_train.name) }}</div>
    <div class=\"col-md-10\">{{ form_row(form_train.projects) }}</div>
    <div class=\"col-md-10\">{{ form_row(form_train.trainType) }}</div>
    {{form_widget(form_train.position_ERTMS, {
        'attr' : {
            'style' : 'display:none !important'
        }
    })}}


    {# {{ form_row(form_train._token) }} #}


    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_locomotive\">
        <h4>Select EVC :
        </h4>
        <img src=\"{{ asset('../build/img/trains/locomotive-select.svg') }}\" alt=\"\" class=\"col-md-10 img-type-train\">
        <figure class=\"content-ertms col-md-10\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms \" id=\"ertms-loco-1\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms \" id=\"ertms-loco-2\">

        </figure>
    </div>

    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_train\">
        <h4>Select EVC :
        </h4>
        <img src=\"{{ asset('../build/img/trains/train-select.svg') }}\" alt=\"\" class=\"col-md-10  img-type-train\">
        <figure class=\"content-ertms col-md-10\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms\" id=\"ertms-train-1\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms\" id=\"ertms-train-2\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms \" id=\"ertms-train-3\">
        </figure>
    </div>

    <div class=\"col-md-10 mt-4\" id=\"btn-choice-ertms\">
        <div class=\"content-btn-train col-12\">
            <a href=\"\"></a>
            <button class=\"btn btn-secondary\" data-target=\"#modalPoll-1\" data-toggle=\"modal\" id=\"create-ertms-1\" type=\"button\">Add ERTMS</button>
            <button class=\"btn btn-secondary\" data-target=\"#modalPoll-1\" data-toggle=\"modal\" id=\"create-ertms-2\" type=\"button\">Add ERTMS</button>
        </div>
    </div>
    <div class=\"name-ertms\">
        <div aria-hidden=\"true\" aria-labelledby=\"exampleModalLabel\" class=\"modal fade right\" data-backdrop=\"false\" id=\"modalPoll-1\" role=\"dialog\" tabindex=\"-1\">
            <div class=\"modal-dialog modal-full-height modal-right modal-notify modal-info\">

                <div class=\"modal-content\">
                    <button aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" id=\"close-modal\" type=\"button\">
                        <span aria-hidden=\"true\" class=\"white-text close-name-ertms\">×</span>
                    </button>
                    <!--Header-->
                    <div class=\"modal-header\" id=\"modal-header\">
                        {% include('alstom/trains/_form-ertms.html.twig') %}
                        {% include('alstom/trains/_form-equipment.html.twig') %}
                        {# {% include('alstom/trains/_form-typeEquipment.html.twig') %}
                        {% include('alstom/trains/_form-soustypeEquipment.html.twig') %} #}

                    </div>


                </div>
            </div>
        </div>
    </div>
</div>
{# <p><input class=\"btn btn-primary mt-4\" id=\"soumission-train\" name=\"soumission_train\" type=\"submit\" value=\"Create\"/></p> #}
{{ form_end(form_train) }}

{% block javascripts %}{% endblock %}
", "alstom/trains/_form-train.html.twig", "C:\\Users\\L_200606688\\OneDrive - Alstom\\data-platform\\trb-platform\\templates\\alstom\\trains\\_form-train.html.twig");
    }
}
