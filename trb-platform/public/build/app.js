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
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progressBar */ "./assets/js/progressBar.js");
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_progressBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _test_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-upload */ "./assets/js/test-upload.js");
/* harmony import */ var _test_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_test_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _train__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./train */ "./assets/js/train.js");
/* harmony import */ var _train__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_train__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plug */ "./assets/js/plug.js");
/* harmony import */ var _plug__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plug__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fleet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fleet */ "./assets/js/fleet.js");
/* harmony import */ var _fleet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fleet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _logs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logs */ "./assets/js/logs.js");
/* harmony import */ var _logs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_logs__WEBPACK_IMPORTED_MODULE_9__);









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
$(document).ready(function () {
  $('pre').remove();
  $('.button-left').click(function () {
    $('.sidebar').toggleClass('fliph');
  });
  $('.sidebar').hover(function () {
    $('main').css('transition', 'all 0.5s ease-in-out');
    $('main').addClass('ml-sm-auto');
    $('main').removeClass('offset-1');
    $('main').addClass('offset-2');
    $('.main-show').removeClass('col-lg-11');
  }, function () {
    $('main').css('transition', 'all 0.10s ease-in-out');
    $('main').addClass('offset-1');
    $('main').removeClass('offset-2');
    $('main').removeClass('ml-sm-auto');
    $('.main-show').addClass('col-lg-11');
  }); // $('main').removeClass('ml-sm-auto');

  $('.nav-label').click(function () {
    $('.fa-chevron-left').css('transform', 'rotatex(45deg)');
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
    $('main').css('opacity', "0.4");
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
  $('main').css("opacity", '1');
}); // 
// Requete AJAX pour remplir le formulaire d'équipement avec l'equipement selectionner

$('.content-description-dtr').on('click', '.edit-delete-equipement > a', function (e) {
  e.preventDefault();
  $('main').css("opacity", '0.4');
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
        $('main').css("opacity", '0.4');
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
  $('main').css("opacity", '0.4');
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
      $('#title-version-ertms').append("<p>" + response.version + "</p>");
      $('main').css("opacity", '1');
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

/***/ "./assets/js/fleet.js":
/*!****************************!*\
  !*** ./assets/js/fleet.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('#search-fleet').on('submit', function (e) {
    e.preventDefault();
  });
  $('#name_project').keyup(function (e) {
    e.preventDefault();
    var search = $(this).val();
    var data = 'motclef=' + search;

    if (search.length > 0) {
      $.ajax({
        url: '/alstom/search-fleet',
        type: 'POST',
        data: data,
        async: true,
        dataType: 'json',
        // JSON
        success: function success(response) {
          console.log(response);
          response.forEach(function (element) {
            console.log(element.name);
          }); // $('#result-fleet').html(response).show();
        },
        error: function error(xhr, textStatus, errorThrown) {
          'Ajax request failed.';
        }
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/logs.js":
/*!***************************!*\
  !*** ./assets/js/logs.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var $fleet = $('#fleet_select');
var $train = $('#train_select');
var $ertms = $('#ertms_select');
var typeLog = $('#select_type_log');
var typeLogText = $('#select_type_log');
var data = {}; //detection si le browser gère le drag&drop

var isAdvancedUpload = function () {
  var div = document.createElement('div');
  return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
}();

var $form = $('.drag-log');

var $input = $form.find('input[type="file"]'),
    $label = $form.find('label'),
    showFiles = function showFiles(files) {
  $label.text(files.length > 1 ? ($input.attr('data-multiple-caption') || '').replace('{count}', files.length) : files[0].name);
};

typeLog.hide();
typeLogText.hide();
$form.hide();
$(document).ready(function () {
  if (window.location.pathname == '/alstom/add-logs') {
    $form.show();
    prgbar = new ldBar("#test-progress");
  }

  if (window.location.pathname == '/alstom/search-logs') {
    //identification de la progress bar
    prgbar = new ldBar("#test-progress");
    $('main').css("opacity", '0.4');
    $('#wait-spinner').show();
    $.post("/alstom/checkFleet").then(function (response) {
      response.forEach(function (element) {
        //Remplissage par les element reçu du controller
        $fleet.append(new Option(element.name, element.id));
      });
      $.post("/alstom/checkTrainByFleet", {
        'id': $fleet.val()
      }).then(function (response) {
        response.forEach(function (element) {
          //Remplissage par les element reçu du controller
          $train.append(new Option(element.name, element.id));
        });
        $.post("/alstom/checkErtmsByTrain", {
          'id': $train.val()
        }).then(function (response) {
          response.forEach(function (element) {
            //Remplissage par les element reçu du controller
            $ertms.append(new Option(element.name, element.id));
          });
        }).done(function () {
          $('main').css("opacity", '1');
          $('#wait-spinner').hide();
        });
      });
    });
  }
});
$fleet.change(function () {
  $('#select_type_log').hide();
  console.log($fleet.val());
  $train.empty();
  $ertms.empty();
  $('main').css("opacity", '0.4');
  $('#wait-spinner').show();
  $.post("/alstom/checkTrainByFleet", {
    'id': $fleet.val()
  }).then(function (response) {
    response.forEach(function (element) {
      //Remplissage par les element reçu du controller
      $train.append(new Option(element.name, element.id));
    });
  }).done(function () {
    $('main').css("opacity", '1');
    $('#wait-spinner').hide();
  });
});
$train.change(function () {
  $('#select_type_log').hide();
  console.log($fleet.val());
  $ertms.empty();
  $('main').css("opacity", '0.4');
  $('#wait-spinner').show();
  $.post("/alstom/checkErtmsByTrain", {
    'id': $train.val()
  }).then(function (response) {
    response.forEach(function (element) {
      //Remplissage par les element reçu du controller
      $ertms.append(new Option(element.name, element.id));
    });
  }).done(function () {
    typeLog.show();
    $form.show();
    $('main').css("opacity", '1');
    $('#wait-spinner').hide();
  });
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

var Log = {},
    idBaseline = "";
$form.on('submit', function (e) {
  if (droppedFiles) {
    Log['name_log'] = $('#type_log_select').val();
    idBaseline = $('#ertms_select').val();
    console.log($('#ertms_select').val()); // Parti du traitement du drag an drop file

    if ($form.hasClass('is-uploading')) return false;
    showFiles(droppedFiles);
    $form.addClass('is-uploading').removeClass('is-error');

    if (isAdvancedUpload) {
      var ajaxData = new FormData($form.get(0));

      if (droppedFiles) {
        $.each(droppedFiles, function (i, file) {
          ajaxData.append($input.attr('name'), file);
          Log['key_log'] = file.name;
        });
      }

      $.ajax({
        url: '/alstom/uploadLog',
        type: 'POST',
        xhr: function xhr() {
          var xhr = new window.XMLHttpRequest();
          xhr.upload.addEventListener("progress", function (evt) {
            console.log(evt.loaded);

            if (evt.lengthComputable) {
              var percentComplete = evt.loaded / evt.total * 100; //Do something with upload progress here

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
        complete: function complete() {
          $form.removeClass('is-uploading');
          $("#test-progress").removeClass('is-blink');
        },
        success: function success(data) {
          $form.addClass(data.success == true ? 'is-success' : 'is-error');
          valid = true;
        },
        error: function error() {
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
        $form.removeClass('is-uploading').addClass(data.success == true ? 'is-success' : 'is-error').removeAttr('target');
        if (!data.success) $errorMsg.text(data.error);
        $form.removeAttr('target');
        $iframe.remove();
      });
    }
  }
});
$('#valid-all-logs').on('click', function (e) {
  e.preventDefault();
  $('main').css('opacity', "0.4");
  $('#wait-spinner').show();
  $.ajax({
    url: '/alstom/flush-log',
    type: 'POST',
    data: {
      'log': Log,
      'baseline': idBaseline
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      //ask for the status
      console.log(response); // location.reload();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/plug.js":
/*!***************************!*\
  !*** ./assets/js/plug.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('#form_plug').on('submit', function (e) {
  var baseline = extraitNombre(window.location.pathname);
  console.log($form);
  $.ajax({
    url: '/alstom/add-plug',
    type: 'GET',
    dataType: "text",
    data: {
      id: baseline
    },
    async: true,
    success: function success(response) {
      console.log(response);
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
}); //Extrait le nombre d'une streing

function extraitNombre(str) {
  return Number(str.replace(/[^\d]/g, ""));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/progressBar.js":
/*!**********************************!*\
  !*** ./assets/js/progressBar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return require(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }

      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }

    return n[o].exports;
  }

  var i = typeof require == "function" && require;

  for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }

  return s;
})({
  1: [function (require, module, exports) {
    // Generated by LiveScript 1.4.0
    var presets,
        simpleStr,
        wrap,
        slice$ = [].slice,
        toString$ = {}.toString;
    presets = require('./presets').presets;

    simpleStr = function simpleStr(arr) {
      return arr.join('');
    };

    wrap = function wrap(content) {
      return "data:image/svg+xml;base64," + btoa(content);
    };

    (function () {
      var make, handler, ldBar;
      make = {
        head: function head(viewBox) {
          return "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"" + viewBox + "\">";
        },
        gradient: function gradient(dir, dur) {
          var colors, ret, len, gx, gy, x, y, i$, i, idx;
          dir == null && (dir = 45);
          dur == null && (dur = 1);
          colors = slice$.call(arguments, 2);
          ret = [this.head("0 0 100 100")];
          len = colors.length * 4 + 1;
          dir = dir * Math.PI / 180;
          gx = Math.pow(Math.cos(dir), 2);
          gy = Math.sqrt(gx - Math.pow(gx, 2));

          if (dir > Math.PI * 0.25) {
            gy = Math.pow(Math.sin(dir), 2);
            gx = Math.sqrt(gy - Math.pow(gy, 2));
          }

          x = gx * 100;
          y = gy * 100;
          ret.push("<defs><linearGradient id=\"gradient\" x1=\"0\" x2=\"" + gx + "\" y1=\"0\" y2=\"" + gy + "\">");

          for (i$ = 0; i$ < len; ++i$) {
            i = i$;
            idx = i * 100 / (len - 1);
            ret.push("<stop offset=\"" + idx + "%\" stop-color=\"" + colors[i % colors.length] + "\"/>");
          }

          ret.push("</linearGradient></defs>\n<rect x=\"0\" y=\"0\" width=\"400\" height=\"400\" fill=\"url(#gradient)\">\n<animateTransform attributeName=\"transform\" type=\"translate\" from=\"-" + x + ",-" + y + "\"\nto=\"0,0\" dur=\"" + dur + "s\" repeatCount=\"indefinite\"/></rect></svg>");
          return wrap(ret.join(""));
        },
        stripe: function stripe(c1, c2, dur) {
          var ret, i;
          c1 == null && (c1 = '#b4b4b4');
          c2 == null && (c2 = '#e6e6e6');
          dur == null && (dur = 1);
          ret = [this.head("0 0 100 100")];
          ret = ret.concat(["<rect fill=\"" + c2 + "\" width=\"100\" height=\"100\"/>", "<g><g>", function () {
            var i$,
                results$ = [];

            for (i$ = 0; i$ < 13; ++i$) {
              i = i$;
              results$.push("<polygon fill=\"" + c1 + "\" " + ("points=\"" + (-90 + i * 20) + ",100 " + (-100 + i * 20) + ",") + ("100 " + (-60 + i * 20) + ",0 " + (-50 + i * 20) + ",0 \"/>"));
            }

            return results$;
          }().join(""), "</g><animateTransform attributeName=\"transform\" type=\"translate\" ", "from=\"0,0\" to=\"20,0\" dur=\"" + dur + "s\" repeatCount=\"indefinite\"/></g></svg>"].join(""));
          return wrap(ret);
        },
        bubble: function bubble(c1, c2, count, dur, size, sw) {
          var ret, i$, i, idx, x, r, d;
          c1 == null && (c1 = '#39d');
          c2 == null && (c2 = '#9cf');
          count == null && (count = 15);
          dur == null && (dur = 1);
          size == null && (size = 6);
          sw == null && (sw = 1);
          ret = [this.head("0 0 200 200"), "<rect x=\"0\" y=\"0\" width=\"200\" height=\"200\" fill=\"" + c1 + "\"/>"];

          for (i$ = 0; i$ < count; ++i$) {
            i = i$;
            idx = -(i / count) * dur;
            x = Math.random() * 184 + 8;
            r = (Math.random() * 0.7 + 0.3) * size;
            d = dur * (1 + Math.random() * 0.5);
            ret.push(["<circle cx=\"" + x + "\" cy=\"0\" r=\"" + r + "\" fill=\"none\" stroke=\"" + c2 + "\" stroke-width=\"" + sw + "\">", "<animate attributeName=\"cy\" values=\"190;-10\" times=\"0;1\" ", "dur=\"" + d + "s\" begin=\"" + idx + "s\" repeatCount=\"indefinite\"/>", "</circle>", "<circle cx=\"" + x + "\" cy=\"0\" r=\"" + r + "\" fill=\"none\" stroke=\"" + c2 + "\" stroke-width=\"" + sw + "\">", "<animate attributeName=\"cy\" values=\"390;190\" times=\"0;1\" ", "dur=\"" + d + "s\" begin=\"" + idx + "s\" repeatCount=\"indefinite\"/>", "</circle>"].join(""));
          }

          return wrap(ret.join("") + "</svg>");
        }
      };
      handler = {
        queue: {},
        running: false,
        main: function main(timestamp) {
          var keepon,
              removed,
              k,
              ref$,
              func,
              ret,
              this$ = this;
          keepon = false;
          removed = [];

          for (k in ref$ = this.queue) {
            func = ref$[k];
            ret = func(timestamp);

            if (!ret) {
              removed.push(func);
            }

            keepon = keepon || ret;
          }

          for (k in ref$ = this.queue) {
            func = ref$[k];

            if (removed.indexOf(func) >= 0) {
              delete this.queue[k];
            }
          }

          if (keepon) {
            return requestAnimationFrame(function (it) {
              return this$.main(it);
            });
          } else {
            return this.running = false;
          }
        },
        add: function add(key, f) {
          var this$ = this;

          if (!this.queue[key]) {
            this.queue[key] = f;
          }

          if (!this.running) {
            this.running = true;
            return requestAnimationFrame(function (it) {
              return this$.main(it);
            });
          }
        }
      };

      window.ldBar = ldBar = function ldBar(selector, option) {
        var xmlns,
            root,
            cls,
            idPrefix,
            id,
            _domTree,
            newNode,
            x$,
            config,
            attr,
            that,
            isStroke,
            parseRes,
            dom,
            svg,
            text,
            group,
            length,
            path0,
            path1,
            patimg,
            img,
            ret,
            size,
            this$ = this;

        option == null && (option = {});
        xmlns = {
          xlink: "http://www.w3.org/1999/xlink"
        };
        root = toString$.call(selector).slice(8, -1) === 'String' ? document.querySelector(selector) : selector;

        if (!root.ldBar) {
          root.ldBar = this;
        } else {
          return root.ldBar;
        }

        cls = root.getAttribute('class') || '';

        if (!~cls.indexOf('ldBar')) {
          root.setAttribute('class', cls + " ldBar");
        }

        idPrefix = "ldBar-" + Math.random().toString(16).substring(2);
        id = {
          key: idPrefix,
          clip: idPrefix + "-clip",
          filter: idPrefix + "-filter",
          pattern: idPrefix + "-pattern",
          mask: idPrefix + "-mask",
          maskPath: idPrefix + "-mask-path"
        };

        _domTree = function domTree(n, o) {
          var k, v;
          n = newNode(n);

          for (k in o) {
            v = o[k];

            if (k !== 'attr') {
              n.appendChild(_domTree(k, v || {}));
            }
          }

          n.attrs(o.attr || {});
          return n;
        };

        newNode = function newNode(n) {
          return document.createElementNS("http://www.w3.org/2000/svg", n);
        };

        x$ = document.body.__proto__.__proto__.__proto__;

        x$.text = function (t) {
          return this.appendChild(document.createTextNode(t));
        };

        x$.attrs = function (o) {
          var k,
              v,
              ret,
              results$ = [];

          for (k in o) {
            v = o[k];
            ret = /([^:]+):([^:]+)/.exec(k);

            if (!ret || !xmlns[ret[1]]) {
              results$.push(this.setAttribute(k, v));
            } else {
              results$.push(this.setAttributeNS(xmlns[ret[1]], k, v));
            }
          }

          return results$;
        };

        x$.styles = function (o) {
          var k,
              v,
              results$ = [];

          for (k in o) {
            v = o[k];
            results$.push(this.style[k] = v);
          }

          return results$;
        };

        x$.append = function (n) {
          var r;
          return this.appendChild(r = document.createElementNS("http://www.w3.og/2000/svg", n));
        };

        x$.attr = function (n, v) {
          if (v != null) {
            return this.setAttribute(n, v);
          } else {
            return this.getAttribute(n);
          }
        };

        config = {
          "type": 'stroke',
          "img": '',
          "path": 'M10 10L90 10M90 8M90 12',
          "fill-dir": 'btt',
          "fill": '#25b',
          "fill-background": '#ddd',
          "fill-background-extrude": 3,
          "pattern-size": null,
          "stroke-dir": 'normal',
          "stroke": '#25b',
          "stroke-width": '3',
          "stroke-trail": '#ddd',
          "stroke-trail-width": 0.5,
          "duration": 1,
          "easing": 'linear',
          "value": 0,
          "img-size": null,
          "bbox": null,
          "set-dim": true,
          "aspect-ratio": "xMidYMid",
          "transition-in": false,
          "min": 0,
          "max": 100,
          "precision": 0,
          "padding": undefined
        };
        config["preset"] = root.attr("data-preset") || option["preset"];

        if (config.preset != null) {
          import$(config, presets[config.preset]);
        }

        for (attr in config) {
          if (that = that = root.attr("data-" + attr)) {
            config[attr] = that;
          }
        }

        import$(config, option);

        if (config.img) {
          config.path = null;
        }

        isStroke = config.type === 'stroke';

        parseRes = function parseRes(v) {
          var parser, ret;
          parser = /data:ldbar\/res,([^()]+)\(([^)]+)\)/;
          ret = parser.exec(v);

          if (!ret) {
            return v;
          }

          return ret = make[ret[1]].apply(make, ret[2].split(','));
        };

        config.fill = parseRes(config.fill);
        config.stroke = parseRes(config.stroke);

        if (config["set-dim"] === 'false') {
          config["set-dim"] = false;
        }

        dom = {
          attr: {
            "xmlns:xlink": 'http://www.w3.org/1999/xlink',
            preserveAspectRatio: config["aspect-ratio"],
            width: "100%",
            height: "100%"
          },
          defs: {
            filter: {
              attr: {
                id: id.filter,
                x: -1,
                y: -1,
                width: 3,
                height: 3
              },
              feMorphology: {
                attr: {
                  operator: +config["fill-background-extrude"] >= 0 ? 'dilate' : 'erode',
                  radius: Math.abs(+config["fill-background-extrude"])
                }
              },
              feColorMatrix: {
                attr: {
                  values: '0 0 0 0 1    0 0 0 0 1    0 0 0 0 1    0 0 0 1 0',
                  result: "cm"
                }
              }
            },
            mask: {
              attr: {
                id: id.mask
              },
              image: {
                attr: {
                  "xlink:href": config.img,
                  filter: "url(#" + id.filter + ")",
                  x: 0,
                  y: 0,
                  width: 100,
                  height: 100,
                  preserveAspectRatio: config["aspect-ratio"]
                }
              }
            },
            g: {
              mask: {
                attr: {
                  id: id.maskPath
                },
                path: {
                  attr: {
                    d: config.path || "",
                    fill: '#fff',
                    stroke: '#fff',
                    filter: "url(#" + id.filter + ")"
                  }
                }
              }
            },
            clipPath: {
              attr: {
                id: id.clip
              },
              rect: {
                attr: {
                  'class': 'mask',
                  fill: '#000'
                }
              }
            },
            pattern: {
              attr: {
                id: id.pattern,
                patternUnits: 'userSpaceOnUse',
                x: 0,
                y: 0,
                width: 300,
                height: 300
              },
              image: {
                attr: {
                  x: 0,
                  y: 0,
                  width: 300,
                  height: 300
                }
              }
            }
          }
        };
        svg = _domTree('svg', dom);
        text = document.createElement('div');
        text.setAttribute('class', 'ldBar-label');
        root.appendChild(svg);
        root.appendChild(text);
        group = [0, 0];
        length = 0;

        this.fit = function () {
          var that, box, d, rect;

          if (that = config["bbox"]) {
            box = that.split(' ').map(function (it) {
              return +it.trim();
            });
            box = {
              x: box[0],
              y: box[1],
              width: box[2],
              height: box[3]
            };
          } else {
            box = group[1].getBBox();
          }

          if (!box || box.width === 0 || box.height === 0) {
            box = {
              x: 0,
              y: 0,
              width: 100,
              height: 100
            };
          }

          d = Math.max.apply(null, ['stroke-width', 'stroke-trail-width', 'fill-background-extrude'].map(function (it) {
            return config[it];
          })) * 1.5;

          if (config["padding"] != null) {
            d = +config["padding"];
          }

          svg.attrs({
            viewBox: [box.x - d, box.y - d, box.width + d * 2, box.height + d * 2].join(" ")
          });

          if (config["set-dim"]) {
            ['width', 'height'].map(function (it) {
              if (!root.style[it] || this$.fit[it]) {
                root.style[it] = box[it] + d * 2 + "px";
                return this$.fit[it] = true;
              }
            });
          }

          rect = group[0].querySelector('rect');

          if (rect) {
            return rect.attrs({
              x: box.x - d,
              y: box.y - d,
              width: box.width + d * 2,
              height: box.height + d * 2
            });
          }
        };

        if (config.path) {
          if (isStroke) {
            group[0] = _domTree('g', {
              path: {
                attr: {
                  d: config.path,
                  fill: 'none',
                  'class': 'baseline'
                }
              }
            });
          } else {
            group[0] = _domTree('g', {
              rect: {
                attr: {
                  x: 0,
                  y: 0,
                  width: 100,
                  height: 100,
                  mask: "url(#" + id.maskPath + ")",
                  fill: config["fill-background"],
                  'class': 'frame'
                }
              }
            });
          }

          svg.appendChild(group[0]);
          group[1] = _domTree('g', {
            path: {
              attr: {
                d: config.path,
                'class': isStroke ? 'mainline' : 'solid',
                "clip-path": config.type === 'fill' ? "url(#" + id.clip + ")" : ''
              }
            }
          });
          svg.appendChild(group[1]);
          path0 = group[0].querySelector(isStroke ? 'path' : 'rect');
          path1 = group[1].querySelector('path');

          if (isStroke) {
            path1.attrs({
              fill: 'none'
            });
          }

          patimg = svg.querySelector('pattern image');
          img = new Image();
          img.addEventListener('load', function () {
            var box, that;
            box = (that = config["pattern-size"]) ? {
              width: +that,
              height: +that
            } : img.width && img.height ? {
              width: img.width,
              height: img.height
            } : {
              width: 300,
              height: 300
            };
            svg.querySelector('pattern').attrs({
              width: box.width,
              height: box.height
            });
            return patimg.attrs({
              width: box.width,
              height: box.height
            });
          });

          if (/.+\..+|^data:/.exec(!isStroke ? config.fill : config.stroke)) {
            img.src = !isStroke ? config.fill : config.stroke;
            patimg.attrs({
              "xlink:href": img.src
            });
          }

          if (isStroke) {
            path0.attrs({
              stroke: config["stroke-trail"],
              "stroke-width": config["stroke-trail-width"]
            });
            path1.attrs({
              "stroke-width": config["stroke-width"],
              stroke: /.+\..+|^data:/.exec(config.stroke) ? "url(#" + id.pattern + ")" : config.stroke
            });
          }

          if (config.fill && !isStroke) {
            path1.attrs({
              fill: /.+\..+|^data:/.exec(config.fill) ? "url(#" + id.pattern + ")" : config.fill
            });
          }

          length = path1.getTotalLength();
          this.fit();
          this.inited = true;
        } else if (config.img) {
          if (config["img-size"]) {
            ret = config["img-size"].split(',');
            size = {
              width: +ret[0],
              height: +ret[1]
            };
          } else {
            size = {
              width: 100,
              height: 100
            };
          }

          group[0] = _domTree('g', {
            rect: {
              attr: {
                x: 0,
                y: 0,
                width: 100,
                height: 100,
                mask: "url(#" + id.mask + ")",
                fill: config["fill-background"]
              }
            }
          });
          svg.querySelector('mask image').attrs({
            width: size.width,
            height: size.height
          });
          group[1] = _domTree('g', {
            image: {
              attr: {
                width: size.width,
                height: size.height,
                x: 0,
                y: 0,
                preserveAspectRatio: config["aspect-ratio"],
                "clip-path": config.type === 'fill' ? "url(#" + id.clip + ")" : '',
                "xlink:href": config.img,
                'class': 'solid'
              }
            }
          });
          img = new Image();
          img.addEventListener('load', function () {
            var ret, size;

            if (config["img-size"]) {
              ret = config["img-size"].split(',');
              size = {
                width: +ret[0],
                height: +ret[1]
              };
            } else if (img.width && img.height) {
              size = {
                width: img.width,
                height: img.height
              };
            } else {
              size = {
                width: 100,
                height: 100
              };
            }

            svg.querySelector('mask image').attrs({
              width: size.width,
              height: size.height
            });
            group[1].querySelector('image').attrs({
              width: size.width,
              height: size.height
            });
            this$.fit();
            this$.set(undefined, false);
            return this$.inited = true;
          });
          img.src = config.img;
          svg.appendChild(group[0]);
          svg.appendChild(group[1]);
        }

        svg.attrs({
          width: '100%',
          height: '100%'
        });
        this.transition = {
          value: {
            src: 0,
            des: 0
          },
          time: {},
          ease: function ease(t, b, c, d) {
            t = t / (d * 0.5);

            if (t < 1) {
              return c * 0.5 * t * t + b;
            }

            t = t - 1;
            return -c * 0.5 * (t * (t - 2) - 1) + b;
          },
          handler: function handler(time, doTransition) {
            var ref$, min, max, prec, dv, dt, dur, v, p, node, style, box, dir;
            doTransition == null && (doTransition = true);

            if (this.time.src == null) {
              this.time.src = time;
            }

            ref$ = [config["min"], config["max"], 1 / config["precision"]], min = ref$[0], max = ref$[1], prec = ref$[2];
            ref$ = [this.value.des - this.value.src, (time - this.time.src) * 0.001, +config["duration"] || 1], dv = ref$[0], dt = ref$[1], dur = ref$[2];
            v = doTransition ? this.ease(dt, this.value.src, dv, dur) : this.value.des;

            if (config.precision) {
              v = Math.round(v * prec) / prec;
            } else if (doTransition) {
              v = Math.round(v);
            }

            v >= min || (v = min);
            v <= max || (v = max);
            text.textContent = v;
            p = 100.0 * (v - min) / (max - min);

            if (isStroke) {
              node = path1;
              style = {
                "stroke-dasharray": config["stroke-dir"] === 'reverse' ? "0 " + length * (100 - p) * 0.01 + " " + length * p * 0.01 + " 0" : p * 0.01 * length + " " + ((100 - p) * 0.01 * length + 1)
              };
            } else {
              box = group[1].getBBox();
              dir = config["fill-dir"];
              style = dir === 'btt' || !dir ? {
                y: box.y + box.height * (100 - p) * 0.01,
                height: box.height * p * 0.01,
                x: box.x,
                width: box.width
              } : dir === 'ttb' ? {
                y: box.y,
                height: box.height * p * 0.01,
                x: box.x,
                width: box.width
              } : dir === 'ltr' ? {
                y: box.y,
                height: box.height,
                x: box.x,
                width: box.width * p * 0.01
              } : dir === 'rtl' ? {
                y: box.y,
                height: box.height,
                x: box.x + box.width * (100 - p) * 0.01,
                width: box.width * p * 0.01
              } : void 8;
              node = svg.querySelector('rect');
            }

            node.attrs(style);

            if (dt >= dur) {
              delete this.time.src;
              return false;
            }

            return true;
          },
          start: function start(src, des, doTransition) {
            var ref$,
                this$ = this;
            ref$ = this.value;
            ref$.src = src;
            ref$.des = des;
            !!(root.offsetWidth || root.offsetHeight || root.getClientRects().length);

            if (!doTransition || !(root.offsetWidth || root.offsetHeight || root.getClientRects().length)) {
              this.time.src = 0;
              this.handler(1000, false);
              return;
            }

            return handler.add(id.key, function (time) {
              return this$.handler(time);
            });
          }
        };

        this.set = function (v, doTransition) {
          var src, des;
          doTransition == null && (doTransition = true);
          src = this.value || 0;

          if (v != null) {
            this.value = v;
          } else {
            v = this.value;
          }

          des = this.value;
          return this.transition.start(src, des, doTransition);
        };

        this.set(+config.value || 0, config["transition-in"]) || false;
        return this;
      };

      return window.addEventListener('load', function () {
        var i$,
            ref$,
            len$,
            node,
            results$ = [];

        for (i$ = 0, len$ = (ref$ = document.querySelectorAll('.ldBar')).length; i$ < len$; ++i$) {
          node = ref$[i$];

          if (!node.ldBar) {
            results$.push(node.ldBar = new ldBar(node));
          }
        }

        return results$;
      }, false);
    })();

    module.exports = ldBar;

    function import$(obj, src) {
      var own = {}.hasOwnProperty;

      for (var key in src) {
        if (own.call(src, key)) obj[key] = src[key];
      }

      return obj;
    }
  }, {
    "./presets": 2
  }],
  2: [function (require, module, exports) {
    // Generated by LiveScript 1.4.0
    var presets,
        out$ = typeof exports != 'undefined' && exports || this;
    out$.presets = presets = {
      rainbow: {
        "type": 'stroke',
        "path": 'M10 10L90 10',
        "stroke": 'data:ldbar/res,gradient(0,1,#a551df,#fd51ad,#ff7f82,#ffb874,#ffeb90)',
        "bbox": "10 10 80 10"
      },
      energy: {
        "type": 'fill',
        "path": 'M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5',
        "stroke": '#f00',
        "fill": 'data:ldbar/res,gradient(45,2,#4e9,#8fb,#4e9)',
        "fill-dir": "ltr",
        "fill-background": '#444',
        "fill-background-extrude": 1,
        "bbox": "10 5 80 10"
      },
      stripe: {
        "type": 'fill',
        "path": 'M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5',
        "stroke": '#f00',
        "fill": 'data:ldbar/res,stripe(#25b,#58e,1)',
        "fill-dir": "ltr",
        "fill-background": '#ddd',
        "fill-background-extrude": 1,
        "bbox": "10 5 80 10"
      },
      text: {
        "type": 'fill',
        "img": "data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"70\" height=\"20\" viewBox=\"0 0 70 20\"><text x=\"35\" y=\"10\" text-anchor=\"middle\" dominant-baseline=\"central\" font-family=\"arial\">LOADING</text></svg>",
        "fill-background-extrude": 1.3,
        "pattern-size": 100,
        "fill-dir": "ltr",
        "img-size": "70,20",
        "bbox": "0 0 70 20"
      },
      line: {
        "type": 'stroke',
        "path": 'M10 10L90 10',
        "stroke": '#25b',
        "stroke-width": 3,
        "stroke-trail": '#ddd',
        "stroke-trail-width": 1,
        "bbox": "10 10 80 10"
      },
      fan: {
        "type": 'stroke',
        "path": 'M10 90A40 40 0 0 1 90 90',
        "fill-dir": 'btt',
        "fill": '#25b',
        "fill-background": '#ddd',
        "fill-background-extrude": 3,
        "stroke-dir": 'normal',
        "stroke": '#25b',
        "stroke-width": '3',
        "stroke-trail": '#ddd',
        "stroke-trail-width": 0.5,
        "bbox": "10 50 80 40"
      },
      circle: {
        "type": 'stroke',
        "path": 'M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10',
        "fill-dir": 'btt',
        "fill": '#25b',
        "fill-background": '#ddd',
        "fill-background-extrude": 3,
        "stroke-dir": 'normal',
        "stroke": '#25b',
        "stroke-width": '3',
        "stroke-trail": '#ddd',
        "stroke-trail-width": 0.5,
        "bbox": "10 10 80 80"
      },
      bubble: {
        "type": 'fill',
        "path": 'M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10',
        "fill-dir": 'btt',
        "fill": 'data:ldbar/res,bubble(#39d,#cef)',
        "pattern-size": "150",
        "fill-background": '#ddd',
        "fill-background-extrude": 2,
        "stroke-dir": 'normal',
        "stroke": '#25b',
        "stroke-width": '3',
        "stroke-trail": '#ddd',
        "stroke-trail-width": 0.5,
        "bbox": "10 10 80 80"
      }
    };
  }, {}]
}, {}, [1]);

/***/ }),

/***/ "./assets/js/test-upload.js":
/*!**********************************!*\
  !*** ./assets/js/test-upload.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//définition des variables
var ListePlug = [],
    i = 0,
    valid = false;
$(document).ready(function () {
  var nombre_url = extraitNombre(window.location.pathname);

  if (window.location.pathname == '/alstom/baseline-train/' + nombre_url) {
    //identification de la progress bar
    prgbar = new ldBar("#test-progress");
  }

  ;
}); // Declaration d'évenement avant chargement de l apage

$('#valid-all-plug').hide();
$('#cancel-all-plug').hide(); //detection si le browser gère le drag&drop

var isAdvancedUpload = function () {
  var div = document.createElement('div');
  return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
}();

var $form = $('.box');

var $input = $form.find('input[type="file"]'),
    $label = $form.find('label'),
    showFiles = function showFiles(files) {
  $label.text(files.length > 1 ? ($input.attr('data-multiple-caption') || '').replace('{count}', files.length) : files[0].name);
}; //ajouter un plug


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
    return false;
  }
}); //on ouvre le form pour ajouter

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
  var Plug = {};

  if ($('#input-name-plug').val() != "" && droppedFiles) {
    $('#valid-all-plug').show();
    $('#cancel-all-plug').show();
    Plug['name_plug'] = $('#input-name-plug').val(); // Parti du traitement du drag an drop file

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
        xhr: function xhr() {
          var xhr = new window.XMLHttpRequest();
          xhr.upload.addEventListener("progress", function (evt) {
            console.log(evt.loaded);

            if (evt.lengthComputable) {
              var percentComplete = evt.loaded / evt.total * 100; //Do something with upload progress here

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
        complete: function complete() {
          $form.removeClass('is-uploading');
          $("#test-progress").removeClass('is-blink');
          ListePlug.push(Plug);
          ListePlug.forEach(writePlug);
        },
        success: function success(data) {
          $form.addClass(data.success == true ? 'is-success' : 'is-error');
          $('#content-name-drag-plug').hide();
          valid = true;
          console.log(ListePlug);
        },
        error: function error() {
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
        $form.removeClass('is-uploading').addClass(data.success == true ? 'is-success' : 'is-error').removeAttr('target');
        if (!data.success) $errorMsg.text(data.error);
        $form.removeAttr('target');
        $iframe.remove();
      });
    }
  } else {
    alert('Please enter name & file plug');
  }
});
$('#test-upload').on("click", "button", function () {
  var filest = document.querySelector("#selector").files;
  var tempDestination = "test";
  var nameFile = "init";
  var uploadStatus = "PENDING"; //On drag et drop

  $.ajax({
    url: '/alstom/requestFile',
    type: 'POST',
    data: {
      'bucket': 'application'
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      tempDestination = response.path;
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
        dataType: 'json',
        // JSON
        success: function success(response) {
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
  $('main').css('opacity', "0.4");
  $('#wait-spinner').show();
  var idBaseline = extraitNombre(window.location.pathname);
  $.ajax({
    url: '/alstom/flush-plug',
    type: 'POST',
    data: {
      'idBaseline': idBaseline,
      'Plugs': ListePlug
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      //ask for the status
      console.log(response);
      location.reload();
    }
  });
});
$('#content-tr-plug').on('click', '.td-table > .td-plug', function (e) {
  e.preventDefault();
  $('main').css('opacity', "0.4");
  $('#wait-spinner').show();
  var key = $(this)[0]["id"];
  $.ajax({
    url: '/alstom/donwloadFile',
    type: 'POST',
    data: {
      'key': key
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      window.location.href = response;
      $('main').css('opacity', "1");
      $('#wait-spinner').hide();
      console.log(response);
    }
  });
}); //Gére le clique de la suppression

$('#show-done-plug').on('click', '.content-key-name-plug > a', function () {
  if ($(this)[0]["id"][0] == "d") {
    deletePlug(extraitNombre($(this)[0]["id"]));
    console.log($(this)[0]["id"]);
  }
}); //Extrait le nombre d'une streing

function extraitNombre(str) {
  return Number(str.replace(/[^\d]/g, ""));
} //Supression du plug dans le tableau et le front


function deletePlug(position) {
  ListePlug.splice(position, 1);
  $('.content-key-name-plug').remove();
  console.log(ListePlug);
  ListePlug.forEach(writePlug);
}

function writePlug(element, index, array) {
  //Test l'existence de la div dans le cas où elle existe la remplace si pas la met en place
  if ($('#key-name-' + index).length) {
    $('#key-name-' + index).replaceWith("<span class='content-key-name-plug' id='key-name-" + index + "'><p>" + element.name_plug + "</p><p>" + element.key_plug + "</p><a id='delete-plug-" + index + "'><i class='fas fa-trash-alt poubelle'></i></a></span>");
  } else {
    $('#show-done-plug').append("<span class='content-key-name-plug' id='key-name-" + index + "'><p>" + element.name_plug + "</p><p>" + element.key_plug + "</p><a id='delete-plug-" + index + "'><i class='fas fa-trash-alt poubelle'></i></a></span>");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

$('.card').on('click', '.edit-delete-equipement > a', function (e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9iYXNlbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXF1aXBlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXJ0bXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZsZWV0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sb2dzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGtpcmJ5L3dvcmtzcGFjZS96YnJ5aWt0L2xvYWRpbmcvcHJvamVjdHMvbGRCYXIvbG9hZGluZy1iYXIvc3JjL2xvYWRpbmctYmFyLmxzIiwid2VicGFjazovLy8vVXNlcnMvdGtpcmJ5L3dvcmtzcGFjZS96YnJ5aWt0L2xvYWRpbmcvcHJvamVjdHMvbGRCYXIvbG9hZGluZy1iYXIvc3JjL3ByZXNldHMubHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Rlc3QtdXBsb2FkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90cmFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImhvdmVyIiwiZmluZCIsInN0b3AiLCJhbmltYXRlIiwiaGVpZ2h0Iiwib3BhY2l0eSIsImhpZGUiLCJkb2N1bWVudCIsInJlYWR5IiwicmVtb3ZlIiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsImNzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCIkdHlwZSIsImF0dHIiLCJFcXVpcG1lbnRzIiwiaSIsImluZGV4RVZDIiwicG9zSW5kZXgiLCJQcmVzZW5jZUVWQyIsImlkRXF1aXBtZW50IiwidGFiSW5kZXhFcXVpcHQiLCJzZWxlY3QiLCJjcmVhdGVFbGVtZW50IiwicHJldmlvdXMiLCJ0YWJFcXVpcGVtZW50VHlwZSIsInRhYkVxdWlwZW1lbnRTdWJ0eXBlIiwiZGF0YSIsInZhbCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzaG93IiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImVtcHR5IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJhcHBlbmQiLCJPcHRpb24iLCJuYW1lIiwiaWQiLCJjaGFuZ2UiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiR0aGlzIiwiYWN0aW9uIiwiZWFjaCIsImluZGV4IiwidmFsdWUiLCJ0aGF0IiwicHVzaCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwidGFiRXF1aXB0cyIsImFzeW5jIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwieGhyIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiaWRFcnRtcyIsImV4dHJhaXROb21icmUiLCJlcXVpcGVtZW50IiwicmV0dXJuSW5kZXhFbGVtZW50IiwiYWxlcnQiLCJiYXNlbGluZU5hbWUiLCJiYXNlbGluZSIsInRleHQiLCJpZEJhc2VsaW5lIiwiaHJlZiIsImRlbGV0ZUVxdWlwbWVudCIsImRvbmUiLCJyZWxvYWQiLCJ2ZXJzaW9uIiwidHJpZ2dlciIsImFycmF5IiwibGVuZ3RoIiwicmVwbGFjZVdpdGgiLCJ3cml0ZVR5cGUiLCJ3cml0ZVN1YnR5cGUiLCJ3cml0ZUVkaXREZWxldGUiLCJzcGxpY2UiLCJwb3NpdGlvbiIsInN0ciIsIk51bWJlciIsInJlcGxhY2UiLCJzaXplIiwid3JpdGVTdWJ0eXBlQ2FyZCIsIm5vdCIsImtleXVwIiwic2VhcmNoIiwiJGZsZWV0IiwiJHRyYWluIiwiJGVydG1zIiwidHlwZUxvZyIsInR5cGVMb2dUZXh0IiwiaXNBZHZhbmNlZFVwbG9hZCIsImRpdiIsIiRmb3JtIiwiJGlucHV0IiwiJGxhYmVsIiwic2hvd0ZpbGVzIiwiZmlsZXMiLCJwcmdiYXIiLCJsZEJhciIsImRyb3BwZWRGaWxlcyIsInN0b3BQcm9wYWdhdGlvbiIsIm9yaWdpbmFsRXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJMb2ciLCJoYXNDbGFzcyIsImFqYXhEYXRhIiwiRm9ybURhdGEiLCJnZXQiLCJmaWxlIiwiWE1MSHR0cFJlcXVlc3QiLCJ1cGxvYWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwibG9hZGVkIiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnRDb21wbGV0ZSIsInRvdGFsIiwic2V0IiwiY2FjaGUiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwiY29tcGxldGUiLCJ2YWxpZCIsImlmcmFtZU5hbWUiLCJEYXRlIiwiZ2V0VGltZSIsIiRpZnJhbWUiLCJvbmUiLCJKU09OIiwicGFyc2UiLCJjb250ZW50cyIsInJlbW92ZUF0dHIiLCIkZXJyb3JNc2ciLCJMaXN0ZVBsdWciLCJub21icmVfdXJsIiwiaHRtbCIsIlBsdWciLCJ3cml0ZVBsdWciLCJmaWxlc3QiLCJxdWVyeVNlbGVjdG9yIiwidGVtcERlc3RpbmF0aW9uIiwibmFtZUZpbGUiLCJ1cGxvYWRTdGF0dXMiLCJwYXRoIiwia2V5IiwiZGVsZXRlUGx1ZyIsIm5hbWVfcGx1ZyIsImtleV9wbHVnIiwiY3VycmVudF9jaG9pY2UiLCJlcnRtc19sZWZ0IiwiZXJ0bXNfbWlkZGxlIiwiZXJ0bXNfcmlnaHQiLCJlcXVpcG1lbnRzIiwiQ291bnROdW1iZXJFcXVpcHQiLCJGaW5kSW5kZXhFdmMiLCJuYW1lX2Jhc2VsaW5lXzEiLCJuZXdfZXF1aXBtZW50X251bSIsInRvdGFsRXF1aXB0IiwibmV3X2VxdWlwbWVudF9udW1fc2VyaWUiLCJudW1TZXJpZSIsImlkX3RyYWluIiwiaWRfYmFzZWxpbmUiLCJuZXdfZXF1aXB0IiwiaWRiYXNlbGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc2Nzcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9lcnRtcyc7XHJcbmltcG9ydCAnLi9lcXVpcGVtZW50JztcclxuaW1wb3J0ICcuL2Jhc2VsaW5lJztcclxuaW1wb3J0ICcuL3Byb2dyZXNzQmFyJztcclxuaW1wb3J0ICcuL3Rlc3QtdXBsb2FkJztcclxuaW1wb3J0ICcuL3RyYWluJztcclxuaW1wb3J0ICcuL3BsdWcnO1xyXG5pbXBvcnQgJy4vZmxlZXQnO1xyXG5pbXBvcnQgJy4vbG9ncyc7XHJcblxyXG4vLyBsb2FkcyB0aGUganF1ZXJ5IHBhY2thZ2UgZnJvbSBub2RlX21vZHVsZXNcclxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG4vLyBpbXBvcnQgdGhlIGZ1bmN0aW9uIGZyb20gZ3JlZXQuanMgKHRoZSAuanMgZXh0ZW5zaW9uIGlzIG9wdGlvbmFsKVxyXG4vLyAuLyAob3IgLi4vKSBtZWFucyB0byBsb29rIGZvciBhIGxvY2FsIGZpbGVcclxuJCgnLnBvc3QtbW9kdWxlJykuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5maW5kKCcuZGVzY3JpcHRpb24nKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgaGVpZ2h0OiBcInRvZ2dsZVwiLFxyXG4gICAgICAgIG9wYWNpdHk6IFwidG9nZ2xlXCJcclxuICAgIH0sIDMwMCk7XHJcbn0pO1xyXG4kKCcucG9zdC1tb2R1bGUtZmxlZXQnKS5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmZpbmQoJy5kZXNjcmlwdGlvbi1mbGVldCcpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBoZWlnaHQ6IFwidG9nZ2xlXCIsXHJcbiAgICAgICAgb3BhY2l0eTogXCJ0b2dnbGVcIlxyXG4gICAgfSwgMzAwKTtcclxufSk7XHJcblxyXG4kKCcuZmEtY2hldnJvbi1kb3duJykuaGlkZSgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICQoJ3ByZScpLnJlbW92ZSgpO1xyXG4gICAgJCgnLmJ1dHRvbi1sZWZ0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5zaWRlYmFyJykudG9nZ2xlQ2xhc3MoJ2ZsaXBoJyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5zaWRlYmFyJykuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCd0cmFuc2l0aW9uJywgJ2FsbCAwLjVzIGVhc2UtaW4tb3V0Jyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnbWwtc20tYXV0bycpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ29mZnNldC0xJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnb2Zmc2V0LTInKTtcclxuICAgICAgICAgICAgJCgnLm1haW4tc2hvdycpLnJlbW92ZUNsYXNzKCdjb2wtbGctMTEnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygndHJhbnNpdGlvbicsICdhbGwgMC4xMHMgZWFzZS1pbi1vdXQnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdvZmZzZXQtMScpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ29mZnNldC0yJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5yZW1vdmVDbGFzcygnbWwtc20tYXV0bycpO1xyXG4gICAgICAgICAgICAkKCcubWFpbi1zaG93JykuYWRkQ2xhc3MoJ2NvbC1sZy0xMScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAvLyAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ21sLXNtLWF1dG8nKTtcclxuICAgICQoJy5uYXYtbGFiZWwnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmZhLWNoZXZyb24tbGVmdCcpLmNzcygndHJhbnNmb3JtJywgJ3JvdGF0ZXgoNDVkZWcpJylcclxuICAgIH0pXHJcblxyXG59KTsiLCIvL01hc3F1YWdlIGRlIGNlcnRhaW5zIG1vZGFsZSBkZSBsYSBwYWdlXHJcbiQoJyNmb3JtdWxhaXJlLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuJCgnI2NvbnRlbnQtZm9ybS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuXHJcbi8vRGVsY2FyYXRpb24gdmFyaWFibGVcclxuY29uc3QgJHR5cGUgPSAkKCcjZXF1aXBlbWVudF9UeXBlJyk7XHJcbiR0eXBlLmF0dHIoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XHJcblxyXG5sZXQgRXF1aXBtZW50cyA9IFtdLFxyXG4gICAgaSA9IDAsXHJcbiAgICBpbmRleEVWQyA9IDAsXHJcbiAgICBwb3NJbmRleCA9IDAsXHJcbiAgICBQcmVzZW5jZUVWQyA9IGZhbHNlLFxyXG4gICAgaWRFcXVpcG1lbnQgPSAwLFxyXG4gICAgdGFiSW5kZXhFcXVpcHQgPSBbXVxyXG5zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLFxyXG4gICAgcHJldmlvdXMgPSBcIlwiLFxyXG4gICAgdGFiRXF1aXBlbWVudFR5cGUgPSBbXCJFVkNcIiwgXCJDQVJURVwiLCBcIlNFTlNPUlwiLCBcIkRNSVwiXSxcclxuICAgIHRhYkVxdWlwZW1lbnRTdWJ0eXBlID0gW1wiQ09SRVwiLCBcIlRVSVwiLCBcIlNETVVcIiwgXCJTRU5TRVwiLCBcIlRXSU5TXCJdO1xyXG5cclxuLy9WaWRhZ2UgZGVzIGlucHV0cyBhdSByZWZyZXNoIGRlIGxhIHBhZ2VcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgZGF0YVskdHlwZS5hdHRyKCduYW1lJyldID0gJHR5cGUudmFsKClcclxuXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvYWxzdG9tL2NyZWF0ZV9iYXNlbGluZScpIHtcclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgLy8gJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgIC8vICQoJzppbnB1dCcsICcjZm9ybV9lcXVpcGVtZW50Jykubm90KCc6YnV0dG9uLCA6c3VibWl0LCA6cmVzZXQsIDpoaWRkZW4nKS52YWwoJycpO1xyXG59KTtcclxuXHJcbi8vQUpBWCBDaGFuZ2VtZW50IGRlIHNvdXMtdHlwZSBlbiBmb25jdGlvbiBkdSB0eXBlXHJcbiR0eXBlLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgZGF0YVskdHlwZS5hdHRyKCduYW1lJyldID0gJHR5cGUudmFsKClcclxuXHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSlcclxuXHJcbi8vQUpBWCBzb3VtaXNzaW9uIGZvcm11bGFpcmUgZCdham91dCBlcXVpcGVtZW50XHJcbiQoJyNmb3JtX2VxdWlwZW1lbnQnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAvL0VtcMOqY2hlIGxlIGNoYXJnZW1lbnQgZGUgbGEgcGFnZSBzb2lzIGZhaXQgYXV0b21hdGlxdWVtZW50XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9LFxyXG4gICAgICAgIGFjdGlvbjtcclxuICAgIC8vUmVtcGxpIGRhdGEgYSBwYXJ0aXIgZGVzIHZhbGV1ciBkZXMgaW5wdXRzXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKVxyXG5cclxuICAgICAgICBpZiAobmFtZSAhPSAoXCJlcXVpcGVtZW50W190b2tlbl1cIikgJiYgbmFtZSAhPSAoXCJzb3VtaXNzaW9uX2VxdWlwZW1lbnRcIikpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09ICdzb3VtaXNzaW9uX2VkaXRfZXF1aXBlbWVudCcpIHtcclxuICAgICAgICAgICAgYWN0aW9uID0gXCJlZGl0XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWN0aW9uID0gXCJhZGRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgIC8vIFNpIGxlIGZvcm11bGFpcmUgZXN0IHBvdXIgYWpvdWVyIHVuIG5vdXZlbCBlcXVpcGVtZW50XHJcbiAgICBpZiAoYWN0aW9uID09IFwiYWRkXCIpIHtcclxuICAgICAgICAvL1JlbXBsaXMgbGUgdGFibGVhdSBkZXMgw6lxdWlwZW1lbnRzXHJcbiAgICAgICAgRXF1aXBtZW50cy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIC8vRWZmZWN0dXJlIGxhIHJlcXXDqnRlIGFqYXggcG91ciBsJ2Fqb3V0IGQnw6lxdWlwZW1lbnRcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGFiRXF1aXB0czogRXF1aXBtZW50c1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBPdSBzaSBsZSBmb3JtdWxhaXJlIGVzdCBwb3VyIMOpZGl0ZXIgdW4gZXF1aXBlbWVudCBkw6lqYSBleGlzdGFudCBzdXIgbGEgcGFnZSBkZSBsJ2VydG1zIGxpw6kgYSBjZWx1aS1jaVxyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJlZGl0XCIpIHtcclxuICAgICAgICBsZXQgaWRFcnRtcyA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBlcXVpcGVtZW50OiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgaWRFcnRtczogaWRFcnRtc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJy5tb2RhbC1mb290ZXInKS5zaG93KCk7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAvL0JvdWNsZSBsZXMgw6lxdWlwZW1lbnRzIGV0IGxlcyBpbnN0YWxsZSBhdSBmcm9udFxyXG4gICAgRXF1aXBtZW50cy5mb3JFYWNoKHJldHVybkluZGV4RWxlbWVudCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vVmFsaWRhdGlvbiBkZSBiYXNlbGluZSBcclxuJCgnI2NyZWF0ZS1iYXNlbGluZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKFwiI2Jhc2VsaW5lX25hbWVcIikudmFsKCkgPT0gXCJcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgYmFzZWxpbmUgbmFtZSBcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG5sZXQgYmFzZWxpbmVOYW1lO1xyXG4kKCcjZm9ybV9iYXNlbGluZScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG5cclxuICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChuYW1lID09ICdiYXNlbGluZVtuYW1lXScpIHtcclxuXHJcbiAgICAgICAgICAgIGJhc2VsaW5lTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICR0aGlzLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgYmFzZWxpbmU6IGRhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJy50aXRsZS1iYXNlbGluZScpLnRleHQocmVzcG9uc2UuYmFzZWxpbmUpXHJcbiAgICAgICAgICAgICQoJyNjb250ZW50LWZvcm0tZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50JykuaGlkZSgpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG4vL1ZhbGlkYXRpb24gZGUgdG91cyBsZXMgw6lxdWlwZW1lbnRzIGV0IGRlIGxhIGJhc2VsaW5lXHJcbiQoJyN2YWxpZC1hbGwtZXF1aXBtZW50cycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKEVxdWlwbWVudHMgIT0gXCJcIikge1xyXG4gICAgICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjAuNFwiKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hbHN0b20vZmx1c2gtYWxsLWVxdWlwdCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYmFzZWxpbmVOYW1lOiBiYXNlbGluZU5hbWUsXHJcbiAgICAgICAgICAgICAgICB0YWJFcXVpcHRzOiBFcXVpcG1lbnRzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWRCYXNlbGluZSA9IHJlc3BvbnNlLmJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYWxzdG9tL2Jhc2VsaW5lL1wiICsgaWRCYXNlbGluZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgRXF1aXBtZW50cyBiZWZvcmUgdmFsaWQnKTtcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG4vL0fDqXJlIGxlIGNsaXF1ZSBkZSBsYSBzdXBwcmVzc2lvblxyXG4kKCcjc2hvdy1lcXVpcG1lbnQnKS5vbignY2xpY2snLCAnLmVkaXQtZGVsZXRlLWVxdWlwZW1lbnQgPiBhJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcylbMF1bXCJpZFwiXVswXSA9PSBcImRcIikge1xyXG4gICAgICAgIGRlbGV0ZUVxdWlwbWVudChleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJpZFwiXSkpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4vL2NhY2hlIGxlIG1vZGFsIGQnZWRpdCBkJ2VxdWlwZW1lbnRcclxuJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5oaWRlKCk7XHJcbi8vIEdlcmUgbGEgZmVybWV0dXJlIGR1IG1vZGFsIGQnZWRpdCBkJ2VxdWlwZW1lbnRcclxuJCgnI2Nsb3NlLW1vZGFsLWZvcm0tZXF1aXBtZW50LWVkaXQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLmhpZGUoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbn0pXHJcbi8vIFxyXG4vLyBSZXF1ZXRlIEFKQVggcG91ciByZW1wbGlyIGxlIGZvcm11bGFpcmUgZCfDqXF1aXBlbWVudCBhdmVjIGwnZXF1aXBlbWVudCBzZWxlY3Rpb25uZXJcclxuJCgnLmNvbnRlbnQtZGVzY3JpcHRpb24tZHRyJykub24oJ2NsaWNrJywgJy5lZGl0LWRlbGV0ZS1lcXVpcGVtZW50ID4gYScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIGlkRXF1aXBtZW50ID0gZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiY2xhc3NMaXN0XCJdWzBdKVxyXG4gICAgdmFyICR0aGlzID0gJChcIiNmb3JtX2VxdWlwZW1lbnRfZWRpdFwiKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbChyZXNwb25zZVtcInR5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgIGRhdGFbJCgnI2VxdWlwZW1lbnRfVHlwZScpLmF0dHIoJ25hbWUnKV0gPSAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpIGlucHV0IGF2ZWMgdmFsZXVyIHJlY3UgZGUgbCdlcXVpcGVtZW50XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X1R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfc291c190eXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVtcIlNvdXNUeXBlXCJdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJTb3VzVHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0RUUl9ib2FyZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJkVFJCb2FyZFwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0luZGljZV9EVFInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiaW5kaWNlRFRSXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfTnVtX3NlcmllJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIm51bVNlcmllXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4vL0Zvcm11bGFpcmUgZCdlZGl0IGRlIGwnw6lxdWlwZW1lbnRcclxuJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0Jykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjZm9ybV9lcXVpcGVtZW50X2VkaXQnKS5jc3MoXCJvcGFjaXR5XCIsIFwiMC40XCIpO1xyXG4gICAgJChcIiN3YWl0LXNwaW5uZXJcIikuY3NzKFwiei1pbmRleFwiLCBcIjk5OTk5XCIpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9LFxyXG4gICAgICAgIGFjdGlvbjtcclxuICAgIC8vUmVtcGxpIGRhdGEgYSBwYXJ0aXIgZGVzIHZhbGV1ciBkZXMgaW5wdXRzXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKVxyXG5cclxuICAgICAgICBpZiAobmFtZSAhPSAoXCJlcXVpcGVtZW50W190b2tlbl1cIikgJiYgbmFtZSAhPSAoXCJzb3VtaXNzaW9uX2VxdWlwZW1lbnRcIikpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgJ2VxdWlwZW1lbnQnOiBkYXRhLFxyXG4gICAgICAgICAgICBcInNvdW1pc3Npb25fZWRpdF9lcXVpcGVtZW50XCI6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG4vL1JlcXVldGUgQUpBWCBkZSBjcsOpYXRpb24gZGUgdmVyc2lvbiBsb2dpY2llbFxyXG4kKCcjZm9ybV92ZXJzaW9uJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcblxyXG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH0pXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZEJhc2VsaW5lOiBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSksXHJcbiAgICAgICAgICAgIHZlcnNpb246IGRhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyN0aXRsZS12ZXJzaW9uLWVydG1zJykuYXBwZW5kKFwiPHA+XCIgKyByZXNwb25zZS52ZXJzaW9uICsgXCI8L3A+XCIpXHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNjbG9zZS1tb2RhbC1mb3JtLXZlcnNpb24nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJldHVybkluZGV4RWxlbWVudChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuXHJcbiAgICAvL1Rlc3QgbCdleGlzdGVuY2UgZGUgbGEgZGl2IGRhbnMgbGUgY2FzIG/DuSBlbGxlIGV4aXN0ZSBsYSByZW1wbGFjZSBzaSBwYXMgbGEgbWV0IGVuIHBsYWNlXHJcbiAgICBpZiAoJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5sZW5ndGgpIHtcclxuICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlcGxhY2VXaXRoKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjc2hvdy1lcXVpcG1lbnRcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGVzdCBzaSBsJ8OpcXVpcGVtZW50IGVzdCBsYSBjYXJ0ZSBvdSBub25cclxuICAgIGlmIChlbGVtZW50W1wiZXF1aXBlbWVudFtUeXBlXVwiXSAhPSBcIjJcIikge1xyXG4gICAgICAgIC8vU3dpdGggcmVwbGFjZW1lbnQgZGUgbCdpZCBkdSB0eXBlIGF2ZWMgc29uIG5vbVxyXG4gICAgICAgIHN3aXRjaCAoZWxlbWVudFtcImVxdWlwZW1lbnRbVHlwZV1cIl0pIHtcclxuICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlVHlwZSg0LCAwKSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFkZENsYXNzKFwiZGVzY3JpcHRpb24tU3VidHlwZUNhcmRcIilcclxuICAgICAgICAgICAgICAgIGluZGV4RVZDID0gJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIDIpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIDMpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKGVsZW1lbnRbXCJlcXVpcGVtZW50W3NvdXNfdHlwZV1cIl0pIHtcclxuICAgICAgICAgICAgY2FzZSBcIjRcIjpcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCAzKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjVcIjpcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCA0KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0clwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtEVFJfYm9hcmRdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImVxdWlwZW1lbnRbSW5kaWNlX0RUUl1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtOdW1fc2VyaWVdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IEVxdWlwbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChFcXVpcG1lbnRzW2ldW1wiZXF1aXBlbWVudFtUeXBlXVwiXSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgUHJlc2VuY2VFVkMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoUHJlc2VuY2VFVkMpIHtcclxuICAgICAgICAgICAgLy9FY3JpcyBsZSBub20gZHUgdHlwZSBcImNhcnRlXCIgc291cyBsZSB0eXBlICBFVkNcclxuICAgICAgICAgICAgLy8gJChpbmRleEVWQykuYXBwZW5kKHdyaXRlVHlwZSg1LCAxKSk7XHJcbiAgICAgICAgICAgIC8vUGFyY291cyBsZSB0eXBlIGRlIHNvdXN0eXBlIFxyXG4gICAgICAgICAgICBzd2l0Y2ggKGVsZW1lbnRbXCJlcXVpcGVtZW50W3NvdXNfdHlwZV1cIl0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICAgICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDIpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY29udGVudC1kZXNjcmlwdGlvbi1kdHIgY29udGVudC1kZXNjcmlwdGlvbi1kdHJDYXJkXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImVxdWlwZW1lbnRbRFRSX2JvYXJkXVwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtJbmRpY2VfRFRSXVwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtOdW1fc2VyaWVdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZUVkaXREZWxldGUoaW5kZXgpKTtcclxuICAgICAgICAgICAgJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5yZW1vdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIEVWQyBlcXVpcGVtZW50IGJlZm9yZScpO1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICQoJy5tb2RhbC1mb290ZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNjcmVhdGUtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vU3VwcmVzc2lvbiBkZSBsJ8OpcXVpcGVtZW50IGRhbnMgbGUgdGFibGVhdSBldCBsZSBmcm9udFxyXG5mdW5jdGlvbiBkZWxldGVFcXVpcG1lbnQocG9zaXRpb24pIHtcclxuICAgIEVxdWlwbWVudHMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcclxuICAgICQoJy5kZXNjcmlwdGlvbicpLnJlbW92ZSgpO1xyXG4gICAgRXF1aXBtZW50cy5mb3JFYWNoKHJldHVybkluZGV4RWxlbWVudCk7XHJcbn1cclxuLy9FeHRyYWl0IGxlIG5vbWJyZSBkJ3VuZSBzdHJlaW5nXHJcbmZ1bmN0aW9uIGV4dHJhaXROb21icmUoc3RyKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyKHN0ci5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIikpXHJcbn1cclxuLy9FY3JpcyBsZSB0aXRyZSBkdSB0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVUeXBlKHNpemUsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXR5cGUgXCI+JyArIHRhYkVxdWlwZW1lbnRUeXBlW2luZGV4XSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpcyBsZSB0aXRyZSBkdSBzb3VzdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlU3VidHlwZShzaXplLCBpbmRleCkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLVR5cGUgXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyB0YWJFcXVpcGVtZW50U3VidHlwZVtpbmRleF0gKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgc291c3R5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVN1YnR5cGVDYXJkKHNpemUsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tc3VidHlwZVwiIGlkPVwiZGVzY3JpcHRpb24tc3ViVHlwZSBcIj4nICsgdGFiRXF1aXBlbWVudFN1YnR5cGVbaW5kZXhdICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0Vjcml0IGxlcyAyIGljb25zIGQnZWRpdCBldCBkZWxldGVcclxuZnVuY3Rpb24gd3JpdGVFZGl0RGVsZXRlKGluZGV4KSB7XHJcbiAgICByZXR1cm4gJyA8cCBjbGFzcz1cImVkaXQtZGVsZXRlLWVxdWlwZW1lbnRcIj4gPGEgaWQ9XCJlZGl0LScgKyBpbmRleCArICdcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiA8L2E+IDxhIGlkPVwiZGVsZXRlLScgKyBpbmRleCArICdcIj48aSBjbGFzcyA9IFwiZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZVwiPiA8L2k+PC9hPjwvcD4nO1xyXG59O1xyXG5cclxuLyphdSBjbGljayBkZSBsJ2FkZCBFcXVpcG1lbnQgYWZmaWNoZXIgbGUgZm9ybXVsYWlyZSBkJ2Fqb3V0IGQnw6lxdWlwZW1lbnQqL1xyXG4kKCcjY3JlYXRlLWVxdWlwbWVudCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI3Nob3ctZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJy5tb2RhbC1mb290ZXInKS5oaWRlKCk7XHJcbiAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgJCgnOmlucHV0JywgJyNmb3JtX2VxdWlwZW1lbnQnKS5ub3QoJzpidXR0b24sIDpzdWJtaXQsIDpyZXNldCwgOmhpZGRlbicpLnZhbCgnJyk7XHJcbiAgICBwcmV2aW91cyA9IFwiZXF1aXBtZW50XCI7XHJcbn0pO1xyXG4vLyBHZXJlIGxlIGNsaWNrIGR1IHByZXZpb3VzXHJcbiQoXCIjcHJldmlvdXMtZXF1aXBtZW50XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcubW9kYWwtZm9vdGVyJykuc2hvdygpO1xyXG59KTtcclxuJCgnI2NyZWF0ZS1iYXNlbGluZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnLm1vZGFsLWZvb3RlcicpLnNob3coKTtcclxufSlcclxuLy8gRmVybWUgbGUgbW9kYWwgZGUgZm9ybXVsYWlyZSBkJ2Fqb3V0IGQnw6lxdWlwZW1lbnRcclxuJCgnI2Nsb3NlLWVxdWlwZW1lbnQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbn0pIiwiLy9WYWxpZGF0aW9uIGRlIGwnZXJ0bXMgXHJcbiQoJyN2YWxpZC1lcnRtcy1uYW1lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIiNjb250ZW50LWZvcm0tZXJ0bXNcIikuaGlkZSgpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbn0pIiwiLy8gJCgnI2RlbGV0ZS1lcnRtcycpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbi8vICAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbi8vICAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbi8vICAgICAgICAgZGF0YToge30sXHJcbi8vICAgICAgICAgYXN5bmM6IHRydWUsXHJcbi8vICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4vLyAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuLy8gICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gfSkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjc2VhcmNoLWZsZWV0Jykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSlcclxuICAgICQoJyNuYW1lX3Byb2plY3QnKS5rZXl1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgc2VhcmNoID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgZGF0YSA9ICdtb3RjbGVmPScgKyBzZWFyY2g7XHJcblxyXG4gICAgICAgIGlmIChzZWFyY2gubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS9zZWFyY2gtZmxlZXQnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICQoJyNyZXN1bHQtZmxlZXQnKS5odG1sKHJlc3BvbnNlKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KTsiLCJjb25zdCAkZmxlZXQgPSAkKCcjZmxlZXRfc2VsZWN0Jyk7XHJcbmNvbnN0ICR0cmFpbiA9ICQoJyN0cmFpbl9zZWxlY3QnKTtcclxuY29uc3QgJGVydG1zID0gJCgnI2VydG1zX3NlbGVjdCcpO1xyXG5jb25zdCB0eXBlTG9nID0gJCgnI3NlbGVjdF90eXBlX2xvZycpO1xyXG5jb25zdCB0eXBlTG9nVGV4dCA9ICQoJyNzZWxlY3RfdHlwZV9sb2cnKTtcclxubGV0IGRhdGEgPSB7fTtcclxuLy9kZXRlY3Rpb24gc2kgbGUgYnJvd3NlciBnw6hyZSBsZSBkcmFnJmRyb3BcclxudmFyIGlzQWR2YW5jZWRVcGxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZXR1cm4gKCgnZHJhZ2dhYmxlJyBpbiBkaXYpIHx8ICgnb25kcmFnc3RhcnQnIGluIGRpdiAmJiAnb25kcm9wJyBpbiBkaXYpKSAmJiAnRm9ybURhdGEnIGluIHdpbmRvdyAmJiAnRmlsZVJlYWRlcicgaW4gd2luZG93O1xyXG59KCk7XHJcbnZhciAkZm9ybSA9ICQoJy5kcmFnLWxvZycpO1xyXG52YXIgJGlucHV0ID0gJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKSxcclxuICAgICRsYWJlbCA9ICRmb3JtLmZpbmQoJ2xhYmVsJyksXHJcbiAgICBzaG93RmlsZXMgPSBmdW5jdGlvbiAoZmlsZXMpIHtcclxuICAgICAgICAkbGFiZWwudGV4dChmaWxlcy5sZW5ndGggPiAxID8gKCRpbnB1dC5hdHRyKCdkYXRhLW11bHRpcGxlLWNhcHRpb24nKSB8fCAnJykucmVwbGFjZSgne2NvdW50fScsIGZpbGVzLmxlbmd0aCkgOiBmaWxlc1swXS5uYW1lKTtcclxuICAgIH07XHJcbnR5cGVMb2cuaGlkZSgpO1xyXG50eXBlTG9nVGV4dC5oaWRlKCk7XHJcbiRmb3JtLmhpZGUoKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hbHN0b20vYWRkLWxvZ3MnKSB7XHJcbiAgICAgICAgJGZvcm0uc2hvdygpO1xyXG4gICAgICAgIHByZ2JhciA9IG5ldyBsZEJhcihcIiN0ZXN0LXByb2dyZXNzXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2Fsc3RvbS9zZWFyY2gtbG9ncycpIHtcclxuICAgICAgICAvL2lkZW50aWZpY2F0aW9uIGRlIGxhIHByb2dyZXNzIGJhclxyXG4gICAgICAgIHByZ2JhciA9IG5ldyBsZEJhcihcIiN0ZXN0LXByb2dyZXNzXCIpO1xyXG5cclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrRmxlZXRcIiwgKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgJGZsZWV0LmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrVHJhaW5CeUZsZWV0XCIsIHtcclxuICAgICAgICAgICAgICAgICdpZCc6ICRmbGVldC52YWwoKVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgJHRyYWluLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tFcnRtc0J5VHJhaW5cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICR0cmFpbi52YWwoKVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRlcnRtcy5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSlcclxuXHJcbiRmbGVldC5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI3NlbGVjdF90eXBlX2xvZycpLmhpZGUoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygkZmxlZXQudmFsKCkpO1xyXG4gICAgJHRyYWluLmVtcHR5KCk7XHJcbiAgICAkZXJ0bXMuZW1wdHkoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrVHJhaW5CeUZsZWV0XCIsIHtcclxuICAgICAgICAnaWQnOiAkZmxlZXQudmFsKClcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAkdHJhaW4uYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgIH0pXHJcbn0pXHJcbiR0cmFpbi5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI3NlbGVjdF90eXBlX2xvZycpLmhpZGUoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygkZmxlZXQudmFsKCkpO1xyXG4gICAgJGVydG1zLmVtcHR5KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja0VydG1zQnlUcmFpblwiLCB7XHJcbiAgICAgICAgJ2lkJzogJHRyYWluLnZhbCgpXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgJGVydG1zLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0eXBlTG9nLnNob3coKTtcclxuICAgICAgICAkZm9ybS5zaG93KCk7XHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5pZiAoaXNBZHZhbmNlZFVwbG9hZCkge1xyXG4gICAgdmFyIGRyb3BwZWRGaWxlcyA9IGZhbHNlO1xyXG4gICAgJGZvcm0uYWRkQ2xhc3MoJ2hhcy1hZHZhbmNlZC11cGxvYWQnKTsgLy8gbGV0dGluZyB0aGUgQ1NTIHBhcnQgdG8ga25vdyBkcmFnJmRyb3AgaXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyXHJcbiAgICAkZm9ybS5vbignZHJhZyBkcmFnc3RhcnQgZHJhZ2VuZCBkcmFnb3ZlciBkcmFnZW50ZXIgZHJhZ2xlYXZlIGRyb3AnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgICAkZm9ybS5vbignZHJhZ292ZXIgZHJhZ2VudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRmb3JtLmFkZENsYXNzKCdpcy1kcmFnb3ZlcicpO1xyXG4gICAgfSk7XHJcbiAgICAkZm9ybS5vbignZHJhZ2xlYXZlIGRyYWdlbmQgZHJvcCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkZm9ybS5yZW1vdmVDbGFzcygnaXMtZHJhZ292ZXInKTtcclxuXHJcbiAgICB9KTtcclxuICAgICRmb3JtLm9uKCdkcm9wJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBkcm9wcGVkRmlsZXMgPSBlLm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xyXG4gICAgICAgICRmb3JtLnRyaWdnZXIoJ3N1Ym1pdCcpO1xyXG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykudGV4dChkcm9wcGVkRmlsZXNbMF0ubmFtZSk7XHJcbiAgICAgICAgJCgnLmxhYmVsLWRyb3AnKS5jc3MoJ2ZvbnQtd2VpZ2h0JywgJ2JvbGQnKTtcclxuICAgIH0pO1xyXG4gICAgJGZvcm0uY2hhbmdlKCdkcm9wJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBkcm9wcGVkRmlsZXMgPSBlLm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xyXG4gICAgICAgICRmb3JtLnRyaWdnZXIoJ3N1Ym1pdCcpO1xyXG4gICAgfSk7XHJcbn1cclxubGV0IExvZyA9IHt9LFxyXG4gICAgaWRCYXNlbGluZSA9IFwiXCI7XHJcbiRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGlmIChkcm9wcGVkRmlsZXMpIHtcclxuXHJcbiAgICAgICAgTG9nWyduYW1lX2xvZyddID0gJCgnI3R5cGVfbG9nX3NlbGVjdCcpLnZhbCgpO1xyXG4gICAgICAgIGlkQmFzZWxpbmUgPSAkKCcjZXJ0bXNfc2VsZWN0JykudmFsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJCgnI2VydG1zX3NlbGVjdCcpLnZhbCgpKTtcclxuICAgICAgICAvLyBQYXJ0aSBkdSB0cmFpdGVtZW50IGR1IGRyYWcgYW4gZHJvcCBmaWxlXHJcbiAgICAgICAgaWYgKCRmb3JtLmhhc0NsYXNzKCdpcy11cGxvYWRpbmcnKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHNob3dGaWxlcyhkcm9wcGVkRmlsZXMpO1xyXG4gICAgICAgICRmb3JtLmFkZENsYXNzKCdpcy11cGxvYWRpbmcnKS5yZW1vdmVDbGFzcygnaXMtZXJyb3InKTtcclxuXHJcbiAgICAgICAgaWYgKGlzQWR2YW5jZWRVcGxvYWQpIHtcclxuICAgICAgICAgICAgdmFyIGFqYXhEYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtLmdldCgwKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZHJvcHBlZEZpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICAkLmVhY2goZHJvcHBlZEZpbGVzLCBmdW5jdGlvbiAoaSwgZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFqYXhEYXRhLmFwcGVuZCgkaW5wdXQuYXR0cignbmFtZScpLCBmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBMb2dbJ2tleV9sb2cnXSA9IGZpbGUubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS91cGxvYWRMb2cnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG5cclxuICAgICAgICAgICAgICAgIHhocjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldnQubG9hZGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC5sZW5ndGhDb21wdXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGVyY2VudENvbXBsZXRlID0gKGV2dC5sb2FkZWQgLyBldnQudG90YWwpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9EbyBzb21ldGhpbmcgd2l0aCB1cGxvYWQgcHJvZ3Jlc3MgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJnYmFyLnNldChwZXJjZW50Q29tcGxldGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBlcmNlbnRDb21wbGV0ZSA9PSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Rlc3QtcHJvZ3Jlc3NcIikuYWRkQ2xhc3MoJ2lzLWJsaW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZ0LmxvYWRlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnRvdGFsID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geGhyO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBhamF4RGF0YSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy11cGxvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3Rlc3QtcHJvZ3Jlc3NcIikucmVtb3ZlQ2xhc3MoJ2lzLWJsaW5rJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoZGF0YS5zdWNjZXNzID09IHRydWUgPyAnaXMtc3VjY2VzcycgOiAnaXMtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMb2cgdGhlIGVycm9yLCBzaG93IGFuIGFsZXJ0LCB3aGF0ZXZlciB3b3JrcyBmb3IgeW91XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3JyeSBib2J5XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgaWZyYW1lTmFtZSA9ICd1cGxvYWRpZnJhbWUnICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICRpZnJhbWUgPSAkKCc8aWZyYW1lIG5hbWU9XCInICsgaWZyYW1lTmFtZSArICdcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9pZnJhbWU+Jyk7XHJcblxyXG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRpZnJhbWUpO1xyXG4gICAgICAgICAgICAkZm9ybS5hdHRyKCd0YXJnZXQnLCBpZnJhbWVOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICRpZnJhbWUub25lKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKCRpZnJhbWUuY29udGVudHMoKS5maW5kKCdib2R5JykudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICRmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy11cGxvYWRpbmcnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSA/ICdpcy1zdWNjZXNzJyA6ICdpcy1lcnJvcicpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3RhcmdldCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLnN1Y2Nlc3MpICRlcnJvck1zZy50ZXh0KGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgJGZvcm0ucmVtb3ZlQXR0cigndGFyZ2V0Jyk7XHJcbiAgICAgICAgICAgICAgICAkaWZyYW1lLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJCgnI3ZhbGlkLWFsbC1sb2dzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgXCIwLjRcIik7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2ZsdXNoLWxvZycsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgJ2xvZyc6IExvZyxcclxuICAgICAgICAgICAgJ2Jhc2VsaW5lJzogaWRCYXNlbGluZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgLy9hc2sgZm9yIHRoZSBzdGF0dXNcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pIiwiJCgnI2Zvcm1fcGx1ZycpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGxldCBiYXNlbGluZSA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygkZm9ybSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vYWRkLXBsdWcnLFxyXG4gICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgIGRhdGFUeXBlOiBcInRleHRcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlkOiBiYXNlbGluZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG4vL0V4dHJhaXQgbGUgbm9tYnJlIGQndW5lIHN0cmVpbmdcclxuZnVuY3Rpb24gZXh0cmFpdE5vbWJyZShzdHIpIHtcclxuICAgIHJldHVybiBOdW1iZXIoc3RyLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKSk7XHJcbn0iLCJyZXF1aXJlISBcIi4vcHJlc2V0c1wiOiB7cHJlc2V0c31cblxuc2ltcGxlLXN0ciA9IChhcnIpIC0+IGFyci5qb2luICcnXG53cmFwID0gKGNvbnRlbnQpIC0+IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxcIiArIGJ0b2EoY29udGVudClcblxuZG8gLT5cbiAgICBtYWtlID1cbiAgICAgICAgaGVhZDogKHZpZXdCb3gpIC0+IFwiXCJcIlxuICAgICAgICAgICAgICAgIDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cInV0Zi04XCI/PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIiN2aWV3Qm94XCI+XG4gICAgICAgICAgICAgICAgXCJcIlwiXG5cbiAgICAgICAgZ3JhZGllbnQ6IChkaXIgPSA0NSwgZHVyID0gMSwgLi4uY29sb3JzKSAtPlxuICAgICAgICAgICAgcmV0ID0gW0BoZWFkIFwiMCAwIDEwMCAxMDBcIl1cbiAgICAgICAgICAgIGxlbiA9IGNvbG9ycy5sZW5ndGggKiA0ICsgMVxuICAgICAgICAgICAgZGlyID0gZGlyICogTWF0aC5QSSAvIDE4MFxuICAgICAgICAgICAgZ3ggPSBNYXRoLmNvcyhkaXIpICoqIDJcbiAgICAgICAgICAgIGd5ID0gTWF0aC5zcXJ0KGd4IC0gZ3ggKiogMilcbiAgICAgICAgICAgIGlmIGRpciA+IE1hdGguUEkgKiAwLjI1ID0+XG4gICAgICAgICAgICAgICAgZ3kgPSBNYXRoLnNpbihkaXIpICoqIDJcbiAgICAgICAgICAgICAgICBneCA9IE1hdGguc3FydChneSAtIGd5ICoqIDIpXG4gICAgICAgICAgICB4ID0gZ3ggKiAxMDBcbiAgICAgICAgICAgIHkgPSBneSAqIDEwMFxuICAgICAgICAgICAgcmV0LnB1c2ggXCJcIlwiPGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVwiZ3JhZGllbnRcIiB4MT1cIjBcIiB4Mj1cIiNneFwiIHkxPVwiMFwiIHkyPVwiI2d5XCI+XCJcIlwiXG4gICAgICAgICAgICBmb3IgaSBmcm9tIDAgdGlsIGxlbiA9PlxuICAgICAgICAgICAgICAgIGlkeCA9IGkgKiAxMDAgLyAobGVuIC0gMSlcbiAgICAgICAgICAgICAgICByZXQucHVzaCBcIlwiXCI8c3RvcCBvZmZzZXQ9XCIje2lkeH0lXCIgc3RvcC1jb2xvcj1cIiN7Y29sb3JzW2kgJSBjb2xvcnMubGVuZ3RoXX1cIi8+XCJcIlwiXG4gICAgICAgICAgICByZXQucHVzaCBcIlwiXCJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz5cbiAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCI0MDBcIiBmaWxsPVwidXJsKFxcI2dyYWRpZW50KVwiPlxuICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwidHJhbnNsYXRlXCIgZnJvbT1cIi0jeCwtI3lcIlxuICAgICAgICAgICAgICAgIHRvPVwiMCwwXCIgZHVyPVwiI3tkdXJ9c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz48L3JlY3Q+PC9zdmc+XG4gICAgICAgICAgICAgICAgXCJcIlwiXG4gICAgICAgICAgICB3cmFwIHJldC5qb2luKFwiXCIpXG5cbiAgICAgICAgc3RyaXBlOiAoYzE9XFwjYjRiNGI0LCBjMj1cXCNlNmU2ZTYsIGR1ciA9IDEpIC0+XG4gICAgICAgICAgICByZXQgPSBbQGhlYWQgXCIwIDAgMTAwIDEwMFwiXVxuICAgICAgICAgICAgcmV0ICsrPSBbXG4gICAgICAgICAgICAgICAgXCJcIlwiPHJlY3QgZmlsbD1cIiNjMlwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIvPlwiXCJcIlxuICAgICAgICAgICAgICAgIFwiXCJcIjxnPjxnPlwiXCJcIlxuICAgICAgICAgICAgICAgIFtcIlwiXCI8cG9seWdvbiBmaWxsPVwiI2MxXCIgXCJcIlwiICtcbiAgICAgICAgICAgICAgICAgXCJcIlwicG9pbnRzPVwiI3stOTAgKyBpICogMjB9LDEwMCAjey0xMDAgKyBpICogMjB9LFwiXCJcIiArXG4gICAgICAgICAgICAgICAgIFwiXCJcIjEwMCAjey02MCArIGkgKiAyMH0sMCAjey01MCArIGkgKiAyMH0sMCBcIi8+XCJcIlwiIGZvciBpIGZyb20gMCB0aWwgMTNdLmpvaW4oXCJcIilcbiAgICAgICAgICAgICAgICBcIlwiXCI8L2c+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiIHR5cGU9XCJ0cmFuc2xhdGVcIiBcIlwiXCJcbiAgICAgICAgICAgICAgICBcIlwiXCJmcm9tPVwiMCwwXCIgdG89XCIyMCwwXCIgZHVyPVwiI3tkdXJ9c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz48L2c+PC9zdmc+XCJcIlwiXG4gICAgICAgICAgICBdLmpvaW4oXCJcIilcbiAgICAgICAgICAgIHdyYXAgcmV0XG5cbiAgICAgICAgYnViYmxlOiAoYzEgPSBcXCMzOWQsIGMyID0gXFwjOWNmLCBjb3VudCA9IDE1LCBkdXIgPSAxLCBzaXplID0gNiwgc3c9MSkgLT5cbiAgICAgICAgICAgIHJldCA9IFtAaGVhZChcIjAgMCAyMDAgMjAwXCIpLCBcIlwiXCI8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiBmaWxsPVwiI2MxXCIvPlwiXCJcIl1cbiAgICAgICAgICAgIGZvciBpIGZyb20gMCB0aWwgY291bnQgPT5cbiAgICAgICAgICAgICAgICBpZHggPSAtKGkgLyBjb3VudCkgKiBkdXJcbiAgICAgICAgICAgICAgICB4ID0gTWF0aC5yYW5kb20hICogMTg0ICsgOFxuICAgICAgICAgICAgICAgIHIgPSAoIE1hdGgucmFuZG9tISAqIDAuNyArIDAuMyApICogc2l6ZVxuICAgICAgICAgICAgICAgIGQgPSBkdXIgKiAoMSArIE1hdGgucmFuZG9tISAqIDAuNSlcbiAgICAgICAgICAgICAgICByZXQucHVzaCBbXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjxjaXJjbGUgY3g9XCIjeFwiIGN5PVwiMFwiIHI9XCIjclwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2MyXCIgc3Ryb2tlLXdpZHRoPVwiI3N3XCI+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeVwiIHZhbHVlcz1cIjE5MDstMTBcIiB0aW1lcz1cIjA7MVwiIFwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCJkdXI9XCIje2R9c1wiIGJlZ2luPVwiI3tpZHh9c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPC9jaXJjbGU+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjxjaXJjbGUgY3g9XCIjeFwiIGN5PVwiMFwiIHI9XCIjclwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2MyXCIgc3Ryb2tlLXdpZHRoPVwiI3N3XCI+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeVwiIHZhbHVlcz1cIjM5MDsxOTBcIiB0aW1lcz1cIjA7MVwiIFwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCJkdXI9XCIje2R9c1wiIGJlZ2luPVwiI3tpZHh9c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPC9jaXJjbGU+XCJcIlwiXG4gICAgICAgICAgICAgICAgXS5qb2luKFwiXCIpXG4gICAgICAgICAgICB3cmFwKHJldC5qb2luKFwiXCIpICsgXCI8L3N2Zz5cIilcblxuICAgIGhhbmRsZXIgPVxuICAgICAgICBxdWV1ZToge31cbiAgICAgICAgcnVubmluZzogZmFsc2VcbiAgICAgICAgbWFpbjogKHRpbWVzdGFtcCkgLT5cbiAgICAgICAgICAgIGtlZXBvbiA9IGZhbHNlXG4gICAgICAgICAgICByZW1vdmVkID0gW11cbiAgICAgICAgICAgIGZvciBrLGZ1bmMgb2YgQHF1ZXVlID0+XG4gICAgICAgICAgICAgICAgcmV0ID0gZnVuYyB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICBpZiAhcmV0ID0+IHJlbW92ZWQucHVzaCBmdW5jXG4gICAgICAgICAgICAgICAga2VlcG9uID0ga2VlcG9uIG9yIHJldFxuICAgICAgICAgICAgZm9yIGssZnVuYyBvZiBAcXVldWUgPT4gaWYgcmVtb3ZlZC5pbmRleE9mKGZ1bmMpID49IDAgPT4gZGVsZXRlIEBxdWV1ZVtrXVxuICAgICAgICAgICAgaWYga2VlcG9uID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSAofj4gQG1haW4gaXQpXG4gICAgICAgICAgICBlbHNlIEBydW5uaW5nID0gZmFsc2VcbiAgICAgICAgYWRkOiAoa2V5LCBmKSAtPlxuICAgICAgICAgICAgaWYgIUBxdWV1ZVtrZXldID0+IEBxdWV1ZVtrZXldID0gZlxuICAgICAgICAgICAgaWYgIUBydW5uaW5nID0+XG4gICAgICAgICAgICAgICAgQHJ1bm5pbmcgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICh+PiBAbWFpbiBpdClcblxuXG4gICAgd2luZG93LmxkQmFyID0gbGRCYXIgPSAoc2VsZWN0b3IsIG9wdGlvbiA9IHt9KSAtPlxuICAgICAgICB4bWxucyA9IHhsaW5rOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICByb290ID0gaWYgdHlwZW9mISBzZWxlY3RvciBpcyBcXFN0cmluZ1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciBzZWxlY3RvclxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZWxlY3RvclxuXG4gICAgICAgIGlmICFyb290LmxkQmFyID0+IHJvb3QubGRCYXIgPSBAXG4gICAgICAgIGVsc2UgcmV0dXJuIHJvb3QubGRCYXJcblxuICAgICAgICBjbHMgPSByb290LmdldEF0dHJpYnV0ZShcXGNsYXNzKSBvciAnJ1xuICAgICAgICBpZiAhfmNscy5pbmRleE9mKCdsZEJhcicpID0+IHJvb3Quc2V0QXR0cmlidXRlIFxcY2xhc3MsIFwiI2NscyBsZEJhclwiXG4gICAgICAgIGlkLXByZWZpeCA9IFwibGRCYXItI3tNYXRoLnJhbmRvbSF0b1N0cmluZyAxNiAuc3Vic3RyaW5nIDJ9XCJcbiAgICAgICAgaWQgPVxuICAgICAgICAgICAga2V5OiBpZC1wcmVmaXhcbiAgICAgICAgICAgIGNsaXA6IFwiI3tpZC1wcmVmaXh9LWNsaXBcIlxuICAgICAgICAgICAgZmlsdGVyOiBcIiN7aWQtcHJlZml4fS1maWx0ZXJcIlxuICAgICAgICAgICAgcGF0dGVybjogXCIje2lkLXByZWZpeH0tcGF0dGVyblwiXG4gICAgICAgICAgICBtYXNrOiBcIiN7aWQtcHJlZml4fS1tYXNrXCJcbiAgICAgICAgICAgIG1hc2stcGF0aDogXCIje2lkLXByZWZpeH0tbWFzay1wYXRoXCJcbiAgICAgICAgZG9tVHJlZSA9IChuLG8pIC0+XG4gICAgICAgICAgICBuID0gbmV3Tm9kZSBuXG4gICAgICAgICAgICBmb3Igayx2IG9mIG8gPT4gaWYgayAhPSBcXGF0dHIgPT4gbi5hcHBlbmRDaGlsZCBkb21UcmVlKGssIHYgb3Ige30pXG4gICAgICAgICAgICBuLmF0dHJzKG8uYXR0ciBvciB7fSlcbiAgICAgICAgICAgIG5cbiAgICAgICAgbmV3Tm9kZSA9IChuKSAtPiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuX19wcm90b19fLl9fcHJvdG9fXy5fX3Byb3RvX19cbiAgICAgICAgICAgIC4udGV4dCA9ICh0KSAtPiBAYXBwZW5kQ2hpbGQgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodClcbiAgICAgICAgICAgIC4uYXR0cnMgPSAobykgLT4gZm9yIGssdiBvZiBvID0+XG4gICAgICAgICAgICAgICAgcmV0ID0gLyhbXjpdKyk6KFteOl0rKS8uZXhlYyhrKVxuICAgICAgICAgICAgICAgIGlmICFyZXQgb3IgIXhtbG5zW3JldC4xXSA9PiBAc2V0QXR0cmlidXRlIGssIHZcbiAgICAgICAgICAgICAgICBlbHNlIEBzZXRBdHRyaWJ1dGVOUyB4bWxuc1tyZXQuMV0sIGssIHZcbiAgICAgICAgICAgIC4uc3R5bGVzID0gKG8pIC0+IGZvciBrLHYgb2YgbyA9PiBAc3R5bGVba10gPSB2XG4gICAgICAgICAgICAuLmFwcGVuZCA9IChuKSAtPiBAYXBwZW5kQ2hpbGQgciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyBcImh0dHA6Ly93d3cudzMub2cvMjAwMC9zdmdcIiwgblxuICAgICAgICAgICAgLi5hdHRyID0gKG4sdikgLT4gaWYgdj8gPT4gQHNldEF0dHJpYnV0ZSBuLCB2IGVsc2UgQGdldEF0dHJpYnV0ZSBuXG4gICAgICAgIGNvbmZpZyA9XG4gICAgICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgICAgIFwiaW1nXCI6ICcnXG4gICAgICAgICAgICBcInBhdGhcIjogJ00xMCAxMEw5MCAxME05MCA4TTkwIDEyJ1xuICAgICAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICAgICAgXCJmaWxsXCI6IFxcIzI1YlxuICAgICAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDNcbiAgICAgICAgICAgIFwicGF0dGVybi1zaXplXCI6IG51bGxcbiAgICAgICAgICAgIFwic3Ryb2tlLWRpclwiOiBcXG5vcm1hbFxuICAgICAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgICAgIFwic3Ryb2tlLXRyYWlsXCI6IFxcI2RkZFxuICAgICAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41XG4gICAgICAgICAgICBcImR1cmF0aW9uXCI6IDFcbiAgICAgICAgICAgIFwiZWFzaW5nXCI6IFxcbGluZWFyXG4gICAgICAgICAgICBcInZhbHVlXCI6IDBcbiAgICAgICAgICAgIFwiaW1nLXNpemVcIjogbnVsbFxuICAgICAgICAgICAgXCJiYm94XCI6IG51bGxcbiAgICAgICAgICAgIFwic2V0LWRpbVwiOiB0cnVlXG4gICAgICAgICAgICBcImFzcGVjdC1yYXRpb1wiOiBcInhNaWRZTWlkXCJcbiAgICAgICAgICAgIFwidHJhbnNpdGlvbi1pblwiOiBmYWxzZVxuICAgICAgICAgICAgXCJtaW5cIjogMFxuICAgICAgICAgICAgXCJtYXhcIjogMTAwXG4gICAgICAgICAgICBcInByZWNpc2lvblwiOiAwXG4gICAgICAgICAgICBcInBhZGRpbmdcIjogdW5kZWZpbmVkXG5cbiAgICAgICAgY29uZmlnW1wicHJlc2V0XCJdID0gcm9vdC5hdHRyKFwiZGF0YS1wcmVzZXRcIikgb3Igb3B0aW9uW1wicHJlc2V0XCJdXG5cbiAgICAgICAgaWYgY29uZmlnLnByZXNldD9cbiAgICAgICAgICAgICMgdXNlIHRoZSBkZWZhdWx0IHByZXNldFxuICAgICAgICAgICAgY29uZmlnIDw8PCBwcmVzZXRzW2NvbmZpZy5wcmVzZXRdXG5cbiAgICAgICAgIyBvdmVyd3JpdGUgaWYgdGhlcmUgYXJlIGFyZ3VtZW50cyBwYXNzZWQgdmlhIGRhdGEtKiBhdHRyaWJ1dGVzXG4gICAgICAgIGZvciBhdHRyIG9mIGNvbmZpZ1xuICAgICAgICAgICAgaWYgdGhhdCA9IHJvb3QuYXR0ciBcImRhdGEtI3thdHRyfVwiXG4gICAgICAgICAgICAgICAgY29uZmlnW2F0dHJdID0gdGhhdFxuXG4gICAgICAgIGNvbmZpZyA8PDwgb3B0aW9uXG4gICAgICAgIGlmIGNvbmZpZy5pbWcgPT4gY29uZmlnLnBhdGggPSBudWxsXG5cbiAgICAgICAgaXMtc3Ryb2tlID0gY29uZmlnLnR5cGUgPT0gXFxzdHJva2VcbiAgICAgICAgcGFyc2UtcmVzID0gKHYpIC0+XG4gICAgICAgICAgICBwYXJzZXIgPSAvZGF0YTpsZGJhclxcL3JlcywoW14oKV0rKVxcKChbXildKylcXCkvXG4gICAgICAgICAgICByZXQgPSBwYXJzZXIuZXhlYyh2KVxuICAgICAgICAgICAgaWYgIXJldCA9PiByZXR1cm4gdlxuICAgICAgICAgICAgcmV0ID0gbWFrZVtyZXQuMV0uYXBwbHkgbWFrZSwgcmV0LjIuc3BsaXQoXFwsKVxuICAgICAgICBjb25maWcuZmlsbCA9IHBhcnNlLXJlcyBjb25maWcuZmlsbFxuICAgICAgICBjb25maWcuc3Ryb2tlID0gcGFyc2UtcmVzIGNvbmZpZy5zdHJva2VcbiAgICAgICAgaWYgY29uZmlnW1wic2V0LWRpbVwiXSA9PSBcXGZhbHNlID0+IGNvbmZpZ1tcInNldC1kaW1cIl0gPSBmYWxzZVxuXG4gICAgICAgIGRvbSA9XG4gICAgICAgICAgICBhdHRyOlxuICAgICAgICAgICAgICAgIFwieG1sbnM6eGxpbmtcIjogXFxodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXG4gICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogY29uZmlnW1wiYXNwZWN0LXJhdGlvXCJdXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAgICAgICBkZWZzOlxuICAgICAgICAgICAgICAgIGZpbHRlcjpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLmZpbHRlciwgeDogLTEsIHk6IC0xLCB3aWR0aDogMywgaGVpZ2h0OiAzXG4gICAgICAgICAgICAgICAgICAgIGZlTW9ycGhvbG9neTogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAoaWYgK2NvbmZpZ1tcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCJdPj0wID0+IFxcZGlsYXRlIGVsc2UgXFxlcm9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogTWF0aC5hYnMoK2NvbmZpZ1tcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCJdKVxuICAgICAgICAgICAgICAgICAgICBmZUNvbG9yTWF0cml4OiBhdHRyOiB7dmFsdWVzOiAnMCAwIDAgMCAxICAgIDAgMCAwIDAgMSAgICAwIDAgMCAwIDEgICAgMCAwIDAgMSAwJywgcmVzdWx0OiBcImNtXCJ9XG4gICAgICAgICAgICAgICAgbWFzazpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLm1hc2tcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgICAgICBcInhsaW5rOmhyZWZcIjogY29uZmlnLmltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcInVybChcXCMje2lkLmZpbHRlcn0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAxMDAsIGhlaWdodDogMTAwLCBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBjb25maWdbXCJhc3BlY3QtcmF0aW9cIl1cblxuICAgICAgICAgICAgICAgIGc6XG4gICAgICAgICAgICAgICAgICAgIG1hc2s6XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiBpZDogaWQubWFzay1wYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ6IGNvbmZpZy5wYXRoIG9yIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcXCNmZmZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IFxcI2ZmZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJ1cmwoXFwjI3tpZC5maWx0ZXJ9KVwiXG5cbiAgICAgICAgICAgICAgICBjbGlwUGF0aDpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLmNsaXBcbiAgICAgICAgICAgICAgICAgICAgcmVjdDoge2F0dHI6IGNsYXNzOiBcXG1hc2ssIGZpbGw6IFxcIzAwMH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgICAgICAgICBhdHRyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLnBhdHRlcm4sIHBhdHRlcm5Vbml0czogXFx1c2VyU3BhY2VPblVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgeDowLCB5OiAwLCB3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogYXR0cjogeDogMCwgeTogMCwgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDBcblxuICAgICAgICBzdmcgPSBkb21UcmVlIFxcc3ZnLCBkb21cbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXFxkaXZcbiAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUgXFxjbGFzcywgXFxsZEJhci1sYWJlbFxuICAgICAgICByb290LmFwcGVuZENoaWxkIHN2Z1xuICAgICAgICByb290LmFwcGVuZENoaWxkIHRleHRcblxuICAgICAgICBncm91cCA9IFswLDBdXG4gICAgICAgIGxlbmd0aCA9IDBcblxuICAgICAgICBAZml0ID0gfj5cbiAgICAgICAgICAgIGlmIGNvbmZpZ1tcImJib3hcIl0gPT5cbiAgICAgICAgICAgICAgYm94ID0gdGhhdC5zcGxpdCgnICcpLm1hcCgtPisoaXQudHJpbSEpKVxuICAgICAgICAgICAgICBib3ggPSB7eDogYm94LjAsIHk6IGJveC4xLCB3aWR0aDogYm94LjIsIGhlaWdodDogYm94LjN9XG4gICAgICAgICAgICBlbHNlIGJveCA9IGdyb3VwLjEuZ2V0QkJveCFcbiAgICAgICAgICAgIGlmICFib3ggb3IgYm94LndpZHRoID09IDAgb3IgYm94LmhlaWdodCA9PSAwID0+IGJveCA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMH1cbiAgICAgICAgICAgIGQgPSAoTWF0aC5tYXguYXBwbHkoXG4gICAgICAgICAgICAgIG51bGwsIDxbc3Ryb2tlLXdpZHRoIHN0cm9rZS10cmFpbC13aWR0aCBmaWxsLWJhY2tncm91bmQtZXh0cnVkZV0+Lm1hcCgtPmNvbmZpZ1tpdF0pKVxuICAgICAgICAgICAgKSAqIDEuNVxuICAgICAgICAgICAgaWYgY29uZmlnW1wicGFkZGluZ1wiXT8gPT4gZCA9ICtjb25maWdbXCJwYWRkaW5nXCJdXG5cbiAgICAgICAgICAgIHN2Zy5hdHRycyB2aWV3Qm94OiBbYm94LnggLSBkLCBib3gueSAtIGQsIGJveC53aWR0aCArIGQgKiAyLCBib3guaGVpZ2h0ICsgZCAqIDJdLmpvaW4oXCIgXCIpXG4gICAgICAgICAgICBpZiBjb25maWdbXCJzZXQtZGltXCJdID0+IDxbd2lkdGggaGVpZ2h0XT4ubWFwIH4+IGlmICFyb290LnN0eWxlW2l0XSBvciBAZml0W2l0XSA9PlxuICAgICAgICAgICAgICByb290LnN0eWxlW2l0XSA9IFwiI3tib3hbaXRdICsgZCAqIDJ9cHhcIlxuICAgICAgICAgICAgICBAZml0W2l0XSA9IHRydWVcblxuICAgICAgICAgICAgcmVjdCA9IGdyb3VwLjAucXVlcnlTZWxlY3RvciBcXHJlY3RcbiAgICAgICAgICAgIGlmIHJlY3QgPT4gcmVjdC5hdHRycyBkb1xuICAgICAgICAgICAgICAgIHg6IGJveC54IC0gZCwgeTogYm94LnkgLSBkLCB3aWR0aDogYm94LndpZHRoICsgZCAqIDIsIGhlaWdodDogYm94LmhlaWdodCArIGQgKiAyXG5cbiAgICAgICAgaWYgY29uZmlnLnBhdGggPT5cbiAgICAgICAgICAgIGlmIGlzLXN0cm9rZSA9PlxuICAgICAgICAgICAgICAgIGdyb3VwLjAgPSBkb21UcmVlIFxcZywgcGF0aDogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgZDogY29uZmlnLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogXFxub25lXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcXGJhc2VsaW5lXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZ3JvdXAuMCA9IGRvbVRyZWUgXFxnLCByZWN0OiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBcInVybChcXCMje2lkLm1hc2stcGF0aH0pXCIsIGZpbGw6IGNvbmZpZ1tcImZpbGwtYmFja2dyb3VuZFwiXVxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXFxmcmFtZVxuXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQgZ3JvdXAuMFxuICAgICAgICAgICAgZ3JvdXAuMSA9IGRvbVRyZWUgXFxnLCBwYXRoOiBhdHRyOlxuICAgICAgICAgICAgICAgIGQ6IGNvbmZpZy5wYXRoLCBjbGFzczogaWYgaXMtc3Ryb2tlID0+IFxcbWFpbmxpbmUgZWxzZSBcXHNvbGlkXG4gICAgICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogaWYgY29uZmlnLnR5cGUgPT0gXFxmaWxsID0+IFwidXJsKFxcIyN7aWQuY2xpcH0pXCIgZWxzZSAnJ1xuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkIGdyb3VwLjFcbiAgICAgICAgICAgIHBhdGgwID0gZ3JvdXAuMC5xdWVyeVNlbGVjdG9yIChpZiBpcy1zdHJva2UgPT4gXFxwYXRoIGVsc2UgXFxyZWN0KVxuICAgICAgICAgICAgcGF0aDEgPSBncm91cC4xLnF1ZXJ5U2VsZWN0b3IgXFxwYXRoXG4gICAgICAgICAgICBpZiBpcy1zdHJva2UgPT4gcGF0aDEuYXR0cnMgZmlsbDogXFxub25lXG5cbiAgICAgICAgICAgIHBhdGltZyA9IHN2Zy5xdWVyeVNlbGVjdG9yICdwYXR0ZXJuIGltYWdlJ1xuICAgICAgICAgICAgaW1nID0gbmV3IEltYWdlIVxuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIgXFxsb2FkLCAtPlxuICAgICAgICAgICAgICAgIGJveCA9IGlmIGNvbmZpZ1tcInBhdHRlcm4tc2l6ZVwiXSA9PiB7d2lkdGg6ICt0aGF0LCBoZWlnaHQ6ICt0aGF0fVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgaW1nLndpZHRoIGFuZCBpbWcuaGVpZ2h0ID0+IHt3aWR0aDogaW1nLndpZHRoLCBoZWlnaHQ6IGltZy5oZWlnaHR9XG4gICAgICAgICAgICAgICAgZWxzZSB7d2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDB9XG4gICAgICAgICAgICAgICAgc3ZnLnF1ZXJ5U2VsZWN0b3IgXFxwYXR0ZXJuIC5hdHRycyB7d2lkdGg6IGJveC53aWR0aCwgaGVpZ2h0OiBib3guaGVpZ2h0fVxuICAgICAgICAgICAgICAgIHBhdGltZy5hdHRycyB7d2lkdGg6IGJveC53aWR0aCwgaGVpZ2h0OiBib3guaGVpZ2h0fVxuICAgICAgICAgICAgaWYgLy4rXFwuLit8XmRhdGE6Ly5leGVjKGlmICFpcy1zdHJva2UgPT4gY29uZmlnLmZpbGwgZWxzZSBjb25maWcuc3Ryb2tlKSA9PlxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpZiAhaXMtc3Ryb2tlID0+IGNvbmZpZy5maWxsIGVsc2UgY29uZmlnLnN0cm9rZVxuICAgICAgICAgICAgICAgIHBhdGltZy5hdHRycyBcInhsaW5rOmhyZWZcIjogaW1nLnNyYyAjaWYgIWlzLXN0cm9rZSA9PiBjb25maWcuZmlsbCBlbHNlIGNvbmZpZy5zdHJva2VcblxuICAgICAgICAgICAgaWYgaXMtc3Ryb2tlID0+XG4gICAgICAgICAgICAgICAgcGF0aDAuYXR0cnMgc3Ryb2tlOiBjb25maWdbXCJzdHJva2UtdHJhaWxcIl0sIFwic3Ryb2tlLXdpZHRoXCI6IGNvbmZpZ1tcInN0cm9rZS10cmFpbC13aWR0aFwiXVxuICAgICAgICAgICAgICAgIHBhdGgxLmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IGNvbmZpZ1tcInN0cm9rZS13aWR0aFwiXVxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IGlmIC8uK1xcLi4rfF5kYXRhOi8uZXhlYyhjb25maWcuc3Ryb2tlKSA9PiBcInVybChcXCMje2lkLnBhdHRlcm59KVwiIGVsc2UgY29uZmlnLnN0cm9rZVxuICAgICAgICAgICAgaWYgY29uZmlnLmZpbGwgYW5kICFpcy1zdHJva2UgPT5cbiAgICAgICAgICAgICAgICBwYXRoMS5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBpZiAvLitcXC4uK3xeZGF0YTovLmV4ZWMoY29uZmlnLmZpbGwpID0+IFwidXJsKFxcIyN7aWQucGF0dGVybn0pXCIgZWxzZSBjb25maWcuZmlsbFxuXG4gICAgICAgICAgICBsZW5ndGggPSBwYXRoMS5nZXRUb3RhbExlbmd0aCFcbiAgICAgICAgICAgIEBmaXQhXG4gICAgICAgICAgICBAaW5pdGVkID0gdHJ1ZVxuICAgICAgICBlbHNlIGlmIGNvbmZpZy5pbWcgPT5cbiAgICAgICAgICAgIGlmIGNvbmZpZ1tcImltZy1zaXplXCJdID0+XG4gICAgICAgICAgICAgICAgcmV0ID0gY29uZmlnW1wiaW1nLXNpemVcIl0uc3BsaXQoXFwsKVxuICAgICAgICAgICAgICAgIHNpemUgPSB7d2lkdGg6ICtyZXQuMCwgaGVpZ2h0OiArcmV0LjF9XG4gICAgICAgICAgICBlbHNlIHNpemUgPSB7d2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDB9XG5cbiAgICAgICAgICAgIGdyb3VwLjAgPSBkb21UcmVlIFxcZywgcmVjdDogYXR0cjpcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgbWFzazogXCJ1cmwoXFwjI3tpZC5tYXNrfSlcIiwgZmlsbDogY29uZmlnW1wiZmlsbC1iYWNrZ3JvdW5kXCJdXG4gICAgICAgICAgICBzdmcucXVlcnlTZWxlY3RvciAnbWFzayBpbWFnZScgLmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHRcbiAgICAgICAgICAgIGdyb3VwLjEgPSBkb21UcmVlIFxcZywgaW1hZ2U6IGF0dHI6XG4gICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHQsIHg6IDAsIHk6IDAsIHByZXNlcnZlQXNwZWN0UmF0aW86IGNvbmZpZ1tcImFzcGVjdC1yYXRpb1wiXVxuICAgICAgICAgICAgICAgICN3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgeDogMCwgeTogMCwgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJ4TWlkWU1pZFwiXG4gICAgICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogaWYgY29uZmlnLnR5cGUgPT0gXFxmaWxsID0+IFwidXJsKFxcIyN7aWQuY2xpcH0pXCIgZWxzZSAnJ1xuICAgICAgICAgICAgICAgIFwieGxpbms6aHJlZlwiOiBjb25maWcuaW1nLCBjbGFzczogXFxzb2xpZFxuICAgICAgICAgICAgaW1nID0gbmV3IEltYWdlIVxuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIgXFxsb2FkLCB+PlxuICAgICAgICAgICAgICAgIGlmIGNvbmZpZ1tcImltZy1zaXplXCJdID0+XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGNvbmZpZ1tcImltZy1zaXplXCJdLnNwbGl0KFxcLClcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHt3aWR0aDogK3JldC4wLCBoZWlnaHQ6ICtyZXQuMX1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIGltZy53aWR0aCBhbmQgaW1nLmhlaWdodCA9PiBzaXplID0ge3dpZHRoOiBpbWcud2lkdGgsIGhlaWdodDogaW1nLmhlaWdodH1cbiAgICAgICAgICAgICAgICBlbHNlIHNpemUgPSB7d2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDB9XG4gICAgICAgICAgICAgICAgc3ZnLnF1ZXJ5U2VsZWN0b3IgJ21hc2sgaW1hZ2UnIC5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodFxuICAgICAgICAgICAgICAgIGdyb3VwLjEucXVlcnlTZWxlY3RvciAnaW1hZ2UnIC5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodFxuXG4gICAgICAgICAgICAgICAgQGZpdCFcbiAgICAgICAgICAgICAgICBAc2V0IHVuZGVmaW5lZCwgZmFsc2VcbiAgICAgICAgICAgICAgICBAaW5pdGVkID0gdHJ1ZVxuICAgICAgICAgICAgaW1nLnNyYyA9IGNvbmZpZy5pbWdcbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZCBncm91cC4wXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQgZ3JvdXAuMVxuICAgICAgICBzdmcuYXR0cnMgd2lkdGg6IFxcMTAwJSwgaGVpZ2h0OiBcXDEwMCUgIywgdmlld0JveDogJzAgMCAxMDAgMTAwJ1xuXG4gICAgICAgIEB0cmFuc2l0aW9uID1cbiAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgIHNyYzogMFxuICAgICAgICAgICAgICAgIGRlczogMFxuICAgICAgICAgICAgdGltZToge31cblxuICAgICAgICAgICAgZWFzZTogKHQsYixjLGQpIC0+XG4gICAgICAgICAgICAgICAgdCA9IHQgLyAoZCAqIDAuNSlcbiAgICAgICAgICAgICAgICBpZiB0IDwgMSA9PiByZXR1cm4gYyAqIDAuNSAqIHQgKiB0ICsgYlxuICAgICAgICAgICAgICAgIHQgPSB0IC0gMVxuICAgICAgICAgICAgICAgIHJldHVybiAtYyAqIDAuNSAqICh0Kih0IC0gMikgLSAxKSArIGJcblxuICAgICAgICAgICAgaGFuZGxlcjogKHRpbWUsIGRvVHJhbnNpdGlvbiA9IHRydWUpIC0+XG4gICAgICAgICAgICAgICAgaWYgIUB0aW1lLnNyYz8gPT4gQHRpbWUuc3JjID0gdGltZVxuICAgICAgICAgICAgICAgIFttaW4sbWF4LHByZWNdID0gW2NvbmZpZ1tcIm1pblwiXSwgY29uZmlnW1wibWF4XCJdLDEvY29uZmlnW1wicHJlY2lzaW9uXCJdXVxuICAgICAgICAgICAgICAgIFtkdiwgZHQsIGR1cl0gPSBbQHZhbHVlLmRlcyAtIEB2YWx1ZS5zcmMsICh0aW1lIC0gQHRpbWUuc3JjKSAqIDAuMDAxLCArY29uZmlnW1wiZHVyYXRpb25cIl0gb3IgMV1cbiAgICAgICAgICAgICAgICB2ID0gaWYgZG9UcmFuc2l0aW9uID0+IEBlYXNlKGR0LCBAdmFsdWUuc3JjLCBkdiwgZHVyKSBlbHNlIEB2YWx1ZS5kZXNcbiAgICAgICAgICAgICAgICBpZiBjb25maWcucHJlY2lzaW9uID0+IHYgPSBNYXRoLnJvdW5kKHYgKiBwcmVjKSAvIHByZWNcbiAgICAgICAgICAgICAgICBlbHNlIGlmIGRvVHJhbnNpdGlvbiA9PiB2ID0gTWF0aC5yb3VuZCh2KVxuICAgICAgICAgICAgICAgIHYgPj89IG1pblxuICAgICAgICAgICAgICAgIHYgPD89IG1heFxuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSB2XG4gICAgICAgICAgICAgICAgcCA9IDEwMC4wICogKHYgLSBtaW4gKSAvICggbWF4IC0gbWluIClcbiAgICAgICAgICAgICAgICBpZiBpcy1zdHJva2UgPT5cbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHBhdGgxXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLWRhc2hhcnJheVwiOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgY29uZmlnW1wic3Ryb2tlLWRpclwiXSA9PSBcXHJldmVyc2UgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwICN7bGVuZ3RoICogKDEwMCAtIHApICogMC4wMX0gI3tsZW5ndGggKiBwICogMC4wMX0gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSA9PiBcIiN7cCAqIDAuMDEgKiBsZW5ndGh9ICN7KDEwMCAtIHApICogMC4wMSAqIGxlbmd0aCArIDF9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGJveCA9IGdyb3VwLjEuZ2V0QkJveCFcbiAgICAgICAgICAgICAgICAgICAgZGlyID0gY29uZmlnW1wiZmlsbC1kaXJcIl1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSBpZiBkaXIgPT0gXFxidHQgb3IgIWRpciA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnkgKyBib3guaGVpZ2h0ICogKDEwMCAtIHApICogMC4wMVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBib3guaGVpZ2h0ICogcCAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGJveC54LCB3aWR0aDogYm94LndpZHRoXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgZGlyID09IFxcdHRiID0+IGRvXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBib3gueSwgaGVpZ2h0OiBib3guaGVpZ2h0ICogcCAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGJveC54LCB3aWR0aDogYm94LndpZHRoXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgZGlyID09IFxcbHRyID0+IGRvXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBib3gueSwgaGVpZ2h0OiBib3guaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCwgd2lkdGg6IGJveC53aWR0aCAqIHAgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgZGlyID09IFxccnRsID0+IGRvXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBib3gueSwgaGVpZ2h0OiBib3guaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCArIGJveC53aWR0aCAqICgxMDAgLSBwKSAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBib3gud2lkdGggKiBwICogMC4wMVxuICAgICAgICAgICAgICAgICAgICBub2RlID0gc3ZnLnF1ZXJ5U2VsZWN0b3IgXFxyZWN0XG4gICAgICAgICAgICAgICAgbm9kZS5hdHRycyBzdHlsZVxuICAgICAgICAgICAgICAgIGlmIGR0ID49IGR1ciA9PiBkZWxldGUgQHRpbWUuc3JjOyByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgc3RhcnQ6IChzcmMsIGRlcywgZG9UcmFuc2l0aW9uKSAtPlxuICAgICAgICAgICAgICAgIEB2YWx1ZSA8PDwge3NyYywgZGVzfVxuICAgICAgICAgICAgICAgICEhKCByb290Lm9mZnNldFdpZHRoIHx8IHJvb3Qub2Zmc2V0SGVpZ2h0IHx8IHJvb3QuZ2V0Q2xpZW50UmVjdHMhbGVuZ3RoIClcbiAgICAgICAgICAgICAgICBpZiAhZG9UcmFuc2l0aW9uIG9yICEoIHJvb3Qub2Zmc2V0V2lkdGggfHwgcm9vdC5vZmZzZXRIZWlnaHQgfHwgcm9vdC5nZXRDbGllbnRSZWN0cyFsZW5ndGggKSA9PlxuICAgICAgICAgICAgICAgICAgICBAdGltZS5zcmMgPSAwXG4gICAgICAgICAgICAgICAgICAgIEBoYW5kbGVyIDEwMDAsIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIGhhbmRsZXIuYWRkIGlkLmtleSwgKHRpbWUpIH4+IHJldHVybiBAaGFuZGxlciB0aW1lXG5cbiAgICAgICAgQHNldCA9ICh2LGRvVHJhbnNpdGlvbiA9IHRydWUpIC0+XG4gICAgICAgICAgICBzcmMgPSBAdmFsdWUgb3IgMFxuICAgICAgICAgICAgaWYgdj8gPT4gQHZhbHVlID0gdiBlbHNlIHYgPSBAdmFsdWVcbiAgICAgICAgICAgIGRlcyA9IEB2YWx1ZVxuICAgICAgICAgICAgQHRyYW5zaXRpb24uc3RhcnQgc3JjLCBkZXMsIGRvVHJhbnNpdGlvblxuXG4gICAgICAgIEBzZXQgKCtjb25maWcudmFsdWUgb3IgMCksIGNvbmZpZ1tcInRyYW5zaXRpb24taW5cIl0gb3IgZmFsc2VcbiAgICAgICAgQFxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgXFxsb2FkLCAoLT5cbiAgICAgICAgZm9yIG5vZGUgaW4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcXC5sZEJhcikgPT5cbiAgICAgICAgICBpZiAhbm9kZS5sZEJhciA9PiBub2RlLmxkQmFyID0gbmV3IGxkQmFyIG5vZGVcbiAgICApLCBmYWxzZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxkQmFyXG4iLCJleHBvcnQgcHJlc2V0cyA9XG4gICAgcmFpbmJvdzpcbiAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgIFwicGF0aFwiOiAnTTEwIDEwTDkwIDEwJ1xuICAgICAgICBcInN0cm9rZVwiOiAnZGF0YTpsZGJhci9yZXMsZ3JhZGllbnQoMCwxLCNhNTUxZGYsI2ZkNTFhZCwjZmY3ZjgyLCNmZmI4NzQsI2ZmZWI5MCknXG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDEwIDgwIDEwXCJcbiAgICBlbmVyZ3k6XG4gICAgICAgIFwidHlwZVwiOiAnZmlsbCdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTUgNUw4NSA1QTUgNSAwIDAgMSA4NSAxNUwxNSAxNUE1IDUgMCAwIDEgMTUgNSdcbiAgICAgICAgXCJzdHJva2VcIjogXFwjZjAwXG4gICAgICAgIFwiZmlsbFwiOiAnZGF0YTpsZGJhci9yZXMsZ3JhZGllbnQoNDUsMiwjNGU5LCM4ZmIsIzRlOSknXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXCJsdHJcIlxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiBcXCM0NDRcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAxXG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDUgODAgMTBcIlxuICAgIHN0cmlwZTpcbiAgICAgICAgXCJ0eXBlXCI6ICdmaWxsJ1xuICAgICAgICBcInBhdGhcIjogJ00xNSA1TDg1IDVBNSA1IDAgMCAxIDg1IDE1TDE1IDE1QTUgNSAwIDAgMSAxNSA1J1xuICAgICAgICBcInN0cm9rZVwiOiBcXCNmMDBcbiAgICAgICAgXCJmaWxsXCI6ICdkYXRhOmxkYmFyL3JlcyxzdHJpcGUoIzI1YiwjNThlLDEpJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFwibHRyXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMVxuICAgICAgICBcImJib3hcIjogXCIxMCA1IDgwIDEwXCJcbiAgICB0ZXh0OlxuICAgICAgICBcInR5cGVcIjogJ2ZpbGwnXG4gICAgICAgIFwiaW1nXCI6IFwiXCJcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDcwIDIwXCI+PHRleHQgeD1cIjM1XCIgeT1cIjEwXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIiBkb21pbmFudC1iYXNlbGluZT1cImNlbnRyYWxcIiBmb250LWZhbWlseT1cImFyaWFsXCI+TE9BRElORzwvdGV4dD48L3N2Zz5cIlwiXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAxLjNcbiAgICAgICAgXCJwYXR0ZXJuLXNpemVcIjogMTAwXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXCJsdHJcIlxuICAgICAgICBcImltZy1zaXplXCI6IFwiNzAsMjBcIlxuICAgICAgICBcImJib3hcIjogXCIwIDAgNzAgMjBcIlxuICAgIGxpbmU6XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ00xMCAxMEw5MCAxMCdcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDFcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgMTAgODAgMTBcIlxuICAgIGZhbjpcbiAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgIFwicGF0aFwiOiAnTTEwIDkwQTQwIDQwIDAgMCAxIDkwIDkwJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFxcYnR0XG4gICAgICAgIFwiZmlsbFwiOiBcXCMyNWJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogM1xuICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFxcM1xuICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41XG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDUwIDgwIDQwXCJcbiAgICBjaXJjbGU6XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ001MCAxMEE0MCA0MCAwIDAgMSA1MCA5MEE0MCA0MCAwIDAgMSA1MCAxMCdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICBcImZpbGxcIjogXFwjMjViXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDNcbiAgICAgICAgXCJzdHJva2UtZGlyXCI6IFxcbm9ybWFsXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICBcImJib3hcIjogXCIxMCAxMCA4MCA4MFwiXG4gICAgYnViYmxlOlxuICAgICAgICBcInR5cGVcIjogJ2ZpbGwnXG4gICAgICAgIFwicGF0aFwiOiAnTTUwIDEwQTQwIDQwIDAgMCAxIDUwIDkwQTQwIDQwIDAgMCAxIDUwIDEwJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFxcYnR0XG4gICAgICAgIFwiZmlsbFwiOiAnZGF0YTpsZGJhci9yZXMsYnViYmxlKCMzOWQsI2NlZiknXG4gICAgICAgIFwicGF0dGVybi1zaXplXCI6IFwiMTUwXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMlxuICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFxcM1xuICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41XG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDEwIDgwIDgwXCJcbiIsIi8vZMOpZmluaXRpb24gZGVzIHZhcmlhYmxlc1xubGV0IExpc3RlUGx1ZyA9IFtdLFxuICAgIGkgPSAwLFxuICAgIHZhbGlkID0gZmFsc2U7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG5vbWJyZV91cmwgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2Fsc3RvbS9iYXNlbGluZS10cmFpbi8nICsgbm9tYnJlX3VybCkge1xuICAgICAgICAvL2lkZW50aWZpY2F0aW9uIGRlIGxhIHByb2dyZXNzIGJhclxuICAgICAgICBwcmdiYXIgPSBuZXcgbGRCYXIoXCIjdGVzdC1wcm9ncmVzc1wiKTtcbiAgICB9O1xufSk7XG4vLyBEZWNsYXJhdGlvbiBkJ8OpdmVuZW1lbnQgYXZhbnQgY2hhcmdlbWVudCBkZSBsIGFwYWdlXG4kKCcjdmFsaWQtYWxsLXBsdWcnKS5oaWRlKCk7XG4kKCcjY2FuY2VsLWFsbC1wbHVnJykuaGlkZSgpO1xuLy9kZXRlY3Rpb24gc2kgbGUgYnJvd3NlciBnw6hyZSBsZSBkcmFnJmRyb3BcbnZhciBpc0FkdmFuY2VkVXBsb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXR1cm4gKCgnZHJhZ2dhYmxlJyBpbiBkaXYpIHx8ICgnb25kcmFnc3RhcnQnIGluIGRpdiAmJiAnb25kcm9wJyBpbiBkaXYpKSAmJiAnRm9ybURhdGEnIGluIHdpbmRvdyAmJiAnRmlsZVJlYWRlcicgaW4gd2luZG93O1xufSgpO1xudmFyICRmb3JtID0gJCgnLmJveCcpO1xudmFyICRpbnB1dCA9ICRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyksXG4gICAgJGxhYmVsID0gJGZvcm0uZmluZCgnbGFiZWwnKSxcbiAgICBzaG93RmlsZXMgPSBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgICAgJGxhYmVsLnRleHQoZmlsZXMubGVuZ3RoID4gMSA/ICgkaW5wdXQuYXR0cignZGF0YS1tdWx0aXBsZS1jYXB0aW9uJykgfHwgJycpLnJlcGxhY2UoJ3tjb3VudH0nLCBmaWxlcy5sZW5ndGgpIDogZmlsZXNbMF0ubmFtZSk7XG4gICAgfTtcblxuLy9ham91dGVyIHVuIHBsdWdcblxuJCgnI2FkZC1mb3JtLXBsdWcnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgLy8gJCgnI2NhcmQtY29udGVudC1wbHVnJykuYXBwZW5kKFwidGVzdFwiKTtcbiAgICAvLyBjb25zb2xlLmxvZygkKCcuY29udGVudC1uYW1lLWRyYWctcGx1ZycpKVxuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICQoJyNpbnB1dC1uYW1lLXBsdWcnKS52YWwoJycpO1xuICAgICAgICBkcm9wcGVkRmlsZXMgPSBmYWxzZTtcbiAgICAgICAgJGZvcm0ucmVtb3ZlQ2xhc3MoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgJCgnLmxhYmVsLWRyb3AnKS5jc3MoJ2ZvbnQtd2VpZ2h0JywgJycpO1xuICAgICAgICAkKCcubGFiZWwtZHJvcCcpLmh0bWwoJzxzdHJvbmc+IENob29zZSBhIGZpbGUgPC9zdHJvbmc+IDxzcGFuIGNsYXNzPVwiYm94X19kcmFnbmRyb3BcIj5vciBkcmFnIGl0IGhlcmUgPC9zcGFuPi48L2xhYmVsPicpO1xuICAgICAgICAkKCcjY29udGVudC1uYW1lLWRyYWctcGx1ZycpLnNob3coKTtcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59KVxuLy9vbiBvdXZyZSBsZSBmb3JtIHBvdXIgYWpvdXRlclxuXG4kKCcjYWRkUGx1Z3MnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufSk7XG5pZiAoaXNBZHZhbmNlZFVwbG9hZCkge1xuICAgIHZhciBkcm9wcGVkRmlsZXMgPSBmYWxzZTtcbiAgICAkZm9ybS5hZGRDbGFzcygnaGFzLWFkdmFuY2VkLXVwbG9hZCcpOyAvLyBsZXR0aW5nIHRoZSBDU1MgcGFydCB0byBrbm93IGRyYWcmZHJvcCBpcyBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXJcbiAgICAkZm9ybS5vbignZHJhZyBkcmFnc3RhcnQgZHJhZ2VuZCBkcmFnb3ZlciBkcmFnZW50ZXIgZHJhZ2xlYXZlIGRyb3AnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgJGZvcm0ub24oJ2RyYWdvdmVyIGRyYWdlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGZvcm0uYWRkQ2xhc3MoJ2lzLWRyYWdvdmVyJyk7XG4gICAgfSk7XG4gICAgJGZvcm0ub24oJ2RyYWdsZWF2ZSBkcmFnZW5kIGRyb3AnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy1kcmFnb3ZlcicpO1xuXG4gICAgfSk7XG4gICAgJGZvcm0ub24oJ2Ryb3AnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkcm9wcGVkRmlsZXMgPSBlLm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgICAgICAkZm9ybS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICAgICAgJCgnLmxhYmVsLWRyb3AnKS50ZXh0KGRyb3BwZWRGaWxlc1swXS5uYW1lKTtcbiAgICAgICAgJCgnLmxhYmVsLWRyb3AnKS5jc3MoJ2ZvbnQtd2VpZ2h0JywgJ2JvbGQnKTtcbiAgICB9KTtcbiAgICAkZm9ybS5jaGFuZ2UoJ2Ryb3AnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkcm9wcGVkRmlsZXMgPSBlLm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgICAgICAkZm9ybS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9KTtcbn1cbiRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCcjdmFsaWQtcGx1ZycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IFBsdWcgPSB7fTtcbiAgICBpZiAoJCgnI2lucHV0LW5hbWUtcGx1ZycpLnZhbCgpICE9IFwiXCIgJiYgZHJvcHBlZEZpbGVzKSB7XG5cbiAgICAgICAgJCgnI3ZhbGlkLWFsbC1wbHVnJykuc2hvdygpO1xuICAgICAgICAkKCcjY2FuY2VsLWFsbC1wbHVnJykuc2hvdygpO1xuXG4gICAgICAgIFBsdWdbJ25hbWVfcGx1ZyddID0gJCgnI2lucHV0LW5hbWUtcGx1ZycpLnZhbCgpO1xuXG4gICAgICAgIC8vIFBhcnRpIGR1IHRyYWl0ZW1lbnQgZHUgZHJhZyBhbiBkcm9wIGZpbGVcbiAgICAgICAgaWYgKCRmb3JtLmhhc0NsYXNzKCdpcy11cGxvYWRpbmcnKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBzaG93RmlsZXMoZHJvcHBlZEZpbGVzKTtcbiAgICAgICAgJGZvcm0uYWRkQ2xhc3MoJ2lzLXVwbG9hZGluZycpLnJlbW92ZUNsYXNzKCdpcy1lcnJvcicpO1xuXG4gICAgICAgIGlmIChpc0FkdmFuY2VkVXBsb2FkKSB7XG4gICAgICAgICAgICB2YXIgYWpheERhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm0uZ2V0KDApKTtcblxuICAgICAgICAgICAgaWYgKGRyb3BwZWRGaWxlcykge1xuICAgICAgICAgICAgICAgICQuZWFjaChkcm9wcGVkRmlsZXMsIGZ1bmN0aW9uIChpLCBmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFqYXhEYXRhLmFwcGVuZCgkaW5wdXQuYXR0cignbmFtZScpLCBmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgUGx1Z1sna2V5X3BsdWcnXSA9IGZpbGUubmFtZTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coYWpheERhdGEpO1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWxzdG9tL3VwbG9hZEZpbGUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAvKmRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZpbGUnIDogYWpheERhdGEsXG4gICAgICAgICAgICAgICAgICAgICdidWNrZXQnOiAnYXBwbGljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAndXBsb2FkX3JlcXVlc3QnOiBcInVwbG9hZFwiXG4gICAgICAgICAgICAgICAgfSwqL1xuICAgICAgICAgICAgICAgIHhocjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldnQubG9hZGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwZXJjZW50Q29tcGxldGUgPSAoZXZ0LmxvYWRlZCAvIGV2dC50b3RhbCkgKiAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9EbyBzb21ldGhpbmcgd2l0aCB1cGxvYWQgcHJvZ3Jlc3MgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZ2Jhci5zZXQocGVyY2VudENvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVyY2VudENvbXBsZXRlID09IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Rlc3QtcHJvZ3Jlc3NcIikuYWRkQ2xhc3MoJ2lzLWJsaW5rJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2dC5sb2FkZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQudG90YWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geGhyO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBkYXRhOiBhamF4RGF0YSxcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy11cGxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiN0ZXN0LXByb2dyZXNzXCIpLnJlbW92ZUNsYXNzKCdpcy1ibGluaycpO1xuICAgICAgICAgICAgICAgICAgICBMaXN0ZVBsdWcucHVzaChQbHVnKTtcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVQbHVnLmZvckVhY2god3JpdGVQbHVnKTtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoZGF0YS5zdWNjZXNzID09IHRydWUgPyAnaXMtc3VjY2VzcycgOiAnaXMtZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2NvbnRlbnQtbmFtZS1kcmFnLXBsdWcnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coTGlzdGVQbHVnKVxuXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvZyB0aGUgZXJyb3IsIHNob3cgYW4gYWxlcnQsIHdoYXRldmVyIHdvcmtzIGZvciB5b3VcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3JyeSBib2J5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGlmcmFtZU5hbWUgPSAndXBsb2FkaWZyYW1lJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgJGlmcmFtZSA9ICQoJzxpZnJhbWUgbmFtZT1cIicgKyBpZnJhbWVOYW1lICsgJ1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2lmcmFtZT4nKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkaWZyYW1lKTtcbiAgICAgICAgICAgICRmb3JtLmF0dHIoJ3RhcmdldCcsIGlmcmFtZU5hbWUpO1xuXG4gICAgICAgICAgICAkaWZyYW1lLm9uZSgnbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoJGlmcmFtZS5jb250ZW50cygpLmZpbmQoJ2JvZHknKS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICRmb3JtXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtdXBsb2FkaW5nJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGRhdGEuc3VjY2VzcyA9PSB0cnVlID8gJ2lzLXN1Y2Nlc3MnIDogJ2lzLWVycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3RhcmdldCcpO1xuICAgICAgICAgICAgICAgIGlmICghZGF0YS5zdWNjZXNzKSAkZXJyb3JNc2cudGV4dChkYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICAkZm9ybS5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcbiAgICAgICAgICAgICAgICAkaWZyYW1lLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIG5hbWUgJiBmaWxlIHBsdWcnKVxuICAgIH1cblxuXG59KVxuXG4kKCcjdGVzdC11cGxvYWQnKS5vbihcImNsaWNrXCIsIFwiYnV0dG9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmlsZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKS5maWxlcztcbiAgICB2YXIgdGVtcERlc3RpbmF0aW9uID0gXCJ0ZXN0XCJcbiAgICB2YXIgbmFtZUZpbGUgPSBcImluaXRcIlxuICAgIHZhciB1cGxvYWRTdGF0dXMgPSBcIlBFTkRJTkdcIlxuICAgIC8vT24gZHJhZyBldCBkcm9wXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9yZXF1ZXN0RmlsZScsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgJ2J1Y2tldCc6ICdhcHBsaWNhdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0ZW1wRGVzdGluYXRpb24gPSByZXNwb25zZS5wYXRoXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogJy9hbHN0b20vdXBsb2FkRmlsZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2J1Y2tldCc6ICdhcHBsaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICd1cGxvYWRfcmVxdWVzdCc6IFwidXBsb2FkXCIsXG4gICAgICAgICAgICAgICAgICAgICdmaWxlbmFtZSc6IG5hbWVGaWxlLFxuICAgICAgICAgICAgICAgICAgICAndGVtcERlc3RpbmF0aW9uJzogdGVtcERlc3RpbmF0aW9uXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vYXNrIGZvciB0aGUgc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsIFwiMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4kKCcjdmFsaWQtYWxsLXBsdWcnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgXCIwLjRcIik7XG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcbiAgICBsZXQgaWRCYXNlbGluZSA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICcvYWxzdG9tL2ZsdXNoLXBsdWcnLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICdpZEJhc2VsaW5lJzogaWRCYXNlbGluZSxcbiAgICAgICAgICAgICdQbHVncyc6IExpc3RlUGx1Z1xuICAgICAgICB9LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIC8vYXNrIGZvciB0aGUgc3RhdHVzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG4kKCcjY29udGVudC10ci1wbHVnJykub24oJ2NsaWNrJywgJy50ZC10YWJsZSA+IC50ZC1wbHVnJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsIFwiMC40XCIpO1xuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XG5cbiAgICBsZXQga2V5ID0gJCh0aGlzKVswXVtcImlkXCJdO1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogJy9hbHN0b20vZG9ud2xvYWRGaWxlJyxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAna2V5Jzoga2V5XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZTtcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjFcIik7XG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG5cblxuXG4vL0fDqXJlIGxlIGNsaXF1ZSBkZSBsYSBzdXBwcmVzc2lvblxuJCgnI3Nob3ctZG9uZS1wbHVnJykub24oJ2NsaWNrJywgJy5jb250ZW50LWtleS1uYW1lLXBsdWcgPiBhJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpWzBdW1wiaWRcIl1bMF0gPT0gXCJkXCIpIHtcbiAgICAgICAgZGVsZXRlUGx1ZyhleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJpZFwiXSkpO1xuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpWzBdW1wiaWRcIl0pO1xuICAgIH1cbn0pO1xuLy9FeHRyYWl0IGxlIG5vbWJyZSBkJ3VuZSBzdHJlaW5nXG5mdW5jdGlvbiBleHRyYWl0Tm9tYnJlKHN0cikge1xuICAgIHJldHVybiBOdW1iZXIoc3RyLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKSlcbn1cbi8vU3VwcmVzc2lvbiBkdSBwbHVnIGRhbnMgbGUgdGFibGVhdSBldCBsZSBmcm9udFxuZnVuY3Rpb24gZGVsZXRlUGx1Zyhwb3NpdGlvbikge1xuICAgIExpc3RlUGx1Zy5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICQoJy5jb250ZW50LWtleS1uYW1lLXBsdWcnKS5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZyhMaXN0ZVBsdWcpXG4gICAgTGlzdGVQbHVnLmZvckVhY2god3JpdGVQbHVnKTtcbn1cblxuZnVuY3Rpb24gd3JpdGVQbHVnKGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xuICAgIC8vVGVzdCBsJ2V4aXN0ZW5jZSBkZSBsYSBkaXYgZGFucyBsZSBjYXMgb8O5IGVsbGUgZXhpc3RlIGxhIHJlbXBsYWNlIHNpIHBhcyBsYSBtZXQgZW4gcGxhY2VcbiAgICBpZiAoJCgnI2tleS1uYW1lLScgKyBpbmRleCkubGVuZ3RoKSB7XG4gICAgICAgICQoJyNrZXktbmFtZS0nICsgaW5kZXgpLnJlcGxhY2VXaXRoKFwiPHNwYW4gY2xhc3M9J2NvbnRlbnQta2V5LW5hbWUtcGx1ZycgaWQ9J2tleS1uYW1lLVwiICsgaW5kZXggKyBcIic+PHA+XCIgKyBlbGVtZW50Lm5hbWVfcGx1ZyArIFwiPC9wPjxwPlwiICsgZWxlbWVudC5rZXlfcGx1ZyArIFwiPC9wPjxhIGlkPSdkZWxldGUtcGx1Zy1cIiArIGluZGV4ICsgXCInPjxpIGNsYXNzPSdmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlJz48L2k+PC9hPjwvc3Bhbj5cIilcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjc2hvdy1kb25lLXBsdWcnKS5hcHBlbmQoXCI8c3BhbiBjbGFzcz0nY29udGVudC1rZXktbmFtZS1wbHVnJyBpZD0na2V5LW5hbWUtXCIgKyBpbmRleCArIFwiJz48cD5cIiArIGVsZW1lbnQubmFtZV9wbHVnICsgXCI8L3A+PHA+XCIgKyBlbGVtZW50LmtleV9wbHVnICsgXCI8L3A+PGEgaWQ9J2RlbGV0ZS1wbHVnLVwiICsgaW5kZXggKyBcIic+PGkgY2xhc3M9J2ZhcyBmYS10cmFzaC1hbHQgcG91YmVsbGUnPjwvaT48L2E+PC9zcGFuPlwiKTtcbiAgICB9XG5cbn0iLCIvLyBWaWRhZ2UgZGVzIGlucHV0cyBhdXggY2hhbmdlbWVudCBkZSBzZWxlY3RcclxuLy8gJCgnc2VsZWN0W25hbWU9XCJ0cmFpbnNbcHJvamVjdHNdXCJdLCBzZWxlY3RbbmFtZT1cInRyYWluc1t0cmFpblR5cGVdXCJdJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICQoJ2lucHV0W25hbWU9XCJ0cmFpbnNbbmFtZV1cIl0nKS52YWwoJycpO1xyXG4vLyB9KTtcclxuXHJcbi8qTWFzcXVhZ2UgZGUgY2VydGFpbnMgw6lsZW1lbnQgKi9cclxuJCgnI2NyZWF0ZS1lcnRtcy0xJykuaGlkZSgpO1xyXG4kKCcjY3JlYXRlLWVydG1zLTInKS5oaWRlKCk7XHJcbiQoXCIjY3JlYXRlLWVydG1zLXRyYWluLTFcIikuaGlkZSgpO1xyXG4kKCcjY3JlYXRlX3NvdXN0eXBlJykuaGlkZSgpO1xyXG4kKCcjY3JlYXRlX3R5cGUnKS5oaWRlKCk7XHJcbiQoJyNtb2RhbC1ib2R5JykuaGlkZSgpO1xyXG4kKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuJCgnI2Nsb3NlLW1vZGFsLWZvcm0tYmFzZWxpbmUtdHJhaW4nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLmhpZGUoKTtcclxufSlcclxuZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcclxuICAgICQoJyNidG4tYmFzZWxpbmUtJyArIGkpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbn1cclxubGV0IGlkRXF1aXBtZW50ID0gXCJcIixcclxuICAgIGluZGV4RVZDO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IG5vbWJyZV91cmwgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvYWxzdG9tL0luc3RhbmNlQmFzZWxpbmUvJyArIG5vbWJyZV91cmwpIHtcclxuXHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja0Jhc2VsaW5lXCIsICkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICQoJyNzZWxlY3RfYmFzZWxpbmVfMScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3NlbGVjdF9iYXNlbGluZV8yJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAkKCcjc2VsZWN0X2Jhc2VsaW5lXzEnKS52YWwoJycpO1xyXG4gICAgICAgICAgICAkKCcjc2VsZWN0X2Jhc2VsaW5lXzInKS52YWwoJycpO1xyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxuJCgnI3NlbGVjdF90cmFpbicpLnNob3coKTtcclxuJCgnI3NlbGVjdF9sb2NvbW90aXZlJykuc2hvdygpO1xyXG5cclxubGV0IGN1cnJlbnRfY2hvaWNlID0gXCJcIixcclxuICAgIGVydG1zX2xlZnQgPSBmYWxzZSxcclxuICAgIGVydG1zX21pZGRsZSA9IGZhbHNlLFxyXG4gICAgZXJ0bXNfcmlnaHQgPSBmYWxzZTtcclxuXHJcbiQoJyNjbG9zZS1tb2RhbC1iYXNlbGluZS0xJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGVydG1zX3JpZ2h0ID09IHRydWUpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5hZGRDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgIH1cclxuICAgIGVydG1zX2xlZnQgPSBmYWxzZTtcclxufSlcclxuJCgnI2Nsb3NlLW1vZGFsLWJhc2VsaW5lLTInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5oaWRlKCk7XHJcbiAgICBlcnRtc19yaWdodCA9IGZhbHNlO1xyXG59KVxyXG4kKCcjZXJ0bXMtdHJhaW4tMScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGVydG1zX2xlZnQgPSB0cnVlO1xyXG4gICAgZXJ0bXNfbWlkZGxlID0gZmFsc2U7XHJcbiAgICAvL2wnZXJ0bXMgZGUgZ2F1Y2hlIHNlbGVjdGlvbm5lclxyXG4gICAgJCgnI2VydG1zLXRyYWluLTEnKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLXRyYWluLTInKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2xhYmVsLWJhc2VsaW5lLTEnKS50ZXh0KCdCYXNlbGluZSBsZWZ0Jyk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTMnKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnNob3coKTtcclxuICAgIGlmIChlcnRtc19yaWdodCA9PSBmYWxzZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmhpZGUoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgIH1cclxuXHJcblxyXG59KTtcclxuJCgnI2VydG1zLXRyYWluLTInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBsJ2VydG1zIGR1IG1pbGlldSBzZWxlY3Rpb25uZXJcclxuICAgIGVydG1zX2xlZnQgPSBmYWxzZTtcclxuICAgIGVydG1zX3JpZ2h0ID0gZmFsc2U7XHJcbiAgICBlcnRtc19taWRkbGUgPSB0cnVlO1xyXG4gICAgJCgnI2VydG1zLXRyYWluLTInKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLXRyYWluLTEnKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLXRyYWluLTMnKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2xhYmVsLWJhc2VsaW5lLTEnKS50ZXh0KCdCYXNlbGluZSBtaWRsZScpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuaGlkZSgpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuc2hvdygpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuYWRkQ2xhc3MoJ29mZnNldC1tZC0zJyk7XHJcblxyXG59KTtcclxuJCgnI2VydG1zLXRyYWluLTMnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBsJ2VydG1zIGRlIGRyb2l0ZSBzZWxlY3Rpb25uZXJcclxuICAgICQoJyNlcnRtcy10cmFpbi0zJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgIGVydG1zX3JpZ2h0ID0gdHJ1ZTtcclxuICAgIGVydG1zX21pZGRsZSA9IGZhbHNlO1xyXG4gICAgJCgnI2xhYmVsLWJhc2VsaW5lLTInKS50ZXh0KCdCYXNlbGluZSByaWdodCcpO1xyXG4gICAgaWYgKGVydG1zX2xlZnQgPT0gdHJ1ZSAmJiBlcnRtc19taWRkbGUgPT0gZmFsc2UpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTMnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5zaG93KCk7XHJcbiAgICB9IGVsc2UgaWYgKGVydG1zX3JpZ2h0ID09IHRydWUgJiYgZXJ0bXNfbGVmdCA9PSBmYWxzZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtMycpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5hZGRDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnI2VydG1zLXRyYWluLTInKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG59KTtcclxuXHJcblxyXG4kKCcjZXJ0bXMtbG9jby0xJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZXJ0bXNfbGVmdCA9IHRydWU7XHJcbiAgICBpZiAoZXJ0bXNfcmlnaHQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgJCgnI2xhYmVsLWJhc2VsaW5lLTEnKS50ZXh0KCdCYXNlbGluZSBsZWZ0Jyk7XHJcbiAgICAkKCcjZXJ0bXMtbG9jby0xJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy1sb2NvLTInKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0xJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICQoJyNidG4tYmFzZWxpbmUtMycpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbn0pO1xyXG4kKCcjZXJ0bXMtbG9jby0yJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZXJ0bXNfcmlnaHQgPSB0cnVlO1xyXG4gICAgJCgnI2xhYmVsLWJhc2VsaW5lLTInKS50ZXh0KCdCYXNlbGluZSByaWdodCcpO1xyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0zJykuY3NzKCdvcGFjaXR5JywgJzEnKVxyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0xJykuY3NzKCdvcGFjaXR5JywgJzAnKVxyXG4gICAgJCgnI2VydG1zLWxvY28tMicpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtbG9jby0xJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgIGlmIChlcnRtc19sZWZ0ID09IHRydWUpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuXHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5hZGRDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5zaG93KCk7XHJcblxyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG4vL1JlY3VwZXJlIGxlIHNlbGVjdCBkZSBsYSBiYXNlbGluZSBldCBsZSBtZXQgZW4gdmlzdWVsXHJcbiQoJyNhZGQtYmFzZWxpbmUtMScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIGlmIChlcnRtc19taWRkbGUpIHtcclxuICAgICAgICAkKCcjZXJ0bXMtdHJhaW4tMycpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgJCgnI2VydG1zLXRyYWluLTEnKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgfSBlbHNlIGlmIChlcnRtc19sZWZ0KSB7XHJcbiAgICAgICAgJCgnI2VydG1zLXRyYWluLTInKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgfVxyXG4gICAgLy8gJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgbGV0IGlkQmFzZWxpbmUgPSAkKCcjc2VsZWN0X2Jhc2VsaW5lXzEgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcbiAgICAkKCcjdGl0bGVfYmFzZWxpbmVfbW9kYWwnKS5odG1sKCQoJyNzZWxlY3RfYmFzZWxpbmVfMSBvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCkpO1xyXG4gICAgLy8gJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vQ2hlY2tFcXVpcGVtZW50cy8nICsgaWRCYXNlbGluZSxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsICcwLjQnKTtcclxuICAgICAgICAgICAgbGV0IEVxdWlwbWVudHMgPSBKU09OLnBhcnNlKHJlc3BvbnNlLmVxdWlwbWVudHMpO1xyXG5cclxuICAgICAgICAgICAgRXF1aXBtZW50cy5mb3JFYWNoKENvdW50TnVtYmVyRXF1aXB0KTtcclxuICAgICAgICAgICAgRXF1aXBtZW50cy5mb3JFYWNoKEZpbmRJbmRleEV2Yyk7XHJcbiAgICAgICAgICAgIEVxdWlwbWVudHMuZm9yRWFjaChyZXR1cm5JbmRleEVsZW1lbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG4kKCcjYWRkLWJhc2VsaW5lLTInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnI2VydG1zLXRyYWluLTInKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG5cclxuICAgIC8vICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgIGxldCBuYW1lX2Jhc2VsaW5lXzEgPSAkKCcjc2VsZWN0X2Jhc2VsaW5lXzIgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcbiAgICBjb25zb2xlLmxvZyhuYW1lX2Jhc2VsaW5lXzEpXHJcbiAgICAvLyAkKCcjY29udGVudC1uYW1lLWJhc2VsaW5lLTEnKS5hcHBlbmQoXCI8aDU+XCIgKyBuYW1lX2Jhc2VsaW5lXzEgKyBcIjwvaDU+XCIpXHJcblxyXG59KVxyXG5cclxuLy8gUmVxdWV0ZSBBSkFYIHBvdXIgcmVtcGxpciBsZSBmb3JtdWxhaXJlIGQnw6lxdWlwZW1lbnQgYXZlYyBsJ2VxdWlwZW1lbnQgc2VsZWN0aW9ubmVyXHJcbiQoJyNzaG93LWVxdWlwbWVudCAnKS5vbignY2xpY2snLCAnLmRlc2NyaXB0aW9uID4gLmNvbnRlbnQtZGVzY3JpcHRpb24tZHRyID4gYnV0dG9uJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgaWRFcXVpcG1lbnQgPSBleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJpZFwiXSlcclxuICAgIHZhciAkdGhpcyA9ICQoXCIjZm9ybV9lcXVpcGVtZW50X2VkaXRfYmFzZWxpbmVcIik7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC1iYXNlbGluZS8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKHJlc3BvbnNlW1widHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgZGF0YVskKCcjZXF1aXBlbWVudF9UeXBlJykuYXR0cignbmFtZScpXSA9ICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpIGlucHV0IGF2ZWMgdmFsZXVyIHJlY3UgZGUgbCdlcXVpcGVtZW50XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X1R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfc291c190eXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVtcIlNvdXNUeXBlXCJdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJTb3VzVHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0RUUl9ib2FyZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJkVFJCb2FyZFwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0luZGljZV9EVFInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiaW5kaWNlRFRSXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfTnVtX3NlcmllJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIm51bVNlcmllXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4vL1JlbXBsaXIgbGVzIGlucHV0cyBhdmVjIGxlcyBub3V2ZWxsZXMgdmFsZXVyc1xyXG4kKCcjc291bWlzc2lvbi1lcXVpcGVtZW50LWVkaXQtYmFzZWxpbmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJyksXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG59KVxyXG5sZXQgbmV3X2VxdWlwbWVudF9udW0gPSBcIlwiLFxyXG4gICAgdG90YWxFcXVpcHQgPSBcIlwiLFxyXG4gICAgbmV3X2VxdWlwbWVudF9udW1fc2VyaWUgPSBbXTtcclxuXHJcbi8vIFNvdW1pc3Npb24gZm9ybXVsYWlyZSBkZSB0cmFpblxyXG4kKCcjZm9ybV9lcXVpcGVtZW50X2VkaXRfYmFzZWxpbmUnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJyksXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuXHJcbiAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfSlcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQtYmFzZWxpbmUvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZXF1aXBlbWVudDogZGF0YVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJyNidG4tYWRkLW51bWJlci1zZXJpZScgKyBpZEVxdWlwbWVudCkucmVwbGFjZVdpdGgoXCI8cD5cIiArIHJlc3BvbnNlLm51bVNlcmllICsgXCI8L3A+XCIpXHJcbiAgICAgICAgICAgIG5ld19lcXVpcG1lbnRfbnVtX3NlcmllLnB1c2gocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBuZXdfZXF1aXBtZW50X251bSsrO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuLy9WYWxpZGVyIGwnaW5zdGFuY2UgZGVzIGVxdWlwZW1lbnRzXHJcbiQoJyN2YWxpZC1iYXNlbGluZS10cmFpbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChuZXdfZXF1aXBtZW50X251bSAhPSB0b3RhbEVxdWlwdCkge1xyXG4gICAgICAgIGFsZXJ0KCdwbGVhc2UgZW50ZXIgbnVtIHNlcmllIGJlZm9yZSBpbnN0YW5jZSBiYXNlbGluZScpXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBsZXQgaWRfdHJhaW4gPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgbGV0IGlkX2Jhc2VsaW5lID0gJCgnI3NlbGVjdF9iYXNlbGluZV8xIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpO1xyXG4gICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hbHN0b20vYWRkQmFzZWxpbmVJbnN0YW5jaWVyJyxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpZF90cmFpbjogaWRfdHJhaW4sXHJcbiAgICAgICAgICAgICAgICBiYXNlbGluZTogaWRfYmFzZWxpbmUsXHJcbiAgICAgICAgICAgICAgICBuZXdfZXF1aXB0OiBuZXdfZXF1aXBtZW50X251bV9zZXJpZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hbHN0b20vYmFzZWxpbmUtdHJhaW4vXCIgKyByZXNwb25zZS5pZGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSlcclxuLy8gUmVxdWV0ZSBBSkFYIHBvdXIgcmVtcGxpciBsZSBmb3JtdWxhaXJlIGQnw6lxdWlwZW1lbnQgYXZlYyBsJ2VxdWlwZW1lbnQgc2VsZWN0aW9ubmVyIGluc3RhbmNpZXJcclxuJCgnLmNhcmQnKS5vbignY2xpY2snLCAnLmVkaXQtZGVsZXRlLWVxdWlwZW1lbnQgPiBhJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIGlkRXF1aXBtZW50ID0gZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiY2xhc3NMaXN0XCJdWzBdKVxyXG4gICAgdmFyICR0aGlzID0gJChcIiNmb3JtX2VxdWlwZW1lbnRfZWRpdF9pbnN0YW5jZVwiKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LWluc3RhbmNlLycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbChyZXNwb25zZVtcInR5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgIGRhdGFbJCgnI2VxdWlwZW1lbnRfVHlwZScpLmF0dHIoJ25hbWUnKV0gPSAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaSBpbnB1dCBhdmVjIHZhbGV1ciByZWN1IGRlIGwnZXF1aXBlbWVudFxyXG4gICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9UeXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X3NvdXNfdHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJTb3VzVHlwZVwiXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiU291c1R5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9EVFJfYm9hcmQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiZFRSQm9hcmRcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9JbmRpY2VfRFRSJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImluZGljZURUUlwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X051bV9zZXJpZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJudW1TZXJpZVwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuLy9Gb3JtdWxhaXJlIGQnZWRpdCBkZSBsJ8OpcXVpcGVtZW50XHJcbiQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdF9pbnN0YW5jZScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdCcpLmNzcyhcIm9wYWNpdHlcIiwgXCIwLjRcIik7XHJcblxyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9LFxyXG4gICAgICAgIGFjdGlvbjtcclxuICAgIC8vUmVtcGxpIGRhdGEgYSBwYXJ0aXIgZGVzIHZhbGV1ciBkZXMgaW5wdXRzXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKVxyXG5cclxuICAgICAgICBpZiAobmFtZSAhPSAoXCJlcXVpcGVtZW50W190b2tlbl1cIikgJiYgbmFtZSAhPSAoXCJzb3VtaXNzaW9uX2VxdWlwZW1lbnRcIikpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC1pbnN0YW5jZS8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgJ2VxdWlwZW1lbnQnOiBkYXRhLFxyXG4gICAgICAgICAgICBcInNvdW1pc3Npb25fZWRpdF9lcXVpcGVtZW50XCI6IHRydWUsXHJcbiAgICAgICAgICAgICdpZGVxdWlwbWVudCc6IGlkRXF1aXBtZW50XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG5cclxuZnVuY3Rpb24gRmluZEluZGV4RXZjKGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG4gICAgaW5kZXggPSBlbGVtZW50WydpZCddO1xyXG4gICAgaWYgKGVsZW1lbnRbJ3R5cGUnXVsnaWQnXSA9PSBcIjFcIiAmJiAoZWxlbWVudFsnU3RhdHVzJ10gPT0gdHJ1ZSkpIHtcclxuXHJcbiAgICAgICAgJChcIiNzaG93LWVxdWlwbWVudFwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIGVsZW1lbnRbJ3R5cGUnXVsnbmFtZSddKSk7XHJcbiAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hZGRDbGFzcyhcImRlc2NyaXB0aW9uLVN1YnR5cGVDYXJkXCIpXHJcbiAgICAgICAgaWYgKGVsZW1lbnRbJ1NvdXNUeXBlJ10gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgZWxlbWVudFsnU291c1R5cGUnXVsnbmFtZSddKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY29udGVudC1kZXNjcmlwdGlvbi1kdHJcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImRUUkJvYXJkXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImluZGljZURUUlwiXSArICc8L3A+JylcclxuICAgICAgICBpZiAoZWxlbWVudFsnbnVtU2VyaWUnXSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBzdHlsZT1cInBhZGRpbmc6IDJweFwiIGlkID0gXCJidG4tYWRkLW51bWJlci1zZXJpZScgKyBlbGVtZW50WydpZCddICsgJ1wiID4gQWRkIG51bWJlciBvZiBzZXJpZSA8L2J1dHRvbj4nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFsnbnVtU2VyaWUnXSArICc8L3A+JylcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5kZXhFVkMgPSAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXR1cm5JbmRleEVsZW1lbnQoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcblxyXG5cclxuICAgIGluZGV4ID0gZWxlbWVudFsnaWQnXTtcclxuXHJcbiAgICBpZiAoKGVsZW1lbnRbJ1N0YXR1cyddID09IHRydWUpICYmIGVsZW1lbnRbJ3R5cGUnXVsnaWQnXSAhPSBcIjFcIikge1xyXG5cclxuICAgICAgICAvL1Rlc3QgbCdleGlzdGVuY2UgZGUgbGEgZGl2IGRhbnMgbGUgY2FzIG/DuSBlbGxlIGV4aXN0ZSBsYSByZW1wbGFjZSBzaSBwYXMgbGEgbWV0IGVuIHBsYWNlXHJcbiAgICAgICAgaWYgKCQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVwbGFjZVdpdGgoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+JylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI3Nob3ctZXF1aXBtZW50XCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdGVzdCBzaSBsJ8OpcXVpcGVtZW50IGVzdCBsYSBjYXJ0ZSBvdSBub25cclxuICAgICAgICBpZiAoZWxlbWVudFsndHlwZSddWydpZCddICE9IFwiMlwiKSB7XHJcblxyXG4gICAgICAgICAgICAvL1N3aXRoIHJlcGxhY2VtZW50IGRlIGwnaWQgZHUgdHlwZSBhdmVjIHNvbiBub21cclxuICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIGVsZW1lbnRbJ3R5cGUnXVsnbmFtZSddKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFsnU291c1R5cGUnXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgZWxlbWVudFsnU291c1R5cGUnXVsnbmFtZSddKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY29udGVudC1kZXNjcmlwdGlvbi1kdHJcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZFRSQm9hcmRcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImluZGljZURUUlwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRbJ251bVNlcmllJ10gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPVwicGFkZGluZzogMnB4XCIgaWQgPSBcImJ0bi1hZGQtbnVtYmVyLXNlcmllJyArIGVsZW1lbnRbJ2lkJ10gKyAnXCIgPiBBZGQgbnVtYmVyIG9mIHNlcmllIDwvYnV0dG9uPicpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbJ251bVNlcmllJ10gKyAnPC9wPiA8YSBpZD1cImVkaXQtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IDwvYT4gPGEgaWQ9XCJkZWxldGUtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzID0gXCJmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlXCI+IDwvaT48L2E+JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZUVkaXREZWxldGUoaW5kZXgpKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIC8vRWNyaXMgbGUgbm9tIGR1IHR5cGUgXCJjYXJ0ZVwiIHNvdXMgbGUgdHlwZSAgRVZDXHJcbiAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVR5cGUoNSwgZWxlbWVudFsnU291c1R5cGUnXVsnbmFtZSddKSk7XHJcbiAgICAgICAgICAgIC8vUGFyY291cyBsZSB0eXBlIGRlIHNvdXN0eXBlIFxyXG4gICAgICAgICAgICAvLyAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDYsIGVsZW1lbnRbJ1NvdXNUeXBlJ11bJ25hbWUnXSkpO1xyXG5cclxuICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY29udGVudC1kZXNjcmlwdGlvbi1kdHIgY29udGVudC1kZXNjcmlwdGlvbi1kdHJDYXJkXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImRUUkJvYXJkXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJpbmRpY2VEVFJcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50WydudW1TZXJpZSddID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBzdHlsZT1cInBhZGRpbmc6IDJweFwiIGlkID0gXCJidG4tYWRkLW51bWJlci1zZXJpZScgKyBlbGVtZW50WydpZCddICsgJ1wiID4gQWRkIG51bWJlciBvZiBzZXJpZSA8L2J1dHRvbj4nKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50WydudW1TZXJpZSddICsgJzwvcD4gPGEgaWQ9XCJlZGl0LScgKyBpbmRleCArICdcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiA8L2E+IDxhIGlkPVwiZGVsZXRlLScgKyBpbmRleCArICdcIj48aSBjbGFzcyA9IFwiZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZVwiPiA8L2k+PC9hPicpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZUVkaXREZWxldGUoaW5kZXgpKTtcclxuICAgICAgICAgICAgJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvdW50TnVtYmVyRXF1aXB0KGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG4gICAgdG90YWxFcXVpcHQrKztcclxufVxyXG4vL0V4dHJhaXQgbGUgbm9tYnJlIGQndW5lIHN0cmVpbmdcclxuZnVuY3Rpb24gZXh0cmFpdE5vbWJyZShzdHIpIHtcclxuICAgIHJldHVybiBOdW1iZXIoc3RyLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKSlcclxufVxyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHR5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVR5cGUoc2l6ZSwgbmFtZSkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLVR5cGUgXCIgaWQ9XCJkZXNjcmlwdGlvbi10eXBlIFwiPicgKyBuYW1lICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHNvdXN0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVTdWJ0eXBlKHNpemUsIG5hbWUpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1UeXBlIFwiIGlkPVwiZGVzY3JpcHRpb24tc3ViVHlwZSBcIj4nICsgbmFtZSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpcyBsZSB0aXRyZSBkdSBzb3VzdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlU3VidHlwZUNhcmQoc2l6ZSwgbmFtZSkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLXN1YnR5cGVcIiBpZD1cImRlc2NyaXB0aW9uLXN1YlR5cGUgXCI+JyArIG5hbWUgKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vIC8vRWNyaXQgbGVzIDIgaWNvbnMgZCdlZGl0IGV0IGRlbGV0ZVxyXG4vLyBmdW5jdGlvbiB3cml0ZUVkaXREZWxldGUoaW5kZXgpIHtcclxuLy8gICAgIHJldHVybiAnIDxwIGNsYXNzPVwiZWRpdC1kZWxldGUtZXF1aXBlbWVudFwiPiA8YSBpZD1cImVkaXQtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IDwvYT48L3A+JztcclxuLy8gfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9