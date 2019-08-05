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

";
        // line 6
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 6, $this->source); })()), 'form_start');
        echo "


<div class=\"row\">
    <div class=\"col-md-12\">";
        // line 10
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 10, $this->source); })()), "name", [], "any", false, false, false, 10), 'row');
        echo "</div>
    <div class=\"col-md-12\">";
        // line 11
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 11, $this->source); })()), "projects", [], "any", false, false, false, 11), 'row');
        echo "</div>
    <div class=\"col-md-12\">";
        // line 12
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 12, $this->source); })()), "trainType", [], "any", false, false, false, 12), 'row');
        echo "</div>
    ";
        // line 13
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 13, $this->source); })()), "position_ERTMS", [], "any", false, false, false, 13), 'widget', ["attr" => ["style" => "display:none !important"]]);
        // line 17
        echo "

    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_locomotive\">
        <h4>Select Baseline :
        </h4>
        <img src=\"";
        // line 22
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/locomotive-select.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"col-md-12 img-type-train img-fluid\">
        <figure class=\"content-ertms col-md-10 offset-md-2\">
            <img src=\"";
        // line 24
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms \" id=\"ertms-loco-1\">
            <img src=\"";
        // line 25
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms \" id=\"ertms-loco-2\">
        </figure>
    </div>

    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_train\">
        <h4>Select Baseline :
        </h4>
        <img src=\"";
        // line 32
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/train-select.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"col-md-12 img-type-train img-fluid\">
        <figure class=\"content-ertms col-md-10  offset-md-2 img-fluid\">

            <img src=\"";
        // line 35
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms img-fluid\" id=\"ertms-train-1\">
            <img src=\"";
        // line 36
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms img-fluid\" id=\"ertms-train-2\">
            <img src=\"";
        // line 37
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms img-fluid \" id=\"ertms-train-3\">
        </figure>
    </div>


</div>
<p><input class=\"btn btn-primary mt-4\" id=\"soumission-train\" name=\"soumission_train\" type=\"submit\" value=\"Create\"/></p>
";
        // line 44
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 44, $this->source); })()), 'form_end');
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
        return array (  143 => 2,  133 => 1,  121 => 44,  111 => 37,  107 => 36,  103 => 35,  97 => 32,  87 => 25,  83 => 24,  78 => 22,  71 => 17,  69 => 13,  65 => 12,  61 => 11,  57 => 10,  50 => 6,  46 => 4,  44 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% block stylesheets %}
    <link href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css\" rel=\"stylesheet\">
{% endblock %}


{{ form_start(form_train) }}


<div class=\"row\">
    <div class=\"col-md-12\">{{ form_row(form_train.name) }}</div>
    <div class=\"col-md-12\">{{ form_row(form_train.projects) }}</div>
    <div class=\"col-md-12\">{{ form_row(form_train.trainType) }}</div>
    {{form_widget(form_train.position_ERTMS, {
        'attr' : {
            'style' : 'display:none !important'
        }
    })}}

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


</div>
<p><input class=\"btn btn-primary mt-4\" id=\"soumission-train\" name=\"soumission_train\" type=\"submit\" value=\"Create\"/></p>
{{ form_end(form_train) }}
", "alstom/trains/_form-train.html.twig", "C:\\Users\\L_200606688\\OneDrive - Alstom\\data-platform-alstom\\trb-platform\\templates\\alstom\\trains\\_form-train.html.twig");
    }
}
