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

/* alstom/projects/show-project.html.twig */
class __TwigTemplate_03ad5f1b56292269950b39d8b7244789fc6d9267be58ff23826e6a945337adce extends \Twig\Template
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
        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/projects/show-project.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 4
    public function block_body($context, array $blocks = [])
    {
        // line 5
        echo "    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
        <section class=\"card mt-3\">
            <a class=\"btn-edit\" href=\"";
        // line 7
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-project", ["id" => twig_get_attribute($this->env, $this->source, ($context["project"] ?? null), "id", [], "any", false, false, false, 7)]), "html", null, true);
        echo "\"><button class=\"btn btn-secondary \"><i class=\"fas fa-edit\"></i></button></a>

            <div class=\"background-panel-project\">

                <figure class=\"panel meta\">
                <div class=\"img-description-project\">
                    ";
        // line 13
        if (twig_test_empty(twig_get_attribute($this->env, $this->source, ($context["project"] ?? null), "filename", [], "any", false, false, false, 13))) {
            // line 14
            echo "                        <img id=\"img-project\" class=\"img-project img-fluid\" src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/projects/project-background.jpg"), "html", null, true);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["project"] ?? null), "name", [], "any", false, false, false, 14), "html", null, true);
            echo "\">
                    ";
        } else {
            // line 16
            echo "                        <img id=\"img-project\" class=\"img-project img-fluid\" src=\"../build/img/projects/";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["project"] ?? null), "filename", [], "any", false, false, false, 16), "html", null, true);
            echo "\">
                    ";
        }
        // line 18
        echo "                </div>
                    <figcaption>
                        <h2 class=\"name\" style=\"font-weight: bold\">";
        // line 20
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["project"] ?? null), "name", [], "any", false, false, false, 20)), "html", null, true);
        echo "</h2>
                    </figcaption>
                </figure>

            </div>

            <div class=\"border-separate-picture-info\"></div>
            <div class=\"panel info\">
                <div class=\"row content-panel mt mb\">
                    <div class=\"col-md-9\">
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
                    <div class=\"col-md-3\">
                        <table class=\"table table-striped table-show-project table-content\">
                            <thead class=\"thead-dark\">
                            <tr>
                                <th scope=\"col\">Clients :</th>
                            </tr>
                            </thead>
                            <tbody>
                            ";
        // line 51
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["project"] ?? null), "clients", [], "any", false, false, false, 51));
        foreach ($context['_seq'] as $context["_key"] => $context["client"]) {
            // line 52
            echo "                                <tr class=\"col-md-12 title-table\">
                                    <td class=\"td-table\">
                                        <a href=\"";
            // line 54
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.client-show", ["id" => twig_get_attribute($this->env, $this->source, $context["client"], "id", [], "any", false, false, false, 54)]), "html", null, true);
            echo "\">
                                            ";
            // line 55
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["client"], "name", [], "any", false, false, false, 55), "html", null, true);
            echo "
                                        </a>
                                    </td>
                                </tr>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['client'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 60
        echo "                            </tbody>
                        </table>
                        <table class=\"table table-striped table-show-project table-content\">
                            <thead class=\"thead-dark\">
                            <tr>
                                <th scope=\"col\">Engineers :</th>
                            </tr>
                            </thead>
                            <tbody>
                            ";
        // line 69
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["project"] ?? null), "engineers", [], "any", false, false, false, 69));
        foreach ($context['_seq'] as $context["_key"] => $context["engineer"]) {
            // line 70
            echo "                                <tr class=\"col-md-12 title-table\">
                                    <td class=\"td-table\">
                                        <a href=\"";
            // line 72
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.engineer-show", ["id" => twig_get_attribute($this->env, $this->source, $context["engineer"], "id", [], "any", false, false, false, 72)]), "html", null, true);
            echo "\">
                                            ";
            // line 73
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["engineer"], "name", [], "any", false, false, false, 73), "html", null, true);
            echo "
                                        </a>
                                    </td>
                                </tr>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['engineer'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 78
        echo "                            </tbody>
                        </table>

                    </div>
                </div>
                </div>

            </div>

        </section>

    </main>
    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">

    </main>

";
    }

    // line 96
    public function block_javascripts($context, array $blocks = [])
    {
        // line 97
        echo "    <script>
        let click = false;
        \$('#img-project').click(function(){

            if(click == false){
                \$('.img-description-project').addClass('clicked');
                click = true;
            }else{
                \$('.img-description-project').removeClass('clicked');
                click = false;
            }

        });

    </script>
";
    }

    public function getTemplateName()
    {
        return "alstom/projects/show-project.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  195 => 97,  192 => 96,  172 => 78,  161 => 73,  157 => 72,  153 => 70,  149 => 69,  138 => 60,  127 => 55,  123 => 54,  119 => 52,  115 => 51,  81 => 20,  77 => 18,  71 => 16,  63 => 14,  61 => 13,  52 => 7,  48 => 5,  45 => 4,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "alstom/projects/show-project.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\projects\\show-project.html.twig");
    }
}
