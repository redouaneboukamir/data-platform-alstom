//définition des variables
let ListePlug = [],
    i = 0,
    valid = false;

// Declaration d'évenement avant chargement de l apage
$('#valid-all-plug').hide();
$('#cancel-all-plug').hide();
//detection si le browser gère le drag&drop
var isAdvancedUpload = function () {
    var div = document.createElement('div');
    return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
}();
var $form = $('.box');
var $input = $form.find('input[type="file"]'),
    $label = $form.find('label'),
    showFiles = function (files) {
        $label.text(files.length > 1 ? ($input.attr('data-multiple-caption') || '').replace('{count}', files.length) : files[0].name);
    };
//identification de la progress bar
prgbar = new ldBar("#test-progress");
//ajouter un plug

$('#add-form-plug').click(function () {
    // $('#card-content-plug').append("test");
    // console.log($('.content-name-drag-plug'))

    if (valid) {
        $('#input-name-plug').val('');
        droppedFiles = false;
        $form.removeClass('is-success');
        $('.label-drop').css('font-weight', '');
        $('.label-drop').html('<strong> Choose a file </strong> <span class="box__dragndrop">or drag it here </span>.</label>');
        $('#content-name-drag-plug').show();
        valid = false;
    } else {
        return false
    }
})
//on ouvre le form pour ajouter

$('#addPlugs').on('click', function (e) {
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
        $('.label-drop').text(droppedFiles[0].name);
        $('.label-drop').css('font-weight', 'bold');
    });
    $form.change('drop', function (e) {
        droppedFiles = e.originalEvent.dataTransfer.files;
        $form.trigger('submit');
    });
}
$form.on('submit', function (e) {
    e.preventDefault();
});

$('#valid-plug').click(function (e) {
    e.preventDefault();

    let Plug = {};
    if ($('#input-name-plug').val() != "" && droppedFiles) {

        $('#valid-all-plug').show();
        $('#cancel-all-plug').show();

        Plug['name_plug'] = $('#input-name-plug').val();

        // Parti du traitement du drag an drop file
        if ($form.hasClass('is-uploading')) return false;
        showFiles(droppedFiles);
        $form.addClass('is-uploading').removeClass('is-error');

        if (isAdvancedUpload) {
            var ajaxData = new FormData($form.get(0));

            if (droppedFiles) {
                $.each(droppedFiles, function (i, file) {
                    ajaxData.append($input.attr('name'), file);
                    Plug['key_plug'] = file.name;

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
                xhr: function () {
                    var xhr = new window.XMLHttpRequest();
                    xhr.upload.addEventListener("progress", function (evt) {
                        console.log(evt.loaded);
                        if (evt.lengthComputable) {
                            var percentComplete = (evt.loaded / evt.total) * 100;
                            //Do something with upload progress here
                            prgbar.set(percentComplete);
                            if (percentComplete == 100) {
                                $("#test-progress").addClass('is-blink');
                                console.log(evt.loaded);
                                evt.total = 0;
                            }
                        }
                    }, false);
                    return xhr;
                },

                data: ajaxData,
                dataType: 'json',
                cache: false,
                contentType: false,
                processData: false,
                complete: function () {
                    $form.removeClass('is-uploading');
                    $("#test-progress").removeClass('is-blink');
                    ListePlug.push(Plug);
                    ListePlug.forEach(writePlug);

                },
                success: function (data) {
                    $form.addClass(data.success == true ? 'is-success' : 'is-error');
                    $('#content-name-drag-plug').hide();
                    valid = true;
                    console.log(ListePlug)


                },
                error: function () {
                    // Log the error, show an alert, whatever works for you
                    console.log("sorry boby");
                }
            });
        } else {
            var iframeName = 'uploadiframe' + new Date().getTime();
            $iframe = $('<iframe name="' + iframeName + '" style="display: none;"></iframe>');

            $('body').append($iframe);
            $form.attr('target', iframeName);

            $iframe.one('load', function () {
                var data = JSON.parse($iframe.contents().find('body').text());
                $form
                    .removeClass('is-uploading')
                    .addClass(data.success == true ? 'is-success' : 'is-error')
                    .removeAttr('target');
                if (!data.success) $errorMsg.text(data.error);
                $form.removeAttr('target');
                $iframe.remove();
            });
        }
    } else {
        alert('Please enter name & file plug')
    }


})

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
                    console.log(response);
                    $('main').css('opacity', "1");
                    $('#wait-spinner').hide();
                }
            });
        }
    });
});
$('#valid-all-plug').on('click', function (e) {
    e.preventDefault();
    $('.main-baseline').css('opacity', "0.4");
    $('#wait-spinner').show();
    let idBaseline = extraitNombre(window.location.pathname);
    $.ajax({
        url: '/alstom/flush-plug',
        type: 'POST',
        data: {
            'idBaseline': idBaseline,
            'Plugs': ListePlug
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {
            //ask for the status
            console.log(response)
            location.reload();
        }
    })
})



//Gére le clique de la suppression
$('#show-done-plug').on('click', '.content-key-name-plug > a', function () {
    if ($(this)[0]["id"][0] == "d") {
        deletePlug(extraitNombre($(this)[0]["id"]));
        console.log($(this)[0]["id"]);
    }
});
//Extrait le nombre d'une streing
function extraitNombre(str) {
    return Number(str.replace(/[^\d]/g, ""))
}
//Supression du plug dans le tableau et le front
function deletePlug(position) {
    ListePlug.splice(position, 1);
    $('.content-key-name-plug').remove();
    console.log(ListePlug)
    ListePlug.forEach(writePlug);
}

function writePlug(element, index, array) {
    //Test l'existence de la div dans le cas où elle existe la remplace si pas la met en place
    if ($('#key-name-' + index).length) {
        $('#key-name-' + index).replaceWith("<span class='content-key-name-plug' id='key-name-" + index + "'><p>" + element.name_plug + "</p><p>" + element.key_plug + "</p><a id='delete-plug-" + index + "'><i class='fas fa-trash-alt poubelle'></i></a></span>")
    } else {
        $('#show-done-plug').append("<span class='content-key-name-plug' id='key-name-" + index + "'><p>" + element.name_plug + "</p><p>" + element.key_plug + "</p><a id='delete-plug-" + index + "'><i class='fas fa-trash-alt poubelle'></i></a></span>");
    }

}