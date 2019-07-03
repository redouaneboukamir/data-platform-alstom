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
            <a href=\"\"></a>
            <button class=\"btn btn-secondary\" data-target=\"#modalPoll-1\" data-toggle=\"modal\" id=\"create-ertms-1\" type=\"button\">Add ERTMS</button>
            <button class=\"btn btn-secondary\" data-target=\"#modalPoll-1\" data-toggle=\"modal\" id=\"create-ertms-2\" type=\"button\">Add ERTMS</button>
        </div>
    </div>
    <div class=\"name-ertms\">
        <div aria-hidden=\"true\" aria-labelledby=\"exampleModalLabel\" class=\"modal fade right\" data-backdrop=\"false\" id=\"modalPoll-1\" role=\"dialog\" tabindex=\"-1\">
            <div class=\"modal-dialog modal-full-height modal-right modal-notify modal-info\">

                <div class=\"modal-content\">
                    <button aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" id=\"close-modal\" type=\"button\">
                        <span aria-hidden=\"true\" class=\"white-text close-name-ertms\">×</span>
                    </button>
                    <!--Header-->
                    <div class=\"modal-header\">
                        ";
        // line 49
        $this->loadTemplate("alstom/trains/_form-ertms.html.twig", "alstom/trains/_form-train.html.twig", 49)->display($context);
        // line 50
        echo "                        ";
        $this->loadTemplate("alstom/trains/_form-equipment.html.twig", "alstom/trains/_form-train.html.twig", 50)->display($context);
        // line 51
        echo "                    </div>


                </div>
            </div>
        </div>
    </div>
</div>
";
        // line 59
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form_train"]) || array_key_exists("form_train", $context) ? $context["form_train"] : (function () { throw new RuntimeError('Variable "form_train" does not exist.', 59, $this->source); })()), 'form_end');
        echo "
<button class=\"btn btn-primary mt-4\" type=\"submit\">";
        // line 60
        echo twig_escape_filter($this->env, (((isset($context["button"]) || array_key_exists("button", $context))) ? (_twig_default_filter((isset($context["button"]) || array_key_exists("button", $context) ? $context["button"] : (function () { throw new RuntimeError('Variable "button" does not exist.', 60, $this->source); })()), "Send")) : ("Send")), "html", null, true);
        echo "</button>
";
        // line 61
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

    // line 61
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 62
        echo "
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


            /* Créer ertms avec le clique tu premier boutton */


            \$('#close-modal').click(function () {
                \$('#modal-body').hide();
                \$('#create-equipment').show();
                \$('#content-form-ertms').show();
                \$('#content-form-equipment').hide();
                \$('#formulaire-equipment').hide();


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
                        \$('#add-ertms').text(' left')


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
                        \$('#add-ertms').text('middle')


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

                        \$('#add-ertms').text('right');


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
                        \$('#add-ertms').text('left')
                        \$('#create-ertms-1').show();

                    });
                    \$('#ertms-loco-2').click(function () { // l'ertms de droite selectionner
                        \$('#ertms-loco-2').addClass(\"selected\");
                        \$('#ertms-loco-1').removeClass(\"selected\");
                        \$('#btn-choice-ertms').show();
                        \$('#add-ertms').text('right')
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
        return array (  189 => 62,  179 => 61,  168 => 2,  158 => 1,  148 => 61,  144 => 60,  140 => 59,  130 => 51,  127 => 50,  125 => 49,  101 => 28,  97 => 27,  93 => 26,  88 => 24,  77 => 16,  73 => 15,  68 => 13,  60 => 8,  56 => 7,  52 => 6,  47 => 4,  45 => 1,);
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
            <a href=\"\"></a>
            <button class=\"btn btn-secondary\" data-target=\"#modalPoll-1\" data-toggle=\"modal\" id=\"create-ertms-1\" type=\"button\">Add ERTMS</button>
            <button class=\"btn btn-secondary\" data-target=\"#modalPoll-1\" data-toggle=\"modal\" id=\"create-ertms-2\" type=\"button\">Add ERTMS</button>
        </div>
    </div>
    <div class=\"name-ertms\">
        <div aria-hidden=\"true\" aria-labelledby=\"exampleModalLabel\" class=\"modal fade right\" data-backdrop=\"false\" id=\"modalPoll-1\" role=\"dialog\" tabindex=\"-1\">
            <div class=\"modal-dialog modal-full-height modal-right modal-notify modal-info\">

                <div class=\"modal-content\">
                    <button aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" id=\"close-modal\" type=\"button\">
                        <span aria-hidden=\"true\" class=\"white-text close-name-ertms\">×</span>
                    </button>
                    <!--Header-->
                    <div class=\"modal-header\">
                        {% include('alstom/trains/_form-ertms.html.twig') %}
                        {% include('alstom/trains/_form-equipment.html.twig') %}
                    </div>


                </div>
            </div>
        </div>
    </div>
</div>
{{ form_end(form_train) }}
<button class=\"btn btn-primary mt-4\" type=\"submit\">{{ button|default('Send') }}</button>
{% block javascripts %}

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


            /* Créer ertms avec le clique tu premier boutton */


            \$('#close-modal').click(function () {
                \$('#modal-body').hide();
                \$('#create-equipment').show();
                \$('#content-form-ertms').show();
                \$('#content-form-equipment').hide();
                \$('#formulaire-equipment').hide();


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
                        \$('#add-ertms').text(' left')


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
                        \$('#add-ertms').text('middle')


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

                        \$('#add-ertms').text('right');


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
                        \$('#add-ertms').text('left')
                        \$('#create-ertms-1').show();

                    });
                    \$('#ertms-loco-2').click(function () { // l'ertms de droite selectionner
                        \$('#ertms-loco-2').addClass(\"selected\");
                        \$('#ertms-loco-1').removeClass(\"selected\");
                        \$('#btn-choice-ertms').show();
                        \$('#add-ertms').text('right')
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
