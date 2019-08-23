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
      // $('#title-version-ertms').append("<p>" + response.version + "</p>")
      $('main').css("opacity", '1');
      $('#wait-spinner').hide();
      $('#close-modal-form-version').trigger('click');
      location.reload();
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

/* WEBPACK VAR INJECTION */(function($) {var searchRequest = null;
$(document).ready(function () {
  $('#search-fleet').on('submit', function (e) {
    e.preventDefault();
  });
  $('#name_project').keyup(function (e) {
    var that = this;
    var search = $(this).val();
    var data = 'motclef=' + search;

    if (search.length > 0) {
      if (searchRequest != null) searchRequest.abort();
      searchRequest = $.ajax({
        url: '/alstom/search-fleet',
        type: 'POST',
        data: data,
        // async: false,
        dataType: 'json',
        // JSON
        success: function success(response) {
          $('.element-result').remove();
          var tabName = JSON.parse(response.projectsFound);

          if (tabName.length == 0 || !search) {
            $('.element-result').remove();
            $('#result-fleet').append('<p class="element-result">Results Not Found</p>');
          } else {
            tabName.forEach(function (element) {
              console.log(element);
              $('#result-fleet').append('<a href="/alstom/project/' + element.name + '"><p class="element-result">' + element.name + '</p>');
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
$('.td-table').on('click', '.td-plug', function (e) {
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
});
$('#previous-plug').on('click', '.content-key-name-plug > a', function () {
  var idPlug = extraitNombre($(this)[0].attr('class'));
  $('main').css('opacity', "0.4");
  $('#wait-spinner').show();
  $.ajax({
    url: '/alstom/delete-plug/' + idPlug,
    type: 'POST',
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      location.reload();
      $('#' + idPlug).remove();
      console.log(response);
    }
  });
});
$('#cancel-all-plug').click(function () {
  $('.new-plug').remove();
  ListePlug = "";
}); //Gére le clique de la suppression

$('#show-done-plug').on('click', '.content-key-name-plug > a', function () {
  if ($(this)[0]["id"][0] == "d") {
    deletePlug(extraitNombre($(this)[0]["id"]));
  }
}); //Extrait le nombre d'une streing

function extraitNombre(str) {
  return Number(str.replace(/[^\d]/g, ""));
} //Supression du plug dans le tableau et le front


function deletePlug(position) {
  ListePlug.splice(position, 1);
  $('.content-key-name-plug').remove();
  ListePlug.forEach(writePlug);
}

function writePlug(element, index, array) {
  //Test l'existence de la div dans le cas où elle existe la remplace si pas la met en place
  if ($('#key-name-' + index).length) {
    $('#key-name-' + index).replaceWith("<span class='content-key-name-plug new-plug' id='key-name-" + index + "'><p>" + element.name_plug + "</p><p>" + element.key_plug + "</p><a id='delete-plug-" + index + "'><i class='fas fa-trash-alt poubelle'></i></a></span>");
  } else {
    $('#show-done-plug').append("<span class='content-key-name-plug new-plug' id='key-name-" + index + "'><p>" + element.name_plug + "</p><p>" + element.key_plug + "</p><a id='delete-plug-" + index + "'><i class='fas fa-trash-alt poubelle'></i></a></span>");
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
var new_equipment_num = "",
    totalEquipt = "",
    new_equipment_num_serie = [];
var searchRequest = null;
$(document).ready(function () {
  $('#search-train').on('submit', function (e) {
    e.preventDefault();
  });
  $('#trains_search_name_train').keyup(function (e) {
    var that = this;
    var search = $(this).val();
    var data = 'motclef=' + search;
    console.log(search);

    if (search.length > 0) {
      if (searchRequest != null) searchRequest.abort();
      searchRequest = $.ajax({
        url: '/alstom/search-train',
        type: 'POST',
        data: data,
        // async: false,
        dataType: 'json',
        // JSON
        success: function success(response) {
          if (search == $(that).val()) {
            $('.element-result').remove();
            var tabName = JSON.parse(response.projectsFound);
            console.log(tabName);

            if (tabName.length == 0 || !search) {
              $('.element-result').remove();
              $('#result-train').append('<p class="element-result">Results Not Found</p>');
            } else {
              tabName.forEach(function (element) {
                $('#result-train').append('<a href="/alstom/trains/' + element.name + '"><p class="element-result">' + element.name + '</p></a>');
              });
            }
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

  ;
  $('#close-modal-baselineToTrain').click(function () {
    $('main').css('opacity', '1');
    $('.description').remove();
    $('#modal_baseline_equipement').hide();
    new_equipment_num = "";
  });
  $('#close-equipement-baseline').click(function () {
    $('main').css('opacity', '1');
    $('.description').remove();
    $('#modal_baseline_equipement').hide();
    new_equipment_num = "";
    totalEquipt = "";
  });
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
}); // Soumission formulaire de train

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
      console.log(new_equipment_num);
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
}); //Valider l'instance des equipements

$('#valid-baseline-train').click(function () {
  console.log(new_equipment_num);
  console.log(totalEquipt);

  if (new_equipment_num != totalEquipt) {
    alert('please enter num serie before instance baseline');
  } else {
    var etcsId = $('#etcsid-name').val();
    console.log(etcsId);
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
        new_equipt: new_equipment_num_serie,
        etcsId: etcsId
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9iYXNlbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXF1aXBlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZmxlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvbG9hZGluZy1iYXIubHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvcHJlc2V0cy5scyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGVzdC11cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RyYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiaG92ZXIiLCJmaW5kIiwic3RvcCIsImFuaW1hdGUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiaGlkZSIsImRvY3VtZW50IiwicmVhZHkiLCJyZW1vdmUiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwiY3NzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIiR0eXBlIiwiYXR0ciIsIkVxdWlwbWVudHMiLCJpIiwiaW5kZXhFVkMiLCJwb3NJbmRleCIsIlByZXNlbmNlRVZDIiwiaWRFcXVpcG1lbnQiLCJ0YWJJbmRleEVxdWlwdCIsInNlbGVjdCIsImNyZWF0ZUVsZW1lbnQiLCJwcmV2aW91cyIsInRhYkVxdWlwZW1lbnRUeXBlIiwidGFiRXF1aXBlbWVudFN1YnR5cGUiLCJkYXRhIiwidmFsIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNob3ciLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZW1wdHkiLCJmb3JFYWNoIiwiZWxlbWVudCIsImFwcGVuZCIsIk9wdGlvbiIsIm5hbWUiLCJpZCIsImNoYW5nZSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCJhY3Rpb24iLCJlYWNoIiwiaW5kZXgiLCJ2YWx1ZSIsInRoYXQiLCJwdXNoIiwiYWpheCIsInVybCIsInR5cGUiLCJ0YWJFcXVpcHRzIiwiYXN5bmMiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ4aHIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJpZEVydG1zIiwiZXh0cmFpdE5vbWJyZSIsImVxdWlwZW1lbnQiLCJyZXR1cm5JbmRleEVsZW1lbnQiLCJhbGVydCIsImJhc2VsaW5lTmFtZSIsImJhc2VsaW5lIiwidGV4dCIsImlkQmFzZWxpbmUiLCJocmVmIiwiZGVsZXRlRXF1aXBtZW50IiwiZG9uZSIsInJlbG9hZCIsInZlcnNpb24iLCJ0cmlnZ2VyIiwiYXJyYXkiLCJsZW5ndGgiLCJyZXBsYWNlV2l0aCIsIndyaXRlVHlwZSIsIndyaXRlU3VidHlwZSIsIndyaXRlRWRpdERlbGV0ZSIsInNwbGljZSIsInBvc2l0aW9uIiwic3RyIiwiTnVtYmVyIiwicmVwbGFjZSIsInNpemUiLCJ3cml0ZVN1YnR5cGVDYXJkIiwibm90Iiwic2VhcmNoUmVxdWVzdCIsImtleXVwIiwic2VhcmNoIiwiYWJvcnQiLCJ0YWJOYW1lIiwiSlNPTiIsInBhcnNlIiwicHJvamVjdHNGb3VuZCIsIiR0cmFpbl9zZWxlY3QiLCJpZFByb2plY3QiLCJ0YWJUcmFpbnMiLCIkZmxlZXQiLCIkdHJhaW4iLCIkZXJ0bXMiLCJ0eXBlTG9nIiwidHlwZUxvZ1RleHQiLCJpc0FkdmFuY2VkVXBsb2FkIiwiZGl2IiwiJGZvcm0iLCIkaW5wdXQiLCIkbGFiZWwiLCJzaG93RmlsZXMiLCJmaWxlcyIsInByZ2JhciIsImxkQmFyIiwiZHJvcHBlZEZpbGVzIiwic3RvcFByb3BhZ2F0aW9uIiwib3JpZ2luYWxFdmVudCIsImRhdGFUcmFuc2ZlciIsIkxvZyIsImhhc0NsYXNzIiwiYWpheERhdGEiLCJGb3JtRGF0YSIsImdldCIsImZpbGUiLCJYTUxIdHRwUmVxdWVzdCIsInVwbG9hZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJsb2FkZWQiLCJsZW5ndGhDb21wdXRhYmxlIiwicGVyY2VudENvbXBsZXRlIiwidG90YWwiLCJzZXQiLCJjYWNoZSIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJjb21wbGV0ZSIsInZhbGlkIiwiaWZyYW1lTmFtZSIsIkRhdGUiLCJnZXRUaW1lIiwiJGlmcmFtZSIsIm9uZSIsImNvbnRlbnRzIiwicmVtb3ZlQXR0ciIsIiRlcnJvck1zZyIsImtleSIsIkxpc3RlUGx1ZyIsIm5vbWJyZV91cmwiLCJodG1sIiwiUGx1ZyIsIndyaXRlUGx1ZyIsImZpbGVzdCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wRGVzdGluYXRpb24iLCJuYW1lRmlsZSIsInVwbG9hZFN0YXR1cyIsInBhdGgiLCJpZFBsdWciLCJkZWxldGVQbHVnIiwibmFtZV9wbHVnIiwia2V5X3BsdWciLCJuZXdfZXF1aXBtZW50X251bSIsInRvdGFsRXF1aXB0IiwibmV3X2VxdWlwbWVudF9udW1fc2VyaWUiLCJjdXJyZW50X2Nob2ljZSIsImVydG1zX2xlZnQiLCJlcnRtc19taWRkbGUiLCJlcnRtc19yaWdodCIsImVxdWlwbWVudHMiLCJDb3VudE51bWJlckVxdWlwdCIsIkZpbmRJbmRleEV2YyIsIm5hbWVfYmFzZWxpbmVfMSIsIm51bVNlcmllIiwiZXRjc0lkIiwiaWRfdHJhaW4iLCJpZF9iYXNlbGluZSIsIm5ld19lcXVpcHQiLCJpZGJhc2VsaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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XHJcbmltcG9ydCAnLi9lcXVpcGVtZW50JztcclxuaW1wb3J0ICcuL2Jhc2VsaW5lJztcclxuaW1wb3J0ICcuL3Byb2dyZXNzQmFyJztcclxuaW1wb3J0ICcuL3Rlc3QtdXBsb2FkJztcclxuaW1wb3J0ICcuL3RyYWluJztcclxuaW1wb3J0ICcuL3BsdWcnO1xyXG5pbXBvcnQgJy4vZmxlZXQnO1xyXG5pbXBvcnQgJy4vbG9ncyc7XHJcblxyXG4vLyBsb2FkcyB0aGUganF1ZXJ5IHBhY2thZ2UgZnJvbSBub2RlX21vZHVsZXNcclxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG4vLyBpbXBvcnQgdGhlIGZ1bmN0aW9uIGZyb20gZ3JlZXQuanMgKHRoZSAuanMgZXh0ZW5zaW9uIGlzIG9wdGlvbmFsKVxyXG4vLyAuLyAob3IgLi4vKSBtZWFucyB0byBsb29rIGZvciBhIGxvY2FsIGZpbGVcclxuJCgnLnBvc3QtbW9kdWxlJykuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5maW5kKCcuZGVzY3JpcHRpb24nKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgaGVpZ2h0OiBcInRvZ2dsZVwiLFxyXG4gICAgICAgIG9wYWNpdHk6IFwidG9nZ2xlXCJcclxuICAgIH0sIDMwMCk7XHJcbn0pO1xyXG4kKCcucG9zdC1tb2R1bGUtZmxlZXQnKS5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmZpbmQoJy5kZXNjcmlwdGlvbi1mbGVldCcpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBoZWlnaHQ6IFwidG9nZ2xlXCIsXHJcbiAgICAgICAgb3BhY2l0eTogXCJ0b2dnbGVcIlxyXG4gICAgfSwgMzAwKTtcclxufSk7XHJcblxyXG4kKCcuZmEtY2hldnJvbi1kb3duJykuaGlkZSgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgncHJlJykucmVtb3ZlKCk7XHJcblxyXG4gICAgJCgnLmJ1dHRvbi1sZWZ0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5zaWRlYmFyJykudG9nZ2xlQ2xhc3MoJ2ZsaXBoJyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5zaWRlYmFyJykuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCd0cmFuc2l0aW9uJywgJ2FsbCAwLjVzIGVhc2UtaW4tb3V0Jyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnbWwtc20tYXV0bycpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ29mZnNldC0xJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnb2Zmc2V0LTInKTtcclxuICAgICAgICAgICAgJCgnLm1haW4tc2hvdycpLnJlbW92ZUNsYXNzKCdjb2wtbGctMTEnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygndHJhbnNpdGlvbicsICdhbGwgMC4xMHMgZWFzZS1pbi1vdXQnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdvZmZzZXQtMScpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ29mZnNldC0yJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5yZW1vdmVDbGFzcygnbWwtc20tYXV0bycpO1xyXG4gICAgICAgICAgICAkKCcubWFpbi1zaG93JykuYWRkQ2xhc3MoJ2NvbC1sZy0xMScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAvLyAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ21sLXNtLWF1dG8nKTtcclxuICAgICQoJy5uYXYtbGFiZWwnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmZhLWNoZXZyb24tbGVmdCcpLmNzcygndHJhbnNmb3JtJywgJ3JvdGF0ZXgoNDVkZWcpJylcclxuICAgIH0pXHJcblxyXG59KTsiLCIvL01hc3F1YWdlIGRlIGNlcnRhaW5zIG1vZGFsZSBkZSBsYSBwYWdlXHJcbiQoJyNmb3JtdWxhaXJlLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuJCgnI2NvbnRlbnQtZm9ybS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuXHJcbi8vRGVsY2FyYXRpb24gdmFyaWFibGVcclxuY29uc3QgJHR5cGUgPSAkKCcjZXF1aXBlbWVudF9UeXBlJyk7XHJcbiR0eXBlLmF0dHIoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XHJcblxyXG5sZXQgRXF1aXBtZW50cyA9IFtdLFxyXG4gICAgaSA9IDAsXHJcbiAgICBpbmRleEVWQyA9IDAsXHJcbiAgICBwb3NJbmRleCA9IDAsXHJcbiAgICBQcmVzZW5jZUVWQyA9IGZhbHNlLFxyXG4gICAgaWRFcXVpcG1lbnQgPSAwLFxyXG4gICAgdGFiSW5kZXhFcXVpcHQgPSBbXVxyXG5zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLFxyXG4gICAgcHJldmlvdXMgPSBcIlwiLFxyXG4gICAgdGFiRXF1aXBlbWVudFR5cGUgPSBbXCJFVkNcIiwgXCJDQVJURVwiLCBcIlNFTlNPUlwiLCBcIkRNSVwiXSxcclxuICAgIHRhYkVxdWlwZW1lbnRTdWJ0eXBlID0gW1wiQ09SRVwiLCBcIlRVSVwiLCBcIlNETVVcIiwgXCJTRU5TRVwiLCBcIlRXSU5TXCJdO1xyXG5cclxuLy9WaWRhZ2UgZGVzIGlucHV0cyBhdSByZWZyZXNoIGRlIGxhIHBhZ2VcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgZGF0YVskdHlwZS5hdHRyKCduYW1lJyldID0gJHR5cGUudmFsKClcclxuXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvYWxzdG9tL2NyZWF0ZV9iYXNlbGluZScpIHtcclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgLy8gJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgIC8vICQoJzppbnB1dCcsICcjZm9ybV9lcXVpcGVtZW50Jykubm90KCc6YnV0dG9uLCA6c3VibWl0LCA6cmVzZXQsIDpoaWRkZW4nKS52YWwoJycpO1xyXG59KTtcclxuXHJcbi8vQUpBWCBDaGFuZ2VtZW50IGRlIHNvdXMtdHlwZSBlbiBmb25jdGlvbiBkdSB0eXBlXHJcbiR0eXBlLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgZGF0YVskdHlwZS5hdHRyKCduYW1lJyldID0gJHR5cGUudmFsKClcclxuXHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSlcclxuXHJcbi8vQUpBWCBzb3VtaXNzaW9uIGZvcm11bGFpcmUgZCdham91dCBlcXVpcGVtZW50XHJcbiQoJyNmb3JtX2VxdWlwZW1lbnQnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAvL0VtcMOqY2hlIGxlIGNoYXJnZW1lbnQgZGUgbGEgcGFnZSBzb2lzIGZhaXQgYXV0b21hdGlxdWVtZW50XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9LFxyXG4gICAgICAgIGFjdGlvbjtcclxuICAgIC8vUmVtcGxpIGRhdGEgYSBwYXJ0aXIgZGVzIHZhbGV1ciBkZXMgaW5wdXRzXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKVxyXG5cclxuICAgICAgICBpZiAobmFtZSAhPSAoXCJlcXVpcGVtZW50W190b2tlbl1cIikgJiYgbmFtZSAhPSAoXCJzb3VtaXNzaW9uX2VxdWlwZW1lbnRcIikpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09ICdzb3VtaXNzaW9uX2VkaXRfZXF1aXBlbWVudCcpIHtcclxuICAgICAgICAgICAgYWN0aW9uID0gXCJlZGl0XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWN0aW9uID0gXCJhZGRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgIC8vIFNpIGxlIGZvcm11bGFpcmUgZXN0IHBvdXIgYWpvdWVyIHVuIG5vdXZlbCBlcXVpcGVtZW50XHJcbiAgICBpZiAoYWN0aW9uID09IFwiYWRkXCIpIHtcclxuICAgICAgICAvL1JlbXBsaXMgbGUgdGFibGVhdSBkZXMgw6lxdWlwZW1lbnRzXHJcbiAgICAgICAgRXF1aXBtZW50cy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIC8vRWZmZWN0dXJlIGxhIHJlcXXDqnRlIGFqYXggcG91ciBsJ2Fqb3V0IGQnw6lxdWlwZW1lbnRcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGFiRXF1aXB0czogRXF1aXBtZW50c1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBPdSBzaSBsZSBmb3JtdWxhaXJlIGVzdCBwb3VyIMOpZGl0ZXIgdW4gZXF1aXBlbWVudCBkw6lqYSBleGlzdGFudCBzdXIgbGEgcGFnZSBkZSBsJ2VydG1zIGxpw6kgYSBjZWx1aS1jaVxyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJlZGl0XCIpIHtcclxuICAgICAgICBsZXQgaWRFcnRtcyA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBlcXVpcGVtZW50OiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgaWRFcnRtczogaWRFcnRtc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJy5tb2RhbC1mb290ZXInKS5zaG93KCk7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAvL0JvdWNsZSBsZXMgw6lxdWlwZW1lbnRzIGV0IGxlcyBpbnN0YWxsZSBhdSBmcm9udFxyXG4gICAgRXF1aXBtZW50cy5mb3JFYWNoKHJldHVybkluZGV4RWxlbWVudCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vVmFsaWRhdGlvbiBkZSBiYXNlbGluZSBcclxuJCgnI2NyZWF0ZS1iYXNlbGluZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKFwiI2Jhc2VsaW5lX25hbWVcIikudmFsKCkgPT0gXCJcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgYmFzZWxpbmUgbmFtZSBcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG5sZXQgYmFzZWxpbmVOYW1lO1xyXG4kKCcjZm9ybV9iYXNlbGluZScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG5cclxuICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChuYW1lID09ICdiYXNlbGluZVtuYW1lXScpIHtcclxuXHJcbiAgICAgICAgICAgIGJhc2VsaW5lTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICR0aGlzLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgYmFzZWxpbmU6IGRhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJy50aXRsZS1iYXNlbGluZScpLnRleHQocmVzcG9uc2UuYmFzZWxpbmUpXHJcbiAgICAgICAgICAgICQoJyNjb250ZW50LWZvcm0tZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50JykuaGlkZSgpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG4vL1ZhbGlkYXRpb24gZGUgdG91cyBsZXMgw6lxdWlwZW1lbnRzIGV0IGRlIGxhIGJhc2VsaW5lXHJcbiQoJyN2YWxpZC1hbGwtZXF1aXBtZW50cycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKEVxdWlwbWVudHMgIT0gXCJcIikge1xyXG4gICAgICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjAuNFwiKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hbHN0b20vZmx1c2gtYWxsLWVxdWlwdCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYmFzZWxpbmVOYW1lOiBiYXNlbGluZU5hbWUsXHJcbiAgICAgICAgICAgICAgICB0YWJFcXVpcHRzOiBFcXVpcG1lbnRzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWRCYXNlbGluZSA9IHJlc3BvbnNlLmJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYWxzdG9tL2Jhc2VsaW5lL1wiICsgaWRCYXNlbGluZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgRXF1aXBtZW50cyBiZWZvcmUgdmFsaWQnKTtcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG4vL0fDqXJlIGxlIGNsaXF1ZSBkZSBsYSBzdXBwcmVzc2lvblxyXG4kKCcjc2hvdy1lcXVpcG1lbnQnKS5vbignY2xpY2snLCAnLmVkaXQtZGVsZXRlLWVxdWlwZW1lbnQgPiBhJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcylbMF1bXCJpZFwiXVswXSA9PSBcImRcIikge1xyXG4gICAgICAgIGRlbGV0ZUVxdWlwbWVudChleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJpZFwiXSkpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4vL2NhY2hlIGxlIG1vZGFsIGQnZWRpdCBkJ2VxdWlwZW1lbnRcclxuJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5oaWRlKCk7XHJcbi8vIEdlcmUgbGEgZmVybWV0dXJlIGR1IG1vZGFsIGQnZWRpdCBkJ2VxdWlwZW1lbnRcclxuJCgnI2Nsb3NlLW1vZGFsLWZvcm0tZXF1aXBtZW50LWVkaXQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLmhpZGUoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbn0pXHJcbi8vIFxyXG4vLyBSZXF1ZXRlIEFKQVggcG91ciByZW1wbGlyIGxlIGZvcm11bGFpcmUgZCfDqXF1aXBlbWVudCBhdmVjIGwnZXF1aXBlbWVudCBzZWxlY3Rpb25uZXJcclxuJCgnLmNvbnRlbnQtZGVzY3JpcHRpb24tZHRyJykub24oJ2NsaWNrJywgJy5lZGl0LWRlbGV0ZS1lcXVpcGVtZW50ID4gYScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIGlkRXF1aXBtZW50ID0gZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiY2xhc3NMaXN0XCJdWzBdKVxyXG4gICAgdmFyICR0aGlzID0gJChcIiNmb3JtX2VxdWlwZW1lbnRfZWRpdFwiKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbChyZXNwb25zZVtcInR5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgIGRhdGFbJCgnI2VxdWlwZW1lbnRfVHlwZScpLmF0dHIoJ25hbWUnKV0gPSAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpIGlucHV0IGF2ZWMgdmFsZXVyIHJlY3UgZGUgbCdlcXVpcGVtZW50XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X1R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfc291c190eXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVtcIlNvdXNUeXBlXCJdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJTb3VzVHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0RUUl9ib2FyZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJkVFJCb2FyZFwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0luZGljZV9EVFInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiaW5kaWNlRFRSXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfTnVtX3NlcmllJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIm51bVNlcmllXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4vL0Zvcm11bGFpcmUgZCdlZGl0IGRlIGwnw6lxdWlwZW1lbnRcclxuJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0Jykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjZm9ybV9lcXVpcGVtZW50X2VkaXQnKS5jc3MoXCJvcGFjaXR5XCIsIFwiMC40XCIpO1xyXG4gICAgJChcIiN3YWl0LXNwaW5uZXJcIikuY3NzKFwiei1pbmRleFwiLCBcIjk5OTk5XCIpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9LFxyXG4gICAgICAgIGFjdGlvbjtcclxuICAgIC8vUmVtcGxpIGRhdGEgYSBwYXJ0aXIgZGVzIHZhbGV1ciBkZXMgaW5wdXRzXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKVxyXG5cclxuICAgICAgICBpZiAobmFtZSAhPSAoXCJlcXVpcGVtZW50W190b2tlbl1cIikgJiYgbmFtZSAhPSAoXCJzb3VtaXNzaW9uX2VxdWlwZW1lbnRcIikpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgJ2VxdWlwZW1lbnQnOiBkYXRhLFxyXG4gICAgICAgICAgICBcInNvdW1pc3Npb25fZWRpdF9lcXVpcGVtZW50XCI6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG4vL1JlcXVldGUgQUpBWCBkZSBjcsOpYXRpb24gZGUgdmVyc2lvbiBsb2dpY2llbFxyXG4kKCcjZm9ybV92ZXJzaW9uJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcblxyXG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH0pXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZEJhc2VsaW5lOiBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSksXHJcbiAgICAgICAgICAgIHZlcnNpb246IGRhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICQoJyN0aXRsZS12ZXJzaW9uLWVydG1zJykuYXBwZW5kKFwiPHA+XCIgKyByZXNwb25zZS52ZXJzaW9uICsgXCI8L3A+XCIpXHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNjbG9zZS1tb2RhbC1mb3JtLXZlcnNpb24nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZXR1cm5JbmRleEVsZW1lbnQoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcblxyXG4gICAgLy9UZXN0IGwnZXhpc3RlbmNlIGRlIGxhIGRpdiBkYW5zIGxlIGNhcyBvw7kgZWxsZSBleGlzdGUgbGEgcmVtcGxhY2Ugc2kgcGFzIGxhIG1ldCBlbiBwbGFjZVxyXG4gICAgaWYgKCQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkubGVuZ3RoKSB7XHJcbiAgICAgICAgJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5yZXBsYWNlV2l0aCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI3Nob3ctZXF1aXBtZW50XCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3Rlc3Qgc2kgbCfDqXF1aXBlbWVudCBlc3QgbGEgY2FydGUgb3Ugbm9uXHJcbiAgICBpZiAoZWxlbWVudFtcImVxdWlwZW1lbnRbVHlwZV1cIl0gIT0gXCIyXCIpIHtcclxuICAgICAgICAvL1N3aXRoIHJlcGxhY2VtZW50IGRlIGwnaWQgZHUgdHlwZSBhdmVjIHNvbiBub21cclxuICAgICAgICBzd2l0Y2ggKGVsZW1lbnRbXCJlcXVpcGVtZW50W1R5cGVdXCJdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hZGRDbGFzcyhcImRlc2NyaXB0aW9uLVN1YnR5cGVDYXJkXCIpXHJcbiAgICAgICAgICAgICAgICBpbmRleEVWQyA9ICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlVHlwZSg0LCAyKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjRcIjpcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlVHlwZSg0LCAzKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChlbGVtZW50W1wiZXF1aXBlbWVudFtzb3VzX3R5cGVdXCJdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgMykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI1XCI6XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgNCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY29udGVudC1kZXNjcmlwdGlvbi1kdHJcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImVxdWlwZW1lbnRbRFRSX2JvYXJkXVwiXSArICc8L3A+JylcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W0luZGljZV9EVFJdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImVxdWlwZW1lbnRbTnVtX3NlcmllXVwiXSArICc8L3A+JylcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZUVkaXREZWxldGUoaW5kZXgpKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBFcXVpcG1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoRXF1aXBtZW50c1tpXVtcImVxdWlwZW1lbnRbVHlwZV1cIl0gPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgIFByZXNlbmNlRVZDID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKFByZXNlbmNlRVZDKSB7XHJcbiAgICAgICAgICAgIC8vRWNyaXMgbGUgbm9tIGR1IHR5cGUgXCJjYXJ0ZVwiIHNvdXMgbGUgdHlwZSAgRVZDXHJcbiAgICAgICAgICAgIC8vICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVR5cGUoNSwgMSkpO1xyXG4gICAgICAgICAgICAvL1BhcmNvdXMgbGUgdHlwZSBkZSBzb3VzdHlwZSBcclxuICAgICAgICAgICAgc3dpdGNoIChlbGVtZW50W1wiZXF1aXBlbWVudFtzb3VzX3R5cGVdXCJdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjJcIjpcclxuICAgICAgICAgICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCAyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNvbnRlbnQtZGVzY3JpcHRpb24tZHRyIGNvbnRlbnQtZGVzY3JpcHRpb24tZHRyQ2FyZFwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgICAgIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W0RUUl9ib2FyZF1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImVxdWlwZW1lbnRbSW5kaWNlX0RUUl1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImVxdWlwZW1lbnRbTnVtX3NlcmllXVwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVFZGl0RGVsZXRlKGluZGV4KSk7XHJcbiAgICAgICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBFVkMgZXF1aXBlbWVudCBiZWZvcmUnKTtcclxuICAgICAgICAgICAgJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgRXF1aXBtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAkKCcubW9kYWwtZm9vdGVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI3Nob3ctZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL1N1cHJlc3Npb24gZGUgbCfDqXF1aXBlbWVudCBkYW5zIGxlIHRhYmxlYXUgZXQgbGUgZnJvbnRcclxuZnVuY3Rpb24gZGVsZXRlRXF1aXBtZW50KHBvc2l0aW9uKSB7XHJcbiAgICBFcXVpcG1lbnRzLnNwbGljZShwb3NpdGlvbiwgMSk7XHJcbiAgICAkKCcuZGVzY3JpcHRpb24nKS5yZW1vdmUoKTtcclxuICAgIEVxdWlwbWVudHMuZm9yRWFjaChyZXR1cm5JbmRleEVsZW1lbnQpO1xyXG59XHJcbi8vRXh0cmFpdCBsZSBub21icmUgZCd1bmUgc3RyZWluZ1xyXG5mdW5jdGlvbiBleHRyYWl0Tm9tYnJlKHN0cikge1xyXG4gICAgcmV0dXJuIE51bWJlcihzdHIucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpKVxyXG59XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlVHlwZShzaXplLCBpbmRleCkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLVR5cGUgXCIgaWQ9XCJkZXNjcmlwdGlvbi10eXBlIFwiPicgKyB0YWJFcXVpcGVtZW50VHlwZVtpbmRleF0gKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgc291c3R5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVN1YnR5cGUoc2l6ZSwgaW5kZXgpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1UeXBlIFwiIGlkPVwiZGVzY3JpcHRpb24tc3ViVHlwZSBcIj4nICsgdGFiRXF1aXBlbWVudFN1YnR5cGVbaW5kZXhdICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHNvdXN0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVTdWJ0eXBlQ2FyZChzaXplLCBpbmRleCkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLXN1YnR5cGVcIiBpZD1cImRlc2NyaXB0aW9uLXN1YlR5cGUgXCI+JyArIHRhYkVxdWlwZW1lbnRTdWJ0eXBlW2luZGV4XSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpdCBsZXMgMiBpY29ucyBkJ2VkaXQgZXQgZGVsZXRlXHJcbmZ1bmN0aW9uIHdyaXRlRWRpdERlbGV0ZShpbmRleCkge1xyXG4gICAgcmV0dXJuICcgPHAgY2xhc3M9XCJlZGl0LWRlbGV0ZS1lcXVpcGVtZW50XCI+IDxhIGlkPVwiZWRpdC0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gPC9hPiA8YSBpZD1cImRlbGV0ZS0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3MgPSBcImZhcyBmYS10cmFzaC1hbHQgcG91YmVsbGVcIj4gPC9pPjwvYT48L3A+JztcclxufTtcclxuXHJcbi8qYXUgY2xpY2sgZGUgbCdhZGQgRXF1aXBtZW50IGFmZmljaGVyIGxlIGZvcm11bGFpcmUgZCdham91dCBkJ8OpcXVpcGVtZW50Ki9cclxuJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLnNob3coKTtcclxuICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcubW9kYWwtZm9vdGVyJykuaGlkZSgpO1xyXG4gICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICQoJzppbnB1dCcsICcjZm9ybV9lcXVpcGVtZW50Jykubm90KCc6YnV0dG9uLCA6c3VibWl0LCA6cmVzZXQsIDpoaWRkZW4nKS52YWwoJycpO1xyXG4gICAgcHJldmlvdXMgPSBcImVxdWlwbWVudFwiO1xyXG59KTtcclxuLy8gR2VyZSBsZSBjbGljayBkdSBwcmV2aW91c1xyXG4kKFwiI3ByZXZpb3VzLWVxdWlwbWVudFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI3Nob3ctZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnLm1vZGFsLWZvb3RlcicpLnNob3coKTtcclxufSk7XHJcbiQoJyNjcmVhdGUtYmFzZWxpbmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJy5tb2RhbC1mb290ZXInKS5zaG93KCk7XHJcbn0pXHJcbi8vIEZlcm1lIGxlIG1vZGFsIGRlIGZvcm11bGFpcmUgZCdham91dCBkJ8OpcXVpcGVtZW50XHJcbiQoJyNjbG9zZS1lcXVpcGVtZW50JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI3Nob3ctZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50JykuaGlkZSgpO1xyXG59KSIsIi8vVmFsaWRhdGlvbiBkZSBsJ2VydG1zIFxyXG4kKCcjdmFsaWQtZXJ0bXMtbmFtZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjY29udGVudC1mb3JtLWVydG1zXCIpLmhpZGUoKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tZXF1aXBtZW50Jykuc2hvdygpO1xyXG59KSIsInZhciBzZWFyY2hSZXF1ZXN0ID0gbnVsbDtcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI3NlYXJjaC1mbGVldCcpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pXHJcbiAgICAkKCcjbmFtZV9wcm9qZWN0Jykua2V5dXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHNlYXJjaCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSAnbW90Y2xlZj0nICsgc2VhcmNoO1xyXG5cclxuICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hSZXF1ZXN0ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hSZXF1ZXN0LmFib3J0KCk7XHJcbiAgICAgICAgICAgIHNlYXJjaFJlcXVlc3QgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS9zZWFyY2gtZmxlZXQnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgIC8vIGFzeW5jOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5lbGVtZW50LXJlc3VsdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWJOYW1lID0gSlNPTi5wYXJzZShyZXNwb25zZS5wcm9qZWN0c0ZvdW5kKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYk5hbWUubGVuZ3RoID09IDAgfHwgIXNlYXJjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuZWxlbWVudC1yZXN1bHQnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3Jlc3VsdC1mbGVldCcpLmFwcGVuZCgnPHAgY2xhc3M9XCJlbGVtZW50LXJlc3VsdFwiPlJlc3VsdHMgTm90IEZvdW5kPC9wPicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJOYW1lLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZXN1bHQtZmxlZXQnKS5hcHBlbmQoJzxhIGhyZWY9XCIvYWxzdG9tL3Byb2plY3QvJyArIGVsZW1lbnQubmFtZSArICdcIj48cCBjbGFzcz1cImVsZW1lbnQtcmVzdWx0XCI+JyArIGVsZW1lbnQubmFtZSArICc8L3A+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuZWxlbWVudC1yZXN1bHQnKS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnI2FkZFRyYWluc1RvRmxlZXQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHRyYWluX3NlbGVjdCA9ICQoJyNzZWxlY3QtdHJhaW4tZmxlZXQnKTtcclxuXHJcbiAgICAgICAgJCgnI21vZGFsLWZvcm0tdHJhaW4tZmxlZXQnKS5jc3MoJ3otaW5kZXgnLCAnLTk5Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1RyYWluc1wiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAkdHJhaW5fc2VsZWN0LmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAkdHJhaW5fc2VsZWN0LnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWwtZm9ybS10cmFpbi1mbGVldCcpLmNzcygnei1pbmRleCcsICc5OTk5Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAkKCcjdmFsaWQtdHJhaW4tZmxlZXQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgaWRQcm9qZWN0ID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgIGxldCB0YWJUcmFpbnMgPSBbXTtcclxuICAgICAgICB0YWJUcmFpbnMucHVzaCgpO1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQoJyNmb3JtdWxhaXJlLXRyYWluLWZsZWV0Jyk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYWxzdG9tL2FkZFRyYWluVG9GbGVldC8nICsgaWRQcm9qZWN0LFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIC8vIGFzeW5jOiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCQoJyNzZWxlY3QtdHJhaW4tZmxlZXQnKS52YWwoKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG59KTtcclxuXHJcbi8vRXh0cmFpdCBsZSBub21icmUgZCd1bmUgc3RyZWluZ1xyXG5mdW5jdGlvbiBleHRyYWl0Tm9tYnJlKHN0cikge1xyXG4gICAgcmV0dXJuIE51bWJlcihzdHIucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpKVxyXG59IiwiY29uc3QgJGZsZWV0ID0gJCgnI2ZsZWV0X3NlbGVjdCcpO1xyXG5jb25zdCAkdHJhaW4gPSAkKCcjdHJhaW5fc2VsZWN0Jyk7XHJcbmNvbnN0ICRlcnRtcyA9ICQoJyNlcnRtc19zZWxlY3QnKTtcclxuY29uc3QgdHlwZUxvZyA9ICQoJyNzZWxlY3RfdHlwZV9sb2cnKTtcclxuY29uc3QgdHlwZUxvZ1RleHQgPSAkKCcjc2VsZWN0X3R5cGVfbG9nJyk7XHJcbmxldCBkYXRhID0ge307XHJcbi8vZGV0ZWN0aW9uIHNpIGxlIGJyb3dzZXIgZ8OocmUgbGUgZHJhZyZkcm9wXHJcbnZhciBpc0FkdmFuY2VkVXBsb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmV0dXJuICgoJ2RyYWdnYWJsZScgaW4gZGl2KSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiBkaXYgJiYgJ29uZHJvcCcgaW4gZGl2KSkgJiYgJ0Zvcm1EYXRhJyBpbiB3aW5kb3cgJiYgJ0ZpbGVSZWFkZXInIGluIHdpbmRvdztcclxufSgpO1xyXG52YXIgJGZvcm0gPSAkKCcuZHJhZy1sb2cnKTtcclxudmFyICRpbnB1dCA9ICRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyksXHJcbiAgICAkbGFiZWwgPSAkZm9ybS5maW5kKCdsYWJlbCcpLFxyXG4gICAgc2hvd0ZpbGVzID0gZnVuY3Rpb24gKGZpbGVzKSB7XHJcbiAgICAgICAgJGxhYmVsLnRleHQoZmlsZXMubGVuZ3RoID4gMSA/ICgkaW5wdXQuYXR0cignZGF0YS1tdWx0aXBsZS1jYXB0aW9uJykgfHwgJycpLnJlcGxhY2UoJ3tjb3VudH0nLCBmaWxlcy5sZW5ndGgpIDogZmlsZXNbMF0ubmFtZSk7XHJcbiAgICB9O1xyXG50eXBlTG9nLmhpZGUoKTtcclxudHlwZUxvZ1RleHQuaGlkZSgpO1xyXG4kZm9ybS5oaWRlKCk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvYWxzdG9tL2FkZC1sb2dzJykge1xyXG4gICAgICAgIC8vaWRlbnRpZmljYXRpb24gZGUgbGEgcHJvZ3Jlc3MgYmFyXHJcbiAgICAgICAgcHJnYmFyID0gbmV3IGxkQmFyKFwiI3Rlc3QtcHJvZ3Jlc3NcIik7XHJcblxyXG4gICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tGbGVldFwiLCApLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAkZmxlZXQuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tUcmFpbkJ5RmxlZXRcIiwge1xyXG4gICAgICAgICAgICAgICAgJ2lkJzogJGZsZWV0LnZhbCgpXHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAkdHJhaW4uYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja0VydG1zQnlUcmFpblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJHRyYWluLnZhbCgpXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVydG1zLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxuJGZsZWV0LmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjc2VsZWN0X3R5cGVfbG9nJykuaGlkZSgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCRmbGVldC52YWwoKSk7XHJcbiAgICAkdHJhaW4uZW1wdHkoKTtcclxuICAgICRlcnRtcy5lbXB0eSgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tUcmFpbkJ5RmxlZXRcIiwge1xyXG4gICAgICAgICdpZCc6ICRmbGVldC52YWwoKVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICR0cmFpbi5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICB9KVxyXG4gICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgfSlcclxufSlcclxuJHRyYWluLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjc2VsZWN0X3R5cGVfbG9nJykuaGlkZSgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCRmbGVldC52YWwoKSk7XHJcbiAgICAkZXJ0bXMuZW1wdHkoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrRXJ0bXNCeVRyYWluXCIsIHtcclxuICAgICAgICAnaWQnOiAkdHJhaW4udmFsKClcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAkZXJ0bXMuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHR5cGVMb2cuc2hvdygpO1xyXG4gICAgICAgICRmb3JtLnNob3coKTtcclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmlmIChpc0FkdmFuY2VkVXBsb2FkKSB7XHJcbiAgICB2YXIgZHJvcHBlZEZpbGVzID0gZmFsc2U7XHJcbiAgICAkZm9ybS5hZGRDbGFzcygnaGFzLWFkdmFuY2VkLXVwbG9hZCcpOyAvLyBsZXR0aW5nIHRoZSBDU1MgcGFydCB0byBrbm93IGRyYWcmZHJvcCBpcyBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXJcclxuICAgICRmb3JtLm9uKCdkcmFnIGRyYWdzdGFydCBkcmFnZW5kIGRyYWdvdmVyIGRyYWdlbnRlciBkcmFnbGVhdmUgZHJvcCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuICAgICRmb3JtLm9uKCdkcmFnb3ZlciBkcmFnZW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJGZvcm0uYWRkQ2xhc3MoJ2lzLWRyYWdvdmVyJyk7XHJcbiAgICB9KTtcclxuICAgICRmb3JtLm9uKCdkcmFnbGVhdmUgZHJhZ2VuZCBkcm9wJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy1kcmFnb3ZlcicpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgJGZvcm0ub24oJ2Ryb3AnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGRyb3BwZWRGaWxlcyA9IGUub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXIuZmlsZXM7XHJcbiAgICAgICAgJGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XHJcbiAgICAgICAgJCgnLmxhYmVsLWRyb3AnKS50ZXh0KGRyb3BwZWRGaWxlc1swXS5uYW1lKTtcclxuICAgICAgICAkKCcubGFiZWwtZHJvcCcpLmNzcygnZm9udC13ZWlnaHQnLCAnYm9sZCcpO1xyXG4gICAgfSk7XHJcbiAgICAkZm9ybS5jaGFuZ2UoJ2Ryb3AnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGRyb3BwZWRGaWxlcyA9IGUub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXIuZmlsZXM7XHJcbiAgICAgICAgJGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XHJcbiAgICB9KTtcclxufVxyXG5sZXQgTG9nID0ge30sXHJcbiAgICBpZEJhc2VsaW5lID0gXCJcIjtcclxuJGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgaWYgKGRyb3BwZWRGaWxlcykge1xyXG5cclxuICAgICAgICBMb2dbJ25hbWVfbG9nJ10gPSAkKCcjdHlwZV9sb2dfc2VsZWN0JykudmFsKCk7XHJcbiAgICAgICAgaWRCYXNlbGluZSA9ICQoJyNlcnRtc19zZWxlY3QnKS52YWwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkKCcjZXJ0bXNfc2VsZWN0JykudmFsKCkpO1xyXG4gICAgICAgIC8vIFBhcnRpIGR1IHRyYWl0ZW1lbnQgZHUgZHJhZyBhbiBkcm9wIGZpbGVcclxuICAgICAgICBpZiAoJGZvcm0uaGFzQ2xhc3MoJ2lzLXVwbG9hZGluZycpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc2hvd0ZpbGVzKGRyb3BwZWRGaWxlcyk7XHJcbiAgICAgICAgJGZvcm0uYWRkQ2xhc3MoJ2lzLXVwbG9hZGluZycpLnJlbW92ZUNsYXNzKCdpcy1lcnJvcicpO1xyXG5cclxuICAgICAgICBpZiAoaXNBZHZhbmNlZFVwbG9hZCkge1xyXG4gICAgICAgICAgICB2YXIgYWpheERhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm0uZ2V0KDApKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkcm9wcGVkRmlsZXMpIHtcclxuICAgICAgICAgICAgICAgICQuZWFjaChkcm9wcGVkRmlsZXMsIGZ1bmN0aW9uIChpLCBmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWpheERhdGEuYXBwZW5kKCRpbnB1dC5hdHRyKCduYW1lJyksIGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ1sna2V5X2xvZyddID0gZmlsZS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWxzdG9tL3VwbG9hZExvZycsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcblxyXG4gICAgICAgICAgICAgICAgeGhyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2dC5sb2FkZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0Lmxlbmd0aENvbXB1dGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwZXJjZW50Q29tcGxldGUgPSAoZXZ0LmxvYWRlZCAvIGV2dC50b3RhbCkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0RvIHNvbWV0aGluZyB3aXRoIHVwbG9hZCBwcm9ncmVzcyBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmdiYXIuc2V0KHBlcmNlbnRDb21wbGV0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVyY2VudENvbXBsZXRlID09IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdGVzdC1wcm9ncmVzc1wiKS5hZGRDbGFzcygnaXMtYmxpbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldnQubG9hZGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQudG90YWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4aHI7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGRhdGE6IGFqYXhEYXRhLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGZvcm0ucmVtb3ZlQ2xhc3MoJ2lzLXVwbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdGVzdC1wcm9ncmVzc1wiKS5yZW1vdmVDbGFzcygnaXMtYmxpbmsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSA/ICdpcy1zdWNjZXNzJyA6ICdpcy1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExvZyB0aGUgZXJyb3IsIHNob3cgYW4gYWxlcnQsIHdoYXRldmVyIHdvcmtzIGZvciB5b3VcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvcnJ5IGJvYnlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBpZnJhbWVOYW1lID0gJ3VwbG9hZGlmcmFtZScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgJGlmcmFtZSA9ICQoJzxpZnJhbWUgbmFtZT1cIicgKyBpZnJhbWVOYW1lICsgJ1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2lmcmFtZT4nKTtcclxuXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJGlmcmFtZSk7XHJcbiAgICAgICAgICAgICRmb3JtLmF0dHIoJ3RhcmdldCcsIGlmcmFtZU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgJGlmcmFtZS5vbmUoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoJGlmcmFtZS5jb250ZW50cygpLmZpbmQoJ2JvZHknKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgJGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLXVwbG9hZGluZycpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGRhdGEuc3VjY2VzcyA9PSB0cnVlID8gJ2lzLXN1Y2Nlc3MnIDogJ2lzLWVycm9yJylcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cigndGFyZ2V0Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuc3VjY2VzcykgJGVycm9yTXNnLnRleHQoZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcclxuICAgICAgICAgICAgICAgICRpZnJhbWUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4kKCcjdmFsaWQtYWxsLWxvZ3MnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjAuNFwiKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZmx1c2gtbG9nJyxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAnbG9nJzogTG9nLFxyXG4gICAgICAgICAgICAnYmFzZWxpbmUnOiBpZEJhc2VsaW5lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAvL2FzayBmb3IgdGhlIHN0YXR1c1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuJCgnLnRkLXRhYmxlJykub24oJ2NsaWNrJywgJy50ZC1wbHVnJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjAuNFwiKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgbGV0IGtleSA9ICQodGhpcylbMF1bXCJpZFwiXTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9kb253bG9hZEZpbGUnLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICdrZXknOiBrZXlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsIFwiMVwiKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pIiwiJCgnI2Zvcm1fcGx1ZycpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGxldCBiYXNlbGluZSA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygkZm9ybSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vYWRkLXBsdWcnLFxyXG4gICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgIGRhdGFUeXBlOiBcInRleHRcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlkOiBiYXNlbGluZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG4vL0V4dHJhaXQgbGUgbm9tYnJlIGQndW5lIHN0cmVpbmdcclxuZnVuY3Rpb24gZXh0cmFpdE5vbWJyZShzdHIpIHtcclxuICAgIHJldHVybiBOdW1iZXIoc3RyLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKSk7XHJcbn0iLCJyZXF1aXJlISBcIi4vcHJlc2V0c1wiOiB7cHJlc2V0c31cblxuc2ltcGxlLXN0ciA9IChhcnIpIC0+IGFyci5qb2luICcnXG53cmFwID0gKGNvbnRlbnQpIC0+IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxcIiArIGJ0b2EoY29udGVudClcblxuZG8gLT5cbiAgICBtYWtlID1cbiAgICAgICAgaGVhZDogKHZpZXdCb3gpIC0+IFwiXCJcIlxuICAgICAgICAgICAgICAgIDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cInV0Zi04XCI/PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIiN2aWV3Qm94XCI+XG4gICAgICAgICAgICAgICAgXCJcIlwiXG5cbiAgICAgICAgZ3JhZGllbnQ6IChkaXIgPSA0NSwgZHVyID0gMSwgLi4uY29sb3JzKSAtPlxuICAgICAgICAgICAgcmV0ID0gW0BoZWFkIFwiMCAwIDEwMCAxMDBcIl1cbiAgICAgICAgICAgIGxlbiA9IGNvbG9ycy5sZW5ndGggKiA0ICsgMVxuICAgICAgICAgICAgZGlyID0gZGlyICogTWF0aC5QSSAvIDE4MFxuICAgICAgICAgICAgZ3ggPSBNYXRoLmNvcyhkaXIpICoqIDJcbiAgICAgICAgICAgIGd5ID0gTWF0aC5zcXJ0KGd4IC0gZ3ggKiogMilcbiAgICAgICAgICAgIGlmIGRpciA+IE1hdGguUEkgKiAwLjI1ID0+XG4gICAgICAgICAgICAgICAgZ3kgPSBNYXRoLnNpbihkaXIpICoqIDJcbiAgICAgICAgICAgICAgICBneCA9IE1hdGguc3FydChneSAtIGd5ICoqIDIpXG4gICAgICAgICAgICB4ID0gZ3ggKiAxMDBcbiAgICAgICAgICAgIHkgPSBneSAqIDEwMFxuICAgICAgICAgICAgcmV0LnB1c2ggXCJcIlwiPGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVwiZ3JhZGllbnRcIiB4MT1cIjBcIiB4Mj1cIiNneFwiIHkxPVwiMFwiIHkyPVwiI2d5XCI+XCJcIlwiXG4gICAgICAgICAgICBmb3IgaSBmcm9tIDAgdGlsIGxlbiA9PlxuICAgICAgICAgICAgICAgIGlkeCA9IGkgKiAxMDAgLyAobGVuIC0gMSlcbiAgICAgICAgICAgICAgICByZXQucHVzaCBcIlwiXCI8c3RvcCBvZmZzZXQ9XCIje2lkeH0lXCIgc3RvcC1jb2xvcj1cIiN7Y29sb3JzW2kgJSBjb2xvcnMubGVuZ3RoXX1cIi8+XCJcIlwiXG4gICAgICAgICAgICByZXQucHVzaCBcIlwiXCJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz5cbiAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCI0MDBcIiBmaWxsPVwidXJsKFxcI2dyYWRpZW50KVwiPlxuICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwidHJhbnNsYXRlXCIgZnJvbT1cIi0jeCwtI3lcIlxuICAgICAgICAgICAgICAgIHRvPVwiMCwwXCIgZHVyPVwiI3tkdXJ9c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz48L3JlY3Q+PC9zdmc+XG4gICAgICAgICAgICAgICAgXCJcIlwiXG4gICAgICAgICAgICB3cmFwIHJldC5qb2luKFwiXCIpXG5cbiAgICAgICAgc3RyaXBlOiAoYzE9XFwjYjRiNGI0LCBjMj1cXCNlNmU2ZTYsIGR1ciA9IDEpIC0+XG4gICAgICAgICAgICByZXQgPSBbQGhlYWQgXCIwIDAgMTAwIDEwMFwiXVxuICAgICAgICAgICAgcmV0ICsrPSBbXG4gICAgICAgICAgICAgICAgXCJcIlwiPHJlY3QgZmlsbD1cIiNjMlwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIvPlwiXCJcIlxuICAgICAgICAgICAgICAgIFwiXCJcIjxnPjxnPlwiXCJcIlxuICAgICAgICAgICAgICAgIFtcIlwiXCI8cG9seWdvbiBmaWxsPVwiI2MxXCIgXCJcIlwiICtcbiAgICAgICAgICAgICAgICAgXCJcIlwicG9pbnRzPVwiI3stOTAgKyBpICogMjB9LDEwMCAjey0xMDAgKyBpICogMjB9LFwiXCJcIiArXG4gICAgICAgICAgICAgICAgIFwiXCJcIjEwMCAjey02MCArIGkgKiAyMH0sMCAjey01MCArIGkgKiAyMH0sMCBcIi8+XCJcIlwiIGZvciBpIGZyb20gMCB0aWwgMTNdLmpvaW4oXCJcIilcbiAgICAgICAgICAgICAgICBcIlwiXCI8L2c+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiIHR5cGU9XCJ0cmFuc2xhdGVcIiBcIlwiXCJcbiAgICAgICAgICAgICAgICBcIlwiXCJmcm9tPVwiMCwwXCIgdG89XCIyMCwwXCIgZHVyPVwiI3tkdXJ9c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz48L2c+PC9zdmc+XCJcIlwiXG4gICAgICAgICAgICBdLmpvaW4oXCJcIilcbiAgICAgICAgICAgIHdyYXAgcmV0XG5cbiAgICAgICAgYnViYmxlOiAoYzEgPSBcXCMzOWQsIGMyID0gXFwjOWNmLCBjb3VudCA9IDE1LCBkdXIgPSAxLCBzaXplID0gNiwgc3c9MSkgLT5cbiAgICAgICAgICAgIHJldCA9IFtAaGVhZChcIjAgMCAyMDAgMjAwXCIpLCBcIlwiXCI8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiBmaWxsPVwiI2MxXCIvPlwiXCJcIl1cbiAgICAgICAgICAgIGZvciBpIGZyb20gMCB0aWwgY291bnQgPT5cbiAgICAgICAgICAgICAgICBpZHggPSAtKGkgLyBjb3VudCkgKiBkdXJcbiAgICAgICAgICAgICAgICB4ID0gTWF0aC5yYW5kb20hICogMTg0ICsgOFxuICAgICAgICAgICAgICAgIHIgPSAoIE1hdGgucmFuZG9tISAqIDAuNyArIDAuMyApICogc2l6ZVxuICAgICAgICAgICAgICAgIGQgPSBkdXIgKiAoMSArIE1hdGgucmFuZG9tISAqIDAuNSlcbiAgICAgICAgICAgICAgICByZXQucHVzaCBbXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjxjaXJjbGUgY3g9XCIjeFwiIGN5PVwiMFwiIHI9XCIjclwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2MyXCIgc3Ryb2tlLXdpZHRoPVwiI3N3XCI+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeVwiIHZhbHVlcz1cIjE5MDstMTBcIiB0aW1lcz1cIjA7MVwiIFwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCJkdXI9XCIje2R9c1wiIGJlZ2luPVwiI3tpZHh9c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPC9jaXJjbGU+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjxjaXJjbGUgY3g9XCIjeFwiIGN5PVwiMFwiIHI9XCIjclwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2MyXCIgc3Ryb2tlLXdpZHRoPVwiI3N3XCI+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeVwiIHZhbHVlcz1cIjM5MDsxOTBcIiB0aW1lcz1cIjA7MVwiIFwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCJkdXI9XCIje2R9c1wiIGJlZ2luPVwiI3tpZHh9c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPC9jaXJjbGU+XCJcIlwiXG4gICAgICAgICAgICAgICAgXS5qb2luKFwiXCIpXG4gICAgICAgICAgICB3cmFwKHJldC5qb2luKFwiXCIpICsgXCI8L3N2Zz5cIilcblxuICAgIGhhbmRsZXIgPVxuICAgICAgICBxdWV1ZToge31cbiAgICAgICAgcnVubmluZzogZmFsc2VcbiAgICAgICAgbWFpbjogKHRpbWVzdGFtcCkgLT5cbiAgICAgICAgICAgIGtlZXBvbiA9IGZhbHNlXG4gICAgICAgICAgICByZW1vdmVkID0gW11cbiAgICAgICAgICAgIGZvciBrLGZ1bmMgb2YgQHF1ZXVlID0+XG4gICAgICAgICAgICAgICAgcmV0ID0gZnVuYyB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICBpZiAhcmV0ID0+IHJlbW92ZWQucHVzaCBmdW5jXG4gICAgICAgICAgICAgICAga2VlcG9uID0ga2VlcG9uIG9yIHJldFxuICAgICAgICAgICAgZm9yIGssZnVuYyBvZiBAcXVldWUgPT4gaWYgcmVtb3ZlZC5pbmRleE9mKGZ1bmMpID49IDAgPT4gZGVsZXRlIEBxdWV1ZVtrXVxuICAgICAgICAgICAgaWYga2VlcG9uID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSAofj4gQG1haW4gaXQpXG4gICAgICAgICAgICBlbHNlIEBydW5uaW5nID0gZmFsc2VcbiAgICAgICAgYWRkOiAoa2V5LCBmKSAtPlxuICAgICAgICAgICAgaWYgIUBxdWV1ZVtrZXldID0+IEBxdWV1ZVtrZXldID0gZlxuICAgICAgICAgICAgaWYgIUBydW5uaW5nID0+XG4gICAgICAgICAgICAgICAgQHJ1bm5pbmcgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICh+PiBAbWFpbiBpdClcblxuXG4gICAgd2luZG93LmxkQmFyID0gbGRCYXIgPSAoc2VsZWN0b3IsIG9wdGlvbiA9IHt9KSAtPlxuICAgICAgICB4bWxucyA9IHhsaW5rOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICByb290ID0gaWYgdHlwZW9mISBzZWxlY3RvciBpcyBcXFN0cmluZ1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciBzZWxlY3RvclxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZWxlY3RvclxuXG4gICAgICAgIGlmICFyb290LmxkQmFyID0+IHJvb3QubGRCYXIgPSBAXG4gICAgICAgIGVsc2UgcmV0dXJuIHJvb3QubGRCYXJcblxuICAgICAgICBjbHMgPSByb290LmdldEF0dHJpYnV0ZShcXGNsYXNzKSBvciAnJ1xuICAgICAgICBpZiAhfmNscy5pbmRleE9mKCdsZEJhcicpID0+IHJvb3Quc2V0QXR0cmlidXRlIFxcY2xhc3MsIFwiI2NscyBsZEJhclwiXG4gICAgICAgIGlkLXByZWZpeCA9IFwibGRCYXItI3tNYXRoLnJhbmRvbSF0b1N0cmluZyAxNiAuc3Vic3RyaW5nIDJ9XCJcbiAgICAgICAgaWQgPVxuICAgICAgICAgICAga2V5OiBpZC1wcmVmaXhcbiAgICAgICAgICAgIGNsaXA6IFwiI3tpZC1wcmVmaXh9LWNsaXBcIlxuICAgICAgICAgICAgZmlsdGVyOiBcIiN7aWQtcHJlZml4fS1maWx0ZXJcIlxuICAgICAgICAgICAgcGF0dGVybjogXCIje2lkLXByZWZpeH0tcGF0dGVyblwiXG4gICAgICAgICAgICBtYXNrOiBcIiN7aWQtcHJlZml4fS1tYXNrXCJcbiAgICAgICAgICAgIG1hc2stcGF0aDogXCIje2lkLXByZWZpeH0tbWFzay1wYXRoXCJcbiAgICAgICAgZG9tVHJlZSA9IChuLG8pIC0+XG4gICAgICAgICAgICBuID0gbmV3Tm9kZSBuXG4gICAgICAgICAgICBmb3Igayx2IG9mIG8gPT4gaWYgayAhPSBcXGF0dHIgPT4gbi5hcHBlbmRDaGlsZCBkb21UcmVlKGssIHYgb3Ige30pXG4gICAgICAgICAgICBuLmF0dHJzKG8uYXR0ciBvciB7fSlcbiAgICAgICAgICAgIG5cbiAgICAgICAgbmV3Tm9kZSA9IChuKSAtPiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuX19wcm90b19fLl9fcHJvdG9fXy5fX3Byb3RvX19cbiAgICAgICAgICAgIC4udGV4dCA9ICh0KSAtPiBAYXBwZW5kQ2hpbGQgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodClcbiAgICAgICAgICAgIC4uYXR0cnMgPSAobykgLT4gZm9yIGssdiBvZiBvID0+XG4gICAgICAgICAgICAgICAgcmV0ID0gLyhbXjpdKyk6KFteOl0rKS8uZXhlYyhrKVxuICAgICAgICAgICAgICAgIGlmICFyZXQgb3IgIXhtbG5zW3JldC4xXSA9PiBAc2V0QXR0cmlidXRlIGssIHZcbiAgICAgICAgICAgICAgICBlbHNlIEBzZXRBdHRyaWJ1dGVOUyB4bWxuc1tyZXQuMV0sIGssIHZcbiAgICAgICAgICAgIC4uc3R5bGVzID0gKG8pIC0+IGZvciBrLHYgb2YgbyA9PiBAc3R5bGVba10gPSB2XG4gICAgICAgICAgICAuLmFwcGVuZCA9IChuKSAtPiBAYXBwZW5kQ2hpbGQgciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyBcImh0dHA6Ly93d3cudzMub2cvMjAwMC9zdmdcIiwgblxuICAgICAgICAgICAgLi5hdHRyID0gKG4sdikgLT4gaWYgdj8gPT4gQHNldEF0dHJpYnV0ZSBuLCB2IGVsc2UgQGdldEF0dHJpYnV0ZSBuXG4gICAgICAgIGNvbmZpZyA9XG4gICAgICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgICAgIFwiaW1nXCI6ICcnXG4gICAgICAgICAgICBcInBhdGhcIjogJ00xMCAxMEw5MCAxME05MCA4TTkwIDEyJ1xuICAgICAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICAgICAgXCJmaWxsXCI6IFxcIzI1YlxuICAgICAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDNcbiAgICAgICAgICAgIFwicGF0dGVybi1zaXplXCI6IG51bGxcbiAgICAgICAgICAgIFwic3Ryb2tlLWRpclwiOiBcXG5vcm1hbFxuICAgICAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgICAgIFwic3Ryb2tlLXRyYWlsXCI6IFxcI2RkZFxuICAgICAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41XG4gICAgICAgICAgICBcImR1cmF0aW9uXCI6IDFcbiAgICAgICAgICAgIFwiZWFzaW5nXCI6IFxcbGluZWFyXG4gICAgICAgICAgICBcInZhbHVlXCI6IDBcbiAgICAgICAgICAgIFwiaW1nLXNpemVcIjogbnVsbFxuICAgICAgICAgICAgXCJiYm94XCI6IG51bGxcbiAgICAgICAgICAgIFwic2V0LWRpbVwiOiB0cnVlXG4gICAgICAgICAgICBcImFzcGVjdC1yYXRpb1wiOiBcInhNaWRZTWlkXCJcbiAgICAgICAgICAgIFwidHJhbnNpdGlvbi1pblwiOiBmYWxzZVxuICAgICAgICAgICAgXCJtaW5cIjogMFxuICAgICAgICAgICAgXCJtYXhcIjogMTAwXG4gICAgICAgICAgICBcInByZWNpc2lvblwiOiAwXG4gICAgICAgICAgICBcInBhZGRpbmdcIjogdW5kZWZpbmVkXG5cbiAgICAgICAgY29uZmlnW1wicHJlc2V0XCJdID0gcm9vdC5hdHRyKFwiZGF0YS1wcmVzZXRcIikgb3Igb3B0aW9uW1wicHJlc2V0XCJdXG5cbiAgICAgICAgaWYgY29uZmlnLnByZXNldD9cbiAgICAgICAgICAgICMgdXNlIHRoZSBkZWZhdWx0IHByZXNldFxuICAgICAgICAgICAgY29uZmlnIDw8PCBwcmVzZXRzW2NvbmZpZy5wcmVzZXRdXG5cbiAgICAgICAgIyBvdmVyd3JpdGUgaWYgdGhlcmUgYXJlIGFyZ3VtZW50cyBwYXNzZWQgdmlhIGRhdGEtKiBhdHRyaWJ1dGVzXG4gICAgICAgIGZvciBhdHRyIG9mIGNvbmZpZ1xuICAgICAgICAgICAgaWYgdGhhdCA9IHJvb3QuYXR0ciBcImRhdGEtI3thdHRyfVwiXG4gICAgICAgICAgICAgICAgY29uZmlnW2F0dHJdID0gdGhhdFxuXG4gICAgICAgIGNvbmZpZyA8PDwgb3B0aW9uXG4gICAgICAgIGlmIGNvbmZpZy5pbWcgPT4gY29uZmlnLnBhdGggPSBudWxsXG5cbiAgICAgICAgaXMtc3Ryb2tlID0gY29uZmlnLnR5cGUgPT0gXFxzdHJva2VcbiAgICAgICAgcGFyc2UtcmVzID0gKHYpIC0+XG4gICAgICAgICAgICBwYXJzZXIgPSAvZGF0YTpsZGJhclxcL3JlcywoW14oKV0rKVxcKChbXildKylcXCkvXG4gICAgICAgICAgICByZXQgPSBwYXJzZXIuZXhlYyh2KVxuICAgICAgICAgICAgaWYgIXJldCA9PiByZXR1cm4gdlxuICAgICAgICAgICAgcmV0ID0gbWFrZVtyZXQuMV0uYXBwbHkgbWFrZSwgcmV0LjIuc3BsaXQoXFwsKVxuICAgICAgICBjb25maWcuZmlsbCA9IHBhcnNlLXJlcyBjb25maWcuZmlsbFxuICAgICAgICBjb25maWcuc3Ryb2tlID0gcGFyc2UtcmVzIGNvbmZpZy5zdHJva2VcbiAgICAgICAgaWYgY29uZmlnW1wic2V0LWRpbVwiXSA9PSBcXGZhbHNlID0+IGNvbmZpZ1tcInNldC1kaW1cIl0gPSBmYWxzZVxuXG4gICAgICAgIGRvbSA9XG4gICAgICAgICAgICBhdHRyOlxuICAgICAgICAgICAgICAgIFwieG1sbnM6eGxpbmtcIjogXFxodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXG4gICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogY29uZmlnW1wiYXNwZWN0LXJhdGlvXCJdXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAgICAgICBkZWZzOlxuICAgICAgICAgICAgICAgIGZpbHRlcjpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLmZpbHRlciwgeDogLTEsIHk6IC0xLCB3aWR0aDogMywgaGVpZ2h0OiAzXG4gICAgICAgICAgICAgICAgICAgIGZlTW9ycGhvbG9neTogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAoaWYgK2NvbmZpZ1tcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCJdPj0wID0+IFxcZGlsYXRlIGVsc2UgXFxlcm9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogTWF0aC5hYnMoK2NvbmZpZ1tcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCJdKVxuICAgICAgICAgICAgICAgICAgICBmZUNvbG9yTWF0cml4OiBhdHRyOiB7dmFsdWVzOiAnMCAwIDAgMCAxICAgIDAgMCAwIDAgMSAgICAwIDAgMCAwIDEgICAgMCAwIDAgMSAwJywgcmVzdWx0OiBcImNtXCJ9XG4gICAgICAgICAgICAgICAgbWFzazpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLm1hc2tcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgICAgICBcInhsaW5rOmhyZWZcIjogY29uZmlnLmltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcInVybChcXCMje2lkLmZpbHRlcn0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAxMDAsIGhlaWdodDogMTAwLCBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBjb25maWdbXCJhc3BlY3QtcmF0aW9cIl1cblxuICAgICAgICAgICAgICAgIGc6XG4gICAgICAgICAgICAgICAgICAgIG1hc2s6XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiBpZDogaWQubWFzay1wYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ6IGNvbmZpZy5wYXRoIG9yIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcXCNmZmZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IFxcI2ZmZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJ1cmwoXFwjI3tpZC5maWx0ZXJ9KVwiXG5cbiAgICAgICAgICAgICAgICBjbGlwUGF0aDpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLmNsaXBcbiAgICAgICAgICAgICAgICAgICAgcmVjdDoge2F0dHI6IGNsYXNzOiBcXG1hc2ssIGZpbGw6IFxcIzAwMH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgICAgICAgICBhdHRyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLnBhdHRlcm4sIHBhdHRlcm5Vbml0czogXFx1c2VyU3BhY2VPblVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgeDowLCB5OiAwLCB3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogYXR0cjogeDogMCwgeTogMCwgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDBcblxuICAgICAgICBzdmcgPSBkb21UcmVlIFxcc3ZnLCBkb21cbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXFxkaXZcbiAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUgXFxjbGFzcywgXFxsZEJhci1sYWJlbFxuICAgICAgICByb290LmFwcGVuZENoaWxkIHN2Z1xuICAgICAgICByb290LmFwcGVuZENoaWxkIHRleHRcblxuICAgICAgICBncm91cCA9IFswLDBdXG4gICAgICAgIGxlbmd0aCA9IDBcblxuICAgICAgICBAZml0ID0gfj5cbiAgICAgICAgICAgIGlmIGNvbmZpZ1tcImJib3hcIl0gPT5cbiAgICAgICAgICAgICAgYm94ID0gdGhhdC5zcGxpdCgnICcpLm1hcCgtPisoaXQudHJpbSEpKVxuICAgICAgICAgICAgICBib3ggPSB7eDogYm94LjAsIHk6IGJveC4xLCB3aWR0aDogYm94LjIsIGhlaWdodDogYm94LjN9XG4gICAgICAgICAgICBlbHNlIGJveCA9IGdyb3VwLjEuZ2V0QkJveCFcbiAgICAgICAgICAgIGlmICFib3ggb3IgYm94LndpZHRoID09IDAgb3IgYm94LmhlaWdodCA9PSAwID0+IGJveCA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMH1cbiAgICAgICAgICAgIGQgPSAoTWF0aC5tYXguYXBwbHkoXG4gICAgICAgICAgICAgIG51bGwsIDxbc3Ryb2tlLXdpZHRoIHN0cm9rZS10cmFpbC13aWR0aCBmaWxsLWJhY2tncm91bmQtZXh0cnVkZV0+Lm1hcCgtPmNvbmZpZ1tpdF0pKVxuICAgICAgICAgICAgKSAqIDEuNVxuICAgICAgICAgICAgaWYgY29uZmlnW1wicGFkZGluZ1wiXT8gPT4gZCA9ICtjb25maWdbXCJwYWRkaW5nXCJdXG5cbiAgICAgICAgICAgIHN2Zy5hdHRycyB2aWV3Qm94OiBbYm94LnggLSBkLCBib3gueSAtIGQsIGJveC53aWR0aCArIGQgKiAyLCBib3guaGVpZ2h0ICsgZCAqIDJdLmpvaW4oXCIgXCIpXG4gICAgICAgICAgICBpZiBjb25maWdbXCJzZXQtZGltXCJdID0+IDxbd2lkdGggaGVpZ2h0XT4ubWFwIH4+IGlmICFyb290LnN0eWxlW2l0XSBvciBAZml0W2l0XSA9PlxuICAgICAgICAgICAgICByb290LnN0eWxlW2l0XSA9IFwiI3tib3hbaXRdICsgZCAqIDJ9cHhcIlxuICAgICAgICAgICAgICBAZml0W2l0XSA9IHRydWVcblxuICAgICAgICAgICAgcmVjdCA9IGdyb3VwLjAucXVlcnlTZWxlY3RvciBcXHJlY3RcbiAgICAgICAgICAgIGlmIHJlY3QgPT4gcmVjdC5hdHRycyBkb1xuICAgICAgICAgICAgICAgIHg6IGJveC54IC0gZCwgeTogYm94LnkgLSBkLCB3aWR0aDogYm94LndpZHRoICsgZCAqIDIsIGhlaWdodDogYm94LmhlaWdodCArIGQgKiAyXG5cbiAgICAgICAgaWYgY29uZmlnLnBhdGggPT5cbiAgICAgICAgICAgIGlmIGlzLXN0cm9rZSA9PlxuICAgICAgICAgICAgICAgIGdyb3VwLjAgPSBkb21UcmVlIFxcZywgcGF0aDogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgZDogY29uZmlnLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogXFxub25lXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcXGJhc2VsaW5lXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZ3JvdXAuMCA9IGRvbVRyZWUgXFxnLCByZWN0OiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBcInVybChcXCMje2lkLm1hc2stcGF0aH0pXCIsIGZpbGw6IGNvbmZpZ1tcImZpbGwtYmFja2dyb3VuZFwiXVxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXFxmcmFtZVxuXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQgZ3JvdXAuMFxuICAgICAgICAgICAgZ3JvdXAuMSA9IGRvbVRyZWUgXFxnLCBwYXRoOiBhdHRyOlxuICAgICAgICAgICAgICAgIGQ6IGNvbmZpZy5wYXRoLCBjbGFzczogaWYgaXMtc3Ryb2tlID0+IFxcbWFpbmxpbmUgZWxzZSBcXHNvbGlkXG4gICAgICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogaWYgY29uZmlnLnR5cGUgPT0gXFxmaWxsID0+IFwidXJsKFxcIyN7aWQuY2xpcH0pXCIgZWxzZSAnJ1xuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkIGdyb3VwLjFcbiAgICAgICAgICAgIHBhdGgwID0gZ3JvdXAuMC5xdWVyeVNlbGVjdG9yIChpZiBpcy1zdHJva2UgPT4gXFxwYXRoIGVsc2UgXFxyZWN0KVxuICAgICAgICAgICAgcGF0aDEgPSBncm91cC4xLnF1ZXJ5U2VsZWN0b3IgXFxwYXRoXG4gICAgICAgICAgICBpZiBpcy1zdHJva2UgPT4gcGF0aDEuYXR0cnMgZmlsbDogXFxub25lXG5cbiAgICAgICAgICAgIHBhdGltZyA9IHN2Zy5xdWVyeVNlbGVjdG9yICdwYXR0ZXJuIGltYWdlJ1xuICAgICAgICAgICAgaW1nID0gbmV3IEltYWdlIVxuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIgXFxsb2FkLCAtPlxuICAgICAgICAgICAgICAgIGJveCA9IGlmIGNvbmZpZ1tcInBhdHRlcm4tc2l6ZVwiXSA9PiB7d2lkdGg6ICt0aGF0LCBoZWlnaHQ6ICt0aGF0fVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgaW1nLndpZHRoIGFuZCBpbWcuaGVpZ2h0ID0+IHt3aWR0aDogaW1nLndpZHRoLCBoZWlnaHQ6IGltZy5oZWlnaHR9XG4gICAgICAgICAgICAgICAgZWxzZSB7d2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDB9XG4gICAgICAgICAgICAgICAgc3ZnLnF1ZXJ5U2VsZWN0b3IgXFxwYXR0ZXJuIC5hdHRycyB7d2lkdGg6IGJveC53aWR0aCwgaGVpZ2h0OiBib3guaGVpZ2h0fVxuICAgICAgICAgICAgICAgIHBhdGltZy5hdHRycyB7d2lkdGg6IGJveC53aWR0aCwgaGVpZ2h0OiBib3guaGVpZ2h0fVxuICAgICAgICAgICAgaWYgLy4rXFwuLit8XmRhdGE6Ly5leGVjKGlmICFpcy1zdHJva2UgPT4gY29uZmlnLmZpbGwgZWxzZSBjb25maWcuc3Ryb2tlKSA9PlxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpZiAhaXMtc3Ryb2tlID0+IGNvbmZpZy5maWxsIGVsc2UgY29uZmlnLnN0cm9rZVxuICAgICAgICAgICAgICAgIHBhdGltZy5hdHRycyBcInhsaW5rOmhyZWZcIjogaW1nLnNyYyAjaWYgIWlzLXN0cm9rZSA9PiBjb25maWcuZmlsbCBlbHNlIGNvbmZpZy5zdHJva2VcblxuICAgICAgICAgICAgaWYgaXMtc3Ryb2tlID0+XG4gICAgICAgICAgICAgICAgcGF0aDAuYXR0cnMgc3Ryb2tlOiBjb25maWdbXCJzdHJva2UtdHJhaWxcIl0sIFwic3Ryb2tlLXdpZHRoXCI6IGNvbmZpZ1tcInN0cm9rZS10cmFpbC13aWR0aFwiXVxuICAgICAgICAgICAgICAgIHBhdGgxLmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IGNvbmZpZ1tcInN0cm9rZS13aWR0aFwiXVxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IGlmIC8uK1xcLi4rfF5kYXRhOi8uZXhlYyhjb25maWcuc3Ryb2tlKSA9PiBcInVybChcXCMje2lkLnBhdHRlcm59KVwiIGVsc2UgY29uZmlnLnN0cm9rZVxuICAgICAgICAgICAgaWYgY29uZmlnLmZpbGwgYW5kICFpcy1zdHJva2UgPT5cbiAgICAgICAgICAgICAgICBwYXRoMS5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBpZiAvLitcXC4uK3xeZGF0YTovLmV4ZWMoY29uZmlnLmZpbGwpID0+IFwidXJsKFxcIyN7aWQucGF0dGVybn0pXCIgZWxzZSBjb25maWcuZmlsbFxuXG4gICAgICAgICAgICBsZW5ndGggPSBwYXRoMS5nZXRUb3RhbExlbmd0aCFcbiAgICAgICAgICAgIEBmaXQhXG4gICAgICAgICAgICBAaW5pdGVkID0gdHJ1ZVxuICAgICAgICBlbHNlIGlmIGNvbmZpZy5pbWcgPT5cbiAgICAgICAgICAgIGlmIGNvbmZpZ1tcImltZy1zaXplXCJdID0+XG4gICAgICAgICAgICAgICAgcmV0ID0gY29uZmlnW1wiaW1nLXNpemVcIl0uc3BsaXQoXFwsKVxuICAgICAgICAgICAgICAgIHNpemUgPSB7d2lkdGg6ICtyZXQuMCwgaGVpZ2h0OiArcmV0LjF9XG4gICAgICAgICAgICBlbHNlIHNpemUgPSB7d2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDB9XG5cbiAgICAgICAgICAgIGdyb3VwLjAgPSBkb21UcmVlIFxcZywgcmVjdDogYXR0cjpcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgbWFzazogXCJ1cmwoXFwjI3tpZC5tYXNrfSlcIiwgZmlsbDogY29uZmlnW1wiZmlsbC1iYWNrZ3JvdW5kXCJdXG4gICAgICAgICAgICBzdmcucXVlcnlTZWxlY3RvciAnbWFzayBpbWFnZScgLmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHRcbiAgICAgICAgICAgIGdyb3VwLjEgPSBkb21UcmVlIFxcZywgaW1hZ2U6IGF0dHI6XG4gICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHQsIHg6IDAsIHk6IDAsIHByZXNlcnZlQXNwZWN0UmF0aW86IGNvbmZpZ1tcImFzcGVjdC1yYXRpb1wiXVxuICAgICAgICAgICAgICAgICN3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgeDogMCwgeTogMCwgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJ4TWlkWU1pZFwiXG4gICAgICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogaWYgY29uZmlnLnR5cGUgPT0gXFxmaWxsID0+IFwidXJsKFxcIyN7aWQuY2xpcH0pXCIgZWxzZSAnJ1xuICAgICAgICAgICAgICAgIFwieGxpbms6aHJlZlwiOiBjb25maWcuaW1nLCBjbGFzczogXFxzb2xpZFxuICAgICAgICAgICAgaW1nID0gbmV3IEltYWdlIVxuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIgXFxsb2FkLCB+PlxuICAgICAgICAgICAgICAgIGlmIGNvbmZpZ1tcImltZy1zaXplXCJdID0+XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGNvbmZpZ1tcImltZy1zaXplXCJdLnNwbGl0KFxcLClcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHt3aWR0aDogK3JldC4wLCBoZWlnaHQ6ICtyZXQuMX1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIGltZy53aWR0aCBhbmQgaW1nLmhlaWdodCA9PiBzaXplID0ge3dpZHRoOiBpbWcud2lkdGgsIGhlaWdodDogaW1nLmhlaWdodH1cbiAgICAgICAgICAgICAgICBlbHNlIHNpemUgPSB7d2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDB9XG4gICAgICAgICAgICAgICAgc3ZnLnF1ZXJ5U2VsZWN0b3IgJ21hc2sgaW1hZ2UnIC5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodFxuICAgICAgICAgICAgICAgIGdyb3VwLjEucXVlcnlTZWxlY3RvciAnaW1hZ2UnIC5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodFxuXG4gICAgICAgICAgICAgICAgQGZpdCFcbiAgICAgICAgICAgICAgICBAc2V0IHVuZGVmaW5lZCwgZmFsc2VcbiAgICAgICAgICAgICAgICBAaW5pdGVkID0gdHJ1ZVxuICAgICAgICAgICAgaW1nLnNyYyA9IGNvbmZpZy5pbWdcbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZCBncm91cC4wXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQgZ3JvdXAuMVxuICAgICAgICBzdmcuYXR0cnMgd2lkdGg6IFxcMTAwJSwgaGVpZ2h0OiBcXDEwMCUgIywgdmlld0JveDogJzAgMCAxMDAgMTAwJ1xuXG4gICAgICAgIEB0cmFuc2l0aW9uID1cbiAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgIHNyYzogMFxuICAgICAgICAgICAgICAgIGRlczogMFxuICAgICAgICAgICAgdGltZToge31cblxuICAgICAgICAgICAgZWFzZTogKHQsYixjLGQpIC0+XG4gICAgICAgICAgICAgICAgdCA9IHQgLyAoZCAqIDAuNSlcbiAgICAgICAgICAgICAgICBpZiB0IDwgMSA9PiByZXR1cm4gYyAqIDAuNSAqIHQgKiB0ICsgYlxuICAgICAgICAgICAgICAgIHQgPSB0IC0gMVxuICAgICAgICAgICAgICAgIHJldHVybiAtYyAqIDAuNSAqICh0Kih0IC0gMikgLSAxKSArIGJcblxuICAgICAgICAgICAgaGFuZGxlcjogKHRpbWUsIGRvVHJhbnNpdGlvbiA9IHRydWUpIC0+XG4gICAgICAgICAgICAgICAgaWYgIUB0aW1lLnNyYz8gPT4gQHRpbWUuc3JjID0gdGltZVxuICAgICAgICAgICAgICAgIFttaW4sbWF4LHByZWNdID0gW2NvbmZpZ1tcIm1pblwiXSwgY29uZmlnW1wibWF4XCJdLDEvY29uZmlnW1wicHJlY2lzaW9uXCJdXVxuICAgICAgICAgICAgICAgIFtkdiwgZHQsIGR1cl0gPSBbQHZhbHVlLmRlcyAtIEB2YWx1ZS5zcmMsICh0aW1lIC0gQHRpbWUuc3JjKSAqIDAuMDAxLCArY29uZmlnW1wiZHVyYXRpb25cIl0gb3IgMV1cbiAgICAgICAgICAgICAgICB2ID0gaWYgZG9UcmFuc2l0aW9uID0+IEBlYXNlKGR0LCBAdmFsdWUuc3JjLCBkdiwgZHVyKSBlbHNlIEB2YWx1ZS5kZXNcbiAgICAgICAgICAgICAgICBpZiBjb25maWcucHJlY2lzaW9uID0+IHYgPSBNYXRoLnJvdW5kKHYgKiBwcmVjKSAvIHByZWNcbiAgICAgICAgICAgICAgICBlbHNlIGlmIGRvVHJhbnNpdGlvbiA9PiB2ID0gTWF0aC5yb3VuZCh2KVxuICAgICAgICAgICAgICAgIHYgPj89IG1pblxuICAgICAgICAgICAgICAgIHYgPD89IG1heFxuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSB2XG4gICAgICAgICAgICAgICAgcCA9IDEwMC4wICogKHYgLSBtaW4gKSAvICggbWF4IC0gbWluIClcbiAgICAgICAgICAgICAgICBpZiBpcy1zdHJva2UgPT5cbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHBhdGgxXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLWRhc2hhcnJheVwiOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgY29uZmlnW1wic3Ryb2tlLWRpclwiXSA9PSBcXHJldmVyc2UgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwICN7bGVuZ3RoICogKDEwMCAtIHApICogMC4wMX0gI3tsZW5ndGggKiBwICogMC4wMX0gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSA9PiBcIiN7cCAqIDAuMDEgKiBsZW5ndGh9ICN7KDEwMCAtIHApICogMC4wMSAqIGxlbmd0aCArIDF9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGJveCA9IGdyb3VwLjEuZ2V0QkJveCFcbiAgICAgICAgICAgICAgICAgICAgZGlyID0gY29uZmlnW1wiZmlsbC1kaXJcIl1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSBpZiBkaXIgPT0gXFxidHQgb3IgIWRpciA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnkgKyBib3guaGVpZ2h0ICogKDEwMCAtIHApICogMC4wMVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBib3guaGVpZ2h0ICogcCAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGJveC54LCB3aWR0aDogYm94LndpZHRoXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgZGlyID09IFxcdHRiID0+IGRvXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBib3gueSwgaGVpZ2h0OiBib3guaGVpZ2h0ICogcCAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGJveC54LCB3aWR0aDogYm94LndpZHRoXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgZGlyID09IFxcbHRyID0+IGRvXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBib3gueSwgaGVpZ2h0OiBib3guaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCwgd2lkdGg6IGJveC53aWR0aCAqIHAgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgZGlyID09IFxccnRsID0+IGRvXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBib3gueSwgaGVpZ2h0OiBib3guaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCArIGJveC53aWR0aCAqICgxMDAgLSBwKSAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBib3gud2lkdGggKiBwICogMC4wMVxuICAgICAgICAgICAgICAgICAgICBub2RlID0gc3ZnLnF1ZXJ5U2VsZWN0b3IgXFxyZWN0XG4gICAgICAgICAgICAgICAgbm9kZS5hdHRycyBzdHlsZVxuICAgICAgICAgICAgICAgIGlmIGR0ID49IGR1ciA9PiBkZWxldGUgQHRpbWUuc3JjOyByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgc3RhcnQ6IChzcmMsIGRlcywgZG9UcmFuc2l0aW9uKSAtPlxuICAgICAgICAgICAgICAgIEB2YWx1ZSA8PDwge3NyYywgZGVzfVxuICAgICAgICAgICAgICAgICEhKCByb290Lm9mZnNldFdpZHRoIHx8IHJvb3Qub2Zmc2V0SGVpZ2h0IHx8IHJvb3QuZ2V0Q2xpZW50UmVjdHMhbGVuZ3RoIClcbiAgICAgICAgICAgICAgICBpZiAhZG9UcmFuc2l0aW9uIG9yICEoIHJvb3Qub2Zmc2V0V2lkdGggfHwgcm9vdC5vZmZzZXRIZWlnaHQgfHwgcm9vdC5nZXRDbGllbnRSZWN0cyFsZW5ndGggKSA9PlxuICAgICAgICAgICAgICAgICAgICBAdGltZS5zcmMgPSAwXG4gICAgICAgICAgICAgICAgICAgIEBoYW5kbGVyIDEwMDAsIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIGhhbmRsZXIuYWRkIGlkLmtleSwgKHRpbWUpIH4+IHJldHVybiBAaGFuZGxlciB0aW1lXG5cbiAgICAgICAgQHNldCA9ICh2LGRvVHJhbnNpdGlvbiA9IHRydWUpIC0+XG4gICAgICAgICAgICBzcmMgPSBAdmFsdWUgb3IgMFxuICAgICAgICAgICAgaWYgdj8gPT4gQHZhbHVlID0gdiBlbHNlIHYgPSBAdmFsdWVcbiAgICAgICAgICAgIGRlcyA9IEB2YWx1ZVxuICAgICAgICAgICAgQHRyYW5zaXRpb24uc3RhcnQgc3JjLCBkZXMsIGRvVHJhbnNpdGlvblxuXG4gICAgICAgIEBzZXQgKCtjb25maWcudmFsdWUgb3IgMCksIGNvbmZpZ1tcInRyYW5zaXRpb24taW5cIl0gb3IgZmFsc2VcbiAgICAgICAgQFxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgXFxsb2FkLCAoLT5cbiAgICAgICAgZm9yIG5vZGUgaW4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcXC5sZEJhcikgPT5cbiAgICAgICAgICBpZiAhbm9kZS5sZEJhciA9PiBub2RlLmxkQmFyID0gbmV3IGxkQmFyIG5vZGVcbiAgICApLCBmYWxzZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxkQmFyXG4iLCJleHBvcnQgcHJlc2V0cyA9XG4gICAgcmFpbmJvdzpcbiAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgIFwicGF0aFwiOiAnTTEwIDEwTDkwIDEwJ1xuICAgICAgICBcInN0cm9rZVwiOiAnZGF0YTpsZGJhci9yZXMsZ3JhZGllbnQoMCwxLCNhNTUxZGYsI2ZkNTFhZCwjZmY3ZjgyLCNmZmI4NzQsI2ZmZWI5MCknXG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDEwIDgwIDEwXCJcbiAgICBlbmVyZ3k6XG4gICAgICAgIFwidHlwZVwiOiAnZmlsbCdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTUgNUw4NSA1QTUgNSAwIDAgMSA4NSAxNUwxNSAxNUE1IDUgMCAwIDEgMTUgNSdcbiAgICAgICAgXCJzdHJva2VcIjogXFwjZjAwXG4gICAgICAgIFwiZmlsbFwiOiAnZGF0YTpsZGJhci9yZXMsZ3JhZGllbnQoNDUsMiwjNGU5LCM4ZmIsIzRlOSknXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXCJsdHJcIlxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiBcXCM0NDRcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAxXG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDUgODAgMTBcIlxuICAgIHN0cmlwZTpcbiAgICAgICAgXCJ0eXBlXCI6ICdmaWxsJ1xuICAgICAgICBcInBhdGhcIjogJ00xNSA1TDg1IDVBNSA1IDAgMCAxIDg1IDE1TDE1IDE1QTUgNSAwIDAgMSAxNSA1J1xuICAgICAgICBcInN0cm9rZVwiOiBcXCNmMDBcbiAgICAgICAgXCJmaWxsXCI6ICdkYXRhOmxkYmFyL3JlcyxzdHJpcGUoIzI1YiwjNThlLDEpJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFwibHRyXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMVxuICAgICAgICBcImJib3hcIjogXCIxMCA1IDgwIDEwXCJcbiAgICB0ZXh0OlxuICAgICAgICBcInR5cGVcIjogJ2ZpbGwnXG4gICAgICAgIFwiaW1nXCI6IFwiXCJcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDcwIDIwXCI+PHRleHQgeD1cIjM1XCIgeT1cIjEwXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIiBkb21pbmFudC1iYXNlbGluZT1cImNlbnRyYWxcIiBmb250LWZhbWlseT1cImFyaWFsXCI+TE9BRElORzwvdGV4dD48L3N2Zz5cIlwiXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAxLjNcbiAgICAgICAgXCJwYXR0ZXJuLXNpemVcIjogMTAwXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXCJsdHJcIlxuICAgICAgICBcImltZy1zaXplXCI6IFwiNzAsMjBcIlxuICAgICAgICBcImJib3hcIjogXCIwIDAgNzAgMjBcIlxuICAgIGxpbmU6XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ00xMCAxMEw5MCAxMCdcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDFcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgMTAgODAgMTBcIlxuICAgIGZhbjpcbiAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgIFwicGF0aFwiOiAnTTEwIDkwQTQwIDQwIDAgMCAxIDkwIDkwJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFxcYnR0XG4gICAgICAgIFwiZmlsbFwiOiBcXCMyNWJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogM1xuICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFxcM1xuICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41XG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDUwIDgwIDQwXCJcbiAgICBjaXJjbGU6XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ001MCAxMEE0MCA0MCAwIDAgMSA1MCA5MEE0MCA0MCAwIDAgMSA1MCAxMCdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICBcImZpbGxcIjogXFwjMjViXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDNcbiAgICAgICAgXCJzdHJva2UtZGlyXCI6IFxcbm9ybWFsXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICBcImJib3hcIjogXCIxMCAxMCA4MCA4MFwiXG4gICAgYnViYmxlOlxuICAgICAgICBcInR5cGVcIjogJ2ZpbGwnXG4gICAgICAgIFwicGF0aFwiOiAnTTUwIDEwQTQwIDQwIDAgMCAxIDUwIDkwQTQwIDQwIDAgMCAxIDUwIDEwJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFxcYnR0XG4gICAgICAgIFwiZmlsbFwiOiAnZGF0YTpsZGJhci9yZXMsYnViYmxlKCMzOWQsI2NlZiknXG4gICAgICAgIFwicGF0dGVybi1zaXplXCI6IFwiMTUwXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMlxuICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFxcM1xuICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41XG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDEwIDgwIDgwXCJcbiIsIi8vZMOpZmluaXRpb24gZGVzIHZhcmlhYmxlc1xubGV0IExpc3RlUGx1ZyA9IFtdLFxuICAgIGkgPSAwLFxuICAgIHZhbGlkID0gZmFsc2U7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG5vbWJyZV91cmwgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2Fsc3RvbS9iYXNlbGluZS10cmFpbi8nICsgbm9tYnJlX3VybCkge1xuICAgICAgICAvL2lkZW50aWZpY2F0aW9uIGRlIGxhIHByb2dyZXNzIGJhclxuICAgICAgICBwcmdiYXIgPSBuZXcgbGRCYXIoXCIjdGVzdC1wcm9ncmVzc1wiKTtcbiAgICB9O1xufSk7XG4vLyBEZWNsYXJhdGlvbiBkJ8OpdmVuZW1lbnQgYXZhbnQgY2hhcmdlbWVudCBkZSBsIGFwYWdlXG4kKCcjdmFsaWQtYWxsLXBsdWcnKS5oaWRlKCk7XG4kKCcjY2FuY2VsLWFsbC1wbHVnJykuaGlkZSgpO1xuLy9kZXRlY3Rpb24gc2kgbGUgYnJvd3NlciBnw6hyZSBsZSBkcmFnJmRyb3BcbnZhciBpc0FkdmFuY2VkVXBsb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXR1cm4gKCgnZHJhZ2dhYmxlJyBpbiBkaXYpIHx8ICgnb25kcmFnc3RhcnQnIGluIGRpdiAmJiAnb25kcm9wJyBpbiBkaXYpKSAmJiAnRm9ybURhdGEnIGluIHdpbmRvdyAmJiAnRmlsZVJlYWRlcicgaW4gd2luZG93O1xufSgpO1xudmFyICRmb3JtID0gJCgnLmJveCcpO1xudmFyICRpbnB1dCA9ICRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyksXG4gICAgJGxhYmVsID0gJGZvcm0uZmluZCgnbGFiZWwnKSxcbiAgICBzaG93RmlsZXMgPSBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgICAgJGxhYmVsLnRleHQoZmlsZXMubGVuZ3RoID4gMSA/ICgkaW5wdXQuYXR0cignZGF0YS1tdWx0aXBsZS1jYXB0aW9uJykgfHwgJycpLnJlcGxhY2UoJ3tjb3VudH0nLCBmaWxlcy5sZW5ndGgpIDogZmlsZXNbMF0ubmFtZSk7XG4gICAgfTtcblxuLy9ham91dGVyIHVuIHBsdWdcblxuJCgnI2FkZC1mb3JtLXBsdWcnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgLy8gJCgnI2NhcmQtY29udGVudC1wbHVnJykuYXBwZW5kKFwidGVzdFwiKTtcbiAgICAvLyBjb25zb2xlLmxvZygkKCcuY29udGVudC1uYW1lLWRyYWctcGx1ZycpKVxuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICQoJyNpbnB1dC1uYW1lLXBsdWcnKS52YWwoJycpO1xuICAgICAgICBkcm9wcGVkRmlsZXMgPSBmYWxzZTtcbiAgICAgICAgJGZvcm0ucmVtb3ZlQ2xhc3MoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgJCgnLmxhYmVsLWRyb3AnKS5jc3MoJ2ZvbnQtd2VpZ2h0JywgJycpO1xuICAgICAgICAkKCcubGFiZWwtZHJvcCcpLmh0bWwoJzxzdHJvbmc+IENob29zZSBhIGZpbGUgPC9zdHJvbmc+IDxzcGFuIGNsYXNzPVwiYm94X19kcmFnbmRyb3BcIj5vciBkcmFnIGl0IGhlcmUgPC9zcGFuPi48L2xhYmVsPicpO1xuICAgICAgICAkKCcjY29udGVudC1uYW1lLWRyYWctcGx1ZycpLnNob3coKTtcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59KVxuLy9vbiBvdXZyZSBsZSBmb3JtIHBvdXIgYWpvdXRlclxuXG4kKCcjYWRkUGx1Z3MnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufSk7XG5pZiAoaXNBZHZhbmNlZFVwbG9hZCkge1xuICAgIHZhciBkcm9wcGVkRmlsZXMgPSBmYWxzZTtcbiAgICAkZm9ybS5hZGRDbGFzcygnaGFzLWFkdmFuY2VkLXVwbG9hZCcpOyAvLyBsZXR0aW5nIHRoZSBDU1MgcGFydCB0byBrbm93IGRyYWcmZHJvcCBpcyBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXJcbiAgICAkZm9ybS5vbignZHJhZyBkcmFnc3RhcnQgZHJhZ2VuZCBkcmFnb3ZlciBkcmFnZW50ZXIgZHJhZ2xlYXZlIGRyb3AnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgJGZvcm0ub24oJ2RyYWdvdmVyIGRyYWdlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGZvcm0uYWRkQ2xhc3MoJ2lzLWRyYWdvdmVyJyk7XG4gICAgfSk7XG4gICAgJGZvcm0ub24oJ2RyYWdsZWF2ZSBkcmFnZW5kIGRyb3AnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy1kcmFnb3ZlcicpO1xuXG4gICAgfSk7XG4gICAgJGZvcm0ub24oJ2Ryb3AnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkcm9wcGVkRmlsZXMgPSBlLm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgICAgICAkZm9ybS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICAgICAgJCgnLmxhYmVsLWRyb3AnKS50ZXh0KGRyb3BwZWRGaWxlc1swXS5uYW1lKTtcbiAgICAgICAgJCgnLmxhYmVsLWRyb3AnKS5jc3MoJ2ZvbnQtd2VpZ2h0JywgJ2JvbGQnKTtcbiAgICB9KTtcbiAgICAkZm9ybS5jaGFuZ2UoJ2Ryb3AnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkcm9wcGVkRmlsZXMgPSBlLm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgICAgICAkZm9ybS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9KTtcbn1cbiRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCcjdmFsaWQtcGx1ZycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IFBsdWcgPSB7fTtcbiAgICBpZiAoJCgnI2lucHV0LW5hbWUtcGx1ZycpLnZhbCgpICE9IFwiXCIgJiYgZHJvcHBlZEZpbGVzKSB7XG5cbiAgICAgICAgJCgnI3ZhbGlkLWFsbC1wbHVnJykuc2hvdygpO1xuICAgICAgICAkKCcjY2FuY2VsLWFsbC1wbHVnJykuc2hvdygpO1xuXG4gICAgICAgIFBsdWdbJ25hbWVfcGx1ZyddID0gJCgnI2lucHV0LW5hbWUtcGx1ZycpLnZhbCgpO1xuXG4gICAgICAgIC8vIFBhcnRpIGR1IHRyYWl0ZW1lbnQgZHUgZHJhZyBhbiBkcm9wIGZpbGVcbiAgICAgICAgaWYgKCRmb3JtLmhhc0NsYXNzKCdpcy11cGxvYWRpbmcnKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBzaG93RmlsZXMoZHJvcHBlZEZpbGVzKTtcbiAgICAgICAgJGZvcm0uYWRkQ2xhc3MoJ2lzLXVwbG9hZGluZycpLnJlbW92ZUNsYXNzKCdpcy1lcnJvcicpO1xuXG4gICAgICAgIGlmIChpc0FkdmFuY2VkVXBsb2FkKSB7XG4gICAgICAgICAgICB2YXIgYWpheERhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm0uZ2V0KDApKTtcblxuICAgICAgICAgICAgaWYgKGRyb3BwZWRGaWxlcykge1xuICAgICAgICAgICAgICAgICQuZWFjaChkcm9wcGVkRmlsZXMsIGZ1bmN0aW9uIChpLCBmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFqYXhEYXRhLmFwcGVuZCgkaW5wdXQuYXR0cignbmFtZScpLCBmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgUGx1Z1sna2V5X3BsdWcnXSA9IGZpbGUubmFtZTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coYWpheERhdGEpO1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWxzdG9tL3VwbG9hZEZpbGUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAvKmRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZpbGUnIDogYWpheERhdGEsXG4gICAgICAgICAgICAgICAgICAgICdidWNrZXQnOiAnYXBwbGljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAndXBsb2FkX3JlcXVlc3QnOiBcInVwbG9hZFwiXG4gICAgICAgICAgICAgICAgfSwqL1xuICAgICAgICAgICAgICAgIHhocjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldnQubG9hZGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwZXJjZW50Q29tcGxldGUgPSAoZXZ0LmxvYWRlZCAvIGV2dC50b3RhbCkgKiAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9EbyBzb21ldGhpbmcgd2l0aCB1cGxvYWQgcHJvZ3Jlc3MgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZ2Jhci5zZXQocGVyY2VudENvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVyY2VudENvbXBsZXRlID09IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Rlc3QtcHJvZ3Jlc3NcIikuYWRkQ2xhc3MoJ2lzLWJsaW5rJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2dC5sb2FkZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQudG90YWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geGhyO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBkYXRhOiBhamF4RGF0YSxcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy11cGxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiN0ZXN0LXByb2dyZXNzXCIpLnJlbW92ZUNsYXNzKCdpcy1ibGluaycpO1xuICAgICAgICAgICAgICAgICAgICBMaXN0ZVBsdWcucHVzaChQbHVnKTtcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVQbHVnLmZvckVhY2god3JpdGVQbHVnKTtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoZGF0YS5zdWNjZXNzID09IHRydWUgPyAnaXMtc3VjY2VzcycgOiAnaXMtZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2NvbnRlbnQtbmFtZS1kcmFnLXBsdWcnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coTGlzdGVQbHVnKVxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2cgdGhlIGVycm9yLCBzaG93IGFuIGFsZXJ0LCB3aGF0ZXZlciB3b3JrcyBmb3IgeW91XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29ycnkgYm9ieVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpZnJhbWVOYW1lID0gJ3VwbG9hZGlmcmFtZScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICRpZnJhbWUgPSAkKCc8aWZyYW1lIG5hbWU9XCInICsgaWZyYW1lTmFtZSArICdcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9pZnJhbWU+Jyk7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJGlmcmFtZSk7XG4gICAgICAgICAgICAkZm9ybS5hdHRyKCd0YXJnZXQnLCBpZnJhbWVOYW1lKTtcblxuICAgICAgICAgICAgJGlmcmFtZS5vbmUoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKCRpZnJhbWUuY29udGVudHMoKS5maW5kKCdib2R5JykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAkZm9ybVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLXVwbG9hZGluZycpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSA/ICdpcy1zdWNjZXNzJyA6ICdpcy1lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuc3VjY2VzcykgJGVycm9yTXNnLnRleHQoZGF0YS5lcnJvcik7XG4gICAgICAgICAgICAgICAgJGZvcm0ucmVtb3ZlQXR0cigndGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgJGlmcmFtZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBuYW1lICYgZmlsZSBwbHVnJylcbiAgICB9XG5cblxufSlcblxuJCgnI3Rlc3QtdXBsb2FkJykub24oXCJjbGlja1wiLCBcImJ1dHRvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpbGVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIikuZmlsZXM7XG4gICAgdmFyIHRlbXBEZXN0aW5hdGlvbiA9IFwidGVzdFwiXG4gICAgdmFyIG5hbWVGaWxlID0gXCJpbml0XCJcbiAgICB2YXIgdXBsb2FkU3RhdHVzID0gXCJQRU5ESU5HXCJcbiAgICAvL09uIGRyYWcgZXQgZHJvcFxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogJy9hbHN0b20vcmVxdWVzdEZpbGUnLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICdidWNrZXQnOiAnYXBwbGljYXRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgdGVtcERlc3RpbmF0aW9uID0gcmVzcG9uc2UucGF0aFxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWxzdG9tL3VwbG9hZEZpbGUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICdidWNrZXQnOiAnYXBwbGljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAndXBsb2FkX3JlcXVlc3QnOiBcInVwbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICAnZmlsZW5hbWUnOiBuYW1lRmlsZSxcbiAgICAgICAgICAgICAgICAgICAgJ3RlbXBEZXN0aW5hdGlvbic6IHRlbXBEZXN0aW5hdGlvblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvL2FzayBmb3IgdGhlIHN0YXR1c1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjFcIik7XG4gICAgICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuJCgnI3ZhbGlkLWFsbC1wbHVnJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsIFwiMC40XCIpO1xuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XG4gICAgbGV0IGlkQmFzZWxpbmUgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9mbHVzaC1wbHVnJyxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAnaWRCYXNlbGluZSc6IGlkQmFzZWxpbmUsXG4gICAgICAgICAgICAnUGx1Z3MnOiBMaXN0ZVBsdWdcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvL2FzayBmb3IgdGhlIHN0YXR1c1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuJCgnI2NvbnRlbnQtdHItcGx1ZycpLm9uKCdjbGljaycsICcudGQtdGFibGUgPiAudGQtcGx1ZycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjAuNFwiKTtcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xuXG4gICAgbGV0IGtleSA9ICQodGhpcylbMF1bXCJpZFwiXTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICcvYWxzdG9tL2Rvbndsb2FkRmlsZScsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgJ2tleSc6IGtleVxuICAgICAgICB9LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgXCIxXCIpO1xuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuJCgnI3ByZXZpb3VzLXBsdWcnKS5vbignY2xpY2snLCAnLmNvbnRlbnQta2V5LW5hbWUtcGx1ZyA+IGEnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICBsZXQgaWRQbHVnID0gZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdLmF0dHIoJ2NsYXNzJykpO1xuXG4gICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsIFwiMC40XCIpO1xuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9kZWxldGUtcGx1Zy8nICsgaWRQbHVnLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAkKCcjJyArIGlkUGx1ZykucmVtb3ZlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9KVxufSlcbiQoJyNjYW5jZWwtYWxsLXBsdWcnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCgnLm5ldy1wbHVnJykucmVtb3ZlKCk7XG4gICAgTGlzdGVQbHVnID0gXCJcIjtcbn0pXG5cbi8vR8OpcmUgbGUgY2xpcXVlIGRlIGxhIHN1cHByZXNzaW9uXG4kKCcjc2hvdy1kb25lLXBsdWcnKS5vbignY2xpY2snLCAnLmNvbnRlbnQta2V5LW5hbWUtcGx1ZyA+IGEnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcylbMF1bXCJpZFwiXVswXSA9PSBcImRcIikge1xuICAgICAgICBkZWxldGVQbHVnKGV4dHJhaXROb21icmUoJCh0aGlzKVswXVtcImlkXCJdKSk7XG4gICAgfVxufSk7XG4vL0V4dHJhaXQgbGUgbm9tYnJlIGQndW5lIHN0cmVpbmdcbmZ1bmN0aW9uIGV4dHJhaXROb21icmUoc3RyKSB7XG4gICAgcmV0dXJuIE51bWJlcihzdHIucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpKVxufVxuLy9TdXByZXNzaW9uIGR1IHBsdWcgZGFucyBsZSB0YWJsZWF1IGV0IGxlIGZyb250XG5mdW5jdGlvbiBkZWxldGVQbHVnKHBvc2l0aW9uKSB7XG4gICAgTGlzdGVQbHVnLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgJCgnLmNvbnRlbnQta2V5LW5hbWUtcGx1ZycpLnJlbW92ZSgpO1xuICAgIExpc3RlUGx1Zy5mb3JFYWNoKHdyaXRlUGx1Zyk7XG59XG5cbmZ1bmN0aW9uIHdyaXRlUGx1ZyhlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcbiAgICAvL1Rlc3QgbCdleGlzdGVuY2UgZGUgbGEgZGl2IGRhbnMgbGUgY2FzIG/DuSBlbGxlIGV4aXN0ZSBsYSByZW1wbGFjZSBzaSBwYXMgbGEgbWV0IGVuIHBsYWNlXG4gICAgaWYgKCQoJyNrZXktbmFtZS0nICsgaW5kZXgpLmxlbmd0aCkge1xuICAgICAgICAkKCcja2V5LW5hbWUtJyArIGluZGV4KS5yZXBsYWNlV2l0aChcIjxzcGFuIGNsYXNzPSdjb250ZW50LWtleS1uYW1lLXBsdWcgbmV3LXBsdWcnIGlkPSdrZXktbmFtZS1cIiArIGluZGV4ICsgXCInPjxwPlwiICsgZWxlbWVudC5uYW1lX3BsdWcgKyBcIjwvcD48cD5cIiArIGVsZW1lbnQua2V5X3BsdWcgKyBcIjwvcD48YSBpZD0nZGVsZXRlLXBsdWctXCIgKyBpbmRleCArIFwiJz48aSBjbGFzcz0nZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZSc+PC9pPjwvYT48L3NwYW4+XCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI3Nob3ctZG9uZS1wbHVnJykuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J2NvbnRlbnQta2V5LW5hbWUtcGx1ZyBuZXctcGx1ZycgaWQ9J2tleS1uYW1lLVwiICsgaW5kZXggKyBcIic+PHA+XCIgKyBlbGVtZW50Lm5hbWVfcGx1ZyArIFwiPC9wPjxwPlwiICsgZWxlbWVudC5rZXlfcGx1ZyArIFwiPC9wPjxhIGlkPSdkZWxldGUtcGx1Zy1cIiArIGluZGV4ICsgXCInPjxpIGNsYXNzPSdmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlJz48L2k+PC9hPjwvc3Bhbj5cIik7XG4gICAgfVxuXG59IiwiLy8gVmlkYWdlIGRlcyBpbnB1dHMgYXV4IGNoYW5nZW1lbnQgZGUgc2VsZWN0XHJcbi8vICQoJ3NlbGVjdFtuYW1lPVwidHJhaW5zW3Byb2plY3RzXVwiXSwgc2VsZWN0W25hbWU9XCJ0cmFpbnNbdHJhaW5UeXBlXVwiXScpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAkKCdpbnB1dFtuYW1lPVwidHJhaW5zW25hbWVdXCJdJykudmFsKCcnKTtcclxuLy8gfSk7XHJcblxyXG4vKk1hc3F1YWdlIGRlIGNlcnRhaW5zIMOpbGVtZW50ICovXHJcbiQoJyNjcmVhdGUtZXJ0bXMtMScpLmhpZGUoKTtcclxuJCgnI2NyZWF0ZS1lcnRtcy0yJykuaGlkZSgpO1xyXG4kKFwiI2NyZWF0ZS1lcnRtcy10cmFpbi0xXCIpLmhpZGUoKTtcclxuJCgnI2NyZWF0ZV9zb3VzdHlwZScpLmhpZGUoKTtcclxuJCgnI2NyZWF0ZV90eXBlJykuaGlkZSgpO1xyXG4kKCcjbW9kYWwtYm9keScpLmhpZGUoKTtcclxuJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiQoJyNjbG9zZS1tb2RhbC1mb3JtLWJhc2VsaW5lLXRyYWluJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbn0pXHJcbmZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLScgKyBpKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG59XHJcbmxldCBpZEVxdWlwbWVudCA9IFwiXCIsXHJcbiAgICBpbmRleEVWQztcclxubGV0IG5ld19lcXVpcG1lbnRfbnVtID0gXCJcIixcclxuICAgIHRvdGFsRXF1aXB0ID0gXCJcIixcclxuICAgIG5ld19lcXVpcG1lbnRfbnVtX3NlcmllID0gW107XHJcbnZhciBzZWFyY2hSZXF1ZXN0ID0gbnVsbDtcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI3NlYXJjaC10cmFpbicpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pXHJcbiAgICAkKCcjdHJhaW5zX3NlYXJjaF9uYW1lX3RyYWluJykua2V5dXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHNlYXJjaCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSAnbW90Y2xlZj0nICsgc2VhcmNoO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhzZWFyY2gpO1xyXG5cclxuICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKHNlYXJjaFJlcXVlc3QgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHNlYXJjaFJlcXVlc3QuYWJvcnQoKTtcclxuICAgICAgICAgICAgc2VhcmNoUmVxdWVzdCA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWxzdG9tL3NlYXJjaC10cmFpbicsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgLy8gYXN5bmM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaCA9PSAkKHRoYXQpLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5lbGVtZW50LXJlc3VsdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFiTmFtZSA9IEpTT04ucGFyc2UocmVzcG9uc2UucHJvamVjdHNGb3VuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhYk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFiTmFtZS5sZW5ndGggPT0gMCB8fCAhc2VhcmNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuZWxlbWVudC1yZXN1bHQnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZXN1bHQtdHJhaW4nKS5hcHBlbmQoJzxwIGNsYXNzPVwiZWxlbWVudC1yZXN1bHRcIj5SZXN1bHRzIE5vdCBGb3VuZDwvcD4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJOYW1lLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3Jlc3VsdC10cmFpbicpLmFwcGVuZCgnPGEgaHJlZj1cIi9hbHN0b20vdHJhaW5zLycgKyBlbGVtZW50Lm5hbWUgKyAnXCI+PHAgY2xhc3M9XCJlbGVtZW50LXJlc3VsdFwiPicgKyBlbGVtZW50Lm5hbWUgKyAnPC9wPjwvYT4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5lbGVtZW50LXJlc3VsdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSlcclxuICAgIGxldCBub21icmVfdXJsID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2Fsc3RvbS9JbnN0YW5jZUJhc2VsaW5lLycgKyBub21icmVfdXJsKSB7XHJcblxyXG4gICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tCYXNlbGluZVwiLCApLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VsZWN0X2Jhc2VsaW5lXzEnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgICQoJyNzZWxlY3RfYmFzZWxpbmVfMicpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgJCgnI3NlbGVjdF9iYXNlbGluZV8xJykudmFsKCcnKTtcclxuICAgICAgICAgICAgJCgnI3NlbGVjdF9iYXNlbGluZV8yJykudmFsKCcnKTtcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgICQoJyNjbG9zZS1tb2RhbC1iYXNlbGluZVRvVHJhaW4nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnLmRlc2NyaXB0aW9uJykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAgICAgbmV3X2VxdWlwbWVudF9udW0gPSBcIlwiO1xyXG4gICAgfSlcclxuICAgICQoJyNjbG9zZS1lcXVpcGVtZW50LWJhc2VsaW5lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJy5kZXNjcmlwdGlvbicpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4gICAgICAgIG5ld19lcXVpcG1lbnRfbnVtID0gXCJcIjtcclxuICAgICAgICB0b3RhbEVxdWlwdCA9IFwiXCI7XHJcbiAgICB9KVxyXG59KVxyXG5cclxuJCgnI3NlbGVjdF90cmFpbicpLnNob3coKTtcclxuJCgnI3NlbGVjdF9sb2NvbW90aXZlJykuc2hvdygpO1xyXG5cclxubGV0IGN1cnJlbnRfY2hvaWNlID0gXCJcIixcclxuICAgIGVydG1zX2xlZnQgPSBmYWxzZSxcclxuICAgIGVydG1zX21pZGRsZSA9IGZhbHNlLFxyXG4gICAgZXJ0bXNfcmlnaHQgPSBmYWxzZTtcclxuXHJcbiQoJyNjbG9zZS1tb2RhbC1iYXNlbGluZS0xJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGVydG1zX3JpZ2h0ID09IHRydWUpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5hZGRDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgIH1cclxuICAgIGVydG1zX2xlZnQgPSBmYWxzZTtcclxufSlcclxuJCgnI2Nsb3NlLW1vZGFsLWJhc2VsaW5lLTInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5oaWRlKCk7XHJcbiAgICBlcnRtc19yaWdodCA9IGZhbHNlO1xyXG59KVxyXG4kKCcjZXJ0bXMtdHJhaW4tMScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGVydG1zX2xlZnQgPSB0cnVlO1xyXG4gICAgZXJ0bXNfbWlkZGxlID0gZmFsc2U7XHJcbiAgICAvL2wnZXJ0bXMgZGUgZ2F1Y2hlIHNlbGVjdGlvbm5lclxyXG4gICAgJCgnI2VydG1zLXRyYWluLTEnKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLXRyYWluLTInKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2xhYmVsLWJhc2VsaW5lLTEnKS50ZXh0KCdCYXNlbGluZSBsZWZ0Jyk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTMnKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnNob3coKTtcclxuICAgIGlmIChlcnRtc19yaWdodCA9PSBmYWxzZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmhpZGUoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgIH1cclxuXHJcblxyXG59KTtcclxuJCgnI2VydG1zLXRyYWluLTInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBsJ2VydG1zIGR1IG1pbGlldSBzZWxlY3Rpb25uZXJcclxuICAgIGVydG1zX2xlZnQgPSBmYWxzZTtcclxuICAgIGVydG1zX3JpZ2h0ID0gZmFsc2U7XHJcbiAgICBlcnRtc19taWRkbGUgPSB0cnVlO1xyXG4gICAgJCgnI2VydG1zLXRyYWluLTInKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLXRyYWluLTEnKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLXRyYWluLTMnKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2xhYmVsLWJhc2VsaW5lLTEnKS50ZXh0KCdCYXNlbGluZSBtaWRsZScpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuaGlkZSgpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuc2hvdygpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuYWRkQ2xhc3MoJ29mZnNldC1tZC0zJyk7XHJcblxyXG59KTtcclxuJCgnI2VydG1zLXRyYWluLTMnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBsJ2VydG1zIGRlIGRyb2l0ZSBzZWxlY3Rpb25uZXJcclxuICAgICQoJyNlcnRtcy10cmFpbi0zJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgIGVydG1zX3JpZ2h0ID0gdHJ1ZTtcclxuICAgIGVydG1zX21pZGRsZSA9IGZhbHNlO1xyXG4gICAgJCgnI2xhYmVsLWJhc2VsaW5lLTInKS50ZXh0KCdCYXNlbGluZSByaWdodCcpO1xyXG4gICAgaWYgKGVydG1zX2xlZnQgPT0gdHJ1ZSAmJiBlcnRtc19taWRkbGUgPT0gZmFsc2UpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTMnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5zaG93KCk7XHJcbiAgICB9IGVsc2UgaWYgKGVydG1zX3JpZ2h0ID09IHRydWUgJiYgZXJ0bXNfbGVmdCA9PSBmYWxzZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtMycpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5hZGRDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnI2VydG1zLXRyYWluLTInKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG59KTtcclxuXHJcblxyXG4kKCcjZXJ0bXMtbG9jby0xJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZXJ0bXNfbGVmdCA9IHRydWU7XHJcbiAgICBpZiAoZXJ0bXNfcmlnaHQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgJCgnI2xhYmVsLWJhc2VsaW5lLTEnKS50ZXh0KCdCYXNlbGluZSBsZWZ0Jyk7XHJcbiAgICAkKCcjZXJ0bXMtbG9jby0xJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy1sb2NvLTInKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0xJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICQoJyNidG4tYmFzZWxpbmUtMycpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbn0pO1xyXG4kKCcjZXJ0bXMtbG9jby0yJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZXJ0bXNfcmlnaHQgPSB0cnVlO1xyXG4gICAgJCgnI2xhYmVsLWJhc2VsaW5lLTInKS50ZXh0KCdCYXNlbGluZSByaWdodCcpO1xyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0zJykuY3NzKCdvcGFjaXR5JywgJzEnKVxyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0xJykuY3NzKCdvcGFjaXR5JywgJzAnKVxyXG4gICAgJCgnI2VydG1zLWxvY28tMicpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtbG9jby0xJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgIGlmIChlcnRtc19sZWZ0ID09IHRydWUpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuXHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5hZGRDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5zaG93KCk7XHJcblxyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG4vL1JlY3VwZXJlIGxlIHNlbGVjdCBkZSBsYSBiYXNlbGluZSBldCBsZSBtZXQgZW4gdmlzdWVsXHJcbiQoJyNhZGQtYmFzZWxpbmUtMScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIGlmIChlcnRtc19taWRkbGUpIHtcclxuICAgICAgICAkKCcjZXJ0bXMtdHJhaW4tMycpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgJCgnI2VydG1zLXRyYWluLTEnKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgfSBlbHNlIGlmIChlcnRtc19sZWZ0KSB7XHJcbiAgICAgICAgJCgnI2VydG1zLXRyYWluLTInKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgfVxyXG4gICAgLy8gJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgbGV0IGlkQmFzZWxpbmUgPSAkKCcjc2VsZWN0X2Jhc2VsaW5lXzEgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcbiAgICAkKCcjdGl0bGVfYmFzZWxpbmVfbW9kYWwnKS5odG1sKCQoJyNzZWxlY3RfYmFzZWxpbmVfMSBvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCkpO1xyXG4gICAgLy8gJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vQ2hlY2tFcXVpcGVtZW50cy8nICsgaWRCYXNlbGluZSxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsICcwLjQnKTtcclxuICAgICAgICAgICAgbGV0IEVxdWlwbWVudHMgPSBKU09OLnBhcnNlKHJlc3BvbnNlLmVxdWlwbWVudHMpO1xyXG5cclxuICAgICAgICAgICAgRXF1aXBtZW50cy5mb3JFYWNoKENvdW50TnVtYmVyRXF1aXB0KTtcclxuICAgICAgICAgICAgRXF1aXBtZW50cy5mb3JFYWNoKEZpbmRJbmRleEV2Yyk7XHJcbiAgICAgICAgICAgIEVxdWlwbWVudHMuZm9yRWFjaChyZXR1cm5JbmRleEVsZW1lbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG4kKCcjYWRkLWJhc2VsaW5lLTInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnI2VydG1zLXRyYWluLTInKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG5cclxuICAgIC8vICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgIGxldCBuYW1lX2Jhc2VsaW5lXzEgPSAkKCcjc2VsZWN0X2Jhc2VsaW5lXzIgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcbiAgICBjb25zb2xlLmxvZyhuYW1lX2Jhc2VsaW5lXzEpXHJcbiAgICAvLyAkKCcjY29udGVudC1uYW1lLWJhc2VsaW5lLTEnKS5hcHBlbmQoXCI8aDU+XCIgKyBuYW1lX2Jhc2VsaW5lXzEgKyBcIjwvaDU+XCIpXHJcblxyXG59KVxyXG5cclxuLy8gUmVxdWV0ZSBBSkFYIHBvdXIgcmVtcGxpciBsZSBmb3JtdWxhaXJlIGQnw6lxdWlwZW1lbnQgYXZlYyBsJ2VxdWlwZW1lbnQgc2VsZWN0aW9ubmVyXHJcbiQoJyNzaG93LWVxdWlwbWVudCAnKS5vbignY2xpY2snLCAnLmRlc2NyaXB0aW9uID4gLmNvbnRlbnQtZGVzY3JpcHRpb24tZHRyID4gYnV0dG9uJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgaWRFcXVpcG1lbnQgPSBleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJpZFwiXSlcclxuICAgIHZhciAkdGhpcyA9ICQoXCIjZm9ybV9lcXVpcGVtZW50X2VkaXRfYmFzZWxpbmVcIik7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC1iYXNlbGluZS8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKHJlc3BvbnNlW1widHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgZGF0YVskKCcjZXF1aXBlbWVudF9UeXBlJykuYXR0cignbmFtZScpXSA9ICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpIGlucHV0IGF2ZWMgdmFsZXVyIHJlY3UgZGUgbCdlcXVpcGVtZW50XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X1R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfc291c190eXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVtcIlNvdXNUeXBlXCJdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJTb3VzVHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0RUUl9ib2FyZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJkVFJCb2FyZFwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0luZGljZV9EVFInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiaW5kaWNlRFRSXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfTnVtX3NlcmllJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIm51bVNlcmllXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4vL1JlbXBsaXIgbGVzIGlucHV0cyBhdmVjIGxlcyBub3V2ZWxsZXMgdmFsZXVyc1xyXG4kKCcjc291bWlzc2lvbi1lcXVpcGVtZW50LWVkaXQtYmFzZWxpbmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJyksXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG59KVxyXG5cclxuXHJcbi8vIFNvdW1pc3Npb24gZm9ybXVsYWlyZSBkZSB0cmFpblxyXG4kKCcjZm9ybV9lcXVpcGVtZW50X2VkaXRfYmFzZWxpbmUnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJyksXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuXHJcbiAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfSlcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQtYmFzZWxpbmUvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZXF1aXBlbWVudDogZGF0YVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJyNidG4tYWRkLW51bWJlci1zZXJpZScgKyBpZEVxdWlwbWVudCkucmVwbGFjZVdpdGgoXCI8cD5cIiArIHJlc3BvbnNlLm51bVNlcmllICsgXCI8L3A+XCIpXHJcbiAgICAgICAgICAgIG5ld19lcXVpcG1lbnRfbnVtX3NlcmllLnB1c2gocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBuZXdfZXF1aXBtZW50X251bSsrO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld19lcXVpcG1lbnRfbnVtKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG4vL1ZhbGlkZXIgbCdpbnN0YW5jZSBkZXMgZXF1aXBlbWVudHNcclxuJCgnI3ZhbGlkLWJhc2VsaW5lLXRyYWluJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2cobmV3X2VxdWlwbWVudF9udW0pO1xyXG4gICAgY29uc29sZS5sb2codG90YWxFcXVpcHQpO1xyXG5cclxuICAgIGlmIChuZXdfZXF1aXBtZW50X251bSAhPSB0b3RhbEVxdWlwdCkge1xyXG4gICAgICAgIGFsZXJ0KCdwbGVhc2UgZW50ZXIgbnVtIHNlcmllIGJlZm9yZSBpbnN0YW5jZSBiYXNlbGluZScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBldGNzSWQgPSAkKCcjZXRjc2lkLW5hbWUnKS52YWwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhldGNzSWQpO1xyXG4gICAgICAgIGxldCBpZF90cmFpbiA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICBsZXQgaWRfYmFzZWxpbmUgPSAkKCcjc2VsZWN0X2Jhc2VsaW5lXzEgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS9hZGRCYXNlbGluZUluc3RhbmNpZXInLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkX3RyYWluOiBpZF90cmFpbixcclxuICAgICAgICAgICAgICAgIGJhc2VsaW5lOiBpZF9iYXNlbGluZSxcclxuICAgICAgICAgICAgICAgIG5ld19lcXVpcHQ6IG5ld19lcXVpcG1lbnRfbnVtX3NlcmllLFxyXG4gICAgICAgICAgICAgICAgZXRjc0lkOiBldGNzSWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYWxzdG9tL2Jhc2VsaW5lLXRyYWluL1wiICsgcmVzcG9uc2UuaWRiYXNlbGluZTtcclxuICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pXHJcbi8vIFJlcXVldGUgQUpBWCBwb3VyIHJlbXBsaXIgbGUgZm9ybXVsYWlyZSBkJ8OpcXVpcGVtZW50IGF2ZWMgbCdlcXVpcGVtZW50IHNlbGVjdGlvbm5lciBpbnN0YW5jaWVyXHJcbiQoJy5jYXJkJykub24oJ2NsaWNrJywgJy5lZGl0LWRlbGV0ZS1lcXVpcGVtZW50ID4gYScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICBpZEVxdWlwbWVudCA9IGV4dHJhaXROb21icmUoJCh0aGlzKVswXVtcImNsYXNzTGlzdFwiXVswXSlcclxuICAgIHZhciAkdGhpcyA9ICQoXCIjZm9ybV9lcXVpcGVtZW50X2VkaXRfaW5zdGFuY2VcIik7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC1pbnN0YW5jZS8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwocmVzcG9uc2VbXCJ0eXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICBkYXRhWyQoJyNlcXVpcGVtZW50X1R5cGUnKS5hdHRyKCduYW1lJyldID0gJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGkgaW5wdXQgYXZlYyB2YWxldXIgcmVjdSBkZSBsJ2VxdWlwZW1lbnRcclxuICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfVHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9zb3VzX3R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW1wiU291c1R5cGVcIl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIlNvdXNUeXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfRFRSX2JvYXJkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImRUUkJvYXJkXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfSW5kaWNlX0RUUic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJpbmRpY2VEVFJcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9OdW1fc2VyaWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wibnVtU2VyaWVcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbi8vRm9ybXVsYWlyZSBkJ2VkaXQgZGUgbCfDqXF1aXBlbWVudFxyXG4kKCcjZm9ybV9lcXVpcGVtZW50X2VkaXRfaW5zdGFuY2UnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjZm9ybV9lcXVpcGVtZW50X2VkaXQnKS5jc3MoXCJvcGFjaXR5XCIsIFwiMC40XCIpO1xyXG5cclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fSxcclxuICAgICAgICBhY3Rpb247XHJcbiAgICAvL1JlbXBsaSBkYXRhIGEgcGFydGlyIGRlcyB2YWxldXIgZGVzIGlucHV0c1xyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJylcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgIT0gKFwiZXF1aXBlbWVudFtfdG9rZW5dXCIpICYmIG5hbWUgIT0gKFwic291bWlzc2lvbl9lcXVpcGVtZW50XCIpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQtaW5zdGFuY2UvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICdlcXVpcGVtZW50JzogZGF0YSxcclxuICAgICAgICAgICAgXCJzb3VtaXNzaW9uX2VkaXRfZXF1aXBlbWVudFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAnaWRlcXVpcG1lbnQnOiBpZEVxdWlwbWVudFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuXHJcbmZ1bmN0aW9uIEZpbmRJbmRleEV2YyhlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuICAgIGluZGV4ID0gZWxlbWVudFsnaWQnXTtcclxuICAgIGlmIChlbGVtZW50Wyd0eXBlJ11bJ2lkJ10gPT0gXCIxXCIgJiYgKGVsZW1lbnRbJ1N0YXR1cyddID09IHRydWUpKSB7XHJcblxyXG4gICAgICAgICQoXCIjc2hvdy1lcXVpcG1lbnRcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlVHlwZSg0LCBlbGVtZW50Wyd0eXBlJ11bJ25hbWUnXSkpO1xyXG4gICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYWRkQ2xhc3MoXCJkZXNjcmlwdGlvbi1TdWJ0eXBlQ2FyZFwiKVxyXG4gICAgICAgIGlmIChlbGVtZW50WydTb3VzVHlwZSddICE9IG51bGwpIHtcclxuICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIGVsZW1lbnRbJ1NvdXNUeXBlJ11bJ25hbWUnXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNvbnRlbnQtZGVzY3JpcHRpb24tZHRyXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJkVFJCb2FyZFwiXSArICc8L3A+JylcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJpbmRpY2VEVFJcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgaWYgKGVsZW1lbnRbJ251bVNlcmllJ10gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgc3R5bGU9XCJwYWRkaW5nOiAycHhcIiBpZCA9IFwiYnRuLWFkZC1udW1iZXItc2VyaWUnICsgZWxlbWVudFsnaWQnXSArICdcIiA+IEFkZCBudW1iZXIgb2Ygc2VyaWUgPC9idXR0b24+JylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbJ251bVNlcmllJ10gKyAnPC9wPicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZGV4RVZDID0gJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmV0dXJuSW5kZXhFbGVtZW50KGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG5cclxuXHJcbiAgICBpbmRleCA9IGVsZW1lbnRbJ2lkJ107XHJcblxyXG4gICAgaWYgKChlbGVtZW50WydTdGF0dXMnXSA9PSB0cnVlKSAmJiBlbGVtZW50Wyd0eXBlJ11bJ2lkJ10gIT0gXCIxXCIpIHtcclxuXHJcbiAgICAgICAgLy9UZXN0IGwnZXhpc3RlbmNlIGRlIGxhIGRpdiBkYW5zIGxlIGNhcyBvw7kgZWxsZSBleGlzdGUgbGEgcmVtcGxhY2Ugc2kgcGFzIGxhIG1ldCBlbiBwbGFjZVxyXG4gICAgICAgIGlmICgkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlcGxhY2VXaXRoKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNzaG93LWVxdWlwbWVudFwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3Rlc3Qgc2kgbCfDqXF1aXBlbWVudCBlc3QgbGEgY2FydGUgb3Ugbm9uXHJcbiAgICAgICAgaWYgKGVsZW1lbnRbJ3R5cGUnXVsnaWQnXSAhPSBcIjJcIikge1xyXG5cclxuICAgICAgICAgICAgLy9Td2l0aCByZXBsYWNlbWVudCBkZSBsJ2lkIGR1IHR5cGUgYXZlYyBzb24gbm9tXHJcbiAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlVHlwZSg0LCBlbGVtZW50Wyd0eXBlJ11bJ25hbWUnXSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRbJ1NvdXNUeXBlJ10gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIGVsZW1lbnRbJ1NvdXNUeXBlJ11bJ25hbWUnXSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNvbnRlbnQtZGVzY3JpcHRpb24tZHRyXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImRUUkJvYXJkXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJpbmRpY2VEVFJcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50WydudW1TZXJpZSddID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBzdHlsZT1cInBhZGRpbmc6IDJweFwiIGlkID0gXCJidG4tYWRkLW51bWJlci1zZXJpZScgKyBlbGVtZW50WydpZCddICsgJ1wiID4gQWRkIG51bWJlciBvZiBzZXJpZSA8L2J1dHRvbj4nKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50WydudW1TZXJpZSddICsgJzwvcD4gPGEgaWQ9XCJlZGl0LScgKyBpbmRleCArICdcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiA8L2E+IDxhIGlkPVwiZGVsZXRlLScgKyBpbmRleCArICdcIj48aSBjbGFzcyA9IFwiZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZVwiPiA8L2k+PC9hPicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVFZGl0RGVsZXRlKGluZGV4KSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAvL0VjcmlzIGxlIG5vbSBkdSB0eXBlIFwiY2FydGVcIiBzb3VzIGxlIHR5cGUgIEVWQ1xyXG4gICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVUeXBlKDUsIGVsZW1lbnRbJ1NvdXNUeXBlJ11bJ25hbWUnXSkpO1xyXG4gICAgICAgICAgICAvL1BhcmNvdXMgbGUgdHlwZSBkZSBzb3VzdHlwZSBcclxuICAgICAgICAgICAgLy8gJChpbmRleEVWQykuYXBwZW5kKHdyaXRlU3VidHlwZSg2LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuXHJcbiAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNvbnRlbnQtZGVzY3JpcHRpb24tZHRyIGNvbnRlbnQtZGVzY3JpcHRpb24tZHRyQ2FyZFwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgICAgIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJkVFJCb2FyZFwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiaW5kaWNlRFRSXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFsnbnVtU2VyaWUnXSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgc3R5bGU9XCJwYWRkaW5nOiAycHhcIiBpZCA9IFwiYnRuLWFkZC1udW1iZXItc2VyaWUnICsgZWxlbWVudFsnaWQnXSArICdcIiA+IEFkZCBudW1iZXIgb2Ygc2VyaWUgPC9idXR0b24+JylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFsnbnVtU2VyaWUnXSArICc8L3A+IDxhIGlkPVwiZWRpdC0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gPC9hPiA8YSBpZD1cImRlbGV0ZS0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3MgPSBcImZhcyBmYS10cmFzaC1hbHQgcG91YmVsbGVcIj4gPC9pPjwvYT4nKVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVFZGl0RGVsZXRlKGluZGV4KSk7XHJcbiAgICAgICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBDb3VudE51bWJlckVxdWlwdChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuICAgIHRvdGFsRXF1aXB0Kys7XHJcbn1cclxuLy9FeHRyYWl0IGxlIG5vbWJyZSBkJ3VuZSBzdHJlaW5nXHJcbmZ1bmN0aW9uIGV4dHJhaXROb21icmUoc3RyKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyKHN0ci5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIikpXHJcbn1cclxuLy9FY3JpcyBsZSB0aXRyZSBkdSB0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVUeXBlKHNpemUsIG5hbWUpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1UeXBlIFwiIGlkPVwiZGVzY3JpcHRpb24tdHlwZSBcIj4nICsgbmFtZSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpcyBsZSB0aXRyZSBkdSBzb3VzdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlU3VidHlwZShzaXplLCBuYW1lKSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXN1YlR5cGUgXCI+JyArIG5hbWUgKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgc291c3R5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVN1YnR5cGVDYXJkKHNpemUsIG5hbWUpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1zdWJ0eXBlXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyBuYW1lICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vLyAvL0Vjcml0IGxlcyAyIGljb25zIGQnZWRpdCBldCBkZWxldGVcclxuLy8gZnVuY3Rpb24gd3JpdGVFZGl0RGVsZXRlKGluZGV4KSB7XHJcbi8vICAgICByZXR1cm4gJyA8cCBjbGFzcz1cImVkaXQtZGVsZXRlLWVxdWlwZW1lbnRcIj4gPGEgaWQ9XCJlZGl0LScgKyBpbmRleCArICdcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiA8L2E+PC9wPic7XHJcbi8vIH07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==