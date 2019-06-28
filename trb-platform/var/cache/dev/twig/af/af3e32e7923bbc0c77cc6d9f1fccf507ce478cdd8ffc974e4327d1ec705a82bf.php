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

/* alstom/trains/_form-train.html.twig */
class __TwigTemplate_590b5553f523b8c218e694817b64b6ebb3f1695d4c3a81c3fc0991471aeb006b extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'stylesheets' => [$this, 'block_stylesheets'],
            'javascripts' => [$this, 'block_javascripts'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/trains/_form-train.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "alstom/trains/_form-train.html.twig"));

        // line 1
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 4
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 4, $this->source); })()), 'form_start');
        echo "
<div class=\"row\">
    <div class=\"col-md-10\">";
        // line 6
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 6, $this->source); })()), "name", [], "any", false, false, false, 6), 'row');
        echo "</div>
    <div class=\"col-md-10\">";
        // line 7
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 7, $this->source); })()), "projects", [], "any", false, false, false, 7), 'row');
        echo "</div>
    <div class=\"col-md-10\">";
        // line 8
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 8, $this->source); })()), "trainType", [], "any", false, false, false, 8), 'row');
        echo "</div>

    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_locomotive\">
        <h4>Select EVC : </h4>
        <img src=\"";
        // line 12
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/locomotive-select.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"col-md-10 img-type-train\">
        <figure class=\"content-ertms col-md-10\">
            <img src=\"";
        // line 14
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms \" id=\"ertms-loco-1\">
            <img src=\"";
        // line 15
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms \" id=\"ertms-loco-2\">

        </figure>
    </div>

    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_train\">
        <h4>Select EVC : </h4>
        <img src=\"";
        // line 22
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/train-select.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"col-md-10  img-type-train\">
        <figure class=\"content-ertms col-md-10\">
            <img src=\"";
        // line 24
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms\" id=\"ertms-train-1\">
            <img src=\"";
        // line 25
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms\" id=\"ertms-train-2\">
            <img src=\"";
        // line 26
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms \" id=\"ertms-train-3\">
        </figure>
    </div>

    <div class=\"col-md-10 mt-4\" id=\"btn-choice-ertms\">
        <div class=\"content-btn-train col-12\">
            <button id=\"create-ertms-1\" type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#modalPoll-1\">Add ERTMS</button>
            <button id=\"create-ertms-2\" type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#modalPoll-1\">Add ERTMS</button>
        </div>
    </div>


    <div class=\"modal fade right\" id=\"modalPoll-1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"
         aria-hidden=\"true\" data-backdrop=\"false\">
        <div class=\"modal-dialog modal-full-height modal-right modal-notify modal-info\" >
            <div class=\"modal-content\">
                <!--Header-->
                <div class=\"modal-header\">
                    <p class=\"heading lead\" id=\"add-ertms\"></p>

                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" id=\"close-modal\">
                        <span aria-hidden=\"true\" class=\"white-text\">×</span>
                    </button>
                </div>
                <!--Body-->
                <div class=\"modal-body\" id=\"modal-body\">
                    <button type=\"button\" class=\"close\" id=\"close-equipement\" data-dismiss=\"modal-body\" aria-label=\"Close\">
                        <span aria-hidden=\"true\" class=\"white-text\" style=\"color:red\">×</span>
                    </button>
                    <div class=\"col-md-12 mt-4 modal-ertms\" id=\"create-ertms-train-1\">
                        <div class=\"name-ertms\">
                            ";
        // line 57
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_ertms"]) || array_key_exists("form_ertms", $context) ? $context["form_ertms"] : (function () { throw new RuntimeError('Variable "form_ertms" does not exist.', 57, $this->source); })()), 'form_start');
        echo "
                            <div class=\"content-form-ertms-name row\">
                                <div class=\"col-md-12\">
                                    ";
        // line 60
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_ertms"]) || array_key_exists("form_ertms", $context) ? $context["form_ertms"] : (function () { throw new RuntimeError('Variable "form_ertms" does not exist.', 60, $this->source); })()), "name_configuration", [], "any", false, false, false, 60), 'row', ["label" => "Name ERTMS"]);
        echo "
                                </div>
                                ";
        // line 65
        echo "                            </div>

                            ";
        // line 67
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_ertms"]) || array_key_exists("form_ertms", $context) ? $context["form_ertms"] : (function () { throw new RuntimeError('Variable "form_ertms" does not exist.', 67, $this->source); })()), 'form_end');
        echo "
                        </div>
                        ";
        // line 69
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 69, $this->source); })()), 'form_start');
        echo "

                            <div class=\"type-equipement row\">
                                <div class=\"col-md-10\">
                                    ";
        // line 73
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 73, $this->source); })()), "Type", [], "any", false, false, false, 73), 'row');
        echo "
                                </div>

                                <div id=\"btn-create-type\" class=\"col-md-2\">
                                    <p class=\"btn-create-type\">+</p>
                                </div>

                                <div id=\"create_type\" class=\"col-md-12 row\">
                                    <div class=\"controls-2 row col-md-10\">
                                        ";
        // line 82
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_type"]) || array_key_exists("form_type", $context) ? $context["form_type"] : (function () { throw new RuntimeError('Variable "form_type" does not exist.', 82, $this->source); })()), 'form_start');
        echo "
                                            <div class=\"entry-2 input-group col-12\">
                                                ";
        // line 84
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_type"]) || array_key_exists("form_type", $context) ? $context["form_type"] : (function () { throw new RuntimeError('Variable "form_type" does not exist.', 84, $this->source); })()), "name", [], "any", false, false, false, 84), 'widget');
        echo "
                                                <span class=\"input-group-btn-\">";
        // line 85
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_type"]) || array_key_exists("form_type", $context) ? $context["form_type"] : (function () { throw new RuntimeError('Variable "form_type" does not exist.', 85, $this->source); })()), "save", [], "any", false, false, false, 85), 'widget', ["label" => "+"]);
        echo "</span>
                                            </div>
                                        ";
        // line 87
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_type"]) || array_key_exists("form_type", $context) ? $context["form_type"] : (function () { throw new RuntimeError('Variable "form_type" does not exist.', 87, $this->source); })()), 'form_end');
        echo "
                                    </div>
                                </div>
                            </div>
                            <div class=\"type-equipement row\">
                                <div class=\"col-md-10\">
                                    ";
        // line 93
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 93, $this->source); })()), "Sous_type", [], "any", false, false, false, 93), 'row');
        echo "
                                </div>

                                <div id=\"btn-create-soustype\" class=\"col-md-2\">
                                    <p class=\" btn-create-type\">+</p>
                                </div>

                                <div id=\"create_soustype\"  class=\"col-md-12 row\">
                                    <div class=\"controls row col-md-10\">
                                        ";
        // line 102
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_soustype"]) || array_key_exists("form_soustype", $context) ? $context["form_soustype"] : (function () { throw new RuntimeError('Variable "form_soustype" does not exist.', 102, $this->source); })()), 'form_start');
        echo "
                                            <div class=\"entry input-group col-12\">
                                                ";
        // line 104
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_soustype"]) || array_key_exists("form_soustype", $context) ? $context["form_soustype"] : (function () { throw new RuntimeError('Variable "form_soustype" does not exist.', 104, $this->source); })()), "name", [], "any", false, false, false, 104), 'widget');
        echo "
                                                <span class=\"input-group-btn\">";
        // line 105
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_soustype"]) || array_key_exists("form_soustype", $context) ? $context["form_soustype"] : (function () { throw new RuntimeError('Variable "form_soustype" does not exist.', 105, $this->source); })()), "save", [], "any", false, false, false, 105), 'widget', ["label" => "+"]);
        echo "</span>
                                            </div>
                                        ";
        // line 107
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_soustype"]) || array_key_exists("form_soustype", $context) ? $context["form_soustype"] : (function () { throw new RuntimeError('Variable "form_soustype" does not exist.', 107, $this->source); })()), 'form_end');
        echo "
                                    </div>
                                </div>
                            </div>

                        <div class=\"row\">

                            <div class=\"col-md-12\">
                                ";
        // line 115
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 115, $this->source); })()), "DTR_board", [], "any", false, false, false, 115), 'row');
        echo "
                            </div>
                            <div class=\"col-md-12\">
                                ";
        // line 118
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 118, $this->source); })()), "Indice_DTR", [], "any", false, false, false, 118), 'row');
        echo "
                            </div>
                            <div class=\"col-md-12\">
                                ";
        // line 121
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 121, $this->source); })()), "Num_serie", [], "any", false, false, false, 121), 'row');
        echo "
                            </div>
                        </div>

                    </div>
                </div>
                <button id=\"create-equipment\" type=\"button\" class=\"btn-add-equipment col-5 ml-5 mt-4 mb-5\" >Add equipement</button>

                <!--Footer-->
                <div class=\"modal-footer justify-content-center\">
                    ";
        // line 131
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 131, $this->source); })()), "save", [], "any", false, false, false, 131), 'widget', ["label" => "Create Ertms"]);
        echo "
                    ";
        // line 132
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 132, $this->source); })()), 'form_end');
        echo "
                    <button type=\"button\" class=\"btn-cancel-ertms\" data-dismiss=\"modal\" id=\"cancel-ertms\">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal: modalPoll -->


</div>
<button class=\"btn btn-primary mt-4\">";
        // line 142
        echo twig_escape_filter($this->env, (((isset($context["button"]) || array_key_exists("button", $context))) ? (_twig_default_filter((isset($context["button"]) || array_key_exists("button", $context) ? $context["button"] : (function () { throw new RuntimeError('Variable "button" does not exist.', 142, $this->source); })()), "Send")) : ("Send")), "html", null, true);
        echo "</button>

";
        // line 144
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 144, $this->source); })()), 'form_end');
        echo "



";
        // line 148
        $this->displayBlock('javascripts', $context, $blocks);
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 1
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 2
        echo "    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css\">
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 148
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 149
        echo "    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>

    <script>
        \$(function()
        {

                \$(document).on('click', '.btn-add', function(e)
                {
                        e.preventDefault();

                        var controlForm = \$('.controls form:first'),
                            currentEntry = \$(this).parents('.entry:first'),
                            newEntry = \$(currentEntry.clone()).appendTo(controlForm);


                        newEntry.find('input').val('');
                        controlForm.find('.entry:not(:last) .btn-add')
                            .removeClass('btn-add').addClass('btn-remove')
                            .removeClass('btn-success').addClass('btn-danger')
                            .html('<span>-</span>');

                    }).on('click', '.btn-remove', function(e)
                {
                    \$(this).parents('.entry:first').remove();

                    e.preventDefault();
                    return false;
                });


        });
        \$(function()
        {
            \$(document).on('click', '.btn-add', function(e)
            {
                e.preventDefault();

                var controlForm = \$('.controls-2 form:first'),
                    currentEntry = \$(this).parents('.entry-2:first'),
                    newEntry = \$(currentEntry.clone()).appendTo(controlForm);

                newEntry.find('input').val('');

                controlForm.find('.entry-2:not(:last) .btn-add')
                    .removeClass('btn-add').addClass('btn-remove')
                    .removeClass('btn-success').addClass('btn-danger')
                    .html('<span>-</span>');
            }).on('click', '.btn-remove', function(e)
            {
                \$(this).parents('.entry-2:first').remove();

                e.preventDefault();
                return false;
            });
        });

\$(document).ready(function() {

    //Vidage des inputs aux changement de select
    // \$('select[name=\"trains[projects]\"], select[name=\"trains[trainType]\"]').change(function(){
    //     \$('input[name=\"trains[name]\"]').val('');
    // });


    /*Masquage de certains élement */
    \$('#create-ertms-1').hide();
    \$('#create-ertms-2').hide();
    \$(\"#create-ertms-train-1\").hide();
    \$('#create_soustype').hide();
    \$('#create_type').hide();
    \$('#modal-body').hide();

    /*au click de l'add Equipment afficher le formulaire d'ajout d'équipement*/
    \$('#create-equipment').click(function () {
        \$('#modal-body').show();
        \$('#create-equipment').hide();
    });
    \$('#close-equipement').click(function () {
        \$('#modal-body').hide();
        \$('#create-equipment').show();
        \$('#create_type').hide();
        \$('#create_soustype').hide();
    })

    /* Créer ertms avec le clique tu premier boutton */
    \$('#create-ertms-1').click(function () {
        \$(\"#create-ertms-train-1\").show();

    })

    \$('#btn-create-type').click(function () {
        \$('#create_type').show();
    })
    \$('#btn-create-soustype').click(function () {
        \$('#create_soustype').show();
    })

    \$('#close-modal').click(function () {
        \$('#modal-body').hide();
        \$('#create-equipment').show();
    })
    \$('#cancel-ertms').click(function () {
        \$('#modal-body').hide();
        \$('#create-equipment').show();
    })

    //Traitement du choix du type de train
    \$('#trains_trainType')

        .change(function () {

            let current_choice = \"\", ertms_left = \"\", ertms_middle = \"\", ertms_right= \"\";

            \$(\"#trains_trainType option:selected\").each(function () {

                current_choice += \$(this).text() + \" \";

            });

            /* traitement dans le choix train */
            if (current_choice.trim() == 'Train') {
                \$('#select_train').show();
                \$('#select_locomotive').hide();

                \$('#ertms-train-1').click(function () {
                    //l'ertms de gauche selectionner
                    \$('#ertms-train-1').addClass(\"selected\");
                    ertms_left = true;
                    ertms_middle = false;

                    \$('#ertms-train-2').removeClass(\"selected\");
                    \$('#btn-choice-ertms').show();
                    \$('#create-ertms-1').show();
                    \$('#add-ertms').text('add ERTMS left')


                });
                \$('#ertms-train-2').click(function () {
                    // l'ertms du milieu selectionner
                    \$('#ertms-train-2').addClass(\"selected\");
                    ertms_left = false;
                    ertms_right = false;
                    ertms_middle = true;

                    \$('#ertms-train-1').removeClass(\"selected\");
                    \$('#ertms-train-3').removeClass(\"selected\");
                    \$('#btn-choice-ertms').show();
                    \$('#create-ertms-1').show();
                    \$('#create-ertms-2').hide();
                    \$('#add-ertms').text('add ERTMS middle')


                });
                \$('#ertms-train-3').click(function () {
                    // l'ertms de droite selectionner
                    \$('#ertms-train-3').addClass(\"selected\");
                    ertms_right = true;
                    ertms_middle = false;
                    if(ertms_left== true && ertms_middle == false){
                        \$('#create-ertms-1').show();
                        \$('#create-ertms-2').show();
                    }else if (ertms_right == true && ertms_left== false){
                        \$('#create-ertms-1').hide();
                        \$('#create-ertms-2').show();
                    }

                    \$('#ertms-train-2').removeClass(\"selected\");
                    \$('#btn-choice-ertms').show();

                    \$('#add-ertms').text('add ERTMS right');


                });


                \$('#trains_trainType').change(function () {\$('#btn-choice-ertms').hide();});


            } else if (current_choice.trim() == 'Locomotive') {

                \$('#select_locomotive').show();
                \$('#select_train').hide();

                \$('#ertms-loco-1').click(function () {
                    //l'ertms de gauche selectionner
                    \$('#ertms-loco-1').addClass(\"selected\");
                    \$('#ertms-loco-2').removeClass(\"selected\");
                    \$('#btn-choice-ertms').show();
                    \$('#add-ertms').text('add ERTMS left')
                    \$('#create-ertms-1').show();

                });
                \$('#ertms-loco-2').click(function () {
                    //l'ertms de droite selectionner
                    \$('#ertms-loco-2').addClass(\"selected\");
                    \$('#ertms-loco-1').removeClass(\"selected\");
                    \$('#btn-choice-ertms').show();
                    \$('#add-ertms').text('add ERTMS right')
                    \$('#create-ertms-1').show();


                });
                \$('#trains_trainType').change(function () {\$('#btn-choice-ertms').hide();});



            }

        }).change();
})

        \$('#trains_projects').change(function () {
            \$('.content-type-train').hide();
            \$('#trains_trainType').val('');
            \$('#btn-choice-ertms').hide();


        })

    </script>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "alstom/trains/_form-train.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  327 => 149,  317 => 148,  306 => 2,  296 => 1,  286 => 148,  279 => 144,  274 => 142,  261 => 132,  257 => 131,  244 => 121,  238 => 118,  232 => 115,  221 => 107,  216 => 105,  212 => 104,  207 => 102,  195 => 93,  186 => 87,  181 => 85,  177 => 84,  172 => 82,  160 => 73,  153 => 69,  148 => 67,  144 => 65,  139 => 60,  133 => 57,  99 => 26,  95 => 25,  91 => 24,  86 => 22,  76 => 15,  72 => 14,  67 => 12,  60 => 8,  56 => 7,  52 => 6,  47 => 4,  45 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% block stylesheets %}
    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css\">
{% endblock %}
{{ form_start(form) }}
<div class=\"row\">
    <div class=\"col-md-10\">{{ form_row(form.name) }}</div>
    <div class=\"col-md-10\">{{ form_row(form.projects) }}</div>
    <div class=\"col-md-10\">{{ form_row(form.trainType) }}</div>

    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_locomotive\">
        <h4>Select EVC : </h4>
        <img src=\"{{ asset('../build/img/trains/locomotive-select.svg') }}\" alt=\"\" class=\"col-md-10 img-type-train\">
        <figure class=\"content-ertms col-md-10\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms \" id=\"ertms-loco-1\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms \" id=\"ertms-loco-2\">

        </figure>
    </div>

    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_train\">
        <h4>Select EVC : </h4>
        <img src=\"{{ asset('../build/img/trains/train-select.svg') }}\" alt=\"\" class=\"col-md-10  img-type-train\">
        <figure class=\"content-ertms col-md-10\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms\" id=\"ertms-train-1\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms\" id=\"ertms-train-2\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms \" id=\"ertms-train-3\">
        </figure>
    </div>

    <div class=\"col-md-10 mt-4\" id=\"btn-choice-ertms\">
        <div class=\"content-btn-train col-12\">
            <button id=\"create-ertms-1\" type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#modalPoll-1\">Add ERTMS</button>
            <button id=\"create-ertms-2\" type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#modalPoll-1\">Add ERTMS</button>
        </div>
    </div>


    <div class=\"modal fade right\" id=\"modalPoll-1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"
         aria-hidden=\"true\" data-backdrop=\"false\">
        <div class=\"modal-dialog modal-full-height modal-right modal-notify modal-info\" >
            <div class=\"modal-content\">
                <!--Header-->
                <div class=\"modal-header\">
                    <p class=\"heading lead\" id=\"add-ertms\"></p>

                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" id=\"close-modal\">
                        <span aria-hidden=\"true\" class=\"white-text\">×</span>
                    </button>
                </div>
                <!--Body-->
                <div class=\"modal-body\" id=\"modal-body\">
                    <button type=\"button\" class=\"close\" id=\"close-equipement\" data-dismiss=\"modal-body\" aria-label=\"Close\">
                        <span aria-hidden=\"true\" class=\"white-text\" style=\"color:red\">×</span>
                    </button>
                    <div class=\"col-md-12 mt-4 modal-ertms\" id=\"create-ertms-train-1\">
                        <div class=\"name-ertms\">
                            {{ form_start(form_ertms) }}
                            <div class=\"content-form-ertms-name row\">
                                <div class=\"col-md-12\">
                                    {{ form_row(form_ertms.name_configuration, {'label': 'Name ERTMS'}) }}
                                </div>
                                {#<div class=\"col-2 mt-4\">
                                    {{ form_row(form_ertms.save, {'label': 'Save'}) }}
                                </div>#}
                            </div>

                            {{ form_end(form_ertms) }}
                        </div>
                        {{ form_start(form_equipement) }}

                            <div class=\"type-equipement row\">
                                <div class=\"col-md-10\">
                                    {{ form_row(form_equipement.Type) }}
                                </div>

                                <div id=\"btn-create-type\" class=\"col-md-2\">
                                    <p class=\"btn-create-type\">+</p>
                                </div>

                                <div id=\"create_type\" class=\"col-md-12 row\">
                                    <div class=\"controls-2 row col-md-10\">
                                        {{ form_start(form_type) }}
                                            <div class=\"entry-2 input-group col-12\">
                                                {{ form_widget(form_type.name) }}
                                                <span class=\"input-group-btn-\">{{ form_widget(form_type.save, {'label' : '+'}) }}</span>
                                            </div>
                                        {{ form_end(form_type) }}
                                    </div>
                                </div>
                            </div>
                            <div class=\"type-equipement row\">
                                <div class=\"col-md-10\">
                                    {{ form_row(form_equipement.Sous_type) }}
                                </div>

                                <div id=\"btn-create-soustype\" class=\"col-md-2\">
                                    <p class=\" btn-create-type\">+</p>
                                </div>

                                <div id=\"create_soustype\"  class=\"col-md-12 row\">
                                    <div class=\"controls row col-md-10\">
                                        {{ form_start(form_soustype) }}
                                            <div class=\"entry input-group col-12\">
                                                {{ form_widget(form_soustype.name) }}
                                                <span class=\"input-group-btn\">{{ form_widget(form_soustype.save, {'label' : '+'}) }}</span>
                                            </div>
                                        {{ form_end(form_soustype) }}
                                    </div>
                                </div>
                            </div>

                        <div class=\"row\">

                            <div class=\"col-md-12\">
                                {{ form_row(form_equipement.DTR_board) }}
                            </div>
                            <div class=\"col-md-12\">
                                {{ form_row(form_equipement.Indice_DTR) }}
                            </div>
                            <div class=\"col-md-12\">
                                {{ form_row(form_equipement.Num_serie) }}
                            </div>
                        </div>

                    </div>
                </div>
                <button id=\"create-equipment\" type=\"button\" class=\"btn-add-equipment col-5 ml-5 mt-4 mb-5\" >Add equipement</button>

                <!--Footer-->
                <div class=\"modal-footer justify-content-center\">
                    {{ form_widget(form_equipement.save, {'label' : 'Create Ertms'}) }}
                    {{ form_end(form_equipement) }}
                    <button type=\"button\" class=\"btn-cancel-ertms\" data-dismiss=\"modal\" id=\"cancel-ertms\">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal: modalPoll -->


</div>
<button class=\"btn btn-primary mt-4\">{{ button|default('Send') }}</button>

{{ form_end(form) }}



{% block javascripts %}
    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>

    <script>
        \$(function()
        {

                \$(document).on('click', '.btn-add', function(e)
                {
                        e.preventDefault();

                        var controlForm = \$('.controls form:first'),
                            currentEntry = \$(this).parents('.entry:first'),
                            newEntry = \$(currentEntry.clone()).appendTo(controlForm);


                        newEntry.find('input').val('');
                        controlForm.find('.entry:not(:last) .btn-add')
                            .removeClass('btn-add').addClass('btn-remove')
                            .removeClass('btn-success').addClass('btn-danger')
                            .html('<span>-</span>');

                    }).on('click', '.btn-remove', function(e)
                {
                    \$(this).parents('.entry:first').remove();

                    e.preventDefault();
                    return false;
                });


        });
        \$(function()
        {
            \$(document).on('click', '.btn-add', function(e)
            {
                e.preventDefault();

                var controlForm = \$('.controls-2 form:first'),
                    currentEntry = \$(this).parents('.entry-2:first'),
                    newEntry = \$(currentEntry.clone()).appendTo(controlForm);

                newEntry.find('input').val('');

                controlForm.find('.entry-2:not(:last) .btn-add')
                    .removeClass('btn-add').addClass('btn-remove')
                    .removeClass('btn-success').addClass('btn-danger')
                    .html('<span>-</span>');
            }).on('click', '.btn-remove', function(e)
            {
                \$(this).parents('.entry-2:first').remove();

                e.preventDefault();
                return false;
            });
        });

\$(document).ready(function() {

    //Vidage des inputs aux changement de select
    // \$('select[name=\"trains[projects]\"], select[name=\"trains[trainType]\"]').change(function(){
    //     \$('input[name=\"trains[name]\"]').val('');
    // });


    /*Masquage de certains élement */
    \$('#create-ertms-1').hide();
    \$('#create-ertms-2').hide();
    \$(\"#create-ertms-train-1\").hide();
    \$('#create_soustype').hide();
    \$('#create_type').hide();
    \$('#modal-body').hide();

    /*au click de l'add Equipment afficher le formulaire d'ajout d'équipement*/
    \$('#create-equipment').click(function () {
        \$('#modal-body').show();
        \$('#create-equipment').hide();
    });
    \$('#close-equipement').click(function () {
        \$('#modal-body').hide();
        \$('#create-equipment').show();
        \$('#create_type').hide();
        \$('#create_soustype').hide();
    })

    /* Créer ertms avec le clique tu premier boutton */
    \$('#create-ertms-1').click(function () {
        \$(\"#create-ertms-train-1\").show();

    })

    \$('#btn-create-type').click(function () {
        \$('#create_type').show();
    })
    \$('#btn-create-soustype').click(function () {
        \$('#create_soustype').show();
    })

    \$('#close-modal').click(function () {
        \$('#modal-body').hide();
        \$('#create-equipment').show();
    })
    \$('#cancel-ertms').click(function () {
        \$('#modal-body').hide();
        \$('#create-equipment').show();
    })

    //Traitement du choix du type de train
    \$('#trains_trainType')

        .change(function () {

            let current_choice = \"\", ertms_left = \"\", ertms_middle = \"\", ertms_right= \"\";

            \$(\"#trains_trainType option:selected\").each(function () {

                current_choice += \$(this).text() + \" \";

            });

            /* traitement dans le choix train */
            if (current_choice.trim() == 'Train') {
                \$('#select_train').show();
                \$('#select_locomotive').hide();

                \$('#ertms-train-1').click(function () {
                    //l'ertms de gauche selectionner
                    \$('#ertms-train-1').addClass(\"selected\");
                    ertms_left = true;
                    ertms_middle = false;

                    \$('#ertms-train-2').removeClass(\"selected\");
                    \$('#btn-choice-ertms').show();
                    \$('#create-ertms-1').show();
                    \$('#add-ertms').text('add ERTMS left')


                });
                \$('#ertms-train-2').click(function () {
                    // l'ertms du milieu selectionner
                    \$('#ertms-train-2').addClass(\"selected\");
                    ertms_left = false;
                    ertms_right = false;
                    ertms_middle = true;

                    \$('#ertms-train-1').removeClass(\"selected\");
                    \$('#ertms-train-3').removeClass(\"selected\");
                    \$('#btn-choice-ertms').show();
                    \$('#create-ertms-1').show();
                    \$('#create-ertms-2').hide();
                    \$('#add-ertms').text('add ERTMS middle')


                });
                \$('#ertms-train-3').click(function () {
                    // l'ertms de droite selectionner
                    \$('#ertms-train-3').addClass(\"selected\");
                    ertms_right = true;
                    ertms_middle = false;
                    if(ertms_left== true && ertms_middle == false){
                        \$('#create-ertms-1').show();
                        \$('#create-ertms-2').show();
                    }else if (ertms_right == true && ertms_left== false){
                        \$('#create-ertms-1').hide();
                        \$('#create-ertms-2').show();
                    }

                    \$('#ertms-train-2').removeClass(\"selected\");
                    \$('#btn-choice-ertms').show();

                    \$('#add-ertms').text('add ERTMS right');


                });


                \$('#trains_trainType').change(function () {\$('#btn-choice-ertms').hide();});


            } else if (current_choice.trim() == 'Locomotive') {

                \$('#select_locomotive').show();
                \$('#select_train').hide();

                \$('#ertms-loco-1').click(function () {
                    //l'ertms de gauche selectionner
                    \$('#ertms-loco-1').addClass(\"selected\");
                    \$('#ertms-loco-2').removeClass(\"selected\");
                    \$('#btn-choice-ertms').show();
                    \$('#add-ertms').text('add ERTMS left')
                    \$('#create-ertms-1').show();

                });
                \$('#ertms-loco-2').click(function () {
                    //l'ertms de droite selectionner
                    \$('#ertms-loco-2').addClass(\"selected\");
                    \$('#ertms-loco-1').removeClass(\"selected\");
                    \$('#btn-choice-ertms').show();
                    \$('#add-ertms').text('add ERTMS right')
                    \$('#create-ertms-1').show();


                });
                \$('#trains_trainType').change(function () {\$('#btn-choice-ertms').hide();});



            }

        }).change();
})

        \$('#trains_projects').change(function () {
            \$('.content-type-train').hide();
            \$('#trains_trainType').val('');
            \$('#btn-choice-ertms').hide();


        })

    </script>
{% endblock %}
", "alstom/trains/_form-train.html.twig", "C:\\Users\\L_200606688\\Desktop\\data-platform\\trb-platform\\templates\\alstom\\trains\\_form-train.html.twig");
    }
}
