$('#test-upload').on("click","button",function(){
    
    var filest = document.querySelector("#selector").files;
    var nameFile = "init"
    var tempDestination = "/init"
    console.log(filest);
    //On drag et drop

    //on affiche la barre de progression

    //on envoie l'adresse du fichier
    $.ajax({
        url: '/alstom/uploadFile',
        type: 'POST',
        data: {
            'bucket' : 'application',
            'upload_request' : "upload",
            'filename' : nameFile,
            'tempDestination' : tempDestination
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {
            console.log(response);
        }
    });
});
