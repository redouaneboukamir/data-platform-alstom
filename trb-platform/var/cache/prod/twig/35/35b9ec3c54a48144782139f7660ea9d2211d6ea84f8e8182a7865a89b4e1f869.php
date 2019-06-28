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

/* @VichUploader/Collector/mapping_collector.html.twig */
class __TwigTemplate_cc6ee85f697baf8db9987fb46ff9f150df60c8bdc1956ce126532bedf6b8d258 extends \Twig\Template
{
    private $source;

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'toolbar' => [$this, 'block_toolbar'],
            'menu' => [$this, 'block_menu'],
            'panel' => [$this, 'block_panel'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@VichUploader/Collector/mapping_collector.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_toolbar($context, array $blocks = [])
    {
        // line 4
        echo "    ";
        ob_start(function () { return ''; });
        // line 5
        echo "        ";
        $this->loadTemplate("@VichUploader/Collector/icon_grey.html.twig", "@VichUploader/Collector/mapping_collector.html.twig", 5)->display($context);
        // line 6
        echo "        <span class=\"sf-toolbar-value\">";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["collector"] ?? null), "mappingsCount", [], "any", false, false, false, 6), "html", null, true);
        echo "</span>
    ";
        $context["icon"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 8
        echo "
    ";
        // line 9
        ob_start(function () { return ''; });
        // line 10
        echo "        <div class=\"sf-toolbar-info-piece\">
            <strong>Mappings</strong>
            <span class=\"sf-toolbar-status sf-toolbar-status-grey\">";
        // line 12
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["collector"] ?? null), "mappingsCount", [], "any", false, false, false, 12), "html", null, true);
        echo "</span>
        </div>
    ";
        $context["text"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 15
        echo "
    ";
        // line 16
        echo twig_include($this->env, $context, "@WebProfiler/Profiler/toolbar_item.html.twig", ["link" => true]);
        echo "
";
    }

    // line 19
    public function block_menu($context, array $blocks = [])
    {
        // line 20
        echo "    ";
        // line 21
        echo "    <span class=\"label\">
        <span class=\"icon\">
            ";
        // line 23
        $this->loadTemplate("@VichUploader/Collector/icon_white.html.twig", "@VichUploader/Collector/mapping_collector.html.twig", 23)->display($context);
        // line 24
        echo "        </span>
        <strong>VichUploader</strong>
    </span>
";
    }

    // line 29
    public function block_panel($context, array $blocks = [])
    {
        // line 30
        echo "    <h2>VichUploaderBundle Mappings</h2>
    <p class=\"help\"><strong>Note</strong>: Only classes configured using XML or YAML are displayed.</p>
    <table>
        <thead>
            <tr>
                <th scope=\"col\">Field</th>
                <th scope=\"col\">Mapping</th>
                <th scope=\"col\">Filename property</th>
            </tr>
        </thead>
        <tbody>
            ";
        // line 41
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["collector"] ?? null), "mappings", [], "any", false, false, false, 41));
        foreach ($context['_seq'] as $context["class"] => $context["data"]) {
            // line 42
            echo "                <tr>
                    <th scope=\"row\" colspan=\"4\">";
            // line 43
            echo twig_escape_filter($this->env, $context["class"], "html", null, true);
            echo "</th>
                </tr>
                ";
            // line 45
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($context["data"]);
            foreach ($context['_seq'] as $context["_key"] => $context["mdata"]) {
                // line 46
                echo "                    <tr>
                        <td>";
                // line 47
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["mdata"], "propertyName", [], "any", false, false, false, 47), "html", null, true);
                echo "</td>
                        <td>";
                // line 48
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["mdata"], "mapping", [], "any", false, false, false, 48), "html", null, true);
                echo "</td>
                        <td>";
                // line 49
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["mdata"], "fileNameProperty", [], "any", false, false, false, 49), "html", null, true);
                echo "</td>
                    </tr>
                ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['mdata'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 52
            echo "                ";
            // line 53
            echo "            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['class'], $context['data'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 54
        echo "        </tbody>
    </table>
";
    }

    public function getTemplateName()
    {
        return "@VichUploader/Collector/mapping_collector.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  163 => 54,  157 => 53,  155 => 52,  146 => 49,  142 => 48,  138 => 47,  135 => 46,  131 => 45,  126 => 43,  123 => 42,  119 => 41,  106 => 30,  103 => 29,  96 => 24,  94 => 23,  90 => 21,  88 => 20,  85 => 19,  79 => 16,  76 => 15,  70 => 12,  66 => 10,  64 => 9,  61 => 8,  55 => 6,  52 => 5,  49 => 4,  46 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "@VichUploader/Collector/mapping_collector.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\vendor\\vich\\uploader-bundle\\Resources\\views\\Collector\\mapping_collector.html.twig");
    }
}