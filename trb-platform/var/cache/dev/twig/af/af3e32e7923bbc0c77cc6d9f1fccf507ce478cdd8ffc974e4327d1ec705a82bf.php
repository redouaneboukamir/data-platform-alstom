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
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 4, $this->source); })()), 'form_start');
        echo "
<div class=\"row\">
    <div class=\"col-md-10\">";
        // line 6
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 6, $this->source); })()), "name", [], "any", false, false, false, 6), 'row');
        echo "</div>
    <div class=\"col-md-10\">";
        // line 7
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 7, $this->source); })()), "projects", [], "any", false, false, false, 7), 'row');
        echo "</div>
    <div class=\"col-md-10\">";
        // line 8
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 8, $this->source); })()), "trainType", [], "any", false, false, false, 8), 'row');
        echo "</div>

    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_locomotive\">
        <h4>Select EVC :
        </h4>
        <img src=\"";
        // line 13
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/locomotive-select.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"col-md-10 img-type-train\">
        <figure class=\"content-ertms col-md-10\">
            <img src=\"";
        // line 15
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms \" id=\"ertms-loco-1\">
            <img src=\"";
        // line 16
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms \" id=\"ertms-loco-2\">

        </figure>
    </div>

    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_train\">
        <h4>Select EVC :
        </h4>
        <img src=\"";
        // line 24
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/train-select.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"col-md-10  img-type-train\">
        <figure class=\"content-ertms col-md-10\">
            <img src=\"";
        // line 26
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms\" id=\"ertms-train-1\">
            <img src=\"";
        // line 27
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms\" id=\"ertms-train-2\">
            <img src=\"";
        // line 28
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("../build/img/trains/ertms.svg"), "html", null, true);
        echo "\" alt=\"\" class=\"ertms \" id=\"ertms-train-3\">
        </figure>
    </div>

    <div class=\"col-md-10 mt-4\" id=\"btn-choice-ertms\">
        <div class=\"content-btn-train col-12\">
            <button class=\"btn btn-secondary\" data-target=\"#modalPoll-1\" data-toggle=\"modal\" id=\"create-ertms-1\" type=\"button\">Add ERTMS</button>
            <button class=\"btn btn-secondary\" data-target=\"#modalPoll-1\" data-toggle=\"modal\" id=\"create-ertms-2\" type=\"button\">Add ERTMS</button>
        </div>
    </div>


    <div aria-hidden=\"true\" aria-labelledby=\"exampleModalLabel\" class=\"modal fade right\" data-backdrop=\"false\" id=\"modalPoll-1\" role=\"dialog\" tabindex=\"-1\">
        <div class=\"modal-dialog modal-full-height modal-right modal-notify modal-info\">
            <div
                class=\"modal-content\">
                <!--Header-->
                <div class=\"modal-header\">
                    <p class=\"heading lead\" id=\"add-ertms\"></p>
                    <button aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" id=\"close-modal\" type=\"button\">
                        <span aria-hidden=\"true\" class=\"white-text\">×</span>
                    </button>
                </div>
                <!--Body-->
                <div class=\"modal-body\" id=\"modal-body\">
                    <button aria-label=\"Close\" class=\"close\" data-dismiss=\"modal-body\" id=\"close-equipement\" type=\"button\">
                        <span aria-hidden=\"true\" class=\"white-text\" style=\"color:red\">×</span>
                    </button>
                    <div class=\"col-md-12 mt-4 modal-ertms\" id=\"create-ertms-train-1\">
                        <div
                            class=\"name-ertms\">";
        // line 64
        echo "
                        </div>
                        ";
        // line 66
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 66, $this->source); })()), 'form_start');
        echo "

                        <div class=\"type-equipement row\">
                            <div class=\"col-md-10\">
                                ";
        // line 70
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 70, $this->source); })()), "Type", [], "any", false, false, false, 70), 'row');
        echo "
                            </div>

                            <div class=\"col-md-2\" id=\"btn-create-type\">
                                <p class=\"btn-create-type\">+</p>
                            </div>

                            <div class=\"col-md-12 row\" id=\"create_type\">
                                <div class=\"controls-2 row col-md-10\">
                                    ";
        // line 79
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_type"]) || array_key_exists("form_type", $context) ? $context["form_type"] : (function () { throw new RuntimeError('Variable "form_type" does not exist.', 79, $this->source); })()), 'form_start');
        echo "
                                    <div class=\"entry-2 input-group col-12\">
                                        ";
        // line 81
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_type"]) || array_key_exists("form_type", $context) ? $context["form_type"] : (function () { throw new RuntimeError('Variable "form_type" does not exist.', 81, $this->source); })()), "name", [], "any", false, false, false, 81), 'widget');
        echo "
                                        <a href=\"";
        // line 82
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("alstom.addType");
        echo "\" class=\"input-group-btn-\">";
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_type"]) || array_key_exists("form_type", $context) ? $context["form_type"] : (function () { throw new RuntimeError('Variable "form_type" does not exist.', 82, $this->source); })()), "save", [], "any", false, false, false, 82), 'widget', ["label" => "+"]);
        echo "</a>
                                    </div>
                                    ";
        // line 84
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_type"]) || array_key_exists("form_type", $context) ? $context["form_type"] : (function () { throw new RuntimeError('Variable "form_type" does not exist.', 84, $this->source); })()), 'form_end');
        echo "
                                </div>
                            </div>
                        </div>
                        <div class=\"type-equipement row\">
                            <div class=\"col-md-10\">
                                ";
        // line 90
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 90, $this->source); })()), "Sous_type", [], "any", false, false, false, 90), 'row');
        echo "
                            </div>

                            <div class=\"col-md-2\" id=\"btn-create-soustype\">
                                <p class=\" btn-create-type\">+</p>
                            </div>

                            <div class=\"col-md-12 row\" id=\"create_soustype\">
                                <div class=\"controls row col-md-10\">
                                    ";
        // line 99
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_soustype"]) || array_key_exists("form_soustype", $context) ? $context["form_soustype"] : (function () { throw new RuntimeError('Variable "form_soustype" does not exist.', 99, $this->source); })()), 'form_start');
        echo "
                                    <div class=\"entry input-group col-12\">
                                        ";
        // line 101
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_soustype"]) || array_key_exists("form_soustype", $context) ? $context["form_soustype"] : (function () { throw new RuntimeError('Variable "form_soustype" does not exist.', 101, $this->source); })()), "name", [], "any", false, false, false, 101), 'widget');
        echo "
                                        <span class=\"input-group-btn\">";
        // line 102
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_soustype"]) || array_key_exists("form_soustype", $context) ? $context["form_soustype"] : (function () { throw new RuntimeError('Variable "form_soustype" does not exist.', 102, $this->source); })()), "save", [], "any", false, false, false, 102), 'widget', ["label" => "+"]);
        echo "</span>
                                    </div>
                                    ";
        // line 104
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_soustype"]) || array_key_exists("form_soustype", $context) ? $context["form_soustype"] : (function () { throw new RuntimeError('Variable "form_soustype" does not exist.', 104, $this->source); })()), 'form_end');
        echo "
                                </div>
                            </div>
                        </div>

                        <div class=\"row\">

                            <div class=\"col-md-12\">
                                ";
        // line 112
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 112, $this->source); })()), "DTR_board", [], "any", false, false, false, 112), 'row');
        echo "
                            </div>
                            <div class=\"col-md-12\">
                                ";
        // line 115
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 115, $this->source); })()), "Indice_DTR", [], "any", false, false, false, 115), 'row');
        echo "
                            </div>
                            <div class=\"col-md-12\">
                                ";
        // line 118
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 118, $this->source); })()), "Num_serie", [], "any", false, false, false, 118), 'row');
        echo "
                            </div>
                        </div>

                    </div>
                </div>
                <a class=\"btn-add-equipment col-5 ml-5 mt-4 mb-5\" id=\"create-equipment\" type=\"button\">Add equipement</a>

                <!--Footer-->
                <div class=\"modal-footer justify-content-center\">
                    ";
        // line 128
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 128, $this->source); })()), "save", [], "any", false, false, false, 128), 'widget', ["label" => "Create Ertms"]);
        echo "
                    ";
        // line 129
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_equipement"]) || array_key_exists("form_equipement", $context) ? $context["form_equipement"] : (function () { throw new RuntimeError('Variable "form_equipement" does not exist.', 129, $this->source); })()), 'form_end');
        echo "
                    <button class=\"btn-cancel-ertms\" data-dismiss=\"modal\" id=\"cancel-ertms\" type=\"button\">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal: modalPoll -->


</div>
<button class=\"btn btn-primary mt-4\">";
        // line 139
        echo twig_escape_filter($this->env, (((isset($context["button"]) || array_key_exists("button", $context))) ? (_twig_default_filter((isset($context["button"]) || array_key_exists("button", $context) ? $context["button"] : (function () { throw new RuntimeError('Variable "button" does not exist.', 139, $this->source); })()), "Send")) : ("Send")), "html", null, true);
        echo "</button>

";
        // line 141
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 141, $this->source); })()), 'form_end');
        echo "


";
        // line 144
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
        echo "    <link href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css\" rel=\"stylesheet\">
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 144
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 145
        echo "    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>

    <script>
        \$(function () {

            \$(document).on('click', '.btn-add', function (e) {
                e.preventDefault();

                var controlForm = \$('.controls form:first'),
                    currentEntry = \$(this).parents('.entry:first'),
                    newEntry = \$(currentEntry.clone()).appendTo(controlForm);


                newEntry.find('input').val('');
                controlForm.find('.entry:not(:last) .btn-add').removeClass('btn-add').addClass('btn-remove').removeClass('btn-success').addClass('btn-danger').html('<span>-</span>');

            }).on('click', '.btn-remove', function (e) {
                \$(this).parents('.entry:first').remove();

                e.preventDefault();
                return false;
            });


        });
        \$(function () {
            \$(document).on('click', '.btn-add', function (e) {
                e.preventDefault();

                var controlForm = \$('.controls-2 form:first'),
                    currentEntry = \$(this).parents('.entry-2:first'),
                    newEntry = \$(currentEntry.clone()).appendTo(controlForm);

                newEntry.find('input').val('');

                controlForm.find('.entry-2:not(:last) .btn-add').removeClass('btn-add').addClass('btn-remove').removeClass('btn-success').addClass('btn-danger').html('<span>-</span>');
            }).on('click', '.btn-remove', function (e) {
                \$(this).parents('.entry-2:first').remove();

                e.preventDefault();
                return false;
            });
        });

        \$(document).ready(function () {

            // Vidage des inputs aux changement de select
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

            // Traitement du choix du type de train
            \$('#trains_trainType').change(function () {

                let current_choice = \"\",
                    ertms_left = \"\",
                    ertms_middle = \"\",
                    ertms_right = \"\";

                \$(\"#trains_trainType option:selected\").each(function () {

                    current_choice += \$(this).text() + \" \";

                });

                /* traitement dans le choix train */
                if (current_choice.trim() == 'Train') {
                    \$('#select_train').show();
                    \$('#select_locomotive').hide();

                    \$('#ertms-train-1').click(function () { // l'ertms de gauche selectionner
                        \$('#ertms-train-1').addClass(\"selected\");
                        ertms_left = true;
                        ertms_middle = false;

                        \$('#ertms-train-2').removeClass(\"selected\");
                        \$('#btn-choice-ertms').show();
                        \$('#create-ertms-1').show();
                        \$('#add-ertms').text('add ERTMS left')


                    });
                    \$('#ertms-train-2').click(function () { // l'ertms du milieu selectionner
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
                    \$('#ertms-train-3').click(function () { // l'ertms de droite selectionner
                        \$('#ertms-train-3').addClass(\"selected\");
                        ertms_right = true;
                        ertms_middle = false;
                        if (ertms_left == true && ertms_middle == false) {
                            \$('#create-ertms-1').show();
                            \$('#create-ertms-2').show();
                        } else if (ertms_right == true && ertms_left == false) {
                            \$('#create-ertms-1').hide();
                            \$('#create-ertms-2').show();
                        }

                        \$('#ertms-train-2').removeClass(\"selected\");
                        \$('#btn-choice-ertms').show();

                        \$('#add-ertms').text('add ERTMS right');


                    });


                    \$('#trains_trainType').change(function () {
                        \$('#btn-choice-ertms').hide();
                    });


                } else if (current_choice.trim() == 'Locomotive') {

                    \$('#select_locomotive').show();
                    \$('#select_train').hide();

                    \$('#ertms-loco-1').click(function () { // l'ertms de gauche selectionner
                        \$('#ertms-loco-1').addClass(\"selected\");
                        \$('#ertms-loco-2').removeClass(\"selected\");
                        \$('#btn-choice-ertms').show();
                        \$('#add-ertms').text('add ERTMS left')
                        \$('#create-ertms-1').show();

                    });
                    \$('#ertms-loco-2').click(function () { // l'ertms de droite selectionner
                        \$('#ertms-loco-2').addClass(\"selected\");
                        \$('#ertms-loco-1').removeClass(\"selected\");
                        \$('#btn-choice-ertms').show();
                        \$('#add-ertms').text('add ERTMS right')
                        \$('#create-ertms-1').show();


                    });
                    \$('#trains_trainType').change(function () {
                        \$('#btn-choice-ertms').hide();
                    });


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
        return array (  313 => 145,  303 => 144,  292 => 2,  282 => 1,  272 => 144,  266 => 141,  261 => 139,  248 => 129,  244 => 128,  231 => 118,  225 => 115,  219 => 112,  208 => 104,  203 => 102,  199 => 101,  194 => 99,  182 => 90,  173 => 84,  166 => 82,  162 => 81,  157 => 79,  145 => 70,  138 => 66,  134 => 64,  101 => 28,  97 => 27,  93 => 26,  88 => 24,  77 => 16,  73 => 15,  68 => 13,  60 => 8,  56 => 7,  52 => 6,  47 => 4,  45 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% block stylesheets %}
    <link href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css\" rel=\"stylesheet\">
{% endblock %}
{{ form_start(form_train) }}
<div class=\"row\">
    <div class=\"col-md-10\">{{ form_row(form_train.name) }}</div>
    <div class=\"col-md-10\">{{ form_row(form_train.projects) }}</div>
    <div class=\"col-md-10\">{{ form_row(form_train.trainType) }}</div>

    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_locomotive\">
        <h4>Select EVC :
        </h4>
        <img src=\"{{ asset('../build/img/trains/locomotive-select.svg') }}\" alt=\"\" class=\"col-md-10 img-type-train\">
        <figure class=\"content-ertms col-md-10\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms \" id=\"ertms-loco-1\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms \" id=\"ertms-loco-2\">

        </figure>
    </div>

    <div class=\"content-type-train col-md-12 mt-4\" id=\"select_train\">
        <h4>Select EVC :
        </h4>
        <img src=\"{{ asset('../build/img/trains/train-select.svg') }}\" alt=\"\" class=\"col-md-10  img-type-train\">
        <figure class=\"content-ertms col-md-10\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms\" id=\"ertms-train-1\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms\" id=\"ertms-train-2\">
            <img src=\"{{ asset('../build/img/trains/ertms.svg') }}\" alt=\"\" class=\"ertms \" id=\"ertms-train-3\">
        </figure>
    </div>

    <div class=\"col-md-10 mt-4\" id=\"btn-choice-ertms\">
        <div class=\"content-btn-train col-12\">
            <button class=\"btn btn-secondary\" data-target=\"#modalPoll-1\" data-toggle=\"modal\" id=\"create-ertms-1\" type=\"button\">Add ERTMS</button>
            <button class=\"btn btn-secondary\" data-target=\"#modalPoll-1\" data-toggle=\"modal\" id=\"create-ertms-2\" type=\"button\">Add ERTMS</button>
        </div>
    </div>


    <div aria-hidden=\"true\" aria-labelledby=\"exampleModalLabel\" class=\"modal fade right\" data-backdrop=\"false\" id=\"modalPoll-1\" role=\"dialog\" tabindex=\"-1\">
        <div class=\"modal-dialog modal-full-height modal-right modal-notify modal-info\">
            <div
                class=\"modal-content\">
                <!--Header-->
                <div class=\"modal-header\">
                    <p class=\"heading lead\" id=\"add-ertms\"></p>
                    <button aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" id=\"close-modal\" type=\"button\">
                        <span aria-hidden=\"true\" class=\"white-text\">×</span>
                    </button>
                </div>
                <!--Body-->
                <div class=\"modal-body\" id=\"modal-body\">
                    <button aria-label=\"Close\" class=\"close\" data-dismiss=\"modal-body\" id=\"close-equipement\" type=\"button\">
                        <span aria-hidden=\"true\" class=\"white-text\" style=\"color:red\">×</span>
                    </button>
                    <div class=\"col-md-12 mt-4 modal-ertms\" id=\"create-ertms-train-1\">
                        <div
                            class=\"name-ertms\">{# {{ form_start(form_ertms) }}
                                                                                        <div class=\"content-form-ertms-name row\">
                                                                                            <div class=\"col-md-12\">
                                                                                                {{ form_row(form_ertms.name_configuration, {'label': 'Name ERTMS Equipment'}) }                                    </div>
                                                                                        </div>
                                                                                        {{ form_end(form_ertms) }} #}

                        </div>
                        {{ form_start(form_equipement) }}

                        <div class=\"type-equipement row\">
                            <div class=\"col-md-10\">
                                {{ form_row(form_equipement.Type) }}
                            </div>

                            <div class=\"col-md-2\" id=\"btn-create-type\">
                                <p class=\"btn-create-type\">+</p>
                            </div>

                            <div class=\"col-md-12 row\" id=\"create_type\">
                                <div class=\"controls-2 row col-md-10\">
                                    {{ form_start(form_type) }}
                                    <div class=\"entry-2 input-group col-12\">
                                        {{ form_widget(form_type.name) }}
                                        <a href=\"{{ path('alstom.addType') }}\" class=\"input-group-btn-\">{{ form_widget(form_type.save, {'label' : '+'}) }}</a>
                                    </div>
                                    {{ form_end(form_type) }}
                                </div>
                            </div>
                        </div>
                        <div class=\"type-equipement row\">
                            <div class=\"col-md-10\">
                                {{ form_row(form_equipement.Sous_type) }}
                            </div>

                            <div class=\"col-md-2\" id=\"btn-create-soustype\">
                                <p class=\" btn-create-type\">+</p>
                            </div>

                            <div class=\"col-md-12 row\" id=\"create_soustype\">
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
                <a class=\"btn-add-equipment col-5 ml-5 mt-4 mb-5\" id=\"create-equipment\" type=\"button\">Add equipement</a>

                <!--Footer-->
                <div class=\"modal-footer justify-content-center\">
                    {{ form_widget(form_equipement.save, {'label' : 'Create Ertms'}) }}
                    {{ form_end(form_equipement) }}
                    <button class=\"btn-cancel-ertms\" data-dismiss=\"modal\" id=\"cancel-ertms\" type=\"button\">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal: modalPoll -->


</div>
<button class=\"btn btn-primary mt-4\">{{ button|default('Send') }}</button>

{{ form_end(form_train) }}


{% block javascripts %}
    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>

    <script>
        \$(function () {

            \$(document).on('click', '.btn-add', function (e) {
                e.preventDefault();

                var controlForm = \$('.controls form:first'),
                    currentEntry = \$(this).parents('.entry:first'),
                    newEntry = \$(currentEntry.clone()).appendTo(controlForm);


                newEntry.find('input').val('');
                controlForm.find('.entry:not(:last) .btn-add').removeClass('btn-add').addClass('btn-remove').removeClass('btn-success').addClass('btn-danger').html('<span>-</span>');

            }).on('click', '.btn-remove', function (e) {
                \$(this).parents('.entry:first').remove();

                e.preventDefault();
                return false;
            });


        });
        \$(function () {
            \$(document).on('click', '.btn-add', function (e) {
                e.preventDefault();

                var controlForm = \$('.controls-2 form:first'),
                    currentEntry = \$(this).parents('.entry-2:first'),
                    newEntry = \$(currentEntry.clone()).appendTo(controlForm);

                newEntry.find('input').val('');

                controlForm.find('.entry-2:not(:last) .btn-add').removeClass('btn-add').addClass('btn-remove').removeClass('btn-success').addClass('btn-danger').html('<span>-</span>');
            }).on('click', '.btn-remove', function (e) {
                \$(this).parents('.entry-2:first').remove();

                e.preventDefault();
                return false;
            });
        });

        \$(document).ready(function () {

            // Vidage des inputs aux changement de select
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

            // Traitement du choix du type de train
            \$('#trains_trainType').change(function () {

                let current_choice = \"\",
                    ertms_left = \"\",
                    ertms_middle = \"\",
                    ertms_right = \"\";

                \$(\"#trains_trainType option:selected\").each(function () {

                    current_choice += \$(this).text() + \" \";

                });

                /* traitement dans le choix train */
                if (current_choice.trim() == 'Train') {
                    \$('#select_train').show();
                    \$('#select_locomotive').hide();

                    \$('#ertms-train-1').click(function () { // l'ertms de gauche selectionner
                        \$('#ertms-train-1').addClass(\"selected\");
                        ertms_left = true;
                        ertms_middle = false;

                        \$('#ertms-train-2').removeClass(\"selected\");
                        \$('#btn-choice-ertms').show();
                        \$('#create-ertms-1').show();
                        \$('#add-ertms').text('add ERTMS left')


                    });
                    \$('#ertms-train-2').click(function () { // l'ertms du milieu selectionner
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
                    \$('#ertms-train-3').click(function () { // l'ertms de droite selectionner
                        \$('#ertms-train-3').addClass(\"selected\");
                        ertms_right = true;
                        ertms_middle = false;
                        if (ertms_left == true && ertms_middle == false) {
                            \$('#create-ertms-1').show();
                            \$('#create-ertms-2').show();
                        } else if (ertms_right == true && ertms_left == false) {
                            \$('#create-ertms-1').hide();
                            \$('#create-ertms-2').show();
                        }

                        \$('#ertms-train-2').removeClass(\"selected\");
                        \$('#btn-choice-ertms').show();

                        \$('#add-ertms').text('add ERTMS right');


                    });


                    \$('#trains_trainType').change(function () {
                        \$('#btn-choice-ertms').hide();
                    });


                } else if (current_choice.trim() == 'Locomotive') {

                    \$('#select_locomotive').show();
                    \$('#select_train').hide();

                    \$('#ertms-loco-1').click(function () { // l'ertms de gauche selectionner
                        \$('#ertms-loco-1').addClass(\"selected\");
                        \$('#ertms-loco-2').removeClass(\"selected\");
                        \$('#btn-choice-ertms').show();
                        \$('#add-ertms').text('add ERTMS left')
                        \$('#create-ertms-1').show();

                    });
                    \$('#ertms-loco-2').click(function () { // l'ertms de droite selectionner
                        \$('#ertms-loco-2').addClass(\"selected\");
                        \$('#ertms-loco-1').removeClass(\"selected\");
                        \$('#btn-choice-ertms').show();
                        \$('#add-ertms').text('add ERTMS right')
                        \$('#create-ertms-1').show();


                    });
                    \$('#trains_trainType').change(function () {
                        \$('#btn-choice-ertms').hide();
                    });


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
