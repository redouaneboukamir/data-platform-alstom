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

/* alstom/Baseline/baseline.html.twig */
class __TwigTemplate_84746f934a3ae74ddeca66dda6f353eddcb18e88f4e463221ec9fbda130a0a64 extends \Twig\Template
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
        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/Baseline/baseline.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_body($context, array $blocks = [])
    {
        // line 4
        echo "                <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
                    <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
                        <h2><i class=\"fa fa-angle-right\"></i> Baseline</h2>
                        <a href=\"";
        // line 7
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.create-baseline");
        echo "\"><button class=\"btn btn-primary\">New</button></a>
                    </div>
                    ";
        // line 9
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["app"] ?? null), "flashes", [0 => "success"], "method", false, false, false, 9));
        foreach ($context['_seq'] as $context["_key"] => $context["message"]) {
            // line 10
            echo "                        <div class=\"alert alert-success\">
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
        echo "                    <section id=\"unseen \" class=\"\">
                        ";
        // line 16
        echo "                        ";
        // line 17
        echo "                        ";
        // line 18
        echo "                        ";
        // line 19
        echo "                        ";
        // line 20
        echo "
                        <table class=\"table table-condensed table-content card-body table-full-width \">
                            <thead class=\"title-table\">
                            <th class=\"\">Name baseline</th>
                            <th scope=\"col\" class=\"th-empty\"></th>
                            </thead>
                            <tbody>
                            ";
        // line 28
        echo "                            ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["baselines"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["baseline"]) {
            // line 29
            echo "                                <tr class=\"td-table\">
                                    ";
            // line 31
            echo "                                    <td>";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["baseline"], "name", [], "any", false, false, false, 31), "html", null, true);
            echo "</td>

                                    <td class=\"content-btn-edit-delete\">
";
            // line 35
            echo "                                        <form method=\"post\" action=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.delete-baseline", ["id" => twig_get_attribute($this->env, $this->source, $context["baseline"], "id", [], "any", false, false, false, 35)]), "html", null, true);
            echo "\" onsubmit=\"return confirm('Are you sure to delete this baseline?')\">
                                            <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
                                            <input type=\"hidden\" name=\"_token\" value=\"";
            // line 37
            echo twig_escape_filter($this->env, $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken(("delete" . twig_get_attribute($this->env, $this->source, $context["baseline"], "id", [], "any", false, false, false, 37))), "html", null, true);
            echo "\">
                                            <button class=\"btn btn-danger btn-delete-client\"><i class=\"fas fa-trash-alt\"></i></button>
                                        </form>
                                    </td>
                                </tr>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['baseline'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 43
        echo "                            </tbody>
                        </table>
                    </section>
                </main>
            ";
    }

    // line 48
    public function block_javascripts($context, array $blocks = [])
    {
        // line 49
        echo "
    <script>


    </script>
";
    }

    public function getTemplateName()
    {
        return "alstom/Baseline/baseline.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  138 => 49,  135 => 48,  127 => 43,  115 => 37,  109 => 35,  102 => 31,  99 => 29,  94 => 28,  85 => 20,  83 => 19,  81 => 18,  79 => 17,  77 => 16,  74 => 14,  65 => 11,  62 => 10,  58 => 9,  53 => 7,  48 => 4,  45 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "alstom/Baseline/baseline.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\Baseline\\baseline.html.twig");
    }
}
