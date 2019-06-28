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

/* alstom/evc/evc.html.twig */
class __TwigTemplate_b12eb77655c0f6ffb1cacf1571bfec9d38f3c14d71d1ff4a045b9a5d5758041b extends \Twig\Template
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
        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/evc/evc.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_body($context, array $blocks = [])
    {
        // line 4
        echo "    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
    <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
        <h2><i class=\"fa fa-angle-right\"></i> EVC</h2>
        <a href=\"";
        // line 7
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.create-evc");
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
        echo "
        <section id=\"unseen \" class=\"\">
";
        // line 21
        echo "
            <table class=\"table table-condensed table-content card-body table-full-width \">
                <thead class=\"title-table\">
                    <th class=\"\">ETCS ID</th>
                    <th scope=\"col\" class=\"th-empty\"></th>
                </thead>
                <tbody>
                ";
        // line 29
        echo "                ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["evcs"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["evc"]) {
            // line 30
            echo "                    <tr class=\"td-table\">
";
            // line 32
            echo "                        <td>";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["evc"], "ETCSID", [], "any", false, false, false, 32), "html", null, true);
            echo "</td>

";
            // line 40
            echo "                        <td class=\"content-btn-edit-delete\">
";
            // line 42
            echo "                            <form method=\"post\" action=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.delete-evc", ["id" => twig_get_attribute($this->env, $this->source, $context["evc"], "id", [], "any", false, false, false, 42)]), "html", null, true);
            echo "\" onsubmit=\"return confirm('Are you sure to delete this evc?')\">
                                <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
                                <input type=\"hidden\" name=\"_token\" value=\"";
            // line 44
            echo twig_escape_filter($this->env, $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken(("delete" . twig_get_attribute($this->env, $this->source, $context["evc"], "id", [], "any", false, false, false, 44))), "html", null, true);
            echo "\">
                                <button class=\"btn btn-danger btn-delete-client\"><i class=\"fas fa-trash-alt\"></i></button>
                            </form>
                        </td>
                    </tr>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['evc'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 50
        echo "                </tbody>
            </table>
        </section>


    </main>
";
    }

    public function getTemplateName()
    {
        return "alstom/evc/evc.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  121 => 50,  109 => 44,  103 => 42,  100 => 40,  94 => 32,  91 => 30,  86 => 29,  77 => 21,  73 => 14,  64 => 11,  61 => 10,  57 => 9,  52 => 7,  47 => 4,  44 => 3,  34 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "alstom/evc/evc.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\evc\\evc.html.twig");
    }
}
