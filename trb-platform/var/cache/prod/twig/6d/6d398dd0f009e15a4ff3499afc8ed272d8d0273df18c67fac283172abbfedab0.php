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

/* home/login.html.twig */
class __TwigTemplate_612b11339ad7c27679c029f74e6b503d0808a5b4c78f7c8268d700b9c8e48469 extends \Twig\Template
{
    private $source;

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'formulaire' => [$this, 'block_formulaire'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "home/home.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("home/home.html.twig", "home/login.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_formulaire($context, array $blocks = [])
    {
        // line 4
        echo "

        ";
        // line 6
        if (($context["error"] ?? null)) {
            // line 7
            echo "            <div class=\"alert alert-danger\">
                ";
            // line 8
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["error"] ?? null), "messageKey", [], "any", false, false, false, 8), "html", null, true);
            echo "
            </div>
        ";
        }
        // line 11
        echo "        <form action=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("login");
        echo "\" method=\"post\" class=\"formulaire-login\">

            <div class=\"form-group\">
                <label for=\"email\">Email</label>
                <input type=\"email\" id=\"email\" name=\"_username\" class=\"form-control\" value=\"";
        // line 15
        echo twig_escape_filter($this->env, ($context["last_username"] ?? null), "html", null, true);
        echo "\">
            </div>
            <div class=\"form-group\">
                <label for=\"password\">Password</label>
                <input type=\"password\" id=\"password\" name=\"_password\" class=\"form-control\">
            </div>

            <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>
        </form>

";
    }

    public function getTemplateName()
    {
        return "home/login.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  70 => 15,  62 => 11,  56 => 8,  53 => 7,  51 => 6,  47 => 4,  44 => 3,  34 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "home/login.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\home\\login.html.twig");
    }
}
