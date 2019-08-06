// Vidage des inputs aux changement de select
// $('select[name="trains[projects]"], select[name="trains[trainType]"]').change(function () {
//     $('input[name="trains[name]"]').val('');
// });

/*Masquage de certains élement */
$('#create-ertms-1').hide();
$('#create-ertms-2').hide();
$("#create-ertms-train-1").hide();
$('#create_soustype').hide();
$('#create_type').hide();
$('#modal-body').hide();
for (let i = 1; i < 4; i++) {
    $('#btn-baseline-' + i).css('opacity', '0');
}


$(document).ready(function () {


    loadTrainParameter();
    let nombre_url = extraitNombre(window.location.pathname);

    if ((window.location.pathname == '/alstom/create-train') || (window.location.pathname == '/alstom/edit-train/' + nombre_url)) {

        $.post("/alstom/checkBaseline", ).then(function (response) {
            response.forEach(element => {
                //Remplissage par les element reçu du controller
                $('#select_baseline_1').append(new Option(element.name, element.id));
                $('#select_baseline_2').append(new Option(element.name, element.id));
            })

            $('#select_baseline_1').val('');
            $('#select_baseline_2').val('');
        })
    }
})
// Traitement du choix du type de train
$('#trains_trainType').change(function () {

    loadTrainParameter();
    $('#content-form-baseline-1').hide();
    $('#content-form-baseline-2').hide();
    $('#content-form-baseline-3').hide();
    $('#select_baseline_1').val('');
    $('#select_baseline_2').val('');
    baseline1 = false;
    baseline2 = false;


});
let baseline1 = false,
    baseline2 = false;
$('#btn-baseline-1').click(function () {
    baseline1 = true;
    $('#label-baseline-1').text('Baseline left');
    $('#content-form-baseline-1').removeClass('offset-md-3');
    $('#content-form-baseline-1').show();
    $('#content-form-baseline-2').hide();
    if (baseline2) {
        $('#content-form-baseline-2').removeClass('offset-md-6');
        $('#content-form-baseline-2').addClass('offset-md-1');
        $('#content-form-baseline-2').show();
    } else {
        $('#select_baseline_2').val('');

    }


})
$('#btn-baseline-2').click(function () {
    $('#label-baseline-1').text('Baseline middle');

    $('#content-form-baseline-1').addClass('offset-md-3');
    $('#content-form-baseline-1').show();
    $('#content-form-baseline-2').hide();
    $('#select_baseline_2').val('');

    baseline1 = false;
    baseline2 = false;
    // $('#content-form-baseline-1').removeClass('col-md-6');
    // $('#content-form-baseline-1').addClass('col-md-12');

})
$('#btn-baseline-3').click(function () {
    baseline2 = true;
    $('#label-baseline-2').text('Baseline right');
    $('#content-form-baseline-2').addClass('offset-md-6');
    $('#content-form-baseline-2').show();
    $('#content-form-baseline-1').hide();
    if (baseline1) {
        $('#content-form-baseline-2').addClass('offset-md-1');
        $('#content-form-baseline-2').removeClass('offset-md-6');
        $('#content-form-baseline-1').show();

    } else {
        $('#select_baseline_1').val('');

    }


})

function loadTrainParameter() {
    let current_choice = "",
        ertms_left = "",
        ertms_middle = "",
        ertms_right = "";

    $("#trains_trainType option:selected").each(function () {

        current_choice += $(this).text() + " ";

    });


    /* traitement dans le choix train */
    if (current_choice.trim() == 'Train') {
        $('#select_train').show();
        $('#select_locomotive').hide();

        $('#ertms-train-1').click(function () {
            //l'ertms de gauche selectionner
            $('#ertms-train-1').addClass("selected");
            ertms_left = true;
            ertms_middle = false;
            $('#ertms-train-2').removeClass("selected");
            $('#btn-baseline-1').css('opacity', '1');
            $('#btn-baseline-2').css('opacity', '0');
            $('#add-ertms').text('add ERTMS left')
        });
        $('#ertms-train-2').click(function () {
            // l'ertms du milieu selectionner
            $('#ertms-train-2').addClass("selected");
            ertms_left = false;
            ertms_right = false;
            ertms_middle = true;
            $('#ertms-train-1').removeClass("selected");
            $('#ertms-train-3').removeClass("selected");
            $('#btn-baseline-1').css('opacity', '0')
            $('#btn-baseline-3').css('opacity', '0')
            $('#btn-baseline-2').css('opacity', '1')

            $('#add-ertms').text('add ERTMS middle')
        });
        $('#ertms-train-3').click(function () {
            // l'ertms de droite selectionner
            $('#ertms-train-3').addClass("selected");
            ertms_right = true;
            ertms_middle = false;
            $('#btn-baseline-2').css('opacity', '0')
            if (ertms_left == true && ertms_middle == false) {
                $('#btn-baseline-1').css('opacity', '1')
                $('#btn-baseline-3').css('opacity', '1')
            } else if (ertms_right == true && ertms_left == false) {
                $('#btn-baseline-1').css('opacity', '0')
                $('#btn-baseline-3').css('opacity', '1')
            }
            $('#ertms-train-2').removeClass("selected");

            $('#add-ertms').text('add ERTMS right');
        });




    } else if (current_choice.trim() == 'Locomotive') {

        $('#select_locomotive').show();
        $('#select_train').hide();
        $('#ertms-loco-1').click(function () {

            $('#ertms-loco-1').addClass("selected");
            $('#ertms-loco-2').removeClass("selected");
            $('#btn-baseline-1').css('opacity', '1')
            $('#btn-baseline-3').css('opacity', '0')
        });
        $('#ertms-loco-2').click(function () {
            $('#btn-baseline-3').css('opacity', '1')
            $('#btn-baseline-1').css('opacity', '0')
            $('#ertms-loco-2').addClass("selected");
            $('#ertms-loco-1').removeClass("selected");

        });
    }
}
//Recupere le select de la baseline et le met en visuel
// $('#add-baseline-1').click(function (e) {
//     e.preventDefault();

//     $('#content-form-baseline-1').hide();
//     let name_baseline_1 = $('#select_baseline_1 option:selected').text();
//     console.log(name_baseline_1)
//     $('#content-name-baseline-1').append("<h5>" + name_baseline_1 + "</h5>")

// })
// Soumission formulaire de train

$('#form_train').on('submit', function (e) {

    e.preventDefault();
    $('main').css("opacity", '0.4');
    $('#wait-spinner').show();
    var $this = $(this);
    let data = {};

    $this.find('[name]').each(function (index, value) {
        var that = $(this),
            name = that.attr('name'),
            value = that.val();

        data[name] = value;


    })
    $.ajax({
        url: $this.attr('action'),
        type: $this.attr('method'),
        data: {
            train: data
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {
            window.location.href = "/alstom/trains/" + response.idTrain;
            $('#wait-spinner').hide();
            $('main').css("opacity", '1');


        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

})



//Extrait le nombre d'une streing
function extraitNombre(str) {
    return Number(str.replace(/[^\d]/g, ""))
}