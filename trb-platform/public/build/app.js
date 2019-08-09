(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ "./assets/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ertms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ertms */ "./assets/js/ertms.js");
/* harmony import */ var _ertms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ertms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _equipement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equipement */ "./assets/js/equipement.js");
/* harmony import */ var _equipement__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_equipement__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseline */ "./assets/js/baseline.js");
/* harmony import */ var _baseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _train__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./train */ "./assets/js/train.js");
/* harmony import */ var _train__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_train__WEBPACK_IMPORTED_MODULE_4__);




 // loads the jquery package from node_modules

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // import the function from greet.js (the .js extension is optional)
// ./ (or ../) means to look for a local file


$('.post-module').hover(function () {
  $(this).find('.description').stop().animate({
    height: "toggle",
    opacity: "toggle"
  }, 300);
});
$('.post-module-fleet').hover(function () {
  $(this).find('.description-fleet').stop().animate({
    height: "toggle",
    opacity: "toggle"
  }, 300);
});
$('.fa-chevron-down').hide();
var labelCliked = false;
$(document).ready(function () {
  $('pre').remove();
  $('.button-left').click(function () {
    $('.sidebar').toggleClass('fliph');
  });
  $('.sidebar').hover(function () {
    $('main').removeClass('col-lg-12');
    $('main').removeClass('pl-5');
    $('main').removeClass('col-md-12');
    $('main').css('transition', 'all 0.6s ease-in-out');
    $('main').addClass('col-lg-10');
    $('main').addClass('col-md-9');
  }, function () {
    $('main').removeClass('col-lg-10');
    $('main').removeClass('col-md-9');
    $('main').css('transition', 'all 0.6s ease-in-out');
    $('main').addClass('pl-5');
    $('main').addClass('col-lg-12');
    $('main').addClass('col-md-12');
  });
  $('.nav-label').click(function () {
    $('.fa-chevron-left').css('transform', 'rotatex(45deg)');
  });
});
$('#file_zip').change(readURL);
$('#remove-file').click(removeUpload);

function readURL() {
  var file = $('#file_zip')[0].files[0];
  console.log(file);
  $('.image-upload-wrap').hide();
  $('#name_file_upload').text(file.name);
  $('.file-upload-content').show();
  $('.image-title').html(file.name);
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}

$('.image-upload-wrap').bind('dragover', function () {
  $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
  $('.image-upload-wrap').removeClass('image-dropping');
});
$('#file_upload').on('submit', function (e) {
  e.preventDefault();
  var file = $('#file_zip')[0].files[0];
  var $this = $(this);
  var fd = new FormData(file);
  console.log(file);
  $.each(file, function (i, file) {
    fd.append('file-' + i, file);
    console.log(file);
  }); // fd.append('File', file);

  console.log(fd);
  $.ajax({
    url: $this.attr('action'),
    type: 'POST',
    processData: false,
    contentType: false,
    data: fd,
    success: function success(response) {
      console.log(response);
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
});

/***/ }),

/***/ "./assets/js/baseline.js":
/*!*******************************!*\
  !*** ./assets/js/baseline.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//Masquage de certains modale de la page
$('#formulaire-equipment').hide();
$('#content-form-equipment').hide();
$('#modal-content-form-equipement').hide();
$('#previous-equipment').hide();
$('#wait-spinner').hide(); //Delcaration variable

var $type = $('#equipement_Type');
$type.attr('required', 'required');
var Equipments = [],
    i = 0,
    indexEVC = 0,
    posIndex = 0,
    PresenceEVC = false,
    idEquipment = 0,
    tabIndexEquipt = [];
select = document.createElement("select"), previous = "", tabEquipementType = ["EVC", "CARTE", "SENSOR", "DMI"], tabEquipementSubtype = ["CORE", "TUI", "SDMU", "SENSE", "TWINS"]; //Vidage des inputs au refresh de la page

$(document).ready(function () {
  var data = {};
  data[$type.attr('name')] = $type.val();

  if (window.location.pathname == '/alstom/create_baseline') {
    $('main').css("opacity", '0.4');
    $('#wait-spinner').show();
    $.post("/alstom/checkSubtype", data).then(function (response) {
      $('main').css("opacity", '1');
      $('#wait-spinner').hide(); //Vidage champ soustype

      $('#equipement_sous_type').empty();
      response.forEach(function (element) {
        //Remplissage par les element reçu du controller
        $('#equipement_sous_type').append(new Option(element.name, element.id));
      });
    });
  } else {
    console.log(window.location.pathname);
  } // $('#equipement_sous_type').empty();
  // $(':input', '#form_equipement').not(':button, :submit, :reset, :hidden').val('');

}); //AJAX Changement de sous-type en fonction du type

$type.change(function () {
  var data = {};
  data[$type.attr('name')] = $type.val();
  $('#wait-spinner').show();
  $.post("/alstom/checkSubtype", data).then(function (response) {
    //Vidage champ soustype
    $('#wait-spinner').hide();
    $('#equipement_sous_type').empty();
    response.forEach(function (element) {
      //Remplissage par les element reçu du controller
      $('#equipement_sous_type').append(new Option(element.name, element.id));
    });
  });
}); //AJAX soumission formulaire d'ajout equipement

$('#form_equipement').on('submit', function (e) {
  //Empêche le chargement de la page sois fait automatiquement
  e.preventDefault();
  $('#wait-spinner').show();
  var $this = $(this);
  var data = {},
      action; //Rempli data a partir des valeur des inputs

  $this.find('[name]').each(function (index, value) {
    var that = $(this),
        name = that.attr('name');

    if (name != "equipement[_token]" && name != "soumission_equipement") {
      value = that.val();
      data[name] = value;
    }

    if (name == 'soumission_edit_equipement') {
      action = "edit";
    } else {
      action = "add";
    }
  }); // Si le formulaire est pour ajouer un nouvel equipement

  if (action == "add") {
    //Remplis le tableau des équipements
    Equipments.push(data); //Effecture la requête ajax pour l'ajout d'équipement

    $.ajax({
      url: $this.attr('action'),
      type: $this.attr('method'),
      data: {
        tabEquipts: Equipments
      },
      async: true,
      dataType: 'json',
      // JSON
      success: function success(response) {
        console.log(response);
        $('main').css("opacity", '1');
        $('#wait-spinner').hide();
      },
      error: function error(xhr, textStatus, errorThrown) {
        'Ajax request failed.';
      }
    }); // Ou si le formulaire est pour éditer un equipement déja existant sur la page de l'ertms lié a celui-ci
  } else if (action == "edit") {
    var idErtms = extraitNombre(window.location.pathname);
    $.ajax({
      url: '/alstom/edit-equipment/' + idEquipment,
      type: $this.attr('method'),
      data: {
        equipement: data,
        idErtms: idErtms
      },
      async: true,
      dataType: 'json',
      // JSON
      success: function success(response) {
        console.log(response);
        $('main').css("opacity", '1');
        $('#wait-spinner').hide();
      },
      error: function error(xhr, textStatus, errorThrown) {
        'Ajax request failed.';
      }
    });
  }

  $('#modal-content-form-equipement').hide();
  $('.modal-footer').show();
  $('#create-equipment').show();
  $('#show-equipment').show();
  $('#previous-equipment').hide(); //Boucle les équipements et les installe au front

  Equipments.forEach(returnIndexElement);
}); //Validation de baseline 

$('#create-baseline').click(function () {
  if ($("#baseline_name").val() == "") {
    alert("Please enter a baseline name ");
    return false;
  } else {
    $('#show-equipment').show();
  }
});
var baselineName;
$('#form_baseline').on('submit', function (e) {
  $('#wait-spinner').show();
  e.preventDefault();
  var $this = $(this);
  var data = {};
  $this.find('[name]').each(function (index, value) {
    var that = $(this),
        name = that.attr('name'),
        value = that.val();
    data[name] = value;

    if (name == 'baseline[name]') {
      baselineName = value;
    }
  });
  $.ajax({
    url: $this.attr('action'),
    type: $this.attr('method'),
    data: {
      baseline: data
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      $('#wait-spinner').hide();
      $('.title-baseline').text(response.baseline);
      $('#content-form-equipment').show();
      $('#previous-equipment').hide();
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
}); //Validation de tous les équipements et de la baseline

$('#valid-all-equipments').on('click', function (e) {
  e.preventDefault();

  if (Equipments != "") {
    $('.main-baseline').css('opacity', "0.4");
    $('#wait-spinner').show();
    $.ajax({
      url: '/alstom/flush-all-equipt',
      type: 'POST',
      data: {
        baselineName: baselineName,
        tabEquipts: Equipments
      },
      async: true,
      dataType: 'json',
      // JSON
      success: function success(response) {
        idBaseline = response.baseline;
        $('#wait-spinner').hide();
        window.location.href = "/alstom/baseline/" + idBaseline;
      },
      error: function error(xhr, textStatus, errorThrown) {
        'Ajax request failed.';
      }
    });
  } else {
    alert('Please enter Equipments before valid');
  }
}); //Gére le clique de la suppression

$('#show-equipment').on('click', '.edit-delete-equipement > a', function () {
  if ($(this)[0]["id"][0] == "d") {
    deleteEquipment(extraitNombre($(this)[0]["id"]));
  }
}); //cache le modal d'edit d'equipement

$('#modal-content-form-equipement-edit').hide(); // Gere la fermeture du modal d'edit d'equipement

$('#close-modal-form-equipment-edit').click(function () {
  $('#modal-content-form-equipement-edit').hide();
  $('.main-ertms').css("opacity", '1');
}); // 
// Requete AJAX pour remplir le formulaire d'équipement avec l'equipement selectionner

$('.content-description-dtr').on('click', '.edit-delete-equipement > a', function (e) {
  e.preventDefault();
  $('.main-ertms').css("opacity", '0.4');
  $('#wait-spinner').show();
  idEquipment = extraitNombre($(this)[0]["classList"][0]);
  var $this = $("#form_equipement_edit");
  var data = {};
  $.ajax({
    url: '/alstom/edit-equipment/' + idEquipment,
    type: 'POST',
    data: {},
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      $('#equipement_Type').val(response["type"]["id"]);
      data[$('#equipement_Type').attr('name')] = $('#equipement_Type').val();
      $.post("/alstom/checkSubtype", data).then(function (response) {
        //Vidage champ soustype
        $('#equipement_sous_type').empty();
        response.forEach(function (element) {
          //Remplissage par les element reçu du controller
          $('#equipement_sous_type').append(new Option(element.name, element.id));
        });
      }).done(function () {
        $('.main-ertms').css("opacity", '0.4');
        $('#wait-spinner').show(); //Rempli input avec valeur recu de l'equipement

        $this.find('[name]').each(function (index, value) {
          var that = $(this);

          switch (value.id) {
            case 'equipement_Type':
              break;

            case 'equipement_sous_type':
              if (response["SousType"] != null) {
                $('#' + value.id).val(response["SousType"]["id"]);
              }

              break;

            case 'equipement_DTR_board':
              $('#' + value.id).val(response["dTRBoard"]);
              break;

            case 'equipement_Indice_DTR':
              $('#' + value.id).val(response["indiceDTR"]);
              break;

            case 'equipement_Num_serie':
              $('#' + value.id).val(response["numSerie"]);
              break;
          }
        });
        $('#wait-spinner').hide();
        $('#modal-content-form-equipement-edit').show();
      });
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
}); //Formulaire d'edit de l'équipement

$('#form_equipement_edit').on('submit', function (e) {
  e.preventDefault();
  $('.main-ertms').css("opacity", '0.4');
  $('#form_equipement_edit').css("opacity", "0.4");
  $("#wait-spinner").css("z-index", "99999");
  $('#wait-spinner').show();
  var $this = $(this);
  var data = {},
      action; //Rempli data a partir des valeur des inputs

  $this.find('[name]').each(function (index, value) {
    var that = $(this),
        name = that.attr('name');

    if (name != "equipement[_token]" && name != "soumission_equipement") {
      value = that.val();
      data[name] = value;
    }
  });
  $.ajax({
    url: '/alstom/edit-equipment/' + idEquipment,
    type: 'POST',
    data: {
      'equipement': data,
      "soumission_edit_equipement": true
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      location.reload();
      $('#wait-spinner').hide();
      $('#modal-content-form-equipement-edit').show();
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
}); //Requete AJAX de création de version logiciel

$('#form_version').on('submit', function (e) {
  e.preventDefault();
  $('.main-baseline').css("opacity", '0.4');
  $('#wait-spinner').show();
  var $this = $(this);
  var data = {};
  $this.find('[name]').each(function (index, value) {
    var that = $(this),
        name = that.attr('name'),
        value = that.val();
    data[name] = value;
  });
  $.ajax({
    url: $this.attr('action'),
    type: $this.attr('method'),
    data: {
      idBaseline: extraitNombre(window.location.pathname),
      version: data
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      $('#title-version').html("Version logiciel : " + " " + response.version);
      $('.main-baseline').css("opacity", '1');
      $('#wait-spinner').hide();
      $('#close-modal-form-version').trigger('click');
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
});

function returnIndexElement(element, index, array) {
  //Test l'existence de la div dans le cas où elle existe la remplace si pas la met en place
  if ($('#description-equipement-' + index).length) {
    $('#description-equipement-' + index).replaceWith('<div class="description" id="description-equipement-' + index + '"></div>');
  } else {
    $("#show-equipment").append('<div class="description" id="description-equipement-' + index + '"></div>');
  } //test si l'équipement est la carte ou non


  if (element["equipement[Type]"] != "2") {
    //Swith replacement de l'id du type avec son nom
    switch (element["equipement[Type]"]) {
      case "1":
        $("#description-equipement-" + index + "").append(writeType(4, 0));
        $("#description-equipement-" + index + "").addClass("description-SubtypeCard");
        indexEVC = $("#description-equipement-" + index + "");
        break;

      case "3":
        $("#description-equipement-" + index + "").append(writeType(4, 2));
        break;

      case "4":
        $("#description-equipement-" + index + "").append(writeType(4, 3));
        break;
    }

    switch (element["equipement[sous_type]"]) {
      case "4":
        $("#description-equipement-" + index + "").append(writeSubtype(5, 3));
        break;

      case "5":
        $("#description-equipement-" + index + "").append(writeSubtype(5, 4));
        break;
    }

    $("#description-equipement-" + index + "").append('<div class="content-description-dtr" id="content-description-' + index + '"></div>');
    $("#content-description-" + index + "").append('<p>' + element["equipement[DTR_board]"] + '</p>');
    $("#content-description-" + index + "").append('<p>' + element["equipement[Indice_DTR]"] + '</p>');
    $("#content-description-" + index + "").append('<p>' + element["equipement[Num_serie]"] + '</p>');
    $("#content-description-" + index + "").append(writeEditDelete(index));
  } else {
    for (i = 0; i < Equipments.length; i++) {
      if (Equipments[i]["equipement[Type]"] == "1") {
        PresenceEVC = true;
      }
    }

    ;

    if (PresenceEVC) {
      //Ecris le nom du type "carte" sous le type  EVC
      // $(indexEVC).append(writeType(5, 1));
      //Parcous le type de soustype 
      switch (element["equipement[sous_type]"]) {
        case "1":
          $(indexEVC).append(writeSubtype(5, 0));
          break;

        case "2":
          $(indexEVC).append(writeSubtype(5, 1));
          break;

        case "3":
          $(indexEVC).append(writeSubtype(5, 2));
          break;
      }

      $(indexEVC).append('<div class="content-description-dtr content-description-dtrCard" id="content-description-' + index + '"></div>');
      $("#content-description-" + index + "").append('<p>' + element["equipement[DTR_board]"] + '</p>');
      $("#content-description-" + index + "").append('<p>' + element["equipement[Indice_DTR]"] + '</p>');
      $("#content-description-" + index + "").append('<p>' + element["equipement[Num_serie]"] + '</p>');
      $("#content-description-" + index + "").append(writeEditDelete(index));
      $('#description-equipement-' + index).remove();
    } else {
      alert('Please enter EVC equipement before');
      $('#description-equipement-' + index).remove();
      Equipments.splice(index, 1);
      $('.modal-footer').hide();
      $('#create-equipment').hide();
      $('#show-equipment').hide();
      $('#modal-content-form-equipement').show();
    }
  }
} //Supression de l'équipement dans le tableau et le front


function deleteEquipment(position) {
  Equipments.splice(position, 1);
  $('.description').remove();
  Equipments.forEach(returnIndexElement);
} //Extrait le nombre d'une streing


function extraitNombre(str) {
  return Number(str.replace(/[^\d]/g, ""));
} //Ecris le titre du type d'équipement


function writeType(size, index) {
  return '<h' + size + ' class="description-Type " id="description-type ">' + tabEquipementType[index] + '</h' + size + '>';
}

; //Ecris le titre du soustype d'équipement

function writeSubtype(size, index) {
  return '<h' + size + ' class="description-Type " id="description-subType ">' + tabEquipementSubtype[index] + '</h' + size + '>';
}

; //Ecris le titre du soustype d'équipement

function writeSubtypeCard(size, index) {
  return '<h' + size + ' class="description-subtype" id="description-subType ">' + tabEquipementSubtype[index] + '</h' + size + '>';
}

; //Ecrit les 2 icons d'edit et delete

function writeEditDelete(index) {
  return ' <p class="edit-delete-equipement"> <a id="edit-' + index + '"><i class="fas fa-edit"></i> </a> <a id="delete-' + index + '"><i class = "fas fa-trash-alt poubelle"> </i></a></p>';
}

;
/*au click de l'add Equipment afficher le formulaire d'ajout d'équipement*/

$('#create-equipment').click(function () {
  $('#create-equipment').hide();
  $('#show-equipment').hide();
  $('#modal-content-form-equipement').show();
  $('#previous-equipment').show();
  $('.modal-footer').hide();
  $('#equipement_sous_type').empty();
  $(':input', '#form_equipement').not(':button, :submit, :reset, :hidden').val('');
  previous = "equipment";
}); // Gere le click du previous

$("#previous-equipment").click(function (e) {
  e.preventDefault();
  $('#modal-content-form-equipement').hide();
  $('#show-equipment').show();
  $('#create-equipment').show();
  $('#previous-equipment').hide();
  $('.modal-footer').show();
});
$('#create-baseline').click(function () {
  $('#modal-content-form-equipement').hide();
  $('#show-equipment').show();
  $('#create-equipment').show();
  $('.modal-footer').show();
}); // Ferme le modal de formulaire d'ajout d'équipement

$('#close-equipement').click(function () {
  $('#modal-content-form-equipement').hide();
  $('#show-equipment').show();
  $('#create-equipment').show();
  $('#previous-equipment').hide();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/equipement.js":
/*!*********************************!*\
  !*** ./assets/js/equipement.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//Validation de l'ertms 
$('#valid-ertms-name').click(function () {
  $("#content-form-ertms").hide();
  $('#content-form-equipment').show();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/ertms.js":
/*!****************************!*\
  !*** ./assets/js/ertms.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// $('#delete-ertms').on('submit', function (e) {
//     e.preventDefault();
//     var $this = $(this);
//     $.ajax({
//         url: $this.attr('action'),
//         type: $this.attr('method'),
//         data: {},
//         async: true,
//         dataType: 'json', // JSON
//         success: function (response) {
//             console.log(response);
//         },
//         error: function (xhr, textStatus, errorThrown) {
//             ('Ajax request failed.');
//         }
//     });
// })

/***/ }),

/***/ "./assets/js/train.js":
/*!****************************!*\
  !*** ./assets/js/train.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// Vidage des inputs aux changement de select
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
$('#modal_baseline_equipement').hide();
$('#close-modal-form-baseline-train').click(function () {
  $('#modal_baseline_equipement').hide();
});

for (var i = 1; i < 4; i++) {
  $('#btn-baseline-' + i).css('opacity', '0');
}

var idEquipment = "",
    indexEVC;
$(document).ready(function () {
  var nombre_url = extraitNombre(window.location.pathname);

  if (window.location.pathname == '/alstom/InstanceBaseline/' + nombre_url) {
    $('main').css("opacity", '0.4');
    $('#wait-spinner').show();
    $.post("/alstom/checkBaseline").then(function (response) {
      response.forEach(function (element) {
        //Remplissage par les element reçu du controller
        $('#select_baseline_1').append(new Option(element.name, element.id));
        $('#select_baseline_2').append(new Option(element.name, element.id));
      });
      $('#select_baseline_1').val('');
      $('#select_baseline_2').val('');
    }).done(function () {
      $('main').css("opacity", '1');
      $('#wait-spinner').hide();
    });
  }
});
$('#select_train').show();
$('#select_locomotive').show();
var current_choice = "",
    ertms_left = false,
    ertms_middle = false,
    ertms_right = false;
$('#close-modal-baseline-1').click(function () {
  if (ertms_right == true) {
    $('#content-form-baseline-2').addClass('offset-md-6');
    $('#content-form-baseline-1').hide();
  } else {
    $('#content-form-baseline-1').hide();
  }

  ertms_left = false;
});
$('#close-modal-baseline-2').click(function () {
  $('#content-form-baseline-2').hide();
  ertms_right = false;
});
$('#ertms-train-1').click(function () {
  ertms_left = true;
  ertms_middle = false; //l'ertms de gauche selectionner

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
  ertms_left = true;

  if (ertms_right == true) {
    $('#content-form-baseline-2').removeClass('offset-md-6');
    $('#content-form-baseline-1').show();
  } else {
    $('#content-form-baseline-1').show();
  }

  $('#label-baseline-1').text('Baseline left');
  $('#ertms-loco-1').addClass("selected");
  $('#ertms-loco-2').removeClass("selected");
  $('#btn-baseline-1').css('opacity', '1');
  $('#btn-baseline-3').css('opacity', '0');
});
$('#ertms-loco-2').click(function () {
  ertms_right = true;
  $('#label-baseline-2').text('Baseline right');
  $('#btn-baseline-3').css('opacity', '1');
  $('#btn-baseline-1').css('opacity', '0');
  $('#ertms-loco-2').addClass("selected");
  $('#ertms-loco-1').removeClass("selected");

  if (ertms_left == true) {
    $('#content-form-baseline-2').removeClass('offset-md-6');
    $('#content-form-baseline-2').show();
  } else {
    $('#content-form-baseline-2').addClass('offset-md-6');
    $('#content-form-baseline-2').show();
  }
}); //Recupere le select de la baseline et le met en visuel

$('#add-baseline-1').click(function (e) {
  e.preventDefault();
  $('main').css("opacity", '0.4');
  $('#wait-spinner').show();

  if (ertms_middle) {
    $('#ertms-train-3').css('opacity', '0');
    $('#ertms-train-1').css('opacity', '0');
  } else if (ertms_left) {
    $('#ertms-train-2').css('opacity', '0');
  } // $('#content-form-baseline-1').hide();


  var idBaseline = $('#select_baseline_1 option:selected').val();
  $('#title_baseline_modal').html($('#select_baseline_1 option:selected').text()); // $('#modal-content-form-equipement-edit').show();

  $.ajax({
    url: '/alstom/CheckEquipements/' + idBaseline,
    type: 'POST',
    data: {},
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      $('#wait-spinner').hide();
      $('#modal_baseline_equipement').show();
      $('main').css('opacity', '0.4');
      var Equipments = JSON.parse(response.equipments);
      Equipments.forEach(CountNumberEquipt);
      Equipments.forEach(FindIndexEvc);
      Equipments.forEach(returnIndexElement);
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
});
$('#add-baseline-2').click(function (e) {
  e.preventDefault();
  $('#ertms-train-2').css('opacity', '0'); // $('#content-form-baseline-1').hide();

  var name_baseline_1 = $('#select_baseline_2 option:selected').val();
  console.log(name_baseline_1); // $('#content-name-baseline-1').append("<h5>" + name_baseline_1 + "</h5>")
}); // Requete AJAX pour remplir le formulaire d'équipement avec l'equipement selectionner

$('#show-equipment ').on('click', '.description > .content-description-dtr > button', function (e) {
  e.preventDefault();
  $('#modal_baseline_equipement').hide();
  $('.main-ertms').css("opacity", '0.4');
  $('#wait-spinner').show();
  idEquipment = extraitNombre($(this)[0]["id"]);
  var $this = $("#form_equipement_edit_baseline");
  var data = {};
  $.ajax({
    url: '/alstom/edit-equipment-baseline/' + idEquipment,
    type: 'POST',
    data: {},
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      $('#equipement_Type').val(response["type"]["id"]);
      data[$('#equipement_Type').attr('name')] = $('#equipement_Type').val();
      $.post("/alstom/checkSubtype", data).then(function (response) {
        //Vidage champ soustype
        $('#equipement_sous_type').empty();
        response.forEach(function (element) {
          //Remplissage par les element reçu du controller
          $('#equipement_sous_type').append(new Option(element.name, element.id));
        });
      }).done(function () {
        $('.main-ertms').css("opacity", '0.4');
        $('#wait-spinner').show(); //Rempli input avec valeur recu de l'equipement

        $this.find('[name]').each(function (index, value) {
          var that = $(this);

          switch (value.id) {
            case 'equipement_Type':
              break;

            case 'equipement_sous_type':
              if (response["SousType"] != null) {
                $('#' + value.id).val(response["SousType"]["id"]);
              }

              break;

            case 'equipement_DTR_board':
              $('#' + value.id).val(response["dTRBoard"]);
              break;

            case 'equipement_Indice_DTR':
              $('#' + value.id).val(response["indiceDTR"]);
              break;

            case 'equipement_Num_serie':
              $('#' + value.id).val(response["numSerie"]);
              break;
          }
        });
        $('#wait-spinner').hide();
        $('#modal-content-form-equipement-edit').show();
      });
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
}); //Remplir les inputs avec les nouvelles valeurs

$('#soumission-equipement-edit-baseline').click(function () {
  e.preventDefault();
  $('main').css("opacity", '0.4');
  $('#wait-spinner').show();
  var $this = $(this);
  var data = {};
  $this.find('[name]').each(function (index, value) {
    var that = $(this),
        name = that.attr('name'),
        value = that.val();
    data[name] = value;
  });
  console.log(data);
});
var new_equipment_num = "",
    totalEquipt = "",
    new_equipment_num_serie = []; // Soumission formulaire de train

$('#form_equipement_edit_baseline').on('submit', function (e) {
  e.preventDefault();
  $('main').css("opacity", '0.4');
  $('#wait-spinner').show();
  var $this = $(this);
  var data = {};
  $this.find('[name]').each(function (index, value) {
    var that = $(this),
        name = that.attr('name'),
        value = that.val();
    data[name] = value;
  });
  $.ajax({
    url: '/alstom/edit-equipment-baseline/' + idEquipment,
    type: $this.attr('method'),
    data: {
      equipement: data
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      $('main').css("opacity", '1');
      $('#wait-spinner').hide();
      $('#modal-content-form-equipement-edit').hide();
      $('#modal_baseline_equipement').show();
      $('#btn-add-number-serie' + idEquipment).replaceWith("<p>" + response.numSerie + "</p>");
      new_equipment_num_serie.push(response);
      new_equipment_num++;
      console.log(response);
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
}); //Valider l'instance des equipements

$('#valid-baseline-train').click(function () {
  if (new_equipment_num != totalEquipt) {
    alert('please enter num serie before instance baseline');
  } else {
    var id_train = extraitNombre(window.location.pathname);
    var id_baseline = $('#select_baseline_1 option:selected').val();
    $('main').css("opacity", '0.4');
    $('#wait-spinner').show();
    $.ajax({
      url: '/alstom/addBaselineInstancier',
      type: 'POST',
      data: {
        id_train: id_train,
        baseline: id_baseline,
        new_equipt: new_equipment_num_serie
      },
      async: true,
      dataType: 'json',
      // JSON
      success: function success(response) {
        console.log(response);
        window.location.href = "/alstom/baseline-train/" + response.idbaseline;
        $('main').css("opacity", '1');
        $('#wait-spinner').hide();
      },
      error: function error(xhr, textStatus, errorThrown) {
        'Ajax request failed.';
      }
    });
  }
}); // Requete AJAX pour remplir le formulaire d'équipement avec l'equipement selectionner instancier

$('.content-description-dtr-instance').on('click', '.edit-delete-equipement > a', function (e) {
  e.preventDefault();
  $('.main-ertms').css("opacity", '0.4');
  $('#wait-spinner').show();
  idEquipment = extraitNombre($(this)[0]["classList"][0]);
  var $this = $("#form_equipement_edit_instance");
  var data = {};
  $('#wait-spinner').show();
  $.ajax({
    url: '/alstom/edit-equipment-instance/' + idEquipment,
    type: 'POST',
    data: {},
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      $('#equipement_Type').val(response["type"]["id"]);
      data[$('#equipement_Type').attr('name')] = $('#equipement_Type').val();
      $.post("/alstom/checkSubtype", data).then(function (response) {
        //Vidage champ soustype
        $('#equipement_sous_type').empty();
        response.forEach(function (element) {
          //Remplissage par les element reçu du controller
          $('#equipement_sous_type').append(new Option(element.name, element.id));
        });
      }).done(function () {
        //Rempli input avec valeur recu de l'equipement
        $this.find('[name]').each(function (index, value) {
          var that = $(this);

          switch (value.id) {
            case 'equipement_Type':
              break;

            case 'equipement_sous_type':
              if (response["SousType"] != null) {
                $('#' + value.id).val(response["SousType"]["id"]);
              }

              break;

            case 'equipement_DTR_board':
              $('#' + value.id).val(response["dTRBoard"]);
              break;

            case 'equipement_Indice_DTR':
              $('#' + value.id).val(response["indiceDTR"]);
              break;

            case 'equipement_Num_serie':
              $('#' + value.id).val(response["numSerie"]);
              break;
          }
        });
        $('#wait-spinner').hide();
        $('#modal-content-form-equipement-edit').show();
      });
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
}); //Formulaire d'edit de l'équipement

$('#form_equipement_edit_instance').on('submit', function (e) {
  e.preventDefault();
  $('.main-ertms').css("opacity", '0.4');
  $('#form_equipement_edit').css("opacity", "0.4");
  $('#wait-spinner').show();
  var $this = $(this);
  var data = {},
      action; //Rempli data a partir des valeur des inputs

  $this.find('[name]').each(function (index, value) {
    var that = $(this),
        name = that.attr('name');

    if (name != "equipement[_token]" && name != "soumission_equipement") {
      value = that.val();
      data[name] = value;
    }
  });
  $.ajax({
    url: '/alstom/edit-equipment-instance/' + idEquipment,
    type: 'POST',
    data: {
      'equipement': data,
      "soumission_edit_equipement": true,
      'idequipment': idEquipment
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      location.reload();
      $('#wait-spinner').hide();
      $('#modal-content-form-equipement-edit').show();
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
});

function FindIndexEvc(element, index, array) {
  index = element['id'];

  if (element['type']['id'] == "1" && element['Status'] == true) {
    $("#show-equipment").append('<div class="description" id="description-equipement-' + index + '"></div>');
    $("#description-equipement-" + index + "").append(writeType(4, element['type']['name']));
    $("#description-equipement-" + index + "").addClass("description-SubtypeCard");

    if (element['SousType'] != null) {
      $("#description-equipement-" + index + "").append(writeSubtype(5, element['SousType']['name']));
    }

    $("#description-equipement-" + index + "").append('<div class="content-description-dtr" id="content-description-' + index + '"></div>');
    $("#content-description-" + index + "").append('<p>' + element["dTRBoard"] + '</p>');
    $("#content-description-" + index + "").append('<p>' + element["indiceDTR"] + '</p>');

    if (element['numSerie'] == "") {
      $("#content-description-" + index + "").append('<button class="btn btn-secondary" style="padding: 2px" id = "btn-add-number-serie' + element['id'] + '" > Add number of serie </button>');
    } else {
      $("#content-description-" + index + "").append('<p>' + element['numSerie'] + '</p>');
    }

    indexEVC = $("#description-equipement-" + index + "");
  }
}

function returnIndexElement(element, index, array) {
  index = element['id'];

  if (element['Status'] == true && element['type']['id'] != "1") {
    //Test l'existence de la div dans le cas où elle existe la remplace si pas la met en place
    if ($('#description-equipement-' + index).length) {
      $('#description-equipement-' + index).replaceWith('<div class="description" id="description-equipement-' + index + '"></div>');
    } else {
      $("#show-equipment").append('<div class="description" id="description-equipement-' + index + '"></div>');
    } //test si l'équipement est la carte ou non


    if (element['type']['id'] != "2") {
      //Swith replacement de l'id du type avec son nom
      $("#description-equipement-" + index + "").append(writeType(4, element['type']['name']));

      if (element['SousType'] != null) {
        $("#description-equipement-" + index + "").append(writeSubtype(5, element['SousType']['name']));
      }

      $("#description-equipement-" + index + "").append('<div class="content-description-dtr" id="content-description-' + index + '"></div>');
      $("#content-description-" + index + "").append('<p>' + element["dTRBoard"] + '</p>');
      $("#content-description-" + index + "").append('<p>' + element["indiceDTR"] + '</p>');

      if (element['numSerie'] == "") {
        $("#content-description-" + index + "").append('<button class="btn btn-secondary" style="padding: 2px" id = "btn-add-number-serie' + element['id'] + '" > Add number of serie </button>');
      } else {
        $("#content-description-" + index + "").append('<p>' + element['numSerie'] + '</p> <a id="edit-' + index + '"><i class="fas fa-edit"></i> </a> <a id="delete-' + index + '"><i class = "fas fa-trash-alt poubelle"> </i></a>');
      } // $("#content-description-" + index + "").append(writeEditDelete(index));

    } else {
      //Ecris le nom du type "carte" sous le type  EVC
      $(indexEVC).append(writeType(5, element['SousType']['name'])); //Parcous le type de soustype 
      // $(indexEVC).append(writeSubtype(6, element['SousType']['name']));

      $(indexEVC).append('<div class="content-description-dtr content-description-dtrCard" id="content-description-' + index + '"></div>');
      $("#content-description-" + index + "").append('<p>' + element["dTRBoard"] + '</p>');
      $("#content-description-" + index + "").append('<p>' + element["indiceDTR"] + '</p>');

      if (element['numSerie'] == "") {
        $("#content-description-" + index + "").append('<button class="btn btn-secondary" style="padding: 2px" id = "btn-add-number-serie' + element['id'] + '" > Add number of serie </button>');
      } else {
        $("#content-description-" + index + "").append('<p>' + element['numSerie'] + '</p> <a id="edit-' + index + '"><i class="fas fa-edit"></i> </a> <a id="delete-' + index + '"><i class = "fas fa-trash-alt poubelle"> </i></a>');
      } // $("#content-description-" + index + "").append(writeEditDelete(index));


      $('#description-equipement-' + index).remove();
    }
  }
}

function CountNumberEquipt(element, index, array) {
  totalEquipt++;
} //Extrait le nombre d'une streing


function extraitNombre(str) {
  return Number(str.replace(/[^\d]/g, ""));
} //Ecris le titre du type d'équipement


function writeType(size, name) {
  return '<h' + size + ' class="description-Type " id="description-type ">' + name + '</h' + size + '>';
}

; //Ecris le titre du soustype d'équipement

function writeSubtype(size, name) {
  return '<h' + size + ' class="description-Type " id="description-subType ">' + name + '</h' + size + '>';
}

; //Ecris le titre du soustype d'équipement

function writeSubtypeCard(size, name) {
  return '<h' + size + ' class="description-subtype" id="description-subType ">' + name + '</h' + size + '>';
}

; // //Ecrit les 2 icons d'edit et delete
// function writeEditDelete(index) {
//     return ' <p class="edit-delete-equipement"> <a id="edit-' + index + '"><i class="fas fa-edit"></i> </a></p>';
// };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9iYXNlbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXF1aXBlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXJ0bXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RyYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiaG92ZXIiLCJmaW5kIiwic3RvcCIsImFuaW1hdGUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiaGlkZSIsImxhYmVsQ2xpa2VkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInJlbW92ZSIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNzcyIsImFkZENsYXNzIiwiY2hhbmdlIiwicmVhZFVSTCIsInJlbW92ZVVwbG9hZCIsImZpbGUiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwibmFtZSIsInNob3ciLCJodG1sIiwicmVwbGFjZVdpdGgiLCJjbG9uZSIsImJpbmQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiR0aGlzIiwiZmQiLCJGb3JtRGF0YSIsImVhY2giLCJpIiwiYXBwZW5kIiwiYWpheCIsInVybCIsImF0dHIiLCJ0eXBlIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsImRhdGEiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJlcnJvciIsInhociIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsIiR0eXBlIiwiRXF1aXBtZW50cyIsImluZGV4RVZDIiwicG9zSW5kZXgiLCJQcmVzZW5jZUVWQyIsImlkRXF1aXBtZW50IiwidGFiSW5kZXhFcXVpcHQiLCJzZWxlY3QiLCJjcmVhdGVFbGVtZW50IiwicHJldmlvdXMiLCJ0YWJFcXVpcGVtZW50VHlwZSIsInRhYkVxdWlwZW1lbnRTdWJ0eXBlIiwidmFsIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInBvc3QiLCJ0aGVuIiwiZW1wdHkiLCJmb3JFYWNoIiwiZWxlbWVudCIsIk9wdGlvbiIsImlkIiwiYWN0aW9uIiwiaW5kZXgiLCJ2YWx1ZSIsInRoYXQiLCJwdXNoIiwidGFiRXF1aXB0cyIsImFzeW5jIiwiZGF0YVR5cGUiLCJpZEVydG1zIiwiZXh0cmFpdE5vbWJyZSIsImVxdWlwZW1lbnQiLCJyZXR1cm5JbmRleEVsZW1lbnQiLCJhbGVydCIsImJhc2VsaW5lTmFtZSIsImJhc2VsaW5lIiwiaWRCYXNlbGluZSIsImhyZWYiLCJkZWxldGVFcXVpcG1lbnQiLCJkb25lIiwicmVsb2FkIiwidmVyc2lvbiIsInRyaWdnZXIiLCJhcnJheSIsImxlbmd0aCIsIndyaXRlVHlwZSIsIndyaXRlU3VidHlwZSIsIndyaXRlRWRpdERlbGV0ZSIsInNwbGljZSIsInBvc2l0aW9uIiwic3RyIiwiTnVtYmVyIiwicmVwbGFjZSIsInNpemUiLCJ3cml0ZVN1YnR5cGVDYXJkIiwibm90Iiwibm9tYnJlX3VybCIsImN1cnJlbnRfY2hvaWNlIiwiZXJ0bXNfbGVmdCIsImVydG1zX21pZGRsZSIsImVydG1zX3JpZ2h0IiwiSlNPTiIsInBhcnNlIiwiZXF1aXBtZW50cyIsIkNvdW50TnVtYmVyRXF1aXB0IiwiRmluZEluZGV4RXZjIiwibmFtZV9iYXNlbGluZV8xIiwibmV3X2VxdWlwbWVudF9udW0iLCJ0b3RhbEVxdWlwdCIsIm5ld19lcXVpcG1lbnRfbnVtX3NlcmllIiwibnVtU2VyaWUiLCJpZF90cmFpbiIsImlkX2Jhc2VsaW5lIiwibmV3X2VxdWlwdCIsImlkYmFzZWxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakIsQyxDQUVBO0FB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QUFDSDs7QUFBQSxDLENBQ0Q7O0FBQ0EsU0FBU1AsWUFBVCxDQUFzQk8sSUFBdEIsRUFBNEJuRixJQUE1QixFQUFrQztBQUM5QixTQUFPLE9BQU9tRixJQUFQLEdBQWMsdURBQWQsR0FBd0VuRixJQUF4RSxHQUErRSxLQUEvRSxHQUF1Rm1GLElBQXZGLEdBQThGLEdBQXJHO0FBQ0g7O0FBQUEsQyxDQUNEOztBQUNBLFNBQVNDLGdCQUFULENBQTBCRCxJQUExQixFQUFnQ25GLElBQWhDLEVBQXNDO0FBQ2xDLFNBQU8sT0FBT21GLElBQVAsR0FBYyx5REFBZCxHQUEwRW5GLElBQTFFLEdBQWlGLEtBQWpGLEdBQXlGbUYsSUFBekYsR0FBZ0csR0FBdkc7QUFDSDs7QUFBQSxDLENBQ0Q7QUFDQTtBQUNBO0FBQ0EsSzs7Ozs7Ozs7Ozs7O0FDaGtCQSx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vZXJ0bXMnO1xyXG5pbXBvcnQgJy4vZXF1aXBlbWVudCc7XHJcbmltcG9ydCAnLi9iYXNlbGluZSc7XHJcbmltcG9ydCAnLi90cmFpbic7XHJcblxyXG4vLyBsb2FkcyB0aGUganF1ZXJ5IHBhY2thZ2UgZnJvbSBub2RlX21vZHVsZXNcclxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuLy8gaW1wb3J0IHRoZSBmdW5jdGlvbiBmcm9tIGdyZWV0LmpzICh0aGUgLmpzIGV4dGVuc2lvbiBpcyBvcHRpb25hbClcclxuLy8gLi8gKG9yIC4uLykgbWVhbnMgdG8gbG9vayBmb3IgYSBsb2NhbCBmaWxlXHJcbiQoJy5wb3N0LW1vZHVsZScpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuZmluZCgnLmRlc2NyaXB0aW9uJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGhlaWdodDogXCJ0b2dnbGVcIixcclxuICAgICAgICBvcGFjaXR5OiBcInRvZ2dsZVwiXHJcbiAgICB9LCAzMDApO1xyXG59KTtcclxuJCgnLnBvc3QtbW9kdWxlLWZsZWV0JykuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5maW5kKCcuZGVzY3JpcHRpb24tZmxlZXQnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgaGVpZ2h0OiBcInRvZ2dsZVwiLFxyXG4gICAgICAgIG9wYWNpdHk6IFwidG9nZ2xlXCJcclxuICAgIH0sIDMwMCk7XHJcbn0pO1xyXG5cclxuJCgnLmZhLWNoZXZyb24tZG93bicpLmhpZGUoKTtcclxubGV0IGxhYmVsQ2xpa2VkID0gZmFsc2U7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ3ByZScpLnJlbW92ZSgpO1xyXG4gICAgJCgnLmJ1dHRvbi1sZWZ0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5zaWRlYmFyJykudG9nZ2xlQ2xhc3MoJ2ZsaXBoJyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5zaWRlYmFyJykuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0xMicpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ3BsLTUnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdjb2wtbWQtMTInKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygndHJhbnNpdGlvbicsICdhbGwgMC42cyBlYXNlLWluLW91dCcpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuYWRkQ2xhc3MoJ2NvbC1sZy0xMCcpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuYWRkQ2xhc3MoJ2NvbC1tZC05Jyk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0xMCcpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ2NvbC1tZC05Jyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ3RyYW5zaXRpb24nLCAnYWxsIDAuNnMgZWFzZS1pbi1vdXQnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdwbC01Jyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnY29sLWxnLTEyJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnY29sLW1kLTEyJyk7XHJcbiAgICAgICAgfSlcclxuICAgICQoJy5uYXYtbGFiZWwnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICQoJy5mYS1jaGV2cm9uLWxlZnQnKS5jc3MoJ3RyYW5zZm9ybScsICdyb3RhdGV4KDQ1ZGVnKScpXHJcbiAgICB9KVxyXG5cclxuXHJcbn0pO1xyXG4kKCcjZmlsZV96aXAnKS5jaGFuZ2UocmVhZFVSTCk7XHJcbiQoJyNyZW1vdmUtZmlsZScpLmNsaWNrKHJlbW92ZVVwbG9hZCk7XHJcblxyXG5mdW5jdGlvbiByZWFkVVJMKCkge1xyXG5cclxuICAgIGxldCBmaWxlID0gJCgnI2ZpbGVfemlwJylbMF0uZmlsZXNbMF07XHJcbiAgICBjb25zb2xlLmxvZyhmaWxlKTtcclxuICAgICQoJy5pbWFnZS11cGxvYWQtd3JhcCcpLmhpZGUoKTtcclxuICAgICQoJyNuYW1lX2ZpbGVfdXBsb2FkJykudGV4dChmaWxlLm5hbWUpXHJcbiAgICAkKCcuZmlsZS11cGxvYWQtY29udGVudCcpLnNob3coKTtcclxuICAgICQoJy5pbWFnZS10aXRsZScpLmh0bWwoZmlsZS5uYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVXBsb2FkKCkge1xyXG4gICAgJCgnLmZpbGUtdXBsb2FkLWlucHV0JykucmVwbGFjZVdpdGgoJCgnLmZpbGUtdXBsb2FkLWlucHV0JykuY2xvbmUoKSk7XHJcbiAgICAkKCcuZmlsZS11cGxvYWQtY29udGVudCcpLmhpZGUoKTtcclxuICAgICQoJy5pbWFnZS11cGxvYWQtd3JhcCcpLnNob3coKTtcclxufVxyXG4kKCcuaW1hZ2UtdXBsb2FkLXdyYXAnKS5iaW5kKCdkcmFnb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5pbWFnZS11cGxvYWQtd3JhcCcpLmFkZENsYXNzKCdpbWFnZS1kcm9wcGluZycpO1xyXG59KTtcclxuJCgnLmltYWdlLXVwbG9hZC13cmFwJykuYmluZCgnZHJhZ2xlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmltYWdlLXVwbG9hZC13cmFwJykucmVtb3ZlQ2xhc3MoJ2ltYWdlLWRyb3BwaW5nJyk7XHJcbn0pO1xyXG5cclxuJCgnI2ZpbGVfdXBsb2FkJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZmlsZSA9ICQoJyNmaWxlX3ppcCcpWzBdLmZpbGVzWzBdO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBmZCA9IG5ldyBGb3JtRGF0YShmaWxlKTtcclxuICAgIGNvbnNvbGUubG9nKGZpbGUpO1xyXG4gICAgJC5lYWNoKGZpbGUsIGZ1bmN0aW9uIChpLCBmaWxlKSB7XHJcbiAgICAgICAgZmQuYXBwZW5kKCdmaWxlLScgKyBpLCBmaWxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGZkLmFwcGVuZCgnRmlsZScsIGZpbGUpO1xyXG4gICAgY29uc29sZS5sb2coZmQpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICR0aGlzLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IGZkLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSkiLCIvL01hc3F1YWdlIGRlIGNlcnRhaW5zIG1vZGFsZSBkZSBsYSBwYWdlXHJcbiQoJyNmb3JtdWxhaXJlLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuJCgnI2NvbnRlbnQtZm9ybS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuXHJcbi8vRGVsY2FyYXRpb24gdmFyaWFibGVcclxuY29uc3QgJHR5cGUgPSAkKCcjZXF1aXBlbWVudF9UeXBlJyk7XHJcbiR0eXBlLmF0dHIoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XHJcblxyXG5sZXQgRXF1aXBtZW50cyA9IFtdLFxyXG4gICAgaSA9IDAsXHJcbiAgICBpbmRleEVWQyA9IDAsXHJcbiAgICBwb3NJbmRleCA9IDAsXHJcbiAgICBQcmVzZW5jZUVWQyA9IGZhbHNlLFxyXG4gICAgaWRFcXVpcG1lbnQgPSAwLFxyXG4gICAgdGFiSW5kZXhFcXVpcHQgPSBbXVxyXG5zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLFxyXG4gICAgcHJldmlvdXMgPSBcIlwiLFxyXG4gICAgdGFiRXF1aXBlbWVudFR5cGUgPSBbXCJFVkNcIiwgXCJDQVJURVwiLCBcIlNFTlNPUlwiLCBcIkRNSVwiXSxcclxuICAgIHRhYkVxdWlwZW1lbnRTdWJ0eXBlID0gW1wiQ09SRVwiLCBcIlRVSVwiLCBcIlNETVVcIiwgXCJTRU5TRVwiLCBcIlRXSU5TXCJdO1xyXG5cclxuLy9WaWRhZ2UgZGVzIGlucHV0cyBhdSByZWZyZXNoIGRlIGxhIHBhZ2VcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgZGF0YVskdHlwZS5hdHRyKCduYW1lJyldID0gJHR5cGUudmFsKClcclxuXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvYWxzdG9tL2NyZWF0ZV9iYXNlbGluZScpIHtcclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgfVxyXG4gICAgLy8gJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgIC8vICQoJzppbnB1dCcsICcjZm9ybV9lcXVpcGVtZW50Jykubm90KCc6YnV0dG9uLCA6c3VibWl0LCA6cmVzZXQsIDpoaWRkZW4nKS52YWwoJycpO1xyXG59KTtcclxuXHJcbi8vQUpBWCBDaGFuZ2VtZW50IGRlIHNvdXMtdHlwZSBlbiBmb25jdGlvbiBkdSB0eXBlXHJcbiR0eXBlLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgZGF0YVskdHlwZS5hdHRyKCduYW1lJyldID0gJHR5cGUudmFsKClcclxuXHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSlcclxuXHJcbi8vQUpBWCBzb3VtaXNzaW9uIGZvcm11bGFpcmUgZCdham91dCBlcXVpcGVtZW50XHJcbiQoJyNmb3JtX2VxdWlwZW1lbnQnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAvL0VtcMOqY2hlIGxlIGNoYXJnZW1lbnQgZGUgbGEgcGFnZSBzb2lzIGZhaXQgYXV0b21hdGlxdWVtZW50XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9LFxyXG4gICAgICAgIGFjdGlvbjtcclxuICAgIC8vUmVtcGxpIGRhdGEgYSBwYXJ0aXIgZGVzIHZhbGV1ciBkZXMgaW5wdXRzXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKVxyXG5cclxuICAgICAgICBpZiAobmFtZSAhPSAoXCJlcXVpcGVtZW50W190b2tlbl1cIikgJiYgbmFtZSAhPSAoXCJzb3VtaXNzaW9uX2VxdWlwZW1lbnRcIikpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09ICdzb3VtaXNzaW9uX2VkaXRfZXF1aXBlbWVudCcpIHtcclxuICAgICAgICAgICAgYWN0aW9uID0gXCJlZGl0XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWN0aW9uID0gXCJhZGRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgIC8vIFNpIGxlIGZvcm11bGFpcmUgZXN0IHBvdXIgYWpvdWVyIHVuIG5vdXZlbCBlcXVpcGVtZW50XHJcbiAgICBpZiAoYWN0aW9uID09IFwiYWRkXCIpIHtcclxuICAgICAgICAvL1JlbXBsaXMgbGUgdGFibGVhdSBkZXMgw6lxdWlwZW1lbnRzXHJcbiAgICAgICAgRXF1aXBtZW50cy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIC8vRWZmZWN0dXJlIGxhIHJlcXXDqnRlIGFqYXggcG91ciBsJ2Fqb3V0IGQnw6lxdWlwZW1lbnRcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGFiRXF1aXB0czogRXF1aXBtZW50c1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBPdSBzaSBsZSBmb3JtdWxhaXJlIGVzdCBwb3VyIMOpZGl0ZXIgdW4gZXF1aXBlbWVudCBkw6lqYSBleGlzdGFudCBzdXIgbGEgcGFnZSBkZSBsJ2VydG1zIGxpw6kgYSBjZWx1aS1jaVxyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJlZGl0XCIpIHtcclxuICAgICAgICBsZXQgaWRFcnRtcyA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBlcXVpcGVtZW50OiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgaWRFcnRtczogaWRFcnRtc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJy5tb2RhbC1mb290ZXInKS5zaG93KCk7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAvL0JvdWNsZSBsZXMgw6lxdWlwZW1lbnRzIGV0IGxlcyBpbnN0YWxsZSBhdSBmcm9udFxyXG4gICAgRXF1aXBtZW50cy5mb3JFYWNoKHJldHVybkluZGV4RWxlbWVudCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vVmFsaWRhdGlvbiBkZSBiYXNlbGluZSBcclxuJCgnI2NyZWF0ZS1iYXNlbGluZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKFwiI2Jhc2VsaW5lX25hbWVcIikudmFsKCkgPT0gXCJcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgYmFzZWxpbmUgbmFtZSBcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG5sZXQgYmFzZWxpbmVOYW1lO1xyXG4kKCcjZm9ybV9iYXNlbGluZScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG5cclxuICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChuYW1lID09ICdiYXNlbGluZVtuYW1lXScpIHtcclxuXHJcbiAgICAgICAgICAgIGJhc2VsaW5lTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICR0aGlzLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgYmFzZWxpbmU6IGRhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJy50aXRsZS1iYXNlbGluZScpLnRleHQocmVzcG9uc2UuYmFzZWxpbmUpXHJcbiAgICAgICAgICAgICQoJyNjb250ZW50LWZvcm0tZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50JykuaGlkZSgpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG4vL1ZhbGlkYXRpb24gZGUgdG91cyBsZXMgw6lxdWlwZW1lbnRzIGV0IGRlIGxhIGJhc2VsaW5lXHJcbiQoJyN2YWxpZC1hbGwtZXF1aXBtZW50cycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKEVxdWlwbWVudHMgIT0gXCJcIikge1xyXG4gICAgICAgICQoJy5tYWluLWJhc2VsaW5lJykuY3NzKCdvcGFjaXR5JywgXCIwLjRcIik7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYWxzdG9tL2ZsdXNoLWFsbC1lcXVpcHQnLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGJhc2VsaW5lTmFtZTogYmFzZWxpbmVOYW1lLFxyXG4gICAgICAgICAgICAgICAgdGFiRXF1aXB0czogRXF1aXBtZW50c1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGlkQmFzZWxpbmUgPSByZXNwb25zZS5iYXNlbGluZTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2Fsc3RvbS9iYXNlbGluZS9cIiArIGlkQmFzZWxpbmU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIEVxdWlwbWVudHMgYmVmb3JlIHZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxuLy9Hw6lyZSBsZSBjbGlxdWUgZGUgbGEgc3VwcHJlc3Npb25cclxuJCgnI3Nob3ctZXF1aXBtZW50Jykub24oJ2NsaWNrJywgJy5lZGl0LWRlbGV0ZS1lcXVpcGVtZW50ID4gYScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpWzBdW1wiaWRcIl1bMF0gPT0gXCJkXCIpIHtcclxuICAgICAgICBkZWxldGVFcXVpcG1lbnQoZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiaWRcIl0pKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuLy9jYWNoZSBsZSBtb2RhbCBkJ2VkaXQgZCdlcXVpcGVtZW50XHJcbiQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0JykuaGlkZSgpO1xyXG4vLyBHZXJlIGxhIGZlcm1ldHVyZSBkdSBtb2RhbCBkJ2VkaXQgZCdlcXVpcGVtZW50XHJcbiQoJyNjbG9zZS1tb2RhbC1mb3JtLWVxdWlwbWVudC1lZGl0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5oaWRlKCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxufSlcclxuLy8gXHJcbi8vIFJlcXVldGUgQUpBWCBwb3VyIHJlbXBsaXIgbGUgZm9ybXVsYWlyZSBkJ8OpcXVpcGVtZW50IGF2ZWMgbCdlcXVpcGVtZW50IHNlbGVjdGlvbm5lclxyXG4kKCcuY29udGVudC1kZXNjcmlwdGlvbi1kdHInKS5vbignY2xpY2snLCAnLmVkaXQtZGVsZXRlLWVxdWlwZW1lbnQgPiBhJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIGlkRXF1aXBtZW50ID0gZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiY2xhc3NMaXN0XCJdWzBdKVxyXG4gICAgdmFyICR0aGlzID0gJChcIiNmb3JtX2VxdWlwZW1lbnRfZWRpdFwiKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbChyZXNwb25zZVtcInR5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgIGRhdGFbJCgnI2VxdWlwZW1lbnRfVHlwZScpLmF0dHIoJ25hbWUnKV0gPSAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaSBpbnB1dCBhdmVjIHZhbGV1ciByZWN1IGRlIGwnZXF1aXBlbWVudFxyXG4gICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9UeXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X3NvdXNfdHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJTb3VzVHlwZVwiXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiU291c1R5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9EVFJfYm9hcmQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiZFRSQm9hcmRcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9JbmRpY2VfRFRSJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImluZGljZURUUlwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X051bV9zZXJpZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJudW1TZXJpZVwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuLy9Gb3JtdWxhaXJlIGQnZWRpdCBkZSBsJ8OpcXVpcGVtZW50XHJcbiQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdCcpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdCcpLmNzcyhcIm9wYWNpdHlcIiwgXCIwLjRcIik7XHJcbiAgICAkKFwiI3dhaXQtc3Bpbm5lclwiKS5jc3MoXCJ6LWluZGV4XCIsIFwiOTk5OTlcIik7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge30sXHJcbiAgICAgICAgYWN0aW9uO1xyXG4gICAgLy9SZW1wbGkgZGF0YSBhIHBhcnRpciBkZXMgdmFsZXVyIGRlcyBpbnB1dHNcclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpXHJcblxyXG4gICAgICAgIGlmIChuYW1lICE9IChcImVxdWlwZW1lbnRbX3Rva2VuXVwiKSAmJiBuYW1lICE9IChcInNvdW1pc3Npb25fZXF1aXBlbWVudFwiKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAnZXF1aXBlbWVudCc6IGRhdGEsXHJcbiAgICAgICAgICAgIFwic291bWlzc2lvbl9lZGl0X2VxdWlwZW1lbnRcIjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuXHJcbi8vUmVxdWV0ZSBBSkFYIGRlIGNyw6lhdGlvbiBkZSB2ZXJzaW9uIGxvZ2ljaWVsXHJcbiQoJyNmb3JtX3ZlcnNpb24nKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5tYWluLWJhc2VsaW5lJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcblxyXG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH0pXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZEJhc2VsaW5lOiBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSksXHJcbiAgICAgICAgICAgIHZlcnNpb246IGRhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyN0aXRsZS12ZXJzaW9uJykuaHRtbChcIlZlcnNpb24gbG9naWNpZWwgOiBcIiArIFwiIFwiICsgcmVzcG9uc2UudmVyc2lvbilcclxuICAgICAgICAgICAgJCgnLm1haW4tYmFzZWxpbmUnKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNjbG9zZS1tb2RhbC1mb3JtLXZlcnNpb24nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJldHVybkluZGV4RWxlbWVudChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuXHJcbiAgICAvL1Rlc3QgbCdleGlzdGVuY2UgZGUgbGEgZGl2IGRhbnMgbGUgY2FzIG/DuSBlbGxlIGV4aXN0ZSBsYSByZW1wbGFjZSBzaSBwYXMgbGEgbWV0IGVuIHBsYWNlXHJcbiAgICBpZiAoJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5sZW5ndGgpIHtcclxuICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlcGxhY2VXaXRoKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjc2hvdy1lcXVpcG1lbnRcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGVzdCBzaSBsJ8OpcXVpcGVtZW50IGVzdCBsYSBjYXJ0ZSBvdSBub25cclxuICAgIGlmIChlbGVtZW50W1wiZXF1aXBlbWVudFtUeXBlXVwiXSAhPSBcIjJcIikge1xyXG4gICAgICAgIC8vU3dpdGggcmVwbGFjZW1lbnQgZGUgbCdpZCBkdSB0eXBlIGF2ZWMgc29uIG5vbVxyXG4gICAgICAgIHN3aXRjaCAoZWxlbWVudFtcImVxdWlwZW1lbnRbVHlwZV1cIl0pIHtcclxuICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlVHlwZSg0LCAwKSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFkZENsYXNzKFwiZGVzY3JpcHRpb24tU3VidHlwZUNhcmRcIilcclxuICAgICAgICAgICAgICAgIGluZGV4RVZDID0gJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIDIpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIDMpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKGVsZW1lbnRbXCJlcXVpcGVtZW50W3NvdXNfdHlwZV1cIl0pIHtcclxuICAgICAgICAgICAgY2FzZSBcIjRcIjpcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCAzKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjVcIjpcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCA0KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0clwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtEVFJfYm9hcmRdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImVxdWlwZW1lbnRbSW5kaWNlX0RUUl1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtOdW1fc2VyaWVdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IEVxdWlwbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChFcXVpcG1lbnRzW2ldW1wiZXF1aXBlbWVudFtUeXBlXVwiXSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgUHJlc2VuY2VFVkMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoUHJlc2VuY2VFVkMpIHtcclxuICAgICAgICAgICAgLy9FY3JpcyBsZSBub20gZHUgdHlwZSBcImNhcnRlXCIgc291cyBsZSB0eXBlICBFVkNcclxuICAgICAgICAgICAgLy8gJChpbmRleEVWQykuYXBwZW5kKHdyaXRlVHlwZSg1LCAxKSk7XHJcbiAgICAgICAgICAgIC8vUGFyY291cyBsZSB0eXBlIGRlIHNvdXN0eXBlIFxyXG4gICAgICAgICAgICBzd2l0Y2ggKGVsZW1lbnRbXCJlcXVpcGVtZW50W3NvdXNfdHlwZV1cIl0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICAgICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDIpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY29udGVudC1kZXNjcmlwdGlvbi1kdHIgY29udGVudC1kZXNjcmlwdGlvbi1kdHJDYXJkXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImVxdWlwZW1lbnRbRFRSX2JvYXJkXVwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtJbmRpY2VfRFRSXVwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtOdW1fc2VyaWVdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZUVkaXREZWxldGUoaW5kZXgpKTtcclxuICAgICAgICAgICAgJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5yZW1vdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIEVWQyBlcXVpcGVtZW50IGJlZm9yZScpO1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICQoJy5tb2RhbC1mb290ZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNjcmVhdGUtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vU3VwcmVzc2lvbiBkZSBsJ8OpcXVpcGVtZW50IGRhbnMgbGUgdGFibGVhdSBldCBsZSBmcm9udFxyXG5mdW5jdGlvbiBkZWxldGVFcXVpcG1lbnQocG9zaXRpb24pIHtcclxuICAgIEVxdWlwbWVudHMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcclxuICAgICQoJy5kZXNjcmlwdGlvbicpLnJlbW92ZSgpO1xyXG4gICAgRXF1aXBtZW50cy5mb3JFYWNoKHJldHVybkluZGV4RWxlbWVudCk7XHJcbn1cclxuLy9FeHRyYWl0IGxlIG5vbWJyZSBkJ3VuZSBzdHJlaW5nXHJcbmZ1bmN0aW9uIGV4dHJhaXROb21icmUoc3RyKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyKHN0ci5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIikpXHJcbn1cclxuLy9FY3JpcyBsZSB0aXRyZSBkdSB0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVUeXBlKHNpemUsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXR5cGUgXCI+JyArIHRhYkVxdWlwZW1lbnRUeXBlW2luZGV4XSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpcyBsZSB0aXRyZSBkdSBzb3VzdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlU3VidHlwZShzaXplLCBpbmRleCkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLVR5cGUgXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyB0YWJFcXVpcGVtZW50U3VidHlwZVtpbmRleF0gKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgc291c3R5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVN1YnR5cGVDYXJkKHNpemUsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tc3VidHlwZVwiIGlkPVwiZGVzY3JpcHRpb24tc3ViVHlwZSBcIj4nICsgdGFiRXF1aXBlbWVudFN1YnR5cGVbaW5kZXhdICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0Vjcml0IGxlcyAyIGljb25zIGQnZWRpdCBldCBkZWxldGVcclxuZnVuY3Rpb24gd3JpdGVFZGl0RGVsZXRlKGluZGV4KSB7XHJcbiAgICByZXR1cm4gJyA8cCBjbGFzcz1cImVkaXQtZGVsZXRlLWVxdWlwZW1lbnRcIj4gPGEgaWQ9XCJlZGl0LScgKyBpbmRleCArICdcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiA8L2E+IDxhIGlkPVwiZGVsZXRlLScgKyBpbmRleCArICdcIj48aSBjbGFzcyA9IFwiZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZVwiPiA8L2k+PC9hPjwvcD4nO1xyXG59O1xyXG5cclxuLyphdSBjbGljayBkZSBsJ2FkZCBFcXVpcG1lbnQgYWZmaWNoZXIgbGUgZm9ybXVsYWlyZSBkJ2Fqb3V0IGQnw6lxdWlwZW1lbnQqL1xyXG4kKCcjY3JlYXRlLWVxdWlwbWVudCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI3Nob3ctZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJy5tb2RhbC1mb290ZXInKS5oaWRlKCk7XHJcbiAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgJCgnOmlucHV0JywgJyNmb3JtX2VxdWlwZW1lbnQnKS5ub3QoJzpidXR0b24sIDpzdWJtaXQsIDpyZXNldCwgOmhpZGRlbicpLnZhbCgnJyk7XHJcbiAgICBwcmV2aW91cyA9IFwiZXF1aXBtZW50XCI7XHJcbn0pO1xyXG4vLyBHZXJlIGxlIGNsaWNrIGR1IHByZXZpb3VzXHJcbiQoXCIjcHJldmlvdXMtZXF1aXBtZW50XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcubW9kYWwtZm9vdGVyJykuc2hvdygpO1xyXG59KTtcclxuJCgnI2NyZWF0ZS1iYXNlbGluZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnLm1vZGFsLWZvb3RlcicpLnNob3coKTtcclxufSlcclxuLy8gRmVybWUgbGUgbW9kYWwgZGUgZm9ybXVsYWlyZSBkJ2Fqb3V0IGQnw6lxdWlwZW1lbnRcclxuJCgnI2Nsb3NlLWVxdWlwZW1lbnQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbn0pIiwiLy9WYWxpZGF0aW9uIGRlIGwnZXJ0bXMgXHJcbiQoJyN2YWxpZC1lcnRtcy1uYW1lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIiNjb250ZW50LWZvcm0tZXJ0bXNcIikuaGlkZSgpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbn0pIiwiLy8gJCgnI2RlbGV0ZS1lcnRtcycpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbi8vICAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbi8vICAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbi8vICAgICAgICAgZGF0YToge30sXHJcbi8vICAgICAgICAgYXN5bmM6IHRydWUsXHJcbi8vICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4vLyAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuLy8gICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gfSkiLCIvLyBWaWRhZ2UgZGVzIGlucHV0cyBhdXggY2hhbmdlbWVudCBkZSBzZWxlY3RcclxuLy8gJCgnc2VsZWN0W25hbWU9XCJ0cmFpbnNbcHJvamVjdHNdXCJdLCBzZWxlY3RbbmFtZT1cInRyYWluc1t0cmFpblR5cGVdXCJdJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICQoJ2lucHV0W25hbWU9XCJ0cmFpbnNbbmFtZV1cIl0nKS52YWwoJycpO1xyXG4vLyB9KTtcclxuXHJcbi8qTWFzcXVhZ2UgZGUgY2VydGFpbnMgw6lsZW1lbnQgKi9cclxuJCgnI2NyZWF0ZS1lcnRtcy0xJykuaGlkZSgpO1xyXG4kKCcjY3JlYXRlLWVydG1zLTInKS5oaWRlKCk7XHJcbiQoXCIjY3JlYXRlLWVydG1zLXRyYWluLTFcIikuaGlkZSgpO1xyXG4kKCcjY3JlYXRlX3NvdXN0eXBlJykuaGlkZSgpO1xyXG4kKCcjY3JlYXRlX3R5cGUnKS5oaWRlKCk7XHJcbiQoJyNtb2RhbC1ib2R5JykuaGlkZSgpO1xyXG4kKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuJCgnI2Nsb3NlLW1vZGFsLWZvcm0tYmFzZWxpbmUtdHJhaW4nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLmhpZGUoKTtcclxufSlcclxuZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcclxuICAgICQoJyNidG4tYmFzZWxpbmUtJyArIGkpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbn1cclxubGV0IGlkRXF1aXBtZW50ID0gXCJcIixcclxuICAgIGluZGV4RVZDO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IG5vbWJyZV91cmwgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2Fsc3RvbS9JbnN0YW5jZUJhc2VsaW5lLycgKyBub21icmVfdXJsKSB7XHJcblxyXG4gICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tCYXNlbGluZVwiLCApLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VsZWN0X2Jhc2VsaW5lXzEnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgICQoJyNzZWxlY3RfYmFzZWxpbmVfMicpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgJCgnI3NlbGVjdF9iYXNlbGluZV8xJykudmFsKCcnKTtcclxuICAgICAgICAgICAgJCgnI3NlbGVjdF9iYXNlbGluZV8yJykudmFsKCcnKTtcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSlcclxuXHJcbiQoJyNzZWxlY3RfdHJhaW4nKS5zaG93KCk7XHJcbiQoJyNzZWxlY3RfbG9jb21vdGl2ZScpLnNob3coKTtcclxuXHJcbmxldCBjdXJyZW50X2Nob2ljZSA9IFwiXCIsXHJcbiAgICBlcnRtc19sZWZ0ID0gZmFsc2UsXHJcbiAgICBlcnRtc19taWRkbGUgPSBmYWxzZSxcclxuICAgIGVydG1zX3JpZ2h0ID0gZmFsc2U7XHJcblxyXG4kKCcjY2xvc2UtbW9kYWwtYmFzZWxpbmUtMScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChlcnRtc19yaWdodCA9PSB0cnVlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuYWRkQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICBlcnRtc19sZWZ0ID0gZmFsc2U7XHJcbn0pXHJcbiQoJyNjbG9zZS1tb2RhbC1iYXNlbGluZS0yJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuaGlkZSgpO1xyXG4gICAgZXJ0bXNfcmlnaHQgPSBmYWxzZTtcclxufSlcclxuJCgnI2VydG1zLXRyYWluLTEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlcnRtc19sZWZ0ID0gdHJ1ZTtcclxuICAgIGVydG1zX21pZGRsZSA9IGZhbHNlO1xyXG4gICAgLy9sJ2VydG1zIGRlIGdhdWNoZSBzZWxlY3Rpb25uZXJcclxuICAgICQoJyNlcnRtcy10cmFpbi0xJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy10cmFpbi0yJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNsYWJlbC1iYXNlbGluZS0xJykudGV4dCgnQmFzZWxpbmUgbGVmdCcpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC0zJyk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5zaG93KCk7XHJcbiAgICBpZiAoZXJ0bXNfcmlnaHQgPT0gZmFsc2UpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5oaWRlKCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICB9XHJcblxyXG5cclxufSk7XHJcbiQoJyNlcnRtcy10cmFpbi0yJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gbCdlcnRtcyBkdSBtaWxpZXUgc2VsZWN0aW9ubmVyXHJcbiAgICBlcnRtc19sZWZ0ID0gZmFsc2U7XHJcbiAgICBlcnRtc19yaWdodCA9IGZhbHNlO1xyXG4gICAgZXJ0bXNfbWlkZGxlID0gdHJ1ZTtcclxuICAgICQoJyNlcnRtcy10cmFpbi0yJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy10cmFpbi0xJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy10cmFpbi0zJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNsYWJlbC1iYXNlbGluZS0xJykudGV4dCgnQmFzZWxpbmUgbWlkbGUnKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmhpZGUoKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnNob3coKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmFkZENsYXNzKCdvZmZzZXQtbWQtMycpO1xyXG5cclxufSk7XHJcbiQoJyNlcnRtcy10cmFpbi0zJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gbCdlcnRtcyBkZSBkcm9pdGUgc2VsZWN0aW9ubmVyXHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMycpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICBlcnRtc19yaWdodCA9IHRydWU7XHJcbiAgICBlcnRtc19taWRkbGUgPSBmYWxzZTtcclxuICAgICQoJyNsYWJlbC1iYXNlbGluZS0yJykudGV4dCgnQmFzZWxpbmUgcmlnaHQnKTtcclxuICAgIGlmIChlcnRtc19sZWZ0ID09IHRydWUgJiYgZXJ0bXNfbWlkZGxlID09IGZhbHNlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC0zJyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuc2hvdygpO1xyXG4gICAgfSBlbHNlIGlmIChlcnRtc19yaWdodCA9PSB0cnVlICYmIGVydG1zX2xlZnQgPT0gZmFsc2UpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTMnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuYWRkQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgICQoJyNlcnRtcy10cmFpbi0yJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxufSk7XHJcblxyXG5cclxuJCgnI2VydG1zLWxvY28tMScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGVydG1zX2xlZnQgPSB0cnVlO1xyXG4gICAgaWYgKGVydG1zX3JpZ2h0ID09IHRydWUpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnNob3coKTtcclxuICAgIH1cclxuICAgICQoJyNsYWJlbC1iYXNlbGluZS0xJykudGV4dCgnQmFzZWxpbmUgbGVmdCcpO1xyXG4gICAgJCgnI2VydG1zLWxvY28tMScpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtbG9jby0yJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNidG4tYmFzZWxpbmUtMScpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTMnKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG59KTtcclxuJCgnI2VydG1zLWxvY28tMicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGVydG1zX3JpZ2h0ID0gdHJ1ZTtcclxuICAgICQoJyNsYWJlbC1iYXNlbGluZS0yJykudGV4dCgnQmFzZWxpbmUgcmlnaHQnKTtcclxuICAgICQoJyNidG4tYmFzZWxpbmUtMycpLmNzcygnb3BhY2l0eScsICcxJylcclxuICAgICQoJyNidG4tYmFzZWxpbmUtMScpLmNzcygnb3BhY2l0eScsICcwJylcclxuICAgICQoJyNlcnRtcy1sb2NvLTInKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLWxvY28tMScpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICBpZiAoZXJ0bXNfbGVmdCA9PSB0cnVlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcblxyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuYWRkQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuc2hvdygpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuLy9SZWN1cGVyZSBsZSBzZWxlY3QgZGUgbGEgYmFzZWxpbmUgZXQgbGUgbWV0IGVuIHZpc3VlbFxyXG4kKCcjYWRkLWJhc2VsaW5lLTEnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICBpZiAoZXJ0bXNfbWlkZGxlKSB7XHJcbiAgICAgICAgJCgnI2VydG1zLXRyYWluLTMnKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgICAgICQoJyNlcnRtcy10cmFpbi0xJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgIH0gZWxzZSBpZiAoZXJ0bXNfbGVmdCkge1xyXG4gICAgICAgICQoJyNlcnRtcy10cmFpbi0yJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgIH1cclxuICAgIC8vICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgIGxldCBpZEJhc2VsaW5lID0gJCgnI3NlbGVjdF9iYXNlbGluZV8xIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpO1xyXG4gICAgJCgnI3RpdGxlX2Jhc2VsaW5lX21vZGFsJykuaHRtbCgkKCcjc2VsZWN0X2Jhc2VsaW5lXzEgb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpKTtcclxuICAgIC8vICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL0NoZWNrRXF1aXBlbWVudHMvJyArIGlkQmFzZWxpbmUsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCAnMC40Jyk7XHJcbiAgICAgICAgICAgIGxldCBFcXVpcG1lbnRzID0gSlNPTi5wYXJzZShyZXNwb25zZS5lcXVpcG1lbnRzKTtcclxuXHJcbiAgICAgICAgICAgIEVxdWlwbWVudHMuZm9yRWFjaChDb3VudE51bWJlckVxdWlwdCk7XHJcbiAgICAgICAgICAgIEVxdWlwbWVudHMuZm9yRWFjaChGaW5kSW5kZXhFdmMpO1xyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLmZvckVhY2gocmV0dXJuSW5kZXhFbGVtZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG5cclxuJCgnI2FkZC1iYXNlbGluZS0yJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJyNlcnRtcy10cmFpbi0yJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuXHJcbiAgICAvLyAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICBsZXQgbmFtZV9iYXNlbGluZV8xID0gJCgnI3NlbGVjdF9iYXNlbGluZV8yIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpO1xyXG4gICAgY29uc29sZS5sb2cobmFtZV9iYXNlbGluZV8xKVxyXG4gICAgLy8gJCgnI2NvbnRlbnQtbmFtZS1iYXNlbGluZS0xJykuYXBwZW5kKFwiPGg1PlwiICsgbmFtZV9iYXNlbGluZV8xICsgXCI8L2g1PlwiKVxyXG5cclxufSlcclxuXHJcbi8vIFJlcXVldGUgQUpBWCBwb3VyIHJlbXBsaXIgbGUgZm9ybXVsYWlyZSBkJ8OpcXVpcGVtZW50IGF2ZWMgbCdlcXVpcGVtZW50IHNlbGVjdGlvbm5lclxyXG4kKCcjc2hvdy1lcXVpcG1lbnQgJykub24oJ2NsaWNrJywgJy5kZXNjcmlwdGlvbiA+IC5jb250ZW50LWRlc2NyaXB0aW9uLWR0ciA+IGJ1dHRvbicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIGlkRXF1aXBtZW50ID0gZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiaWRcIl0pXHJcbiAgICB2YXIgJHRoaXMgPSAkKFwiI2Zvcm1fZXF1aXBlbWVudF9lZGl0X2Jhc2VsaW5lXCIpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQtYmFzZWxpbmUvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbChyZXNwb25zZVtcInR5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgIGRhdGFbJCgnI2VxdWlwZW1lbnRfVHlwZScpLmF0dHIoJ25hbWUnKV0gPSAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaSBpbnB1dCBhdmVjIHZhbGV1ciByZWN1IGRlIGwnZXF1aXBlbWVudFxyXG4gICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9UeXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X3NvdXNfdHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJTb3VzVHlwZVwiXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiU291c1R5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9EVFJfYm9hcmQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiZFRSQm9hcmRcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9JbmRpY2VfRFRSJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImluZGljZURUUlwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X051bV9zZXJpZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJudW1TZXJpZVwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuLy9SZW1wbGlyIGxlcyBpbnB1dHMgYXZlYyBsZXMgbm91dmVsbGVzIHZhbGV1cnNcclxuJCgnI3NvdW1pc3Npb24tZXF1aXBlbWVudC1lZGl0LWJhc2VsaW5lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcbiAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxufSlcclxubGV0IG5ld19lcXVpcG1lbnRfbnVtID0gXCJcIixcclxuICAgIHRvdGFsRXF1aXB0ID0gXCJcIixcclxuICAgIG5ld19lcXVpcG1lbnRfbnVtX3NlcmllID0gW107XHJcblxyXG4vLyBTb3VtaXNzaW9uIGZvcm11bGFpcmUgZGUgdHJhaW5cclxuJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0X2Jhc2VsaW5lJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcblxyXG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH0pXHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LWJhc2VsaW5lLycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGVxdWlwZW1lbnQ6IGRhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcjYnRuLWFkZC1udW1iZXItc2VyaWUnICsgaWRFcXVpcG1lbnQpLnJlcGxhY2VXaXRoKFwiPHA+XCIgKyByZXNwb25zZS5udW1TZXJpZSArIFwiPC9wPlwiKVxyXG4gICAgICAgICAgICBuZXdfZXF1aXBtZW50X251bV9zZXJpZS5wdXNoKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbmV3X2VxdWlwbWVudF9udW0rKztcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcbi8vVmFsaWRlciBsJ2luc3RhbmNlIGRlcyBlcXVpcGVtZW50c1xyXG4kKCcjdmFsaWQtYmFzZWxpbmUtdHJhaW4nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAobmV3X2VxdWlwbWVudF9udW0gIT0gdG90YWxFcXVpcHQpIHtcclxuICAgICAgICBhbGVydCgncGxlYXNlIGVudGVyIG51bSBzZXJpZSBiZWZvcmUgaW5zdGFuY2UgYmFzZWxpbmUnKVxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgbGV0IGlkX3RyYWluID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgIGxldCBpZF9iYXNlbGluZSA9ICQoJyNzZWxlY3RfYmFzZWxpbmVfMSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYWxzdG9tL2FkZEJhc2VsaW5lSW5zdGFuY2llcicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWRfdHJhaW46IGlkX3RyYWluLFxyXG4gICAgICAgICAgICAgICAgYmFzZWxpbmU6IGlkX2Jhc2VsaW5lLFxyXG4gICAgICAgICAgICAgICAgbmV3X2VxdWlwdDogbmV3X2VxdWlwbWVudF9udW1fc2VyaWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYWxzdG9tL2Jhc2VsaW5lLXRyYWluL1wiICsgcmVzcG9uc2UuaWRiYXNlbGluZTtcclxuICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pXHJcbi8vIFJlcXVldGUgQUpBWCBwb3VyIHJlbXBsaXIgbGUgZm9ybXVsYWlyZSBkJ8OpcXVpcGVtZW50IGF2ZWMgbCdlcXVpcGVtZW50IHNlbGVjdGlvbm5lciBpbnN0YW5jaWVyXHJcbiQoJy5jb250ZW50LWRlc2NyaXB0aW9uLWR0ci1pbnN0YW5jZScpLm9uKCdjbGljaycsICcuZWRpdC1kZWxldGUtZXF1aXBlbWVudCA+IGEnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgaWRFcXVpcG1lbnQgPSBleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJjbGFzc0xpc3RcIl1bMF0pXHJcbiAgICB2YXIgJHRoaXMgPSAkKFwiI2Zvcm1fZXF1aXBlbWVudF9lZGl0X2luc3RhbmNlXCIpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQtaW5zdGFuY2UvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKHJlc3BvbnNlW1widHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgZGF0YVskKCcjZXF1aXBlbWVudF9UeXBlJykuYXR0cignbmFtZScpXSA9ICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpIGlucHV0IGF2ZWMgdmFsZXVyIHJlY3UgZGUgbCdlcXVpcGVtZW50XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X1R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfc291c190eXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVtcIlNvdXNUeXBlXCJdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJTb3VzVHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0RUUl9ib2FyZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJkVFJCb2FyZFwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0luZGljZV9EVFInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiaW5kaWNlRFRSXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfTnVtX3NlcmllJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIm51bVNlcmllXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4vL0Zvcm11bGFpcmUgZCdlZGl0IGRlIGwnw6lxdWlwZW1lbnRcclxuJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0X2luc3RhbmNlJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0JykuY3NzKFwib3BhY2l0eVwiLCBcIjAuNFwiKTtcclxuXHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge30sXHJcbiAgICAgICAgYWN0aW9uO1xyXG4gICAgLy9SZW1wbGkgZGF0YSBhIHBhcnRpciBkZXMgdmFsZXVyIGRlcyBpbnB1dHNcclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpXHJcblxyXG4gICAgICAgIGlmIChuYW1lICE9IChcImVxdWlwZW1lbnRbX3Rva2VuXVwiKSAmJiBuYW1lICE9IChcInNvdW1pc3Npb25fZXF1aXBlbWVudFwiKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LWluc3RhbmNlLycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAnZXF1aXBlbWVudCc6IGRhdGEsXHJcbiAgICAgICAgICAgIFwic291bWlzc2lvbl9lZGl0X2VxdWlwZW1lbnRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgJ2lkZXF1aXBtZW50JzogaWRFcXVpcG1lbnRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBGaW5kSW5kZXhFdmMoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICBpbmRleCA9IGVsZW1lbnRbJ2lkJ107XHJcbiAgICBpZiAoZWxlbWVudFsndHlwZSddWydpZCddID09IFwiMVwiICYmIChlbGVtZW50WydTdGF0dXMnXSA9PSB0cnVlKSkge1xyXG5cclxuICAgICAgICAkKFwiI3Nob3ctZXF1aXBtZW50XCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgZWxlbWVudFsndHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFkZENsYXNzKFwiZGVzY3JpcHRpb24tU3VidHlwZUNhcmRcIilcclxuICAgICAgICBpZiAoZWxlbWVudFsnU291c1R5cGUnXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0clwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZFRSQm9hcmRcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiaW5kaWNlRFRSXCJdICsgJzwvcD4nKVxyXG4gICAgICAgIGlmIChlbGVtZW50WydudW1TZXJpZSddID09IFwiXCIpIHtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPVwicGFkZGluZzogMnB4XCIgaWQgPSBcImJ0bi1hZGQtbnVtYmVyLXNlcmllJyArIGVsZW1lbnRbJ2lkJ10gKyAnXCIgPiBBZGQgbnVtYmVyIG9mIHNlcmllIDwvYnV0dG9uPicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50WydudW1TZXJpZSddICsgJzwvcD4nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbmRleEVWQyA9ICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHVybkluZGV4RWxlbWVudChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuXHJcblxyXG4gICAgaW5kZXggPSBlbGVtZW50WydpZCddO1xyXG5cclxuICAgIGlmICgoZWxlbWVudFsnU3RhdHVzJ10gPT0gdHJ1ZSkgJiYgZWxlbWVudFsndHlwZSddWydpZCddICE9IFwiMVwiKSB7XHJcblxyXG4gICAgICAgIC8vVGVzdCBsJ2V4aXN0ZW5jZSBkZSBsYSBkaXYgZGFucyBsZSBjYXMgb8O5IGVsbGUgZXhpc3RlIGxhIHJlbXBsYWNlIHNpIHBhcyBsYSBtZXQgZW4gcGxhY2VcclxuICAgICAgICBpZiAoJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5yZXBsYWNlV2l0aCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjc2hvdy1lcXVpcG1lbnRcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy90ZXN0IHNpIGwnw6lxdWlwZW1lbnQgZXN0IGxhIGNhcnRlIG91IG5vblxyXG4gICAgICAgIGlmIChlbGVtZW50Wyd0eXBlJ11bJ2lkJ10gIT0gXCIyXCIpIHtcclxuXHJcbiAgICAgICAgICAgIC8vU3dpdGggcmVwbGFjZW1lbnQgZGUgbCdpZCBkdSB0eXBlIGF2ZWMgc29uIG5vbVxyXG4gICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgZWxlbWVudFsndHlwZSddWyduYW1lJ10pKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50WydTb3VzVHlwZSddICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0clwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgICAgIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJkVFJCb2FyZFwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiaW5kaWNlRFRSXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFsnbnVtU2VyaWUnXSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgc3R5bGU9XCJwYWRkaW5nOiAycHhcIiBpZCA9IFwiYnRuLWFkZC1udW1iZXItc2VyaWUnICsgZWxlbWVudFsnaWQnXSArICdcIiA+IEFkZCBudW1iZXIgb2Ygc2VyaWUgPC9idXR0b24+JylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFsnbnVtU2VyaWUnXSArICc8L3A+IDxhIGlkPVwiZWRpdC0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gPC9hPiA8YSBpZD1cImRlbGV0ZS0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3MgPSBcImZhcyBmYS10cmFzaC1hbHQgcG91YmVsbGVcIj4gPC9pPjwvYT4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy9FY3JpcyBsZSBub20gZHUgdHlwZSBcImNhcnRlXCIgc291cyBsZSB0eXBlICBFVkNcclxuICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKHdyaXRlVHlwZSg1LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICAgICAgLy9QYXJjb3VzIGxlIHR5cGUgZGUgc291c3R5cGUgXHJcbiAgICAgICAgICAgIC8vICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNiwgZWxlbWVudFsnU291c1R5cGUnXVsnbmFtZSddKSk7XHJcblxyXG4gICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0ciBjb250ZW50LWRlc2NyaXB0aW9uLWR0ckNhcmRcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZFRSQm9hcmRcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImluZGljZURUUlwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRbJ251bVNlcmllJ10gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPVwicGFkZGluZzogMnB4XCIgaWQgPSBcImJ0bi1hZGQtbnVtYmVyLXNlcmllJyArIGVsZW1lbnRbJ2lkJ10gKyAnXCIgPiBBZGQgbnVtYmVyIG9mIHNlcmllIDwvYnV0dG9uPicpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbJ251bVNlcmllJ10gKyAnPC9wPiA8YSBpZD1cImVkaXQtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IDwvYT4gPGEgaWQ9XCJkZWxldGUtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzID0gXCJmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlXCI+IDwvaT48L2E+JylcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ291bnROdW1iZXJFcXVpcHQoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICB0b3RhbEVxdWlwdCsrO1xyXG59XHJcbi8vRXh0cmFpdCBsZSBub21icmUgZCd1bmUgc3RyZWluZ1xyXG5mdW5jdGlvbiBleHRyYWl0Tm9tYnJlKHN0cikge1xyXG4gICAgcmV0dXJuIE51bWJlcihzdHIucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpKVxyXG59XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlVHlwZShzaXplLCBuYW1lKSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXR5cGUgXCI+JyArIG5hbWUgKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgc291c3R5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVN1YnR5cGUoc2l6ZSwgbmFtZSkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLVR5cGUgXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyBuYW1lICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHNvdXN0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVTdWJ0eXBlQ2FyZChzaXplLCBuYW1lKSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tc3VidHlwZVwiIGlkPVwiZGVzY3JpcHRpb24tc3ViVHlwZSBcIj4nICsgbmFtZSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy8gLy9FY3JpdCBsZXMgMiBpY29ucyBkJ2VkaXQgZXQgZGVsZXRlXHJcbi8vIGZ1bmN0aW9uIHdyaXRlRWRpdERlbGV0ZShpbmRleCkge1xyXG4vLyAgICAgcmV0dXJuICcgPHAgY2xhc3M9XCJlZGl0LWRlbGV0ZS1lcXVpcGVtZW50XCI+IDxhIGlkPVwiZWRpdC0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gPC9hPjwvcD4nO1xyXG4vLyB9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=