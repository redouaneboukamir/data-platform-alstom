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

/* alstom/clients/create-client.html.twig */
class __TwigTemplate_3e2ccc64faa76c8de7831814c5e08e562fa30558c50cffac2e4b6ff0b8454d63 extends \Twig\Template
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
        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/clients/create-client.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 2
    public function block_body($context, array $blocks = [])
    {
        // line 3
        echo "                <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
                    <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
                        <h1>Add client</h1>
                    </div>
                    <div class=\"jumbotron content-form-client\">
                        ";
        // line 8
        echo twig_include($this->env, $context, "alstom/clients/_form-client.html.twig", ["form" => ($context["form"] ?? null), "button" => "Create"]);
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
        return "alstom/clients/create-client.html.twig";
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
        return new Source("", "alstom/clients/create-client.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\clients\\create-client.html.twig");
    }
}
