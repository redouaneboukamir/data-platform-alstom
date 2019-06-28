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

/* alstom/trains/edit-train.html.twig */
class __TwigTemplate_d8143ee90a7e277647061f221b488f3c24e2e7b25984ac1c859239e3d502ef0f extends \Twig\Template
{
    private $source;

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'body' => [$this, 'block_body'],
            'javascripts' => [$this, 'block_javascripts'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "alstom/index.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/trains/edit-train.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 2
    public function block_body($context, array $blocks = [])
    {
        // line 3
        echo "                    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
                        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
                            <h1>Edit train</h1>
                        </div>

                        <div class=\"jumbotron content-form-client\">
                            ";
        // line 9
        echo twig_include($this->env, $context, "alstom/trains/_form-train.html.twig", ["form" => ($context["form"] ?? null), "button" => "Edit"]);
        echo "
                        </div>

                        </div>
                    </main>
                ";
    }

    // line 16
    public function block_javascripts($context, array $blocks = [])
    {
        // line 17
        echo "
    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js\"></script>
    <script>

        // \$('select').select2();


    </script>
";
    }

    public function getTemplateName()
    {
        return "alstom/trains/edit-train.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  69 => 17,  66 => 16,  56 => 9,  48 => 3,  45 => 2,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "alstom/trains/edit-train.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\trains\\edit-train.html.twig");
    }
}
