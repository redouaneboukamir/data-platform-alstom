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
    $('main').addClass('ml-sm-auto');
    $('main').addClass('col-lg-10');
    $('main').addClass('col-md-9');
  }, function () {
    $('main').removeClass('col-lg-10');
    $('main').removeClass('col-md-9');
    $('main').css('transition', 'all 0.6s ease-in-out');
    $('main').addClass('pl-5');
    $('main').addClass('col-lg-12');
    $('main').addClass('col-md-12');
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
      $('#title-version').append("<p>" + response.version + "</p>");
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
    valid = false; // Declaration d'évenement avant chargement de l apage

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
}; //identification de la progress bar


prgbar = new ldBar("#test-progress"); //ajouter un plug

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
  $('.main-baseline').css('opacity', "0.4");
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
$('#see').on('click', function (e) {
  e.preventDefault();
  $.ajax({
    url: '/alstom/seeFile',
    type: 'POST',
    data: {},
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      //ask for the status
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9iYXNlbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXF1aXBlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXJ0bXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvbG9hZGluZy1iYXIubHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvcHJlc2V0cy5scyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGVzdC11cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RyYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiaG92ZXIiLCJmaW5kIiwic3RvcCIsImFuaW1hdGUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiaGlkZSIsImxhYmVsQ2xpa2VkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInJlbW92ZSIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNzcyIsImFkZENsYXNzIiwiJHR5cGUiLCJhdHRyIiwiRXF1aXBtZW50cyIsImkiLCJpbmRleEVWQyIsInBvc0luZGV4IiwiUHJlc2VuY2VFVkMiLCJpZEVxdWlwbWVudCIsInRhYkluZGV4RXF1aXB0Iiwic2VsZWN0IiwiY3JlYXRlRWxlbWVudCIsInByZXZpb3VzIiwidGFiRXF1aXBlbWVudFR5cGUiLCJ0YWJFcXVpcGVtZW50U3VidHlwZSIsImRhdGEiLCJ2YWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2hvdyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJlbXB0eSIsImZvckVhY2giLCJlbGVtZW50IiwiYXBwZW5kIiwiT3B0aW9uIiwibmFtZSIsImlkIiwiY2hhbmdlIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGhpcyIsImFjdGlvbiIsImVhY2giLCJpbmRleCIsInZhbHVlIiwidGhhdCIsInB1c2giLCJhamF4IiwidXJsIiwidHlwZSIsInRhYkVxdWlwdHMiLCJhc3luYyIsImRhdGFUeXBlIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInhociIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImlkRXJ0bXMiLCJleHRyYWl0Tm9tYnJlIiwiZXF1aXBlbWVudCIsInJldHVybkluZGV4RWxlbWVudCIsImFsZXJ0IiwiYmFzZWxpbmVOYW1lIiwiYmFzZWxpbmUiLCJ0ZXh0IiwiaWRCYXNlbGluZSIsImhyZWYiLCJkZWxldGVFcXVpcG1lbnQiLCJkb25lIiwicmVsb2FkIiwidmVyc2lvbiIsInRyaWdnZXIiLCJhcnJheSIsImxlbmd0aCIsInJlcGxhY2VXaXRoIiwid3JpdGVUeXBlIiwid3JpdGVTdWJ0eXBlIiwid3JpdGVFZGl0RGVsZXRlIiwic3BsaWNlIiwicG9zaXRpb24iLCJzdHIiLCJOdW1iZXIiLCJyZXBsYWNlIiwic2l6ZSIsIndyaXRlU3VidHlwZUNhcmQiLCJub3QiLCIkZm9ybSIsIkxpc3RlUGx1ZyIsInZhbGlkIiwiaXNBZHZhbmNlZFVwbG9hZCIsImRpdiIsIiRpbnB1dCIsIiRsYWJlbCIsInNob3dGaWxlcyIsImZpbGVzIiwicHJnYmFyIiwibGRCYXIiLCJkcm9wcGVkRmlsZXMiLCJodG1sIiwic3RvcFByb3BhZ2F0aW9uIiwib3JpZ2luYWxFdmVudCIsImRhdGFUcmFuc2ZlciIsIlBsdWciLCJoYXNDbGFzcyIsImFqYXhEYXRhIiwiRm9ybURhdGEiLCJnZXQiLCJmaWxlIiwiWE1MSHR0cFJlcXVlc3QiLCJ1cGxvYWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwibG9hZGVkIiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnRDb21wbGV0ZSIsInRvdGFsIiwic2V0IiwiY2FjaGUiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwiY29tcGxldGUiLCJ3cml0ZVBsdWciLCJpZnJhbWVOYW1lIiwiRGF0ZSIsImdldFRpbWUiLCIkaWZyYW1lIiwib25lIiwiSlNPTiIsInBhcnNlIiwiY29udGVudHMiLCJyZW1vdmVBdHRyIiwiJGVycm9yTXNnIiwiZmlsZXN0IiwicXVlcnlTZWxlY3RvciIsInRlbXBEZXN0aW5hdGlvbiIsIm5hbWVGaWxlIiwidXBsb2FkU3RhdHVzIiwicGF0aCIsImRlbGV0ZVBsdWciLCJuYW1lX3BsdWciLCJrZXlfcGx1ZyIsIm5vbWJyZV91cmwiLCJjdXJyZW50X2Nob2ljZSIsImVydG1zX2xlZnQiLCJlcnRtc19taWRkbGUiLCJlcnRtc19yaWdodCIsImVxdWlwbWVudHMiLCJDb3VudE51bWJlckVxdWlwdCIsIkZpbmRJbmRleEV2YyIsIm5hbWVfYmFzZWxpbmVfMSIsIm5ld19lcXVpcG1lbnRfbnVtIiwidG90YWxFcXVpcHQiLCJuZXdfZXF1aXBtZW50X251bV9zZXJpZSIsIm51bVNlcmllIiwiaWRfdHJhaW4iLCJpZF9iYXNlbGluZSIsIm5ld19lcXVpcHQiLCJpZGJhc2VsaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCLEMsQ0FFQTtBQUNBOzs7QUFDQUQsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkUsS0FBbEIsQ0FBd0IsWUFBWTtBQUNoQ0YsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxJQUFSLENBQWEs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Q0FrQkg7OztBQUNBdkQsT0FBQyxDQUFDLDZCQUE2QnVELEtBQTlCLENBQUQsQ0FBc0MzQyxNQUF0QztBQUNIO0FBQ0o7QUFDSjs7QUFFRCxTQUFTc0osaUJBQVQsQ0FBMkJ2SCxPQUEzQixFQUFvQ1ksS0FBcEMsRUFBMkNnQyxLQUEzQyxFQUFrRDtBQUM5QytFLGFBQVc7QUFDZCxDLENBQ0Q7OztBQUNBLFNBQVM3RixhQUFULENBQXVCc0IsR0FBdkIsRUFBNEI7QUFDeEIsU0FBT0MsTUFBTSxDQUFDRCxHQUFHLENBQUNFLE9BQUosQ0FBWSxRQUFaLEVBQXNCLEVBQXRCLENBQUQsQ0FBYjtBQUNILEMsQ0FDRDs7O0FBQ0EsU0FBU1AsU0FBVCxDQUFtQlEsSUFBbkIsRUFBeUJwRCxJQUF6QixFQUErQjtBQUMzQixTQUFPLE9BQU9vRCxJQUFQLEdBQWMsb0RBQWQsR0FBcUVwRCxJQUFyRSxHQUE0RSxLQUE1RSxHQUFvRm9ELElBQXBGLEdBQTJGLEdBQWxHO0FBQ0g7O0FBQUEsQyxDQUNEOztBQUNBLFNBQVNQLFlBQVQsQ0FBc0JPLElBQXRCLEVBQTRCcEQsSUFBNUIsRUFBa0M7QUFDOUIsU0FBTyxPQUFPb0QsSUFBUCxHQUFjLHVEQUFkLEdBQXdFcEQsSUFBeEUsR0FBK0UsS0FBL0UsR0FBdUZvRCxJQUF2RixHQUE4RixHQUFyRztBQUNIOztBQUFBLEMsQ0FDRDs7QUFDQSxTQUFTQyxnQkFBVCxDQUEwQkQsSUFBMUIsRUFBZ0NwRCxJQUFoQyxFQUFzQztBQUNsQyxTQUFPLE9BQU9vRCxJQUFQLEdBQWMseURBQWQsR0FBMEVwRCxJQUExRSxHQUFpRixLQUFqRixHQUF5Rm9ELElBQXpGLEdBQWdHLEdBQXZHO0FBQ0g7O0FBQUEsQyxDQUNEO0FBQ0E7QUFDQTtBQUNBLEs7Ozs7Ozs7Ozs7OztBQ2hrQkEsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL2VydG1zJztcclxuaW1wb3J0ICcuL2VxdWlwZW1lbnQnO1xyXG5pbXBvcnQgJy4vYmFzZWxpbmUnO1xyXG5pbXBvcnQgJy4vcHJvZ3Jlc3NCYXInO1xyXG5pbXBvcnQgJy4vdGVzdC11cGxvYWQnO1xyXG5pbXBvcnQgJy4vdHJhaW4nO1xyXG5pbXBvcnQgJy4vcGx1Zyc7XHJcblxyXG4vLyBsb2FkcyB0aGUganF1ZXJ5IHBhY2thZ2UgZnJvbSBub2RlX21vZHVsZXNcclxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuLy8gaW1wb3J0IHRoZSBmdW5jdGlvbiBmcm9tIGdyZWV0LmpzICh0aGUgLmpzIGV4dGVuc2lvbiBpcyBvcHRpb25hbClcclxuLy8gLi8gKG9yIC4uLykgbWVhbnMgdG8gbG9vayBmb3IgYSBsb2NhbCBmaWxlXHJcbiQoJy5wb3N0LW1vZHVsZScpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuZmluZCgnLmRlc2NyaXB0aW9uJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGhlaWdodDogXCJ0b2dnbGVcIixcclxuICAgICAgICBvcGFjaXR5OiBcInRvZ2dsZVwiXHJcbiAgICB9LCAzMDApO1xyXG59KTtcclxuJCgnLnBvc3QtbW9kdWxlLWZsZWV0JykuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5maW5kKCcuZGVzY3JpcHRpb24tZmxlZXQnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgaGVpZ2h0OiBcInRvZ2dsZVwiLFxyXG4gICAgICAgIG9wYWNpdHk6IFwidG9nZ2xlXCJcclxuICAgIH0sIDMwMCk7XHJcbn0pO1xyXG5cclxuJCgnLmZhLWNoZXZyb24tZG93bicpLmhpZGUoKTtcclxubGV0IGxhYmVsQ2xpa2VkID0gZmFsc2U7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ3ByZScpLnJlbW92ZSgpO1xyXG4gICAgJCgnLmJ1dHRvbi1sZWZ0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5zaWRlYmFyJykudG9nZ2xlQ2xhc3MoJ2ZsaXBoJyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5zaWRlYmFyJykuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0xMicpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ3BsLTUnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdjb2wtbWQtMTInKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygndHJhbnNpdGlvbicsICdhbGwgMC42cyBlYXNlLWluLW91dCcpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuYWRkQ2xhc3MoJ21sLXNtLWF1dG8nKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdjb2wtbGctMTAnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdjb2wtbWQtOScpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdjb2wtbGctMTAnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdjb2wtbWQtOScpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCd0cmFuc2l0aW9uJywgJ2FsbCAwLjZzIGVhc2UtaW4tb3V0Jyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygncGwtNScpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuYWRkQ2xhc3MoJ2NvbC1sZy0xMicpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuYWRkQ2xhc3MoJ2NvbC1tZC0xMicpO1xyXG4gICAgICAgIH0pXHJcbiAgICAvLyAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ21sLXNtLWF1dG8nKTtcclxuICAgICQoJy5uYXYtbGFiZWwnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmZhLWNoZXZyb24tbGVmdCcpLmNzcygndHJhbnNmb3JtJywgJ3JvdGF0ZXgoNDVkZWcpJylcclxuICAgIH0pXHJcblxyXG5cclxufSk7IiwiLy9NYXNxdWFnZSBkZSBjZXJ0YWlucyBtb2RhbGUgZGUgbGEgcGFnZVxyXG4kKCcjZm9ybXVsYWlyZS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiQoJyNjb250ZW50LWZvcm0tZXF1aXBtZW50JykuaGlkZSgpO1xyXG4kKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcblxyXG4vL0RlbGNhcmF0aW9uIHZhcmlhYmxlXHJcbmNvbnN0ICR0eXBlID0gJCgnI2VxdWlwZW1lbnRfVHlwZScpO1xyXG4kdHlwZS5hdHRyKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xyXG5cclxubGV0IEVxdWlwbWVudHMgPSBbXSxcclxuICAgIGkgPSAwLFxyXG4gICAgaW5kZXhFVkMgPSAwLFxyXG4gICAgcG9zSW5kZXggPSAwLFxyXG4gICAgUHJlc2VuY2VFVkMgPSBmYWxzZSxcclxuICAgIGlkRXF1aXBtZW50ID0gMCxcclxuICAgIHRhYkluZGV4RXF1aXB0ID0gW11cclxuc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxcclxuICAgIHByZXZpb3VzID0gXCJcIixcclxuICAgIHRhYkVxdWlwZW1lbnRUeXBlID0gW1wiRVZDXCIsIFwiQ0FSVEVcIiwgXCJTRU5TT1JcIiwgXCJETUlcIl0sXHJcbiAgICB0YWJFcXVpcGVtZW50U3VidHlwZSA9IFtcIkNPUkVcIiwgXCJUVUlcIiwgXCJTRE1VXCIsIFwiU0VOU0VcIiwgXCJUV0lOU1wiXTtcclxuXHJcbi8vVmlkYWdlIGRlcyBpbnB1dHMgYXUgcmVmcmVzaCBkZSBsYSBwYWdlXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBkYXRhID0ge31cclxuICAgIGRhdGFbJHR5cGUuYXR0cignbmFtZScpXSA9ICR0eXBlLnZhbCgpXHJcblxyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2Fsc3RvbS9jcmVhdGVfYmFzZWxpbmUnKSB7XHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIC8vICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAvLyAkKCc6aW5wdXQnLCAnI2Zvcm1fZXF1aXBlbWVudCcpLm5vdCgnOmJ1dHRvbiwgOnN1Ym1pdCwgOnJlc2V0LCA6aGlkZGVuJykudmFsKCcnKTtcclxufSk7XHJcblxyXG4vL0FKQVggQ2hhbmdlbWVudCBkZSBzb3VzLXR5cGUgZW4gZm9uY3Rpb24gZHUgdHlwZVxyXG4kdHlwZS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGxldCBkYXRhID0ge31cclxuICAgIGRhdGFbJHR5cGUuYXR0cignbmFtZScpXSA9ICR0eXBlLnZhbCgpXHJcblxyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pXHJcblxyXG4vL0FKQVggc291bWlzc2lvbiBmb3JtdWxhaXJlIGQnYWpvdXQgZXF1aXBlbWVudFxyXG4kKCcjZm9ybV9lcXVpcGVtZW50Jykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgLy9FbXDDqmNoZSBsZSBjaGFyZ2VtZW50IGRlIGxhIHBhZ2Ugc29pcyBmYWl0IGF1dG9tYXRpcXVlbWVudFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fSxcclxuICAgICAgICBhY3Rpb247XHJcbiAgICAvL1JlbXBsaSBkYXRhIGEgcGFydGlyIGRlcyB2YWxldXIgZGVzIGlucHV0c1xyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJylcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgIT0gKFwiZXF1aXBlbWVudFtfdG9rZW5dXCIpICYmIG5hbWUgIT0gKFwic291bWlzc2lvbl9lcXVpcGVtZW50XCIpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PSAnc291bWlzc2lvbl9lZGl0X2VxdWlwZW1lbnQnKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbiA9IFwiZWRpdFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFjdGlvbiA9IFwiYWRkXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAvLyBTaSBsZSBmb3JtdWxhaXJlIGVzdCBwb3VyIGFqb3VlciB1biBub3V2ZWwgZXF1aXBlbWVudFxyXG4gICAgaWYgKGFjdGlvbiA9PSBcImFkZFwiKSB7XHJcbiAgICAgICAgLy9SZW1wbGlzIGxlIHRhYmxlYXUgZGVzIMOpcXVpcGVtZW50c1xyXG4gICAgICAgIEVxdWlwbWVudHMucHVzaChkYXRhKTtcclxuICAgICAgICAvL0VmZmVjdHVyZSBsYSByZXF1w6p0ZSBhamF4IHBvdXIgbCdham91dCBkJ8OpcXVpcGVtZW50XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAkdGhpcy5hdHRyKCdhY3Rpb24nKSxcclxuICAgICAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRhYkVxdWlwdHM6IEVxdWlwbWVudHNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gT3Ugc2kgbGUgZm9ybXVsYWlyZSBlc3QgcG91ciDDqWRpdGVyIHVuIGVxdWlwZW1lbnQgZMOpamEgZXhpc3RhbnQgc3VyIGxhIHBhZ2UgZGUgbCdlcnRtcyBsacOpIGEgY2VsdWktY2lcclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiZWRpdFwiKSB7XHJcbiAgICAgICAgbGV0IGlkRXJ0bXMgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZXF1aXBlbWVudDogZGF0YSxcclxuICAgICAgICAgICAgICAgIGlkRXJ0bXM6IGlkRXJ0bXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcubW9kYWwtZm9vdGVyJykuc2hvdygpO1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgLy9Cb3VjbGUgbGVzIMOpcXVpcGVtZW50cyBldCBsZXMgaW5zdGFsbGUgYXUgZnJvbnRcclxuICAgIEVxdWlwbWVudHMuZm9yRWFjaChyZXR1cm5JbmRleEVsZW1lbnQpO1xyXG59KTtcclxuXHJcblxyXG4vL1ZhbGlkYXRpb24gZGUgYmFzZWxpbmUgXHJcbiQoJyNjcmVhdGUtYmFzZWxpbmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJChcIiNiYXNlbGluZV9uYW1lXCIpLnZhbCgpID09IFwiXCIpIHtcclxuICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIGJhc2VsaW5lIG5hbWUgXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxubGV0IGJhc2VsaW5lTmFtZTtcclxuJCgnI2Zvcm1fYmFzZWxpbmUnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJyksXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuXHJcbiAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAobmFtZSA9PSAnYmFzZWxpbmVbbmFtZV0nKSB7XHJcblxyXG4gICAgICAgICAgICBiYXNlbGluZU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAkdGhpcy5hdHRyKCdhY3Rpb24nKSxcclxuICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGJhc2VsaW5lOiBkYXRhXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcudGl0bGUtYmFzZWxpbmUnKS50ZXh0KHJlc3BvbnNlLmJhc2VsaW5lKVxyXG4gICAgICAgICAgICAkKCcjY29udGVudC1mb3JtLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuLy9WYWxpZGF0aW9uIGRlIHRvdXMgbGVzIMOpcXVpcGVtZW50cyBldCBkZSBsYSBiYXNlbGluZVxyXG4kKCcjdmFsaWQtYWxsLWVxdWlwbWVudHMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChFcXVpcG1lbnRzICE9IFwiXCIpIHtcclxuICAgICAgICAkKCcubWFpbi1iYXNlbGluZScpLmNzcygnb3BhY2l0eScsIFwiMC40XCIpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS9mbHVzaC1hbGwtZXF1aXB0JyxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBiYXNlbGluZU5hbWU6IGJhc2VsaW5lTmFtZSxcclxuICAgICAgICAgICAgICAgIHRhYkVxdWlwdHM6IEVxdWlwbWVudHNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZEJhc2VsaW5lID0gcmVzcG9uc2UuYmFzZWxpbmU7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hbHN0b20vYmFzZWxpbmUvXCIgKyBpZEJhc2VsaW5lO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBFcXVpcG1lbnRzIGJlZm9yZSB2YWxpZCcpO1xyXG4gICAgfVxyXG5cclxufSlcclxuXHJcbi8vR8OpcmUgbGUgY2xpcXVlIGRlIGxhIHN1cHByZXNzaW9uXHJcbiQoJyNzaG93LWVxdWlwbWVudCcpLm9uKCdjbGljaycsICcuZWRpdC1kZWxldGUtZXF1aXBlbWVudCA+IGEnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKVswXVtcImlkXCJdWzBdID09IFwiZFwiKSB7XHJcbiAgICAgICAgZGVsZXRlRXF1aXBtZW50KGV4dHJhaXROb21icmUoJCh0aGlzKVswXVtcImlkXCJdKSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vY2FjaGUgbGUgbW9kYWwgZCdlZGl0IGQnZXF1aXBlbWVudFxyXG4kKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLmhpZGUoKTtcclxuLy8gR2VyZSBsYSBmZXJtZXR1cmUgZHUgbW9kYWwgZCdlZGl0IGQnZXF1aXBlbWVudFxyXG4kKCcjY2xvc2UtbW9kYWwtZm9ybS1lcXVpcG1lbnQtZWRpdCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0JykuaGlkZSgpO1xyXG4gICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbn0pXHJcbi8vIFxyXG4vLyBSZXF1ZXRlIEFKQVggcG91ciByZW1wbGlyIGxlIGZvcm11bGFpcmUgZCfDqXF1aXBlbWVudCBhdmVjIGwnZXF1aXBlbWVudCBzZWxlY3Rpb25uZXJcclxuJCgnLmNvbnRlbnQtZGVzY3JpcHRpb24tZHRyJykub24oJ2NsaWNrJywgJy5lZGl0LWRlbGV0ZS1lcXVpcGVtZW50ID4gYScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICBpZEVxdWlwbWVudCA9IGV4dHJhaXROb21icmUoJCh0aGlzKVswXVtcImNsYXNzTGlzdFwiXVswXSlcclxuICAgIHZhciAkdGhpcyA9ICQoXCIjZm9ybV9lcXVpcGVtZW50X2VkaXRcIik7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwocmVzcG9uc2VbXCJ0eXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICBkYXRhWyQoJyNlcXVpcGVtZW50X1R5cGUnKS5hdHRyKCduYW1lJyldID0gJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGkgaW5wdXQgYXZlYyB2YWxldXIgcmVjdSBkZSBsJ2VxdWlwZW1lbnRcclxuICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfVHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9zb3VzX3R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW1wiU291c1R5cGVcIl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIlNvdXNUeXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfRFRSX2JvYXJkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImRUUkJvYXJkXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfSW5kaWNlX0RUUic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJpbmRpY2VEVFJcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9OdW1fc2VyaWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wibnVtU2VyaWVcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbi8vRm9ybXVsYWlyZSBkJ2VkaXQgZGUgbCfDqXF1aXBlbWVudFxyXG4kKCcjZm9ybV9lcXVpcGVtZW50X2VkaXQnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjZm9ybV9lcXVpcGVtZW50X2VkaXQnKS5jc3MoXCJvcGFjaXR5XCIsIFwiMC40XCIpO1xyXG4gICAgJChcIiN3YWl0LXNwaW5uZXJcIikuY3NzKFwiei1pbmRleFwiLCBcIjk5OTk5XCIpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9LFxyXG4gICAgICAgIGFjdGlvbjtcclxuICAgIC8vUmVtcGxpIGRhdGEgYSBwYXJ0aXIgZGVzIHZhbGV1ciBkZXMgaW5wdXRzXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKVxyXG5cclxuICAgICAgICBpZiAobmFtZSAhPSAoXCJlcXVpcGVtZW50W190b2tlbl1cIikgJiYgbmFtZSAhPSAoXCJzb3VtaXNzaW9uX2VxdWlwZW1lbnRcIikpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgJ2VxdWlwZW1lbnQnOiBkYXRhLFxyXG4gICAgICAgICAgICBcInNvdW1pc3Npb25fZWRpdF9lcXVpcGVtZW50XCI6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG4vL1JlcXVldGUgQUpBWCBkZSBjcsOpYXRpb24gZGUgdmVyc2lvbiBsb2dpY2llbFxyXG4kKCcjZm9ybV92ZXJzaW9uJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcubWFpbi1iYXNlbGluZScpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG5cclxuICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICR0aGlzLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaWRCYXNlbGluZTogZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpLFxyXG4gICAgICAgICAgICB2ZXJzaW9uOiBkYXRhXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjdGl0bGUtdmVyc2lvbicpLmFwcGVuZChcIjxwPlwiICsgcmVzcG9uc2UudmVyc2lvbiArIFwiPC9wPlwiKVxyXG4gICAgICAgICAgICAkKCcubWFpbi1iYXNlbGluZScpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI2Nsb3NlLW1vZGFsLWZvcm0tdmVyc2lvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmV0dXJuSW5kZXhFbGVtZW50KGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG5cclxuICAgIC8vVGVzdCBsJ2V4aXN0ZW5jZSBkZSBsYSBkaXYgZGFucyBsZSBjYXMgb8O5IGVsbGUgZXhpc3RlIGxhIHJlbXBsYWNlIHNpIHBhcyBsYSBtZXQgZW4gcGxhY2VcclxuICAgIGlmICgkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLmxlbmd0aCkge1xyXG4gICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVwbGFjZVdpdGgoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+JylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiNzaG93LWVxdWlwbWVudFwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy90ZXN0IHNpIGwnw6lxdWlwZW1lbnQgZXN0IGxhIGNhcnRlIG91IG5vblxyXG4gICAgaWYgKGVsZW1lbnRbXCJlcXVpcGVtZW50W1R5cGVdXCJdICE9IFwiMlwiKSB7XHJcbiAgICAgICAgLy9Td2l0aCByZXBsYWNlbWVudCBkZSBsJ2lkIGR1IHR5cGUgYXZlYyBzb24gbm9tXHJcbiAgICAgICAgc3dpdGNoIChlbGVtZW50W1wiZXF1aXBlbWVudFtUeXBlXVwiXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIDApKTtcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYWRkQ2xhc3MoXCJkZXNjcmlwdGlvbi1TdWJ0eXBlQ2FyZFwiKVxyXG4gICAgICAgICAgICAgICAgaW5kZXhFVkMgPSAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgMikpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgMykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoZWxlbWVudFtcImVxdWlwZW1lbnRbc291c190eXBlXVwiXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDMpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiNVwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDQpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNvbnRlbnQtZGVzY3JpcHRpb24tZHRyXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W0RUUl9ib2FyZF1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtJbmRpY2VfRFRSXVwiXSArICc8L3A+JylcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W051bV9zZXJpZV1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVFZGl0RGVsZXRlKGluZGV4KSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgRXF1aXBtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKEVxdWlwbWVudHNbaV1bXCJlcXVpcGVtZW50W1R5cGVdXCJdID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICBQcmVzZW5jZUVWQyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChQcmVzZW5jZUVWQykge1xyXG4gICAgICAgICAgICAvL0VjcmlzIGxlIG5vbSBkdSB0eXBlIFwiY2FydGVcIiBzb3VzIGxlIHR5cGUgIEVWQ1xyXG4gICAgICAgICAgICAvLyAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVUeXBlKDUsIDEpKTtcclxuICAgICAgICAgICAgLy9QYXJjb3VzIGxlIHR5cGUgZGUgc291c3R5cGUgXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZWxlbWVudFtcImVxdWlwZW1lbnRbc291c190eXBlXVwiXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDApKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgMikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0ciBjb250ZW50LWRlc2NyaXB0aW9uLWR0ckNhcmRcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtEVFJfYm9hcmRdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W0luZGljZV9EVFJdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W051bV9zZXJpZV1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgRVZDIGVxdWlwZW1lbnQgYmVmb3JlJyk7XHJcbiAgICAgICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIEVxdWlwbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgJCgnLm1vZGFsLWZvb3RlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNzaG93LWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy9TdXByZXNzaW9uIGRlIGwnw6lxdWlwZW1lbnQgZGFucyBsZSB0YWJsZWF1IGV0IGxlIGZyb250XHJcbmZ1bmN0aW9uIGRlbGV0ZUVxdWlwbWVudChwb3NpdGlvbikge1xyXG4gICAgRXF1aXBtZW50cy5zcGxpY2UocG9zaXRpb24sIDEpO1xyXG4gICAgJCgnLmRlc2NyaXB0aW9uJykucmVtb3ZlKCk7XHJcbiAgICBFcXVpcG1lbnRzLmZvckVhY2gocmV0dXJuSW5kZXhFbGVtZW50KTtcclxufVxyXG4vL0V4dHJhaXQgbGUgbm9tYnJlIGQndW5lIHN0cmVpbmdcclxuZnVuY3Rpb24gZXh0cmFpdE5vbWJyZShzdHIpIHtcclxuICAgIHJldHVybiBOdW1iZXIoc3RyLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKSlcclxufVxyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHR5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVR5cGUoc2l6ZSwgaW5kZXgpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1UeXBlIFwiIGlkPVwiZGVzY3JpcHRpb24tdHlwZSBcIj4nICsgdGFiRXF1aXBlbWVudFR5cGVbaW5kZXhdICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHNvdXN0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVTdWJ0eXBlKHNpemUsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXN1YlR5cGUgXCI+JyArIHRhYkVxdWlwZW1lbnRTdWJ0eXBlW2luZGV4XSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpcyBsZSB0aXRyZSBkdSBzb3VzdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlU3VidHlwZUNhcmQoc2l6ZSwgaW5kZXgpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1zdWJ0eXBlXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyB0YWJFcXVpcGVtZW50U3VidHlwZVtpbmRleF0gKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXQgbGVzIDIgaWNvbnMgZCdlZGl0IGV0IGRlbGV0ZVxyXG5mdW5jdGlvbiB3cml0ZUVkaXREZWxldGUoaW5kZXgpIHtcclxuICAgIHJldHVybiAnIDxwIGNsYXNzPVwiZWRpdC1kZWxldGUtZXF1aXBlbWVudFwiPiA8YSBpZD1cImVkaXQtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IDwvYT4gPGEgaWQ9XCJkZWxldGUtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzID0gXCJmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlXCI+IDwvaT48L2E+PC9wPic7XHJcbn07XHJcblxyXG4vKmF1IGNsaWNrIGRlIGwnYWRkIEVxdWlwbWVudCBhZmZpY2hlciBsZSBmb3JtdWxhaXJlIGQnYWpvdXQgZCfDqXF1aXBlbWVudCovXHJcbiQoJyNjcmVhdGUtZXF1aXBtZW50JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnLm1vZGFsLWZvb3RlcicpLmhpZGUoKTtcclxuICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAkKCc6aW5wdXQnLCAnI2Zvcm1fZXF1aXBlbWVudCcpLm5vdCgnOmJ1dHRvbiwgOnN1Ym1pdCwgOnJlc2V0LCA6aGlkZGVuJykudmFsKCcnKTtcclxuICAgIHByZXZpb3VzID0gXCJlcXVpcG1lbnRcIjtcclxufSk7XHJcbi8vIEdlcmUgbGUgY2xpY2sgZHUgcHJldmlvdXNcclxuJChcIiNwcmV2aW91cy1lcXVpcG1lbnRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgICQoJy5tb2RhbC1mb290ZXInKS5zaG93KCk7XHJcbn0pO1xyXG4kKCcjY3JlYXRlLWJhc2VsaW5lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI3Nob3ctZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcubW9kYWwtZm9vdGVyJykuc2hvdygpO1xyXG59KVxyXG4vLyBGZXJtZSBsZSBtb2RhbCBkZSBmb3JtdWxhaXJlIGQnYWpvdXQgZCfDqXF1aXBlbWVudFxyXG4kKCcjY2xvc2UtZXF1aXBlbWVudCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxufSkiLCIvL1ZhbGlkYXRpb24gZGUgbCdlcnRtcyBcclxuJCgnI3ZhbGlkLWVydG1zLW5hbWUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2NvbnRlbnQtZm9ybS1lcnRtc1wiKS5oaWRlKCk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWVxdWlwbWVudCcpLnNob3coKTtcclxufSkiLCIvLyAkKCcjZGVsZXRlLWVydG1zJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuLy8gICAgICQuYWpheCh7XHJcbi8vICAgICAgICAgdXJsOiAkdGhpcy5hdHRyKCdhY3Rpb24nKSxcclxuLy8gICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuLy8gICAgICAgICBkYXRhOiB7fSxcclxuLy8gICAgICAgICBhc3luYzogdHJ1ZSxcclxuLy8gICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbi8vICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4vLyAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyB9KSIsIiQoJyNmb3JtX3BsdWcnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBsZXQgYmFzZWxpbmUgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJGZvcm0pO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2FkZC1wbHVnJyxcclxuICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICBkYXRhVHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZDogYmFzZWxpbmVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG5cclxuLy9FeHRyYWl0IGxlIG5vbWJyZSBkJ3VuZSBzdHJlaW5nXHJcbmZ1bmN0aW9uIGV4dHJhaXROb21icmUoc3RyKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyKHN0ci5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIikpO1xyXG59IiwicmVxdWlyZSEgXCIuL3ByZXNldHNcIjoge3ByZXNldHN9XG5cbnNpbXBsZS1zdHIgPSAoYXJyKSAtPiBhcnIuam9pbiAnJ1xud3JhcCA9IChjb250ZW50KSAtPiBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCIgKyBidG9hKGNvbnRlbnQpXG5cbmRvIC0+XG4gICAgbWFrZSA9XG4gICAgICAgIGhlYWQ6ICh2aWV3Qm94KSAtPiBcIlwiXCJcbiAgICAgICAgICAgICAgICA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJ1dGYtOFwiPz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIjdmlld0JveFwiPlxuICAgICAgICAgICAgICAgIFwiXCJcIlxuXG4gICAgICAgIGdyYWRpZW50OiAoZGlyID0gNDUsIGR1ciA9IDEsIC4uLmNvbG9ycykgLT5cbiAgICAgICAgICAgIHJldCA9IFtAaGVhZCBcIjAgMCAxMDAgMTAwXCJdXG4gICAgICAgICAgICBsZW4gPSBjb2xvcnMubGVuZ3RoICogNCArIDFcbiAgICAgICAgICAgIGRpciA9IGRpciAqIE1hdGguUEkgLyAxODBcbiAgICAgICAgICAgIGd4ID0gTWF0aC5jb3MoZGlyKSAqKiAyXG4gICAgICAgICAgICBneSA9IE1hdGguc3FydChneCAtIGd4ICoqIDIpXG4gICAgICAgICAgICBpZiBkaXIgPiBNYXRoLlBJICogMC4yNSA9PlxuICAgICAgICAgICAgICAgIGd5ID0gTWF0aC5zaW4oZGlyKSAqKiAyXG4gICAgICAgICAgICAgICAgZ3ggPSBNYXRoLnNxcnQoZ3kgLSBneSAqKiAyKVxuICAgICAgICAgICAgeCA9IGd4ICogMTAwXG4gICAgICAgICAgICB5ID0gZ3kgKiAxMDBcbiAgICAgICAgICAgIHJldC5wdXNoIFwiXCJcIjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cImdyYWRpZW50XCIgeDE9XCIwXCIgeDI9XCIjZ3hcIiB5MT1cIjBcIiB5Mj1cIiNneVwiPlwiXCJcIlxuICAgICAgICAgICAgZm9yIGkgZnJvbSAwIHRpbCBsZW4gPT5cbiAgICAgICAgICAgICAgICBpZHggPSBpICogMTAwIC8gKGxlbiAtIDEpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2ggXCJcIlwiPHN0b3Agb2Zmc2V0PVwiI3tpZHh9JVwiIHN0b3AtY29sb3I9XCIje2NvbG9yc1tpICUgY29sb3JzLmxlbmd0aF19XCIvPlwiXCJcIlxuICAgICAgICAgICAgcmV0LnB1c2ggXCJcIlwiXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD48L2RlZnM+XG4gICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiNDAwXCIgZmlsbD1cInVybChcXCNncmFkaWVudClcIj5cbiAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInRyYW5zbGF0ZVwiIGZyb209XCItI3gsLSN5XCJcbiAgICAgICAgICAgICAgICB0bz1cIjAsMFwiIGR1cj1cIiN7ZHVyfXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+PC9yZWN0Pjwvc3ZnPlxuICAgICAgICAgICAgICAgIFwiXCJcIlxuICAgICAgICAgICAgd3JhcCByZXQuam9pbihcIlwiKVxuXG4gICAgICAgIHN0cmlwZTogKGMxPVxcI2I0YjRiNCwgYzI9XFwjZTZlNmU2LCBkdXIgPSAxKSAtPlxuICAgICAgICAgICAgcmV0ID0gW0BoZWFkIFwiMCAwIDEwMCAxMDBcIl1cbiAgICAgICAgICAgIHJldCArKz0gW1xuICAgICAgICAgICAgICAgIFwiXCJcIjxyZWN0IGZpbGw9XCIjYzJcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiLz5cIlwiXCJcbiAgICAgICAgICAgICAgICBcIlwiXCI8Zz48Zz5cIlwiXCJcbiAgICAgICAgICAgICAgICBbXCJcIlwiPHBvbHlnb24gZmlsbD1cIiNjMVwiIFwiXCJcIiArXG4gICAgICAgICAgICAgICAgIFwiXCJcInBvaW50cz1cIiN7LTkwICsgaSAqIDIwfSwxMDAgI3stMTAwICsgaSAqIDIwfSxcIlwiXCIgK1xuICAgICAgICAgICAgICAgICBcIlwiXCIxMDAgI3stNjAgKyBpICogMjB9LDAgI3stNTAgKyBpICogMjB9LDAgXCIvPlwiXCJcIiBmb3IgaSBmcm9tIDAgdGlsIDEzXS5qb2luKFwiXCIpXG4gICAgICAgICAgICAgICAgXCJcIlwiPC9nPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwidHJhbnNsYXRlXCIgXCJcIlwiXG4gICAgICAgICAgICAgICAgXCJcIlwiZnJvbT1cIjAsMFwiIHRvPVwiMjAsMFwiIGR1cj1cIiN7ZHVyfXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+PC9nPjwvc3ZnPlwiXCJcIlxuICAgICAgICAgICAgXS5qb2luKFwiXCIpXG4gICAgICAgICAgICB3cmFwIHJldFxuXG4gICAgICAgIGJ1YmJsZTogKGMxID0gXFwjMzlkLCBjMiA9IFxcIzljZiwgY291bnQgPSAxNSwgZHVyID0gMSwgc2l6ZSA9IDYsIHN3PTEpIC0+XG4gICAgICAgICAgICByZXQgPSBbQGhlYWQoXCIwIDAgMjAwIDIwMFwiKSwgXCJcIlwiPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgZmlsbD1cIiNjMVwiLz5cIlwiXCJdXG4gICAgICAgICAgICBmb3IgaSBmcm9tIDAgdGlsIGNvdW50ID0+XG4gICAgICAgICAgICAgICAgaWR4ID0gLShpIC8gY291bnQpICogZHVyXG4gICAgICAgICAgICAgICAgeCA9IE1hdGgucmFuZG9tISAqIDE4NCArIDhcbiAgICAgICAgICAgICAgICByID0gKCBNYXRoLnJhbmRvbSEgKiAwLjcgKyAwLjMgKSAqIHNpemVcbiAgICAgICAgICAgICAgICBkID0gZHVyICogKDEgKyBNYXRoLnJhbmRvbSEgKiAwLjUpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2ggW1xuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8Y2lyY2xlIGN4PVwiI3hcIiBjeT1cIjBcIiByPVwiI3JcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNjMlwiIHN0cm9rZS13aWR0aD1cIiNzd1wiPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3lcIiB2YWx1ZXM9XCIxOTA7LTEwXCIgdGltZXM9XCIwOzFcIiBcIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiZHVyPVwiI3tkfXNcIiBiZWdpbj1cIiN7aWR4fXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjwvY2lyY2xlPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8Y2lyY2xlIGN4PVwiI3hcIiBjeT1cIjBcIiByPVwiI3JcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNjMlwiIHN0cm9rZS13aWR0aD1cIiNzd1wiPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3lcIiB2YWx1ZXM9XCIzOTA7MTkwXCIgdGltZXM9XCIwOzFcIiBcIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiZHVyPVwiI3tkfXNcIiBiZWdpbj1cIiN7aWR4fXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjwvY2lyY2xlPlwiXCJcIlxuICAgICAgICAgICAgICAgIF0uam9pbihcIlwiKVxuICAgICAgICAgICAgd3JhcChyZXQuam9pbihcIlwiKSArIFwiPC9zdmc+XCIpXG5cbiAgICBoYW5kbGVyID1cbiAgICAgICAgcXVldWU6IHt9XG4gICAgICAgIHJ1bm5pbmc6IGZhbHNlXG4gICAgICAgIG1haW46ICh0aW1lc3RhbXApIC0+XG4gICAgICAgICAgICBrZWVwb24gPSBmYWxzZVxuICAgICAgICAgICAgcmVtb3ZlZCA9IFtdXG4gICAgICAgICAgICBmb3IgayxmdW5jIG9mIEBxdWV1ZSA9PlxuICAgICAgICAgICAgICAgIHJldCA9IGZ1bmMgdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgaWYgIXJldCA9PiByZW1vdmVkLnB1c2ggZnVuY1xuICAgICAgICAgICAgICAgIGtlZXBvbiA9IGtlZXBvbiBvciByZXRcbiAgICAgICAgICAgIGZvciBrLGZ1bmMgb2YgQHF1ZXVlID0+IGlmIHJlbW92ZWQuaW5kZXhPZihmdW5jKSA+PSAwID0+IGRlbGV0ZSBAcXVldWVba11cbiAgICAgICAgICAgIGlmIGtlZXBvbiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKH4+IEBtYWluIGl0KVxuICAgICAgICAgICAgZWxzZSBAcnVubmluZyA9IGZhbHNlXG4gICAgICAgIGFkZDogKGtleSwgZikgLT5cbiAgICAgICAgICAgIGlmICFAcXVldWVba2V5XSA9PiBAcXVldWVba2V5XSA9IGZcbiAgICAgICAgICAgIGlmICFAcnVubmluZyA9PlxuICAgICAgICAgICAgICAgIEBydW5uaW5nID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSAofj4gQG1haW4gaXQpXG5cblxuICAgIHdpbmRvdy5sZEJhciA9IGxkQmFyID0gKHNlbGVjdG9yLCBvcHRpb24gPSB7fSkgLT5cbiAgICAgICAgeG1sbnMgPSB4bGluazogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgcm9vdCA9IGlmIHR5cGVvZiEgc2VsZWN0b3IgaXMgXFxTdHJpbmdcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Igc2VsZWN0b3JcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc2VsZWN0b3JcblxuICAgICAgICBpZiAhcm9vdC5sZEJhciA9PiByb290LmxkQmFyID0gQFxuICAgICAgICBlbHNlIHJldHVybiByb290LmxkQmFyXG5cbiAgICAgICAgY2xzID0gcm9vdC5nZXRBdHRyaWJ1dGUoXFxjbGFzcykgb3IgJydcbiAgICAgICAgaWYgIX5jbHMuaW5kZXhPZignbGRCYXInKSA9PiByb290LnNldEF0dHJpYnV0ZSBcXGNsYXNzLCBcIiNjbHMgbGRCYXJcIlxuICAgICAgICBpZC1wcmVmaXggPSBcImxkQmFyLSN7TWF0aC5yYW5kb20hdG9TdHJpbmcgMTYgLnN1YnN0cmluZyAyfVwiXG4gICAgICAgIGlkID1cbiAgICAgICAgICAgIGtleTogaWQtcHJlZml4XG4gICAgICAgICAgICBjbGlwOiBcIiN7aWQtcHJlZml4fS1jbGlwXCJcbiAgICAgICAgICAgIGZpbHRlcjogXCIje2lkLXByZWZpeH0tZmlsdGVyXCJcbiAgICAgICAgICAgIHBhdHRlcm46IFwiI3tpZC1wcmVmaXh9LXBhdHRlcm5cIlxuICAgICAgICAgICAgbWFzazogXCIje2lkLXByZWZpeH0tbWFza1wiXG4gICAgICAgICAgICBtYXNrLXBhdGg6IFwiI3tpZC1wcmVmaXh9LW1hc2stcGF0aFwiXG4gICAgICAgIGRvbVRyZWUgPSAobixvKSAtPlxuICAgICAgICAgICAgbiA9IG5ld05vZGUgblxuICAgICAgICAgICAgZm9yIGssdiBvZiBvID0+IGlmIGsgIT0gXFxhdHRyID0+IG4uYXBwZW5kQ2hpbGQgZG9tVHJlZShrLCB2IG9yIHt9KVxuICAgICAgICAgICAgbi5hdHRycyhvLmF0dHIgb3Ige30pXG4gICAgICAgICAgICBuXG4gICAgICAgIG5ld05vZGUgPSAobikgLT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgblxuICAgICAgICBkb2N1bWVudC5ib2R5Ll9fcHJvdG9fXy5fX3Byb3RvX18uX19wcm90b19fXG4gICAgICAgICAgICAuLnRleHQgPSAodCkgLT4gQGFwcGVuZENoaWxkIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpXG4gICAgICAgICAgICAuLmF0dHJzID0gKG8pIC0+IGZvciBrLHYgb2YgbyA9PlxuICAgICAgICAgICAgICAgIHJldCA9IC8oW146XSspOihbXjpdKykvLmV4ZWMoaylcbiAgICAgICAgICAgICAgICBpZiAhcmV0IG9yICF4bWxuc1tyZXQuMV0gPT4gQHNldEF0dHJpYnV0ZSBrLCB2XG4gICAgICAgICAgICAgICAgZWxzZSBAc2V0QXR0cmlidXRlTlMgeG1sbnNbcmV0LjFdLCBrLCB2XG4gICAgICAgICAgICAuLnN0eWxlcyA9IChvKSAtPiBmb3Igayx2IG9mIG8gPT4gQHN0eWxlW2tdID0gdlxuICAgICAgICAgICAgLi5hcHBlbmQgPSAobikgLT4gQGFwcGVuZENoaWxkIHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgXCJodHRwOi8vd3d3LnczLm9nLzIwMDAvc3ZnXCIsIG5cbiAgICAgICAgICAgIC4uYXR0ciA9IChuLHYpIC0+IGlmIHY/ID0+IEBzZXRBdHRyaWJ1dGUgbiwgdiBlbHNlIEBnZXRBdHRyaWJ1dGUgblxuICAgICAgICBjb25maWcgPVxuICAgICAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgICAgICBcImltZ1wiOiAnJ1xuICAgICAgICAgICAgXCJwYXRoXCI6ICdNMTAgMTBMOTAgMTBNOTAgOE05MCAxMidcbiAgICAgICAgICAgIFwiZmlsbC1kaXJcIjogXFxidHRcbiAgICAgICAgICAgIFwiZmlsbFwiOiBcXCMyNWJcbiAgICAgICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAzXG4gICAgICAgICAgICBcInBhdHRlcm4tc2l6ZVwiOiBudWxsXG4gICAgICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXFwzXG4gICAgICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAxXG4gICAgICAgICAgICBcImVhc2luZ1wiOiBcXGxpbmVhclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiAwXG4gICAgICAgICAgICBcImltZy1zaXplXCI6IG51bGxcbiAgICAgICAgICAgIFwiYmJveFwiOiBudWxsXG4gICAgICAgICAgICBcInNldC1kaW1cIjogdHJ1ZVxuICAgICAgICAgICAgXCJhc3BlY3QtcmF0aW9cIjogXCJ4TWlkWU1pZFwiXG4gICAgICAgICAgICBcInRyYW5zaXRpb24taW5cIjogZmFsc2VcbiAgICAgICAgICAgIFwibWluXCI6IDBcbiAgICAgICAgICAgIFwibWF4XCI6IDEwMFxuICAgICAgICAgICAgXCJwcmVjaXNpb25cIjogMFxuICAgICAgICAgICAgXCJwYWRkaW5nXCI6IHVuZGVmaW5lZFxuXG4gICAgICAgIGNvbmZpZ1tcInByZXNldFwiXSA9IHJvb3QuYXR0cihcImRhdGEtcHJlc2V0XCIpIG9yIG9wdGlvbltcInByZXNldFwiXVxuXG4gICAgICAgIGlmIGNvbmZpZy5wcmVzZXQ/XG4gICAgICAgICAgICAjIHVzZSB0aGUgZGVmYXVsdCBwcmVzZXRcbiAgICAgICAgICAgIGNvbmZpZyA8PDwgcHJlc2V0c1tjb25maWcucHJlc2V0XVxuXG4gICAgICAgICMgb3ZlcndyaXRlIGlmIHRoZXJlIGFyZSBhcmd1bWVudHMgcGFzc2VkIHZpYSBkYXRhLSogYXR0cmlidXRlc1xuICAgICAgICBmb3IgYXR0ciBvZiBjb25maWdcbiAgICAgICAgICAgIGlmIHRoYXQgPSByb290LmF0dHIgXCJkYXRhLSN7YXR0cn1cIlxuICAgICAgICAgICAgICAgIGNvbmZpZ1thdHRyXSA9IHRoYXRcblxuICAgICAgICBjb25maWcgPDw8IG9wdGlvblxuICAgICAgICBpZiBjb25maWcuaW1nID0+IGNvbmZpZy5wYXRoID0gbnVsbFxuXG4gICAgICAgIGlzLXN0cm9rZSA9IGNvbmZpZy50eXBlID09IFxcc3Ryb2tlXG4gICAgICAgIHBhcnNlLXJlcyA9ICh2KSAtPlxuICAgICAgICAgICAgcGFyc2VyID0gL2RhdGE6bGRiYXJcXC9yZXMsKFteKCldKylcXCgoW14pXSspXFwpL1xuICAgICAgICAgICAgcmV0ID0gcGFyc2VyLmV4ZWModilcbiAgICAgICAgICAgIGlmICFyZXQgPT4gcmV0dXJuIHZcbiAgICAgICAgICAgIHJldCA9IG1ha2VbcmV0LjFdLmFwcGx5IG1ha2UsIHJldC4yLnNwbGl0KFxcLClcbiAgICAgICAgY29uZmlnLmZpbGwgPSBwYXJzZS1yZXMgY29uZmlnLmZpbGxcbiAgICAgICAgY29uZmlnLnN0cm9rZSA9IHBhcnNlLXJlcyBjb25maWcuc3Ryb2tlXG4gICAgICAgIGlmIGNvbmZpZ1tcInNldC1kaW1cIl0gPT0gXFxmYWxzZSA9PiBjb25maWdbXCJzZXQtZGltXCJdID0gZmFsc2VcblxuICAgICAgICBkb20gPVxuICAgICAgICAgICAgYXR0cjpcbiAgICAgICAgICAgICAgICBcInhtbG5zOnhsaW5rXCI6IFxcaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IGNvbmZpZ1tcImFzcGVjdC1yYXRpb1wiXVxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIlxuICAgICAgICAgICAgZGVmczpcbiAgICAgICAgICAgICAgICBmaWx0ZXI6XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5maWx0ZXIsIHg6IC0xLCB5OiAtMSwgd2lkdGg6IDMsIGhlaWdodDogM1xuICAgICAgICAgICAgICAgICAgICBmZU1vcnBob2xvZ3k6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogKGlmICtjb25maWdbXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiXT49MCA9PiBcXGRpbGF0ZSBlbHNlIFxcZXJvZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IE1hdGguYWJzKCtjb25maWdbXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiXSlcbiAgICAgICAgICAgICAgICAgICAgZmVDb2xvck1hdHJpeDogYXR0cjoge3ZhbHVlczogJzAgMCAwIDAgMSAgICAwIDAgMCAwIDEgICAgMCAwIDAgMCAxICAgIDAgMCAwIDEgMCcsIHJlc3VsdDogXCJjbVwifVxuICAgICAgICAgICAgICAgIG1hc2s6XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5tYXNrXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4bGluazpocmVmXCI6IGNvbmZpZy5pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJ1cmwoXFwjI3tpZC5maWx0ZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgcHJlc2VydmVBc3BlY3RSYXRpbzogY29uZmlnW1wiYXNwZWN0LXJhdGlvXCJdXG5cbiAgICAgICAgICAgICAgICBnOlxuICAgICAgICAgICAgICAgICAgICBtYXNrOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLm1hc2stcGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkOiBjb25maWcucGF0aCBvciBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXFwjZmZmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcXCNmZmZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwidXJsKFxcIyN7aWQuZmlsdGVyfSlcIlxuXG4gICAgICAgICAgICAgICAgY2xpcFBhdGg6XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5jbGlwXG4gICAgICAgICAgICAgICAgICAgIHJlY3Q6IHthdHRyOiBjbGFzczogXFxtYXNrLCBmaWxsOiBcXCMwMDB9XG4gICAgICAgICAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZC5wYXR0ZXJuLCBwYXR0ZXJuVW5pdHM6IFxcdXNlclNwYWNlT25Vc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6MCwgeTogMCwgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDBcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGF0dHI6IHg6IDAsIHk6IDAsIHdpZHRoOiAzMDAsIGhlaWdodDogMzAwXG5cbiAgICAgICAgc3ZnID0gZG9tVHJlZSBcXHN2ZywgZG9tXG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFxcZGl2XG4gICAgICAgIHRleHQuc2V0QXR0cmlidXRlIFxcY2xhc3MsIFxcbGRCYXItbGFiZWxcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCBzdmdcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCB0ZXh0XG5cbiAgICAgICAgZ3JvdXAgPSBbMCwwXVxuICAgICAgICBsZW5ndGggPSAwXG5cbiAgICAgICAgQGZpdCA9IH4+XG4gICAgICAgICAgICBpZiBjb25maWdbXCJiYm94XCJdID0+XG4gICAgICAgICAgICAgIGJveCA9IHRoYXQuc3BsaXQoJyAnKS5tYXAoLT4rKGl0LnRyaW0hKSlcbiAgICAgICAgICAgICAgYm94ID0ge3g6IGJveC4wLCB5OiBib3guMSwgd2lkdGg6IGJveC4yLCBoZWlnaHQ6IGJveC4zfVxuICAgICAgICAgICAgZWxzZSBib3ggPSBncm91cC4xLmdldEJCb3ghXG4gICAgICAgICAgICBpZiAhYm94IG9yIGJveC53aWR0aCA9PSAwIG9yIGJveC5oZWlnaHQgPT0gMCA9PiBib3ggPSB7eDogMCwgeTogMCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDB9XG4gICAgICAgICAgICBkID0gKE1hdGgubWF4LmFwcGx5KFxuICAgICAgICAgICAgICBudWxsLCA8W3N0cm9rZS13aWR0aCBzdHJva2UtdHJhaWwtd2lkdGggZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVdPi5tYXAoLT5jb25maWdbaXRdKSlcbiAgICAgICAgICAgICkgKiAxLjVcbiAgICAgICAgICAgIGlmIGNvbmZpZ1tcInBhZGRpbmdcIl0/ID0+IGQgPSArY29uZmlnW1wicGFkZGluZ1wiXVxuXG4gICAgICAgICAgICBzdmcuYXR0cnMgdmlld0JveDogW2JveC54IC0gZCwgYm94LnkgLSBkLCBib3gud2lkdGggKyBkICogMiwgYm94LmhlaWdodCArIGQgKiAyXS5qb2luKFwiIFwiKVxuICAgICAgICAgICAgaWYgY29uZmlnW1wic2V0LWRpbVwiXSA9PiA8W3dpZHRoIGhlaWdodF0+Lm1hcCB+PiBpZiAhcm9vdC5zdHlsZVtpdF0gb3IgQGZpdFtpdF0gPT5cbiAgICAgICAgICAgICAgcm9vdC5zdHlsZVtpdF0gPSBcIiN7Ym94W2l0XSArIGQgKiAyfXB4XCJcbiAgICAgICAgICAgICAgQGZpdFtpdF0gPSB0cnVlXG5cbiAgICAgICAgICAgIHJlY3QgPSBncm91cC4wLnF1ZXJ5U2VsZWN0b3IgXFxyZWN0XG4gICAgICAgICAgICBpZiByZWN0ID0+IHJlY3QuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICB4OiBib3gueCAtIGQsIHk6IGJveC55IC0gZCwgd2lkdGg6IGJveC53aWR0aCArIGQgKiAyLCBoZWlnaHQ6IGJveC5oZWlnaHQgKyBkICogMlxuXG4gICAgICAgIGlmIGNvbmZpZy5wYXRoID0+XG4gICAgICAgICAgICBpZiBpcy1zdHJva2UgPT5cbiAgICAgICAgICAgICAgICBncm91cC4wID0gZG9tVHJlZSBcXGcsIHBhdGg6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgIGQ6IGNvbmZpZy5wYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFxcbm9uZVxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXFxiYXNlbGluZVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGdyb3VwLjAgPSBkb21UcmVlIFxcZywgcmVjdDogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDBcbiAgICAgICAgICAgICAgICAgICAgbWFzazogXCJ1cmwoXFwjI3tpZC5tYXNrLXBhdGh9KVwiLCBmaWxsOiBjb25maWdbXCJmaWxsLWJhY2tncm91bmRcIl1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFxcZnJhbWVcblxuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkIGdyb3VwLjBcbiAgICAgICAgICAgIGdyb3VwLjEgPSBkb21UcmVlIFxcZywgcGF0aDogYXR0cjpcbiAgICAgICAgICAgICAgICBkOiBjb25maWcucGF0aCwgY2xhc3M6IGlmIGlzLXN0cm9rZSA9PiBcXG1haW5saW5lIGVsc2UgXFxzb2xpZFxuICAgICAgICAgICAgICAgIFwiY2xpcC1wYXRoXCI6IGlmIGNvbmZpZy50eXBlID09IFxcZmlsbCA9PiBcInVybChcXCMje2lkLmNsaXB9KVwiIGVsc2UgJydcbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZCBncm91cC4xXG4gICAgICAgICAgICBwYXRoMCA9IGdyb3VwLjAucXVlcnlTZWxlY3RvciAoaWYgaXMtc3Ryb2tlID0+IFxccGF0aCBlbHNlIFxccmVjdClcbiAgICAgICAgICAgIHBhdGgxID0gZ3JvdXAuMS5xdWVyeVNlbGVjdG9yIFxccGF0aFxuICAgICAgICAgICAgaWYgaXMtc3Ryb2tlID0+IHBhdGgxLmF0dHJzIGZpbGw6IFxcbm9uZVxuXG4gICAgICAgICAgICBwYXRpbWcgPSBzdmcucXVlcnlTZWxlY3RvciAncGF0dGVybiBpbWFnZSdcbiAgICAgICAgICAgIGltZyA9IG5ldyBJbWFnZSFcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyIFxcbG9hZCwgLT5cbiAgICAgICAgICAgICAgICBib3ggPSBpZiBjb25maWdbXCJwYXR0ZXJuLXNpemVcIl0gPT4ge3dpZHRoOiArdGhhdCwgaGVpZ2h0OiArdGhhdH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIGltZy53aWR0aCBhbmQgaW1nLmhlaWdodCA9PiB7d2lkdGg6IGltZy53aWR0aCwgaGVpZ2h0OiBpbWcuaGVpZ2h0fVxuICAgICAgICAgICAgICAgIGVsc2Uge3dpZHRoOiAzMDAsIGhlaWdodDogMzAwfVxuICAgICAgICAgICAgICAgIHN2Zy5xdWVyeVNlbGVjdG9yIFxccGF0dGVybiAuYXR0cnMge3dpZHRoOiBib3gud2lkdGgsIGhlaWdodDogYm94LmhlaWdodH1cbiAgICAgICAgICAgICAgICBwYXRpbWcuYXR0cnMge3dpZHRoOiBib3gud2lkdGgsIGhlaWdodDogYm94LmhlaWdodH1cbiAgICAgICAgICAgIGlmIC8uK1xcLi4rfF5kYXRhOi8uZXhlYyhpZiAhaXMtc3Ryb2tlID0+IGNvbmZpZy5maWxsIGVsc2UgY29uZmlnLnN0cm9rZSkgPT5cbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gaWYgIWlzLXN0cm9rZSA9PiBjb25maWcuZmlsbCBlbHNlIGNvbmZpZy5zdHJva2VcbiAgICAgICAgICAgICAgICBwYXRpbWcuYXR0cnMgXCJ4bGluazpocmVmXCI6IGltZy5zcmMgI2lmICFpcy1zdHJva2UgPT4gY29uZmlnLmZpbGwgZWxzZSBjb25maWcuc3Ryb2tlXG5cbiAgICAgICAgICAgIGlmIGlzLXN0cm9rZSA9PlxuICAgICAgICAgICAgICAgIHBhdGgwLmF0dHJzIHN0cm9rZTogY29uZmlnW1wic3Ryb2tlLXRyYWlsXCJdLCBcInN0cm9rZS13aWR0aFwiOiBjb25maWdbXCJzdHJva2UtdHJhaWwtd2lkdGhcIl1cbiAgICAgICAgICAgICAgICBwYXRoMS5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBjb25maWdbXCJzdHJva2Utd2lkdGhcIl1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBpZiAvLitcXC4uK3xeZGF0YTovLmV4ZWMoY29uZmlnLnN0cm9rZSkgPT4gXCJ1cmwoXFwjI3tpZC5wYXR0ZXJufSlcIiBlbHNlIGNvbmZpZy5zdHJva2VcbiAgICAgICAgICAgIGlmIGNvbmZpZy5maWxsIGFuZCAhaXMtc3Ryb2tlID0+XG4gICAgICAgICAgICAgICAgcGF0aDEuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICAgICAgZmlsbDogaWYgLy4rXFwuLit8XmRhdGE6Ly5leGVjKGNvbmZpZy5maWxsKSA9PiBcInVybChcXCMje2lkLnBhdHRlcm59KVwiIGVsc2UgY29uZmlnLmZpbGxcblxuICAgICAgICAgICAgbGVuZ3RoID0gcGF0aDEuZ2V0VG90YWxMZW5ndGghXG4gICAgICAgICAgICBAZml0IVxuICAgICAgICAgICAgQGluaXRlZCA9IHRydWVcbiAgICAgICAgZWxzZSBpZiBjb25maWcuaW1nID0+XG4gICAgICAgICAgICBpZiBjb25maWdbXCJpbWctc2l6ZVwiXSA9PlxuICAgICAgICAgICAgICAgIHJldCA9IGNvbmZpZ1tcImltZy1zaXplXCJdLnNwbGl0KFxcLClcbiAgICAgICAgICAgICAgICBzaXplID0ge3dpZHRoOiArcmV0LjAsIGhlaWdodDogK3JldC4xfVxuICAgICAgICAgICAgZWxzZSBzaXplID0ge3dpZHRoOiAxMDAsIGhlaWdodDogMTAwfVxuXG4gICAgICAgICAgICBncm91cC4wID0gZG9tVHJlZSBcXGcsIHJlY3Q6IGF0dHI6XG4gICAgICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIG1hc2s6IFwidXJsKFxcIyN7aWQubWFza30pXCIsIGZpbGw6IGNvbmZpZ1tcImZpbGwtYmFja2dyb3VuZFwiXVxuICAgICAgICAgICAgc3ZnLnF1ZXJ5U2VsZWN0b3IgJ21hc2sgaW1hZ2UnIC5hdHRycyBkb1xuICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0XG4gICAgICAgICAgICBncm91cC4xID0gZG9tVHJlZSBcXGcsIGltYWdlOiBhdHRyOlxuICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0LCB4OiAwLCB5OiAwLCBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBjb25maWdbXCJhc3BlY3QtcmF0aW9cIl1cbiAgICAgICAgICAgICAgICAjd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIHg6IDAsIHk6IDAsIHByZXNlcnZlQXNwZWN0UmF0aW86IFwieE1pZFlNaWRcIlxuICAgICAgICAgICAgICAgIFwiY2xpcC1wYXRoXCI6IGlmIGNvbmZpZy50eXBlID09IFxcZmlsbCA9PiBcInVybChcXCMje2lkLmNsaXB9KVwiIGVsc2UgJydcbiAgICAgICAgICAgICAgICBcInhsaW5rOmhyZWZcIjogY29uZmlnLmltZywgY2xhc3M6IFxcc29saWRcbiAgICAgICAgICAgIGltZyA9IG5ldyBJbWFnZSFcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyIFxcbG9hZCwgfj5cbiAgICAgICAgICAgICAgICBpZiBjb25maWdbXCJpbWctc2l6ZVwiXSA9PlxuICAgICAgICAgICAgICAgICAgICByZXQgPSBjb25maWdbXCJpbWctc2l6ZVwiXS5zcGxpdChcXCwpXG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSB7d2lkdGg6ICtyZXQuMCwgaGVpZ2h0OiArcmV0LjF9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiBpbWcud2lkdGggYW5kIGltZy5oZWlnaHQgPT4gc2l6ZSA9IHt3aWR0aDogaW1nLndpZHRoLCBoZWlnaHQ6IGltZy5oZWlnaHR9XG4gICAgICAgICAgICAgICAgZWxzZSBzaXplID0ge3dpZHRoOiAxMDAsIGhlaWdodDogMTAwfVxuICAgICAgICAgICAgICAgIHN2Zy5xdWVyeVNlbGVjdG9yICdtYXNrIGltYWdlJyAuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHRcbiAgICAgICAgICAgICAgICBncm91cC4xLnF1ZXJ5U2VsZWN0b3IgJ2ltYWdlJyAuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHRcblxuICAgICAgICAgICAgICAgIEBmaXQhXG4gICAgICAgICAgICAgICAgQHNldCB1bmRlZmluZWQsIGZhbHNlXG4gICAgICAgICAgICAgICAgQGluaXRlZCA9IHRydWVcbiAgICAgICAgICAgIGltZy5zcmMgPSBjb25maWcuaW1nXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQgZ3JvdXAuMFxuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkIGdyb3VwLjFcbiAgICAgICAgc3ZnLmF0dHJzIHdpZHRoOiBcXDEwMCUsIGhlaWdodDogXFwxMDAlICMsIHZpZXdCb3g6ICcwIDAgMTAwIDEwMCdcblxuICAgICAgICBAdHJhbnNpdGlvbiA9XG4gICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICBzcmM6IDBcbiAgICAgICAgICAgICAgICBkZXM6IDBcbiAgICAgICAgICAgIHRpbWU6IHt9XG5cbiAgICAgICAgICAgIGVhc2U6ICh0LGIsYyxkKSAtPlxuICAgICAgICAgICAgICAgIHQgPSB0IC8gKGQgKiAwLjUpXG4gICAgICAgICAgICAgICAgaWYgdCA8IDEgPT4gcmV0dXJuIGMgKiAwLjUgKiB0ICogdCArIGJcbiAgICAgICAgICAgICAgICB0ID0gdCAtIDFcbiAgICAgICAgICAgICAgICByZXR1cm4gLWMgKiAwLjUgKiAodCoodCAtIDIpIC0gMSkgKyBiXG5cbiAgICAgICAgICAgIGhhbmRsZXI6ICh0aW1lLCBkb1RyYW5zaXRpb24gPSB0cnVlKSAtPlxuICAgICAgICAgICAgICAgIGlmICFAdGltZS5zcmM/ID0+IEB0aW1lLnNyYyA9IHRpbWVcbiAgICAgICAgICAgICAgICBbbWluLG1heCxwcmVjXSA9IFtjb25maWdbXCJtaW5cIl0sIGNvbmZpZ1tcIm1heFwiXSwxL2NvbmZpZ1tcInByZWNpc2lvblwiXV1cbiAgICAgICAgICAgICAgICBbZHYsIGR0LCBkdXJdID0gW0B2YWx1ZS5kZXMgLSBAdmFsdWUuc3JjLCAodGltZSAtIEB0aW1lLnNyYykgKiAwLjAwMSwgK2NvbmZpZ1tcImR1cmF0aW9uXCJdIG9yIDFdXG4gICAgICAgICAgICAgICAgdiA9IGlmIGRvVHJhbnNpdGlvbiA9PiBAZWFzZShkdCwgQHZhbHVlLnNyYywgZHYsIGR1cikgZWxzZSBAdmFsdWUuZGVzXG4gICAgICAgICAgICAgICAgaWYgY29uZmlnLnByZWNpc2lvbiA9PiB2ID0gTWF0aC5yb3VuZCh2ICogcHJlYykgLyBwcmVjXG4gICAgICAgICAgICAgICAgZWxzZSBpZiBkb1RyYW5zaXRpb24gPT4gdiA9IE1hdGgucm91bmQodilcbiAgICAgICAgICAgICAgICB2ID4/PSBtaW5cbiAgICAgICAgICAgICAgICB2IDw/PSBtYXhcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gdlxuICAgICAgICAgICAgICAgIHAgPSAxMDAuMCAqICh2IC0gbWluICkgLyAoIG1heCAtIG1pbiApXG4gICAgICAgICAgICAgICAgaWYgaXMtc3Ryb2tlID0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBwYXRoMVxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0cm9rZS1kYXNoYXJyYXlcIjogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIGNvbmZpZ1tcInN0cm9rZS1kaXJcIl0gPT0gXFxyZXZlcnNlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMCAje2xlbmd0aCAqICgxMDAgLSBwKSAqIDAuMDF9ICN7bGVuZ3RoICogcCAqIDAuMDF9IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgPT4gXCIje3AgKiAwLjAxICogbGVuZ3RofSAjeygxMDAgLSBwKSAqIDAuMDEgKiBsZW5ndGggKyAxfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBib3ggPSBncm91cC4xLmdldEJCb3ghXG4gICAgICAgICAgICAgICAgICAgIGRpciA9IGNvbmZpZ1tcImZpbGwtZGlyXCJdXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0gaWYgZGlyID09IFxcYnR0IG9yICFkaXIgPT4gZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJveC55ICsgYm94LmhlaWdodCAqICgxMDAgLSBwKSAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYm94LmhlaWdodCAqIHAgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCwgd2lkdGg6IGJveC53aWR0aFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGRpciA9PSBcXHR0YiA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnksIGhlaWdodDogYm94LmhlaWdodCAqIHAgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCwgd2lkdGg6IGJveC53aWR0aFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGRpciA9PSBcXGx0ciA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnksIGhlaWdodDogYm94LmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYm94LngsIHdpZHRoOiBib3gud2lkdGggKiBwICogMC4wMVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGRpciA9PSBcXHJ0bCA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnksIGhlaWdodDogYm94LmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYm94LnggKyBib3gud2lkdGggKiAoMTAwIC0gcCkgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYm94LndpZHRoICogcCAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHN2Zy5xdWVyeVNlbGVjdG9yIFxccmVjdFxuICAgICAgICAgICAgICAgIG5vZGUuYXR0cnMgc3R5bGVcbiAgICAgICAgICAgICAgICBpZiBkdCA+PSBkdXIgPT4gZGVsZXRlIEB0aW1lLnNyYzsgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIHN0YXJ0OiAoc3JjLCBkZXMsIGRvVHJhbnNpdGlvbikgLT5cbiAgICAgICAgICAgICAgICBAdmFsdWUgPDw8IHtzcmMsIGRlc31cbiAgICAgICAgICAgICAgICAhISggcm9vdC5vZmZzZXRXaWR0aCB8fCByb290Lm9mZnNldEhlaWdodCB8fCByb290LmdldENsaWVudFJlY3RzIWxlbmd0aCApXG4gICAgICAgICAgICAgICAgaWYgIWRvVHJhbnNpdGlvbiBvciAhKCByb290Lm9mZnNldFdpZHRoIHx8IHJvb3Qub2Zmc2V0SGVpZ2h0IHx8IHJvb3QuZ2V0Q2xpZW50UmVjdHMhbGVuZ3RoICkgPT5cbiAgICAgICAgICAgICAgICAgICAgQHRpbWUuc3JjID0gMFxuICAgICAgICAgICAgICAgICAgICBAaGFuZGxlciAxMDAwLCBmYWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICBoYW5kbGVyLmFkZCBpZC5rZXksICh0aW1lKSB+PiByZXR1cm4gQGhhbmRsZXIgdGltZVxuXG4gICAgICAgIEBzZXQgPSAodixkb1RyYW5zaXRpb24gPSB0cnVlKSAtPlxuICAgICAgICAgICAgc3JjID0gQHZhbHVlIG9yIDBcbiAgICAgICAgICAgIGlmIHY/ID0+IEB2YWx1ZSA9IHYgZWxzZSB2ID0gQHZhbHVlXG4gICAgICAgICAgICBkZXMgPSBAdmFsdWVcbiAgICAgICAgICAgIEB0cmFuc2l0aW9uLnN0YXJ0IHNyYywgZGVzLCBkb1RyYW5zaXRpb25cblxuICAgICAgICBAc2V0ICgrY29uZmlnLnZhbHVlIG9yIDApLCBjb25maWdbXCJ0cmFuc2l0aW9uLWluXCJdIG9yIGZhbHNlXG4gICAgICAgIEBcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIFxcbG9hZCwgKC0+XG4gICAgICAgIGZvciBub2RlIGluIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXFwubGRCYXIpID0+XG4gICAgICAgICAgaWYgIW5vZGUubGRCYXIgPT4gbm9kZS5sZEJhciA9IG5ldyBsZEJhciBub2RlXG4gICAgKSwgZmFsc2VcblxubW9kdWxlLmV4cG9ydHMgPSBsZEJhclxuIiwiZXhwb3J0IHByZXNldHMgPVxuICAgIHJhaW5ib3c6XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ00xMCAxMEw5MCAxMCdcbiAgICAgICAgXCJzdHJva2VcIjogJ2RhdGE6bGRiYXIvcmVzLGdyYWRpZW50KDAsMSwjYTU1MWRmLCNmZDUxYWQsI2ZmN2Y4MiwjZmZiODc0LCNmZmViOTApJ1xuICAgICAgICBcImJib3hcIjogXCIxMCAxMCA4MCAxMFwiXG4gICAgZW5lcmd5OlxuICAgICAgICBcInR5cGVcIjogJ2ZpbGwnXG4gICAgICAgIFwicGF0aFwiOiAnTTE1IDVMODUgNUE1IDUgMCAwIDEgODUgMTVMMTUgMTVBNSA1IDAgMCAxIDE1IDUnXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcI2YwMFxuICAgICAgICBcImZpbGxcIjogJ2RhdGE6bGRiYXIvcmVzLGdyYWRpZW50KDQ1LDIsIzRlOSwjOGZiLCM0ZTkpJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFwibHRyXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjNDQ0XG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMVxuICAgICAgICBcImJib3hcIjogXCIxMCA1IDgwIDEwXCJcbiAgICBzdHJpcGU6XG4gICAgICAgIFwidHlwZVwiOiAnZmlsbCdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTUgNUw4NSA1QTUgNSAwIDAgMSA4NSAxNUwxNSAxNUE1IDUgMCAwIDEgMTUgNSdcbiAgICAgICAgXCJzdHJva2VcIjogXFwjZjAwXG4gICAgICAgIFwiZmlsbFwiOiAnZGF0YTpsZGJhci9yZXMsc3RyaXBlKCMyNWIsIzU4ZSwxKSdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcImx0clwiXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDFcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgNSA4MCAxMFwiXG4gICAgdGV4dDpcbiAgICAgICAgXCJ0eXBlXCI6ICdmaWxsJ1xuICAgICAgICBcImltZ1wiOiBcIlwiXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI3MFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCA3MCAyMFwiPjx0ZXh0IHg9XCIzNVwiIHk9XCIxMFwiIHRleHQtYW5jaG9yPVwibWlkZGxlXCIgZG9taW5hbnQtYmFzZWxpbmU9XCJjZW50cmFsXCIgZm9udC1mYW1pbHk9XCJhcmlhbFwiPkxPQURJTkc8L3RleHQ+PC9zdmc+XCJcIlwiXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMS4zXG4gICAgICAgIFwicGF0dGVybi1zaXplXCI6IDEwMFxuICAgICAgICBcImZpbGwtZGlyXCI6IFwibHRyXCJcbiAgICAgICAgXCJpbWctc2l6ZVwiOiBcIjcwLDIwXCJcbiAgICAgICAgXCJiYm94XCI6IFwiMCAwIDcwIDIwXCJcbiAgICBsaW5lOlxuICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTAgMTBMOTAgMTAnXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiAzXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsXCI6IFxcI2RkZFxuICAgICAgICBcInN0cm9rZS10cmFpbC13aWR0aFwiOiAxXG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDEwIDgwIDEwXCJcbiAgICBmYW46XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ00xMCA5MEE0MCA0MCAwIDAgMSA5MCA5MCdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICBcImZpbGxcIjogXFwjMjViXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDNcbiAgICAgICAgXCJzdHJva2UtZGlyXCI6IFxcbm9ybWFsXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICBcImJib3hcIjogXCIxMCA1MCA4MCA0MFwiXG4gICAgY2lyY2xlOlxuICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgXCJwYXRoXCI6ICdNNTAgMTBBNDAgNDAgMCAwIDEgNTAgOTBBNDAgNDAgMCAwIDEgNTAgMTAnXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXFxidHRcbiAgICAgICAgXCJmaWxsXCI6IFxcIzI1YlxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiBcXCNkZGRcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAzXG4gICAgICAgIFwic3Ryb2tlLWRpclwiOiBcXG5vcm1hbFxuICAgICAgICBcInN0cm9rZVwiOiBcXCMyNWJcbiAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXFwzXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsXCI6IFxcI2RkZFxuICAgICAgICBcInN0cm9rZS10cmFpbC13aWR0aFwiOiAwLjVcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgMTAgODAgODBcIlxuICAgIGJ1YmJsZTpcbiAgICAgICAgXCJ0eXBlXCI6ICdmaWxsJ1xuICAgICAgICBcInBhdGhcIjogJ001MCAxMEE0MCA0MCAwIDAgMSA1MCA5MEE0MCA0MCAwIDAgMSA1MCAxMCdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICBcImZpbGxcIjogJ2RhdGE6bGRiYXIvcmVzLGJ1YmJsZSgjMzlkLCNjZWYpJ1xuICAgICAgICBcInBhdHRlcm4tc2l6ZVwiOiBcIjE1MFwiXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDJcbiAgICAgICAgXCJzdHJva2UtZGlyXCI6IFxcbm9ybWFsXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICBcImJib3hcIjogXCIxMCAxMCA4MCA4MFwiXG4iLCIvL2TDqWZpbml0aW9uIGRlcyB2YXJpYWJsZXNcclxubGV0IExpc3RlUGx1ZyA9IFtdLFxyXG4gICAgaSA9IDAsXHJcbiAgICB2YWxpZCA9IGZhbHNlO1xyXG5cclxuLy8gRGVjbGFyYXRpb24gZCfDqXZlbmVtZW50IGF2YW50IGNoYXJnZW1lbnQgZGUgbCBhcGFnZVxyXG4kKCcjdmFsaWQtYWxsLXBsdWcnKS5oaWRlKCk7XHJcbiQoJyNjYW5jZWwtYWxsLXBsdWcnKS5oaWRlKCk7XHJcbi8vZGV0ZWN0aW9uIHNpIGxlIGJyb3dzZXIgZ8OocmUgbGUgZHJhZyZkcm9wXHJcbnZhciBpc0FkdmFuY2VkVXBsb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmV0dXJuICgoJ2RyYWdnYWJsZScgaW4gZGl2KSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiBkaXYgJiYgJ29uZHJvcCcgaW4gZGl2KSkgJiYgJ0Zvcm1EYXRhJyBpbiB3aW5kb3cgJiYgJ0ZpbGVSZWFkZXInIGluIHdpbmRvdztcclxufSgpO1xyXG52YXIgJGZvcm0gPSAkKCcuYm94Jyk7XHJcbnZhciAkaW5wdXQgPSAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLFxyXG4gICAgJGxhYmVsID0gJGZvcm0uZmluZCgnbGFiZWwnKSxcclxuICAgIHNob3dGaWxlcyA9IGZ1bmN0aW9uIChmaWxlcykge1xyXG4gICAgICAgICRsYWJlbC50ZXh0KGZpbGVzLmxlbmd0aCA+IDEgPyAoJGlucHV0LmF0dHIoJ2RhdGEtbXVsdGlwbGUtY2FwdGlvbicpIHx8ICcnKS5yZXBsYWNlKCd7Y291bnR9JywgZmlsZXMubGVuZ3RoKSA6IGZpbGVzWzBdLm5hbWUpO1xyXG4gICAgfTtcclxuLy9pZGVudGlmaWNhdGlvbiBkZSBsYSBwcm9ncmVzcyBiYXJcclxucHJnYmFyID0gbmV3IGxkQmFyKFwiI3Rlc3QtcHJvZ3Jlc3NcIik7XHJcbi8vYWpvdXRlciB1biBwbHVnXHJcblxyXG4kKCcjYWRkLWZvcm0tcGx1ZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICQoJyNjYXJkLWNvbnRlbnQtcGx1ZycpLmFwcGVuZChcInRlc3RcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZygkKCcuY29udGVudC1uYW1lLWRyYWctcGx1ZycpKVxyXG5cclxuICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICQoJyNpbnB1dC1uYW1lLXBsdWcnKS52YWwoJycpO1xyXG4gICAgICAgIGRyb3BwZWRGaWxlcyA9IGZhbHNlO1xyXG4gICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy1zdWNjZXNzJyk7XHJcbiAgICAgICAgJCgnLmxhYmVsLWRyb3AnKS5jc3MoJ2ZvbnQtd2VpZ2h0JywgJycpO1xyXG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykuaHRtbCgnPHN0cm9uZz4gQ2hvb3NlIGEgZmlsZSA8L3N0cm9uZz4gPHNwYW4gY2xhc3M9XCJib3hfX2RyYWduZHJvcFwiPm9yIGRyYWcgaXQgaGVyZSA8L3NwYW4+LjwvbGFiZWw+Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtbmFtZS1kcmFnLXBsdWcnKS5zaG93KCk7XHJcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbn0pXHJcbi8vb24gb3V2cmUgbGUgZm9ybSBwb3VyIGFqb3V0ZXJcclxuXHJcbiQoJyNhZGRQbHVncycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG59KTtcclxuaWYgKGlzQWR2YW5jZWRVcGxvYWQpIHtcclxuICAgIHZhciBkcm9wcGVkRmlsZXMgPSBmYWxzZTtcclxuICAgICRmb3JtLmFkZENsYXNzKCdoYXMtYWR2YW5jZWQtdXBsb2FkJyk7IC8vIGxldHRpbmcgdGhlIENTUyBwYXJ0IHRvIGtub3cgZHJhZyZkcm9wIGlzIHN1cHBvcnRlZCBieSB0aGUgYnJvd3NlclxyXG4gICAgJGZvcm0ub24oJ2RyYWcgZHJhZ3N0YXJ0IGRyYWdlbmQgZHJhZ292ZXIgZHJhZ2VudGVyIGRyYWdsZWF2ZSBkcm9wJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG4gICAgJGZvcm0ub24oJ2RyYWdvdmVyIGRyYWdlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkZm9ybS5hZGRDbGFzcygnaXMtZHJhZ292ZXInKTtcclxuICAgIH0pO1xyXG4gICAgJGZvcm0ub24oJ2RyYWdsZWF2ZSBkcmFnZW5kIGRyb3AnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJGZvcm0ucmVtb3ZlQ2xhc3MoJ2lzLWRyYWdvdmVyJyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAkZm9ybS5vbignZHJvcCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgICAgICAkZm9ybS50cmlnZ2VyKCdzdWJtaXQnKTtcclxuICAgICAgICAkKCcubGFiZWwtZHJvcCcpLnRleHQoZHJvcHBlZEZpbGVzWzBdLm5hbWUpO1xyXG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykuY3NzKCdmb250LXdlaWdodCcsICdib2xkJyk7XHJcbiAgICB9KTtcclxuICAgICRmb3JtLmNoYW5nZSgnZHJvcCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgICAgICAkZm9ybS50cmlnZ2VyKCdzdWJtaXQnKTtcclxuICAgIH0pO1xyXG59XHJcbiRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJyN2YWxpZC1wbHVnJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgUGx1ZyA9IHt9O1xyXG4gICAgaWYgKCQoJyNpbnB1dC1uYW1lLXBsdWcnKS52YWwoKSAhPSBcIlwiICYmIGRyb3BwZWRGaWxlcykge1xyXG5cclxuICAgICAgICAkKCcjdmFsaWQtYWxsLXBsdWcnKS5zaG93KCk7XHJcbiAgICAgICAgJCgnI2NhbmNlbC1hbGwtcGx1ZycpLnNob3coKTtcclxuXHJcbiAgICAgICAgUGx1Z1snbmFtZV9wbHVnJ10gPSAkKCcjaW5wdXQtbmFtZS1wbHVnJykudmFsKCk7XHJcblxyXG4gICAgICAgIC8vIFBhcnRpIGR1IHRyYWl0ZW1lbnQgZHUgZHJhZyBhbiBkcm9wIGZpbGVcclxuICAgICAgICBpZiAoJGZvcm0uaGFzQ2xhc3MoJ2lzLXVwbG9hZGluZycpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc2hvd0ZpbGVzKGRyb3BwZWRGaWxlcyk7XHJcbiAgICAgICAgJGZvcm0uYWRkQ2xhc3MoJ2lzLXVwbG9hZGluZycpLnJlbW92ZUNsYXNzKCdpcy1lcnJvcicpO1xyXG5cclxuICAgICAgICBpZiAoaXNBZHZhbmNlZFVwbG9hZCkge1xyXG4gICAgICAgICAgICB2YXIgYWpheERhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm0uZ2V0KDApKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkcm9wcGVkRmlsZXMpIHtcclxuICAgICAgICAgICAgICAgICQuZWFjaChkcm9wcGVkRmlsZXMsIGZ1bmN0aW9uIChpLCBmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWpheERhdGEuYXBwZW5kKCRpbnB1dC5hdHRyKCduYW1lJyksIGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIFBsdWdbJ2tleV9wbHVnJ10gPSBmaWxlLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWpheERhdGEpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS91cGxvYWRGaWxlJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIC8qZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICdmaWxlJyA6IGFqYXhEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICdidWNrZXQnOiAnYXBwbGljYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICd1cGxvYWRfcmVxdWVzdCc6IFwidXBsb2FkXCJcclxuICAgICAgICAgICAgICAgIH0sKi9cclxuICAgICAgICAgICAgICAgIHhocjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldnQubG9hZGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC5sZW5ndGhDb21wdXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGVyY2VudENvbXBsZXRlID0gKGV2dC5sb2FkZWQgLyBldnQudG90YWwpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9EbyBzb21ldGhpbmcgd2l0aCB1cGxvYWQgcHJvZ3Jlc3MgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJnYmFyLnNldChwZXJjZW50Q29tcGxldGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBlcmNlbnRDb21wbGV0ZSA9PSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Rlc3QtcHJvZ3Jlc3NcIikuYWRkQ2xhc3MoJ2lzLWJsaW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZ0LmxvYWRlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnRvdGFsID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geGhyO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBhamF4RGF0YSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy11cGxvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3Rlc3QtcHJvZ3Jlc3NcIikucmVtb3ZlQ2xhc3MoJ2lzLWJsaW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVQbHVnLnB1c2goUGx1Zyk7XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVQbHVnLmZvckVhY2god3JpdGVQbHVnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSA/ICdpcy1zdWNjZXNzJyA6ICdpcy1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNjb250ZW50LW5hbWUtZHJhZy1wbHVnJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhMaXN0ZVBsdWcpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExvZyB0aGUgZXJyb3IsIHNob3cgYW4gYWxlcnQsIHdoYXRldmVyIHdvcmtzIGZvciB5b3VcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvcnJ5IGJvYnlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBpZnJhbWVOYW1lID0gJ3VwbG9hZGlmcmFtZScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgJGlmcmFtZSA9ICQoJzxpZnJhbWUgbmFtZT1cIicgKyBpZnJhbWVOYW1lICsgJ1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2lmcmFtZT4nKTtcclxuXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJGlmcmFtZSk7XHJcbiAgICAgICAgICAgICRmb3JtLmF0dHIoJ3RhcmdldCcsIGlmcmFtZU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgJGlmcmFtZS5vbmUoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoJGlmcmFtZS5jb250ZW50cygpLmZpbmQoJ2JvZHknKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgJGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLXVwbG9hZGluZycpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGRhdGEuc3VjY2VzcyA9PSB0cnVlID8gJ2lzLXN1Y2Nlc3MnIDogJ2lzLWVycm9yJylcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cigndGFyZ2V0Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuc3VjY2VzcykgJGVycm9yTXNnLnRleHQoZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcclxuICAgICAgICAgICAgICAgICRpZnJhbWUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBuYW1lICYgZmlsZSBwbHVnJylcclxuICAgIH1cclxuXHJcblxyXG59KVxyXG5cclxuJCgnI3Rlc3QtdXBsb2FkJykub24oXCJjbGlja1wiLCBcImJ1dHRvblwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZmlsZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKS5maWxlcztcclxuICAgIHZhciB0ZW1wRGVzdGluYXRpb24gPSBcInRlc3RcIlxyXG4gICAgdmFyIG5hbWVGaWxlID0gXCJpbml0XCJcclxuICAgIHZhciB1cGxvYWRTdGF0dXMgPSBcIlBFTkRJTkdcIlxyXG4gICAgLy9PbiBkcmFnIGV0IGRyb3BcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9yZXF1ZXN0RmlsZScsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgJ2J1Y2tldCc6ICdhcHBsaWNhdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdGVtcERlc3RpbmF0aW9uID0gcmVzcG9uc2UucGF0aFxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS91cGxvYWRGaWxlJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAnYnVja2V0JzogJ2FwcGxpY2F0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAndXBsb2FkX3JlcXVlc3QnOiBcInVwbG9hZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdmaWxlbmFtZSc6IG5hbWVGaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICd0ZW1wRGVzdGluYXRpb24nOiB0ZW1wRGVzdGluYXRpb25cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYXNrIGZvciB0aGUgc3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4kKCcjdmFsaWQtYWxsLXBsdWcnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLm1haW4tYmFzZWxpbmUnKS5jc3MoJ29wYWNpdHknLCBcIjAuNFwiKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICBsZXQgaWRCYXNlbGluZSA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9mbHVzaC1wbHVnJyxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAnaWRCYXNlbGluZSc6IGlkQmFzZWxpbmUsXHJcbiAgICAgICAgICAgICdQbHVncyc6IExpc3RlUGx1Z1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAvL2FzayBmb3IgdGhlIHN0YXR1c1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuJCgnI3NlZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL3NlZUZpbGUnLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAvL2FzayBmb3IgdGhlIHN0YXR1c1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5cclxuLy9Hw6lyZSBsZSBjbGlxdWUgZGUgbGEgc3VwcHJlc3Npb25cclxuJCgnI3Nob3ctZG9uZS1wbHVnJykub24oJ2NsaWNrJywgJy5jb250ZW50LWtleS1uYW1lLXBsdWcgPiBhJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcylbMF1bXCJpZFwiXVswXSA9PSBcImRcIikge1xyXG4gICAgICAgIGRlbGV0ZVBsdWcoZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiaWRcIl0pKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpWzBdW1wiaWRcIl0pO1xyXG4gICAgfVxyXG59KTtcclxuLy9FeHRyYWl0IGxlIG5vbWJyZSBkJ3VuZSBzdHJlaW5nXHJcbmZ1bmN0aW9uIGV4dHJhaXROb21icmUoc3RyKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyKHN0ci5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIikpXHJcbn1cclxuLy9TdXByZXNzaW9uIGR1IHBsdWcgZGFucyBsZSB0YWJsZWF1IGV0IGxlIGZyb250XHJcbmZ1bmN0aW9uIGRlbGV0ZVBsdWcocG9zaXRpb24pIHtcclxuICAgIExpc3RlUGx1Zy5zcGxpY2UocG9zaXRpb24sIDEpO1xyXG4gICAgJCgnLmNvbnRlbnQta2V5LW5hbWUtcGx1ZycpLnJlbW92ZSgpO1xyXG4gICAgY29uc29sZS5sb2coTGlzdGVQbHVnKVxyXG4gICAgTGlzdGVQbHVnLmZvckVhY2god3JpdGVQbHVnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gd3JpdGVQbHVnKGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG4gICAgLy9UZXN0IGwnZXhpc3RlbmNlIGRlIGxhIGRpdiBkYW5zIGxlIGNhcyBvw7kgZWxsZSBleGlzdGUgbGEgcmVtcGxhY2Ugc2kgcGFzIGxhIG1ldCBlbiBwbGFjZVxyXG4gICAgaWYgKCQoJyNrZXktbmFtZS0nICsgaW5kZXgpLmxlbmd0aCkge1xyXG4gICAgICAgICQoJyNrZXktbmFtZS0nICsgaW5kZXgpLnJlcGxhY2VXaXRoKFwiPHNwYW4gY2xhc3M9J2NvbnRlbnQta2V5LW5hbWUtcGx1ZycgaWQ9J2tleS1uYW1lLVwiICsgaW5kZXggKyBcIic+PHA+XCIgKyBlbGVtZW50Lm5hbWVfcGx1ZyArIFwiPC9wPjxwPlwiICsgZWxlbWVudC5rZXlfcGx1ZyArIFwiPC9wPjxhIGlkPSdkZWxldGUtcGx1Zy1cIiArIGluZGV4ICsgXCInPjxpIGNsYXNzPSdmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlJz48L2k+PC9hPjwvc3Bhbj5cIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI3Nob3ctZG9uZS1wbHVnJykuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J2NvbnRlbnQta2V5LW5hbWUtcGx1ZycgaWQ9J2tleS1uYW1lLVwiICsgaW5kZXggKyBcIic+PHA+XCIgKyBlbGVtZW50Lm5hbWVfcGx1ZyArIFwiPC9wPjxwPlwiICsgZWxlbWVudC5rZXlfcGx1ZyArIFwiPC9wPjxhIGlkPSdkZWxldGUtcGx1Zy1cIiArIGluZGV4ICsgXCInPjxpIGNsYXNzPSdmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlJz48L2k+PC9hPjwvc3Bhbj5cIik7XHJcbiAgICB9XHJcblxyXG59IiwiLy8gVmlkYWdlIGRlcyBpbnB1dHMgYXV4IGNoYW5nZW1lbnQgZGUgc2VsZWN0XHJcbi8vICQoJ3NlbGVjdFtuYW1lPVwidHJhaW5zW3Byb2plY3RzXVwiXSwgc2VsZWN0W25hbWU9XCJ0cmFpbnNbdHJhaW5UeXBlXVwiXScpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAkKCdpbnB1dFtuYW1lPVwidHJhaW5zW25hbWVdXCJdJykudmFsKCcnKTtcclxuLy8gfSk7XHJcblxyXG4vKk1hc3F1YWdlIGRlIGNlcnRhaW5zIMOpbGVtZW50ICovXHJcbiQoJyNjcmVhdGUtZXJ0bXMtMScpLmhpZGUoKTtcclxuJCgnI2NyZWF0ZS1lcnRtcy0yJykuaGlkZSgpO1xyXG4kKFwiI2NyZWF0ZS1lcnRtcy10cmFpbi0xXCIpLmhpZGUoKTtcclxuJCgnI2NyZWF0ZV9zb3VzdHlwZScpLmhpZGUoKTtcclxuJCgnI2NyZWF0ZV90eXBlJykuaGlkZSgpO1xyXG4kKCcjbW9kYWwtYm9keScpLmhpZGUoKTtcclxuJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiQoJyNjbG9zZS1tb2RhbC1mb3JtLWJhc2VsaW5lLXRyYWluJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbn0pXHJcbmZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLScgKyBpKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG59XHJcbmxldCBpZEVxdWlwbWVudCA9IFwiXCIsXHJcbiAgICBpbmRleEVWQztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBub21icmVfdXJsID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hbHN0b20vSW5zdGFuY2VCYXNlbGluZS8nICsgbm9tYnJlX3VybCkge1xyXG5cclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrQmFzZWxpbmVcIiwgKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgJCgnI3NlbGVjdF9iYXNlbGluZV8xJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VsZWN0X2Jhc2VsaW5lXzInKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICQoJyNzZWxlY3RfYmFzZWxpbmVfMScpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICQoJyNzZWxlY3RfYmFzZWxpbmVfMicpLnZhbCgnJyk7XHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG4kKCcjc2VsZWN0X3RyYWluJykuc2hvdygpO1xyXG4kKCcjc2VsZWN0X2xvY29tb3RpdmUnKS5zaG93KCk7XHJcblxyXG5sZXQgY3VycmVudF9jaG9pY2UgPSBcIlwiLFxyXG4gICAgZXJ0bXNfbGVmdCA9IGZhbHNlLFxyXG4gICAgZXJ0bXNfbWlkZGxlID0gZmFsc2UsXHJcbiAgICBlcnRtc19yaWdodCA9IGZhbHNlO1xyXG5cclxuJCgnI2Nsb3NlLW1vZGFsLWJhc2VsaW5lLTEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZXJ0bXNfcmlnaHQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmFkZENsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgZXJ0bXNfbGVmdCA9IGZhbHNlO1xyXG59KVxyXG4kKCcjY2xvc2UtbW9kYWwtYmFzZWxpbmUtMicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmhpZGUoKTtcclxuICAgIGVydG1zX3JpZ2h0ID0gZmFsc2U7XHJcbn0pXHJcbiQoJyNlcnRtcy10cmFpbi0xJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZXJ0bXNfbGVmdCA9IHRydWU7XHJcbiAgICBlcnRtc19taWRkbGUgPSBmYWxzZTtcclxuICAgIC8vbCdlcnRtcyBkZSBnYXVjaGUgc2VsZWN0aW9ubmVyXHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMScpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMScpLnRleHQoJ0Jhc2VsaW5lIGxlZnQnKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtMycpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuc2hvdygpO1xyXG4gICAgaWYgKGVydG1zX3JpZ2h0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuaGlkZSgpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG4kKCcjZXJ0bXMtdHJhaW4tMicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGwnZXJ0bXMgZHUgbWlsaWV1IHNlbGVjdGlvbm5lclxyXG4gICAgZXJ0bXNfbGVmdCA9IGZhbHNlO1xyXG4gICAgZXJ0bXNfcmlnaHQgPSBmYWxzZTtcclxuICAgIGVydG1zX21pZGRsZSA9IHRydWU7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMScpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMycpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMScpLnRleHQoJ0Jhc2VsaW5lIG1pZGxlJyk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5oaWRlKCk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5zaG93KCk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5hZGRDbGFzcygnb2Zmc2V0LW1kLTMnKTtcclxuXHJcbn0pO1xyXG4kKCcjZXJ0bXMtdHJhaW4tMycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGwnZXJ0bXMgZGUgZHJvaXRlIHNlbGVjdGlvbm5lclxyXG4gICAgJCgnI2VydG1zLXRyYWluLTMnKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgZXJ0bXNfcmlnaHQgPSB0cnVlO1xyXG4gICAgZXJ0bXNfbWlkZGxlID0gZmFsc2U7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMicpLnRleHQoJ0Jhc2VsaW5lIHJpZ2h0Jyk7XHJcbiAgICBpZiAoZXJ0bXNfbGVmdCA9PSB0cnVlICYmIGVydG1zX21pZGRsZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtMycpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuICAgIH0gZWxzZSBpZiAoZXJ0bXNfcmlnaHQgPT0gdHJ1ZSAmJiBlcnRtc19sZWZ0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC0zJyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmFkZENsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbn0pO1xyXG5cclxuXHJcbiQoJyNlcnRtcy1sb2NvLTEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlcnRtc19sZWZ0ID0gdHJ1ZTtcclxuICAgIGlmIChlcnRtc19yaWdodCA9PSB0cnVlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5zaG93KCk7XHJcbiAgICB9XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMScpLnRleHQoJ0Jhc2VsaW5lIGxlZnQnKTtcclxuICAgICQoJyNlcnRtcy1sb2NvLTEnKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLWxvY28tMicpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTEnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0zJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxufSk7XHJcbiQoJyNlcnRtcy1sb2NvLTInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlcnRtc19yaWdodCA9IHRydWU7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMicpLnRleHQoJ0Jhc2VsaW5lIHJpZ2h0Jyk7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTMnKS5jc3MoJ29wYWNpdHknLCAnMScpXHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTEnKS5jc3MoJ29wYWNpdHknLCAnMCcpXHJcbiAgICAkKCcjZXJ0bXMtbG9jby0yJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy1sb2NvLTEnKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgaWYgKGVydG1zX2xlZnQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG5cclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmFkZENsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbi8vUmVjdXBlcmUgbGUgc2VsZWN0IGRlIGxhIGJhc2VsaW5lIGV0IGxlIG1ldCBlbiB2aXN1ZWxcclxuJCgnI2FkZC1iYXNlbGluZS0xJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgaWYgKGVydG1zX21pZGRsZSkge1xyXG4gICAgICAgICQoJyNlcnRtcy10cmFpbi0zJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICAkKCcjZXJ0bXMtdHJhaW4tMScpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICB9IGVsc2UgaWYgKGVydG1zX2xlZnQpIHtcclxuICAgICAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICB9XHJcbiAgICAvLyAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICBsZXQgaWRCYXNlbGluZSA9ICQoJyNzZWxlY3RfYmFzZWxpbmVfMSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgICQoJyN0aXRsZV9iYXNlbGluZV9tb2RhbCcpLmh0bWwoJCgnI3NlbGVjdF9iYXNlbGluZV8xIG9wdGlvbjpzZWxlY3RlZCcpLnRleHQoKSk7XHJcbiAgICAvLyAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9DaGVja0VxdWlwZW1lbnRzLycgKyBpZEJhc2VsaW5lLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgJzAuNCcpO1xyXG4gICAgICAgICAgICBsZXQgRXF1aXBtZW50cyA9IEpTT04ucGFyc2UocmVzcG9uc2UuZXF1aXBtZW50cyk7XHJcblxyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLmZvckVhY2goQ291bnROdW1iZXJFcXVpcHQpO1xyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLmZvckVhY2goRmluZEluZGV4RXZjKTtcclxuICAgICAgICAgICAgRXF1aXBtZW50cy5mb3JFYWNoKHJldHVybkluZGV4RWxlbWVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuXHJcbiQoJyNhZGQtYmFzZWxpbmUtMicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcblxyXG4gICAgLy8gJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgbGV0IG5hbWVfYmFzZWxpbmVfMSA9ICQoJyNzZWxlY3RfYmFzZWxpbmVfMiBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgIGNvbnNvbGUubG9nKG5hbWVfYmFzZWxpbmVfMSlcclxuICAgIC8vICQoJyNjb250ZW50LW5hbWUtYmFzZWxpbmUtMScpLmFwcGVuZChcIjxoNT5cIiArIG5hbWVfYmFzZWxpbmVfMSArIFwiPC9oNT5cIilcclxuXHJcbn0pXHJcblxyXG4vLyBSZXF1ZXRlIEFKQVggcG91ciByZW1wbGlyIGxlIGZvcm11bGFpcmUgZCfDqXF1aXBlbWVudCBhdmVjIGwnZXF1aXBlbWVudCBzZWxlY3Rpb25uZXJcclxuJCgnI3Nob3ctZXF1aXBtZW50ICcpLm9uKCdjbGljaycsICcuZGVzY3JpcHRpb24gPiAuY29udGVudC1kZXNjcmlwdGlvbi1kdHIgPiBidXR0b24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICBpZEVxdWlwbWVudCA9IGV4dHJhaXROb21icmUoJCh0aGlzKVswXVtcImlkXCJdKVxyXG4gICAgdmFyICR0aGlzID0gJChcIiNmb3JtX2VxdWlwZW1lbnRfZWRpdF9iYXNlbGluZVwiKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LWJhc2VsaW5lLycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwocmVzcG9uc2VbXCJ0eXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICBkYXRhWyQoJyNlcXVpcGVtZW50X1R5cGUnKS5hdHRyKCduYW1lJyldID0gJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGkgaW5wdXQgYXZlYyB2YWxldXIgcmVjdSBkZSBsJ2VxdWlwZW1lbnRcclxuICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfVHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9zb3VzX3R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW1wiU291c1R5cGVcIl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIlNvdXNUeXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfRFRSX2JvYXJkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImRUUkJvYXJkXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfSW5kaWNlX0RUUic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJpbmRpY2VEVFJcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9OdW1fc2VyaWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wibnVtU2VyaWVcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbi8vUmVtcGxpciBsZXMgaW5wdXRzIGF2ZWMgbGVzIG5vdXZlbGxlcyB2YWxldXJzXHJcbiQoJyNzb3VtaXNzaW9uLWVxdWlwZW1lbnQtZWRpdC1iYXNlbGluZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbn0pXHJcbmxldCBuZXdfZXF1aXBtZW50X251bSA9IFwiXCIsXHJcbiAgICB0b3RhbEVxdWlwdCA9IFwiXCIsXHJcbiAgICBuZXdfZXF1aXBtZW50X251bV9zZXJpZSA9IFtdO1xyXG5cclxuLy8gU291bWlzc2lvbiBmb3JtdWxhaXJlIGRlIHRyYWluXHJcbiQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdF9iYXNlbGluZScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG5cclxuICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICB9KVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC1iYXNlbGluZS8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBlcXVpcGVtZW50OiBkYXRhXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnI2J0bi1hZGQtbnVtYmVyLXNlcmllJyArIGlkRXF1aXBtZW50KS5yZXBsYWNlV2l0aChcIjxwPlwiICsgcmVzcG9uc2UubnVtU2VyaWUgKyBcIjwvcD5cIilcclxuICAgICAgICAgICAgbmV3X2VxdWlwbWVudF9udW1fc2VyaWUucHVzaChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG5ld19lcXVpcG1lbnRfbnVtKys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG4vL1ZhbGlkZXIgbCdpbnN0YW5jZSBkZXMgZXF1aXBlbWVudHNcclxuJCgnI3ZhbGlkLWJhc2VsaW5lLXRyYWluJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKG5ld19lcXVpcG1lbnRfbnVtICE9IHRvdGFsRXF1aXB0KSB7XHJcbiAgICAgICAgYWxlcnQoJ3BsZWFzZSBlbnRlciBudW0gc2VyaWUgYmVmb3JlIGluc3RhbmNlIGJhc2VsaW5lJylcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGxldCBpZF90cmFpbiA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICBsZXQgaWRfYmFzZWxpbmUgPSAkKCcjc2VsZWN0X2Jhc2VsaW5lXzEgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS9hZGRCYXNlbGluZUluc3RhbmNpZXInLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkX3RyYWluOiBpZF90cmFpbixcclxuICAgICAgICAgICAgICAgIGJhc2VsaW5lOiBpZF9iYXNlbGluZSxcclxuICAgICAgICAgICAgICAgIG5ld19lcXVpcHQ6IG5ld19lcXVpcG1lbnRfbnVtX3NlcmllXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2Fsc3RvbS9iYXNlbGluZS10cmFpbi9cIiArIHJlc3BvbnNlLmlkYmFzZWxpbmU7XHJcbiAgICAgICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KVxyXG4vLyBSZXF1ZXRlIEFKQVggcG91ciByZW1wbGlyIGxlIGZvcm11bGFpcmUgZCfDqXF1aXBlbWVudCBhdmVjIGwnZXF1aXBlbWVudCBzZWxlY3Rpb25uZXIgaW5zdGFuY2llclxyXG4kKCcuY2FyZCcpLm9uKCdjbGljaycsICcuZWRpdC1kZWxldGUtZXF1aXBlbWVudCA+IGEnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgaWRFcXVpcG1lbnQgPSBleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJjbGFzc0xpc3RcIl1bMF0pXHJcbiAgICB2YXIgJHRoaXMgPSAkKFwiI2Zvcm1fZXF1aXBlbWVudF9lZGl0X2luc3RhbmNlXCIpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQtaW5zdGFuY2UvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKHJlc3BvbnNlW1widHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgZGF0YVskKCcjZXF1aXBlbWVudF9UeXBlJykuYXR0cignbmFtZScpXSA9ICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpIGlucHV0IGF2ZWMgdmFsZXVyIHJlY3UgZGUgbCdlcXVpcGVtZW50XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X1R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfc291c190eXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVtcIlNvdXNUeXBlXCJdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJTb3VzVHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0RUUl9ib2FyZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJkVFJCb2FyZFwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0luZGljZV9EVFInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiaW5kaWNlRFRSXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfTnVtX3NlcmllJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIm51bVNlcmllXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4vL0Zvcm11bGFpcmUgZCdlZGl0IGRlIGwnw6lxdWlwZW1lbnRcclxuJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0X2luc3RhbmNlJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0JykuY3NzKFwib3BhY2l0eVwiLCBcIjAuNFwiKTtcclxuXHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge30sXHJcbiAgICAgICAgYWN0aW9uO1xyXG4gICAgLy9SZW1wbGkgZGF0YSBhIHBhcnRpciBkZXMgdmFsZXVyIGRlcyBpbnB1dHNcclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpXHJcblxyXG4gICAgICAgIGlmIChuYW1lICE9IChcImVxdWlwZW1lbnRbX3Rva2VuXVwiKSAmJiBuYW1lICE9IChcInNvdW1pc3Npb25fZXF1aXBlbWVudFwiKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LWluc3RhbmNlLycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAnZXF1aXBlbWVudCc6IGRhdGEsXHJcbiAgICAgICAgICAgIFwic291bWlzc2lvbl9lZGl0X2VxdWlwZW1lbnRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgJ2lkZXF1aXBtZW50JzogaWRFcXVpcG1lbnRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBGaW5kSW5kZXhFdmMoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICBpbmRleCA9IGVsZW1lbnRbJ2lkJ107XHJcbiAgICBpZiAoZWxlbWVudFsndHlwZSddWydpZCddID09IFwiMVwiICYmIChlbGVtZW50WydTdGF0dXMnXSA9PSB0cnVlKSkge1xyXG5cclxuICAgICAgICAkKFwiI3Nob3ctZXF1aXBtZW50XCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgZWxlbWVudFsndHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFkZENsYXNzKFwiZGVzY3JpcHRpb24tU3VidHlwZUNhcmRcIilcclxuICAgICAgICBpZiAoZWxlbWVudFsnU291c1R5cGUnXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0clwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZFRSQm9hcmRcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiaW5kaWNlRFRSXCJdICsgJzwvcD4nKVxyXG4gICAgICAgIGlmIChlbGVtZW50WydudW1TZXJpZSddID09IFwiXCIpIHtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPVwicGFkZGluZzogMnB4XCIgaWQgPSBcImJ0bi1hZGQtbnVtYmVyLXNlcmllJyArIGVsZW1lbnRbJ2lkJ10gKyAnXCIgPiBBZGQgbnVtYmVyIG9mIHNlcmllIDwvYnV0dG9uPicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50WydudW1TZXJpZSddICsgJzwvcD4nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbmRleEVWQyA9ICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHVybkluZGV4RWxlbWVudChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuXHJcblxyXG4gICAgaW5kZXggPSBlbGVtZW50WydpZCddO1xyXG5cclxuICAgIGlmICgoZWxlbWVudFsnU3RhdHVzJ10gPT0gdHJ1ZSkgJiYgZWxlbWVudFsndHlwZSddWydpZCddICE9IFwiMVwiKSB7XHJcblxyXG4gICAgICAgIC8vVGVzdCBsJ2V4aXN0ZW5jZSBkZSBsYSBkaXYgZGFucyBsZSBjYXMgb8O5IGVsbGUgZXhpc3RlIGxhIHJlbXBsYWNlIHNpIHBhcyBsYSBtZXQgZW4gcGxhY2VcclxuICAgICAgICBpZiAoJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5yZXBsYWNlV2l0aCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjc2hvdy1lcXVpcG1lbnRcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy90ZXN0IHNpIGwnw6lxdWlwZW1lbnQgZXN0IGxhIGNhcnRlIG91IG5vblxyXG4gICAgICAgIGlmIChlbGVtZW50Wyd0eXBlJ11bJ2lkJ10gIT0gXCIyXCIpIHtcclxuXHJcbiAgICAgICAgICAgIC8vU3dpdGggcmVwbGFjZW1lbnQgZGUgbCdpZCBkdSB0eXBlIGF2ZWMgc29uIG5vbVxyXG4gICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgZWxlbWVudFsndHlwZSddWyduYW1lJ10pKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50WydTb3VzVHlwZSddICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0clwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgICAgIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJkVFJCb2FyZFwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiaW5kaWNlRFRSXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFsnbnVtU2VyaWUnXSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgc3R5bGU9XCJwYWRkaW5nOiAycHhcIiBpZCA9IFwiYnRuLWFkZC1udW1iZXItc2VyaWUnICsgZWxlbWVudFsnaWQnXSArICdcIiA+IEFkZCBudW1iZXIgb2Ygc2VyaWUgPC9idXR0b24+JylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFsnbnVtU2VyaWUnXSArICc8L3A+IDxhIGlkPVwiZWRpdC0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gPC9hPiA8YSBpZD1cImRlbGV0ZS0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3MgPSBcImZhcyBmYS10cmFzaC1hbHQgcG91YmVsbGVcIj4gPC9pPjwvYT4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy9FY3JpcyBsZSBub20gZHUgdHlwZSBcImNhcnRlXCIgc291cyBsZSB0eXBlICBFVkNcclxuICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKHdyaXRlVHlwZSg1LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICAgICAgLy9QYXJjb3VzIGxlIHR5cGUgZGUgc291c3R5cGUgXHJcbiAgICAgICAgICAgIC8vICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNiwgZWxlbWVudFsnU291c1R5cGUnXVsnbmFtZSddKSk7XHJcblxyXG4gICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0ciBjb250ZW50LWRlc2NyaXB0aW9uLWR0ckNhcmRcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZFRSQm9hcmRcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImluZGljZURUUlwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRbJ251bVNlcmllJ10gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPVwicGFkZGluZzogMnB4XCIgaWQgPSBcImJ0bi1hZGQtbnVtYmVyLXNlcmllJyArIGVsZW1lbnRbJ2lkJ10gKyAnXCIgPiBBZGQgbnVtYmVyIG9mIHNlcmllIDwvYnV0dG9uPicpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbJ251bVNlcmllJ10gKyAnPC9wPiA8YSBpZD1cImVkaXQtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IDwvYT4gPGEgaWQ9XCJkZWxldGUtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzID0gXCJmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlXCI+IDwvaT48L2E+JylcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ291bnROdW1iZXJFcXVpcHQoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICB0b3RhbEVxdWlwdCsrO1xyXG59XHJcbi8vRXh0cmFpdCBsZSBub21icmUgZCd1bmUgc3RyZWluZ1xyXG5mdW5jdGlvbiBleHRyYWl0Tm9tYnJlKHN0cikge1xyXG4gICAgcmV0dXJuIE51bWJlcihzdHIucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpKVxyXG59XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlVHlwZShzaXplLCBuYW1lKSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXR5cGUgXCI+JyArIG5hbWUgKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgc291c3R5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVN1YnR5cGUoc2l6ZSwgbmFtZSkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLVR5cGUgXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyBuYW1lICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHNvdXN0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVTdWJ0eXBlQ2FyZChzaXplLCBuYW1lKSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tc3VidHlwZVwiIGlkPVwiZGVzY3JpcHRpb24tc3ViVHlwZSBcIj4nICsgbmFtZSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy8gLy9FY3JpdCBsZXMgMiBpY29ucyBkJ2VkaXQgZXQgZGVsZXRlXHJcbi8vIGZ1bmN0aW9uIHdyaXRlRWRpdERlbGV0ZShpbmRleCkge1xyXG4vLyAgICAgcmV0dXJuICcgPHAgY2xhc3M9XCJlZGl0LWRlbGV0ZS1lcXVpcGVtZW50XCI+IDxhIGlkPVwiZWRpdC0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gPC9hPjwvcD4nO1xyXG4vLyB9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=