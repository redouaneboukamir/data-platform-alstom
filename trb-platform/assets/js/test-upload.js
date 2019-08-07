$('#test-upload').on("click","button",function(){
    var filest = document.querySelector("#selector").files;
    var tempDestination ="test"
    var nameFile = "init"
    var uploadStatus = "PENDING"
    //On drag et drop
    $.ajax({
        url: '/alstom/requestFile',
        type: 'POST',
        data: {
            'bucket' : 'application'
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {
            tempDestination = response.path
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
                    //ask for the status
                    console.log(response)
                }
            });
        }
    });
 
}); 
