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
<div class=\"spinner-border text-info wait-spinner\" id=\"wait-spinner\" role=\"status\">
    <span class=\"sr-only\">
        Loading...
    </span>
</div>

";
        // line 11
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 11, $this->source); })()), 'form_start', ["action" => $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.addTrains"), "attr" => ["id" => "form_train"]]);
        // line 12
        echo "


<div class=\"row\">
    <div class=\"col-md-12\">";
        // line 16
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 16, $this->source); })()), "name", [], "any", false, false, false, 16), 'row');
        echo "</div>
    <div class=\"col-md-12\">";
        // line 17
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 17, $this->source); })()), "projects", [], "any", false, false, false, 17), 'row');
        echo "</div>
    <div class=\"col-md-12\">";
        // line 18
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 18, $this->source); })()), "trainType", [], "any", false, false, false, 18), 'row');
        echo "</div>


    <div class=\"content-form-train-baseline col-md-5 col-sm-5 \" id=\"content-form-baseline-1\">
        <label for=\"baseline_select_1\" id=\"label-baseline-1\"></label>
        <select class=\"form-control\" id=\"select_baseline_1\" name=\"select_baseline_1\"></select>
    </div>
    <div class=\"content-form-train-baseline col-md-5 col-sm-5\" id=\"content-form-baseline-2\">
        <label for=\"baseline_select_2\" id=\"label-baseline-2\"></label>
        <select class=\"form-control\" id=\"select_baseline_2\" name=\"select_baseline_2\"></select>
    </div>


    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_locomotive\">
        <h4>Select Baseline :
        </h4>
        <img src=\"";
        // line 34
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/locomotive-select.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"col-md-12 img-type-train img-fluid\">
        <figure class=\"content-ertms col-md-10 offset-md-2\">
            <img src=\"";
        // line 36
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms \" id=\"ertms-loco-1\">
            <img src=\"";
        // line 37
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms \" id=\"ertms-loco-2\">
        </figure>
    </div>

    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_train\">
        <h4>Select Baseline :
        </h4>
        <img src=\"";
        // line 44
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/train-select.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"col-md-12 img-type-train img-fluid\">
        <figure class=\"content-ertms col-md-10  offset-md-2 img-fluid\">

            <img src=\"";
        // line 47
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms img-fluid\" id=\"ertms-train-1\">
            <img src=\"";
        // line 48
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms img-fluid\" id=\"ertms-train-2\">
            <img src=\"";
        // line 49
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms img-fluid \" id=\"ertms-train-3\">
        </figure>
    </div>

    <div class=\"row content-btn-baseline col-md-10 mt-4 offset-md-1\">
        <div class=\"btn btn-secondary\" id=\"btn-baseline-1\">Add baseline</div>
        <div class=\"btn btn-secondary\" id=\"btn-baseline-2\">Add baseline</div>
        <div class=\"btn btn-secondary\" id=\"btn-baseline-3\">Add baseline</div>
    </div>


</div>
<p><input class=\"btn btn-primary mt-4\" id=\"soumission-train\" name=\"soumission_train\" type=\"submit\" value=\"Create\"/></p>
";
        // line 62
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 62, $this->source); })()), 'form_end');
        echo "
";
        
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
        return array (  161 => 2,  151 => 1,  139 => 62,  123 => 49,  119 => 48,  115 => 47,  109 => 44,  99 => 37,  95 => 36,  90 => 34,  71 => 18,  67 => 17,  63 => 16,  57 => 12,  55 => 11,  46 => 4,  44 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% block stylesheets %}
    <link href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css\" rel=\"stylesheet\">
{% endblock %}

<div class=\"spinner-border text-info wait-spinner\" id=\"wait-spinner\" role=\"status\">
    <span class=\"sr-only\">
        Loading...
    </span>
</div>

{{ form_start(form_train, {'action': path('alstom.addTrains'), 
               'attr': {'id': 'form_train'}}) }}


<div class=\"row\">
    <div class=\"col-md-12\">{{ form_row(form_train.name) }}</div>
    <div class=\"col-md-12\">{{ form_row(form_train.projects) }}</div>
    <div class=\"col-md-12\">{{ form_row(form_train.trainType) }}</div>


    <div class=\"content-form-train-baseline col-md-5 col-sm-5 \" id=\"content-form-baseline-1\">
        <label for=\"baseline_select_1\" id=\"label-baseline-1\"></label>
        <select class=\"form-control\" id=\"select_baseline_1\" name=\"select_baseline_1\"></select>
    </div>
    <div class=\"content-form-train-baseline col-md-5 col-sm-5\" id=\"content-form-baseline-2\">
        <label for=\"baseline_select_2\" id=\"label-baseline-2\"></label>
        <select class=\"form-control\" id=\"select_baseline_2\" name=\"select_baseline_2\"></select>
    </div>


    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_locomotive\">
        <h4>Select Baseline :
        </h4>
        <img src=\"{{ asset('../build/img/trains/locomotive-select.svg') }}\" alt=\"\" class=\"col-md-12 img-type-train img-fluid\">
        <figure class=\"content-ertms col-md-10 offset-md-2\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms \" id=\"ertms-loco-1\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms \" id=\"ertms-loco-2\">
        </figure>
    </div>

    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_train\">
        <h4>Select Baseline :
        </h4>
        <img src=\"{{ asset('../build/img/trains/train-select.svg') }}\" alt=\"\" class=\"col-md-12 img-type-train img-fluid\">
        <figure class=\"content-ertms col-md-10  offset-md-2 img-fluid\">

            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms img-fluid\" id=\"ertms-train-1\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms img-fluid\" id=\"ertms-train-2\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms img-fluid \" id=\"ertms-train-3\">
        </figure>
    </div>

    <div class=\"row content-btn-baseline col-md-10 mt-4 offset-md-1\">
        <div class=\"btn btn-secondary\" id=\"btn-baseline-1\">Add baseline</div>
        <div class=\"btn btn-secondary\" id=\"btn-baseline-2\">Add baseline</div>
        <div class=\"btn btn-secondary\" id=\"btn-baseline-3\">Add baseline</div>
    </div>


</div>
<p><input class=\"btn btn-primary mt-4\" id=\"soumission-train\" name=\"soumission_train\" type=\"submit\" value=\"Create\"/></p>
{{ form_end(form_train) }}
", "alstom/trains/_form-train.html.twig", "C:\\Users\\L_200606688\\OneDrive - Alstom\\data-platform-alstom\\trb-platform\\templates\\alstom\\trains\\_form-train.html.twig");
    }
}
