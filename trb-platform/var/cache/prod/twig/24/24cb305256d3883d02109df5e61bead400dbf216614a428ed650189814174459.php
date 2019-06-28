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

/* alstom/engineers/engineers.html.twig */
class __TwigTemplate_16fc578ec4539f4bc4431bc7fa8268fefd0945e4ca32ed379545d149e949dc6f extends \Twig\Template
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
        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/engineers/engineers.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_body($context, array $blocks = [])
    {
        // line 4
        echo "                <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
                    <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
                        <h2><i class=\"fa fa-angle-right\"></i> Engineers</h2>
                        <a href=\"";
        // line 7
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.create-engineer");
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
        echo "                    <section id=\"unseen\">
                        <div class=\"pull-left search\">
                            ";
        // line 16
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_start');
        echo "
                            ";
        // line 17
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "name_engineer", [], "any", false, false, false, 17), 'row');
        echo "
                            ";
        // line 18
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_end');
        echo "
                        </div>
                        <table class=\"table table-condensed table-content\">
                            ";
        // line 22
        echo "                            <thead>
                            <tr class=\"title-table\">
                                <th scope=\"col\">Name</th>
                                <th scope=\"col\" class=\"\">Surname</th>
                                <th scope=\"col\" class=\"\">Number of badge</th>
                                <th scope=\"col\" class=\"\">Projects</th>
                                <th scope=\"col\" class=\"th-empty\"></th>
                            </tr>
                            </thead>
                            <tbody>
                            ";
        // line 32
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["engineers"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["engineer"]) {
            // line 33
            echo "
                                <tr class=\"td-table\">
                                    <td><a href=\"";
            // line 35
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.engineer-show", ["id" => twig_get_attribute($this->env, $this->source, $context["engineer"], "id", [], "any", false, false, false, 35)]), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["engineer"], "name", [], "any", false, false, false, 35), "html", null, true);
            echo "</a></td>
                                    <td>";
            // line 36
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["engineer"], "surname", [], "any", false, false, false, 36), "html", null, true);
            echo "</td>
                                    <td>";
            // line 37
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["engineer"], "NumBadge", [], "any", false, false, false, 37), "html", null, true);
            echo "</td>
                                    <td>
                                        ";
            // line 39
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["engineer"], "projects", [], "any", false, false, false, 39));
            foreach ($context['_seq'] as $context["_key"] => $context["project"]) {
                // line 40
                echo "                                            <a href=\"";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.project-show", ["id" => twig_get_attribute($this->env, $this->source, $context["project"], "id", [], "any", false, false, false, 40)]), "html", null, true);
                echo "\"><p>";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["project"], "name", [], "any", false, false, false, 40), "html", null, true);
                echo "</p></a>
                                        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['project'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 42
            echo "                                    </td>

                                    <td class=\"content-btn-edit-delete\">
                                        <a href=\"";
            // line 45
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-engineer", ["id" => twig_get_attribute($this->env, $this->source, $context["engineer"], "id", [], "any", false, false, false, 45)]), "html", null, true);
            echo "\"><i class=\"fas fa-user-edit\"></i> </a>
                                        <form method=\"post\" action=\"";
            // line 46
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.delete-engineer", ["id" => twig_get_attribute($this->env, $this->source, $context["engineer"], "id", [], "any", false, false, false, 46)]), "html", null, true);
            echo "\" onsubmit=\"return confirm('Are you sure to delete this engineer?')\">
                                            <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
                                            <input type=\"hidden\" name=\"_token\" value=\"";
            // line 48
            echo twig_escape_filter($this->env, $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken(("delete" . twig_get_attribute($this->env, $this->source, $context["engineer"], "id", [], "any", false, false, false, 48))), "html", null, true);
            echo "\">
                                            <button class=\"btn btn-danger btn-delete-client\"><i class=\"fas fa-trash-alt\"></i></button>
                                        </form>
                                    </td>
                                </tr>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['engineer'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 54
        echo "                            </tbody>
                        </table>
                    </section>
                </main>
            ";
    }

    public function getTemplateName()
    {
        return "alstom/engineers/engineers.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  167 => 54,  155 => 48,  150 => 46,  146 => 45,  141 => 42,  130 => 40,  126 => 39,  121 => 37,  117 => 36,  111 => 35,  107 => 33,  103 => 32,  91 => 22,  85 => 18,  81 => 17,  77 => 16,  73 => 14,  64 => 11,  61 => 10,  57 => 9,  52 => 7,  47 => 4,  44 => 3,  34 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "alstom/engineers/engineers.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\engineers\\engineers.html.twig");
    }
}
