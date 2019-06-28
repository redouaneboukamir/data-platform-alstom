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

/* client/trains/show-train.html.twig */
class __TwigTemplate_bb37c57adbe11c8db66b25355f16e5e22f84ee2f6b676f6d791229d53644d07f extends \Twig\Template
{
    private $source;

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "alstom/index.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("alstom/index.html.twig", "client/trains/show-train.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 4
    public function block_body($context, array $blocks = [])
    {
        // line 5
        echo "
    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">

        <div class=\"card content-train\">
            <a class=\"btn-edit\" href=\"";
        // line 9
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("client.edit-train", ["id" => twig_get_attribute($this->env, $this->source, ($context["train"] ?? null), "id", [], "any", false, false, false, 9)]), "html", null, true);
        echo "\"><button class=\"btn btn-secondary \"><i class=\"fas fa-edit\"></i></button></a>

            <figure class=\"panel meta\">
                ";
        // line 12
        if ((twig_get_attribute($this->env, $this->source, ($context["train"] ?? null), "trainType", [], "any", false, false, false, 12) == "train")) {
            // line 13
            echo "                    <div class=\"img img-fluid\">
                        <img src=\"";
            // line 14
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/train-select.svg"), "html", null, true);
            echo "\" alt=\"\">
                    </div>
                ";
        } else {
            // line 17
            echo "                    <div class=\"img img-fluid\">
                        <img src=\"";
            // line 18
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/locomotive-select.svg"), "html", null, true);
            echo "\" alt=\"\">
                    </div>
                ";
        }
        // line 21
        echo "                <figcaption>
                    <h2 class=\"name\" style=\"font-weight: bold\">";
        // line 22
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["train"] ?? null), "name", [], "any", false, false, false, 22)), "html", null, true);
        echo "</h2>
                </figcaption>
            </figure>

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
                                <th scope=\"col\">Project :</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class=\"col-md-12 title-table\">
                                <td class=\"td-table\">
                                    <a href=\"";
        // line 53
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.project-show", ["id" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["train"] ?? null), "projects", [], "any", false, false, false, 53), "id", [], "any", false, false, false, 53)]), "html", null, true);
        echo "\">
                                        ";
        // line 54
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["train"] ?? null), "projects", [], "any", false, false, false, 54), "name", [], "any", false, false, false, 54), "html", null, true);
        echo "
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
        </div>

    </main>

";
    }

    public function getTemplateName()
    {
        return "client/trains/show-train.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  120 => 54,  116 => 53,  82 => 22,  79 => 21,  73 => 18,  70 => 17,  64 => 14,  61 => 13,  59 => 12,  53 => 9,  47 => 5,  44 => 4,  34 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "client/trains/show-train.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\client\\trains\\show-train.html.twig");
    }
}
