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


// Traitement du choix du type de train
$('#trains_trainType').change(function () {

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


    } else if (current_choice.trim() == 'Locomotive') {

        $('#select_locomotive').show();
        $('#select_train').hide();
    }
});