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

/* alstom/clients/edit-client.html.twig */
class __TwigTemplate_c7c13c74a0b23273fac75f64e17268a391800a8756067e934551e350d9bd1d33 extends \Twig\Template
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
        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/clients/edit-client.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 2
    public function block_body($context, array $blocks = [])
    {
        // line 3
        echo "                    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
                        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
                            <h1>Edit client</h1>
                        </div>
                        <div class=\"jumbotron content-form-client\">
                            ";
        // line 8
        echo twig_include($this->env, $context, "alstom/clients/_form-client.html.twig", ["form" => ($context["form"] ?? null), "button" => "Edit"]);
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
";
        // line 18
        echo "    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js\"></script>
    <script>
        \$('select').select2();
        \$(document).ready(function() {

            var readURL = function(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        \$('.avatar').attr('src', e.target.result);
                        console.log(e.target.result);
                    }

                    reader.readAsDataURL(input.files[0]);
                }
            }

            \$(\".file-upload\").on('change', function(){
                readURL(this);
            });
        });

    </script>
";
    }

    public function getTemplateName()
    {
        return "alstom/clients/edit-client.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  71 => 18,  68 => 16,  65 => 15,  55 => 8,  48 => 3,  45 => 2,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "alstom/clients/edit-client.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\clients\\edit-client.html.twig");
    }
}
