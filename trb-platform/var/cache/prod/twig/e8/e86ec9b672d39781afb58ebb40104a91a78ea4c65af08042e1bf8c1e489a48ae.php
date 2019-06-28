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

/* client/trains/_form-train.html.twig */
class __TwigTemplate_908c83c04cb2bf11d321dae8ffd67dc2b9e677ee6535262fdecfd43b22c12c88 extends \Twig\Template
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
<div class=\"row\">
    <div class=\"col-md-10\">";
        // line 6
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "name", [], "any", false, false, false, 6), 'row');
        echo "</div>
    <div class=\"col-md-10\">";
        // line 7
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "projects", [], "any", false, false, false, 7), 'row');
        echo "</div>
";
        // line 9
        echo "
</div>
<button class=\"btn btn-primary\">";
        // line 11
        echo twig_escape_filter($this->env, (((isset($context["button"]) || array_key_exists("button", $context))) ? (_twig_default_filter(($context["button"] ?? null), "Send")) : ("Send")), "html", null, true);
        echo "</button>
";
        // line 12
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_end');
        echo "

";
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
        return "client/trains/_form-train.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  69 => 2,  66 => 1,  59 => 12,  55 => 11,  51 => 9,  47 => 7,  43 => 6,  38 => 4,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "client/trains/_form-train.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\client\\trains\\_form-train.html.twig");
    }
}
