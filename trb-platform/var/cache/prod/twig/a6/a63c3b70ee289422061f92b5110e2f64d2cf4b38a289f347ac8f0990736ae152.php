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

/* alstom/clients/show-clients.html.twig */
class __TwigTemplate_52704a8708f3b0581aa8e1727d75cd1f326a9be406eee18d47585c72a69f4e09 extends \Twig\Template
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
        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/clients/show-clients.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 4
    public function block_body($context, array $blocks = [])
    {
        // line 5
        echo "        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4 jumbotron\">
            <section class=\"card mt-3\">
                <a class=\"btn-edit\" href=\"";
        // line 7
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-client", ["id" => twig_get_attribute($this->env, $this->source, ($context["client"] ?? null), "id", [], "any", false, false, false, 7)]), "html", null, true);
        echo "\"><button class=\"btn btn-secondary \"><i class=\"fas fa-user-edit\"></i></button></a>
                <div class=\"background-panel-client\">

                    <figure class=\"panel meta\">
                        <picture class=\"picture-client\">
                            ";
        // line 12
        if (twig_test_empty(twig_get_attribute($this->env, $this->source, ($context["client"] ?? null), "filename", [], "any", false, false, false, 12))) {
            // line 13
            echo "                                <img class=\"avatar\" src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/clients/avatar-client.svg"), "html", null, true);
            echo "\" alt=\"\">
                            ";
        } else {
            // line 15
            echo "                                <img class=\"img-fluid\" src=\"../build/img/clients/";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["client"] ?? null), "filename", [], "any", false, false, false, 15), "html", null, true);
            echo "\" alt=\"card-img-top\">
                            ";
        }
        // line 17
        echo "                        </picture>
                        <figcaption>
                            <h1 class=\"name\" >";
        // line 19
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["client"] ?? null), "name", [], "any", false, false, false, 19)), "html", null, true);
        echo "</h1>
                            <p class=\"item-show-client col-4 title\">";
        // line 20
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["client"] ?? null), "countries", [], "any", false, false, false, 20));
        foreach ($context['_seq'] as $context["_key"] => $context["country"]) {
            // line 21
            echo "                                    <p class=\"flag flag-";
            echo twig_escape_filter($this->env, twig_lower_filter($this->env, twig_get_attribute($this->env, $this->source, $context["country"], "iso", [], "any", false, false, false, 21)), "html", null, true);
            echo " flag-country-client\"></p>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['country'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 22
        echo "</p>
                        </figcaption>
                    </figure>

                </div>

                <div class=\"border-separate-picture-info\"></div>
                <dv class=\"panel info\">
                    <dl class=\"skillz\">
                        <dt><i class=\"fas fa-at\"></i>   </dt>
                        <dd>";
        // line 32
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["client"] ?? null), "email", [], "any", false, false, false, 32), "html", null, true);
        echo "</dd>
                        <dt><i class=\"fas fa-project-diagram\"></i>

                            </dt>
                        <dd>
                            ";
        // line 37
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["client"] ?? null), "projects", [], "any", false, false, false, 37));
        foreach ($context['_seq'] as $context["_key"] => $context["project"]) {
            // line 38
            echo "                                <p> ";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["project"], "name", [], "any", false, false, false, 38), "html", null, true);
            echo " </p>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['project'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 40
        echo "                        </dd>
                        <dt><i class=\"fas fa-train\"></i></dt>
                        <dd>";
        // line 42
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["client"] ?? null), "trains", [], "any", false, false, false, 42), "html", null, true);
        echo "</dd>

                    </dl>

                </dv>

            </section>

        </main>

";
    }

    // line 53
    public function block_javascripts($context, array $blocks = [])
    {
        // line 54
        echo "    <script>
    </script>
";
    }

    public function getTemplateName()
    {
        return "alstom/clients/show-clients.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  150 => 54,  147 => 53,  132 => 42,  128 => 40,  119 => 38,  115 => 37,  107 => 32,  95 => 22,  86 => 21,  82 => 20,  78 => 19,  74 => 17,  68 => 15,  62 => 13,  60 => 12,  52 => 7,  48 => 5,  45 => 4,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "alstom/clients/show-clients.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\clients\\show-clients.html.twig");
    }
}
