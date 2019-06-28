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

/* home/home.html.twig */
class __TwigTemplate_0c04e95fdc5d5a7c1e9e57d2505b7c9676d0b472e34b72d570ea79617d9ddde4 extends \Twig\Template
{
    private $source;

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'body' => [$this, 'block_body'],
            'formulaire' => [$this, 'block_formulaire'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("base.html.twig", "home/home.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_body($context, array $blocks = [])
    {
        // line 4
        echo "
    <div class=\"content-formlogin-background\">
        <div class=\"content-login col-lg-4 col-md-6 col-sm-8 col-xs-8\">
            <div class=\"container\">
                <img src=\"build/img/logo-alstom.svg\" alt=\"Alstom logo\">
                ";
        // line 9
        $this->displayBlock('formulaire', $context, $blocks);
        // line 11
        echo "            </div>
        </div>
    </div>
";
    }

    // line 9
    public function block_formulaire($context, array $blocks = [])
    {
        // line 10
        echo "                ";
    }

    public function getTemplateName()
    {
        return "home/home.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  67 => 10,  64 => 9,  57 => 11,  55 => 9,  48 => 4,  45 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "home/home.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\home\\home.html.twig");
    }
}
