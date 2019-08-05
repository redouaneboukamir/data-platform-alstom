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
let current_choice = "";
$("#trains_trainType option:selected").each(function () {

    current_choice += $(this).text() + " ";
    console.log(current_choice);

});

if (current_choice.trim() == 'Train') {
    $('#select_train').show();
    $('#select_locomotive').hide();
} else if (current_choice.trim() == 'Locomotive') {

    $('#select_locomotive').show();
    $('#select_train').hide();
}

// Traitement du choix du type de train
$('#trains_trainType').change(function () {

    let
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
            $('#btn-choice-ertms').show();
            $('#create-ertms-1').show();
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
            $('#btn-choice-ertms').show();
            $('#create-ertms-1').show();
            $('#create-ertms-2').hide();
            $('#add-ertms').text('add ERTMS middle')
        });
        $('#ertms-train-3').click(function () {
            // l'ertms de droite selectionner
            $('#ertms-train-3').addClass("selected");
            ertms_right = true;
            ertms_middle = false;
            if (ertms_left == true && ertms_middle == false) {
                $('#create-ertms-1').show();
                $('#create-ertms-2').show();
            } else if (ertms_right == true && ertms_left == false) {
                $('#create-ertms-1').hide();
                $('#create-ertms-2').show();
            }
            $('#ertms-train-2').removeClass("selected");
            $('#btn-choice-ertms').show();
            $('#add-ertms').text('add ERTMS right');
        });




    } else if (current_choice.trim() == 'Locomotive') {

        $('#select_locomotive').show();
        $('#select_train').hide();
        $('#ertms-loco-1').click(function () {

            $('#ertms-loco-1').addClass("selected");
            $('#ertms-loco-2').removeClass("selected");
            $('#select-ertms-train').show();
        });
        $('#ertms-loco-2').click(function () {
            $('#ertms-loco-2').addClass("selected");
            $('#ertms-loco-1').removeClass("selected");
            $('#ertms-loco-3').removeClass("selected");
            $('#select-ertms-train').show();
        });
        $('#ertms-loco-3').click(function () {
            $('#ertms-loco-3').addClass("selected");
            $('#ertms-loco-2').removeClass("selected");
            $('#select-ertms-train').show();
        });
    }
});