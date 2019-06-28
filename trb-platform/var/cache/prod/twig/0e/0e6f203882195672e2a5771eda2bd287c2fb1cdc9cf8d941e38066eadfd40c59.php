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

/* @VichUploader/Form/fields.html.twig */
class __TwigTemplate_3ee626555a06567a6f972338bdd392b20f5d7f5284ed1f9661fe67ad50a00f46 extends \Twig\Template
{
    private $source;

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'vich_file_row' => [$this, 'block_vich_file_row'],
            'vich_file_widget' => [$this, 'block_vich_file_widget'],
            'vich_image_row' => [$this, 'block_vich_image_row'],
            'vich_image_widget' => [$this, 'block_vich_image_widget'],
            'vich_file_label' => [$this, 'block_vich_file_label'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        $this->displayBlock('vich_file_row', $context, $blocks);
        // line 6
        $this->displayBlock('vich_file_widget', $context, $blocks);
        // line 19
        $this->displayBlock('vich_image_row', $context, $blocks);
        // line 24
        $this->displayBlock('vich_image_widget', $context, $blocks);
        // line 40
        $this->displayBlock('vich_file_label', $context, $blocks);
    }

    // line 1
    public function block_vich_file_row($context, array $blocks = [])
    {
        // line 2
        $context["force_error"] = true;
        // line 3
        $this->displayBlock("form_row", $context, $blocks);
    }

    // line 6
    public function block_vich_file_widget($context, array $blocks = [])
    {
        // line 7
        echo "<div class=\"vich-file\">";
        // line 8
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "file", [], "any", false, false, false, 8), 'widget');
        // line 9
        if (twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "delete", [], "any", true, true, false, 9)) {
            // line 10
            echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "delete", [], "any", false, false, false, 10), 'row');
        }
        // line 13
        if (($context["download_uri"] ?? null)) {
            // line 14
            echo "<a href=\"";
            echo twig_escape_filter($this->env, ($context["download_uri"] ?? null), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, (((($context["translation_domain"] ?? null) === false)) ? (($context["download_label"] ?? null)) : ($this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans(($context["download_label"] ?? null), [], ($context["translation_domain"] ?? null)))), "html", null, true);
            echo "</a>";
        }
        // line 16
        echo "</div>";
    }

    // line 19
    public function block_vich_image_row($context, array $blocks = [])
    {
        // line 20
        $context["force_error"] = true;
        // line 21
        $this->displayBlock("form_row", $context, $blocks);
    }

    // line 24
    public function block_vich_image_widget($context, array $blocks = [])
    {
        // line 25
        echo "<div class=\"vich-image\">";
        // line 26
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "file", [], "any", false, false, false, 26), 'widget');
        // line 27
        if (twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "delete", [], "any", true, true, false, 27)) {
            // line 28
            echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "delete", [], "any", false, false, false, 28), 'row');
        }
        // line 31
        if (($context["image_uri"] ?? null)) {
            // line 32
            echo "<a href=\"";
            echo twig_escape_filter($this->env, ($context["image_uri"] ?? null), "html", null, true);
            echo "\"><img src=\"";
            echo twig_escape_filter($this->env, ($context["image_uri"] ?? null), "html", null, true);
            echo "\" alt=\"\" /></a>";
        }
        // line 34
        if (($context["download_uri"] ?? null)) {
            // line 35
            echo "<a href=\"";
            echo twig_escape_filter($this->env, ($context["download_uri"] ?? null), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, (((($context["translation_domain"] ?? null) === false)) ? (($context["download_label"] ?? null)) : ($this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans(($context["download_label"] ?? null), [], ($context["translation_domain"] ?? null)))), "html", null, true);
            echo "</a>";
        }
        // line 37
        echo "</div>";
    }

    // line 40
    public function block_vich_file_label($context, array $blocks = [])
    {
        // line 41
        $context["label"] = _twig_default_filter($this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans(($context["label"] ?? null)), ($context["label"] ?? null));
        // line 42
        $this->displayBlock("form_label", $context, $blocks);
    }

    public function getTemplateName()
    {
        return "@VichUploader/Form/fields.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  134 => 42,  132 => 41,  129 => 40,  125 => 37,  118 => 35,  116 => 34,  109 => 32,  107 => 31,  104 => 28,  102 => 27,  100 => 26,  98 => 25,  95 => 24,  91 => 21,  89 => 20,  86 => 19,  82 => 16,  75 => 14,  73 => 13,  70 => 10,  68 => 9,  66 => 8,  64 => 7,  61 => 6,  57 => 3,  55 => 2,  52 => 1,  48 => 40,  46 => 24,  44 => 19,  42 => 6,  40 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "@VichUploader/Form/fields.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\vendor\\vich\\uploader-bundle\\Resources\\views\\Form\\fields.html.twig");
    }
}
