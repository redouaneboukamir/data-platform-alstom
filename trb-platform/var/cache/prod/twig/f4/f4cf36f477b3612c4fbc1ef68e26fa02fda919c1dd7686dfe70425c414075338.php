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

/* client/user/create-user.html.twig */
class __TwigTemplate_e37b5e7510206e83b0c89a9beca9772eb9ce45cca40e53bd7772d0fbf84d64df extends \Twig\Template
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
        $this->parent = $this->loadTemplate("client/index.html.twig", "client/user/create-user.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 2
    public function block_body($context, array $blocks = [])
    {
        // line 3
        echo "                <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
                    <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
                        <h2><i class=\"fa fa-angle-right\"></i> Create User</h2>
                    </div>
                    <div class=\"jumbotron content-form-client\">
";
        // line 9
        echo "

                        ";
        // line 11
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_start');
        echo "
                        <div class=\"form-group\">

                            <div class=\"col-xs-6\">
                                ";
        // line 15
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "clientUser", [], "any", false, false, false, 15), "name", [], "any", false, false, false, 15), 'row');
        echo "
                                ";
        // line 16
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "clientUser", [], "any", false, false, false, 16), "email", [], "any", false, false, false, 16), 'row');
        echo "
                                ";
        // line 17
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "email", [], "any", false, false, false, 17), 'row');
        echo "
                                <div style=\"display: none\">
                                    ";
        // line 19
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "Client", [], "any", false, false, false, 19), 'row');
        echo "
                                    ";
        // line 20
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "clientUser", [], "any", false, false, false, 20), "projects", [], "any", false, false, false, 20), 'row');
        echo "
                                </div>
                            </div>
                        </div>

                        <div class=\"form-group\">
                            <div class=\"col-xs-6\">
                                ";
        // line 27
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "password", [], "any", false, false, false, 27), 'row');
        echo "
                            </div>
                        </div>
                        <button class=\"btn btn-primary\">";
        // line 30
        echo twig_escape_filter($this->env, (((isset($context["button"]) || array_key_exists("button", $context))) ? (_twig_default_filter(($context["button"] ?? null), "Send")) : ("Send")), "html", null, true);
        echo "</button>
                        ";
        // line 31
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_end');
        echo "
                    </div>

                    </div>
                </main>
            ";
    }

    // line 38
    public function block_javascripts($context, array $blocks = [])
    {
        // line 39
        echo "
";
    }

    public function getTemplateName()
    {
        return "client/user/create-user.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  116 => 39,  113 => 38,  103 => 31,  99 => 30,  93 => 27,  83 => 20,  79 => 19,  74 => 17,  70 => 16,  66 => 15,  59 => 11,  55 => 9,  48 => 3,  45 => 2,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "client/user/create-user.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\client\\user\\create-user.html.twig");
    }
}
