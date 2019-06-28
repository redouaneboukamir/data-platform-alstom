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

/* alstom/projects/_form-project.html.twig */
class __TwigTemplate_bc6d4a48b94537382860cd7be1b7e96c137ed89bd6dc0cb6eebe5c5af35eabf8 extends \Twig\Template
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
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_start');
        echo "
<div class=\"text-left\">
    <div class=\"row\">
        <div class=\"col-md-12\">";
        // line 7
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "name", [], "any", false, false, false, 7), 'row');
        echo "</div>
        <div class=\"col-md-12\">";
        // line 8
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "clients", [], "any", false, false, false, 8), 'row');
        echo "</div>
        <div class=\"col-md-12\">";
        // line 9
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "engineers", [], "any", false, false, false, 9), 'row');
        echo "</div>
        <div  class=\"col-md-12\">";
        // line 10
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "profilePicture", [], "any", false, false, false, 10), 'row');
        echo "</div>
    </div>

    <div class=\" content-img-form-project col-12\">
        ";
        // line 14
        if ((($context["button"] ?? null) == "Edit")) {
            // line 15
            echo "            ";
            if (twig_get_attribute($this->env, $this->source, ($context["project"] ?? null), "filename", [], "any", false, false, false, 15)) {
                // line 16
                echo "                <img class=\"img-project-form img-fluid\" src=\"/build/img/projects/";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["project"] ?? null), "filename", [], "any", false, false, false, 16), "html", null, true);
                echo "\">
            ";
            } else {
                // line 18
                echo "                <img class=\"img-project-form img-fluid\" src=\"";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/projects/project-background.jpg"), "html", null, true);
                echo "\" alt=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["project"] ?? null), "name", [], "any", false, false, false, 18), "html", null, true);
                echo "\">
            ";
            }
            // line 20
            echo "
        ";
        } else {
            // line 22
            echo "            <img id=\"img-project-form\" class=\"img-project-form img-fluid\" src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/projects/project-background.jpg"), "html", null, true);
            echo "\">
        ";
        }
        // line 24
        echo "    </div>

        ";
        // line 26
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "profilePicture", [], "any", false, false, false, 26), 'row');
        echo "

    <button class=\"btn btn-primary mt-4\">";
        // line 28
        echo twig_escape_filter($this->env, (((isset($context["button"]) || array_key_exists("button", $context))) ? (_twig_default_filter(($context["button"] ?? null), "Send")) : ("Send")), "html", null, true);
        echo "</button>
</div>
    ";
        // line 30
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_end');
    }

    // line 1
    public function block_stylesheets($context, array $blocks = [])
    {
        // line 2
        echo "    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css\">
";
    }

    public function getTemplateName()
    {
        return "alstom/projects/_form-project.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  113 => 2,  110 => 1,  106 => 30,  101 => 28,  96 => 26,  92 => 24,  86 => 22,  82 => 20,  74 => 18,  68 => 16,  65 => 15,  63 => 14,  56 => 10,  52 => 9,  48 => 8,  44 => 7,  38 => 4,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "alstom/projects/_form-project.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\projects\\_form-project.html.twig");
    }
}
