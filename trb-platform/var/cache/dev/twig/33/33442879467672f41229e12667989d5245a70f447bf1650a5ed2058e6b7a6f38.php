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

/* alstom/clients/_form-client.html.twig */
class __TwigTemplate_096acafba14d47020be39a72fb1cea5e59d34cb0fc72c87d4b1db3d4e295786c extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/clients/_form-client.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/clients/_form-client.html.twig"));

        // line 1
        echo "

<div class=\"container bootstrap snippet\">
    <div class=\"row\">
        <div class=\"col-sm-3\"><!--left col-->

            ";
        // line 7
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 7, $this->source); })()), 'form_start');
        echo "
            <div class=\"text-center content-img-form\">
                ";
        // line 9
        if (((isset($context["button"]) || array_key_exists("button", $context) ? $context["button"] : (function () { throw new RuntimeError('Variable "button" does not exist.', 9, $this->source); })()) == "Edit")) {
            // line 10
            echo "                        ";
            if (twig_get_attribute($this->env, $this->source, (isset($context["client"]) || array_key_exists("client", $context) ? $context["client"] : (function () { throw new RuntimeError('Variable "client" does not exist.', 10, $this->source); })()), "filename", [], "any", false, false, false, 10)) {
                // line 11
                echo "                            <img class=\"img-fluid\" src=\"/build/img/clients/";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["client"]) || array_key_exists("client", $context) ? $context["client"] : (function () { throw new RuntimeError('Variable "client" does not exist.', 11, $this->source); })()), "filename", [], "any", false, false, false, 11), "html", null, true);
                echo "\" alt=\"profile picture client\">
                        ";
            } else {
                // line 13
                echo "                            <img src=\"";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/clients/avatar-client.svg"), "html", null, true);
                echo "\" class=\"avatar img-circle img-thumbnail\" alt=\"avatar client alstom\">
                        ";
            }
            // line 15
            echo "                    ";
        } else {
            // line 16
            echo "                        <img src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/clients/avatar-client.svg"), "html", null, true);
            echo "\" class=\"avatar img-circle img-thumbnail\" alt=\"avatar client alstom\">
                ";
        }
        // line 18
        echo "                <span class=\"btn btn-default btn-file\">
                    ";
        // line 19
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 19, $this->source); })()), "profilePicture", [], "any", false, false, false, 19), 'widget');
        echo "
                </span>
";
        // line 22
        echo "            </div>

        </div><!--/col-3-->
        <div class=\"col-sm-9 content-input\">

            <div class=\"tab-content\">
                <div class=\"tab-pane active\" id=\"home\">
                    <hr>
                        <div class=\"form-group\">

                            <div class=\"col-xs-6\">
                                    ";
        // line 33
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 33, $this->source); })()), "name", [], "any", false, false, false, 33), 'row');
        echo "
                            </div>
                        </div>
                        <div class=\"form-group\">

                            <div class=\"col-xs-6\">
                                ";
        // line 39
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 39, $this->source); })()), "email", [], "any", false, false, false, 39), 'row');
        echo "
                            </div>
                        </div>

                        <div class=\"form-group\">

                            <div class=\"col-xs-6\">
                                ";
        // line 46
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 46, $this->source); })()), "projects", [], "any", false, false, false, 46), 'row');
        echo "
                            </div>
                        </div>

                        <div class=\"form-group\">
                            <div class=\"col-xs-6\">
                                ";
        // line 52
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 52, $this->source); })()), "countries", [], "any", false, false, false, 52), 'row');
        echo "
                            </div>
                        </div>
                        <button class=\"btn btn-primary\">";
        // line 55
        echo twig_escape_filter($this->env, (((isset($context["button"]) || array_key_exists("button", $context))) ? (_twig_default_filter((isset($context["button"]) || array_key_exists("button", $context) ? $context["button"] : (function () { throw new RuntimeError('Variable "button" does not exist.', 55, $this->source); })()), "Send")) : ("Send")), "html", null, true);
        echo "</button>
                        ";
        // line 56
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 56, $this->source); })()), 'form_end');
        echo "
        </div><!--/tab-content-->

    </div><!--/col-9-->
</div><!--/row-->
    </div>
</div>";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "alstom/clients/_form-client.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  141 => 56,  137 => 55,  131 => 52,  122 => 46,  112 => 39,  103 => 33,  90 => 22,  85 => 19,  82 => 18,  76 => 16,  73 => 15,  67 => 13,  61 => 11,  58 => 10,  56 => 9,  51 => 7,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("

<div class=\"container bootstrap snippet\">
    <div class=\"row\">
        <div class=\"col-sm-3\"><!--left col-->

            {{ form_start(form) }}
            <div class=\"text-center content-img-form\">
                {% if button == 'Edit' %}
                        {% if client.filename %}
                            <img class=\"img-fluid\" src=\"/build/img/clients/{{ client.filename }}\" alt=\"profile picture client\">
                        {% else %}
                            <img src=\"{{ asset('../build/img/clients/avatar-client.svg') }}\" class=\"avatar img-circle img-thumbnail\" alt=\"avatar client alstom\">
                        {% endif %}
                    {% else %}
                        <img src=\"{{ asset('../build/img/clients/avatar-client.svg') }}\" class=\"avatar img-circle img-thumbnail\" alt=\"avatar client alstom\">
                {% endif %}
                <span class=\"btn btn-default btn-file\">
                    {{ form_widget(form.profilePicture) }}
                </span>
{#                <input type=\"file\" class=\"text-center center-block file-upload\">#}
            </div>

        </div><!--/col-3-->
        <div class=\"col-sm-9 content-input\">

            <div class=\"tab-content\">
                <div class=\"tab-pane active\" id=\"home\">
                    <hr>
                        <div class=\"form-group\">

                            <div class=\"col-xs-6\">
                                    {{ form_row(form.name) }}
                            </div>
                        </div>
                        <div class=\"form-group\">

                            <div class=\"col-xs-6\">
                                {{ form_row(form.email) }}
                            </div>
                        </div>

                        <div class=\"form-group\">

                            <div class=\"col-xs-6\">
                                {{ form_row(form.projects) }}
                            </div>
                        </div>

                        <div class=\"form-group\">
                            <div class=\"col-xs-6\">
                                {{ form_row(form.countries) }}
                            </div>
                        </div>
                        <button class=\"btn btn-primary\">{{ button|default('Send') }}</button>
                        {{ form_end(form) }}
        </div><!--/tab-content-->

    </div><!--/col-9-->
</div><!--/row-->
    </div>
</div>", "alstom/clients/_form-client.html.twig", "C:\\Users\\L_200606688\\OneDrive - Alstom\\data-platform\\trb-platform\\templates\\alstom\\clients\\_form-client.html.twig");
    }
}
