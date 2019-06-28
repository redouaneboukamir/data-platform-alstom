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

/* alstom/clients/_form-client.html.twig */
class __TwigTemplate_c36f3a39988d75f8a4687d575b01a25fcbdf2d3a30a3dda935a304ba6c482843 extends \Twig\Template
{
    private $source;

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "

<div class=\"container bootstrap snippet\">
    <div class=\"row\">
        <div class=\"col-sm-3\"><!--left col-->

            ";
        // line 7
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_start');
        echo "
            <div class=\"text-center content-img-form\">
                ";
        // line 9
        if ((($context["button"] ?? null) == "Edit")) {
            // line 10
            echo "                        ";
            if (twig_get_attribute($this->env, $this->source, ($context["client"] ?? null), "filename", [], "any", false, false, false, 10)) {
                // line 11
                echo "                            <img class=\"img-fluid\" src=\"/build/img/clients/";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["client"] ?? null), "filename", [], "any", false, false, false, 11), "html", null, true);
                echo "\" alt=\"profile picture client\">
                        ";
            } else {
                // line 13
                echo "                            <img src=\"";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/clients/avatar-client.svg"), "html", null, true);
                echo "\" class=\"avatar img-circle img-thumbnail\" alt=\"avatar client alstom\">
                        ";
            }
            // line 15
            echo "                    ";
        } else {
            // line 16
            echo "                        <img src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/clients/avatar-client.svg"), "html", null, true);
            echo "\" class=\"avatar img-circle img-thumbnail\" alt=\"avatar client alstom\">
                ";
        }
        // line 18
        echo "                <span class=\"btn btn-default btn-file\">
                    ";
        // line 19
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "profilePicture", [], "any", false, false, false, 19), 'widget');
        echo "
                </span>
";
        // line 22
        echo "            </div>

        </div><!--/col-3-->
        <div class=\"col-sm-9 content-input\">

            <div class=\"tab-content\">
                <div class=\"tab-pane active\" id=\"home\">
                    <hr>
                        <div class=\"form-group\">

                            <div class=\"col-xs-6\">
                                    ";
        // line 33
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "name", [], "any", false, false, false, 33), 'row');
        echo "
                            </div>
                        </div>
                        <div class=\"form-group\">

                            <div class=\"col-xs-6\">
                                ";
        // line 39
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "email", [], "any", false, false, false, 39), 'row');
        echo "
                            </div>
                        </div>

                        <div class=\"form-group\">

                            <div class=\"col-xs-6\">
                                ";
        // line 46
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "projects", [], "any", false, false, false, 46), 'row');
        echo "
                            </div>
                        </div>

                        <div class=\"form-group\">
                            <div class=\"col-xs-6\">
                                ";
        // line 52
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "countries", [], "any", false, false, false, 52), 'row');
        echo "
                            </div>
                        </div>
                        <button class=\"btn btn-primary\">";
        // line 55
        echo twig_escape_filter($this->env, (((isset($context["button"]) || array_key_exists("button", $context))) ? (_twig_default_filter(($context["button"] ?? null), "Send")) : ("Send")), "html", null, true);
        echo "</button>
                        ";
        // line 56
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_end');
        echo "
        </div><!--/tab-content-->

    </div><!--/col-9-->
</div><!--/row-->
    </div>
</div>";
    }

    public function getTemplateName()
    {
        return "alstom/clients/_form-client.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  133 => 56,  129 => 55,  123 => 52,  114 => 46,  104 => 39,  95 => 33,  82 => 22,  77 => 19,  74 => 18,  68 => 16,  65 => 15,  59 => 13,  53 => 11,  50 => 10,  48 => 9,  43 => 7,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "alstom/clients/_form-client.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\clients\\_form-client.html.twig");
    }
}
