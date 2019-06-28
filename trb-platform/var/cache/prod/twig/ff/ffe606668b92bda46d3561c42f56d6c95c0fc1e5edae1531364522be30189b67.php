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

/* client/projects/show-project.html.twig */
class __TwigTemplate_102fe5d586c6fad69b8fc368a41a0c66b9c5a469f5d753b93d4d0a4bdcd5efe6 extends \Twig\Template
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
        $this->parent = $this->loadTemplate("client/index.html.twig", "client/projects/show-project.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 4
    public function block_body($context, array $blocks = [])
    {
        // line 5
        echo "    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
        <section class=\"card mt-3\">

            <div class=\"background-panel-project\">

                <figure class=\"panel meta\">
                    <div class=\"img-description-project\">
                        ";
        // line 12
        if (twig_test_empty(twig_get_attribute($this->env, $this->source, ($context["project"] ?? null), "filename", [], "any", false, false, false, 12))) {
            // line 13
            echo "                            <img id=\"img-project\" class=\"img-project img-fluid\" src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/projects/project-background.jpg"), "html", null, true);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["project"] ?? null), "name", [], "any", false, false, false, 13), "html", null, true);
            echo "\">
                        ";
        } else {
            // line 15
            echo "                            <img id=\"img-project\" class=\"img-project img-fluid\" src=\"../build/img/projects/";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["project"] ?? null), "filename", [], "any", false, false, false, 15), "html", null, true);
            echo "\">
                        ";
        }
        // line 17
        echo "                    </div>
                    <figcaption>
                        <h2 class=\"name\" style=\"font-weight: bold\">";
        // line 19
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["project"] ?? null), "name", [], "any", false, false, false, 19)), "html", null, true);
        echo "</h2>
                    </figcaption>
                </figure>

            </div>

            <div class=\"border-separate-picture-info\"></div>
            <dv class=\"panel info\">
                <div class=\"row content-panel mt mb\">
                    <div class=\"col-md-12\">
                        <div class=\"col-md-11\">
                            <h2>Dashio is a fully responsive admin dashboard template built with Bootstrap 3.1.1 Framework</h2>
                        </div>
                        <div class=\"text-descrip-project col-md-11\">
                            <p class=\"mt\">Later, when we reached the city, and glanced down the chief avenue, smouldering in its crushed-strawberry tint, those splendid effects were repeated; for every balcony, and every fanciful bird-cage of a snuggery countersunk in the house-fronts,
                                and all the long lines of roofs were crowded with people, and each crowd was an explosion of brilliant color.</p>
                            <p >For color, and picturesqueness, and novelty, and outlandishness, and sustained interest and fascination, it was the most satisfying show I had ever seen, and I suppose I shall not have the privilege of looking upon its like again.</p>
                            <p>In the first place God made idiots. This was for practice. Then He made School Boards. --Pudd'nhead Wilson's New Calendar.</p>
                            <p>\"I pray please to give me some action (work) for I am very poor boy I have no one to help me even so father for it so it seemed in thy good sight, you give the Telegraph Office, and another work what is your wish I am very poor boy, this understand
                                what is your wish you my father I am your son this understand what is your wish.</p>
                        </div>

                    </div>
                </div>
                </div>
                <dl class=\"skillz\">
                    ";
        // line 46
        echo "                    ";
        // line 47
        echo "                    <dt><i class=\"fas fa-project-diagram\"></i>

                    </dt>
                    ";
        // line 51
        echo "                    ";
        // line 52
        echo "                    ";
        // line 53
        echo "                    ";
        // line 54
        echo "                    ";
        // line 55
        echo "
                </dl>

            </dv>

        </section>

    </main>
    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">

    </main>

";
    }

    // line 69
    public function block_javascripts($context, array $blocks = [])
    {
        // line 70
        echo "    <script>
        let click = false;
        \$('#img-project').click(function(){

            if(click == false){
                \$('.img-description-project').css('height','auto');
                click = true;
            }else{
                \$('.img-description-project').css('height','20em');
                click = false;
            }

        });

    </script>
";
    }

    public function getTemplateName()
    {
        return "client/projects/show-project.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  140 => 70,  137 => 69,  121 => 55,  119 => 54,  117 => 53,  115 => 52,  113 => 51,  108 => 47,  106 => 46,  77 => 19,  73 => 17,  67 => 15,  59 => 13,  57 => 12,  48 => 5,  45 => 4,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "client/projects/show-project.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\client\\projects\\show-project.html.twig");
    }
}
