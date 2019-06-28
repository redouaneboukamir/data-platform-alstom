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

/* alstom/engineers/show-engineer.html.twig */
class __TwigTemplate_ecf0e2e74f9b7d4600ba3d8ce0ab35ce455e212705b9a72d7591358e1da17313 extends \Twig\Template
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
        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/engineers/show-engineer.html.twig", 1);
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
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-engineer", ["id" => twig_get_attribute($this->env, $this->source, ($context["engineer"] ?? null), "id", [], "any", false, false, false, 7)]), "html", null, true);
        echo "\"><button class=\"btn btn-secondary \"><i class=\"fas fa-user-edit\"></i></button></a>
            <div class=\"background-panel-engin\">

                <figure class=\"panel meta\">
                    <picture class=\"picture-client\">
                        ";
        // line 12
        if (twig_test_empty(twig_get_attribute($this->env, $this->source, ($context["engineer"] ?? null), "filename", [], "any", false, false, false, 12))) {
            // line 13
            echo "                            <img class=\"avatar\" src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/engineers/avatar-engineer.svg"), "html", null, true);
            echo "\" alt=\"\">
                        ";
        } else {
            // line 15
            echo "                            <img class=\"img-fluid\" src=\"/build/img/engineers/";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["engineer"] ?? null), "filename", [], "any", false, false, false, 15), "html", null, true);
            echo "\" alt=\"card-img-top\">
                        ";
        }
        // line 17
        echo "                    </picture>

                    <figcaption>
                        <h2 class=\"name\" style=\"font-weight: bold\">";
        // line 20
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["engineer"] ?? null), "name", [], "any", false, false, false, 20)), "html", null, true);
        echo "</h2>
                        <h2 class=\"name\">";
        // line 21
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["engineer"] ?? null), "surname", [], "any", false, false, false, 21)), "html", null, true);
        echo "</h2>
                    </figcaption>
                </figure>

            </div>

            <div class=\"border-separate-picture-info\"></div>
            <dv class=\"panel info\">
                <dl class=\"skillz\">
                    <dt>Numero badge   </dt>
                    <dd>";
        // line 31
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["engineer"] ?? null), "numBadge", [], "any", false, false, false, 31), "html", null, true);
        echo "</dd>
                    <dt><i class=\"fas fa-project-diagram\"></i>

                    </dt>
                    <dd>
                        ";
        // line 36
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["engineer"] ?? null), "projects", [], "any", false, false, false, 36));
        foreach ($context['_seq'] as $context["_key"] => $context["project"]) {
            // line 37
            echo "                            <p> ";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["project"], "name", [], "any", false, false, false, 37), "html", null, true);
            echo " </p>
                        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['project'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 39
        echo "                    </dd>

                </dl>

            </dv>

        </section>

    </main>

";
    }

    public function getTemplateName()
    {
        return "alstom/engineers/show-engineer.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  116 => 39,  107 => 37,  103 => 36,  95 => 31,  82 => 21,  78 => 20,  73 => 17,  67 => 15,  61 => 13,  59 => 12,  51 => 7,  47 => 5,  44 => 4,  34 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "alstom/engineers/show-engineer.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\engineers\\show-engineer.html.twig");
    }
}
