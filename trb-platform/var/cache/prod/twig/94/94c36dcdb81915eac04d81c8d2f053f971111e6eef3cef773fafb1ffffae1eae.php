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

/* client/trains/edit-train.html.twig */
class __TwigTemplate_325ff717180ba38b8bcf552c60e5f4185b4eaed67744cbe4d6611c723f62726e extends \Twig\Template
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
        return "client/index.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("client/index.html.twig", "client/trains/edit-train.html.twig", 1);
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
        // line 8
        echo twig_include($this->env, $context, "client/trains/_form-train.html.twig", ["form" => ($context["form"] ?? null), "button" => "Edit"]);
        echo "
                        </div>

                        </div>
                    </main>
                ";
    }

    // line 15
    public function block_javascripts($context, array $blocks = [])
    {
        // line 16
        echo "
    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js\"></script>
    <script>
        \$('select').select2();
    </script>
";
    }

    public function getTemplateName()
    {
        return "client/trains/edit-train.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  68 => 16,  65 => 15,  55 => 8,  48 => 3,  45 => 2,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "client/trains/edit-train.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\client\\trains\\edit-train.html.twig");
    }
}
