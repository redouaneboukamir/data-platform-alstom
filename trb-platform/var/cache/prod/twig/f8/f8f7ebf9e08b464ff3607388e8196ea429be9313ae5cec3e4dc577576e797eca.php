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

/* alstom/trains/trains.html.twig */
class __TwigTemplate_7c10e9e48a3e786e25d09cf9f43caff6618e296a880090a00e6b2f260120e716 extends \Twig\Template
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
        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/trains/trains.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_body($context, array $blocks = [])
    {
        // line 4
        echo "    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
            <h2><i class=\"fa fa-angle-right\"></i> Trains</h2>
            <a href=\"";
        // line 7
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.create-train");
        echo "\"><button class=\"btn btn-primary\">New</button></a>
        </div>
        ";
        // line 9
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["app"] ?? null), "flashes", [0 => "success"], "method", false, false, false, 9));
        foreach ($context['_seq'] as $context["_key"] => $context["message"]) {
            // line 10
            echo "            <div class=\"alert alert-success\">
                ";
            // line 11
            echo twig_escape_filter($this->env, $context["message"], "html", null, true);
            echo "
            </div>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['message'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 14
        echo "        <section id=\"unseen\">
            <div class=\"pull-left search\">
                ";
        // line 16
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_start');
        echo "
                ";
        // line 17
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "name_train", [], "any", false, false, false, 17), 'row');
        echo "
                ";
        // line 18
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_end');
        echo "
            </div>
            <table class=\"table table-condensed table-content\">
                ";
        // line 22
        echo "                <thead>
                <tr class=\"title-table\">
                    <th scope=\"col\">Name</th>
                    <th scope=\"col\" class=\"\">Projects</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                ";
        // line 30
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["trains"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["train"]) {
            // line 31
            echo "                    <tr class=\"td-table\">
                        <td class=\"mt-4\"><a href=\"";
            // line 32
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.show-train", ["id" => twig_get_attribute($this->env, $this->source, $context["train"], "id", [], "any", false, false, false, 32)]), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["train"], "name", [], "any", false, false, false, 32), "html", null, true);
            echo "</td>
                        <td>";
            // line 33
            echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["train"], "Projects", [], "any", false, false, false, 33), "name", [], "any", false, false, false, 33)), "html", null, true);
            echo "</td>
                        <td class=\"content-btn-edit-delete\">
                            <a href=\"";
            // line 35
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-train", ["id" => twig_get_attribute($this->env, $this->source, $context["train"], "id", [], "any", false, false, false, 35)]), "html", null, true);
            echo "\"><i class=\"fas fa-edit\"></i></a>
                            <form method=\"post\" action=\"";
            // line 36
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.delete-train", ["id" => twig_get_attribute($this->env, $this->source, $context["train"], "id", [], "any", false, false, false, 36)]), "html", null, true);
            echo "\" onsubmit=\"return confirm('Are you sure to delete this train?')\">
                                <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
                                <input type=\"hidden\" name=\"_token\" value=\"";
            // line 38
            echo twig_escape_filter($this->env, $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken(("delete" . twig_get_attribute($this->env, $this->source, $context["train"], "id", [], "any", false, false, false, 38))), "html", null, true);
            echo "\">
                                <button class=\"btn btn-danger btn-delete-client\"><i class=\"fas fa-trash-alt\"></i></button>
                            </form>
                        </td>
                    </tr>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['train'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 44
        echo "                </tbody>
            </table>
        </section>
    </main>
";
    }

    public function getTemplateName()
    {
        return "alstom/trains/trains.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  140 => 44,  128 => 38,  123 => 36,  119 => 35,  114 => 33,  108 => 32,  105 => 31,  101 => 30,  91 => 22,  85 => 18,  81 => 17,  77 => 16,  73 => 14,  64 => 11,  61 => 10,  57 => 9,  52 => 7,  47 => 4,  44 => 3,  34 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "alstom/trains/trains.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\trains\\trains.html.twig");
    }
}
