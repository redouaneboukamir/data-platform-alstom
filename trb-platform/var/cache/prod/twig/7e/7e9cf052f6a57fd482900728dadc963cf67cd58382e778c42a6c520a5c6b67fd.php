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

/* forbidden.html.twig */
class __TwigTemplate_1b27ea93f972403349b02d918372ca8971a12f9db50fc395ef043868178e66e8 extends \Twig\Template
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
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("base.html.twig", "forbidden.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_body($context, array $blocks = [])
    {
        // line 4
        echo "    <div id=\"notfound\">
        <div class=\"notfound\">
            <div class=\"notfound-404\">
                <img src=";
        // line 7
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/logo-alstom.svg"), "html", null, true);
        echo " alt=\"Logo alstom\">
                <h2>403 - Access denied</h2>
            </div>
            <a href=\"/\">Go TO Homepage</a>
        </div>
    </div>
";
    }

    // line 15
    public function block_javascripts($context, array $blocks = [])
    {
        // line 16
        echo "
";
    }

    public function getTemplateName()
    {
        return "forbidden.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  67 => 16,  64 => 15,  53 => 7,  48 => 4,  45 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "forbidden.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\forbidden.html.twig");
    }
}
