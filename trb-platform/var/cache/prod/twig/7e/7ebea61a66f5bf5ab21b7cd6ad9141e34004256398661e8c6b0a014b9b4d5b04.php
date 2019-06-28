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
class __TwigTemplate_28ffafa8ec161a765f17298f8a5df908becb28f6bc457cfb74a4a8badb12f4f1 extends \Twig\Template
{
    private $source;

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
        // line 1
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 4
        echo "<div class=\"container bootstrap snippet\">
<div class=\"row\">
    <div class=\"col-sm-3\">

    ";
        // line 8
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_start');
        echo "
        <div class=\"text-center content-img-form\">
            ";
        // line 10
        if ((($context["button"] ?? null) == "Edit")) {
            // line 11
            echo "                ";
            if (twig_get_attribute($this->env, $this->source, ($context["engineer"] ?? null), "filename", [], "any", false, false, false, 11)) {
                // line 12
                echo "                    <img class=\"img-fluid\" src=\"../build/img/engineers/";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["engineer"] ?? null), "filename", [], "any", false, false, false, 12), "html", null, true);
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
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "profilePicture", [], "any", false, false, false, 20), 'row');
        echo "
            </span>
        </div>

    </div>
    ";
        // line 25
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "_token", [], "any", false, false, false, 25), 'row');
        echo "
    <div class=\"col-sm-9 content-input\">

        <div class=\"tab-content\">
            <div class=\"tab-pane active\" id=\"home\">
                <hr>
                <div class=\"form-group\">

                    <div class=\"col-xs-6\">
                        ";
        // line 34
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "Name", [], "any", false, false, false, 34), 'row');
        echo "
                    </div>
                </div>
                <div class=\"form-group\">

                    <div class=\"col-xs-6\">
                        ";
        // line 40
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "Surname", [], "any", false, false, false, 40), 'row');
        echo "
                    </div>
                </div>

                <div class=\"form-group\">

                    <div class=\"col-xs-6\">
                        ";
        // line 47
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "Num_Badge", [], "any", false, false, false, 47), 'row');
        echo "
                    </div>
                </div>

                <div class=\"form-group\">
                    <div class=\"col-xs-6\">
                        ";
        // line 53
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "projects", [], "any", false, false, false, 53), 'row');
        echo "
                    </div>
                </div>
                <button class=\"btn btn-primary\">";
        // line 56
        echo twig_escape_filter($this->env, (((isset($context["button"]) || array_key_exists("button", $context))) ? (_twig_default_filter(($context["button"] ?? null), "Send")) : ("Send")), "html", null, true);
        echo "</button>
                ";
        // line 57
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_end');
        echo "
            </div><!--/tab-content-->

        </div><!--/col-9-->
</div>

";
    }

    // line 1
    public function block_stylesheets($context, array $blocks = [])
    {
        // line 2
        echo "
";
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
        return array (  150 => 2,  147 => 1,  136 => 57,  132 => 56,  126 => 53,  117 => 47,  107 => 40,  98 => 34,  86 => 25,  78 => 20,  75 => 19,  69 => 17,  66 => 16,  60 => 14,  54 => 12,  51 => 11,  49 => 10,  44 => 8,  38 => 4,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "alstom/engineers/_form-engineer.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\engineers\\_form-engineer.html.twig");
    }
}
