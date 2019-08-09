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

/* alstom/engineers/_form-engineer.html.twig */
class __TwigTemplate_141b92749616f082edafbe330a9370b162ccb49cff0ca632dea351d75af130b3 extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/engineers/_form-engineer.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/engineers/_form-engineer.html.twig"));

        // line 1
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 4
        echo "<div class=\"container bootstrap snippet\">
<div class=\"row\">
    <div class=\"col-sm-3\">

    ";
        // line 8
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 8, $this->source); })()), 'form_start');
        echo "
        <div class=\"text-center content-img-form\">
            ";
        // line 10
        if (((isset($context["button"]) || array_key_exists("button", $context) ? $context["button"] : (function () { throw new RuntimeError('Variable "button" does not exist.', 10, $this->source); })()) == "Edit")) {
            // line 11
            echo "                ";
            if (twig_get_attribute($this->env, $this->source, (isset($context["engineer"]) || array_key_exists("engineer", $context) ? $context["engineer"] : (function () { throw new RuntimeError('Variable "engineer" does not exist.', 11, $this->source); })()), "filename", [], "any", false, false, false, 11)) {
                // line 12
                echo "                    <img class=\"img-fluid\" src=\"../build/img/engineers/";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["engineer"]) || array_key_exists("engineer", $context) ? $context["engineer"] : (function () { throw new RuntimeError('Variable "engineer" does not exist.', 12, $this->source); })()), "filename", [], "any", false, false, false, 12), "html", null, true);
                echo "\" alt=\"profile picture engineer\">
                ";
            } else {
                // line 14
                echo "                    <img src=\"";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/engineers/avatar-engineer.svg"), "html", null, true);
                echo "\" class=\"avatar img-circle img-thumbnail\" alt=\"avatar engineer alstom\">
                ";
            }
            // line 16
            echo "            ";
        } else {
            // line 17
            echo "                <img src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/engineers/avatar-engineer.svg"), "html", null, true);
            echo "\" class=\"avatar img-circle img-thumbnail\" alt=\"avatar engineer alstom\">
            ";
        }
        // line 19
        echo "            <span class=\"btn btn-default btn-file\">
                ";
        // line 20
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 20, $this->source); })()), "profilePicture", [], "any", false, false, false, 20), 'row');
        echo "
            </span>
        </div>

    </div>
    ";
        // line 25
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 25, $this->source); })()), "_token", [], "any", false, false, false, 25), 'row');
        echo "
    <div class=\"col-sm-9 content-input\">

        <div class=\"tab-content\">
            <div class=\"tab-pane active\" id=\"home\">
                <hr>
                <div class=\"form-group\">

                    <div class=\"col-xs-6\">
                        ";
        // line 34
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 34, $this->source); })()), "Name", [], "any", false, false, false, 34), 'row');
        echo "
                    </div>
                </div>
                <div class=\"form-group\">

                    <div class=\"col-xs-6\">
                        ";
        // line 40
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 40, $this->source); })()), "Surname", [], "any", false, false, false, 40), 'row');
        echo "
                    </div>
                </div>

                <div class=\"form-group\">

                    <div class=\"col-xs-6\">
                        ";
        // line 47
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 47, $this->source); })()), "Num_Badge", [], "any", false, false, false, 47), 'row');
        echo "
                    </div>
                </div>

                <div class=\"form-group\">
                    <div class=\"col-xs-6\">
                        ";
        // line 53
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 53, $this->source); })()), "projects", [], "any", false, false, false, 53), 'row');
        echo "
                    </div>
                </div>
                <button class=\"btn btn-primary\">";
        // line 56
        echo twig_escape_filter($this->env, (((isset($context["button"]) || array_key_exists("button", $context))) ? (_twig_default_filter((isset($context["button"]) || array_key_exists("button", $context) ? $context["button"] : (function () { throw new RuntimeError('Variable "button" does not exist.', 56, $this->source); })()), "Send")) : ("Send")), "html", null, true);
        echo "</button>
                ";
        // line 57
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 57, $this->source); })()), 'form_end');
        echo "
            </div><!--/tab-content-->

        </div><!--/col-9-->
</div>

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
        echo "
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "alstom/engineers/_form-engineer.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  171 => 2,  161 => 1,  144 => 57,  140 => 56,  134 => 53,  125 => 47,  115 => 40,  106 => 34,  94 => 25,  86 => 20,  83 => 19,  77 => 17,  74 => 16,  68 => 14,  62 => 12,  59 => 11,  57 => 10,  52 => 8,  46 => 4,  44 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% block stylesheets %}

{% endblock %}
<div class=\"container bootstrap snippet\">
<div class=\"row\">
    <div class=\"col-sm-3\">

    {{ form_start(form) }}
        <div class=\"text-center content-img-form\">
            {% if button == 'Edit' %}
                {% if engineer.filename %}
                    <img class=\"img-fluid\" src=\"../build/img/engineers/{{ engineer.filename }}\" alt=\"profile picture engineer\">
                {% else %}
                    <img src=\"{{ asset('../build/img/engineers/avatar-engineer.svg') }}\" class=\"avatar img-circle img-thumbnail\" alt=\"avatar engineer alstom\">
                {% endif %}
            {% else %}
                <img src=\"{{ asset('../build/img/engineers/avatar-engineer.svg') }}\" class=\"avatar img-circle img-thumbnail\" alt=\"avatar engineer alstom\">
            {% endif %}
            <span class=\"btn btn-default btn-file\">
                {{ form_row(form.profilePicture) }}
            </span>
        </div>

    </div>
    {{ form_row(form._token) }}
    <div class=\"col-sm-9 content-input\">

        <div class=\"tab-content\">
            <div class=\"tab-pane active\" id=\"home\">
                <hr>
                <div class=\"form-group\">

                    <div class=\"col-xs-6\">
                        {{ form_row(form.Name) }}
                    </div>
                </div>
                <div class=\"form-group\">

                    <div class=\"col-xs-6\">
                        {{ form_row(form.Surname) }}
                    </div>
                </div>

                <div class=\"form-group\">

                    <div class=\"col-xs-6\">
                        {{ form_row(form.Num_Badge) }}
                    </div>
                </div>

                <div class=\"form-group\">
                    <div class=\"col-xs-6\">
                        {{ form_row(form.projects) }}
                    </div>
                </div>
                <button class=\"btn btn-primary\">{{ button|default('Send') }}</button>
                {{ form_end(form) }}
            </div><!--/tab-content-->

        </div><!--/col-9-->
</div>

", "alstom/engineers/_form-engineer.html.twig", "C:\\Users\\L_200606688\\Documents\\Travaux-Alstom\\data-platform-alstom\\trb-platform\\templates\\alstom\\engineers\\_form-engineer.html.twig");
    }
}
