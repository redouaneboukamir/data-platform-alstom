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

/* alstom/Baseline/create-baseline.html.Twig */
class __TwigTemplate_521a8124d4e73d107073b2afab5138f29566c1a4da973e20420ab94d5f36a90e extends \Twig\Template
{
    private $source;

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
        // line 7
        return "alstom/index.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/Baseline/create-baseline.html.Twig", 7);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 1
    public function block_stylesheets($context, array $blocks = [])
    {
        // line 2
        echo "    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css\">
";
    }

    // line 8
    public function block_body($context, array $blocks = [])
    {
        // line 9
        echo "        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
            <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
                <h1>Add Baseline</h1>
            </div>
            <div class=\"jumbotron content-form-engineer\">
                ";
        // line 14
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_start');
        echo "
                <div class=\"row\">
                    <div class=\"col-md-10\">";
        // line 16
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "name", [], "any", false, false, false, 16), 'row');
        echo "</div>

                </div>
                <button class=\"btn btn-primary mt-4\">";
        // line 19
        echo twig_escape_filter($this->env, (((isset($context["button"]) || array_key_exists("button", $context))) ? (_twig_default_filter(($context["button"] ?? null), "Send")) : ("Send")), "html", null, true);
        echo "</button>
                ";
        // line 20
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_end');
        echo "
            </div>
        </main>
    ";
    }

    // line 24
    public function block_javascripts($context, array $blocks = [])
    {
        // line 25
        echo "    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js\"></script>
    <script>
        // \$('select').select2();
    </script>
";
    }

    public function getTemplateName()
    {
        return "alstom/Baseline/create-baseline.html.Twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  90 => 25,  87 => 24,  79 => 20,  75 => 19,  69 => 16,  64 => 14,  57 => 9,  54 => 8,  49 => 2,  46 => 1,  36 => 7,);
    }

    public function getSourceContext()
    {
        return new Source("", "alstom/Baseline/create-baseline.html.Twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\Baseline\\create-baseline.html.Twig");
    }
}
