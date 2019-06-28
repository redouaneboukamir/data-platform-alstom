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

/* alstom/clients/clients.html.twig */
class __TwigTemplate_730076eb6cf5bdbd81770c8c6a23f182a3431feb4f7156b3277fb5847b774156 extends \Twig\Template
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
        $this->parent = $this->loadTemplate("alstom/index.html.twig", "alstom/clients/clients.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_body($context, array $blocks = [])
    {
        // line 4
        echo "                <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">
                    <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">
                        <h2><i class=\"fa fa-angle-right\"></i> Clients</h2>
                        <a href=\"";
        // line 7
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.create-client");
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
        echo "
                    <section id=\"unseen \" class=\"\">
                        <div class=\"pull-left search\">
                            ";
        // line 17
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_start');
        echo "
                                ";
        // line 18
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "name_client", [], "any", false, false, false, 18), 'row');
        echo "
                            ";
        // line 19
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock(($context["form"] ?? null), 'form_end');
        echo "
                        </div>

                        <table class=\"table table-condensed table-content card-body table-full-width \">
                            <thead class=\"title-table\">
                                    <th class=\"\">Name</th>
                                    <th scope=\"col\" class=\" numeric\">Number of trains</th>
                                    <th scope=\"col\" class=\"\">Email</th>
                                    <th scope=\"col\" class=\"\"> Countries</th>
                                    <th scope=\"col\" class=\"th-empty\"></th>
                            </thead>
                            <tbody>
                            ";
        // line 32
        echo "                            ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["clients"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["client"]) {
            // line 33
            echo "                                <tr class=\"td-table\">
                                    <td><a href=\"";
            // line 34
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.client-show", ["id" => twig_get_attribute($this->env, $this->source, $context["client"], "id", [], "any", false, false, false, 34)]), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["client"], "name", [], "any", false, false, false, 34), "html", null, true);
            echo "</a></td>
                                    <td>";
            // line 35
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["client"], "trains", [], "any", false, false, false, 35), "html", null, true);
            echo "</td>
                                    <td>";
            // line 36
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["client"], "email", [], "any", false, false, false, 36), "html", null, true);
            echo "</td>
                                    ";
            // line 38
            echo "                                    <td>
                                        ";
            // line 39
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["client"], "Countries", [], "any", false, false, false, 39));
            foreach ($context['_seq'] as $context["_key"] => $context["country"]) {
                // line 40
                echo "                                            <p class=\"flag flag-";
                echo twig_escape_filter($this->env, twig_lower_filter($this->env, twig_get_attribute($this->env, $this->source, $context["country"], "iso", [], "any", false, false, false, 40)), "html", null, true);
                echo "\"></p>
                                        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['country'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 42
            echo "                                    </td>
                                    <td class=\"content-btn-edit-delete\">
                                        <a href=\"";
            // line 44
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.edit-client", ["id" => twig_get_attribute($this->env, $this->source, $context["client"], "id", [], "any", false, false, false, 44)]), "html", null, true);
            echo "\"><i class=\"fas fa-user-edit btn-edit\"></i> </a>
                                        <form method=\"post\" action=\"";
            // line 45
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.delete-client", ["id" => twig_get_attribute($this->env, $this->source, $context["client"], "id", [], "any", false, false, false, 45)]), "html", null, true);
            echo "\" onsubmit=\"return confirm('Are you sure to delete this client?')\">
                                            <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
                                            <input type=\"hidden\" name=\"_token\" value=\"";
            // line 47
            echo twig_escape_filter($this->env, $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken(("delete" . twig_get_attribute($this->env, $this->source, $context["client"], "id", [], "any", false, false, false, 47))), "html", null, true);
            echo "\">
                                            <button class=\"btn btn-danger btn-delete-client\"><i class=\"fas fa-trash-alt\"></i></button>
                                        </form>
                                    </td>
                                </tr>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['client'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 53
        echo "                            </tbody>
                        </table>
                    </section>
                </main>

            ";
    }

    // line 59
    public function block_javascripts($context, array $blocks = [])
    {
    }

    public function getTemplateName()
    {
        return "alstom/clients/clients.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  174 => 59,  165 => 53,  153 => 47,  148 => 45,  144 => 44,  140 => 42,  131 => 40,  127 => 39,  124 => 38,  120 => 36,  116 => 35,  110 => 34,  107 => 33,  102 => 32,  87 => 19,  83 => 18,  79 => 17,  74 => 14,  65 => 11,  62 => 10,  58 => 9,  53 => 7,  48 => 4,  45 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "alstom/clients/clients.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\clients\\clients.html.twig");
    }
}
