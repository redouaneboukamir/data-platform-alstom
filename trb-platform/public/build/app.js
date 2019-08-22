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
/* harmony import */ var _equipement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipement */ "./assets/js/equipement.js");
/* harmony import */ var _equipement__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_equipement__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseline */ "./assets/js/baseline.js");
/* harmony import */ var _baseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baseline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progressBar */ "./assets/js/progressBar.js");
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_progressBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _test_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-upload */ "./assets/js/test-upload.js");
/* harmony import */ var _test_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_test_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _train__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./train */ "./assets/js/train.js");
/* harmony import */ var _train__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_train__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plug */ "./assets/js/plug.js");
/* harmony import */ var _plug__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plug__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fleet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fleet */ "./assets/js/fleet.js");
/* harmony import */ var _fleet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fleet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _logs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logs */ "./assets/js/logs.js");
/* harmony import */ var _logs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_logs__WEBPACK_IMPORTED_MODULE_8__);








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
    var current_;
    console.log(search);

    if (search.length > 0) {
      $.ajax({
        url: '/alstom/search-fleet',
        type: 'POST',
        data: data,
        // async: false,
        dataType: 'json',
        // JSON
        success: function success(response) {
          var tabName = JSON.parse(response.projectsFound);

          if (tabName.length == 0) {
            $('.element-result').remove();
            $('#result-fleet').append('<p class="element-result">Results Not Found</p>');
          } else {
            tabName.forEach(function (element) {
              $('.element-result').remove();
              $('#result-fleet').append('<p class="element-result">' + element.name + '</p>');
            });
          }
        },
        error: function error(xhr, textStatus, errorThrown) {
          'Ajax request failed.';
        }
      });
    } else {
      $('.element-result').remove();
    }
  });
  $('#addTrainsToFleet').click(function () {
    $train_select = $('#select-train-fleet');
    $('#modal-form-train-fleet').css('z-index', '-99');
    $('#wait-spinner').show();
    $.post("/alstom/checkTrains").then(function (response) {
      console.log(response);
      response.forEach(function (element) {
        //Remplissage par les element reçu du controller
        $train_select.append(new Option(element.name, element.id));
      });
    }).done(function () {
      // $train_select.selectpicker('refresh');
      $('#wait-spinner').hide();
      $('#modal-form-train-fleet').css('z-index', '9999');
    });
  });
  $('#valid-train-fleet').on('click', function (e) {
    e.preventDefault();
    var idProject = extraitNombre(window.location.pathname);
    var tabTrains = [];
    tabTrains.push();
    var $this = $('#formulaire-train-fleet');
    var data = {};
    $this.find('[name]').each(function (index, value) {
      var that = $(this),
          name = that.attr('name'),
          value = that.val();
      data[name] = value;
      console.log(data);
    });
    $.ajax({
      url: '/alstom/addTrainToFleet/' + idProject,
      type: 'POST',
      data: data,
      // async: false,
      dataType: 'json',
      // JSON
      success: function success(response) {
        console.log($('#select-train-fleet').val());
      },
      error: function error(xhr, textStatus, errorThrown) {
        'Ajax request failed.';
      }
    });
  });
}); //Extrait le nombre d'une streing

function extraitNombre(str) {
  return Number(str.replace(/[^\d]/g, ""));
}
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9iYXNlbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXF1aXBlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXJ0bXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvbG9hZGluZy1iYXIubHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvcHJlc2V0cy5scyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGVzdC11cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RyYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiaG92ZXIiLCJmaW5kIiwic3RvcCIsImFuaW1hdGUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiaGlkZSIsImxhYmVsQ2xpa2VkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInJlbW92ZSIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJjc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiJHR5cGUiLCJhdHRyIiwiRXF1aXBtZW50cyIsImkiLCJpbmRleEVWQyIsInBvc0luZGV4IiwiUHJlc2VuY2VFVkMiLCJpZEVxdWlwbWVudCIsInRhYkluZGV4RXF1aXB0Iiwic2VsZWN0IiwiY3JlYXRlRWxlbWVudCIsInByZXZpb3VzIiwidGFiRXF1aXBlbWVudFR5cGUiLCJ0YWJFcXVpcGVtZW50U3VidHlwZSIsImRhdGEiLCJ2YWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2hvdyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJlbXB0eSIsImZvckVhY2giLCJlbGVtZW50IiwiYXBwZW5kIiwiT3B0aW9uIiwibmFtZSIsImlkIiwiY2hhbmdlIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGhpcyIsImFjdGlvbiIsImVhY2giLCJpbmRleCIsInZhbHVlIiwidGhhdCIsInB1c2giLCJhamF4IiwidXJsIiwidHlwZSIsInRhYkVxdWlwdHMiLCJhc3luYyIsImRhdGFUeXBlIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInhociIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImlkRXJ0bXMiLCJleHRyYWl0Tm9tYnJlIiwiZXF1aXBlbWVudCIsInJldHVybkluZGV4RWxlbWVudCIsImFsZXJ0IiwiYmFzZWxpbmVOYW1lIiwiYmFzZWxpbmUiLCJ0ZXh0IiwiaWRCYXNlbGluZSIsImhyZWYiLCJkZWxldGVFcXVpcG1lbnQiLCJkb25lIiwicmVsb2FkIiwidmVyc2lvbiIsInRyaWdnZXIiLCJhcnJheSIsImxlbmd0aCIsInJlcGxhY2VXaXRoIiwid3JpdGVUeXBlIiwid3JpdGVTdWJ0eXBlIiwid3JpdGVFZGl0RGVsZXRlIiwic3BsaWNlIiwicG9zaXRpb24iLCJzdHIiLCJOdW1iZXIiLCJyZXBsYWNlIiwic2l6ZSIsIndyaXRlU3VidHlwZUNhcmQiLCJub3QiLCIkZmxlZXQiLCIkdHJhaW4iLCIkZXJ0bXMiLCJ0eXBlTG9nIiwidHlwZUxvZ1RleHQiLCJpc0FkdmFuY2VkVXBsb2FkIiwiZGl2IiwiJGZvcm0iLCIkaW5wdXQiLCIkbGFiZWwiLCJzaG93RmlsZXMiLCJmaWxlcyIsInByZ2JhciIsImxkQmFyIiwiZHJvcHBlZEZpbGVzIiwic3RvcFByb3BhZ2F0aW9uIiwib3JpZ2luYWxFdmVudCIsImRhdGFUcmFuc2ZlciIsIkxvZyIsImhhc0NsYXNzIiwiYWpheERhdGEiLCJGb3JtRGF0YSIsImdldCIsImZpbGUiLCJYTUxIdHRwUmVxdWVzdCIsInVwbG9hZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJsb2FkZWQiLCJsZW5ndGhDb21wdXRhYmxlIiwicGVyY2VudENvbXBsZXRlIiwidG90YWwiLCJzZXQiLCJjYWNoZSIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJjb21wbGV0ZSIsInZhbGlkIiwiaWZyYW1lTmFtZSIsIkRhdGUiLCJnZXRUaW1lIiwiJGlmcmFtZSIsIm9uZSIsIkpTT04iLCJwYXJzZSIsImNvbnRlbnRzIiwicmVtb3ZlQXR0ciIsIiRlcnJvck1zZyIsIkxpc3RlUGx1ZyIsIm5vbWJyZV91cmwiLCJodG1sIiwiUGx1ZyIsIndyaXRlUGx1ZyIsImZpbGVzdCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wRGVzdGluYXRpb24iLCJuYW1lRmlsZSIsInVwbG9hZFN0YXR1cyIsInBhdGgiLCJrZXkiLCJkZWxldGVQbHVnIiwibmFtZV9wbHVnIiwia2V5X3BsdWciLCJjdXJyZW50X2Nob2ljZSIsImVydG1zX2xlZnQiLCJlcnRtc19taWRkbGUiLCJlcnRtc19yaWdodCIsImVxdWlwbWVudHMiLCJDb3VudE51bWJlckVxdWlwdCIsIkZpbmRJbmRleEV2YyIsIm5hbWVfYmFzZWxpbmVfMSIsIm5ld19lcXVpcG1lbnRfbnVtIiwidG90YWxFcXVpcHQiLCJuZXdfZXF1aXBtZW50X251bV9zZXJpZSIsIm51bVNlcmllIiwiaWRfdHJhaW4iLCJpZF9iYXNlbGluZSIsIm5ld19lcXVpcHQiLCJpZGJhc2VsaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENB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QUFDLENBQUMsNkJBQTZCdUQsS0FBOUIsQ0FBRCxDQUFzQzNDLE1BQXRDO0FBQ0g7QUFDSjtBQUNKOztBQUVELFNBQVM2SixpQkFBVCxDQUEyQjlILE9BQTNCLEVBQW9DWSxLQUFwQyxFQUEyQ2dDLEtBQTNDLEVBQWtEO0FBQzlDc0YsYUFBVztBQUNkLEMsQ0FDRDs7O0FBQ0EsU0FBU3BHLGFBQVQsQ0FBdUJzQixHQUF2QixFQUE0QjtBQUN4QixTQUFPQyxNQUFNLENBQUNELEdBQUcsQ0FBQ0UsT0FBSixDQUFZLFFBQVosRUFBc0IsRUFBdEIsQ0FBRCxDQUFiO0FBQ0gsQyxDQUNEOzs7QUFDQSxTQUFTUCxTQUFULENBQW1CUSxJQUFuQixFQUF5QnBELElBQXpCLEVBQStCO0FBQzNCLFNBQU8sT0FBT29ELElBQVAsR0FBYyxvREFBZCxHQUFxRXBELElBQXJFLEdBQTRFLEtBQTVFLEdBQW9Gb0QsSUFBcEYsR0FBMkYsR0FBbEc7QUFDSDs7QUFBQSxDLENBQ0Q7O0FBQ0EsU0FBU1AsWUFBVCxDQUFzQk8sSUFBdEIsRUFBNEJwRCxJQUE1QixFQUFrQztBQUM5QixTQUFPLE9BQU9vRCxJQUFQLEdBQWMsdURBQWQsR0FBd0VwRCxJQUF4RSxHQUErRSxLQUEvRSxHQUF1Rm9ELElBQXZGLEdBQThGLEdBQXJHO0FBQ0g7O0FBQUEsQyxDQUNEOztBQUNBLFNBQVNDLGdCQUFULENBQTBCRCxJQUExQixFQUFnQ3BELElBQWhDLEVBQXNDO0FBQ2xDLFNBQU8sT0FBT29ELElBQVAsR0FBYyx5REFBZCxHQUEwRXBELElBQTFFLEdBQWlGLEtBQWpGLEdBQXlGb0QsSUFBekYsR0FBZ0csR0FBdkc7QUFDSDs7QUFBQSxDLENBQ0Q7QUFDQTtBQUNBO0FBQ0EsSzs7Ozs7Ozs7Ozs7O0FDL2pCQSx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vZXJ0bXMnO1xyXG5pbXBvcnQgJy4vZXF1aXBlbWVudCc7XHJcbmltcG9ydCAnLi9iYXNlbGluZSc7XHJcbmltcG9ydCAnLi9wcm9ncmVzc0Jhcic7XHJcbmltcG9ydCAnLi90ZXN0LXVwbG9hZCc7XHJcbmltcG9ydCAnLi90cmFpbic7XHJcbmltcG9ydCAnLi9wbHVnJztcclxuaW1wb3J0ICcuL2xvZ3MnO1xyXG5cclxuLy8gbG9hZHMgdGhlIGpxdWVyeSBwYWNrYWdlIGZyb20gbm9kZV9tb2R1bGVzXHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuLy8gaW1wb3J0IHRoZSBmdW5jdGlvbiBmcm9tIGdyZWV0LmpzICh0aGUgLmpzIGV4dGVuc2lvbiBpcyBvcHRpb25hbClcclxuLy8gLi8gKG9yIC4uLykgbWVhbnMgdG8gbG9vayBmb3IgYSBsb2NhbCBmaWxlXHJcbiQoJy5wb3N0LW1vZHVsZScpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuZmluZCgnLmRlc2NyaXB0aW9uJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGhlaWdodDogXCJ0b2dnbGVcIixcclxuICAgICAgICBvcGFjaXR5OiBcInRvZ2dsZVwiXHJcbiAgICB9LCAzMDApO1xyXG59KTtcclxuJCgnLnBvc3QtbW9kdWxlLWZsZWV0JykuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5maW5kKCcuZGVzY3JpcHRpb24tZmxlZXQnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgaGVpZ2h0OiBcInRvZ2dsZVwiLFxyXG4gICAgICAgIG9wYWNpdHk6IFwidG9nZ2xlXCJcclxuICAgIH0sIDMwMCk7XHJcbn0pO1xyXG5cclxuJCgnLmZhLWNoZXZyb24tZG93bicpLmhpZGUoKTtcclxubGV0IGxhYmVsQ2xpa2VkID0gZmFsc2U7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ3ByZScpLnJlbW92ZSgpO1xyXG4gICAgJCgnLmJ1dHRvbi1sZWZ0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5zaWRlYmFyJykudG9nZ2xlQ2xhc3MoJ2ZsaXBoJyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5zaWRlYmFyJykuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCd0cmFuc2l0aW9uJywgJ2FsbCAwLjVzIGVhc2UtaW4tb3V0Jyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5yZW1vdmVDbGFzcygnb2Zmc2V0LTEnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdtbC1zbS1hdXRvJyk7XHJcbiAgICAgICAgICAgICQoJy5tYWluLXNob3cnKS5yZW1vdmVDbGFzcygnY29sLWxnLTExJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ3RyYW5zaXRpb24nLCAnYWxsIDAuMTBzIGVhc2UtaW4tb3V0Jyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnb2Zmc2V0LTEnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdtbC1zbS1hdXRvJyk7XHJcbiAgICAgICAgICAgICQoJy5tYWluLXNob3cnKS5hZGRDbGFzcygnY29sLWxnLTExJyk7XHJcbiAgICAgICAgfSlcclxuICAgIC8vICQoJ21haW4nKS5yZW1vdmVDbGFzcygnbWwtc20tYXV0bycpO1xyXG4gICAgJCgnLm5hdi1sYWJlbCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuZmEtY2hldnJvbi1sZWZ0JykuY3NzKCd0cmFuc2Zvcm0nLCAncm90YXRleCg0NWRlZyknKVxyXG4gICAgfSlcclxuXHJcblxyXG59KTsiLCIvL01hc3F1YWdlIGRlIGNlcnRhaW5zIG1vZGFsZSBkZSBsYSBwYWdlXHJcbiQoJyNmb3JtdWxhaXJlLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuJCgnI2NvbnRlbnQtZm9ybS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuXHJcbi8vRGVsY2FyYXRpb24gdmFyaWFibGVcclxuY29uc3QgJHR5cGUgPSAkKCcjZXF1aXBlbWVudF9UeXBlJyk7XHJcbiR0eXBlLmF0dHIoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XHJcblxyXG5sZXQgRXF1aXBtZW50cyA9IFtdLFxyXG4gICAgaSA9IDAsXHJcbiAgICBpbmRleEVWQyA9IDAsXHJcbiAgICBwb3NJbmRleCA9IDAsXHJcbiAgICBQcmVzZW5jZUVWQyA9IGZhbHNlLFxyXG4gICAgaWRFcXVpcG1lbnQgPSAwLFxyXG4gICAgdGFiSW5kZXhFcXVpcHQgPSBbXVxyXG5zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLFxyXG4gICAgcHJldmlvdXMgPSBcIlwiLFxyXG4gICAgdGFiRXF1aXBlbWVudFR5cGUgPSBbXCJFVkNcIiwgXCJDQVJURVwiLCBcIlNFTlNPUlwiLCBcIkRNSVwiXSxcclxuICAgIHRhYkVxdWlwZW1lbnRTdWJ0eXBlID0gW1wiQ09SRVwiLCBcIlRVSVwiLCBcIlNETVVcIiwgXCJTRU5TRVwiLCBcIlRXSU5TXCJdO1xyXG5cclxuLy9WaWRhZ2UgZGVzIGlucHV0cyBhdSByZWZyZXNoIGRlIGxhIHBhZ2VcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgZGF0YVskdHlwZS5hdHRyKCduYW1lJyldID0gJHR5cGUudmFsKClcclxuXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvYWxzdG9tL2NyZWF0ZV9iYXNlbGluZScpIHtcclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgLy8gJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgIC8vICQoJzppbnB1dCcsICcjZm9ybV9lcXVpcGVtZW50Jykubm90KCc6YnV0dG9uLCA6c3VibWl0LCA6cmVzZXQsIDpoaWRkZW4nKS52YWwoJycpO1xyXG59KTtcclxuXHJcbi8vQUpBWCBDaGFuZ2VtZW50IGRlIHNvdXMtdHlwZSBlbiBmb25jdGlvbiBkdSB0eXBlXHJcbiR0eXBlLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgZGF0YVskdHlwZS5hdHRyKCduYW1lJyldID0gJHR5cGUudmFsKClcclxuXHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSlcclxuXHJcbi8vQUpBWCBzb3VtaXNzaW9uIGZvcm11bGFpcmUgZCdham91dCBlcXVpcGVtZW50XHJcbiQoJyNmb3JtX2VxdWlwZW1lbnQnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAvL0VtcMOqY2hlIGxlIGNoYXJnZW1lbnQgZGUgbGEgcGFnZSBzb2lzIGZhaXQgYXV0b21hdGlxdWVtZW50XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9LFxyXG4gICAgICAgIGFjdGlvbjtcclxuICAgIC8vUmVtcGxpIGRhdGEgYSBwYXJ0aXIgZGVzIHZhbGV1ciBkZXMgaW5wdXRzXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKVxyXG5cclxuICAgICAgICBpZiAobmFtZSAhPSAoXCJlcXVpcGVtZW50W190b2tlbl1cIikgJiYgbmFtZSAhPSAoXCJzb3VtaXNzaW9uX2VxdWlwZW1lbnRcIikpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09ICdzb3VtaXNzaW9uX2VkaXRfZXF1aXBlbWVudCcpIHtcclxuICAgICAgICAgICAgYWN0aW9uID0gXCJlZGl0XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWN0aW9uID0gXCJhZGRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgIC8vIFNpIGxlIGZvcm11bGFpcmUgZXN0IHBvdXIgYWpvdWVyIHVuIG5vdXZlbCBlcXVpcGVtZW50XHJcbiAgICBpZiAoYWN0aW9uID09IFwiYWRkXCIpIHtcclxuICAgICAgICAvL1JlbXBsaXMgbGUgdGFibGVhdSBkZXMgw6lxdWlwZW1lbnRzXHJcbiAgICAgICAgRXF1aXBtZW50cy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIC8vRWZmZWN0dXJlIGxhIHJlcXXDqnRlIGFqYXggcG91ciBsJ2Fqb3V0IGQnw6lxdWlwZW1lbnRcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGFiRXF1aXB0czogRXF1aXBtZW50c1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBPdSBzaSBsZSBmb3JtdWxhaXJlIGVzdCBwb3VyIMOpZGl0ZXIgdW4gZXF1aXBlbWVudCBkw6lqYSBleGlzdGFudCBzdXIgbGEgcGFnZSBkZSBsJ2VydG1zIGxpw6kgYSBjZWx1aS1jaVxyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJlZGl0XCIpIHtcclxuICAgICAgICBsZXQgaWRFcnRtcyA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBlcXVpcGVtZW50OiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgaWRFcnRtczogaWRFcnRtc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJy5tb2RhbC1mb290ZXInKS5zaG93KCk7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAvL0JvdWNsZSBsZXMgw6lxdWlwZW1lbnRzIGV0IGxlcyBpbnN0YWxsZSBhdSBmcm9udFxyXG4gICAgRXF1aXBtZW50cy5mb3JFYWNoKHJldHVybkluZGV4RWxlbWVudCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vVmFsaWRhdGlvbiBkZSBiYXNlbGluZSBcclxuJCgnI2NyZWF0ZS1iYXNlbGluZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKFwiI2Jhc2VsaW5lX25hbWVcIikudmFsKCkgPT0gXCJcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgYmFzZWxpbmUgbmFtZSBcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG5sZXQgYmFzZWxpbmVOYW1lO1xyXG4kKCcjZm9ybV9iYXNlbGluZScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG5cclxuICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChuYW1lID09ICdiYXNlbGluZVtuYW1lXScpIHtcclxuXHJcbiAgICAgICAgICAgIGJhc2VsaW5lTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICR0aGlzLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgYmFzZWxpbmU6IGRhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJy50aXRsZS1iYXNlbGluZScpLnRleHQocmVzcG9uc2UuYmFzZWxpbmUpXHJcbiAgICAgICAgICAgICQoJyNjb250ZW50LWZvcm0tZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50JykuaGlkZSgpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG4vL1ZhbGlkYXRpb24gZGUgdG91cyBsZXMgw6lxdWlwZW1lbnRzIGV0IGRlIGxhIGJhc2VsaW5lXHJcbiQoJyN2YWxpZC1hbGwtZXF1aXBtZW50cycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKEVxdWlwbWVudHMgIT0gXCJcIikge1xyXG4gICAgICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjAuNFwiKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hbHN0b20vZmx1c2gtYWxsLWVxdWlwdCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYmFzZWxpbmVOYW1lOiBiYXNlbGluZU5hbWUsXHJcbiAgICAgICAgICAgICAgICB0YWJFcXVpcHRzOiBFcXVpcG1lbnRzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWRCYXNlbGluZSA9IHJlc3BvbnNlLmJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYWxzdG9tL2Jhc2VsaW5lL1wiICsgaWRCYXNlbGluZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgRXF1aXBtZW50cyBiZWZvcmUgdmFsaWQnKTtcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG4vL0fDqXJlIGxlIGNsaXF1ZSBkZSBsYSBzdXBwcmVzc2lvblxyXG4kKCcjc2hvdy1lcXVpcG1lbnQnKS5vbignY2xpY2snLCAnLmVkaXQtZGVsZXRlLWVxdWlwZW1lbnQgPiBhJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcylbMF1bXCJpZFwiXVswXSA9PSBcImRcIikge1xyXG4gICAgICAgIGRlbGV0ZUVxdWlwbWVudChleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJpZFwiXSkpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4vL2NhY2hlIGxlIG1vZGFsIGQnZWRpdCBkJ2VxdWlwZW1lbnRcclxuJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5oaWRlKCk7XHJcbi8vIEdlcmUgbGEgZmVybWV0dXJlIGR1IG1vZGFsIGQnZWRpdCBkJ2VxdWlwZW1lbnRcclxuJCgnI2Nsb3NlLW1vZGFsLWZvcm0tZXF1aXBtZW50LWVkaXQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLmhpZGUoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbn0pXHJcbi8vIFxyXG4vLyBSZXF1ZXRlIEFKQVggcG91ciByZW1wbGlyIGxlIGZvcm11bGFpcmUgZCfDqXF1aXBlbWVudCBhdmVjIGwnZXF1aXBlbWVudCBzZWxlY3Rpb25uZXJcclxuJCgnLmNvbnRlbnQtZGVzY3JpcHRpb24tZHRyJykub24oJ2NsaWNrJywgJy5lZGl0LWRlbGV0ZS1lcXVpcGVtZW50ID4gYScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIGlkRXF1aXBtZW50ID0gZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiY2xhc3NMaXN0XCJdWzBdKVxyXG4gICAgdmFyICR0aGlzID0gJChcIiNmb3JtX2VxdWlwZW1lbnRfZWRpdFwiKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbChyZXNwb25zZVtcInR5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgIGRhdGFbJCgnI2VxdWlwZW1lbnRfVHlwZScpLmF0dHIoJ25hbWUnKV0gPSAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpIGlucHV0IGF2ZWMgdmFsZXVyIHJlY3UgZGUgbCdlcXVpcGVtZW50XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X1R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfc291c190eXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVtcIlNvdXNUeXBlXCJdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJTb3VzVHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0RUUl9ib2FyZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJkVFJCb2FyZFwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0luZGljZV9EVFInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiaW5kaWNlRFRSXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfTnVtX3NlcmllJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIm51bVNlcmllXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4vL0Zvcm11bGFpcmUgZCdlZGl0IGRlIGwnw6lxdWlwZW1lbnRcclxuJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0Jykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjZm9ybV9lcXVpcGVtZW50X2VkaXQnKS5jc3MoXCJvcGFjaXR5XCIsIFwiMC40XCIpO1xyXG4gICAgJChcIiN3YWl0LXNwaW5uZXJcIikuY3NzKFwiei1pbmRleFwiLCBcIjk5OTk5XCIpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9LFxyXG4gICAgICAgIGFjdGlvbjtcclxuICAgIC8vUmVtcGxpIGRhdGEgYSBwYXJ0aXIgZGVzIHZhbGV1ciBkZXMgaW5wdXRzXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKVxyXG5cclxuICAgICAgICBpZiAobmFtZSAhPSAoXCJlcXVpcGVtZW50W190b2tlbl1cIikgJiYgbmFtZSAhPSAoXCJzb3VtaXNzaW9uX2VxdWlwZW1lbnRcIikpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgJ2VxdWlwZW1lbnQnOiBkYXRhLFxyXG4gICAgICAgICAgICBcInNvdW1pc3Npb25fZWRpdF9lcXVpcGVtZW50XCI6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG4vL1JlcXVldGUgQUpBWCBkZSBjcsOpYXRpb24gZGUgdmVyc2lvbiBsb2dpY2llbFxyXG4kKCcjZm9ybV92ZXJzaW9uJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcblxyXG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH0pXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZEJhc2VsaW5lOiBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSksXHJcbiAgICAgICAgICAgIHZlcnNpb246IGRhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyN0aXRsZS12ZXJzaW9uLWVydG1zJykuYXBwZW5kKFwiPHA+XCIgKyByZXNwb25zZS52ZXJzaW9uICsgXCI8L3A+XCIpXHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNjbG9zZS1tb2RhbC1mb3JtLXZlcnNpb24nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJldHVybkluZGV4RWxlbWVudChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuXHJcbiAgICAvL1Rlc3QgbCdleGlzdGVuY2UgZGUgbGEgZGl2IGRhbnMgbGUgY2FzIG/DuSBlbGxlIGV4aXN0ZSBsYSByZW1wbGFjZSBzaSBwYXMgbGEgbWV0IGVuIHBsYWNlXHJcbiAgICBpZiAoJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5sZW5ndGgpIHtcclxuICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlcGxhY2VXaXRoKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjc2hvdy1lcXVpcG1lbnRcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGVzdCBzaSBsJ8OpcXVpcGVtZW50IGVzdCBsYSBjYXJ0ZSBvdSBub25cclxuICAgIGlmIChlbGVtZW50W1wiZXF1aXBlbWVudFtUeXBlXVwiXSAhPSBcIjJcIikge1xyXG4gICAgICAgIC8vU3dpdGggcmVwbGFjZW1lbnQgZGUgbCdpZCBkdSB0eXBlIGF2ZWMgc29uIG5vbVxyXG4gICAgICAgIHN3aXRjaCAoZWxlbWVudFtcImVxdWlwZW1lbnRbVHlwZV1cIl0pIHtcclxuICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlVHlwZSg0LCAwKSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFkZENsYXNzKFwiZGVzY3JpcHRpb24tU3VidHlwZUNhcmRcIilcclxuICAgICAgICAgICAgICAgIGluZGV4RVZDID0gJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIDIpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIDMpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKGVsZW1lbnRbXCJlcXVpcGVtZW50W3NvdXNfdHlwZV1cIl0pIHtcclxuICAgICAgICAgICAgY2FzZSBcIjRcIjpcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCAzKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjVcIjpcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCA0KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0clwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtEVFJfYm9hcmRdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImVxdWlwZW1lbnRbSW5kaWNlX0RUUl1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtOdW1fc2VyaWVdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IEVxdWlwbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChFcXVpcG1lbnRzW2ldW1wiZXF1aXBlbWVudFtUeXBlXVwiXSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgUHJlc2VuY2VFVkMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoUHJlc2VuY2VFVkMpIHtcclxuICAgICAgICAgICAgLy9FY3JpcyBsZSBub20gZHUgdHlwZSBcImNhcnRlXCIgc291cyBsZSB0eXBlICBFVkNcclxuICAgICAgICAgICAgLy8gJChpbmRleEVWQykuYXBwZW5kKHdyaXRlVHlwZSg1LCAxKSk7XHJcbiAgICAgICAgICAgIC8vUGFyY291cyBsZSB0eXBlIGRlIHNvdXN0eXBlIFxyXG4gICAgICAgICAgICBzd2l0Y2ggKGVsZW1lbnRbXCJlcXVpcGVtZW50W3NvdXNfdHlwZV1cIl0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICAgICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDIpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY29udGVudC1kZXNjcmlwdGlvbi1kdHIgY29udGVudC1kZXNjcmlwdGlvbi1kdHJDYXJkXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImVxdWlwZW1lbnRbRFRSX2JvYXJkXVwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtJbmRpY2VfRFRSXVwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtOdW1fc2VyaWVdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZUVkaXREZWxldGUoaW5kZXgpKTtcclxuICAgICAgICAgICAgJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5yZW1vdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIEVWQyBlcXVpcGVtZW50IGJlZm9yZScpO1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICQoJy5tb2RhbC1mb290ZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNjcmVhdGUtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vU3VwcmVzc2lvbiBkZSBsJ8OpcXVpcGVtZW50IGRhbnMgbGUgdGFibGVhdSBldCBsZSBmcm9udFxyXG5mdW5jdGlvbiBkZWxldGVFcXVpcG1lbnQocG9zaXRpb24pIHtcclxuICAgIEVxdWlwbWVudHMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcclxuICAgICQoJy5kZXNjcmlwdGlvbicpLnJlbW92ZSgpO1xyXG4gICAgRXF1aXBtZW50cy5mb3JFYWNoKHJldHVybkluZGV4RWxlbWVudCk7XHJcbn1cclxuLy9FeHRyYWl0IGxlIG5vbWJyZSBkJ3VuZSBzdHJlaW5nXHJcbmZ1bmN0aW9uIGV4dHJhaXROb21icmUoc3RyKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyKHN0ci5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIikpXHJcbn1cclxuLy9FY3JpcyBsZSB0aXRyZSBkdSB0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVUeXBlKHNpemUsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXR5cGUgXCI+JyArIHRhYkVxdWlwZW1lbnRUeXBlW2luZGV4XSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpcyBsZSB0aXRyZSBkdSBzb3VzdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlU3VidHlwZShzaXplLCBpbmRleCkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLVR5cGUgXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyB0YWJFcXVpcGVtZW50U3VidHlwZVtpbmRleF0gKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgc291c3R5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVN1YnR5cGVDYXJkKHNpemUsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tc3VidHlwZVwiIGlkPVwiZGVzY3JpcHRpb24tc3ViVHlwZSBcIj4nICsgdGFiRXF1aXBlbWVudFN1YnR5cGVbaW5kZXhdICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0Vjcml0IGxlcyAyIGljb25zIGQnZWRpdCBldCBkZWxldGVcclxuZnVuY3Rpb24gd3JpdGVFZGl0RGVsZXRlKGluZGV4KSB7XHJcbiAgICByZXR1cm4gJyA8cCBjbGFzcz1cImVkaXQtZGVsZXRlLWVxdWlwZW1lbnRcIj4gPGEgaWQ9XCJlZGl0LScgKyBpbmRleCArICdcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiA8L2E+IDxhIGlkPVwiZGVsZXRlLScgKyBpbmRleCArICdcIj48aSBjbGFzcyA9IFwiZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZVwiPiA8L2k+PC9hPjwvcD4nO1xyXG59O1xyXG5cclxuLyphdSBjbGljayBkZSBsJ2FkZCBFcXVpcG1lbnQgYWZmaWNoZXIgbGUgZm9ybXVsYWlyZSBkJ2Fqb3V0IGQnw6lxdWlwZW1lbnQqL1xyXG4kKCcjY3JlYXRlLWVxdWlwbWVudCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI3Nob3ctZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJy5tb2RhbC1mb290ZXInKS5oaWRlKCk7XHJcbiAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgJCgnOmlucHV0JywgJyNmb3JtX2VxdWlwZW1lbnQnKS5ub3QoJzpidXR0b24sIDpzdWJtaXQsIDpyZXNldCwgOmhpZGRlbicpLnZhbCgnJyk7XHJcbiAgICBwcmV2aW91cyA9IFwiZXF1aXBtZW50XCI7XHJcbn0pO1xyXG4vLyBHZXJlIGxlIGNsaWNrIGR1IHByZXZpb3VzXHJcbiQoXCIjcHJldmlvdXMtZXF1aXBtZW50XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcubW9kYWwtZm9vdGVyJykuc2hvdygpO1xyXG59KTtcclxuJCgnI2NyZWF0ZS1iYXNlbGluZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnLm1vZGFsLWZvb3RlcicpLnNob3coKTtcclxufSlcclxuLy8gRmVybWUgbGUgbW9kYWwgZGUgZm9ybXVsYWlyZSBkJ2Fqb3V0IGQnw6lxdWlwZW1lbnRcclxuJCgnI2Nsb3NlLWVxdWlwZW1lbnQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbn0pIiwiLy9WYWxpZGF0aW9uIGRlIGwnZXJ0bXMgXHJcbiQoJyN2YWxpZC1lcnRtcy1uYW1lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIiNjb250ZW50LWZvcm0tZXJ0bXNcIikuaGlkZSgpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbn0pIiwiLy8gJCgnI2RlbGV0ZS1lcnRtcycpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbi8vICAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbi8vICAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbi8vICAgICAgICAgZGF0YToge30sXHJcbi8vICAgICAgICAgYXN5bmM6IHRydWUsXHJcbi8vICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4vLyAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuLy8gICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gfSkiLCJjb25zdCAkZmxlZXQgPSAkKCcjZmxlZXRfc2VsZWN0Jyk7XHJcbmNvbnN0ICR0cmFpbiA9ICQoJyN0cmFpbl9zZWxlY3QnKTtcclxuY29uc3QgJGVydG1zID0gJCgnI2VydG1zX3NlbGVjdCcpO1xyXG5jb25zdCB0eXBlTG9nID0gJCgnI3NlbGVjdF90eXBlX2xvZycpO1xyXG5jb25zdCB0eXBlTG9nVGV4dCA9ICQoJyNzZWxlY3RfdHlwZV9sb2cnKTtcclxubGV0IGRhdGEgPSB7fTtcclxuLy9kZXRlY3Rpb24gc2kgbGUgYnJvd3NlciBnw6hyZSBsZSBkcmFnJmRyb3BcclxudmFyIGlzQWR2YW5jZWRVcGxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZXR1cm4gKCgnZHJhZ2dhYmxlJyBpbiBkaXYpIHx8ICgnb25kcmFnc3RhcnQnIGluIGRpdiAmJiAnb25kcm9wJyBpbiBkaXYpKSAmJiAnRm9ybURhdGEnIGluIHdpbmRvdyAmJiAnRmlsZVJlYWRlcicgaW4gd2luZG93O1xyXG59KCk7XHJcbnZhciAkZm9ybSA9ICQoJy5kcmFnLWxvZycpO1xyXG52YXIgJGlucHV0ID0gJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKSxcclxuICAgICRsYWJlbCA9ICRmb3JtLmZpbmQoJ2xhYmVsJyksXHJcbiAgICBzaG93RmlsZXMgPSBmdW5jdGlvbiAoZmlsZXMpIHtcclxuICAgICAgICAkbGFiZWwudGV4dChmaWxlcy5sZW5ndGggPiAxID8gKCRpbnB1dC5hdHRyKCdkYXRhLW11bHRpcGxlLWNhcHRpb24nKSB8fCAnJykucmVwbGFjZSgne2NvdW50fScsIGZpbGVzLmxlbmd0aCkgOiBmaWxlc1swXS5uYW1lKTtcclxuICAgIH07XHJcbnR5cGVMb2cuaGlkZSgpO1xyXG50eXBlTG9nVGV4dC5oaWRlKCk7XHJcbiRmb3JtLmhpZGUoKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hbHN0b20vYWRkLWxvZ3MnKSB7XHJcbiAgICAgICAgJGZvcm0uc2hvdygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2Fsc3RvbS9zZWFyY2gtbG9ncycpIHtcclxuICAgICAgICAvL2lkZW50aWZpY2F0aW9uIGRlIGxhIHByb2dyZXNzIGJhclxyXG4gICAgICAgIHByZ2JhciA9IG5ldyBsZEJhcihcIiN0ZXN0LXByb2dyZXNzXCIpO1xyXG5cclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrRmxlZXRcIiwgKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgJGZsZWV0LmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrVHJhaW5CeUZsZWV0XCIsIHtcclxuICAgICAgICAgICAgICAgICdpZCc6ICRmbGVldC52YWwoKVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgJHRyYWluLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tFcnRtc0J5VHJhaW5cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICR0cmFpbi52YWwoKVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRlcnRtcy5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSlcclxuXHJcbiRmbGVldC5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI3NlbGVjdF90eXBlX2xvZycpLmhpZGUoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygkZmxlZXQudmFsKCkpO1xyXG4gICAgJHRyYWluLmVtcHR5KCk7XHJcbiAgICAkZXJ0bXMuZW1wdHkoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrVHJhaW5CeUZsZWV0XCIsIHtcclxuICAgICAgICAnaWQnOiAkZmxlZXQudmFsKClcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAkdHJhaW4uYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgIH0pXHJcbn0pXHJcbiR0cmFpbi5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI3NlbGVjdF90eXBlX2xvZycpLmhpZGUoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygkZmxlZXQudmFsKCkpO1xyXG4gICAgJGVydG1zLmVtcHR5KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja0VydG1zQnlUcmFpblwiLCB7XHJcbiAgICAgICAgJ2lkJzogJHRyYWluLnZhbCgpXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgJGVydG1zLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0eXBlTG9nLnNob3coKTtcclxuICAgICAgICAkZm9ybS5zaG93KCk7XHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5pZiAoaXNBZHZhbmNlZFVwbG9hZCkge1xyXG4gICAgdmFyIGRyb3BwZWRGaWxlcyA9IGZhbHNlO1xyXG4gICAgJGZvcm0uYWRkQ2xhc3MoJ2hhcy1hZHZhbmNlZC11cGxvYWQnKTsgLy8gbGV0dGluZyB0aGUgQ1NTIHBhcnQgdG8ga25vdyBkcmFnJmRyb3AgaXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyXHJcbiAgICAkZm9ybS5vbignZHJhZyBkcmFnc3RhcnQgZHJhZ2VuZCBkcmFnb3ZlciBkcmFnZW50ZXIgZHJhZ2xlYXZlIGRyb3AnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgICAkZm9ybS5vbignZHJhZ292ZXIgZHJhZ2VudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRmb3JtLmFkZENsYXNzKCdpcy1kcmFnb3ZlcicpO1xyXG4gICAgfSk7XHJcbiAgICAkZm9ybS5vbignZHJhZ2xlYXZlIGRyYWdlbmQgZHJvcCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkZm9ybS5yZW1vdmVDbGFzcygnaXMtZHJhZ292ZXInKTtcclxuXHJcbiAgICB9KTtcclxuICAgICRmb3JtLm9uKCdkcm9wJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBkcm9wcGVkRmlsZXMgPSBlLm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xyXG4gICAgICAgICRmb3JtLnRyaWdnZXIoJ3N1Ym1pdCcpO1xyXG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykudGV4dChkcm9wcGVkRmlsZXNbMF0ubmFtZSk7XHJcbiAgICAgICAgJCgnLmxhYmVsLWRyb3AnKS5jc3MoJ2ZvbnQtd2VpZ2h0JywgJ2JvbGQnKTtcclxuICAgIH0pO1xyXG4gICAgJGZvcm0uY2hhbmdlKCdkcm9wJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBkcm9wcGVkRmlsZXMgPSBlLm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xyXG4gICAgICAgICRmb3JtLnRyaWdnZXIoJ3N1Ym1pdCcpO1xyXG4gICAgfSk7XHJcbn1cclxubGV0IExvZyA9IHt9LFxyXG4gICAgaWRCYXNlbGluZSA9IFwiXCI7XHJcbiRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGlmIChkcm9wcGVkRmlsZXMpIHtcclxuXHJcbiAgICAgICAgTG9nWyduYW1lX2xvZyddID0gJCgnI3R5cGVfbG9nX3NlbGVjdCcpLnZhbCgpO1xyXG4gICAgICAgIGlkQmFzZWxpbmUgPSAkKCcjZXJ0bXNfc2VsZWN0JykudmFsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJCgnI2VydG1zX3NlbGVjdCcpLnZhbCgpKTtcclxuICAgICAgICAvLyBQYXJ0aSBkdSB0cmFpdGVtZW50IGR1IGRyYWcgYW4gZHJvcCBmaWxlXHJcbiAgICAgICAgaWYgKCRmb3JtLmhhc0NsYXNzKCdpcy11cGxvYWRpbmcnKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHNob3dGaWxlcyhkcm9wcGVkRmlsZXMpO1xyXG4gICAgICAgICRmb3JtLmFkZENsYXNzKCdpcy11cGxvYWRpbmcnKS5yZW1vdmVDbGFzcygnaXMtZXJyb3InKTtcclxuXHJcbiAgICAgICAgaWYgKGlzQWR2YW5jZWRVcGxvYWQpIHtcclxuICAgICAgICAgICAgdmFyIGFqYXhEYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtLmdldCgwKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZHJvcHBlZEZpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICAkLmVhY2goZHJvcHBlZEZpbGVzLCBmdW5jdGlvbiAoaSwgZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFqYXhEYXRhLmFwcGVuZCgkaW5wdXQuYXR0cignbmFtZScpLCBmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBMb2dbJ2tleV9sb2cnXSA9IGZpbGUubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS91cGxvYWRMb2cnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG5cclxuICAgICAgICAgICAgICAgIHhocjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldnQubG9hZGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC5sZW5ndGhDb21wdXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGVyY2VudENvbXBsZXRlID0gKGV2dC5sb2FkZWQgLyBldnQudG90YWwpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9EbyBzb21ldGhpbmcgd2l0aCB1cGxvYWQgcHJvZ3Jlc3MgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJnYmFyLnNldChwZXJjZW50Q29tcGxldGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBlcmNlbnRDb21wbGV0ZSA9PSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Rlc3QtcHJvZ3Jlc3NcIikuYWRkQ2xhc3MoJ2lzLWJsaW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZ0LmxvYWRlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnRvdGFsID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geGhyO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBhamF4RGF0YSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy11cGxvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3Rlc3QtcHJvZ3Jlc3NcIikucmVtb3ZlQ2xhc3MoJ2lzLWJsaW5rJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoZGF0YS5zdWNjZXNzID09IHRydWUgPyAnaXMtc3VjY2VzcycgOiAnaXMtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMb2cgdGhlIGVycm9yLCBzaG93IGFuIGFsZXJ0LCB3aGF0ZXZlciB3b3JrcyBmb3IgeW91XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3JyeSBib2J5XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgaWZyYW1lTmFtZSA9ICd1cGxvYWRpZnJhbWUnICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICRpZnJhbWUgPSAkKCc8aWZyYW1lIG5hbWU9XCInICsgaWZyYW1lTmFtZSArICdcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9pZnJhbWU+Jyk7XHJcblxyXG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRpZnJhbWUpO1xyXG4gICAgICAgICAgICAkZm9ybS5hdHRyKCd0YXJnZXQnLCBpZnJhbWVOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICRpZnJhbWUub25lKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKCRpZnJhbWUuY29udGVudHMoKS5maW5kKCdib2R5JykudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICRmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy11cGxvYWRpbmcnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSA/ICdpcy1zdWNjZXNzJyA6ICdpcy1lcnJvcicpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3RhcmdldCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLnN1Y2Nlc3MpICRlcnJvck1zZy50ZXh0KGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgJGZvcm0ucmVtb3ZlQXR0cigndGFyZ2V0Jyk7XHJcbiAgICAgICAgICAgICAgICAkaWZyYW1lLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJCgnI3ZhbGlkLWFsbC1sb2dzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgXCIwLjRcIik7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2ZsdXNoLWxvZycsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgJ2xvZyc6IExvZyxcclxuICAgICAgICAgICAgJ2Jhc2VsaW5lJzogaWRCYXNlbGluZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgLy9hc2sgZm9yIHRoZSBzdGF0dXNcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pIiwiJCgnI2Zvcm1fcGx1ZycpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGxldCBiYXNlbGluZSA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygkZm9ybSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vYWRkLXBsdWcnLFxyXG4gICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgIGRhdGFUeXBlOiBcInRleHRcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlkOiBiYXNlbGluZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG4vL0V4dHJhaXQgbGUgbm9tYnJlIGQndW5lIHN0cmVpbmdcclxuZnVuY3Rpb24gZXh0cmFpdE5vbWJyZShzdHIpIHtcclxuICAgIHJldHVybiBOdW1iZXIoc3RyLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKSk7XHJcbn0iLCJyZXF1aXJlISBcIi4vcHJlc2V0c1wiOiB7cHJlc2V0c31cblxuc2ltcGxlLXN0ciA9IChhcnIpIC0+IGFyci5qb2luICcnXG53cmFwID0gKGNvbnRlbnQpIC0+IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxcIiArIGJ0b2EoY29udGVudClcblxuZG8gLT5cbiAgICBtYWtlID1cbiAgICAgICAgaGVhZDogKHZpZXdCb3gpIC0+IFwiXCJcIlxuICAgICAgICAgICAgICAgIDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cInV0Zi04XCI/PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIiN2aWV3Qm94XCI+XG4gICAgICAgICAgICAgICAgXCJcIlwiXG5cbiAgICAgICAgZ3JhZGllbnQ6IChkaXIgPSA0NSwgZHVyID0gMSwgLi4uY29sb3JzKSAtPlxuICAgICAgICAgICAgcmV0ID0gW0BoZWFkIFwiMCAwIDEwMCAxMDBcIl1cbiAgICAgICAgICAgIGxlbiA9IGNvbG9ycy5sZW5ndGggKiA0ICsgMVxuICAgICAgICAgICAgZGlyID0gZGlyICogTWF0aC5QSSAvIDE4MFxuICAgICAgICAgICAgZ3ggPSBNYXRoLmNvcyhkaXIpICoqIDJcbiAgICAgICAgICAgIGd5ID0gTWF0aC5zcXJ0KGd4IC0gZ3ggKiogMilcbiAgICAgICAgICAgIGlmIGRpciA+IE1hdGguUEkgKiAwLjI1ID0+XG4gICAgICAgICAgICAgICAgZ3kgPSBNYXRoLnNpbihkaXIpICoqIDJcbiAgICAgICAgICAgICAgICBneCA9IE1hdGguc3FydChneSAtIGd5ICoqIDIpXG4gICAgICAgICAgICB4ID0gZ3ggKiAxMDBcbiAgICAgICAgICAgIHkgPSBneSAqIDEwMFxuICAgICAgICAgICAgcmV0LnB1c2ggXCJcIlwiPGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVwiZ3JhZGllbnRcIiB4MT1cIjBcIiB4Mj1cIiNneFwiIHkxPVwiMFwiIHkyPVwiI2d5XCI+XCJcIlwiXG4gICAgICAgICAgICBmb3IgaSBmcm9tIDAgdGlsIGxlbiA9PlxuICAgICAgICAgICAgICAgIGlkeCA9IGkgKiAxMDAgLyAobGVuIC0gMSlcbiAgICAgICAgICAgICAgICByZXQucHVzaCBcIlwiXCI8c3RvcCBvZmZzZXQ9XCIje2lkeH0lXCIgc3RvcC1jb2xvcj1cIiN7Y29sb3JzW2kgJSBjb2xvcnMubGVuZ3RoXX1cIi8+XCJcIlwiXG4gICAgICAgICAgICByZXQucHVzaCBcIlwiXCJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz5cbiAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCI0MDBcIiBmaWxsPVwidXJsKFxcI2dyYWRpZW50KVwiPlxuICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwidHJhbnNsYXRlXCIgZnJvbT1cIi0jeCwtI3lcIlxuICAgICAgICAgICAgICAgIHRvPVwiMCwwXCIgZHVyPVwiI3tkdXJ9c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz48L3JlY3Q+PC9zdmc+XG4gICAgICAgICAgICAgICAgXCJcIlwiXG4gICAgICAgICAgICB3cmFwIHJldC5qb2luKFwiXCIpXG5cbiAgICAgICAgc3RyaXBlOiAoYzE9XFwjYjRiNGI0LCBjMj1cXCNlNmU2ZTYsIGR1ciA9IDEpIC0+XG4gICAgICAgICAgICByZXQgPSBbQGhlYWQgXCIwIDAgMTAwIDEwMFwiXVxuICAgICAgICAgICAgcmV0ICsrPSBbXG4gICAgICAgICAgICAgICAgXCJcIlwiPHJlY3QgZmlsbD1cIiNjMlwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIvPlwiXCJcIlxuICAgICAgICAgICAgICAgIFwiXCJcIjxnPjxnPlwiXCJcIlxuICAgICAgICAgICAgICAgIFtcIlwiXCI8cG9seWdvbiBmaWxsPVwiI2MxXCIgXCJcIlwiICtcbiAgICAgICAgICAgICAgICAgXCJcIlwicG9pbnRzPVwiI3stOTAgKyBpICogMjB9LDEwMCAjey0xMDAgKyBpICogMjB9LFwiXCJcIiArXG4gICAgICAgICAgICAgICAgIFwiXCJcIjEwMCAjey02MCArIGkgKiAyMH0sMCAjey01MCArIGkgKiAyMH0sMCBcIi8+XCJcIlwiIGZvciBpIGZyb20gMCB0aWwgMTNdLmpvaW4oXCJcIilcbiAgICAgICAgICAgICAgICBcIlwiXCI8L2c+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiIHR5cGU9XCJ0cmFuc2xhdGVcIiBcIlwiXCJcbiAgICAgICAgICAgICAgICBcIlwiXCJmcm9tPVwiMCwwXCIgdG89XCIyMCwwXCIgZHVyPVwiI3tkdXJ9c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz48L2c+PC9zdmc+XCJcIlwiXG4gICAgICAgICAgICBdLmpvaW4oXCJcIilcbiAgICAgICAgICAgIHdyYXAgcmV0XG5cbiAgICAgICAgYnViYmxlOiAoYzEgPSBcXCMzOWQsIGMyID0gXFwjOWNmLCBjb3VudCA9IDE1LCBkdXIgPSAxLCBzaXplID0gNiwgc3c9MSkgLT5cbiAgICAgICAgICAgIHJldCA9IFtAaGVhZChcIjAgMCAyMDAgMjAwXCIpLCBcIlwiXCI8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiBmaWxsPVwiI2MxXCIvPlwiXCJcIl1cbiAgICAgICAgICAgIGZvciBpIGZyb20gMCB0aWwgY291bnQgPT5cbiAgICAgICAgICAgICAgICBpZHggPSAtKGkgLyBjb3VudCkgKiBkdXJcbiAgICAgICAgICAgICAgICB4ID0gTWF0aC5yYW5kb20hICogMTg0ICsgOFxuICAgICAgICAgICAgICAgIHIgPSAoIE1hdGgucmFuZG9tISAqIDAuNyArIDAuMyApICogc2l6ZVxuICAgICAgICAgICAgICAgIGQgPSBkdXIgKiAoMSArIE1hdGgucmFuZG9tISAqIDAuNSlcbiAgICAgICAgICAgICAgICByZXQucHVzaCBbXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjxjaXJjbGUgY3g9XCIjeFwiIGN5PVwiMFwiIHI9XCIjclwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2MyXCIgc3Ryb2tlLXdpZHRoPVwiI3N3XCI+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeVwiIHZhbHVlcz1cIjE5MDstMTBcIiB0aW1lcz1cIjA7MVwiIFwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCJkdXI9XCIje2R9c1wiIGJlZ2luPVwiI3tpZHh9c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPC9jaXJjbGU+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjxjaXJjbGUgY3g9XCIjeFwiIGN5PVwiMFwiIHI9XCIjclwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2MyXCIgc3Ryb2tlLXdpZHRoPVwiI3N3XCI+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeVwiIHZhbHVlcz1cIjM5MDsxOTBcIiB0aW1lcz1cIjA7MVwiIFwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCJkdXI9XCIje2R9c1wiIGJlZ2luPVwiI3tpZHh9c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPC9jaXJjbGU+XCJcIlwiXG4gICAgICAgICAgICAgICAgXS5qb2luKFwiXCIpXG4gICAgICAgICAgICB3cmFwKHJldC5qb2luKFwiXCIpICsgXCI8L3N2Zz5cIilcblxuICAgIGhhbmRsZXIgPVxuICAgICAgICBxdWV1ZToge31cbiAgICAgICAgcnVubmluZzogZmFsc2VcbiAgICAgICAgbWFpbjogKHRpbWVzdGFtcCkgLT5cbiAgICAgICAgICAgIGtlZXBvbiA9IGZhbHNlXG4gICAgICAgICAgICByZW1vdmVkID0gW11cbiAgICAgICAgICAgIGZvciBrLGZ1bmMgb2YgQHF1ZXVlID0+XG4gICAgICAgICAgICAgICAgcmV0ID0gZnVuYyB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICBpZiAhcmV0ID0+IHJlbW92ZWQucHVzaCBmdW5jXG4gICAgICAgICAgICAgICAga2VlcG9uID0ga2VlcG9uIG9yIHJldFxuICAgICAgICAgICAgZm9yIGssZnVuYyBvZiBAcXVldWUgPT4gaWYgcmVtb3ZlZC5pbmRleE9mKGZ1bmMpID49IDAgPT4gZGVsZXRlIEBxdWV1ZVtrXVxuICAgICAgICAgICAgaWYga2VlcG9uID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSAofj4gQG1haW4gaXQpXG4gICAgICAgICAgICBlbHNlIEBydW5uaW5nID0gZmFsc2VcbiAgICAgICAgYWRkOiAoa2V5LCBmKSAtPlxuICAgICAgICAgICAgaWYgIUBxdWV1ZVtrZXldID0+IEBxdWV1ZVtrZXldID0gZlxuICAgICAgICAgICAgaWYgIUBydW5uaW5nID0+XG4gICAgICAgICAgICAgICAgQHJ1bm5pbmcgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICh+PiBAbWFpbiBpdClcblxuXG4gICAgd2luZG93LmxkQmFyID0gbGRCYXIgPSAoc2VsZWN0b3IsIG9wdGlvbiA9IHt9KSAtPlxuICAgICAgICB4bWxucyA9IHhsaW5rOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICByb290ID0gaWYgdHlwZW9mISBzZWxlY3RvciBpcyBcXFN0cmluZ1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciBzZWxlY3RvclxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZWxlY3RvclxuXG4gICAgICAgIGlmICFyb290LmxkQmFyID0+IHJvb3QubGRCYXIgPSBAXG4gICAgICAgIGVsc2UgcmV0dXJuIHJvb3QubGRCYXJcblxuICAgICAgICBjbHMgPSByb290LmdldEF0dHJpYnV0ZShcXGNsYXNzKSBvciAnJ1xuICAgICAgICBpZiAhfmNscy5pbmRleE9mKCdsZEJhcicpID0+IHJvb3Quc2V0QXR0cmlidXRlIFxcY2xhc3MsIFwiI2NscyBsZEJhclwiXG4gICAgICAgIGlkLXByZWZpeCA9IFwibGRCYXItI3tNYXRoLnJhbmRvbSF0b1N0cmluZyAxNiAuc3Vic3RyaW5nIDJ9XCJcbiAgICAgICAgaWQgPVxuICAgICAgICAgICAga2V5OiBpZC1wcmVmaXhcbiAgICAgICAgICAgIGNsaXA6IFwiI3tpZC1wcmVmaXh9LWNsaXBcIlxuICAgICAgICAgICAgZmlsdGVyOiBcIiN7aWQtcHJlZml4fS1maWx0ZXJcIlxuICAgICAgICAgICAgcGF0dGVybjogXCIje2lkLXByZWZpeH0tcGF0dGVyblwiXG4gICAgICAgICAgICBtYXNrOiBcIiN7aWQtcHJlZml4fS1tYXNrXCJcbiAgICAgICAgICAgIG1hc2stcGF0aDogXCIje2lkLXByZWZpeH0tbWFzay1wYXRoXCJcbiAgICAgICAgZG9tVHJlZSA9IChuLG8pIC0+XG4gICAgICAgICAgICBuID0gbmV3Tm9kZSBuXG4gICAgICAgICAgICBmb3Igayx2IG9mIG8gPT4gaWYgayAhPSBcXGF0dHIgPT4gbi5hcHBlbmRDaGlsZCBkb21UcmVlKGssIHYgb3Ige30pXG4gICAgICAgICAgICBuLmF0dHJzKG8uYXR0ciBvciB7fSlcbiAgICAgICAgICAgIG5cbiAgICAgICAgbmV3Tm9kZSA9IChuKSAtPiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuX19wcm90b19fLl9fcHJvdG9fXy5fX3Byb3RvX19cbiAgICAgICAgICAgIC4udGV4dCA9ICh0KSAtPiBAYXBwZW5kQ2hpbGQgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodClcbiAgICAgICAgICAgIC4uYXR0cnMgPSAobykgLT4gZm9yIGssdiBvZiBvID0+XG4gICAgICAgICAgICAgICAgcmV0ID0gLyhbXjpdKyk6KFteOl0rKS8uZXhlYyhrKVxuICAgICAgICAgICAgICAgIGlmICFyZXQgb3IgIXhtbG5zW3JldC4xXSA9PiBAc2V0QXR0cmlidXRlIGssIHZcbiAgICAgICAgICAgICAgICBlbHNlIEBzZXRBdHRyaWJ1dGVOUyB4bWxuc1tyZXQuMV0sIGssIHZcbiAgICAgICAgICAgIC4uc3R5bGVzID0gKG8pIC0+IGZvciBrLHYgb2YgbyA9PiBAc3R5bGVba10gPSB2XG4gICAgICAgICAgICAuLmFwcGVuZCA9IChuKSAtPiBAYXBwZW5kQ2hpbGQgciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyBcImh0dHA6Ly93d3cudzMub2cvMjAwMC9zdmdcIiwgblxuICAgICAgICAgICAgLi5hdHRyID0gKG4sdikgLT4gaWYgdj8gPT4gQHNldEF0dHJpYnV0ZSBuLCB2IGVsc2UgQGdldEF0dHJpYnV0ZSBuXG4gICAgICAgIGNvbmZpZyA9XG4gICAgICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgICAgIFwiaW1nXCI6ICcnXG4gICAgICAgICAgICBcInBhdGhcIjogJ00xMCAxMEw5MCAxME05MCA4TTkwIDEyJ1xuICAgICAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICAgICAgXCJmaWxsXCI6IFxcIzI1YlxuICAgICAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDNcbiAgICAgICAgICAgIFwicGF0dGVybi1zaXplXCI6IG51bGxcbiAgICAgICAgICAgIFwic3Ryb2tlLWRpclwiOiBcXG5vcm1hbFxuICAgICAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgICAgIFwic3Ryb2tlLXRyYWlsXCI6IFxcI2RkZFxuICAgICAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41XG4gICAgICAgICAgICBcImR1cmF0aW9uXCI6IDFcbiAgICAgICAgICAgIFwiZWFzaW5nXCI6IFxcbGluZWFyXG4gICAgICAgICAgICBcInZhbHVlXCI6IDBcbiAgICAgICAgICAgIFwiaW1nLXNpemVcIjogbnVsbFxuICAgICAgICAgICAgXCJiYm94XCI6IG51bGxcbiAgICAgICAgICAgIFwic2V0LWRpbVwiOiB0cnVlXG4gICAgICAgICAgICBcImFzcGVjdC1yYXRpb1wiOiBcInhNaWRZTWlkXCJcbiAgICAgICAgICAgIFwidHJhbnNpdGlvbi1pblwiOiBmYWxzZVxuICAgICAgICAgICAgXCJtaW5cIjogMFxuICAgICAgICAgICAgXCJtYXhcIjogMTAwXG4gICAgICAgICAgICBcInByZWNpc2lvblwiOiAwXG4gICAgICAgICAgICBcInBhZGRpbmdcIjogdW5kZWZpbmVkXG5cbiAgICAgICAgY29uZmlnW1wicHJlc2V0XCJdID0gcm9vdC5hdHRyKFwiZGF0YS1wcmVzZXRcIikgb3Igb3B0aW9uW1wicHJlc2V0XCJdXG5cbiAgICAgICAgaWYgY29uZmlnLnByZXNldD9cbiAgICAgICAgICAgICMgdXNlIHRoZSBkZWZhdWx0IHByZXNldFxuICAgICAgICAgICAgY29uZmlnIDw8PCBwcmVzZXRzW2NvbmZpZy5wcmVzZXRdXG5cbiAgICAgICAgIyBvdmVyd3JpdGUgaWYgdGhlcmUgYXJlIGFyZ3VtZW50cyBwYXNzZWQgdmlhIGRhdGEtKiBhdHRyaWJ1dGVzXG4gICAgICAgIGZvciBhdHRyIG9mIGNvbmZpZ1xuICAgICAgICAgICAgaWYgdGhhdCA9IHJvb3QuYXR0ciBcImRhdGEtI3thdHRyfVwiXG4gICAgICAgICAgICAgICAgY29uZmlnW2F0dHJdID0gdGhhdFxuXG4gICAgICAgIGNvbmZpZyA8PDwgb3B0aW9uXG4gICAgICAgIGlmIGNvbmZpZy5pbWcgPT4gY29uZmlnLnBhdGggPSBudWxsXG5cbiAgICAgICAgaXMtc3Ryb2tlID0gY29uZmlnLnR5cGUgPT0gXFxzdHJva2VcbiAgICAgICAgcGFyc2UtcmVzID0gKHYpIC0+XG4gICAgICAgICAgICBwYXJzZXIgPSAvZGF0YTpsZGJhclxcL3JlcywoW14oKV0rKVxcKChbXildKylcXCkvXG4gICAgICAgICAgICByZXQgPSBwYXJzZXIuZXhlYyh2KVxuICAgICAgICAgICAgaWYgIXJldCA9PiByZXR1cm4gdlxuICAgICAgICAgICAgcmV0ID0gbWFrZVtyZXQuMV0uYXBwbHkgbWFrZSwgcmV0LjIuc3BsaXQoXFwsKVxuICAgICAgICBjb25maWcuZmlsbCA9IHBhcnNlLXJlcyBjb25maWcuZmlsbFxuICAgICAgICBjb25maWcuc3Ryb2tlID0gcGFyc2UtcmVzIGNvbmZpZy5zdHJva2VcbiAgICAgICAgaWYgY29uZmlnW1wic2V0LWRpbVwiXSA9PSBcXGZhbHNlID0+IGNvbmZpZ1tcInNldC1kaW1cIl0gPSBmYWxzZVxuXG4gICAgICAgIGRvbSA9XG4gICAgICAgICAgICBhdHRyOlxuICAgICAgICAgICAgICAgIFwieG1sbnM6eGxpbmtcIjogXFxodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXG4gICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogY29uZmlnW1wiYXNwZWN0LXJhdGlvXCJdXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAgICAgICBkZWZzOlxuICAgICAgICAgICAgICAgIGZpbHRlcjpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLmZpbHRlciwgeDogLTEsIHk6IC0xLCB3aWR0aDogMywgaGVpZ2h0OiAzXG4gICAgICAgICAgICAgICAgICAgIGZlTW9ycGhvbG9neTogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAoaWYgK2NvbmZpZ1tcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCJdPj0wID0+IFxcZGlsYXRlIGVsc2UgXFxlcm9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogTWF0aC5hYnMoK2NvbmZpZ1tcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCJdKVxuICAgICAgICAgICAgICAgICAgICBmZUNvbG9yTWF0cml4OiBhdHRyOiB7dmFsdWVzOiAnMCAwIDAgMCAxICAgIDAgMCAwIDAgMSAgICAwIDAgMCAwIDEgICAgMCAwIDAgMSAwJywgcmVzdWx0OiBcImNtXCJ9XG4gICAgICAgICAgICAgICAgbWFzazpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLm1hc2tcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgICAgICBcInhsaW5rOmhyZWZcIjogY29uZmlnLmltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcInVybChcXCMje2lkLmZpbHRlcn0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAxMDAsIGhlaWdodDogMTAwLCBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBjb25maWdbXCJhc3BlY3QtcmF0aW9cIl1cblxuICAgICAgICAgICAgICAgIGc6XG4gICAgICAgICAgICAgICAgICAgIG1hc2s6XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiBpZDogaWQubWFzay1wYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ6IGNvbmZpZy5wYXRoIG9yIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcXCNmZmZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IFxcI2ZmZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJ1cmwoXFwjI3tpZC5maWx0ZXJ9KVwiXG5cbiAgICAgICAgICAgICAgICBjbGlwUGF0aDpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLmNsaXBcbiAgICAgICAgICAgICAgICAgICAgcmVjdDoge2F0dHI6IGNsYXNzOiBcXG1hc2ssIGZpbGw6IFxcIzAwMH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgICAgICAgICBhdHRyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLnBhdHRlcm4sIHBhdHRlcm5Vbml0czogXFx1c2VyU3BhY2VPblVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgeDowLCB5OiAwLCB3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogYXR0cjogeDogMCwgeTogMCwgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDBcblxuICAgICAgICBzdmcgPSBkb21UcmVlIFxcc3ZnLCBkb21cbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXFxkaXZcbiAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUgXFxjbGFzcywgXFxsZEJhci1sYWJlbFxuICAgICAgICByb290LmFwcGVuZENoaWxkIHN2Z1xuICAgICAgICByb290LmFwcGVuZENoaWxkIHRleHRcblxuICAgICAgICBncm91cCA9IFswLDBdXG4gICAgICAgIGxlbmd0aCA9IDBcblxuICAgICAgICBAZml0ID0gfj5cbiAgICAgICAgICAgIGlmIGNvbmZpZ1tcImJib3hcIl0gPT5cbiAgICAgICAgICAgICAgYm94ID0gdGhhdC5zcGxpdCgnICcpLm1hcCgtPisoaXQudHJpbSEpKVxuICAgICAgICAgICAgICBib3ggPSB7eDogYm94LjAsIHk6IGJveC4xLCB3aWR0aDogYm94LjIsIGhlaWdodDogYm94LjN9XG4gICAgICAgICAgICBlbHNlIGJveCA9IGdyb3VwLjEuZ2V0QkJveCFcbiAgICAgICAgICAgIGlmICFib3ggb3IgYm94LndpZHRoID09IDAgb3IgYm94LmhlaWdodCA9PSAwID0+IGJveCA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMH1cbiAgICAgICAgICAgIGQgPSAoTWF0aC5tYXguYXBwbHkoXG4gICAgICAgICAgICAgIG51bGwsIDxbc3Ryb2tlLXdpZHRoIHN0cm9rZS10cmFpbC13aWR0aCBmaWxsLWJhY2tncm91bmQtZXh0cnVkZV0+Lm1hcCgtPmNvbmZpZ1tpdF0pKVxuICAgICAgICAgICAgKSAqIDEuNVxuICAgICAgICAgICAgaWYgY29uZmlnW1wicGFkZGluZ1wiXT8gPT4gZCA9ICtjb25maWdbXCJwYWRkaW5nXCJdXG5cbiAgICAgICAgICAgIHN2Zy5hdHRycyB2aWV3Qm94OiBbYm94LnggLSBkLCBib3gueSAtIGQsIGJveC53aWR0aCArIGQgKiAyLCBib3guaGVpZ2h0ICsgZCAqIDJdLmpvaW4oXCIgXCIpXG4gICAgICAgICAgICBpZiBjb25maWdbXCJzZXQtZGltXCJdID0+IDxbd2lkdGggaGVpZ2h0XT4ubWFwIH4+IGlmICFyb290LnN0eWxlW2l0XSBvciBAZml0W2l0XSA9PlxuICAgICAgICAgICAgICByb290LnN0eWxlW2l0XSA9IFwiI3tib3hbaXRdICsgZCAqIDJ9cHhcIlxuICAgICAgICAgICAgICBAZml0W2l0XSA9IHRydWVcblxuICAgICAgICAgICAgcmVjdCA9IGdyb3VwLjAucXVlcnlTZWxlY3RvciBcXHJlY3RcbiAgICAgICAgICAgIGlmIHJlY3QgPT4gcmVjdC5hdHRycyBkb1xuICAgICAgICAgICAgICAgIHg6IGJveC54IC0gZCwgeTogYm94LnkgLSBkLCB3aWR0aDogYm94LndpZHRoICsgZCAqIDIsIGhlaWdodDogYm94LmhlaWdodCArIGQgKiAyXG5cbiAgICAgICAgaWYgY29uZmlnLnBhdGggPT5cbiAgICAgICAgICAgIGlmIGlzLXN0cm9rZSA9PlxuICAgICAgICAgICAgICAgIGdyb3VwLjAgPSBkb21UcmVlIFxcZywgcGF0aDogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgZDogY29uZmlnLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogXFxub25lXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcXGJhc2VsaW5lXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZ3JvdXAuMCA9IGRvbVRyZWUgXFxnLCByZWN0OiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBcInVybChcXCMje2lkLm1hc2stcGF0aH0pXCIsIGZpbGw6IGNvbmZpZ1tcImZpbGwtYmFja2dyb3VuZFwiXVxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXFxmcmFtZVxuXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQgZ3JvdXAuMFxuICAgICAgICAgICAgZ3JvdXAuMSA9IGRvbVRyZWUgXFxnLCBwYXRoOiBhdHRyOlxuICAgICAgICAgICAgICAgIGQ6IGNvbmZpZy5wYXRoLCBjbGFzczogaWYgaXMtc3Ryb2tlID0+IFxcbWFpbmxpbmUgZWxzZSBcXHNvbGlkXG4gICAgICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogaWYgY29uZmlnLnR5cGUgPT0gXFxmaWxsID0+IFwidXJsKFxcIyN7aWQuY2xpcH0pXCIgZWxzZSAnJ1xuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkIGdyb3VwLjFcbiAgICAgICAgICAgIHBhdGgwID0gZ3JvdXAuMC5xdWVyeVNlbGVjdG9yIChpZiBpcy1zdHJva2UgPT4gXFxwYXRoIGVsc2UgXFxyZWN0KVxuICAgICAgICAgICAgcGF0aDEgPSBncm91cC4xLnF1ZXJ5U2VsZWN0b3IgXFxwYXRoXG4gICAgICAgICAgICBpZiBpcy1zdHJva2UgPT4gcGF0aDEuYXR0cnMgZmlsbDogXFxub25lXG5cbiAgICAgICAgICAgIHBhdGltZyA9IHN2Zy5xdWVyeVNlbGVjdG9yICdwYXR0ZXJuIGltYWdlJ1xuICAgICAgICAgICAgaW1nID0gbmV3IEltYWdlIVxuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIgXFxsb2FkLCAtPlxuICAgICAgICAgICAgICAgIGJveCA9IGlmIGNvbmZpZ1tcInBhdHRlcm4tc2l6ZVwiXSA9PiB7d2lkdGg6ICt0aGF0LCBoZWlnaHQ6ICt0aGF0fVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgaW1nLndpZHRoIGFuZCBpbWcuaGVpZ2h0ID0+IHt3aWR0aDogaW1nLndpZHRoLCBoZWlnaHQ6IGltZy5oZWlnaHR9XG4gICAgICAgICAgICAgICAgZWxzZSB7d2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDB9XG4gICAgICAgICAgICAgICAgc3ZnLnF1ZXJ5U2VsZWN0b3IgXFxwYXR0ZXJuIC5hdHRycyB7d2lkdGg6IGJveC53aWR0aCwgaGVpZ2h0OiBib3guaGVpZ2h0fVxuICAgICAgICAgICAgICAgIHBhdGltZy5hdHRycyB7d2lkdGg6IGJveC53aWR0aCwgaGVpZ2h0OiBib3guaGVpZ2h0fVxuICAgICAgICAgICAgaWYgLy4rXFwuLit8XmRhdGE6Ly5leGVjKGlmICFpcy1zdHJva2UgPT4gY29uZmlnLmZpbGwgZWxzZSBjb25maWcuc3Ryb2tlKSA9PlxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpZiAhaXMtc3Ryb2tlID0+IGNvbmZpZy5maWxsIGVsc2UgY29uZmlnLnN0cm9rZVxuICAgICAgICAgICAgICAgIHBhdGltZy5hdHRycyBcInhsaW5rOmhyZWZcIjogaW1nLnNyYyAjaWYgIWlzLXN0cm9rZSA9PiBjb25maWcuZmlsbCBlbHNlIGNvbmZpZy5zdHJva2VcblxuICAgICAgICAgICAgaWYgaXMtc3Ryb2tlID0+XG4gICAgICAgICAgICAgICAgcGF0aDAuYXR0cnMgc3Ryb2tlOiBjb25maWdbXCJzdHJva2UtdHJhaWxcIl0sIFwic3Ryb2tlLXdpZHRoXCI6IGNvbmZpZ1tcInN0cm9rZS10cmFpbC13aWR0aFwiXVxuICAgICAgICAgICAgICAgIHBhdGgxLmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IGNvbmZpZ1tcInN0cm9rZS13aWR0aFwiXVxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IGlmIC8uK1xcLi4rfF5kYXRhOi8uZXhlYyhjb25maWcuc3Ryb2tlKSA9PiBcInVybChcXCMje2lkLnBhdHRlcm59KVwiIGVsc2UgY29uZmlnLnN0cm9rZVxuICAgICAgICAgICAgaWYgY29uZmlnLmZpbGwgYW5kICFpcy1zdHJva2UgPT5cbiAgICAgICAgICAgICAgICBwYXRoMS5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBpZiAvLitcXC4uK3xeZGF0YTovLmV4ZWMoY29uZmlnLmZpbGwpID0+IFwidXJsKFxcIyN7aWQucGF0dGVybn0pXCIgZWxzZSBjb25maWcuZmlsbFxuXG4gICAgICAgICAgICBsZW5ndGggPSBwYXRoMS5nZXRUb3RhbExlbmd0aCFcbiAgICAgICAgICAgIEBmaXQhXG4gICAgICAgICAgICBAaW5pdGVkID0gdHJ1ZVxuICAgICAgICBlbHNlIGlmIGNvbmZpZy5pbWcgPT5cbiAgICAgICAgICAgIGlmIGNvbmZpZ1tcImltZy1zaXplXCJdID0+XG4gICAgICAgICAgICAgICAgcmV0ID0gY29uZmlnW1wiaW1nLXNpemVcIl0uc3BsaXQoXFwsKVxuICAgICAgICAgICAgICAgIHNpemUgPSB7d2lkdGg6ICtyZXQuMCwgaGVpZ2h0OiArcmV0LjF9XG4gICAgICAgICAgICBlbHNlIHNpemUgPSB7d2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDB9XG5cbiAgICAgICAgICAgIGdyb3VwLjAgPSBkb21UcmVlIFxcZywgcmVjdDogYXR0cjpcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgbWFzazogXCJ1cmwoXFwjI3tpZC5tYXNrfSlcIiwgZmlsbDogY29uZmlnW1wiZmlsbC1iYWNrZ3JvdW5kXCJdXG4gICAgICAgICAgICBzdmcucXVlcnlTZWxlY3RvciAnbWFzayBpbWFnZScgLmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHRcbiAgICAgICAgICAgIGdyb3VwLjEgPSBkb21UcmVlIFxcZywgaW1hZ2U6IGF0dHI6XG4gICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHQsIHg6IDAsIHk6IDAsIHByZXNlcnZlQXNwZWN0UmF0aW86IGNvbmZpZ1tcImFzcGVjdC1yYXRpb1wiXVxuICAgICAgICAgICAgICAgICN3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgeDogMCwgeTogMCwgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJ4TWlkWU1pZFwiXG4gICAgICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogaWYgY29uZmlnLnR5cGUgPT0gXFxmaWxsID0+IFwidXJsKFxcIyN7aWQuY2xpcH0pXCIgZWxzZSAnJ1xuICAgICAgICAgICAgICAgIFwieGxpbms6aHJlZlwiOiBjb25maWcuaW1nLCBjbGFzczogXFxzb2xpZFxuICAgICAgICAgICAgaW1nID0gbmV3IEltYWdlIVxuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIgXFxsb2FkLCB+PlxuICAgICAgICAgICAgICAgIGlmIGNvbmZpZ1tcImltZy1zaXplXCJdID0+XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGNvbmZpZ1tcImltZy1zaXplXCJdLnNwbGl0KFxcLClcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHt3aWR0aDogK3JldC4wLCBoZWlnaHQ6ICtyZXQuMX1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIGltZy53aWR0aCBhbmQgaW1nLmhlaWdodCA9PiBzaXplID0ge3dpZHRoOiBpbWcud2lkdGgsIGhlaWdodDogaW1nLmhlaWdodH1cbiAgICAgICAgICAgICAgICBlbHNlIHNpemUgPSB7d2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDB9XG4gICAgICAgICAgICAgICAgc3ZnLnF1ZXJ5U2VsZWN0b3IgJ21hc2sgaW1hZ2UnIC5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodFxuICAgICAgICAgICAgICAgIGdyb3VwLjEucXVlcnlTZWxlY3RvciAnaW1hZ2UnIC5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodFxuXG4gICAgICAgICAgICAgICAgQGZpdCFcbiAgICAgICAgICAgICAgICBAc2V0IHVuZGVmaW5lZCwgZmFsc2VcbiAgICAgICAgICAgICAgICBAaW5pdGVkID0gdHJ1ZVxuICAgICAgICAgICAgaW1nLnNyYyA9IGNvbmZpZy5pbWdcbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZCBncm91cC4wXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQgZ3JvdXAuMVxuICAgICAgICBzdmcuYXR0cnMgd2lkdGg6IFxcMTAwJSwgaGVpZ2h0OiBcXDEwMCUgIywgdmlld0JveDogJzAgMCAxMDAgMTAwJ1xuXG4gICAgICAgIEB0cmFuc2l0aW9uID1cbiAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgIHNyYzogMFxuICAgICAgICAgICAgICAgIGRlczogMFxuICAgICAgICAgICAgdGltZToge31cblxuICAgICAgICAgICAgZWFzZTogKHQsYixjLGQpIC0+XG4gICAgICAgICAgICAgICAgdCA9IHQgLyAoZCAqIDAuNSlcbiAgICAgICAgICAgICAgICBpZiB0IDwgMSA9PiByZXR1cm4gYyAqIDAuNSAqIHQgKiB0ICsgYlxuICAgICAgICAgICAgICAgIHQgPSB0IC0gMVxuICAgICAgICAgICAgICAgIHJldHVybiAtYyAqIDAuNSAqICh0Kih0IC0gMikgLSAxKSArIGJcblxuICAgICAgICAgICAgaGFuZGxlcjogKHRpbWUsIGRvVHJhbnNpdGlvbiA9IHRydWUpIC0+XG4gICAgICAgICAgICAgICAgaWYgIUB0aW1lLnNyYz8gPT4gQHRpbWUuc3JjID0gdGltZVxuICAgICAgICAgICAgICAgIFttaW4sbWF4LHByZWNdID0gW2NvbmZpZ1tcIm1pblwiXSwgY29uZmlnW1wibWF4XCJdLDEvY29uZmlnW1wicHJlY2lzaW9uXCJdXVxuICAgICAgICAgICAgICAgIFtkdiwgZHQsIGR1cl0gPSBbQHZhbHVlLmRlcyAtIEB2YWx1ZS5zcmMsICh0aW1lIC0gQHRpbWUuc3JjKSAqIDAuMDAxLCArY29uZmlnW1wiZHVyYXRpb25cIl0gb3IgMV1cbiAgICAgICAgICAgICAgICB2ID0gaWYgZG9UcmFuc2l0aW9uID0+IEBlYXNlKGR0LCBAdmFsdWUuc3JjLCBkdiwgZHVyKSBlbHNlIEB2YWx1ZS5kZXNcbiAgICAgICAgICAgICAgICBpZiBjb25maWcucHJlY2lzaW9uID0+IHYgPSBNYXRoLnJvdW5kKHYgKiBwcmVjKSAvIHByZWNcbiAgICAgICAgICAgICAgICBlbHNlIGlmIGRvVHJhbnNpdGlvbiA9PiB2ID0gTWF0aC5yb3VuZCh2KVxuICAgICAgICAgICAgICAgIHYgPj89IG1pblxuICAgICAgICAgICAgICAgIHYgPD89IG1heFxuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSB2XG4gICAgICAgICAgICAgICAgcCA9IDEwMC4wICogKHYgLSBtaW4gKSAvICggbWF4IC0gbWluIClcbiAgICAgICAgICAgICAgICBpZiBpcy1zdHJva2UgPT5cbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHBhdGgxXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLWRhc2hhcnJheVwiOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgY29uZmlnW1wic3Ryb2tlLWRpclwiXSA9PSBcXHJldmVyc2UgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwICN7bGVuZ3RoICogKDEwMCAtIHApICogMC4wMX0gI3tsZW5ndGggKiBwICogMC4wMX0gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSA9PiBcIiN7cCAqIDAuMDEgKiBsZW5ndGh9ICN7KDEwMCAtIHApICogMC4wMSAqIGxlbmd0aCArIDF9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGJveCA9IGdyb3VwLjEuZ2V0QkJveCFcbiAgICAgICAgICAgICAgICAgICAgZGlyID0gY29uZmlnW1wiZmlsbC1kaXJcIl1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSBpZiBkaXIgPT0gXFxidHQgb3IgIWRpciA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnkgKyBib3guaGVpZ2h0ICogKDEwMCAtIHApICogMC4wMVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBib3guaGVpZ2h0ICogcCAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGJveC54LCB3aWR0aDogYm94LndpZHRoXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgZGlyID09IFxcdHRiID0+IGRvXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBib3gueSwgaGVpZ2h0OiBib3guaGVpZ2h0ICogcCAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGJveC54LCB3aWR0aDogYm94LndpZHRoXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgZGlyID09IFxcbHRyID0+IGRvXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBib3gueSwgaGVpZ2h0OiBib3guaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCwgd2lkdGg6IGJveC53aWR0aCAqIHAgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgZGlyID09IFxccnRsID0+IGRvXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBib3gueSwgaGVpZ2h0OiBib3guaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCArIGJveC53aWR0aCAqICgxMDAgLSBwKSAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBib3gud2lkdGggKiBwICogMC4wMVxuICAgICAgICAgICAgICAgICAgICBub2RlID0gc3ZnLnF1ZXJ5U2VsZWN0b3IgXFxyZWN0XG4gICAgICAgICAgICAgICAgbm9kZS5hdHRycyBzdHlsZVxuICAgICAgICAgICAgICAgIGlmIGR0ID49IGR1ciA9PiBkZWxldGUgQHRpbWUuc3JjOyByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgc3RhcnQ6IChzcmMsIGRlcywgZG9UcmFuc2l0aW9uKSAtPlxuICAgICAgICAgICAgICAgIEB2YWx1ZSA8PDwge3NyYywgZGVzfVxuICAgICAgICAgICAgICAgICEhKCByb290Lm9mZnNldFdpZHRoIHx8IHJvb3Qub2Zmc2V0SGVpZ2h0IHx8IHJvb3QuZ2V0Q2xpZW50UmVjdHMhbGVuZ3RoIClcbiAgICAgICAgICAgICAgICBpZiAhZG9UcmFuc2l0aW9uIG9yICEoIHJvb3Qub2Zmc2V0V2lkdGggfHwgcm9vdC5vZmZzZXRIZWlnaHQgfHwgcm9vdC5nZXRDbGllbnRSZWN0cyFsZW5ndGggKSA9PlxuICAgICAgICAgICAgICAgICAgICBAdGltZS5zcmMgPSAwXG4gICAgICAgICAgICAgICAgICAgIEBoYW5kbGVyIDEwMDAsIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIGhhbmRsZXIuYWRkIGlkLmtleSwgKHRpbWUpIH4+IHJldHVybiBAaGFuZGxlciB0aW1lXG5cbiAgICAgICAgQHNldCA9ICh2LGRvVHJhbnNpdGlvbiA9IHRydWUpIC0+XG4gICAgICAgICAgICBzcmMgPSBAdmFsdWUgb3IgMFxuICAgICAgICAgICAgaWYgdj8gPT4gQHZhbHVlID0gdiBlbHNlIHYgPSBAdmFsdWVcbiAgICAgICAgICAgIGRlcyA9IEB2YWx1ZVxuICAgICAgICAgICAgQHRyYW5zaXRpb24uc3RhcnQgc3JjLCBkZXMsIGRvVHJhbnNpdGlvblxuXG4gICAgICAgIEBzZXQgKCtjb25maWcudmFsdWUgb3IgMCksIGNvbmZpZ1tcInRyYW5zaXRpb24taW5cIl0gb3IgZmFsc2VcbiAgICAgICAgQFxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgXFxsb2FkLCAoLT5cbiAgICAgICAgZm9yIG5vZGUgaW4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcXC5sZEJhcikgPT5cbiAgICAgICAgICBpZiAhbm9kZS5sZEJhciA9PiBub2RlLmxkQmFyID0gbmV3IGxkQmFyIG5vZGVcbiAgICApLCBmYWxzZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxkQmFyXG4iLCJleHBvcnQgcHJlc2V0cyA9XG4gICAgcmFpbmJvdzpcbiAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgIFwicGF0aFwiOiAnTTEwIDEwTDkwIDEwJ1xuICAgICAgICBcInN0cm9rZVwiOiAnZGF0YTpsZGJhci9yZXMsZ3JhZGllbnQoMCwxLCNhNTUxZGYsI2ZkNTFhZCwjZmY3ZjgyLCNmZmI4NzQsI2ZmZWI5MCknXG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDEwIDgwIDEwXCJcbiAgICBlbmVyZ3k6XG4gICAgICAgIFwidHlwZVwiOiAnZmlsbCdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTUgNUw4NSA1QTUgNSAwIDAgMSA4NSAxNUwxNSAxNUE1IDUgMCAwIDEgMTUgNSdcbiAgICAgICAgXCJzdHJva2VcIjogXFwjZjAwXG4gICAgICAgIFwiZmlsbFwiOiAnZGF0YTpsZGJhci9yZXMsZ3JhZGllbnQoNDUsMiwjNGU5LCM4ZmIsIzRlOSknXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXCJsdHJcIlxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiBcXCM0NDRcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAxXG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDUgODAgMTBcIlxuICAgIHN0cmlwZTpcbiAgICAgICAgXCJ0eXBlXCI6ICdmaWxsJ1xuICAgICAgICBcInBhdGhcIjogJ00xNSA1TDg1IDVBNSA1IDAgMCAxIDg1IDE1TDE1IDE1QTUgNSAwIDAgMSAxNSA1J1xuICAgICAgICBcInN0cm9rZVwiOiBcXCNmMDBcbiAgICAgICAgXCJmaWxsXCI6ICdkYXRhOmxkYmFyL3JlcyxzdHJpcGUoIzI1YiwjNThlLDEpJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFwibHRyXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMVxuICAgICAgICBcImJib3hcIjogXCIxMCA1IDgwIDEwXCJcbiAgICB0ZXh0OlxuICAgICAgICBcInR5cGVcIjogJ2ZpbGwnXG4gICAgICAgIFwiaW1nXCI6IFwiXCJcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDcwIDIwXCI+PHRleHQgeD1cIjM1XCIgeT1cIjEwXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIiBkb21pbmFudC1iYXNlbGluZT1cImNlbnRyYWxcIiBmb250LWZhbWlseT1cImFyaWFsXCI+TE9BRElORzwvdGV4dD48L3N2Zz5cIlwiXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAxLjNcbiAgICAgICAgXCJwYXR0ZXJuLXNpemVcIjogMTAwXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXCJsdHJcIlxuICAgICAgICBcImltZy1zaXplXCI6IFwiNzAsMjBcIlxuICAgICAgICBcImJib3hcIjogXCIwIDAgNzAgMjBcIlxuICAgIGxpbmU6XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ00xMCAxMEw5MCAxMCdcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDFcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgMTAgODAgMTBcIlxuICAgIGZhbjpcbiAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgIFwicGF0aFwiOiAnTTEwIDkwQTQwIDQwIDAgMCAxIDkwIDkwJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFxcYnR0XG4gICAgICAgIFwiZmlsbFwiOiBcXCMyNWJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogM1xuICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFxcM1xuICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41XG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDUwIDgwIDQwXCJcbiAgICBjaXJjbGU6XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ001MCAxMEE0MCA0MCAwIDAgMSA1MCA5MEE0MCA0MCAwIDAgMSA1MCAxMCdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICBcImZpbGxcIjogXFwjMjViXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDNcbiAgICAgICAgXCJzdHJva2UtZGlyXCI6IFxcbm9ybWFsXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICBcImJib3hcIjogXCIxMCAxMCA4MCA4MFwiXG4gICAgYnViYmxlOlxuICAgICAgICBcInR5cGVcIjogJ2ZpbGwnXG4gICAgICAgIFwicGF0aFwiOiAnTTUwIDEwQTQwIDQwIDAgMCAxIDUwIDkwQTQwIDQwIDAgMCAxIDUwIDEwJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFxcYnR0XG4gICAgICAgIFwiZmlsbFwiOiAnZGF0YTpsZGJhci9yZXMsYnViYmxlKCMzOWQsI2NlZiknXG4gICAgICAgIFwicGF0dGVybi1zaXplXCI6IFwiMTUwXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMlxuICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFxcM1xuICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41XG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDEwIDgwIDgwXCJcbiIsIi8vZMOpZmluaXRpb24gZGVzIHZhcmlhYmxlc1xyXG5sZXQgTGlzdGVQbHVnID0gW10sXHJcbiAgICBpID0gMCxcclxuICAgIHZhbGlkID0gZmFsc2U7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBub21icmVfdXJsID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2Fsc3RvbS9iYXNlbGluZS10cmFpbi8nICsgbm9tYnJlX3VybCkge1xyXG4gICAgICAgIC8vaWRlbnRpZmljYXRpb24gZGUgbGEgcHJvZ3Jlc3MgYmFyXHJcbiAgICAgICAgcHJnYmFyID0gbmV3IGxkQmFyKFwiI3Rlc3QtcHJvZ3Jlc3NcIik7XHJcbiAgICB9O1xyXG59KTtcclxuLy8gRGVjbGFyYXRpb24gZCfDqXZlbmVtZW50IGF2YW50IGNoYXJnZW1lbnQgZGUgbCBhcGFnZVxyXG4kKCcjdmFsaWQtYWxsLXBsdWcnKS5oaWRlKCk7XHJcbiQoJyNjYW5jZWwtYWxsLXBsdWcnKS5oaWRlKCk7XHJcbi8vZGV0ZWN0aW9uIHNpIGxlIGJyb3dzZXIgZ8OocmUgbGUgZHJhZyZkcm9wXHJcbnZhciBpc0FkdmFuY2VkVXBsb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmV0dXJuICgoJ2RyYWdnYWJsZScgaW4gZGl2KSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiBkaXYgJiYgJ29uZHJvcCcgaW4gZGl2KSkgJiYgJ0Zvcm1EYXRhJyBpbiB3aW5kb3cgJiYgJ0ZpbGVSZWFkZXInIGluIHdpbmRvdztcclxufSgpO1xyXG52YXIgJGZvcm0gPSAkKCcuYm94Jyk7XHJcbnZhciAkaW5wdXQgPSAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLFxyXG4gICAgJGxhYmVsID0gJGZvcm0uZmluZCgnbGFiZWwnKSxcclxuICAgIHNob3dGaWxlcyA9IGZ1bmN0aW9uIChmaWxlcykge1xyXG4gICAgICAgICRsYWJlbC50ZXh0KGZpbGVzLmxlbmd0aCA+IDEgPyAoJGlucHV0LmF0dHIoJ2RhdGEtbXVsdGlwbGUtY2FwdGlvbicpIHx8ICcnKS5yZXBsYWNlKCd7Y291bnR9JywgZmlsZXMubGVuZ3RoKSA6IGZpbGVzWzBdLm5hbWUpO1xyXG4gICAgfTtcclxuXHJcbi8vYWpvdXRlciB1biBwbHVnXHJcblxyXG4kKCcjYWRkLWZvcm0tcGx1ZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICQoJyNjYXJkLWNvbnRlbnQtcGx1ZycpLmFwcGVuZChcInRlc3RcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZygkKCcuY29udGVudC1uYW1lLWRyYWctcGx1ZycpKVxyXG5cclxuICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICQoJyNpbnB1dC1uYW1lLXBsdWcnKS52YWwoJycpO1xyXG4gICAgICAgIGRyb3BwZWRGaWxlcyA9IGZhbHNlO1xyXG4gICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy1zdWNjZXNzJyk7XHJcbiAgICAgICAgJCgnLmxhYmVsLWRyb3AnKS5jc3MoJ2ZvbnQtd2VpZ2h0JywgJycpO1xyXG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykuaHRtbCgnPHN0cm9uZz4gQ2hvb3NlIGEgZmlsZSA8L3N0cm9uZz4gPHNwYW4gY2xhc3M9XCJib3hfX2RyYWduZHJvcFwiPm9yIGRyYWcgaXQgaGVyZSA8L3NwYW4+LjwvbGFiZWw+Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtbmFtZS1kcmFnLXBsdWcnKS5zaG93KCk7XHJcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbn0pXHJcbi8vb24gb3V2cmUgbGUgZm9ybSBwb3VyIGFqb3V0ZXJcclxuXHJcbiQoJyNhZGRQbHVncycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG59KTtcclxuaWYgKGlzQWR2YW5jZWRVcGxvYWQpIHtcclxuICAgIHZhciBkcm9wcGVkRmlsZXMgPSBmYWxzZTtcclxuICAgICRmb3JtLmFkZENsYXNzKCdoYXMtYWR2YW5jZWQtdXBsb2FkJyk7IC8vIGxldHRpbmcgdGhlIENTUyBwYXJ0IHRvIGtub3cgZHJhZyZkcm9wIGlzIHN1cHBvcnRlZCBieSB0aGUgYnJvd3NlclxyXG4gICAgJGZvcm0ub24oJ2RyYWcgZHJhZ3N0YXJ0IGRyYWdlbmQgZHJhZ292ZXIgZHJhZ2VudGVyIGRyYWdsZWF2ZSBkcm9wJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG4gICAgJGZvcm0ub24oJ2RyYWdvdmVyIGRyYWdlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkZm9ybS5hZGRDbGFzcygnaXMtZHJhZ292ZXInKTtcclxuICAgIH0pO1xyXG4gICAgJGZvcm0ub24oJ2RyYWdsZWF2ZSBkcmFnZW5kIGRyb3AnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJGZvcm0ucmVtb3ZlQ2xhc3MoJ2lzLWRyYWdvdmVyJyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAkZm9ybS5vbignZHJvcCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgICAgICAkZm9ybS50cmlnZ2VyKCdzdWJtaXQnKTtcclxuICAgICAgICAkKCcubGFiZWwtZHJvcCcpLnRleHQoZHJvcHBlZEZpbGVzWzBdLm5hbWUpO1xyXG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykuY3NzKCdmb250LXdlaWdodCcsICdib2xkJyk7XHJcbiAgICB9KTtcclxuICAgICRmb3JtLmNoYW5nZSgnZHJvcCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgICAgICAkZm9ybS50cmlnZ2VyKCdzdWJtaXQnKTtcclxuICAgIH0pO1xyXG59XHJcbiRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJyN2YWxpZC1wbHVnJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgUGx1ZyA9IHt9O1xyXG4gICAgaWYgKCQoJyNpbnB1dC1uYW1lLXBsdWcnKS52YWwoKSAhPSBcIlwiICYmIGRyb3BwZWRGaWxlcykge1xyXG5cclxuICAgICAgICAkKCcjdmFsaWQtYWxsLXBsdWcnKS5zaG93KCk7XHJcbiAgICAgICAgJCgnI2NhbmNlbC1hbGwtcGx1ZycpLnNob3coKTtcclxuXHJcbiAgICAgICAgUGx1Z1snbmFtZV9wbHVnJ10gPSAkKCcjaW5wdXQtbmFtZS1wbHVnJykudmFsKCk7XHJcblxyXG4gICAgICAgIC8vIFBhcnRpIGR1IHRyYWl0ZW1lbnQgZHUgZHJhZyBhbiBkcm9wIGZpbGVcclxuICAgICAgICBpZiAoJGZvcm0uaGFzQ2xhc3MoJ2lzLXVwbG9hZGluZycpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc2hvd0ZpbGVzKGRyb3BwZWRGaWxlcyk7XHJcbiAgICAgICAgJGZvcm0uYWRkQ2xhc3MoJ2lzLXVwbG9hZGluZycpLnJlbW92ZUNsYXNzKCdpcy1lcnJvcicpO1xyXG5cclxuICAgICAgICBpZiAoaXNBZHZhbmNlZFVwbG9hZCkge1xyXG4gICAgICAgICAgICB2YXIgYWpheERhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm0uZ2V0KDApKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkcm9wcGVkRmlsZXMpIHtcclxuICAgICAgICAgICAgICAgICQuZWFjaChkcm9wcGVkRmlsZXMsIGZ1bmN0aW9uIChpLCBmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWpheERhdGEuYXBwZW5kKCRpbnB1dC5hdHRyKCduYW1lJyksIGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIFBsdWdbJ2tleV9wbHVnJ10gPSBmaWxlLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWpheERhdGEpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS91cGxvYWRGaWxlJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIC8qZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICdmaWxlJyA6IGFqYXhEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICdidWNrZXQnOiAnYXBwbGljYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICd1cGxvYWRfcmVxdWVzdCc6IFwidXBsb2FkXCJcclxuICAgICAgICAgICAgICAgIH0sKi9cclxuICAgICAgICAgICAgICAgIHhocjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldnQubG9hZGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC5sZW5ndGhDb21wdXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGVyY2VudENvbXBsZXRlID0gKGV2dC5sb2FkZWQgLyBldnQudG90YWwpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9EbyBzb21ldGhpbmcgd2l0aCB1cGxvYWQgcHJvZ3Jlc3MgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJnYmFyLnNldChwZXJjZW50Q29tcGxldGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBlcmNlbnRDb21wbGV0ZSA9PSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Rlc3QtcHJvZ3Jlc3NcIikuYWRkQ2xhc3MoJ2lzLWJsaW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZ0LmxvYWRlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnRvdGFsID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geGhyO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBhamF4RGF0YSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy11cGxvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3Rlc3QtcHJvZ3Jlc3NcIikucmVtb3ZlQ2xhc3MoJ2lzLWJsaW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVQbHVnLnB1c2goUGx1Zyk7XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVQbHVnLmZvckVhY2god3JpdGVQbHVnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSA/ICdpcy1zdWNjZXNzJyA6ICdpcy1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNjb250ZW50LW5hbWUtZHJhZy1wbHVnJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhMaXN0ZVBsdWcpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExvZyB0aGUgZXJyb3IsIHNob3cgYW4gYWxlcnQsIHdoYXRldmVyIHdvcmtzIGZvciB5b3VcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvcnJ5IGJvYnlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBpZnJhbWVOYW1lID0gJ3VwbG9hZGlmcmFtZScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgJGlmcmFtZSA9ICQoJzxpZnJhbWUgbmFtZT1cIicgKyBpZnJhbWVOYW1lICsgJ1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2lmcmFtZT4nKTtcclxuXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJGlmcmFtZSk7XHJcbiAgICAgICAgICAgICRmb3JtLmF0dHIoJ3RhcmdldCcsIGlmcmFtZU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgJGlmcmFtZS5vbmUoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoJGlmcmFtZS5jb250ZW50cygpLmZpbmQoJ2JvZHknKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgJGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLXVwbG9hZGluZycpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGRhdGEuc3VjY2VzcyA9PSB0cnVlID8gJ2lzLXN1Y2Nlc3MnIDogJ2lzLWVycm9yJylcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cigndGFyZ2V0Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuc3VjY2VzcykgJGVycm9yTXNnLnRleHQoZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcclxuICAgICAgICAgICAgICAgICRpZnJhbWUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBuYW1lICYgZmlsZSBwbHVnJylcclxuICAgIH1cclxuXHJcblxyXG59KVxyXG5cclxuJCgnI3Rlc3QtdXBsb2FkJykub24oXCJjbGlja1wiLCBcImJ1dHRvblwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZmlsZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKS5maWxlcztcclxuICAgIHZhciB0ZW1wRGVzdGluYXRpb24gPSBcInRlc3RcIlxyXG4gICAgdmFyIG5hbWVGaWxlID0gXCJpbml0XCJcclxuICAgIHZhciB1cGxvYWRTdGF0dXMgPSBcIlBFTkRJTkdcIlxyXG4gICAgLy9PbiBkcmFnIGV0IGRyb3BcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9yZXF1ZXN0RmlsZScsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgJ2J1Y2tldCc6ICdhcHBsaWNhdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdGVtcERlc3RpbmF0aW9uID0gcmVzcG9uc2UucGF0aFxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS91cGxvYWRGaWxlJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAnYnVja2V0JzogJ2FwcGxpY2F0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAndXBsb2FkX3JlcXVlc3QnOiBcInVwbG9hZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdmaWxlbmFtZSc6IG5hbWVGaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICd0ZW1wRGVzdGluYXRpb24nOiB0ZW1wRGVzdGluYXRpb25cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYXNrIGZvciB0aGUgc3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4kKCcjdmFsaWQtYWxsLXBsdWcnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsIFwiMC40XCIpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIGxldCBpZEJhc2VsaW5lID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2ZsdXNoLXBsdWcnLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICdpZEJhc2VsaW5lJzogaWRCYXNlbGluZSxcclxuICAgICAgICAgICAgJ1BsdWdzJzogTGlzdGVQbHVnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vYXNrIGZvciB0aGUgc3RhdHVzXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG4kKCcjY29udGVudC10ci1wbHVnJykub24oJ2NsaWNrJywgJy50ZC10YWJsZSA+IC50ZC1wbHVnJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjAuNFwiKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgbGV0IGtleSA9ICQodGhpcylbMF1bXCJpZFwiXTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9kb253bG9hZEZpbGUnLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICdrZXknOiBrZXlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsIFwiMVwiKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxuXHJcbi8vR8OpcmUgbGUgY2xpcXVlIGRlIGxhIHN1cHByZXNzaW9uXHJcbiQoJyNzaG93LWRvbmUtcGx1ZycpLm9uKCdjbGljaycsICcuY29udGVudC1rZXktbmFtZS1wbHVnID4gYScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpWzBdW1wiaWRcIl1bMF0gPT0gXCJkXCIpIHtcclxuICAgICAgICBkZWxldGVQbHVnKGV4dHJhaXROb21icmUoJCh0aGlzKVswXVtcImlkXCJdKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKVswXVtcImlkXCJdKTtcclxuICAgIH1cclxufSk7XHJcbi8vRXh0cmFpdCBsZSBub21icmUgZCd1bmUgc3RyZWluZ1xyXG5mdW5jdGlvbiBleHRyYWl0Tm9tYnJlKHN0cikge1xyXG4gICAgcmV0dXJuIE51bWJlcihzdHIucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpKVxyXG59XHJcbi8vU3VwcmVzc2lvbiBkdSBwbHVnIGRhbnMgbGUgdGFibGVhdSBldCBsZSBmcm9udFxyXG5mdW5jdGlvbiBkZWxldGVQbHVnKHBvc2l0aW9uKSB7XHJcbiAgICBMaXN0ZVBsdWcuc3BsaWNlKHBvc2l0aW9uLCAxKTtcclxuICAgICQoJy5jb250ZW50LWtleS1uYW1lLXBsdWcnKS5yZW1vdmUoKTtcclxuICAgIGNvbnNvbGUubG9nKExpc3RlUGx1ZylcclxuICAgIExpc3RlUGx1Zy5mb3JFYWNoKHdyaXRlUGx1Zyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlUGx1ZyhlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuICAgIC8vVGVzdCBsJ2V4aXN0ZW5jZSBkZSBsYSBkaXYgZGFucyBsZSBjYXMgb8O5IGVsbGUgZXhpc3RlIGxhIHJlbXBsYWNlIHNpIHBhcyBsYSBtZXQgZW4gcGxhY2VcclxuICAgIGlmICgkKCcja2V5LW5hbWUtJyArIGluZGV4KS5sZW5ndGgpIHtcclxuICAgICAgICAkKCcja2V5LW5hbWUtJyArIGluZGV4KS5yZXBsYWNlV2l0aChcIjxzcGFuIGNsYXNzPSdjb250ZW50LWtleS1uYW1lLXBsdWcnIGlkPSdrZXktbmFtZS1cIiArIGluZGV4ICsgXCInPjxwPlwiICsgZWxlbWVudC5uYW1lX3BsdWcgKyBcIjwvcD48cD5cIiArIGVsZW1lbnQua2V5X3BsdWcgKyBcIjwvcD48YSBpZD0nZGVsZXRlLXBsdWctXCIgKyBpbmRleCArIFwiJz48aSBjbGFzcz0nZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZSc+PC9pPjwvYT48L3NwYW4+XCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNzaG93LWRvbmUtcGx1ZycpLmFwcGVuZChcIjxzcGFuIGNsYXNzPSdjb250ZW50LWtleS1uYW1lLXBsdWcnIGlkPSdrZXktbmFtZS1cIiArIGluZGV4ICsgXCInPjxwPlwiICsgZWxlbWVudC5uYW1lX3BsdWcgKyBcIjwvcD48cD5cIiArIGVsZW1lbnQua2V5X3BsdWcgKyBcIjwvcD48YSBpZD0nZGVsZXRlLXBsdWctXCIgKyBpbmRleCArIFwiJz48aSBjbGFzcz0nZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZSc+PC9pPjwvYT48L3NwYW4+XCIpO1xyXG4gICAgfVxyXG5cclxufSIsIi8vIFZpZGFnZSBkZXMgaW5wdXRzIGF1eCBjaGFuZ2VtZW50IGRlIHNlbGVjdFxyXG4vLyAkKCdzZWxlY3RbbmFtZT1cInRyYWluc1twcm9qZWN0c11cIl0sIHNlbGVjdFtuYW1lPVwidHJhaW5zW3RyYWluVHlwZV1cIl0nKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgJCgnaW5wdXRbbmFtZT1cInRyYWluc1tuYW1lXVwiXScpLnZhbCgnJyk7XHJcbi8vIH0pO1xyXG5cclxuLypNYXNxdWFnZSBkZSBjZXJ0YWlucyDDqWxlbWVudCAqL1xyXG4kKCcjY3JlYXRlLWVydG1zLTEnKS5oaWRlKCk7XHJcbiQoJyNjcmVhdGUtZXJ0bXMtMicpLmhpZGUoKTtcclxuJChcIiNjcmVhdGUtZXJ0bXMtdHJhaW4tMVwiKS5oaWRlKCk7XHJcbiQoJyNjcmVhdGVfc291c3R5cGUnKS5oaWRlKCk7XHJcbiQoJyNjcmVhdGVfdHlwZScpLmhpZGUoKTtcclxuJCgnI21vZGFsLWJvZHknKS5oaWRlKCk7XHJcbiQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4kKCcjY2xvc2UtbW9kYWwtZm9ybS1iYXNlbGluZS10cmFpbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50JykuaGlkZSgpO1xyXG59KVxyXG5mb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0nICsgaSkuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxufVxyXG5sZXQgaWRFcXVpcG1lbnQgPSBcIlwiLFxyXG4gICAgaW5kZXhFVkM7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbm9tYnJlX3VybCA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hbHN0b20vSW5zdGFuY2VCYXNlbGluZS8nICsgbm9tYnJlX3VybCkge1xyXG5cclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrQmFzZWxpbmVcIiwgKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgJCgnI3NlbGVjdF9iYXNlbGluZV8xJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VsZWN0X2Jhc2VsaW5lXzInKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICQoJyNzZWxlY3RfYmFzZWxpbmVfMScpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICQoJyNzZWxlY3RfYmFzZWxpbmVfMicpLnZhbCgnJyk7XHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG4kKCcjc2VsZWN0X3RyYWluJykuc2hvdygpO1xyXG4kKCcjc2VsZWN0X2xvY29tb3RpdmUnKS5zaG93KCk7XHJcblxyXG5sZXQgY3VycmVudF9jaG9pY2UgPSBcIlwiLFxyXG4gICAgZXJ0bXNfbGVmdCA9IGZhbHNlLFxyXG4gICAgZXJ0bXNfbWlkZGxlID0gZmFsc2UsXHJcbiAgICBlcnRtc19yaWdodCA9IGZhbHNlO1xyXG5cclxuJCgnI2Nsb3NlLW1vZGFsLWJhc2VsaW5lLTEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZXJ0bXNfcmlnaHQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmFkZENsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgZXJ0bXNfbGVmdCA9IGZhbHNlO1xyXG59KVxyXG4kKCcjY2xvc2UtbW9kYWwtYmFzZWxpbmUtMicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmhpZGUoKTtcclxuICAgIGVydG1zX3JpZ2h0ID0gZmFsc2U7XHJcbn0pXHJcbiQoJyNlcnRtcy10cmFpbi0xJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZXJ0bXNfbGVmdCA9IHRydWU7XHJcbiAgICBlcnRtc19taWRkbGUgPSBmYWxzZTtcclxuICAgIC8vbCdlcnRtcyBkZSBnYXVjaGUgc2VsZWN0aW9ubmVyXHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMScpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMScpLnRleHQoJ0Jhc2VsaW5lIGxlZnQnKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtMycpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuc2hvdygpO1xyXG4gICAgaWYgKGVydG1zX3JpZ2h0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuaGlkZSgpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG4kKCcjZXJ0bXMtdHJhaW4tMicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGwnZXJ0bXMgZHUgbWlsaWV1IHNlbGVjdGlvbm5lclxyXG4gICAgZXJ0bXNfbGVmdCA9IGZhbHNlO1xyXG4gICAgZXJ0bXNfcmlnaHQgPSBmYWxzZTtcclxuICAgIGVydG1zX21pZGRsZSA9IHRydWU7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMScpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMycpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMScpLnRleHQoJ0Jhc2VsaW5lIG1pZGxlJyk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5oaWRlKCk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5zaG93KCk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5hZGRDbGFzcygnb2Zmc2V0LW1kLTMnKTtcclxuXHJcbn0pO1xyXG4kKCcjZXJ0bXMtdHJhaW4tMycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGwnZXJ0bXMgZGUgZHJvaXRlIHNlbGVjdGlvbm5lclxyXG4gICAgJCgnI2VydG1zLXRyYWluLTMnKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgZXJ0bXNfcmlnaHQgPSB0cnVlO1xyXG4gICAgZXJ0bXNfbWlkZGxlID0gZmFsc2U7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMicpLnRleHQoJ0Jhc2VsaW5lIHJpZ2h0Jyk7XHJcbiAgICBpZiAoZXJ0bXNfbGVmdCA9PSB0cnVlICYmIGVydG1zX21pZGRsZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtMycpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuICAgIH0gZWxzZSBpZiAoZXJ0bXNfcmlnaHQgPT0gdHJ1ZSAmJiBlcnRtc19sZWZ0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC0zJyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmFkZENsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbn0pO1xyXG5cclxuXHJcbiQoJyNlcnRtcy1sb2NvLTEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlcnRtc19sZWZ0ID0gdHJ1ZTtcclxuICAgIGlmIChlcnRtc19yaWdodCA9PSB0cnVlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5zaG93KCk7XHJcbiAgICB9XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMScpLnRleHQoJ0Jhc2VsaW5lIGxlZnQnKTtcclxuICAgICQoJyNlcnRtcy1sb2NvLTEnKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLWxvY28tMicpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTEnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0zJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxufSk7XHJcbiQoJyNlcnRtcy1sb2NvLTInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlcnRtc19yaWdodCA9IHRydWU7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMicpLnRleHQoJ0Jhc2VsaW5lIHJpZ2h0Jyk7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTMnKS5jc3MoJ29wYWNpdHknLCAnMScpXHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTEnKS5jc3MoJ29wYWNpdHknLCAnMCcpXHJcbiAgICAkKCcjZXJ0bXMtbG9jby0yJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy1sb2NvLTEnKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgaWYgKGVydG1zX2xlZnQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG5cclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmFkZENsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbi8vUmVjdXBlcmUgbGUgc2VsZWN0IGRlIGxhIGJhc2VsaW5lIGV0IGxlIG1ldCBlbiB2aXN1ZWxcclxuJCgnI2FkZC1iYXNlbGluZS0xJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgaWYgKGVydG1zX21pZGRsZSkge1xyXG4gICAgICAgICQoJyNlcnRtcy10cmFpbi0zJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICAkKCcjZXJ0bXMtdHJhaW4tMScpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICB9IGVsc2UgaWYgKGVydG1zX2xlZnQpIHtcclxuICAgICAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICB9XHJcbiAgICAvLyAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICBsZXQgaWRCYXNlbGluZSA9ICQoJyNzZWxlY3RfYmFzZWxpbmVfMSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgICQoJyN0aXRsZV9iYXNlbGluZV9tb2RhbCcpLmh0bWwoJCgnI3NlbGVjdF9iYXNlbGluZV8xIG9wdGlvbjpzZWxlY3RlZCcpLnRleHQoKSk7XHJcbiAgICAvLyAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9DaGVja0VxdWlwZW1lbnRzLycgKyBpZEJhc2VsaW5lLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgJzAuNCcpO1xyXG4gICAgICAgICAgICBsZXQgRXF1aXBtZW50cyA9IEpTT04ucGFyc2UocmVzcG9uc2UuZXF1aXBtZW50cyk7XHJcblxyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLmZvckVhY2goQ291bnROdW1iZXJFcXVpcHQpO1xyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLmZvckVhY2goRmluZEluZGV4RXZjKTtcclxuICAgICAgICAgICAgRXF1aXBtZW50cy5mb3JFYWNoKHJldHVybkluZGV4RWxlbWVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuXHJcbiQoJyNhZGQtYmFzZWxpbmUtMicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcblxyXG4gICAgLy8gJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgbGV0IG5hbWVfYmFzZWxpbmVfMSA9ICQoJyNzZWxlY3RfYmFzZWxpbmVfMiBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgIGNvbnNvbGUubG9nKG5hbWVfYmFzZWxpbmVfMSlcclxuICAgIC8vICQoJyNjb250ZW50LW5hbWUtYmFzZWxpbmUtMScpLmFwcGVuZChcIjxoNT5cIiArIG5hbWVfYmFzZWxpbmVfMSArIFwiPC9oNT5cIilcclxuXHJcbn0pXHJcblxyXG4vLyBSZXF1ZXRlIEFKQVggcG91ciByZW1wbGlyIGxlIGZvcm11bGFpcmUgZCfDqXF1aXBlbWVudCBhdmVjIGwnZXF1aXBlbWVudCBzZWxlY3Rpb25uZXJcclxuJCgnI3Nob3ctZXF1aXBtZW50ICcpLm9uKCdjbGljaycsICcuZGVzY3JpcHRpb24gPiAuY29udGVudC1kZXNjcmlwdGlvbi1kdHIgPiBidXR0b24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICBpZEVxdWlwbWVudCA9IGV4dHJhaXROb21icmUoJCh0aGlzKVswXVtcImlkXCJdKVxyXG4gICAgdmFyICR0aGlzID0gJChcIiNmb3JtX2VxdWlwZW1lbnRfZWRpdF9iYXNlbGluZVwiKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LWJhc2VsaW5lLycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwocmVzcG9uc2VbXCJ0eXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICBkYXRhWyQoJyNlcXVpcGVtZW50X1R5cGUnKS5hdHRyKCduYW1lJyldID0gJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGkgaW5wdXQgYXZlYyB2YWxldXIgcmVjdSBkZSBsJ2VxdWlwZW1lbnRcclxuICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfVHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9zb3VzX3R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW1wiU291c1R5cGVcIl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIlNvdXNUeXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfRFRSX2JvYXJkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImRUUkJvYXJkXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfSW5kaWNlX0RUUic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJpbmRpY2VEVFJcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9OdW1fc2VyaWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wibnVtU2VyaWVcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbi8vUmVtcGxpciBsZXMgaW5wdXRzIGF2ZWMgbGVzIG5vdXZlbGxlcyB2YWxldXJzXHJcbiQoJyNzb3VtaXNzaW9uLWVxdWlwZW1lbnQtZWRpdC1iYXNlbGluZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbn0pXHJcbmxldCBuZXdfZXF1aXBtZW50X251bSA9IFwiXCIsXHJcbiAgICB0b3RhbEVxdWlwdCA9IFwiXCIsXHJcbiAgICBuZXdfZXF1aXBtZW50X251bV9zZXJpZSA9IFtdO1xyXG5cclxuLy8gU291bWlzc2lvbiBmb3JtdWxhaXJlIGRlIHRyYWluXHJcbiQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdF9iYXNlbGluZScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG5cclxuICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICB9KVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC1iYXNlbGluZS8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBlcXVpcGVtZW50OiBkYXRhXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnI2J0bi1hZGQtbnVtYmVyLXNlcmllJyArIGlkRXF1aXBtZW50KS5yZXBsYWNlV2l0aChcIjxwPlwiICsgcmVzcG9uc2UubnVtU2VyaWUgKyBcIjwvcD5cIilcclxuICAgICAgICAgICAgbmV3X2VxdWlwbWVudF9udW1fc2VyaWUucHVzaChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG5ld19lcXVpcG1lbnRfbnVtKys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG4vL1ZhbGlkZXIgbCdpbnN0YW5jZSBkZXMgZXF1aXBlbWVudHNcclxuJCgnI3ZhbGlkLWJhc2VsaW5lLXRyYWluJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKG5ld19lcXVpcG1lbnRfbnVtICE9IHRvdGFsRXF1aXB0KSB7XHJcbiAgICAgICAgYWxlcnQoJ3BsZWFzZSBlbnRlciBudW0gc2VyaWUgYmVmb3JlIGluc3RhbmNlIGJhc2VsaW5lJylcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGxldCBpZF90cmFpbiA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICBsZXQgaWRfYmFzZWxpbmUgPSAkKCcjc2VsZWN0X2Jhc2VsaW5lXzEgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS9hZGRCYXNlbGluZUluc3RhbmNpZXInLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkX3RyYWluOiBpZF90cmFpbixcclxuICAgICAgICAgICAgICAgIGJhc2VsaW5lOiBpZF9iYXNlbGluZSxcclxuICAgICAgICAgICAgICAgIG5ld19lcXVpcHQ6IG5ld19lcXVpcG1lbnRfbnVtX3NlcmllXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2Fsc3RvbS9iYXNlbGluZS10cmFpbi9cIiArIHJlc3BvbnNlLmlkYmFzZWxpbmU7XHJcbiAgICAgICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KVxyXG4vLyBSZXF1ZXRlIEFKQVggcG91ciByZW1wbGlyIGxlIGZvcm11bGFpcmUgZCfDqXF1aXBlbWVudCBhdmVjIGwnZXF1aXBlbWVudCBzZWxlY3Rpb25uZXIgaW5zdGFuY2llclxyXG4kKCcuY2FyZCcpLm9uKCdjbGljaycsICcuZWRpdC1kZWxldGUtZXF1aXBlbWVudCA+IGEnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgaWRFcXVpcG1lbnQgPSBleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJjbGFzc0xpc3RcIl1bMF0pXHJcbiAgICB2YXIgJHRoaXMgPSAkKFwiI2Zvcm1fZXF1aXBlbWVudF9lZGl0X2luc3RhbmNlXCIpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQtaW5zdGFuY2UvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKHJlc3BvbnNlW1widHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgZGF0YVskKCcjZXF1aXBlbWVudF9UeXBlJykuYXR0cignbmFtZScpXSA9ICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpIGlucHV0IGF2ZWMgdmFsZXVyIHJlY3UgZGUgbCdlcXVpcGVtZW50XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X1R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfc291c190eXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVtcIlNvdXNUeXBlXCJdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJTb3VzVHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0RUUl9ib2FyZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJkVFJCb2FyZFwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0luZGljZV9EVFInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiaW5kaWNlRFRSXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfTnVtX3NlcmllJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIm51bVNlcmllXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4vL0Zvcm11bGFpcmUgZCdlZGl0IGRlIGwnw6lxdWlwZW1lbnRcclxuJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0X2luc3RhbmNlJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0JykuY3NzKFwib3BhY2l0eVwiLCBcIjAuNFwiKTtcclxuXHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge30sXHJcbiAgICAgICAgYWN0aW9uO1xyXG4gICAgLy9SZW1wbGkgZGF0YSBhIHBhcnRpciBkZXMgdmFsZXVyIGRlcyBpbnB1dHNcclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpXHJcblxyXG4gICAgICAgIGlmIChuYW1lICE9IChcImVxdWlwZW1lbnRbX3Rva2VuXVwiKSAmJiBuYW1lICE9IChcInNvdW1pc3Npb25fZXF1aXBlbWVudFwiKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LWluc3RhbmNlLycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAnZXF1aXBlbWVudCc6IGRhdGEsXHJcbiAgICAgICAgICAgIFwic291bWlzc2lvbl9lZGl0X2VxdWlwZW1lbnRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgJ2lkZXF1aXBtZW50JzogaWRFcXVpcG1lbnRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBGaW5kSW5kZXhFdmMoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICBpbmRleCA9IGVsZW1lbnRbJ2lkJ107XHJcbiAgICBpZiAoZWxlbWVudFsndHlwZSddWydpZCddID09IFwiMVwiICYmIChlbGVtZW50WydTdGF0dXMnXSA9PSB0cnVlKSkge1xyXG5cclxuICAgICAgICAkKFwiI3Nob3ctZXF1aXBtZW50XCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgZWxlbWVudFsndHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFkZENsYXNzKFwiZGVzY3JpcHRpb24tU3VidHlwZUNhcmRcIilcclxuICAgICAgICBpZiAoZWxlbWVudFsnU291c1R5cGUnXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0clwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZFRSQm9hcmRcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiaW5kaWNlRFRSXCJdICsgJzwvcD4nKVxyXG4gICAgICAgIGlmIChlbGVtZW50WydudW1TZXJpZSddID09IFwiXCIpIHtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPVwicGFkZGluZzogMnB4XCIgaWQgPSBcImJ0bi1hZGQtbnVtYmVyLXNlcmllJyArIGVsZW1lbnRbJ2lkJ10gKyAnXCIgPiBBZGQgbnVtYmVyIG9mIHNlcmllIDwvYnV0dG9uPicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50WydudW1TZXJpZSddICsgJzwvcD4nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbmRleEVWQyA9ICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHVybkluZGV4RWxlbWVudChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuXHJcblxyXG4gICAgaW5kZXggPSBlbGVtZW50WydpZCddO1xyXG5cclxuICAgIGlmICgoZWxlbWVudFsnU3RhdHVzJ10gPT0gdHJ1ZSkgJiYgZWxlbWVudFsndHlwZSddWydpZCddICE9IFwiMVwiKSB7XHJcblxyXG4gICAgICAgIC8vVGVzdCBsJ2V4aXN0ZW5jZSBkZSBsYSBkaXYgZGFucyBsZSBjYXMgb8O5IGVsbGUgZXhpc3RlIGxhIHJlbXBsYWNlIHNpIHBhcyBsYSBtZXQgZW4gcGxhY2VcclxuICAgICAgICBpZiAoJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5yZXBsYWNlV2l0aCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjc2hvdy1lcXVpcG1lbnRcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy90ZXN0IHNpIGwnw6lxdWlwZW1lbnQgZXN0IGxhIGNhcnRlIG91IG5vblxyXG4gICAgICAgIGlmIChlbGVtZW50Wyd0eXBlJ11bJ2lkJ10gIT0gXCIyXCIpIHtcclxuXHJcbiAgICAgICAgICAgIC8vU3dpdGggcmVwbGFjZW1lbnQgZGUgbCdpZCBkdSB0eXBlIGF2ZWMgc29uIG5vbVxyXG4gICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgZWxlbWVudFsndHlwZSddWyduYW1lJ10pKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50WydTb3VzVHlwZSddICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0clwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgICAgIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJkVFJCb2FyZFwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiaW5kaWNlRFRSXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFsnbnVtU2VyaWUnXSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgc3R5bGU9XCJwYWRkaW5nOiAycHhcIiBpZCA9IFwiYnRuLWFkZC1udW1iZXItc2VyaWUnICsgZWxlbWVudFsnaWQnXSArICdcIiA+IEFkZCBudW1iZXIgb2Ygc2VyaWUgPC9idXR0b24+JylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFsnbnVtU2VyaWUnXSArICc8L3A+IDxhIGlkPVwiZWRpdC0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gPC9hPiA8YSBpZD1cImRlbGV0ZS0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3MgPSBcImZhcyBmYS10cmFzaC1hbHQgcG91YmVsbGVcIj4gPC9pPjwvYT4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy9FY3JpcyBsZSBub20gZHUgdHlwZSBcImNhcnRlXCIgc291cyBsZSB0eXBlICBFVkNcclxuICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKHdyaXRlVHlwZSg1LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICAgICAgLy9QYXJjb3VzIGxlIHR5cGUgZGUgc291c3R5cGUgXHJcbiAgICAgICAgICAgIC8vICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNiwgZWxlbWVudFsnU291c1R5cGUnXVsnbmFtZSddKSk7XHJcblxyXG4gICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0ciBjb250ZW50LWRlc2NyaXB0aW9uLWR0ckNhcmRcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZFRSQm9hcmRcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImluZGljZURUUlwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRbJ251bVNlcmllJ10gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPVwicGFkZGluZzogMnB4XCIgaWQgPSBcImJ0bi1hZGQtbnVtYmVyLXNlcmllJyArIGVsZW1lbnRbJ2lkJ10gKyAnXCIgPiBBZGQgbnVtYmVyIG9mIHNlcmllIDwvYnV0dG9uPicpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbJ251bVNlcmllJ10gKyAnPC9wPiA8YSBpZD1cImVkaXQtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IDwvYT4gPGEgaWQ9XCJkZWxldGUtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzID0gXCJmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlXCI+IDwvaT48L2E+JylcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ291bnROdW1iZXJFcXVpcHQoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICB0b3RhbEVxdWlwdCsrO1xyXG59XHJcbi8vRXh0cmFpdCBsZSBub21icmUgZCd1bmUgc3RyZWluZ1xyXG5mdW5jdGlvbiBleHRyYWl0Tm9tYnJlKHN0cikge1xyXG4gICAgcmV0dXJuIE51bWJlcihzdHIucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpKVxyXG59XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlVHlwZShzaXplLCBuYW1lKSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXR5cGUgXCI+JyArIG5hbWUgKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgc291c3R5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVN1YnR5cGUoc2l6ZSwgbmFtZSkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLVR5cGUgXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyBuYW1lICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHNvdXN0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVTdWJ0eXBlQ2FyZChzaXplLCBuYW1lKSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tc3VidHlwZVwiIGlkPVwiZGVzY3JpcHRpb24tc3ViVHlwZSBcIj4nICsgbmFtZSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy8gLy9FY3JpdCBsZXMgMiBpY29ucyBkJ2VkaXQgZXQgZGVsZXRlXHJcbi8vIGZ1bmN0aW9uIHdyaXRlRWRpdERlbGV0ZShpbmRleCkge1xyXG4vLyAgICAgcmV0dXJuICcgPHAgY2xhc3M9XCJlZGl0LWRlbGV0ZS1lcXVpcGVtZW50XCI+IDxhIGlkPVwiZWRpdC0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gPC9hPjwvcD4nO1xyXG4vLyB9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9iYXNlbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXF1aXBlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZmxlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvbG9hZGluZy1iYXIubHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvcHJlc2V0cy5scyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGVzdC11cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RyYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiaG92ZXIiLCJmaW5kIiwic3RvcCIsImFuaW1hdGUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiaGlkZSIsImRvY3VtZW50IiwicmVhZHkiLCJyZW1vdmUiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwiY3NzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIiR0eXBlIiwiYXR0ciIsIkVxdWlwbWVudHMiLCJpIiwiaW5kZXhFVkMiLCJwb3NJbmRleCIsIlByZXNlbmNlRVZDIiwiaWRFcXVpcG1lbnQiLCJ0YWJJbmRleEVxdWlwdCIsInNlbGVjdCIsImNyZWF0ZUVsZW1lbnQiLCJwcmV2aW91cyIsInRhYkVxdWlwZW1lbnRUeXBlIiwidGFiRXF1aXBlbWVudFN1YnR5cGUiLCJkYXRhIiwidmFsIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNob3ciLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZW1wdHkiLCJmb3JFYWNoIiwiZWxlbWVudCIsImFwcGVuZCIsIk9wdGlvbiIsIm5hbWUiLCJpZCIsImNoYW5nZSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCJhY3Rpb24iLCJlYWNoIiwiaW5kZXgiLCJ2YWx1ZSIsInRoYXQiLCJwdXNoIiwiYWpheCIsInVybCIsInR5cGUiLCJ0YWJFcXVpcHRzIiwiYXN5bmMiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ4aHIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJpZEVydG1zIiwiZXh0cmFpdE5vbWJyZSIsImVxdWlwZW1lbnQiLCJyZXR1cm5JbmRleEVsZW1lbnQiLCJhbGVydCIsImJhc2VsaW5lTmFtZSIsImJhc2VsaW5lIiwidGV4dCIsImlkQmFzZWxpbmUiLCJocmVmIiwiZGVsZXRlRXF1aXBtZW50IiwiZG9uZSIsInJlbG9hZCIsInZlcnNpb24iLCJ0cmlnZ2VyIiwiYXJyYXkiLCJsZW5ndGgiLCJyZXBsYWNlV2l0aCIsIndyaXRlVHlwZSIsIndyaXRlU3VidHlwZSIsIndyaXRlRWRpdERlbGV0ZSIsInNwbGljZSIsInBvc2l0aW9uIiwic3RyIiwiTnVtYmVyIiwicmVwbGFjZSIsInNpemUiLCJ3cml0ZVN1YnR5cGVDYXJkIiwibm90Iiwia2V5dXAiLCJzZWFyY2giLCJjdXJyZW50XyIsInRhYk5hbWUiLCJKU09OIiwicGFyc2UiLCJwcm9qZWN0c0ZvdW5kIiwiJHRyYWluX3NlbGVjdCIsImlkUHJvamVjdCIsInRhYlRyYWlucyIsIiRmbGVldCIsIiR0cmFpbiIsIiRlcnRtcyIsInR5cGVMb2ciLCJ0eXBlTG9nVGV4dCIsImlzQWR2YW5jZWRVcGxvYWQiLCJkaXYiLCIkZm9ybSIsIiRpbnB1dCIsIiRsYWJlbCIsInNob3dGaWxlcyIsImZpbGVzIiwicHJnYmFyIiwibGRCYXIiLCJkcm9wcGVkRmlsZXMiLCJzdG9wUHJvcGFnYXRpb24iLCJvcmlnaW5hbEV2ZW50IiwiZGF0YVRyYW5zZmVyIiwiTG9nIiwiaGFzQ2xhc3MiLCJhamF4RGF0YSIsIkZvcm1EYXRhIiwiZ2V0IiwiZmlsZSIsIlhNTEh0dHBSZXF1ZXN0IiwidXBsb2FkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsImxvYWRlZCIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50Q29tcGxldGUiLCJ0b3RhbCIsInNldCIsImNhY2hlIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsImNvbXBsZXRlIiwidmFsaWQiLCJpZnJhbWVOYW1lIiwiRGF0ZSIsImdldFRpbWUiLCIkaWZyYW1lIiwib25lIiwiY29udGVudHMiLCJyZW1vdmVBdHRyIiwiJGVycm9yTXNnIiwiTGlzdGVQbHVnIiwibm9tYnJlX3VybCIsImh0bWwiLCJQbHVnIiwid3JpdGVQbHVnIiwiZmlsZXN0IiwicXVlcnlTZWxlY3RvciIsInRlbXBEZXN0aW5hdGlvbiIsIm5hbWVGaWxlIiwidXBsb2FkU3RhdHVzIiwicGF0aCIsImtleSIsImRlbGV0ZVBsdWciLCJuYW1lX3BsdWciLCJrZXlfcGx1ZyIsImN1cnJlbnRfY2hvaWNlIiwiZXJ0bXNfbGVmdCIsImVydG1zX21pZGRsZSIsImVydG1zX3JpZ2h0IiwiZXF1aXBtZW50cyIsIkNvdW50TnVtYmVyRXF1aXB0IiwiRmluZEluZGV4RXZjIiwibmFtZV9iYXNlbGluZV8xIiwibmV3X2VxdWlwbWVudF9udW0iLCJ0b3RhbEVxdWlwdCIsIm5ld19lcXVpcG1lbnRfbnVtX3NlcmllIiwibnVtU2VyaWUiLCJpZF90cmFpbiIsImlkX2Jhc2VsaW5lIiwibmV3X2VxdWlwdCIsImlkYmFzZWxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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SUFBMUIsRUFBZ0NwRCxJQUFoQyxFQUFzQztBQUNsQyxTQUFPLE9BQU9vRCxJQUFQLEdBQWMseURBQWQsR0FBMEVwRCxJQUExRSxHQUFpRixLQUFqRixHQUF5Rm9ELElBQXpGLEdBQWdHLEdBQXZHO0FBQ0g7O0FBQUEsQyxDQUNEO0FBQ0E7QUFDQTtBQUNBLEs7Ozs7Ozs7Ozs7OztBQy9qQkEsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL2VxdWlwZW1lbnQnO1xyXG5pbXBvcnQgJy4vYmFzZWxpbmUnO1xyXG5pbXBvcnQgJy4vcHJvZ3Jlc3NCYXInO1xyXG5pbXBvcnQgJy4vdGVzdC11cGxvYWQnO1xyXG5pbXBvcnQgJy4vdHJhaW4nO1xyXG5pbXBvcnQgJy4vcGx1Zyc7XHJcbmltcG9ydCAnLi9mbGVldCc7XHJcbmltcG9ydCAnLi9sb2dzJztcclxuXHJcbi8vIGxvYWRzIHRoZSBqcXVlcnkgcGFja2FnZSBmcm9tIG5vZGVfbW9kdWxlc1xyXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbi8vIGltcG9ydCB0aGUgZnVuY3Rpb24gZnJvbSBncmVldC5qcyAodGhlIC5qcyBleHRlbnNpb24gaXMgb3B0aW9uYWwpXHJcbi8vIC4vIChvciAuLi8pIG1lYW5zIHRvIGxvb2sgZm9yIGEgbG9jYWwgZmlsZVxyXG4kKCcucG9zdC1tb2R1bGUnKS5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmZpbmQoJy5kZXNjcmlwdGlvbicpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBoZWlnaHQ6IFwidG9nZ2xlXCIsXHJcbiAgICAgICAgb3BhY2l0eTogXCJ0b2dnbGVcIlxyXG4gICAgfSwgMzAwKTtcclxufSk7XHJcbiQoJy5wb3N0LW1vZHVsZS1mbGVldCcpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuZmluZCgnLmRlc2NyaXB0aW9uLWZsZWV0Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGhlaWdodDogXCJ0b2dnbGVcIixcclxuICAgICAgICBvcGFjaXR5OiBcInRvZ2dsZVwiXHJcbiAgICB9LCAzMDApO1xyXG59KTtcclxuXHJcbiQoJy5mYS1jaGV2cm9uLWRvd24nKS5oaWRlKCk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgJCgncHJlJykucmVtb3ZlKCk7XHJcbiAgICAkKCcuYnV0dG9uLWxlZnQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLnNpZGViYXInKS50b2dnbGVDbGFzcygnZmxpcGgnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnNpZGViYXInKS5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ3RyYW5zaXRpb24nLCAnYWxsIDAuNXMgZWFzZS1pbi1vdXQnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdtbC1zbS1hdXRvJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5yZW1vdmVDbGFzcygnb2Zmc2V0LTEnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdvZmZzZXQtMicpO1xyXG4gICAgICAgICAgICAkKCcubWFpbi1zaG93JykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0xMScpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCd0cmFuc2l0aW9uJywgJ2FsbCAwLjEwcyBlYXNlLWluLW91dCcpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuYWRkQ2xhc3MoJ29mZnNldC0xJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5yZW1vdmVDbGFzcygnb2Zmc2V0LTInKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdtbC1zbS1hdXRvJyk7XHJcbiAgICAgICAgICAgICQoJy5tYWluLXNob3cnKS5hZGRDbGFzcygnY29sLWxnLTExJyk7XHJcbiAgICAgICAgfSlcclxuICAgIC8vICQoJ21haW4nKS5yZW1vdmVDbGFzcygnbWwtc20tYXV0bycpO1xyXG4gICAgJCgnLm5hdi1sYWJlbCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuZmEtY2hldnJvbi1sZWZ0JykuY3NzKCd0cmFuc2Zvcm0nLCAncm90YXRleCg0NWRlZyknKVxyXG4gICAgfSlcclxuXHJcbn0pOyIsIi8vTWFzcXVhZ2UgZGUgY2VydGFpbnMgbW9kYWxlIGRlIGxhIHBhZ2VcclxuJCgnI2Zvcm11bGFpcmUtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4kKCcjY29udGVudC1mb3JtLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4kKCcjcHJldmlvdXMtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4kKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG5cclxuLy9EZWxjYXJhdGlvbiB2YXJpYWJsZVxyXG5jb25zdCAkdHlwZSA9ICQoJyNlcXVpcGVtZW50X1R5cGUnKTtcclxuJHR5cGUuYXR0cigncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcclxuXHJcbmxldCBFcXVpcG1lbnRzID0gW10sXHJcbiAgICBpID0gMCxcclxuICAgIGluZGV4RVZDID0gMCxcclxuICAgIHBvc0luZGV4ID0gMCxcclxuICAgIFByZXNlbmNlRVZDID0gZmFsc2UsXHJcbiAgICBpZEVxdWlwbWVudCA9IDAsXHJcbiAgICB0YWJJbmRleEVxdWlwdCA9IFtdXHJcbnNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksXHJcbiAgICBwcmV2aW91cyA9IFwiXCIsXHJcbiAgICB0YWJFcXVpcGVtZW50VHlwZSA9IFtcIkVWQ1wiLCBcIkNBUlRFXCIsIFwiU0VOU09SXCIsIFwiRE1JXCJdLFxyXG4gICAgdGFiRXF1aXBlbWVudFN1YnR5cGUgPSBbXCJDT1JFXCIsIFwiVFVJXCIsIFwiU0RNVVwiLCBcIlNFTlNFXCIsIFwiVFdJTlNcIl07XHJcblxyXG4vL1ZpZGFnZSBkZXMgaW5wdXRzIGF1IHJlZnJlc2ggZGUgbGEgcGFnZVxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICBkYXRhWyR0eXBlLmF0dHIoJ25hbWUnKV0gPSAkdHlwZS52YWwoKVxyXG5cclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hbHN0b20vY3JlYXRlX2Jhc2VsaW5lJykge1xyXG4gICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICAvLyAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgLy8gJCgnOmlucHV0JywgJyNmb3JtX2VxdWlwZW1lbnQnKS5ub3QoJzpidXR0b24sIDpzdWJtaXQsIDpyZXNldCwgOmhpZGRlbicpLnZhbCgnJyk7XHJcbn0pO1xyXG5cclxuLy9BSkFYIENoYW5nZW1lbnQgZGUgc291cy10eXBlIGVuIGZvbmN0aW9uIGR1IHR5cGVcclxuJHR5cGUuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICBkYXRhWyR0eXBlLmF0dHIoJ25hbWUnKV0gPSAkdHlwZS52YWwoKVxyXG5cclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KVxyXG5cclxuLy9BSkFYIHNvdW1pc3Npb24gZm9ybXVsYWlyZSBkJ2Fqb3V0IGVxdWlwZW1lbnRcclxuJCgnI2Zvcm1fZXF1aXBlbWVudCcpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIC8vRW1ww6pjaGUgbGUgY2hhcmdlbWVudCBkZSBsYSBwYWdlIHNvaXMgZmFpdCBhdXRvbWF0aXF1ZW1lbnRcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge30sXHJcbiAgICAgICAgYWN0aW9uO1xyXG4gICAgLy9SZW1wbGkgZGF0YSBhIHBhcnRpciBkZXMgdmFsZXVyIGRlcyBpbnB1dHNcclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpXHJcblxyXG4gICAgICAgIGlmIChuYW1lICE9IChcImVxdWlwZW1lbnRbX3Rva2VuXVwiKSAmJiBuYW1lICE9IChcInNvdW1pc3Npb25fZXF1aXBlbWVudFwiKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT0gJ3NvdW1pc3Npb25fZWRpdF9lcXVpcGVtZW50Jykge1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBcImVkaXRcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBcImFkZFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgLy8gU2kgbGUgZm9ybXVsYWlyZSBlc3QgcG91ciBham91ZXIgdW4gbm91dmVsIGVxdWlwZW1lbnRcclxuICAgIGlmIChhY3Rpb24gPT0gXCJhZGRcIikge1xyXG4gICAgICAgIC8vUmVtcGxpcyBsZSB0YWJsZWF1IGRlcyDDqXF1aXBlbWVudHNcclxuICAgICAgICBFcXVpcG1lbnRzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgLy9FZmZlY3R1cmUgbGEgcmVxdcOqdGUgYWpheCBwb3VyIGwnYWpvdXQgZCfDqXF1aXBlbWVudFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0YWJFcXVpcHRzOiBFcXVpcG1lbnRzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIE91IHNpIGxlIGZvcm11bGFpcmUgZXN0IHBvdXIgw6lkaXRlciB1biBlcXVpcGVtZW50IGTDqWphIGV4aXN0YW50IHN1ciBsYSBwYWdlIGRlIGwnZXJ0bXMgbGnDqSBhIGNlbHVpLWNpXHJcbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PSBcImVkaXRcIikge1xyXG4gICAgICAgIGxldCBpZEVydG1zID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGVxdWlwZW1lbnQ6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICBpZEVydG1zOiBpZEVydG1zXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnLm1vZGFsLWZvb3RlcicpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3Nob3ctZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgIC8vQm91Y2xlIGxlcyDDqXF1aXBlbWVudHMgZXQgbGVzIGluc3RhbGxlIGF1IGZyb250XHJcbiAgICBFcXVpcG1lbnRzLmZvckVhY2gocmV0dXJuSW5kZXhFbGVtZW50KTtcclxufSk7XHJcblxyXG5cclxuLy9WYWxpZGF0aW9uIGRlIGJhc2VsaW5lIFxyXG4kKCcjY3JlYXRlLWJhc2VsaW5lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQoXCIjYmFzZWxpbmVfbmFtZVwiKS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSBiYXNlbGluZSBuYW1lIFwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI3Nob3ctZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgfVxyXG5cclxufSlcclxuXHJcbmxldCBiYXNlbGluZU5hbWU7XHJcbiQoJyNmb3JtX2Jhc2VsaW5lJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcblxyXG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgPT0gJ2Jhc2VsaW5lW25hbWVdJykge1xyXG5cclxuICAgICAgICAgICAgYmFzZWxpbmVOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBiYXNlbGluZTogZGF0YVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLnRpdGxlLWJhc2VsaW5lJykudGV4dChyZXNwb25zZS5iYXNlbGluZSlcclxuICAgICAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcbi8vVmFsaWRhdGlvbiBkZSB0b3VzIGxlcyDDqXF1aXBlbWVudHMgZXQgZGUgbGEgYmFzZWxpbmVcclxuJCgnI3ZhbGlkLWFsbC1lcXVpcG1lbnRzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoRXF1aXBtZW50cyAhPSBcIlwiKSB7XHJcbiAgICAgICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsIFwiMC40XCIpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS9mbHVzaC1hbGwtZXF1aXB0JyxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBiYXNlbGluZU5hbWU6IGJhc2VsaW5lTmFtZSxcclxuICAgICAgICAgICAgICAgIHRhYkVxdWlwdHM6IEVxdWlwbWVudHNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZEJhc2VsaW5lID0gcmVzcG9uc2UuYmFzZWxpbmU7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hbHN0b20vYmFzZWxpbmUvXCIgKyBpZEJhc2VsaW5lO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBFcXVpcG1lbnRzIGJlZm9yZSB2YWxpZCcpO1xyXG4gICAgfVxyXG5cclxufSlcclxuXHJcbi8vR8OpcmUgbGUgY2xpcXVlIGRlIGxhIHN1cHByZXNzaW9uXHJcbiQoJyNzaG93LWVxdWlwbWVudCcpLm9uKCdjbGljaycsICcuZWRpdC1kZWxldGUtZXF1aXBlbWVudCA+IGEnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKVswXVtcImlkXCJdWzBdID09IFwiZFwiKSB7XHJcbiAgICAgICAgZGVsZXRlRXF1aXBtZW50KGV4dHJhaXROb21icmUoJCh0aGlzKVswXVtcImlkXCJdKSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vY2FjaGUgbGUgbW9kYWwgZCdlZGl0IGQnZXF1aXBlbWVudFxyXG4kKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLmhpZGUoKTtcclxuLy8gR2VyZSBsYSBmZXJtZXR1cmUgZHUgbW9kYWwgZCdlZGl0IGQnZXF1aXBlbWVudFxyXG4kKCcjY2xvc2UtbW9kYWwtZm9ybS1lcXVpcG1lbnQtZWRpdCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0JykuaGlkZSgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxufSlcclxuLy8gXHJcbi8vIFJlcXVldGUgQUpBWCBwb3VyIHJlbXBsaXIgbGUgZm9ybXVsYWlyZSBkJ8OpcXVpcGVtZW50IGF2ZWMgbCdlcXVpcGVtZW50IHNlbGVjdGlvbm5lclxyXG4kKCcuY29udGVudC1kZXNjcmlwdGlvbi1kdHInKS5vbignY2xpY2snLCAnLmVkaXQtZGVsZXRlLWVxdWlwZW1lbnQgPiBhJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgaWRFcXVpcG1lbnQgPSBleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJjbGFzc0xpc3RcIl1bMF0pXHJcbiAgICB2YXIgJHRoaXMgPSAkKFwiI2Zvcm1fZXF1aXBlbWVudF9lZGl0XCIpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKHJlc3BvbnNlW1widHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgZGF0YVskKCcjZXF1aXBlbWVudF9UeXBlJykuYXR0cignbmFtZScpXSA9ICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGkgaW5wdXQgYXZlYyB2YWxldXIgcmVjdSBkZSBsJ2VxdWlwZW1lbnRcclxuICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfVHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9zb3VzX3R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW1wiU291c1R5cGVcIl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIlNvdXNUeXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfRFRSX2JvYXJkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImRUUkJvYXJkXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfSW5kaWNlX0RUUic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJpbmRpY2VEVFJcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9OdW1fc2VyaWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wibnVtU2VyaWVcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbi8vRm9ybXVsYWlyZSBkJ2VkaXQgZGUgbCfDqXF1aXBlbWVudFxyXG4kKCcjZm9ybV9lcXVpcGVtZW50X2VkaXQnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdCcpLmNzcyhcIm9wYWNpdHlcIiwgXCIwLjRcIik7XHJcbiAgICAkKFwiI3dhaXQtc3Bpbm5lclwiKS5jc3MoXCJ6LWluZGV4XCIsIFwiOTk5OTlcIik7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge30sXHJcbiAgICAgICAgYWN0aW9uO1xyXG4gICAgLy9SZW1wbGkgZGF0YSBhIHBhcnRpciBkZXMgdmFsZXVyIGRlcyBpbnB1dHNcclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpXHJcblxyXG4gICAgICAgIGlmIChuYW1lICE9IChcImVxdWlwZW1lbnRbX3Rva2VuXVwiKSAmJiBuYW1lICE9IChcInNvdW1pc3Npb25fZXF1aXBlbWVudFwiKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAnZXF1aXBlbWVudCc6IGRhdGEsXHJcbiAgICAgICAgICAgIFwic291bWlzc2lvbl9lZGl0X2VxdWlwZW1lbnRcIjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuXHJcbi8vUmVxdWV0ZSBBSkFYIGRlIGNyw6lhdGlvbiBkZSB2ZXJzaW9uIGxvZ2ljaWVsXHJcbiQoJyNmb3JtX3ZlcnNpb24nKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJyksXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuXHJcbiAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfSlcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAkdGhpcy5hdHRyKCdhY3Rpb24nKSxcclxuICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlkQmFzZWxpbmU6IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSxcclxuICAgICAgICAgICAgdmVyc2lvbjogZGF0YVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI3RpdGxlLXZlcnNpb24tZXJ0bXMnKS5hcHBlbmQoXCI8cD5cIiArIHJlc3BvbnNlLnZlcnNpb24gKyBcIjwvcD5cIilcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI2Nsb3NlLW1vZGFsLWZvcm0tdmVyc2lvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmV0dXJuSW5kZXhFbGVtZW50KGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG5cclxuICAgIC8vVGVzdCBsJ2V4aXN0ZW5jZSBkZSBsYSBkaXYgZGFucyBsZSBjYXMgb8O5IGVsbGUgZXhpc3RlIGxhIHJlbXBsYWNlIHNpIHBhcyBsYSBtZXQgZW4gcGxhY2VcclxuICAgIGlmICgkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLmxlbmd0aCkge1xyXG4gICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVwbGFjZVdpdGgoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+JylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiNzaG93LWVxdWlwbWVudFwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy90ZXN0IHNpIGwnw6lxdWlwZW1lbnQgZXN0IGxhIGNhcnRlIG91IG5vblxyXG4gICAgaWYgKGVsZW1lbnRbXCJlcXVpcGVtZW50W1R5cGVdXCJdICE9IFwiMlwiKSB7XHJcbiAgICAgICAgLy9Td2l0aCByZXBsYWNlbWVudCBkZSBsJ2lkIGR1IHR5cGUgYXZlYyBzb24gbm9tXHJcbiAgICAgICAgc3dpdGNoIChlbGVtZW50W1wiZXF1aXBlbWVudFtUeXBlXVwiXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIDApKTtcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYWRkQ2xhc3MoXCJkZXNjcmlwdGlvbi1TdWJ0eXBlQ2FyZFwiKVxyXG4gICAgICAgICAgICAgICAgaW5kZXhFVkMgPSAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgMikpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgMykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoZWxlbWVudFtcImVxdWlwZW1lbnRbc291c190eXBlXVwiXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDMpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiNVwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDQpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNvbnRlbnQtZGVzY3JpcHRpb24tZHRyXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W0RUUl9ib2FyZF1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtJbmRpY2VfRFRSXVwiXSArICc8L3A+JylcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W051bV9zZXJpZV1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVFZGl0RGVsZXRlKGluZGV4KSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgRXF1aXBtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKEVxdWlwbWVudHNbaV1bXCJlcXVpcGVtZW50W1R5cGVdXCJdID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICBQcmVzZW5jZUVWQyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChQcmVzZW5jZUVWQykge1xyXG4gICAgICAgICAgICAvL0VjcmlzIGxlIG5vbSBkdSB0eXBlIFwiY2FydGVcIiBzb3VzIGxlIHR5cGUgIEVWQ1xyXG4gICAgICAgICAgICAvLyAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVUeXBlKDUsIDEpKTtcclxuICAgICAgICAgICAgLy9QYXJjb3VzIGxlIHR5cGUgZGUgc291c3R5cGUgXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZWxlbWVudFtcImVxdWlwZW1lbnRbc291c190eXBlXVwiXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDApKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgMikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0ciBjb250ZW50LWRlc2NyaXB0aW9uLWR0ckNhcmRcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtEVFJfYm9hcmRdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W0luZGljZV9EVFJdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W051bV9zZXJpZV1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgRVZDIGVxdWlwZW1lbnQgYmVmb3JlJyk7XHJcbiAgICAgICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIEVxdWlwbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgJCgnLm1vZGFsLWZvb3RlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNzaG93LWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy9TdXByZXNzaW9uIGRlIGwnw6lxdWlwZW1lbnQgZGFucyBsZSB0YWJsZWF1IGV0IGxlIGZyb250XHJcbmZ1bmN0aW9uIGRlbGV0ZUVxdWlwbWVudChwb3NpdGlvbikge1xyXG4gICAgRXF1aXBtZW50cy5zcGxpY2UocG9zaXRpb24sIDEpO1xyXG4gICAgJCgnLmRlc2NyaXB0aW9uJykucmVtb3ZlKCk7XHJcbiAgICBFcXVpcG1lbnRzLmZvckVhY2gocmV0dXJuSW5kZXhFbGVtZW50KTtcclxufVxyXG4vL0V4dHJhaXQgbGUgbm9tYnJlIGQndW5lIHN0cmVpbmdcclxuZnVuY3Rpb24gZXh0cmFpdE5vbWJyZShzdHIpIHtcclxuICAgIHJldHVybiBOdW1iZXIoc3RyLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKSlcclxufVxyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHR5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVR5cGUoc2l6ZSwgaW5kZXgpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1UeXBlIFwiIGlkPVwiZGVzY3JpcHRpb24tdHlwZSBcIj4nICsgdGFiRXF1aXBlbWVudFR5cGVbaW5kZXhdICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHNvdXN0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVTdWJ0eXBlKHNpemUsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXN1YlR5cGUgXCI+JyArIHRhYkVxdWlwZW1lbnRTdWJ0eXBlW2luZGV4XSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpcyBsZSB0aXRyZSBkdSBzb3VzdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlU3VidHlwZUNhcmQoc2l6ZSwgaW5kZXgpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1zdWJ0eXBlXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyB0YWJFcXVpcGVtZW50U3VidHlwZVtpbmRleF0gKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXQgbGVzIDIgaWNvbnMgZCdlZGl0IGV0IGRlbGV0ZVxyXG5mdW5jdGlvbiB3cml0ZUVkaXREZWxldGUoaW5kZXgpIHtcclxuICAgIHJldHVybiAnIDxwIGNsYXNzPVwiZWRpdC1kZWxldGUtZXF1aXBlbWVudFwiPiA8YSBpZD1cImVkaXQtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IDwvYT4gPGEgaWQ9XCJkZWxldGUtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzID0gXCJmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlXCI+IDwvaT48L2E+PC9wPic7XHJcbn07XHJcblxyXG4vKmF1IGNsaWNrIGRlIGwnYWRkIEVxdWlwbWVudCBhZmZpY2hlciBsZSBmb3JtdWxhaXJlIGQnYWpvdXQgZCfDqXF1aXBlbWVudCovXHJcbiQoJyNjcmVhdGUtZXF1aXBtZW50JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnLm1vZGFsLWZvb3RlcicpLmhpZGUoKTtcclxuICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAkKCc6aW5wdXQnLCAnI2Zvcm1fZXF1aXBlbWVudCcpLm5vdCgnOmJ1dHRvbiwgOnN1Ym1pdCwgOnJlc2V0LCA6aGlkZGVuJykudmFsKCcnKTtcclxuICAgIHByZXZpb3VzID0gXCJlcXVpcG1lbnRcIjtcclxufSk7XHJcbi8vIEdlcmUgbGUgY2xpY2sgZHUgcHJldmlvdXNcclxuJChcIiNwcmV2aW91cy1lcXVpcG1lbnRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgICQoJy5tb2RhbC1mb290ZXInKS5zaG93KCk7XHJcbn0pO1xyXG4kKCcjY3JlYXRlLWJhc2VsaW5lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI3Nob3ctZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcubW9kYWwtZm9vdGVyJykuc2hvdygpO1xyXG59KVxyXG4vLyBGZXJtZSBsZSBtb2RhbCBkZSBmb3JtdWxhaXJlIGQnYWpvdXQgZCfDqXF1aXBlbWVudFxyXG4kKCcjY2xvc2UtZXF1aXBlbWVudCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxufSkiLCIvL1ZhbGlkYXRpb24gZGUgbCdlcnRtcyBcclxuJCgnI3ZhbGlkLWVydG1zLW5hbWUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2NvbnRlbnQtZm9ybS1lcnRtc1wiKS5oaWRlKCk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWVxdWlwbWVudCcpLnNob3coKTtcclxufSkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjc2VhcmNoLWZsZWV0Jykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSlcclxuICAgICQoJyNuYW1lX3Byb2plY3QnKS5rZXl1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgc2VhcmNoID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgZGF0YSA9ICdtb3RjbGVmPScgKyBzZWFyY2g7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRfXHJcbiAgICAgICAgY29uc29sZS5sb2coc2VhcmNoKTtcclxuICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWxzdG9tL3NlYXJjaC1mbGVldCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgLy8gYXN5bmM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhYk5hbWUgPSBKU09OLnBhcnNlKHJlc3BvbnNlLnByb2plY3RzRm91bmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFiTmFtZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuZWxlbWVudC1yZXN1bHQnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3Jlc3VsdC1mbGVldCcpLmFwcGVuZCgnPHAgY2xhc3M9XCJlbGVtZW50LXJlc3VsdFwiPlJlc3VsdHMgTm90IEZvdW5kPC9wPicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJOYW1lLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuZWxlbWVudC1yZXN1bHQnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZXN1bHQtZmxlZXQnKS5hcHBlbmQoJzxwIGNsYXNzPVwiZWxlbWVudC1yZXN1bHRcIj4nICsgZWxlbWVudC5uYW1lICsgJzwvcD4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5lbGVtZW50LXJlc3VsdCcpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnI2FkZFRyYWluc1RvRmxlZXQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHRyYWluX3NlbGVjdCA9ICQoJyNzZWxlY3QtdHJhaW4tZmxlZXQnKTtcclxuXHJcbiAgICAgICAgJCgnI21vZGFsLWZvcm0tdHJhaW4tZmxlZXQnKS5jc3MoJ3otaW5kZXgnLCAnLTk5Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1RyYWluc1wiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAkdHJhaW5fc2VsZWN0LmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAkdHJhaW5fc2VsZWN0LnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWwtZm9ybS10cmFpbi1mbGVldCcpLmNzcygnei1pbmRleCcsICc5OTk5Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAkKCcjdmFsaWQtdHJhaW4tZmxlZXQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgaWRQcm9qZWN0ID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgIGxldCB0YWJUcmFpbnMgPSBbXTtcclxuICAgICAgICB0YWJUcmFpbnMucHVzaCgpO1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQoJyNmb3JtdWxhaXJlLXRyYWluLWZsZWV0Jyk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYWxzdG9tL2FkZFRyYWluVG9GbGVldC8nICsgaWRQcm9qZWN0LFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIC8vIGFzeW5jOiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCQoJyNzZWxlY3QtdHJhaW4tZmxlZXQnKS52YWwoKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG59KTtcclxuXHJcbi8vRXh0cmFpdCBsZSBub21icmUgZCd1bmUgc3RyZWluZ1xyXG5mdW5jdGlvbiBleHRyYWl0Tm9tYnJlKHN0cikge1xyXG4gICAgcmV0dXJuIE51bWJlcihzdHIucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpKVxyXG59IiwiY29uc3QgJGZsZWV0ID0gJCgnI2ZsZWV0X3NlbGVjdCcpO1xyXG5jb25zdCAkdHJhaW4gPSAkKCcjdHJhaW5fc2VsZWN0Jyk7XHJcbmNvbnN0ICRlcnRtcyA9ICQoJyNlcnRtc19zZWxlY3QnKTtcclxuY29uc3QgdHlwZUxvZyA9ICQoJyNzZWxlY3RfdHlwZV9sb2cnKTtcclxuY29uc3QgdHlwZUxvZ1RleHQgPSAkKCcjc2VsZWN0X3R5cGVfbG9nJyk7XHJcbmxldCBkYXRhID0ge307XHJcbi8vZGV0ZWN0aW9uIHNpIGxlIGJyb3dzZXIgZ8OocmUgbGUgZHJhZyZkcm9wXHJcbnZhciBpc0FkdmFuY2VkVXBsb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmV0dXJuICgoJ2RyYWdnYWJsZScgaW4gZGl2KSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiBkaXYgJiYgJ29uZHJvcCcgaW4gZGl2KSkgJiYgJ0Zvcm1EYXRhJyBpbiB3aW5kb3cgJiYgJ0ZpbGVSZWFkZXInIGluIHdpbmRvdztcclxufSgpO1xyXG52YXIgJGZvcm0gPSAkKCcuZHJhZy1sb2cnKTtcclxudmFyICRpbnB1dCA9ICRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyksXHJcbiAgICAkbGFiZWwgPSAkZm9ybS5maW5kKCdsYWJlbCcpLFxyXG4gICAgc2hvd0ZpbGVzID0gZnVuY3Rpb24gKGZpbGVzKSB7XHJcbiAgICAgICAgJGxhYmVsLnRleHQoZmlsZXMubGVuZ3RoID4gMSA/ICgkaW5wdXQuYXR0cignZGF0YS1tdWx0aXBsZS1jYXB0aW9uJykgfHwgJycpLnJlcGxhY2UoJ3tjb3VudH0nLCBmaWxlcy5sZW5ndGgpIDogZmlsZXNbMF0ubmFtZSk7XHJcbiAgICB9O1xyXG50eXBlTG9nLmhpZGUoKTtcclxudHlwZUxvZ1RleHQuaGlkZSgpO1xyXG4kZm9ybS5oaWRlKCk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvYWxzdG9tL2FkZC1sb2dzJykge1xyXG4gICAgICAgICRmb3JtLnNob3coKTtcclxuICAgICAgICBwcmdiYXIgPSBuZXcgbGRCYXIoXCIjdGVzdC1wcm9ncmVzc1wiKTtcclxuICAgIH1cclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hbHN0b20vc2VhcmNoLWxvZ3MnKSB7XHJcbiAgICAgICAgLy9pZGVudGlmaWNhdGlvbiBkZSBsYSBwcm9ncmVzcyBiYXJcclxuICAgICAgICBwcmdiYXIgPSBuZXcgbGRCYXIoXCIjdGVzdC1wcm9ncmVzc1wiKTtcclxuXHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja0ZsZWV0XCIsICkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICRmbGVldC5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1RyYWluQnlGbGVldFwiLCB7XHJcbiAgICAgICAgICAgICAgICAnaWQnOiAkZmxlZXQudmFsKClcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICR0cmFpbi5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrRXJ0bXNCeVRyYWluXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAkdHJhaW4udmFsKClcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZXJ0bXMuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG4kZmxlZXQuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNzZWxlY3RfdHlwZV9sb2cnKS5oaWRlKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJGZsZWV0LnZhbCgpKTtcclxuICAgICR0cmFpbi5lbXB0eSgpO1xyXG4gICAgJGVydG1zLmVtcHR5KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1RyYWluQnlGbGVldFwiLCB7XHJcbiAgICAgICAgJ2lkJzogJGZsZWV0LnZhbCgpXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgJHRyYWluLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICB9KVxyXG59KVxyXG4kdHJhaW4uY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNzZWxlY3RfdHlwZV9sb2cnKS5oaWRlKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJGZsZWV0LnZhbCgpKTtcclxuICAgICRlcnRtcy5lbXB0eSgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tFcnRtc0J5VHJhaW5cIiwge1xyXG4gICAgICAgICdpZCc6ICR0cmFpbi52YWwoKVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICRlcnRtcy5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICB9KVxyXG4gICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdHlwZUxvZy5zaG93KCk7XHJcbiAgICAgICAgJGZvcm0uc2hvdygpO1xyXG4gICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuaWYgKGlzQWR2YW5jZWRVcGxvYWQpIHtcclxuICAgIHZhciBkcm9wcGVkRmlsZXMgPSBmYWxzZTtcclxuICAgICRmb3JtLmFkZENsYXNzKCdoYXMtYWR2YW5jZWQtdXBsb2FkJyk7IC8vIGxldHRpbmcgdGhlIENTUyBwYXJ0IHRvIGtub3cgZHJhZyZkcm9wIGlzIHN1cHBvcnRlZCBieSB0aGUgYnJvd3NlclxyXG4gICAgJGZvcm0ub24oJ2RyYWcgZHJhZ3N0YXJ0IGRyYWdlbmQgZHJhZ292ZXIgZHJhZ2VudGVyIGRyYWdsZWF2ZSBkcm9wJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG4gICAgJGZvcm0ub24oJ2RyYWdvdmVyIGRyYWdlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkZm9ybS5hZGRDbGFzcygnaXMtZHJhZ292ZXInKTtcclxuICAgIH0pO1xyXG4gICAgJGZvcm0ub24oJ2RyYWdsZWF2ZSBkcmFnZW5kIGRyb3AnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJGZvcm0ucmVtb3ZlQ2xhc3MoJ2lzLWRyYWdvdmVyJyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAkZm9ybS5vbignZHJvcCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgICAgICAkZm9ybS50cmlnZ2VyKCdzdWJtaXQnKTtcclxuICAgICAgICAkKCcubGFiZWwtZHJvcCcpLnRleHQoZHJvcHBlZEZpbGVzWzBdLm5hbWUpO1xyXG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykuY3NzKCdmb250LXdlaWdodCcsICdib2xkJyk7XHJcbiAgICB9KTtcclxuICAgICRmb3JtLmNoYW5nZSgnZHJvcCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgICAgICAkZm9ybS50cmlnZ2VyKCdzdWJtaXQnKTtcclxuICAgIH0pO1xyXG59XHJcbmxldCBMb2cgPSB7fSxcclxuICAgIGlkQmFzZWxpbmUgPSBcIlwiO1xyXG4kZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBpZiAoZHJvcHBlZEZpbGVzKSB7XHJcblxyXG4gICAgICAgIExvZ1snbmFtZV9sb2cnXSA9ICQoJyN0eXBlX2xvZ19zZWxlY3QnKS52YWwoKTtcclxuICAgICAgICBpZEJhc2VsaW5lID0gJCgnI2VydG1zX3NlbGVjdCcpLnZhbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQoJyNlcnRtc19zZWxlY3QnKS52YWwoKSk7XHJcbiAgICAgICAgLy8gUGFydGkgZHUgdHJhaXRlbWVudCBkdSBkcmFnIGFuIGRyb3AgZmlsZVxyXG4gICAgICAgIGlmICgkZm9ybS5oYXNDbGFzcygnaXMtdXBsb2FkaW5nJykpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBzaG93RmlsZXMoZHJvcHBlZEZpbGVzKTtcclxuICAgICAgICAkZm9ybS5hZGRDbGFzcygnaXMtdXBsb2FkaW5nJykucmVtb3ZlQ2xhc3MoJ2lzLWVycm9yJyk7XHJcblxyXG4gICAgICAgIGlmIChpc0FkdmFuY2VkVXBsb2FkKSB7XHJcbiAgICAgICAgICAgIHZhciBhamF4RGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybS5nZXQoMCkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRyb3BwZWRGaWxlcykge1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKGRyb3BwZWRGaWxlcywgZnVuY3Rpb24gKGksIGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhamF4RGF0YS5hcHBlbmQoJGlucHV0LmF0dHIoJ25hbWUnKSwgZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nWydrZXlfbG9nJ10gPSBmaWxlLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hbHN0b20vdXBsb2FkTG9nJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuXHJcbiAgICAgICAgICAgICAgICB4aHI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZ0LmxvYWRlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQubGVuZ3RoQ29tcHV0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBlcmNlbnRDb21wbGV0ZSA9IChldnQubG9hZGVkIC8gZXZ0LnRvdGFsKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vRG8gc29tZXRoaW5nIHdpdGggdXBsb2FkIHByb2dyZXNzIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZ2Jhci5zZXQocGVyY2VudENvbXBsZXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwZXJjZW50Q29tcGxldGUgPT0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN0ZXN0LXByb2dyZXNzXCIpLmFkZENsYXNzKCdpcy1ibGluaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2dC5sb2FkZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2dC50b3RhbCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhocjtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YTogYWpheERhdGEsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkZm9ybS5yZW1vdmVDbGFzcygnaXMtdXBsb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN0ZXN0LXByb2dyZXNzXCIpLnJlbW92ZUNsYXNzKCdpcy1ibGluaycpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGRhdGEuc3VjY2VzcyA9PSB0cnVlID8gJ2lzLXN1Y2Nlc3MnIDogJ2lzLWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9nIHRoZSBlcnJvciwgc2hvdyBhbiBhbGVydCwgd2hhdGV2ZXIgd29ya3MgZm9yIHlvdVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29ycnkgYm9ieVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGlmcmFtZU5hbWUgPSAndXBsb2FkaWZyYW1lJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAkaWZyYW1lID0gJCgnPGlmcmFtZSBuYW1lPVwiJyArIGlmcmFtZU5hbWUgKyAnXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwvaWZyYW1lPicpO1xyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkaWZyYW1lKTtcclxuICAgICAgICAgICAgJGZvcm0uYXR0cigndGFyZ2V0JywgaWZyYW1lTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAkaWZyYW1lLm9uZSgnbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZSgkaWZyYW1lLmNvbnRlbnRzKCkuZmluZCgnYm9keScpLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAkZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtdXBsb2FkaW5nJylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoZGF0YS5zdWNjZXNzID09IHRydWUgPyAnaXMtc3VjY2VzcycgOiAnaXMtZXJyb3InKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0YS5zdWNjZXNzKSAkZXJyb3JNc2cudGV4dChkYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICRmb3JtLnJlbW92ZUF0dHIoJ3RhcmdldCcpO1xyXG4gICAgICAgICAgICAgICAgJGlmcmFtZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbiQoJyN2YWxpZC1hbGwtbG9ncycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsIFwiMC40XCIpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9mbHVzaC1sb2cnLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICdsb2cnOiBMb2csXHJcbiAgICAgICAgICAgICdiYXNlbGluZSc6IGlkQmFzZWxpbmUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vYXNrIGZvciB0aGUgc3RhdHVzXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KSIsIiQoJyNmb3JtX3BsdWcnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBsZXQgYmFzZWxpbmUgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJGZvcm0pO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2FkZC1wbHVnJyxcclxuICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICBkYXRhVHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZDogYmFzZWxpbmVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG5cclxuLy9FeHRyYWl0IGxlIG5vbWJyZSBkJ3VuZSBzdHJlaW5nXHJcbmZ1bmN0aW9uIGV4dHJhaXROb21icmUoc3RyKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyKHN0ci5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIikpO1xyXG59IiwicmVxdWlyZSEgXCIuL3ByZXNldHNcIjoge3ByZXNldHN9XG5cbnNpbXBsZS1zdHIgPSAoYXJyKSAtPiBhcnIuam9pbiAnJ1xud3JhcCA9IChjb250ZW50KSAtPiBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCIgKyBidG9hKGNvbnRlbnQpXG5cbmRvIC0+XG4gICAgbWFrZSA9XG4gICAgICAgIGhlYWQ6ICh2aWV3Qm94KSAtPiBcIlwiXCJcbiAgICAgICAgICAgICAgICA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJ1dGYtOFwiPz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIjdmlld0JveFwiPlxuICAgICAgICAgICAgICAgIFwiXCJcIlxuXG4gICAgICAgIGdyYWRpZW50OiAoZGlyID0gNDUsIGR1ciA9IDEsIC4uLmNvbG9ycykgLT5cbiAgICAgICAgICAgIHJldCA9IFtAaGVhZCBcIjAgMCAxMDAgMTAwXCJdXG4gICAgICAgICAgICBsZW4gPSBjb2xvcnMubGVuZ3RoICogNCArIDFcbiAgICAgICAgICAgIGRpciA9IGRpciAqIE1hdGguUEkgLyAxODBcbiAgICAgICAgICAgIGd4ID0gTWF0aC5jb3MoZGlyKSAqKiAyXG4gICAgICAgICAgICBneSA9IE1hdGguc3FydChneCAtIGd4ICoqIDIpXG4gICAgICAgICAgICBpZiBkaXIgPiBNYXRoLlBJICogMC4yNSA9PlxuICAgICAgICAgICAgICAgIGd5ID0gTWF0aC5zaW4oZGlyKSAqKiAyXG4gICAgICAgICAgICAgICAgZ3ggPSBNYXRoLnNxcnQoZ3kgLSBneSAqKiAyKVxuICAgICAgICAgICAgeCA9IGd4ICogMTAwXG4gICAgICAgICAgICB5ID0gZ3kgKiAxMDBcbiAgICAgICAgICAgIHJldC5wdXNoIFwiXCJcIjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cImdyYWRpZW50XCIgeDE9XCIwXCIgeDI9XCIjZ3hcIiB5MT1cIjBcIiB5Mj1cIiNneVwiPlwiXCJcIlxuICAgICAgICAgICAgZm9yIGkgZnJvbSAwIHRpbCBsZW4gPT5cbiAgICAgICAgICAgICAgICBpZHggPSBpICogMTAwIC8gKGxlbiAtIDEpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2ggXCJcIlwiPHN0b3Agb2Zmc2V0PVwiI3tpZHh9JVwiIHN0b3AtY29sb3I9XCIje2NvbG9yc1tpICUgY29sb3JzLmxlbmd0aF19XCIvPlwiXCJcIlxuICAgICAgICAgICAgcmV0LnB1c2ggXCJcIlwiXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD48L2RlZnM+XG4gICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiNDAwXCIgZmlsbD1cInVybChcXCNncmFkaWVudClcIj5cbiAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInRyYW5zbGF0ZVwiIGZyb209XCItI3gsLSN5XCJcbiAgICAgICAgICAgICAgICB0bz1cIjAsMFwiIGR1cj1cIiN7ZHVyfXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+PC9yZWN0Pjwvc3ZnPlxuICAgICAgICAgICAgICAgIFwiXCJcIlxuICAgICAgICAgICAgd3JhcCByZXQuam9pbihcIlwiKVxuXG4gICAgICAgIHN0cmlwZTogKGMxPVxcI2I0YjRiNCwgYzI9XFwjZTZlNmU2LCBkdXIgPSAxKSAtPlxuICAgICAgICAgICAgcmV0ID0gW0BoZWFkIFwiMCAwIDEwMCAxMDBcIl1cbiAgICAgICAgICAgIHJldCArKz0gW1xuICAgICAgICAgICAgICAgIFwiXCJcIjxyZWN0IGZpbGw9XCIjYzJcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiLz5cIlwiXCJcbiAgICAgICAgICAgICAgICBcIlwiXCI8Zz48Zz5cIlwiXCJcbiAgICAgICAgICAgICAgICBbXCJcIlwiPHBvbHlnb24gZmlsbD1cIiNjMVwiIFwiXCJcIiArXG4gICAgICAgICAgICAgICAgIFwiXCJcInBvaW50cz1cIiN7LTkwICsgaSAqIDIwfSwxMDAgI3stMTAwICsgaSAqIDIwfSxcIlwiXCIgK1xuICAgICAgICAgICAgICAgICBcIlwiXCIxMDAgI3stNjAgKyBpICogMjB9LDAgI3stNTAgKyBpICogMjB9LDAgXCIvPlwiXCJcIiBmb3IgaSBmcm9tIDAgdGlsIDEzXS5qb2luKFwiXCIpXG4gICAgICAgICAgICAgICAgXCJcIlwiPC9nPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwidHJhbnNsYXRlXCIgXCJcIlwiXG4gICAgICAgICAgICAgICAgXCJcIlwiZnJvbT1cIjAsMFwiIHRvPVwiMjAsMFwiIGR1cj1cIiN7ZHVyfXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+PC9nPjwvc3ZnPlwiXCJcIlxuICAgICAgICAgICAgXS5qb2luKFwiXCIpXG4gICAgICAgICAgICB3cmFwIHJldFxuXG4gICAgICAgIGJ1YmJsZTogKGMxID0gXFwjMzlkLCBjMiA9IFxcIzljZiwgY291bnQgPSAxNSwgZHVyID0gMSwgc2l6ZSA9IDYsIHN3PTEpIC0+XG4gICAgICAgICAgICByZXQgPSBbQGhlYWQoXCIwIDAgMjAwIDIwMFwiKSwgXCJcIlwiPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgZmlsbD1cIiNjMVwiLz5cIlwiXCJdXG4gICAgICAgICAgICBmb3IgaSBmcm9tIDAgdGlsIGNvdW50ID0+XG4gICAgICAgICAgICAgICAgaWR4ID0gLShpIC8gY291bnQpICogZHVyXG4gICAgICAgICAgICAgICAgeCA9IE1hdGgucmFuZG9tISAqIDE4NCArIDhcbiAgICAgICAgICAgICAgICByID0gKCBNYXRoLnJhbmRvbSEgKiAwLjcgKyAwLjMgKSAqIHNpemVcbiAgICAgICAgICAgICAgICBkID0gZHVyICogKDEgKyBNYXRoLnJhbmRvbSEgKiAwLjUpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2ggW1xuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8Y2lyY2xlIGN4PVwiI3hcIiBjeT1cIjBcIiByPVwiI3JcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNjMlwiIHN0cm9rZS13aWR0aD1cIiNzd1wiPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3lcIiB2YWx1ZXM9XCIxOTA7LTEwXCIgdGltZXM9XCIwOzFcIiBcIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiZHVyPVwiI3tkfXNcIiBiZWdpbj1cIiN7aWR4fXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjwvY2lyY2xlPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8Y2lyY2xlIGN4PVwiI3hcIiBjeT1cIjBcIiByPVwiI3JcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNjMlwiIHN0cm9rZS13aWR0aD1cIiNzd1wiPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3lcIiB2YWx1ZXM9XCIzOTA7MTkwXCIgdGltZXM9XCIwOzFcIiBcIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiZHVyPVwiI3tkfXNcIiBiZWdpbj1cIiN7aWR4fXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjwvY2lyY2xlPlwiXCJcIlxuICAgICAgICAgICAgICAgIF0uam9pbihcIlwiKVxuICAgICAgICAgICAgd3JhcChyZXQuam9pbihcIlwiKSArIFwiPC9zdmc+XCIpXG5cbiAgICBoYW5kbGVyID1cbiAgICAgICAgcXVldWU6IHt9XG4gICAgICAgIHJ1bm5pbmc6IGZhbHNlXG4gICAgICAgIG1haW46ICh0aW1lc3RhbXApIC0+XG4gICAgICAgICAgICBrZWVwb24gPSBmYWxzZVxuICAgICAgICAgICAgcmVtb3ZlZCA9IFtdXG4gICAgICAgICAgICBmb3IgayxmdW5jIG9mIEBxdWV1ZSA9PlxuICAgICAgICAgICAgICAgIHJldCA9IGZ1bmMgdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgaWYgIXJldCA9PiByZW1vdmVkLnB1c2ggZnVuY1xuICAgICAgICAgICAgICAgIGtlZXBvbiA9IGtlZXBvbiBvciByZXRcbiAgICAgICAgICAgIGZvciBrLGZ1bmMgb2YgQHF1ZXVlID0+IGlmIHJlbW92ZWQuaW5kZXhPZihmdW5jKSA+PSAwID0+IGRlbGV0ZSBAcXVldWVba11cbiAgICAgICAgICAgIGlmIGtlZXBvbiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKH4+IEBtYWluIGl0KVxuICAgICAgICAgICAgZWxzZSBAcnVubmluZyA9IGZhbHNlXG4gICAgICAgIGFkZDogKGtleSwgZikgLT5cbiAgICAgICAgICAgIGlmICFAcXVldWVba2V5XSA9PiBAcXVldWVba2V5XSA9IGZcbiAgICAgICAgICAgIGlmICFAcnVubmluZyA9PlxuICAgICAgICAgICAgICAgIEBydW5uaW5nID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSAofj4gQG1haW4gaXQpXG5cblxuICAgIHdpbmRvdy5sZEJhciA9IGxkQmFyID0gKHNlbGVjdG9yLCBvcHRpb24gPSB7fSkgLT5cbiAgICAgICAgeG1sbnMgPSB4bGluazogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgcm9vdCA9IGlmIHR5cGVvZiEgc2VsZWN0b3IgaXMgXFxTdHJpbmdcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Igc2VsZWN0b3JcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc2VsZWN0b3JcblxuICAgICAgICBpZiAhcm9vdC5sZEJhciA9PiByb290LmxkQmFyID0gQFxuICAgICAgICBlbHNlIHJldHVybiByb290LmxkQmFyXG5cbiAgICAgICAgY2xzID0gcm9vdC5nZXRBdHRyaWJ1dGUoXFxjbGFzcykgb3IgJydcbiAgICAgICAgaWYgIX5jbHMuaW5kZXhPZignbGRCYXInKSA9PiByb290LnNldEF0dHJpYnV0ZSBcXGNsYXNzLCBcIiNjbHMgbGRCYXJcIlxuICAgICAgICBpZC1wcmVmaXggPSBcImxkQmFyLSN7TWF0aC5yYW5kb20hdG9TdHJpbmcgMTYgLnN1YnN0cmluZyAyfVwiXG4gICAgICAgIGlkID1cbiAgICAgICAgICAgIGtleTogaWQtcHJlZml4XG4gICAgICAgICAgICBjbGlwOiBcIiN7aWQtcHJlZml4fS1jbGlwXCJcbiAgICAgICAgICAgIGZpbHRlcjogXCIje2lkLXByZWZpeH0tZmlsdGVyXCJcbiAgICAgICAgICAgIHBhdHRlcm46IFwiI3tpZC1wcmVmaXh9LXBhdHRlcm5cIlxuICAgICAgICAgICAgbWFzazogXCIje2lkLXByZWZpeH0tbWFza1wiXG4gICAgICAgICAgICBtYXNrLXBhdGg6IFwiI3tpZC1wcmVmaXh9LW1hc2stcGF0aFwiXG4gICAgICAgIGRvbVRyZWUgPSAobixvKSAtPlxuICAgICAgICAgICAgbiA9IG5ld05vZGUgblxuICAgICAgICAgICAgZm9yIGssdiBvZiBvID0+IGlmIGsgIT0gXFxhdHRyID0+IG4uYXBwZW5kQ2hpbGQgZG9tVHJlZShrLCB2IG9yIHt9KVxuICAgICAgICAgICAgbi5hdHRycyhvLmF0dHIgb3Ige30pXG4gICAgICAgICAgICBuXG4gICAgICAgIG5ld05vZGUgPSAobikgLT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgblxuICAgICAgICBkb2N1bWVudC5ib2R5Ll9fcHJvdG9fXy5fX3Byb3RvX18uX19wcm90b19fXG4gICAgICAgICAgICAuLnRleHQgPSAodCkgLT4gQGFwcGVuZENoaWxkIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpXG4gICAgICAgICAgICAuLmF0dHJzID0gKG8pIC0+IGZvciBrLHYgb2YgbyA9PlxuICAgICAgICAgICAgICAgIHJldCA9IC8oW146XSspOihbXjpdKykvLmV4ZWMoaylcbiAgICAgICAgICAgICAgICBpZiAhcmV0IG9yICF4bWxuc1tyZXQuMV0gPT4gQHNldEF0dHJpYnV0ZSBrLCB2XG4gICAgICAgICAgICAgICAgZWxzZSBAc2V0QXR0cmlidXRlTlMgeG1sbnNbcmV0LjFdLCBrLCB2XG4gICAgICAgICAgICAuLnN0eWxlcyA9IChvKSAtPiBmb3Igayx2IG9mIG8gPT4gQHN0eWxlW2tdID0gdlxuICAgICAgICAgICAgLi5hcHBlbmQgPSAobikgLT4gQGFwcGVuZENoaWxkIHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgXCJodHRwOi8vd3d3LnczLm9nLzIwMDAvc3ZnXCIsIG5cbiAgICAgICAgICAgIC4uYXR0ciA9IChuLHYpIC0+IGlmIHY/ID0+IEBzZXRBdHRyaWJ1dGUgbiwgdiBlbHNlIEBnZXRBdHRyaWJ1dGUgblxuICAgICAgICBjb25maWcgPVxuICAgICAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgICAgICBcImltZ1wiOiAnJ1xuICAgICAgICAgICAgXCJwYXRoXCI6ICdNMTAgMTBMOTAgMTBNOTAgOE05MCAxMidcbiAgICAgICAgICAgIFwiZmlsbC1kaXJcIjogXFxidHRcbiAgICAgICAgICAgIFwiZmlsbFwiOiBcXCMyNWJcbiAgICAgICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAzXG4gICAgICAgICAgICBcInBhdHRlcm4tc2l6ZVwiOiBudWxsXG4gICAgICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXFwzXG4gICAgICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAxXG4gICAgICAgICAgICBcImVhc2luZ1wiOiBcXGxpbmVhclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiAwXG4gICAgICAgICAgICBcImltZy1zaXplXCI6IG51bGxcbiAgICAgICAgICAgIFwiYmJveFwiOiBudWxsXG4gICAgICAgICAgICBcInNldC1kaW1cIjogdHJ1ZVxuICAgICAgICAgICAgXCJhc3BlY3QtcmF0aW9cIjogXCJ4TWlkWU1pZFwiXG4gICAgICAgICAgICBcInRyYW5zaXRpb24taW5cIjogZmFsc2VcbiAgICAgICAgICAgIFwibWluXCI6IDBcbiAgICAgICAgICAgIFwibWF4XCI6IDEwMFxuICAgICAgICAgICAgXCJwcmVjaXNpb25cIjogMFxuICAgICAgICAgICAgXCJwYWRkaW5nXCI6IHVuZGVmaW5lZFxuXG4gICAgICAgIGNvbmZpZ1tcInByZXNldFwiXSA9IHJvb3QuYXR0cihcImRhdGEtcHJlc2V0XCIpIG9yIG9wdGlvbltcInByZXNldFwiXVxuXG4gICAgICAgIGlmIGNvbmZpZy5wcmVzZXQ/XG4gICAgICAgICAgICAjIHVzZSB0aGUgZGVmYXVsdCBwcmVzZXRcbiAgICAgICAgICAgIGNvbmZpZyA8PDwgcHJlc2V0c1tjb25maWcucHJlc2V0XVxuXG4gICAgICAgICMgb3ZlcndyaXRlIGlmIHRoZXJlIGFyZSBhcmd1bWVudHMgcGFzc2VkIHZpYSBkYXRhLSogYXR0cmlidXRlc1xuICAgICAgICBmb3IgYXR0ciBvZiBjb25maWdcbiAgICAgICAgICAgIGlmIHRoYXQgPSByb290LmF0dHIgXCJkYXRhLSN7YXR0cn1cIlxuICAgICAgICAgICAgICAgIGNvbmZpZ1thdHRyXSA9IHRoYXRcblxuICAgICAgICBjb25maWcgPDw8IG9wdGlvblxuICAgICAgICBpZiBjb25maWcuaW1nID0+IGNvbmZpZy5wYXRoID0gbnVsbFxuXG4gICAgICAgIGlzLXN0cm9rZSA9IGNvbmZpZy50eXBlID09IFxcc3Ryb2tlXG4gICAgICAgIHBhcnNlLXJlcyA9ICh2KSAtPlxuICAgICAgICAgICAgcGFyc2VyID0gL2RhdGE6bGRiYXJcXC9yZXMsKFteKCldKylcXCgoW14pXSspXFwpL1xuICAgICAgICAgICAgcmV0ID0gcGFyc2VyLmV4ZWModilcbiAgICAgICAgICAgIGlmICFyZXQgPT4gcmV0dXJuIHZcbiAgICAgICAgICAgIHJldCA9IG1ha2VbcmV0LjFdLmFwcGx5IG1ha2UsIHJldC4yLnNwbGl0KFxcLClcbiAgICAgICAgY29uZmlnLmZpbGwgPSBwYXJzZS1yZXMgY29uZmlnLmZpbGxcbiAgICAgICAgY29uZmlnLnN0cm9rZSA9IHBhcnNlLXJlcyBjb25maWcuc3Ryb2tlXG4gICAgICAgIGlmIGNvbmZpZ1tcInNldC1kaW1cIl0gPT0gXFxmYWxzZSA9PiBjb25maWdbXCJzZXQtZGltXCJdID0gZmFsc2VcblxuICAgICAgICBkb20gPVxuICAgICAgICAgICAgYXR0cjpcbiAgICAgICAgICAgICAgICBcInhtbG5zOnhsaW5rXCI6IFxcaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IGNvbmZpZ1tcImFzcGVjdC1yYXRpb1wiXVxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIlxuICAgICAgICAgICAgZGVmczpcbiAgICAgICAgICAgICAgICBmaWx0ZXI6XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5maWx0ZXIsIHg6IC0xLCB5OiAtMSwgd2lkdGg6IDMsIGhlaWdodDogM1xuICAgICAgICAgICAgICAgICAgICBmZU1vcnBob2xvZ3k6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogKGlmICtjb25maWdbXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiXT49MCA9PiBcXGRpbGF0ZSBlbHNlIFxcZXJvZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IE1hdGguYWJzKCtjb25maWdbXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiXSlcbiAgICAgICAgICAgICAgICAgICAgZmVDb2xvck1hdHJpeDogYXR0cjoge3ZhbHVlczogJzAgMCAwIDAgMSAgICAwIDAgMCAwIDEgICAgMCAwIDAgMCAxICAgIDAgMCAwIDEgMCcsIHJlc3VsdDogXCJjbVwifVxuICAgICAgICAgICAgICAgIG1hc2s6XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5tYXNrXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4bGluazpocmVmXCI6IGNvbmZpZy5pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJ1cmwoXFwjI3tpZC5maWx0ZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgcHJlc2VydmVBc3BlY3RSYXRpbzogY29uZmlnW1wiYXNwZWN0LXJhdGlvXCJdXG5cbiAgICAgICAgICAgICAgICBnOlxuICAgICAgICAgICAgICAgICAgICBtYXNrOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLm1hc2stcGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkOiBjb25maWcucGF0aCBvciBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXFwjZmZmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcXCNmZmZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwidXJsKFxcIyN7aWQuZmlsdGVyfSlcIlxuXG4gICAgICAgICAgICAgICAgY2xpcFBhdGg6XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5jbGlwXG4gICAgICAgICAgICAgICAgICAgIHJlY3Q6IHthdHRyOiBjbGFzczogXFxtYXNrLCBmaWxsOiBcXCMwMDB9XG4gICAgICAgICAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZC5wYXR0ZXJuLCBwYXR0ZXJuVW5pdHM6IFxcdXNlclNwYWNlT25Vc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6MCwgeTogMCwgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDBcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGF0dHI6IHg6IDAsIHk6IDAsIHdpZHRoOiAzMDAsIGhlaWdodDogMzAwXG5cbiAgICAgICAgc3ZnID0gZG9tVHJlZSBcXHN2ZywgZG9tXG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFxcZGl2XG4gICAgICAgIHRleHQuc2V0QXR0cmlidXRlIFxcY2xhc3MsIFxcbGRCYXItbGFiZWxcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCBzdmdcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCB0ZXh0XG5cbiAgICAgICAgZ3JvdXAgPSBbMCwwXVxuICAgICAgICBsZW5ndGggPSAwXG5cbiAgICAgICAgQGZpdCA9IH4+XG4gICAgICAgICAgICBpZiBjb25maWdbXCJiYm94XCJdID0+XG4gICAgICAgICAgICAgIGJveCA9IHRoYXQuc3BsaXQoJyAnKS5tYXAoLT4rKGl0LnRyaW0hKSlcbiAgICAgICAgICAgICAgYm94ID0ge3g6IGJveC4wLCB5OiBib3guMSwgd2lkdGg6IGJveC4yLCBoZWlnaHQ6IGJveC4zfVxuICAgICAgICAgICAgZWxzZSBib3ggPSBncm91cC4xLmdldEJCb3ghXG4gICAgICAgICAgICBpZiAhYm94IG9yIGJveC53aWR0aCA9PSAwIG9yIGJveC5oZWlnaHQgPT0gMCA9PiBib3ggPSB7eDogMCwgeTogMCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDB9XG4gICAgICAgICAgICBkID0gKE1hdGgubWF4LmFwcGx5KFxuICAgICAgICAgICAgICBudWxsLCA8W3N0cm9rZS13aWR0aCBzdHJva2UtdHJhaWwtd2lkdGggZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVdPi5tYXAoLT5jb25maWdbaXRdKSlcbiAgICAgICAgICAgICkgKiAxLjVcbiAgICAgICAgICAgIGlmIGNvbmZpZ1tcInBhZGRpbmdcIl0/ID0+IGQgPSArY29uZmlnW1wicGFkZGluZ1wiXVxuXG4gICAgICAgICAgICBzdmcuYXR0cnMgdmlld0JveDogW2JveC54IC0gZCwgYm94LnkgLSBkLCBib3gud2lkdGggKyBkICogMiwgYm94LmhlaWdodCArIGQgKiAyXS5qb2luKFwiIFwiKVxuICAgICAgICAgICAgaWYgY29uZmlnW1wic2V0LWRpbVwiXSA9PiA8W3dpZHRoIGhlaWdodF0+Lm1hcCB+PiBpZiAhcm9vdC5zdHlsZVtpdF0gb3IgQGZpdFtpdF0gPT5cbiAgICAgICAgICAgICAgcm9vdC5zdHlsZVtpdF0gPSBcIiN7Ym94W2l0XSArIGQgKiAyfXB4XCJcbiAgICAgICAgICAgICAgQGZpdFtpdF0gPSB0cnVlXG5cbiAgICAgICAgICAgIHJlY3QgPSBncm91cC4wLnF1ZXJ5U2VsZWN0b3IgXFxyZWN0XG4gICAgICAgICAgICBpZiByZWN0ID0+IHJlY3QuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICB4OiBib3gueCAtIGQsIHk6IGJveC55IC0gZCwgd2lkdGg6IGJveC53aWR0aCArIGQgKiAyLCBoZWlnaHQ6IGJveC5oZWlnaHQgKyBkICogMlxuXG4gICAgICAgIGlmIGNvbmZpZy5wYXRoID0+XG4gICAgICAgICAgICBpZiBpcy1zdHJva2UgPT5cbiAgICAgICAgICAgICAgICBncm91cC4wID0gZG9tVHJlZSBcXGcsIHBhdGg6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgIGQ6IGNvbmZpZy5wYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFxcbm9uZVxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXFxiYXNlbGluZVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGdyb3VwLjAgPSBkb21UcmVlIFxcZywgcmVjdDogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDBcbiAgICAgICAgICAgICAgICAgICAgbWFzazogXCJ1cmwoXFwjI3tpZC5tYXNrLXBhdGh9KVwiLCBmaWxsOiBjb25maWdbXCJmaWxsLWJhY2tncm91bmRcIl1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFxcZnJhbWVcblxuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkIGdyb3VwLjBcbiAgICAgICAgICAgIGdyb3VwLjEgPSBkb21UcmVlIFxcZywgcGF0aDogYXR0cjpcbiAgICAgICAgICAgICAgICBkOiBjb25maWcucGF0aCwgY2xhc3M6IGlmIGlzLXN0cm9rZSA9PiBcXG1haW5saW5lIGVsc2UgXFxzb2xpZFxuICAgICAgICAgICAgICAgIFwiY2xpcC1wYXRoXCI6IGlmIGNvbmZpZy50eXBlID09IFxcZmlsbCA9PiBcInVybChcXCMje2lkLmNsaXB9KVwiIGVsc2UgJydcbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZCBncm91cC4xXG4gICAgICAgICAgICBwYXRoMCA9IGdyb3VwLjAucXVlcnlTZWxlY3RvciAoaWYgaXMtc3Ryb2tlID0+IFxccGF0aCBlbHNlIFxccmVjdClcbiAgICAgICAgICAgIHBhdGgxID0gZ3JvdXAuMS5xdWVyeVNlbGVjdG9yIFxccGF0aFxuICAgICAgICAgICAgaWYgaXMtc3Ryb2tlID0+IHBhdGgxLmF0dHJzIGZpbGw6IFxcbm9uZVxuXG4gICAgICAgICAgICBwYXRpbWcgPSBzdmcucXVlcnlTZWxlY3RvciAncGF0dGVybiBpbWFnZSdcbiAgICAgICAgICAgIGltZyA9IG5ldyBJbWFnZSFcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyIFxcbG9hZCwgLT5cbiAgICAgICAgICAgICAgICBib3ggPSBpZiBjb25maWdbXCJwYXR0ZXJuLXNpemVcIl0gPT4ge3dpZHRoOiArdGhhdCwgaGVpZ2h0OiArdGhhdH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIGltZy53aWR0aCBhbmQgaW1nLmhlaWdodCA9PiB7d2lkdGg6IGltZy53aWR0aCwgaGVpZ2h0OiBpbWcuaGVpZ2h0fVxuICAgICAgICAgICAgICAgIGVsc2Uge3dpZHRoOiAzMDAsIGhlaWdodDogMzAwfVxuICAgICAgICAgICAgICAgIHN2Zy5xdWVyeVNlbGVjdG9yIFxccGF0dGVybiAuYXR0cnMge3dpZHRoOiBib3gud2lkdGgsIGhlaWdodDogYm94LmhlaWdodH1cbiAgICAgICAgICAgICAgICBwYXRpbWcuYXR0cnMge3dpZHRoOiBib3gud2lkdGgsIGhlaWdodDogYm94LmhlaWdodH1cbiAgICAgICAgICAgIGlmIC8uK1xcLi4rfF5kYXRhOi8uZXhlYyhpZiAhaXMtc3Ryb2tlID0+IGNvbmZpZy5maWxsIGVsc2UgY29uZmlnLnN0cm9rZSkgPT5cbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gaWYgIWlzLXN0cm9rZSA9PiBjb25maWcuZmlsbCBlbHNlIGNvbmZpZy5zdHJva2VcbiAgICAgICAgICAgICAgICBwYXRpbWcuYXR0cnMgXCJ4bGluazpocmVmXCI6IGltZy5zcmMgI2lmICFpcy1zdHJva2UgPT4gY29uZmlnLmZpbGwgZWxzZSBjb25maWcuc3Ryb2tlXG5cbiAgICAgICAgICAgIGlmIGlzLXN0cm9rZSA9PlxuICAgICAgICAgICAgICAgIHBhdGgwLmF0dHJzIHN0cm9rZTogY29uZmlnW1wic3Ryb2tlLXRyYWlsXCJdLCBcInN0cm9rZS13aWR0aFwiOiBjb25maWdbXCJzdHJva2UtdHJhaWwtd2lkdGhcIl1cbiAgICAgICAgICAgICAgICBwYXRoMS5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBjb25maWdbXCJzdHJva2Utd2lkdGhcIl1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBpZiAvLitcXC4uK3xeZGF0YTovLmV4ZWMoY29uZmlnLnN0cm9rZSkgPT4gXCJ1cmwoXFwjI3tpZC5wYXR0ZXJufSlcIiBlbHNlIGNvbmZpZy5zdHJva2VcbiAgICAgICAgICAgIGlmIGNvbmZpZy5maWxsIGFuZCAhaXMtc3Ryb2tlID0+XG4gICAgICAgICAgICAgICAgcGF0aDEuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICAgICAgZmlsbDogaWYgLy4rXFwuLit8XmRhdGE6Ly5leGVjKGNvbmZpZy5maWxsKSA9PiBcInVybChcXCMje2lkLnBhdHRlcm59KVwiIGVsc2UgY29uZmlnLmZpbGxcblxuICAgICAgICAgICAgbGVuZ3RoID0gcGF0aDEuZ2V0VG90YWxMZW5ndGghXG4gICAgICAgICAgICBAZml0IVxuICAgICAgICAgICAgQGluaXRlZCA9IHRydWVcbiAgICAgICAgZWxzZSBpZiBjb25maWcuaW1nID0+XG4gICAgICAgICAgICBpZiBjb25maWdbXCJpbWctc2l6ZVwiXSA9PlxuICAgICAgICAgICAgICAgIHJldCA9IGNvbmZpZ1tcImltZy1zaXplXCJdLnNwbGl0KFxcLClcbiAgICAgICAgICAgICAgICBzaXplID0ge3dpZHRoOiArcmV0LjAsIGhlaWdodDogK3JldC4xfVxuICAgICAgICAgICAgZWxzZSBzaXplID0ge3dpZHRoOiAxMDAsIGhlaWdodDogMTAwfVxuXG4gICAgICAgICAgICBncm91cC4wID0gZG9tVHJlZSBcXGcsIHJlY3Q6IGF0dHI6XG4gICAgICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIG1hc2s6IFwidXJsKFxcIyN7aWQubWFza30pXCIsIGZpbGw6IGNvbmZpZ1tcImZpbGwtYmFja2dyb3VuZFwiXVxuICAgICAgICAgICAgc3ZnLnF1ZXJ5U2VsZWN0b3IgJ21hc2sgaW1hZ2UnIC5hdHRycyBkb1xuICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0XG4gICAgICAgICAgICBncm91cC4xID0gZG9tVHJlZSBcXGcsIGltYWdlOiBhdHRyOlxuICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0LCB4OiAwLCB5OiAwLCBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBjb25maWdbXCJhc3BlY3QtcmF0aW9cIl1cbiAgICAgICAgICAgICAgICAjd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIHg6IDAsIHk6IDAsIHByZXNlcnZlQXNwZWN0UmF0aW86IFwieE1pZFlNaWRcIlxuICAgICAgICAgICAgICAgIFwiY2xpcC1wYXRoXCI6IGlmIGNvbmZpZy50eXBlID09IFxcZmlsbCA9PiBcInVybChcXCMje2lkLmNsaXB9KVwiIGVsc2UgJydcbiAgICAgICAgICAgICAgICBcInhsaW5rOmhyZWZcIjogY29uZmlnLmltZywgY2xhc3M6IFxcc29saWRcbiAgICAgICAgICAgIGltZyA9IG5ldyBJbWFnZSFcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyIFxcbG9hZCwgfj5cbiAgICAgICAgICAgICAgICBpZiBjb25maWdbXCJpbWctc2l6ZVwiXSA9PlxuICAgICAgICAgICAgICAgICAgICByZXQgPSBjb25maWdbXCJpbWctc2l6ZVwiXS5zcGxpdChcXCwpXG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSB7d2lkdGg6ICtyZXQuMCwgaGVpZ2h0OiArcmV0LjF9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiBpbWcud2lkdGggYW5kIGltZy5oZWlnaHQgPT4gc2l6ZSA9IHt3aWR0aDogaW1nLndpZHRoLCBoZWlnaHQ6IGltZy5oZWlnaHR9XG4gICAgICAgICAgICAgICAgZWxzZSBzaXplID0ge3dpZHRoOiAxMDAsIGhlaWdodDogMTAwfVxuICAgICAgICAgICAgICAgIHN2Zy5xdWVyeVNlbGVjdG9yICdtYXNrIGltYWdlJyAuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHRcbiAgICAgICAgICAgICAgICBncm91cC4xLnF1ZXJ5U2VsZWN0b3IgJ2ltYWdlJyAuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHRcblxuICAgICAgICAgICAgICAgIEBmaXQhXG4gICAgICAgICAgICAgICAgQHNldCB1bmRlZmluZWQsIGZhbHNlXG4gICAgICAgICAgICAgICAgQGluaXRlZCA9IHRydWVcbiAgICAgICAgICAgIGltZy5zcmMgPSBjb25maWcuaW1nXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQgZ3JvdXAuMFxuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkIGdyb3VwLjFcbiAgICAgICAgc3ZnLmF0dHJzIHdpZHRoOiBcXDEwMCUsIGhlaWdodDogXFwxMDAlICMsIHZpZXdCb3g6ICcwIDAgMTAwIDEwMCdcblxuICAgICAgICBAdHJhbnNpdGlvbiA9XG4gICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICBzcmM6IDBcbiAgICAgICAgICAgICAgICBkZXM6IDBcbiAgICAgICAgICAgIHRpbWU6IHt9XG5cbiAgICAgICAgICAgIGVhc2U6ICh0LGIsYyxkKSAtPlxuICAgICAgICAgICAgICAgIHQgPSB0IC8gKGQgKiAwLjUpXG4gICAgICAgICAgICAgICAgaWYgdCA8IDEgPT4gcmV0dXJuIGMgKiAwLjUgKiB0ICogdCArIGJcbiAgICAgICAgICAgICAgICB0ID0gdCAtIDFcbiAgICAgICAgICAgICAgICByZXR1cm4gLWMgKiAwLjUgKiAodCoodCAtIDIpIC0gMSkgKyBiXG5cbiAgICAgICAgICAgIGhhbmRsZXI6ICh0aW1lLCBkb1RyYW5zaXRpb24gPSB0cnVlKSAtPlxuICAgICAgICAgICAgICAgIGlmICFAdGltZS5zcmM/ID0+IEB0aW1lLnNyYyA9IHRpbWVcbiAgICAgICAgICAgICAgICBbbWluLG1heCxwcmVjXSA9IFtjb25maWdbXCJtaW5cIl0sIGNvbmZpZ1tcIm1heFwiXSwxL2NvbmZpZ1tcInByZWNpc2lvblwiXV1cbiAgICAgICAgICAgICAgICBbZHYsIGR0LCBkdXJdID0gW0B2YWx1ZS5kZXMgLSBAdmFsdWUuc3JjLCAodGltZSAtIEB0aW1lLnNyYykgKiAwLjAwMSwgK2NvbmZpZ1tcImR1cmF0aW9uXCJdIG9yIDFdXG4gICAgICAgICAgICAgICAgdiA9IGlmIGRvVHJhbnNpdGlvbiA9PiBAZWFzZShkdCwgQHZhbHVlLnNyYywgZHYsIGR1cikgZWxzZSBAdmFsdWUuZGVzXG4gICAgICAgICAgICAgICAgaWYgY29uZmlnLnByZWNpc2lvbiA9PiB2ID0gTWF0aC5yb3VuZCh2ICogcHJlYykgLyBwcmVjXG4gICAgICAgICAgICAgICAgZWxzZSBpZiBkb1RyYW5zaXRpb24gPT4gdiA9IE1hdGgucm91bmQodilcbiAgICAgICAgICAgICAgICB2ID4/PSBtaW5cbiAgICAgICAgICAgICAgICB2IDw/PSBtYXhcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gdlxuICAgICAgICAgICAgICAgIHAgPSAxMDAuMCAqICh2IC0gbWluICkgLyAoIG1heCAtIG1pbiApXG4gICAgICAgICAgICAgICAgaWYgaXMtc3Ryb2tlID0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBwYXRoMVxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0cm9rZS1kYXNoYXJyYXlcIjogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIGNvbmZpZ1tcInN0cm9rZS1kaXJcIl0gPT0gXFxyZXZlcnNlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMCAje2xlbmd0aCAqICgxMDAgLSBwKSAqIDAuMDF9ICN7bGVuZ3RoICogcCAqIDAuMDF9IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgPT4gXCIje3AgKiAwLjAxICogbGVuZ3RofSAjeygxMDAgLSBwKSAqIDAuMDEgKiBsZW5ndGggKyAxfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBib3ggPSBncm91cC4xLmdldEJCb3ghXG4gICAgICAgICAgICAgICAgICAgIGRpciA9IGNvbmZpZ1tcImZpbGwtZGlyXCJdXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0gaWYgZGlyID09IFxcYnR0IG9yICFkaXIgPT4gZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJveC55ICsgYm94LmhlaWdodCAqICgxMDAgLSBwKSAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYm94LmhlaWdodCAqIHAgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCwgd2lkdGg6IGJveC53aWR0aFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGRpciA9PSBcXHR0YiA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnksIGhlaWdodDogYm94LmhlaWdodCAqIHAgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCwgd2lkdGg6IGJveC53aWR0aFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGRpciA9PSBcXGx0ciA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnksIGhlaWdodDogYm94LmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYm94LngsIHdpZHRoOiBib3gud2lkdGggKiBwICogMC4wMVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGRpciA9PSBcXHJ0bCA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnksIGhlaWdodDogYm94LmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYm94LnggKyBib3gud2lkdGggKiAoMTAwIC0gcCkgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYm94LndpZHRoICogcCAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHN2Zy5xdWVyeVNlbGVjdG9yIFxccmVjdFxuICAgICAgICAgICAgICAgIG5vZGUuYXR0cnMgc3R5bGVcbiAgICAgICAgICAgICAgICBpZiBkdCA+PSBkdXIgPT4gZGVsZXRlIEB0aW1lLnNyYzsgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIHN0YXJ0OiAoc3JjLCBkZXMsIGRvVHJhbnNpdGlvbikgLT5cbiAgICAgICAgICAgICAgICBAdmFsdWUgPDw8IHtzcmMsIGRlc31cbiAgICAgICAgICAgICAgICAhISggcm9vdC5vZmZzZXRXaWR0aCB8fCByb290Lm9mZnNldEhlaWdodCB8fCByb290LmdldENsaWVudFJlY3RzIWxlbmd0aCApXG4gICAgICAgICAgICAgICAgaWYgIWRvVHJhbnNpdGlvbiBvciAhKCByb290Lm9mZnNldFdpZHRoIHx8IHJvb3Qub2Zmc2V0SGVpZ2h0IHx8IHJvb3QuZ2V0Q2xpZW50UmVjdHMhbGVuZ3RoICkgPT5cbiAgICAgICAgICAgICAgICAgICAgQHRpbWUuc3JjID0gMFxuICAgICAgICAgICAgICAgICAgICBAaGFuZGxlciAxMDAwLCBmYWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICBoYW5kbGVyLmFkZCBpZC5rZXksICh0aW1lKSB+PiByZXR1cm4gQGhhbmRsZXIgdGltZVxuXG4gICAgICAgIEBzZXQgPSAodixkb1RyYW5zaXRpb24gPSB0cnVlKSAtPlxuICAgICAgICAgICAgc3JjID0gQHZhbHVlIG9yIDBcbiAgICAgICAgICAgIGlmIHY/ID0+IEB2YWx1ZSA9IHYgZWxzZSB2ID0gQHZhbHVlXG4gICAgICAgICAgICBkZXMgPSBAdmFsdWVcbiAgICAgICAgICAgIEB0cmFuc2l0aW9uLnN0YXJ0IHNyYywgZGVzLCBkb1RyYW5zaXRpb25cblxuICAgICAgICBAc2V0ICgrY29uZmlnLnZhbHVlIG9yIDApLCBjb25maWdbXCJ0cmFuc2l0aW9uLWluXCJdIG9yIGZhbHNlXG4gICAgICAgIEBcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIFxcbG9hZCwgKC0+XG4gICAgICAgIGZvciBub2RlIGluIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXFwubGRCYXIpID0+XG4gICAgICAgICAgaWYgIW5vZGUubGRCYXIgPT4gbm9kZS5sZEJhciA9IG5ldyBsZEJhciBub2RlXG4gICAgKSwgZmFsc2VcblxubW9kdWxlLmV4cG9ydHMgPSBsZEJhclxuIiwiZXhwb3J0IHByZXNldHMgPVxuICAgIHJhaW5ib3c6XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ00xMCAxMEw5MCAxMCdcbiAgICAgICAgXCJzdHJva2VcIjogJ2RhdGE6bGRiYXIvcmVzLGdyYWRpZW50KDAsMSwjYTU1MWRmLCNmZDUxYWQsI2ZmN2Y4MiwjZmZiODc0LCNmZmViOTApJ1xuICAgICAgICBcImJib3hcIjogXCIxMCAxMCA4MCAxMFwiXG4gICAgZW5lcmd5OlxuICAgICAgICBcInR5cGVcIjogJ2ZpbGwnXG4gICAgICAgIFwicGF0aFwiOiAnTTE1IDVMODUgNUE1IDUgMCAwIDEgODUgMTVMMTUgMTVBNSA1IDAgMCAxIDE1IDUnXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcI2YwMFxuICAgICAgICBcImZpbGxcIjogJ2RhdGE6bGRiYXIvcmVzLGdyYWRpZW50KDQ1LDIsIzRlOSwjOGZiLCM0ZTkpJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFwibHRyXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjNDQ0XG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMVxuICAgICAgICBcImJib3hcIjogXCIxMCA1IDgwIDEwXCJcbiAgICBzdHJpcGU6XG4gICAgICAgIFwidHlwZVwiOiAnZmlsbCdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTUgNUw4NSA1QTUgNSAwIDAgMSA4NSAxNUwxNSAxNUE1IDUgMCAwIDEgMTUgNSdcbiAgICAgICAgXCJzdHJva2VcIjogXFwjZjAwXG4gICAgICAgIFwiZmlsbFwiOiAnZGF0YTpsZGJhci9yZXMsc3RyaXBlKCMyNWIsIzU4ZSwxKSdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcImx0clwiXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDFcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgNSA4MCAxMFwiXG4gICAgdGV4dDpcbiAgICAgICAgXCJ0eXBlXCI6ICdmaWxsJ1xuICAgICAgICBcImltZ1wiOiBcIlwiXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI3MFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCA3MCAyMFwiPjx0ZXh0IHg9XCIzNVwiIHk9XCIxMFwiIHRleHQtYW5jaG9yPVwibWlkZGxlXCIgZG9taW5hbnQtYmFzZWxpbmU9XCJjZW50cmFsXCIgZm9udC1mYW1pbHk9XCJhcmlhbFwiPkxPQURJTkc8L3RleHQ+PC9zdmc+XCJcIlwiXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMS4zXG4gICAgICAgIFwicGF0dGVybi1zaXplXCI6IDEwMFxuICAgICAgICBcImZpbGwtZGlyXCI6IFwibHRyXCJcbiAgICAgICAgXCJpbWctc2l6ZVwiOiBcIjcwLDIwXCJcbiAgICAgICAgXCJiYm94XCI6IFwiMCAwIDcwIDIwXCJcbiAgICBsaW5lOlxuICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTAgMTBMOTAgMTAnXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiAzXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsXCI6IFxcI2RkZFxuICAgICAgICBcInN0cm9rZS10cmFpbC13aWR0aFwiOiAxXG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDEwIDgwIDEwXCJcbiAgICBmYW46XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ00xMCA5MEE0MCA0MCAwIDAgMSA5MCA5MCdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICBcImZpbGxcIjogXFwjMjViXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDNcbiAgICAgICAgXCJzdHJva2UtZGlyXCI6IFxcbm9ybWFsXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICBcImJib3hcIjogXCIxMCA1MCA4MCA0MFwiXG4gICAgY2lyY2xlOlxuICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgXCJwYXRoXCI6ICdNNTAgMTBBNDAgNDAgMCAwIDEgNTAgOTBBNDAgNDAgMCAwIDEgNTAgMTAnXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXFxidHRcbiAgICAgICAgXCJmaWxsXCI6IFxcIzI1YlxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiBcXCNkZGRcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAzXG4gICAgICAgIFwic3Ryb2tlLWRpclwiOiBcXG5vcm1hbFxuICAgICAgICBcInN0cm9rZVwiOiBcXCMyNWJcbiAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXFwzXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsXCI6IFxcI2RkZFxuICAgICAgICBcInN0cm9rZS10cmFpbC13aWR0aFwiOiAwLjVcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgMTAgODAgODBcIlxuICAgIGJ1YmJsZTpcbiAgICAgICAgXCJ0eXBlXCI6ICdmaWxsJ1xuICAgICAgICBcInBhdGhcIjogJ001MCAxMEE0MCA0MCAwIDAgMSA1MCA5MEE0MCA0MCAwIDAgMSA1MCAxMCdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICBcImZpbGxcIjogJ2RhdGE6bGRiYXIvcmVzLGJ1YmJsZSgjMzlkLCNjZWYpJ1xuICAgICAgICBcInBhdHRlcm4tc2l6ZVwiOiBcIjE1MFwiXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDJcbiAgICAgICAgXCJzdHJva2UtZGlyXCI6IFxcbm9ybWFsXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICBcImJib3hcIjogXCIxMCAxMCA4MCA4MFwiXG4iLCIvL2TDqWZpbml0aW9uIGRlcyB2YXJpYWJsZXNcbmxldCBMaXN0ZVBsdWcgPSBbXSxcbiAgICBpID0gMCxcbiAgICB2YWxpZCA9IGZhbHNlO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGxldCBub21icmVfdXJsID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hbHN0b20vYmFzZWxpbmUtdHJhaW4vJyArIG5vbWJyZV91cmwpIHtcbiAgICAgICAgLy9pZGVudGlmaWNhdGlvbiBkZSBsYSBwcm9ncmVzcyBiYXJcbiAgICAgICAgcHJnYmFyID0gbmV3IGxkQmFyKFwiI3Rlc3QtcHJvZ3Jlc3NcIik7XG4gICAgfTtcbn0pO1xuLy8gRGVjbGFyYXRpb24gZCfDqXZlbmVtZW50IGF2YW50IGNoYXJnZW1lbnQgZGUgbCBhcGFnZVxuJCgnI3ZhbGlkLWFsbC1wbHVnJykuaGlkZSgpO1xuJCgnI2NhbmNlbC1hbGwtcGx1ZycpLmhpZGUoKTtcbi8vZGV0ZWN0aW9uIHNpIGxlIGJyb3dzZXIgZ8OocmUgbGUgZHJhZyZkcm9wXG52YXIgaXNBZHZhbmNlZFVwbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmV0dXJuICgoJ2RyYWdnYWJsZScgaW4gZGl2KSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiBkaXYgJiYgJ29uZHJvcCcgaW4gZGl2KSkgJiYgJ0Zvcm1EYXRhJyBpbiB3aW5kb3cgJiYgJ0ZpbGVSZWFkZXInIGluIHdpbmRvdztcbn0oKTtcbnZhciAkZm9ybSA9ICQoJy5ib3gnKTtcbnZhciAkaW5wdXQgPSAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLFxuICAgICRsYWJlbCA9ICRmb3JtLmZpbmQoJ2xhYmVsJyksXG4gICAgc2hvd0ZpbGVzID0gZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICAgICRsYWJlbC50ZXh0KGZpbGVzLmxlbmd0aCA+IDEgPyAoJGlucHV0LmF0dHIoJ2RhdGEtbXVsdGlwbGUtY2FwdGlvbicpIHx8ICcnKS5yZXBsYWNlKCd7Y291bnR9JywgZmlsZXMubGVuZ3RoKSA6IGZpbGVzWzBdLm5hbWUpO1xuICAgIH07XG5cbi8vYWpvdXRlciB1biBwbHVnXG5cbiQoJyNhZGQtZm9ybS1wbHVnJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIC8vICQoJyNjYXJkLWNvbnRlbnQtcGx1ZycpLmFwcGVuZChcInRlc3RcIik7XG4gICAgLy8gY29uc29sZS5sb2coJCgnLmNvbnRlbnQtbmFtZS1kcmFnLXBsdWcnKSlcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgICAkKCcjaW5wdXQtbmFtZS1wbHVnJykudmFsKCcnKTtcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZmFsc2U7XG4gICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy1zdWNjZXNzJyk7XG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykuY3NzKCdmb250LXdlaWdodCcsICcnKTtcbiAgICAgICAgJCgnLmxhYmVsLWRyb3AnKS5odG1sKCc8c3Ryb25nPiBDaG9vc2UgYSBmaWxlIDwvc3Ryb25nPiA8c3BhbiBjbGFzcz1cImJveF9fZHJhZ25kcm9wXCI+b3IgZHJhZyBpdCBoZXJlIDwvc3Bhbj4uPC9sYWJlbD4nKTtcbiAgICAgICAgJCgnI2NvbnRlbnQtbmFtZS1kcmFnLXBsdWcnKS5zaG93KCk7XG4gICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufSlcbi8vb24gb3V2cmUgbGUgZm9ybSBwb3VyIGFqb3V0ZXJcblxuJCgnI2FkZFBsdWdzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn0pO1xuaWYgKGlzQWR2YW5jZWRVcGxvYWQpIHtcbiAgICB2YXIgZHJvcHBlZEZpbGVzID0gZmFsc2U7XG4gICAgJGZvcm0uYWRkQ2xhc3MoJ2hhcy1hZHZhbmNlZC11cGxvYWQnKTsgLy8gbGV0dGluZyB0aGUgQ1NTIHBhcnQgdG8ga25vdyBkcmFnJmRyb3AgaXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyXG4gICAgJGZvcm0ub24oJ2RyYWcgZHJhZ3N0YXJ0IGRyYWdlbmQgZHJhZ292ZXIgZHJhZ2VudGVyIGRyYWdsZWF2ZSBkcm9wJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICAgICRmb3JtLm9uKCdkcmFnb3ZlciBkcmFnZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRmb3JtLmFkZENsYXNzKCdpcy1kcmFnb3ZlcicpO1xuICAgIH0pO1xuICAgICRmb3JtLm9uKCdkcmFnbGVhdmUgZHJhZ2VuZCBkcm9wJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkZm9ybS5yZW1vdmVDbGFzcygnaXMtZHJhZ292ZXInKTtcblxuICAgIH0pO1xuICAgICRmb3JtLm9uKCdkcm9wJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICAgICAgJGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykudGV4dChkcm9wcGVkRmlsZXNbMF0ubmFtZSk7XG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykuY3NzKCdmb250LXdlaWdodCcsICdib2xkJyk7XG4gICAgfSk7XG4gICAgJGZvcm0uY2hhbmdlKCdkcm9wJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICAgICAgJGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfSk7XG59XG4kZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnI3ZhbGlkLXBsdWcnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBQbHVnID0ge307XG4gICAgaWYgKCQoJyNpbnB1dC1uYW1lLXBsdWcnKS52YWwoKSAhPSBcIlwiICYmIGRyb3BwZWRGaWxlcykge1xuXG4gICAgICAgICQoJyN2YWxpZC1hbGwtcGx1ZycpLnNob3coKTtcbiAgICAgICAgJCgnI2NhbmNlbC1hbGwtcGx1ZycpLnNob3coKTtcblxuICAgICAgICBQbHVnWyduYW1lX3BsdWcnXSA9ICQoJyNpbnB1dC1uYW1lLXBsdWcnKS52YWwoKTtcblxuICAgICAgICAvLyBQYXJ0aSBkdSB0cmFpdGVtZW50IGR1IGRyYWcgYW4gZHJvcCBmaWxlXG4gICAgICAgIGlmICgkZm9ybS5oYXNDbGFzcygnaXMtdXBsb2FkaW5nJykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgc2hvd0ZpbGVzKGRyb3BwZWRGaWxlcyk7XG4gICAgICAgICRmb3JtLmFkZENsYXNzKCdpcy11cGxvYWRpbmcnKS5yZW1vdmVDbGFzcygnaXMtZXJyb3InKTtcblxuICAgICAgICBpZiAoaXNBZHZhbmNlZFVwbG9hZCkge1xuICAgICAgICAgICAgdmFyIGFqYXhEYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtLmdldCgwKSk7XG5cbiAgICAgICAgICAgIGlmIChkcm9wcGVkRmlsZXMpIHtcbiAgICAgICAgICAgICAgICAkLmVhY2goZHJvcHBlZEZpbGVzLCBmdW5jdGlvbiAoaSwgZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBhamF4RGF0YS5hcHBlbmQoJGlucHV0LmF0dHIoJ25hbWUnKSwgZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIFBsdWdbJ2tleV9wbHVnJ10gPSBmaWxlLm5hbWU7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFqYXhEYXRhKTtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS91cGxvYWRGaWxlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgLypkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICdmaWxlJyA6IGFqYXhEYXRhLFxuICAgICAgICAgICAgICAgICAgICAnYnVja2V0JzogJ2FwcGxpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgJ3VwbG9hZF9yZXF1ZXN0JzogXCJ1cGxvYWRcIlxuICAgICAgICAgICAgICAgIH0sKi9cbiAgICAgICAgICAgICAgICB4aHI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZ0LmxvYWRlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGVyY2VudENvbXBsZXRlID0gKGV2dC5sb2FkZWQgLyBldnQudG90YWwpICogMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vRG8gc29tZXRoaW5nIHdpdGggdXBsb2FkIHByb2dyZXNzIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmdiYXIuc2V0KHBlcmNlbnRDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBlcmNlbnRDb21wbGV0ZSA9PSAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN0ZXN0LXByb2dyZXNzXCIpLmFkZENsYXNzKCdpcy1ibGluaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldnQubG9hZGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnRvdGFsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhocjtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZGF0YTogYWpheERhdGEsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkZm9ybS5yZW1vdmVDbGFzcygnaXMtdXBsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjdGVzdC1wcm9ncmVzc1wiKS5yZW1vdmVDbGFzcygnaXMtYmxpbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVQbHVnLnB1c2goUGx1Zyk7XG4gICAgICAgICAgICAgICAgICAgIExpc3RlUGx1Zy5mb3JFYWNoKHdyaXRlUGx1Zyk7XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGRhdGEuc3VjY2VzcyA9PSB0cnVlID8gJ2lzLXN1Y2Nlc3MnIDogJ2lzLWVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNjb250ZW50LW5hbWUtZHJhZy1wbHVnJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKExpc3RlUGx1ZylcblxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2cgdGhlIGVycm9yLCBzaG93IGFuIGFsZXJ0LCB3aGF0ZXZlciB3b3JrcyBmb3IgeW91XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29ycnkgYm9ieVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpZnJhbWVOYW1lID0gJ3VwbG9hZGlmcmFtZScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICRpZnJhbWUgPSAkKCc8aWZyYW1lIG5hbWU9XCInICsgaWZyYW1lTmFtZSArICdcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9pZnJhbWU+Jyk7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJGlmcmFtZSk7XG4gICAgICAgICAgICAkZm9ybS5hdHRyKCd0YXJnZXQnLCBpZnJhbWVOYW1lKTtcblxuICAgICAgICAgICAgJGlmcmFtZS5vbmUoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKCRpZnJhbWUuY29udGVudHMoKS5maW5kKCdib2R5JykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAkZm9ybVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLXVwbG9hZGluZycpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSA/ICdpcy1zdWNjZXNzJyA6ICdpcy1lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuc3VjY2VzcykgJGVycm9yTXNnLnRleHQoZGF0YS5lcnJvcik7XG4gICAgICAgICAgICAgICAgJGZvcm0ucmVtb3ZlQXR0cigndGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgJGlmcmFtZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBuYW1lICYgZmlsZSBwbHVnJylcbiAgICB9XG5cblxufSlcblxuJCgnI3Rlc3QtdXBsb2FkJykub24oXCJjbGlja1wiLCBcImJ1dHRvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpbGVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIikuZmlsZXM7XG4gICAgdmFyIHRlbXBEZXN0aW5hdGlvbiA9IFwidGVzdFwiXG4gICAgdmFyIG5hbWVGaWxlID0gXCJpbml0XCJcbiAgICB2YXIgdXBsb2FkU3RhdHVzID0gXCJQRU5ESU5HXCJcbiAgICAvL09uIGRyYWcgZXQgZHJvcFxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogJy9hbHN0b20vcmVxdWVzdEZpbGUnLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICdidWNrZXQnOiAnYXBwbGljYXRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgdGVtcERlc3RpbmF0aW9uID0gcmVzcG9uc2UucGF0aFxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWxzdG9tL3VwbG9hZEZpbGUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICdidWNrZXQnOiAnYXBwbGljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAndXBsb2FkX3JlcXVlc3QnOiBcInVwbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICAnZmlsZW5hbWUnOiBuYW1lRmlsZSxcbiAgICAgICAgICAgICAgICAgICAgJ3RlbXBEZXN0aW5hdGlvbic6IHRlbXBEZXN0aW5hdGlvblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvL2FzayBmb3IgdGhlIHN0YXR1c1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjFcIik7XG4gICAgICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuJCgnI3ZhbGlkLWFsbC1wbHVnJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsIFwiMC40XCIpO1xuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XG4gICAgbGV0IGlkQmFzZWxpbmUgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9mbHVzaC1wbHVnJyxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAnaWRCYXNlbGluZSc6IGlkQmFzZWxpbmUsXG4gICAgICAgICAgICAnUGx1Z3MnOiBMaXN0ZVBsdWdcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvL2FzayBmb3IgdGhlIHN0YXR1c1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuJCgnI2NvbnRlbnQtdHItcGx1ZycpLm9uKCdjbGljaycsICcudGQtdGFibGUgPiAudGQtcGx1ZycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjAuNFwiKTtcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xuXG4gICAgbGV0IGtleSA9ICQodGhpcylbMF1bXCJpZFwiXTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICcvYWxzdG9tL2Rvbndsb2FkRmlsZScsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgJ2tleSc6IGtleVxuICAgICAgICB9LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgXCIxXCIpO1xuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG5cblxuLy9Hw6lyZSBsZSBjbGlxdWUgZGUgbGEgc3VwcHJlc3Npb25cbiQoJyNzaG93LWRvbmUtcGx1ZycpLm9uKCdjbGljaycsICcuY29udGVudC1rZXktbmFtZS1wbHVnID4gYScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKVswXVtcImlkXCJdWzBdID09IFwiZFwiKSB7XG4gICAgICAgIGRlbGV0ZVBsdWcoZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiaWRcIl0pKTtcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKVswXVtcImlkXCJdKTtcbiAgICB9XG59KTtcbi8vRXh0cmFpdCBsZSBub21icmUgZCd1bmUgc3RyZWluZ1xuZnVuY3Rpb24gZXh0cmFpdE5vbWJyZShzdHIpIHtcbiAgICByZXR1cm4gTnVtYmVyKHN0ci5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIikpXG59XG4vL1N1cHJlc3Npb24gZHUgcGx1ZyBkYW5zIGxlIHRhYmxlYXUgZXQgbGUgZnJvbnRcbmZ1bmN0aW9uIGRlbGV0ZVBsdWcocG9zaXRpb24pIHtcbiAgICBMaXN0ZVBsdWcuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAkKCcuY29udGVudC1rZXktbmFtZS1wbHVnJykucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2coTGlzdGVQbHVnKVxuICAgIExpc3RlUGx1Zy5mb3JFYWNoKHdyaXRlUGx1Zyk7XG59XG5cbmZ1bmN0aW9uIHdyaXRlUGx1ZyhlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcbiAgICAvL1Rlc3QgbCdleGlzdGVuY2UgZGUgbGEgZGl2IGRhbnMgbGUgY2FzIG/DuSBlbGxlIGV4aXN0ZSBsYSByZW1wbGFjZSBzaSBwYXMgbGEgbWV0IGVuIHBsYWNlXG4gICAgaWYgKCQoJyNrZXktbmFtZS0nICsgaW5kZXgpLmxlbmd0aCkge1xuICAgICAgICAkKCcja2V5LW5hbWUtJyArIGluZGV4KS5yZXBsYWNlV2l0aChcIjxzcGFuIGNsYXNzPSdjb250ZW50LWtleS1uYW1lLXBsdWcnIGlkPSdrZXktbmFtZS1cIiArIGluZGV4ICsgXCInPjxwPlwiICsgZWxlbWVudC5uYW1lX3BsdWcgKyBcIjwvcD48cD5cIiArIGVsZW1lbnQua2V5X3BsdWcgKyBcIjwvcD48YSBpZD0nZGVsZXRlLXBsdWctXCIgKyBpbmRleCArIFwiJz48aSBjbGFzcz0nZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZSc+PC9pPjwvYT48L3NwYW4+XCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI3Nob3ctZG9uZS1wbHVnJykuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J2NvbnRlbnQta2V5LW5hbWUtcGx1ZycgaWQ9J2tleS1uYW1lLVwiICsgaW5kZXggKyBcIic+PHA+XCIgKyBlbGVtZW50Lm5hbWVfcGx1ZyArIFwiPC9wPjxwPlwiICsgZWxlbWVudC5rZXlfcGx1ZyArIFwiPC9wPjxhIGlkPSdkZWxldGUtcGx1Zy1cIiArIGluZGV4ICsgXCInPjxpIGNsYXNzPSdmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlJz48L2k+PC9hPjwvc3Bhbj5cIik7XG4gICAgfVxuXG59IiwiLy8gVmlkYWdlIGRlcyBpbnB1dHMgYXV4IGNoYW5nZW1lbnQgZGUgc2VsZWN0XHJcbi8vICQoJ3NlbGVjdFtuYW1lPVwidHJhaW5zW3Byb2plY3RzXVwiXSwgc2VsZWN0W25hbWU9XCJ0cmFpbnNbdHJhaW5UeXBlXVwiXScpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAkKCdpbnB1dFtuYW1lPVwidHJhaW5zW25hbWVdXCJdJykudmFsKCcnKTtcclxuLy8gfSk7XHJcblxyXG4vKk1hc3F1YWdlIGRlIGNlcnRhaW5zIMOpbGVtZW50ICovXHJcbiQoJyNjcmVhdGUtZXJ0bXMtMScpLmhpZGUoKTtcclxuJCgnI2NyZWF0ZS1lcnRtcy0yJykuaGlkZSgpO1xyXG4kKFwiI2NyZWF0ZS1lcnRtcy10cmFpbi0xXCIpLmhpZGUoKTtcclxuJCgnI2NyZWF0ZV9zb3VzdHlwZScpLmhpZGUoKTtcclxuJCgnI2NyZWF0ZV90eXBlJykuaGlkZSgpO1xyXG4kKCcjbW9kYWwtYm9keScpLmhpZGUoKTtcclxuJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiQoJyNjbG9zZS1tb2RhbC1mb3JtLWJhc2VsaW5lLXRyYWluJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbn0pXHJcbmZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLScgKyBpKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG59XHJcbmxldCBpZEVxdWlwbWVudCA9IFwiXCIsXHJcbiAgICBpbmRleEVWQztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBub21icmVfdXJsID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2Fsc3RvbS9JbnN0YW5jZUJhc2VsaW5lLycgKyBub21icmVfdXJsKSB7XHJcblxyXG4gICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tCYXNlbGluZVwiLCApLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VsZWN0X2Jhc2VsaW5lXzEnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgICQoJyNzZWxlY3RfYmFzZWxpbmVfMicpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgJCgnI3NlbGVjdF9iYXNlbGluZV8xJykudmFsKCcnKTtcclxuICAgICAgICAgICAgJCgnI3NlbGVjdF9iYXNlbGluZV8yJykudmFsKCcnKTtcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSlcclxuXHJcbiQoJyNzZWxlY3RfdHJhaW4nKS5zaG93KCk7XHJcbiQoJyNzZWxlY3RfbG9jb21vdGl2ZScpLnNob3coKTtcclxuXHJcbmxldCBjdXJyZW50X2Nob2ljZSA9IFwiXCIsXHJcbiAgICBlcnRtc19sZWZ0ID0gZmFsc2UsXHJcbiAgICBlcnRtc19taWRkbGUgPSBmYWxzZSxcclxuICAgIGVydG1zX3JpZ2h0ID0gZmFsc2U7XHJcblxyXG4kKCcjY2xvc2UtbW9kYWwtYmFzZWxpbmUtMScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChlcnRtc19yaWdodCA9PSB0cnVlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuYWRkQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICBlcnRtc19sZWZ0ID0gZmFsc2U7XHJcbn0pXHJcbiQoJyNjbG9zZS1tb2RhbC1iYXNlbGluZS0yJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuaGlkZSgpO1xyXG4gICAgZXJ0bXNfcmlnaHQgPSBmYWxzZTtcclxufSlcclxuJCgnI2VydG1zLXRyYWluLTEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlcnRtc19sZWZ0ID0gdHJ1ZTtcclxuICAgIGVydG1zX21pZGRsZSA9IGZhbHNlO1xyXG4gICAgLy9sJ2VydG1zIGRlIGdhdWNoZSBzZWxlY3Rpb25uZXJcclxuICAgICQoJyNlcnRtcy10cmFpbi0xJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy10cmFpbi0yJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNsYWJlbC1iYXNlbGluZS0xJykudGV4dCgnQmFzZWxpbmUgbGVmdCcpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC0zJyk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5zaG93KCk7XHJcbiAgICBpZiAoZXJ0bXNfcmlnaHQgPT0gZmFsc2UpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5oaWRlKCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICB9XHJcblxyXG5cclxufSk7XHJcbiQoJyNlcnRtcy10cmFpbi0yJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gbCdlcnRtcyBkdSBtaWxpZXUgc2VsZWN0aW9ubmVyXHJcbiAgICBlcnRtc19sZWZ0ID0gZmFsc2U7XHJcbiAgICBlcnRtc19yaWdodCA9IGZhbHNlO1xyXG4gICAgZXJ0bXNfbWlkZGxlID0gdHJ1ZTtcclxuICAgICQoJyNlcnRtcy10cmFpbi0yJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy10cmFpbi0xJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy10cmFpbi0zJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNsYWJlbC1iYXNlbGluZS0xJykudGV4dCgnQmFzZWxpbmUgbWlkbGUnKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmhpZGUoKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnNob3coKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmFkZENsYXNzKCdvZmZzZXQtbWQtMycpO1xyXG5cclxufSk7XHJcbiQoJyNlcnRtcy10cmFpbi0zJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gbCdlcnRtcyBkZSBkcm9pdGUgc2VsZWN0aW9ubmVyXHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMycpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICBlcnRtc19yaWdodCA9IHRydWU7XHJcbiAgICBlcnRtc19taWRkbGUgPSBmYWxzZTtcclxuICAgICQoJyNsYWJlbC1iYXNlbGluZS0yJykudGV4dCgnQmFzZWxpbmUgcmlnaHQnKTtcclxuICAgIGlmIChlcnRtc19sZWZ0ID09IHRydWUgJiYgZXJ0bXNfbWlkZGxlID09IGZhbHNlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC0zJyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuc2hvdygpO1xyXG4gICAgfSBlbHNlIGlmIChlcnRtc19yaWdodCA9PSB0cnVlICYmIGVydG1zX2xlZnQgPT0gZmFsc2UpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTMnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuYWRkQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgICQoJyNlcnRtcy10cmFpbi0yJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxufSk7XHJcblxyXG5cclxuJCgnI2VydG1zLWxvY28tMScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGVydG1zX2xlZnQgPSB0cnVlO1xyXG4gICAgaWYgKGVydG1zX3JpZ2h0ID09IHRydWUpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnNob3coKTtcclxuICAgIH1cclxuICAgICQoJyNsYWJlbC1iYXNlbGluZS0xJykudGV4dCgnQmFzZWxpbmUgbGVmdCcpO1xyXG4gICAgJCgnI2VydG1zLWxvY28tMScpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtbG9jby0yJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNidG4tYmFzZWxpbmUtMScpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTMnKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG59KTtcclxuJCgnI2VydG1zLWxvY28tMicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGVydG1zX3JpZ2h0ID0gdHJ1ZTtcclxuICAgICQoJyNsYWJlbC1iYXNlbGluZS0yJykudGV4dCgnQmFzZWxpbmUgcmlnaHQnKTtcclxuICAgICQoJyNidG4tYmFzZWxpbmUtMycpLmNzcygnb3BhY2l0eScsICcxJylcclxuICAgICQoJyNidG4tYmFzZWxpbmUtMScpLmNzcygnb3BhY2l0eScsICcwJylcclxuICAgICQoJyNlcnRtcy1sb2NvLTInKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLWxvY28tMScpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICBpZiAoZXJ0bXNfbGVmdCA9PSB0cnVlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcblxyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuYWRkQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuc2hvdygpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuLy9SZWN1cGVyZSBsZSBzZWxlY3QgZGUgbGEgYmFzZWxpbmUgZXQgbGUgbWV0IGVuIHZpc3VlbFxyXG4kKCcjYWRkLWJhc2VsaW5lLTEnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICBpZiAoZXJ0bXNfbWlkZGxlKSB7XHJcbiAgICAgICAgJCgnI2VydG1zLXRyYWluLTMnKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgICAgICQoJyNlcnRtcy10cmFpbi0xJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgIH0gZWxzZSBpZiAoZXJ0bXNfbGVmdCkge1xyXG4gICAgICAgICQoJyNlcnRtcy10cmFpbi0yJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgIH1cclxuICAgIC8vICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgIGxldCBpZEJhc2VsaW5lID0gJCgnI3NlbGVjdF9iYXNlbGluZV8xIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpO1xyXG4gICAgJCgnI3RpdGxlX2Jhc2VsaW5lX21vZGFsJykuaHRtbCgkKCcjc2VsZWN0X2Jhc2VsaW5lXzEgb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpKTtcclxuICAgIC8vICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL0NoZWNrRXF1aXBlbWVudHMvJyArIGlkQmFzZWxpbmUsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCAnMC40Jyk7XHJcbiAgICAgICAgICAgIGxldCBFcXVpcG1lbnRzID0gSlNPTi5wYXJzZShyZXNwb25zZS5lcXVpcG1lbnRzKTtcclxuXHJcbiAgICAgICAgICAgIEVxdWlwbWVudHMuZm9yRWFjaChDb3VudE51bWJlckVxdWlwdCk7XHJcbiAgICAgICAgICAgIEVxdWlwbWVudHMuZm9yRWFjaChGaW5kSW5kZXhFdmMpO1xyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLmZvckVhY2gocmV0dXJuSW5kZXhFbGVtZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG5cclxuJCgnI2FkZC1iYXNlbGluZS0yJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJyNlcnRtcy10cmFpbi0yJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuXHJcbiAgICAvLyAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICBsZXQgbmFtZV9iYXNlbGluZV8xID0gJCgnI3NlbGVjdF9iYXNlbGluZV8yIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpO1xyXG4gICAgY29uc29sZS5sb2cobmFtZV9iYXNlbGluZV8xKVxyXG4gICAgLy8gJCgnI2NvbnRlbnQtbmFtZS1iYXNlbGluZS0xJykuYXBwZW5kKFwiPGg1PlwiICsgbmFtZV9iYXNlbGluZV8xICsgXCI8L2g1PlwiKVxyXG5cclxufSlcclxuXHJcbi8vIFJlcXVldGUgQUpBWCBwb3VyIHJlbXBsaXIgbGUgZm9ybXVsYWlyZSBkJ8OpcXVpcGVtZW50IGF2ZWMgbCdlcXVpcGVtZW50IHNlbGVjdGlvbm5lclxyXG4kKCcjc2hvdy1lcXVpcG1lbnQgJykub24oJ2NsaWNrJywgJy5kZXNjcmlwdGlvbiA+IC5jb250ZW50LWRlc2NyaXB0aW9uLWR0ciA+IGJ1dHRvbicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIGlkRXF1aXBtZW50ID0gZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiaWRcIl0pXHJcbiAgICB2YXIgJHRoaXMgPSAkKFwiI2Zvcm1fZXF1aXBlbWVudF9lZGl0X2Jhc2VsaW5lXCIpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQtYmFzZWxpbmUvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbChyZXNwb25zZVtcInR5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgIGRhdGFbJCgnI2VxdWlwZW1lbnRfVHlwZScpLmF0dHIoJ25hbWUnKV0gPSAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaSBpbnB1dCBhdmVjIHZhbGV1ciByZWN1IGRlIGwnZXF1aXBlbWVudFxyXG4gICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9UeXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X3NvdXNfdHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJTb3VzVHlwZVwiXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiU291c1R5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9EVFJfYm9hcmQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiZFRSQm9hcmRcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9JbmRpY2VfRFRSJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImluZGljZURUUlwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X051bV9zZXJpZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJudW1TZXJpZVwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuLy9SZW1wbGlyIGxlcyBpbnB1dHMgYXZlYyBsZXMgbm91dmVsbGVzIHZhbGV1cnNcclxuJCgnI3NvdW1pc3Npb24tZXF1aXBlbWVudC1lZGl0LWJhc2VsaW5lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcbiAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxufSlcclxubGV0IG5ld19lcXVpcG1lbnRfbnVtID0gXCJcIixcclxuICAgIHRvdGFsRXF1aXB0ID0gXCJcIixcclxuICAgIG5ld19lcXVpcG1lbnRfbnVtX3NlcmllID0gW107XHJcblxyXG4vLyBTb3VtaXNzaW9uIGZvcm11bGFpcmUgZGUgdHJhaW5cclxuJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0X2Jhc2VsaW5lJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcblxyXG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH0pXHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LWJhc2VsaW5lLycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGVxdWlwZW1lbnQ6IGRhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcjYnRuLWFkZC1udW1iZXItc2VyaWUnICsgaWRFcXVpcG1lbnQpLnJlcGxhY2VXaXRoKFwiPHA+XCIgKyByZXNwb25zZS5udW1TZXJpZSArIFwiPC9wPlwiKVxyXG4gICAgICAgICAgICBuZXdfZXF1aXBtZW50X251bV9zZXJpZS5wdXNoKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbmV3X2VxdWlwbWVudF9udW0rKztcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcbi8vVmFsaWRlciBsJ2luc3RhbmNlIGRlcyBlcXVpcGVtZW50c1xyXG4kKCcjdmFsaWQtYmFzZWxpbmUtdHJhaW4nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAobmV3X2VxdWlwbWVudF9udW0gIT0gdG90YWxFcXVpcHQpIHtcclxuICAgICAgICBhbGVydCgncGxlYXNlIGVudGVyIG51bSBzZXJpZSBiZWZvcmUgaW5zdGFuY2UgYmFzZWxpbmUnKVxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgbGV0IGlkX3RyYWluID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgIGxldCBpZF9iYXNlbGluZSA9ICQoJyNzZWxlY3RfYmFzZWxpbmVfMSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYWxzdG9tL2FkZEJhc2VsaW5lSW5zdGFuY2llcicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWRfdHJhaW46IGlkX3RyYWluLFxyXG4gICAgICAgICAgICAgICAgYmFzZWxpbmU6IGlkX2Jhc2VsaW5lLFxyXG4gICAgICAgICAgICAgICAgbmV3X2VxdWlwdDogbmV3X2VxdWlwbWVudF9udW1fc2VyaWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYWxzdG9tL2Jhc2VsaW5lLXRyYWluL1wiICsgcmVzcG9uc2UuaWRiYXNlbGluZTtcclxuICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pXHJcbi8vIFJlcXVldGUgQUpBWCBwb3VyIHJlbXBsaXIgbGUgZm9ybXVsYWlyZSBkJ8OpcXVpcGVtZW50IGF2ZWMgbCdlcXVpcGVtZW50IHNlbGVjdGlvbm5lciBpbnN0YW5jaWVyXHJcbiQoJy5jYXJkJykub24oJ2NsaWNrJywgJy5lZGl0LWRlbGV0ZS1lcXVpcGVtZW50ID4gYScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICBpZEVxdWlwbWVudCA9IGV4dHJhaXROb21icmUoJCh0aGlzKVswXVtcImNsYXNzTGlzdFwiXVswXSlcclxuICAgIHZhciAkdGhpcyA9ICQoXCIjZm9ybV9lcXVpcGVtZW50X2VkaXRfaW5zdGFuY2VcIik7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC1pbnN0YW5jZS8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwocmVzcG9uc2VbXCJ0eXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICBkYXRhWyQoJyNlcXVpcGVtZW50X1R5cGUnKS5hdHRyKCduYW1lJyldID0gJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGkgaW5wdXQgYXZlYyB2YWxldXIgcmVjdSBkZSBsJ2VxdWlwZW1lbnRcclxuICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfVHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9zb3VzX3R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW1wiU291c1R5cGVcIl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIlNvdXNUeXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfRFRSX2JvYXJkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImRUUkJvYXJkXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfSW5kaWNlX0RUUic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJpbmRpY2VEVFJcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9OdW1fc2VyaWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wibnVtU2VyaWVcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbi8vRm9ybXVsYWlyZSBkJ2VkaXQgZGUgbCfDqXF1aXBlbWVudFxyXG4kKCcjZm9ybV9lcXVpcGVtZW50X2VkaXRfaW5zdGFuY2UnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjZm9ybV9lcXVpcGVtZW50X2VkaXQnKS5jc3MoXCJvcGFjaXR5XCIsIFwiMC40XCIpO1xyXG5cclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fSxcclxuICAgICAgICBhY3Rpb247XHJcbiAgICAvL1JlbXBsaSBkYXRhIGEgcGFydGlyIGRlcyB2YWxldXIgZGVzIGlucHV0c1xyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJylcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgIT0gKFwiZXF1aXBlbWVudFtfdG9rZW5dXCIpICYmIG5hbWUgIT0gKFwic291bWlzc2lvbl9lcXVpcGVtZW50XCIpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQtaW5zdGFuY2UvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICdlcXVpcGVtZW50JzogZGF0YSxcclxuICAgICAgICAgICAgXCJzb3VtaXNzaW9uX2VkaXRfZXF1aXBlbWVudFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAnaWRlcXVpcG1lbnQnOiBpZEVxdWlwbWVudFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuXHJcbmZ1bmN0aW9uIEZpbmRJbmRleEV2YyhlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuICAgIGluZGV4ID0gZWxlbWVudFsnaWQnXTtcclxuICAgIGlmIChlbGVtZW50Wyd0eXBlJ11bJ2lkJ10gPT0gXCIxXCIgJiYgKGVsZW1lbnRbJ1N0YXR1cyddID09IHRydWUpKSB7XHJcblxyXG4gICAgICAgICQoXCIjc2hvdy1lcXVpcG1lbnRcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlVHlwZSg0LCBlbGVtZW50Wyd0eXBlJ11bJ25hbWUnXSkpO1xyXG4gICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYWRkQ2xhc3MoXCJkZXNjcmlwdGlvbi1TdWJ0eXBlQ2FyZFwiKVxyXG4gICAgICAgIGlmIChlbGVtZW50WydTb3VzVHlwZSddICE9IG51bGwpIHtcclxuICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIGVsZW1lbnRbJ1NvdXNUeXBlJ11bJ25hbWUnXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNvbnRlbnQtZGVzY3JpcHRpb24tZHRyXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJkVFJCb2FyZFwiXSArICc8L3A+JylcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJpbmRpY2VEVFJcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgaWYgKGVsZW1lbnRbJ251bVNlcmllJ10gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgc3R5bGU9XCJwYWRkaW5nOiAycHhcIiBpZCA9IFwiYnRuLWFkZC1udW1iZXItc2VyaWUnICsgZWxlbWVudFsnaWQnXSArICdcIiA+IEFkZCBudW1iZXIgb2Ygc2VyaWUgPC9idXR0b24+JylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbJ251bVNlcmllJ10gKyAnPC9wPicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZGV4RVZDID0gJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmV0dXJuSW5kZXhFbGVtZW50KGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG5cclxuXHJcbiAgICBpbmRleCA9IGVsZW1lbnRbJ2lkJ107XHJcblxyXG4gICAgaWYgKChlbGVtZW50WydTdGF0dXMnXSA9PSB0cnVlKSAmJiBlbGVtZW50Wyd0eXBlJ11bJ2lkJ10gIT0gXCIxXCIpIHtcclxuXHJcbiAgICAgICAgLy9UZXN0IGwnZXhpc3RlbmNlIGRlIGxhIGRpdiBkYW5zIGxlIGNhcyBvw7kgZWxsZSBleGlzdGUgbGEgcmVtcGxhY2Ugc2kgcGFzIGxhIG1ldCBlbiBwbGFjZVxyXG4gICAgICAgIGlmICgkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlcGxhY2VXaXRoKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNzaG93LWVxdWlwbWVudFwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3Rlc3Qgc2kgbCfDqXF1aXBlbWVudCBlc3QgbGEgY2FydGUgb3Ugbm9uXHJcbiAgICAgICAgaWYgKGVsZW1lbnRbJ3R5cGUnXVsnaWQnXSAhPSBcIjJcIikge1xyXG5cclxuICAgICAgICAgICAgLy9Td2l0aCByZXBsYWNlbWVudCBkZSBsJ2lkIGR1IHR5cGUgYXZlYyBzb24gbm9tXHJcbiAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlVHlwZSg0LCBlbGVtZW50Wyd0eXBlJ11bJ25hbWUnXSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRbJ1NvdXNUeXBlJ10gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIGVsZW1lbnRbJ1NvdXNUeXBlJ11bJ25hbWUnXSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNvbnRlbnQtZGVzY3JpcHRpb24tZHRyXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImRUUkJvYXJkXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJpbmRpY2VEVFJcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50WydudW1TZXJpZSddID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBzdHlsZT1cInBhZGRpbmc6IDJweFwiIGlkID0gXCJidG4tYWRkLW51bWJlci1zZXJpZScgKyBlbGVtZW50WydpZCddICsgJ1wiID4gQWRkIG51bWJlciBvZiBzZXJpZSA8L2J1dHRvbj4nKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50WydudW1TZXJpZSddICsgJzwvcD4gPGEgaWQ9XCJlZGl0LScgKyBpbmRleCArICdcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiA8L2E+IDxhIGlkPVwiZGVsZXRlLScgKyBpbmRleCArICdcIj48aSBjbGFzcyA9IFwiZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZVwiPiA8L2k+PC9hPicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVFZGl0RGVsZXRlKGluZGV4KSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAvL0VjcmlzIGxlIG5vbSBkdSB0eXBlIFwiY2FydGVcIiBzb3VzIGxlIHR5cGUgIEVWQ1xyXG4gICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVUeXBlKDUsIGVsZW1lbnRbJ1NvdXNUeXBlJ11bJ25hbWUnXSkpO1xyXG4gICAgICAgICAgICAvL1BhcmNvdXMgbGUgdHlwZSBkZSBzb3VzdHlwZSBcclxuICAgICAgICAgICAgLy8gJChpbmRleEVWQykuYXBwZW5kKHdyaXRlU3VidHlwZSg2LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuXHJcbiAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNvbnRlbnQtZGVzY3JpcHRpb24tZHRyIGNvbnRlbnQtZGVzY3JpcHRpb24tZHRyQ2FyZFwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgICAgIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJkVFJCb2FyZFwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiaW5kaWNlRFRSXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFsnbnVtU2VyaWUnXSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgc3R5bGU9XCJwYWRkaW5nOiAycHhcIiBpZCA9IFwiYnRuLWFkZC1udW1iZXItc2VyaWUnICsgZWxlbWVudFsnaWQnXSArICdcIiA+IEFkZCBudW1iZXIgb2Ygc2VyaWUgPC9idXR0b24+JylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFsnbnVtU2VyaWUnXSArICc8L3A+IDxhIGlkPVwiZWRpdC0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gPC9hPiA8YSBpZD1cImRlbGV0ZS0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3MgPSBcImZhcyBmYS10cmFzaC1hbHQgcG91YmVsbGVcIj4gPC9pPjwvYT4nKVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVFZGl0RGVsZXRlKGluZGV4KSk7XHJcbiAgICAgICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBDb3VudE51bWJlckVxdWlwdChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuICAgIHRvdGFsRXF1aXB0Kys7XHJcbn1cclxuLy9FeHRyYWl0IGxlIG5vbWJyZSBkJ3VuZSBzdHJlaW5nXHJcbmZ1bmN0aW9uIGV4dHJhaXROb21icmUoc3RyKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyKHN0ci5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIikpXHJcbn1cclxuLy9FY3JpcyBsZSB0aXRyZSBkdSB0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVUeXBlKHNpemUsIG5hbWUpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1UeXBlIFwiIGlkPVwiZGVzY3JpcHRpb24tdHlwZSBcIj4nICsgbmFtZSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpcyBsZSB0aXRyZSBkdSBzb3VzdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlU3VidHlwZShzaXplLCBuYW1lKSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXN1YlR5cGUgXCI+JyArIG5hbWUgKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgc291c3R5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVN1YnR5cGVDYXJkKHNpemUsIG5hbWUpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1zdWJ0eXBlXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyBuYW1lICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vLyAvL0Vjcml0IGxlcyAyIGljb25zIGQnZWRpdCBldCBkZWxldGVcclxuLy8gZnVuY3Rpb24gd3JpdGVFZGl0RGVsZXRlKGluZGV4KSB7XHJcbi8vICAgICByZXR1cm4gJyA8cCBjbGFzcz1cImVkaXQtZGVsZXRlLWVxdWlwZW1lbnRcIj4gPGEgaWQ9XCJlZGl0LScgKyBpbmRleCArICdcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiA8L2E+PC9wPic7XHJcbi8vIH07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
>>>>>>> b38ba243a21d5f21724d453eb2a393ed9c480f4f
