//définition des variables
//plugs
let ListPlugs = []
//detection si le browser gère le drag&drop
var isAdvancedUpload = function () {
    var div = document.createElement('div');
    return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
}();
var $form = $('.box');
var $input    = $form.find('input[type="file"]'),
    $label    = $form.find('label'),
    showFiles = function(files) {
      $label.text(files.length > 1 ? ($input.attr('data-multiple-caption') || '').replace( '{count}', files.length ) : files[ 0 ].name);
    };
//identification de la progress bar
prgbar = new ldBar("#test-progress");

//on ouvre le form pour ajouter

$('#addPlugs').on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
});
if (isAdvancedUpload) {
    var droppedFiles = false;
    $form.addClass('has-advanced-upload'); // letting the CSS part to know drag&drop is supported by the browser
    $form.on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
    $form.on('dragover dragenter', function () {
        $form.addClass('is-dragover');
    });
    $form.on('dragleave dragend drop', function () {
        $form.removeClass('is-dragover');
    });
    $form.on('drop', function (e) {
        droppedFiles = e.originalEvent.dataTransfer.files;
        $form.trigger('submit');
    });
}
$form.on('submit', function (e) {
    e.preventDefault();
    
    if ($form.hasClass('is-uploading')) return false;
    showFiles( droppedFiles );
    $form.addClass('is-uploading').removeClass('is-error');

    if (isAdvancedUpload) {
        var ajaxData = new FormData($form.get(0));

        if (droppedFiles) {
            $.each(droppedFiles, function (i, file) {
                ajaxData.append($input.attr('name'), file);
            });
        }
        console.log(ajaxData);
        $.ajax({
            url: '/alstom/uploadFile',
            type: 'POST',
            /*data: {
                'file' : ajaxData,
                'bucket': 'application',
                'upload_request': "upload"
            },*/
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function(evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = (evt.loaded / evt.total) * 100;
                        //Do something with upload progress here
                        prgbar.set(percentComplete);
                        if(percentComplete == 100){
                            $("#test-progress").addClass('is-blink');
                        }
                    }
               }, false);
               return xhr;
            },
            data:ajaxData,
            dataType: 'json',
            cache: false,
            contentType: false,
            processData: false,
            complete: function () {
                $form.removeClass('is-uploading');
                $("#test-progress").removeClass('is-blink');
            },
            success: function (data) {
                $form.addClass(data.success == true ? 'is-success' : 'is-error');
                console.log(data);
            },
            error: function () {
                // Log the error, show an alert, whatever works for you
                console.log("sorry boby");
            }
        });
    } else {
        var iframeName  = 'uploadiframe' + new Date().getTime();
          $iframe   = $('<iframe name="' + iframeName + '" style="display: none;"></iframe>');
      
        $('body').append($iframe);
        $form.attr('target', iframeName);
      
        $iframe.one('load', function() {
          var data = JSON.parse($iframe.contents().find('body' ).text());
          $form
            .removeClass('is-uploading')
            .addClass(data.success == true ? 'is-success' : 'is-error')
            .removeAttr('target');
          if (!data.success) $errorMsg.text(data.error);
          $form.removeAttr('target');
          $iframe.remove();
        });
    }
});

$('#test-upload').on("click", "button", function () {
    var filest = document.querySelector("#selector").files;
    var tempDestination = "test"
    var nameFile = "init"
    var uploadStatus = "PENDING"
    //On drag et drop
    $.ajax({
        url: '/alstom/requestFile',
        type: 'POST',
        data: {
            'bucket': 'application'
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {
            tempDestination = response.path
            $.ajax({
                url: '/alstom/uploadFile',
                type: 'POST',
                data: {
                    'bucket': 'application',
                    'upload_request': "upload",
                    'filename': nameFile,
                    'tempDestination': tempDestination
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
