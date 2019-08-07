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

    let nombre_url = extraitNombre(window.location.pathname);

    if (window.location.pathname == '/alstom/InstanceBaseline/' + nombre_url) {

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

$('#select_train').show();
$('#select_locomotive').show();

let current_choice = "",
    ertms_left = "",
    ertms_middle = "",
    ertms_right = "";


$('#ertms-train-1').click(function () {
    ertms_left = true;
    ertms_middle = false;
    //l'ertms de gauche selectionner
    $('#ertms-train-1').addClass("selected");
    $('#ertms-train-2').removeClass("selected");
    $('#label-baseline-1').text('Baseline left');
    $('#content-form-baseline-1').removeClass('offset-md-3');
    $('#content-form-baseline-1').show();
    if (ertms_right == false) {
        $('#content-form-baseline-2').hide();

    } else {

        $('#content-form-baseline-2').removeClass('offset-md-6');
    }


});
$('#ertms-train-2').click(function () {
    // l'ertms du milieu selectionner
    ertms_left = false;
    ertms_right = false;
    ertms_middle = true;
    $('#ertms-train-2').addClass("selected");
    $('#ertms-train-1').removeClass("selected");
    $('#ertms-train-3').removeClass("selected");
    $('#label-baseline-1').text('Baseline midle');
    $('#content-form-baseline-2').hide();
    $('#content-form-baseline-1').show();

    $('#content-form-baseline-1').addClass('offset-md-3');

});
$('#ertms-train-3').click(function () {
    // l'ertms de droite selectionner
    $('#ertms-train-3').addClass("selected");
    ertms_right = true;
    ertms_middle = false;
    $('#label-baseline-2').text('Baseline right');
    if (ertms_left == true && ertms_middle == false) {
        $('#content-form-baseline-1').removeClass('offset-md-3');
        $('#content-form-baseline-2').removeClass('offset-md-6');
        $('#content-form-baseline-2').show();
    } else if (ertms_right == true && ertms_left == false) {
        $('#content-form-baseline-1').removeClass('offset-md-3');
        $('#content-form-baseline-1').hide();
        $('#content-form-baseline-2').addClass('offset-md-6');
        $('#content-form-baseline-2').show();
    }

    $('#ertms-train-2').removeClass("selected");
});


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

//Recupere le select de la baseline et le met en visuel
// $('#add-baseline-1').click(function (e) {
//     e.preventDefault();

//     $('#content-form-baseline-1').hide();
//     let name_baseline_1 = $('#select_baseline_1 option:selected').text();
//     console.log(name_baseline_1)
//     $('#content-name-baseline-1').append("<h5>" + name_baseline_1 + "</h5>")

// })
// Soumission formulaire de train

// $('#form_train').on('submit', function (e) {

//     e.preventDefault();
//     $('main').css("opacity", '0.4');
//     $('#wait-spinner').show();
//     var $this = $(this);
//     let data = {};

//     $this.find('[name]').each(function (index, value) {
//         var that = $(this),
//             name = that.attr('name'),
//             value = that.val();

//         data[name] = value;


//     })
//     $.ajax({
//         url: $this.attr('action'),
//         type: $this.attr('method'),
//         data: {
//             train: data
//         },
//         async: true,
//         dataType: 'json', // JSON
//         success: function (response) {
//             window.location.href = "/alstom/addBaselineToTrain/" + response.idTrain;
//             $('#wait-spinner').hide();
//             $('main').css("opacity", '1');


//         },
//         error: function (xhr, textStatus, errorThrown) {
//             ('Ajax request failed.');
//         }
//     });

// })



//Extrait le nombre d'une streing
function extraitNombre(str) {
    return Number(str.replace(/[^\d]/g, ""))
}