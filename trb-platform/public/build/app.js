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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9iYXNlbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXF1aXBlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXJ0bXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvbG9hZGluZy1iYXIubHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvcHJlc2V0cy5scyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGVzdC11cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RyYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiaG92ZXIiLCJmaW5kIiwic3RvcCIsImFuaW1hdGUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiaGlkZSIsImxhYmVsQ2xpa2VkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInJlbW92ZSIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNzcyIsImFkZENsYXNzIiwiJHR5cGUiLCJhdHRyIiwiRXF1aXBtZW50cyIsImkiLCJpbmRleEVWQyIsInBvc0luZGV4IiwiUHJlc2VuY2VFVkMiLCJpZEVxdWlwbWVudCIsInRhYkluZGV4RXF1aXB0Iiwic2VsZWN0IiwiY3JlYXRlRWxlbWVudCIsInByZXZpb3VzIiwidGFiRXF1aXBlbWVudFR5cGUiLCJ0YWJFcXVpcGVtZW50U3VidHlwZSIsImRhdGEiLCJ2YWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2hvdyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJlbXB0eSIsImZvckVhY2giLCJlbGVtZW50IiwiYXBwZW5kIiwiT3B0aW9uIiwibmFtZSIsImlkIiwiY2hhbmdlIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGhpcyIsImFjdGlvbiIsImVhY2giLCJpbmRleCIsInZhbHVlIiwidGhhdCIsInB1c2giLCJhamF4IiwidXJsIiwidHlwZSIsInRhYkVxdWlwdHMiLCJhc3luYyIsImRhdGFUeXBlIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInhociIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImlkRXJ0bXMiLCJleHRyYWl0Tm9tYnJlIiwiZXF1aXBlbWVudCIsInJldHVybkluZGV4RWxlbWVudCIsImFsZXJ0IiwiYmFzZWxpbmVOYW1lIiwiYmFzZWxpbmUiLCJ0ZXh0IiwiaWRCYXNlbGluZSIsImhyZWYiLCJkZWxldGVFcXVpcG1lbnQiLCJkb25lIiwicmVsb2FkIiwidmVyc2lvbiIsInRyaWdnZXIiLCJhcnJheSIsImxlbmd0aCIsInJlcGxhY2VXaXRoIiwid3JpdGVUeXBlIiwid3JpdGVTdWJ0eXBlIiwid3JpdGVFZGl0RGVsZXRlIiwic3BsaWNlIiwicG9zaXRpb24iLCJzdHIiLCJOdW1iZXIiLCJyZXBsYWNlIiwic2l6ZSIsIndyaXRlU3VidHlwZUNhcmQiLCJub3QiLCIkZm9ybSIsIkxpc3RlUGx1ZyIsInZhbGlkIiwibm9tYnJlX3VybCIsInByZ2JhciIsImxkQmFyIiwiaXNBZHZhbmNlZFVwbG9hZCIsImRpdiIsIiRpbnB1dCIsIiRsYWJlbCIsInNob3dGaWxlcyIsImZpbGVzIiwiZHJvcHBlZEZpbGVzIiwiaHRtbCIsInN0b3BQcm9wYWdhdGlvbiIsIm9yaWdpbmFsRXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJQbHVnIiwiaGFzQ2xhc3MiLCJhamF4RGF0YSIsIkZvcm1EYXRhIiwiZ2V0IiwiZmlsZSIsIlhNTEh0dHBSZXF1ZXN0IiwidXBsb2FkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsImxvYWRlZCIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50Q29tcGxldGUiLCJ0b3RhbCIsInNldCIsImNhY2hlIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsImNvbXBsZXRlIiwid3JpdGVQbHVnIiwiaWZyYW1lTmFtZSIsIkRhdGUiLCJnZXRUaW1lIiwiJGlmcmFtZSIsIm9uZSIsIkpTT04iLCJwYXJzZSIsImNvbnRlbnRzIiwicmVtb3ZlQXR0ciIsIiRlcnJvck1zZyIsImZpbGVzdCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wRGVzdGluYXRpb24iLCJuYW1lRmlsZSIsInVwbG9hZFN0YXR1cyIsInBhdGgiLCJrZXkiLCJkZWxldGVQbHVnIiwibmFtZV9wbHVnIiwia2V5X3BsdWciLCJjdXJyZW50X2Nob2ljZSIsImVydG1zX2xlZnQiLCJlcnRtc19taWRkbGUiLCJlcnRtc19yaWdodCIsImVxdWlwbWVudHMiLCJDb3VudE51bWJlckVxdWlwdCIsIkZpbmRJbmRleEV2YyIsIm5hbWVfYmFzZWxpbmVfMSIsIm5ld19lcXVpcG1lbnRfbnVtIiwidG90YWxFcXVpcHQiLCJuZXdfZXF1aXBtZW50X251bV9zZXJpZSIsIm51bVNlcmllIiwiaWRfdHJhaW4iLCJpZF9iYXNlbGluZSIsIm5ld19lcXVpcHQiLCJpZGJhc2VsaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCLEMsQ0FDQTtBQUNBOzs7QUFDQUQsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkUsS0FBbEIsQ0FBd0IsWUFBWTtBQUNoQ0YsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxJQUFS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ZCxHQUFxRXBELElBQXJFLEdBQTRFLEtBQTVFLEdBQW9Gb0QsSUFBcEYsR0FBMkYsR0FBbEc7QUFDSDs7QUFBQSxDLENBQ0Q7O0FBQ0EsU0FBU1AsWUFBVCxDQUFzQk8sSUFBdEIsRUFBNEJwRCxJQUE1QixFQUFrQztBQUM5QixTQUFPLE9BQU9vRCxJQUFQLEdBQWMsdURBQWQsR0FBd0VwRCxJQUF4RSxHQUErRSxLQUEvRSxHQUF1Rm9ELElBQXZGLEdBQThGLEdBQXJHO0FBQ0g7O0FBQUEsQyxDQUNEOztBQUNBLFNBQVNDLGdCQUFULENBQTBCRCxJQUExQixFQUFnQ3BELElBQWhDLEVBQXNDO0FBQ2xDLFNBQU8sT0FBT29ELElBQVAsR0FBYyx5REFBZCxHQUEwRXBELElBQTFFLEdBQWlGLEtBQWpGLEdBQXlGb0QsSUFBekYsR0FBZ0csR0FBdkc7QUFDSDs7QUFBQSxDLENBQ0Q7QUFDQTtBQUNBO0FBQ0EsSzs7Ozs7Ozs7Ozs7O0FDaGtCQSx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vZXJ0bXMnO1xyXG5pbXBvcnQgJy4vZXF1aXBlbWVudCc7XHJcbmltcG9ydCAnLi9iYXNlbGluZSc7XHJcbmltcG9ydCAnLi9wcm9ncmVzc0Jhcic7XHJcbmltcG9ydCAnLi90ZXN0LXVwbG9hZCc7XHJcbmltcG9ydCAnLi90cmFpbic7XHJcbmltcG9ydCAnLi9wbHVnJztcclxuXHJcbi8vIGxvYWRzIHRoZSBqcXVlcnkgcGFja2FnZSBmcm9tIG5vZGVfbW9kdWxlc1xyXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbi8vIGltcG9ydCB0aGUgZnVuY3Rpb24gZnJvbSBncmVldC5qcyAodGhlIC5qcyBleHRlbnNpb24gaXMgb3B0aW9uYWwpXHJcbi8vIC4vIChvciAuLi8pIG1lYW5zIHRvIGxvb2sgZm9yIGEgbG9jYWwgZmlsZVxyXG4kKCcucG9zdC1tb2R1bGUnKS5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmZpbmQoJy5kZXNjcmlwdGlvbicpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBoZWlnaHQ6IFwidG9nZ2xlXCIsXHJcbiAgICAgICAgb3BhY2l0eTogXCJ0b2dnbGVcIlxyXG4gICAgfSwgMzAwKTtcclxufSk7XHJcbiQoJy5wb3N0LW1vZHVsZS1mbGVldCcpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuZmluZCgnLmRlc2NyaXB0aW9uLWZsZWV0Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGhlaWdodDogXCJ0b2dnbGVcIixcclxuICAgICAgICBvcGFjaXR5OiBcInRvZ2dsZVwiXHJcbiAgICB9LCAzMDApO1xyXG59KTtcclxuXHJcbiQoJy5mYS1jaGV2cm9uLWRvd24nKS5oaWRlKCk7XHJcbmxldCBsYWJlbENsaWtlZCA9IGZhbHNlO1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdwcmUnKS5yZW1vdmUoKTtcclxuICAgICQoJy5idXR0b24tbGVmdCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuc2lkZWJhcicpLnRvZ2dsZUNsYXNzKCdmbGlwaCcpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuc2lkZWJhcicpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdjb2wtbGctMTInKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdwbC01Jyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5yZW1vdmVDbGFzcygnY29sLW1kLTEyJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ3RyYW5zaXRpb24nLCAnYWxsIDAuNnMgZWFzZS1pbi1vdXQnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdtbC1zbS1hdXRvJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnY29sLWxnLTEwJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnY29sLW1kLTknKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5yZW1vdmVDbGFzcygnY29sLWxnLTEwJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5yZW1vdmVDbGFzcygnY29sLW1kLTknKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygndHJhbnNpdGlvbicsICdhbGwgMC42cyBlYXNlLWluLW91dCcpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuYWRkQ2xhc3MoJ3BsLTUnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdjb2wtbGctMTInKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdjb2wtbWQtMTInKTtcclxuICAgICAgICB9KVxyXG4gICAgLy8gJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdtbC1zbS1hdXRvJyk7XHJcbiAgICAkKCcubmF2LWxhYmVsJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5mYS1jaGV2cm9uLWxlZnQnKS5jc3MoJ3RyYW5zZm9ybScsICdyb3RhdGV4KDQ1ZGVnKScpXHJcbiAgICB9KVxyXG5cclxuXHJcbn0pOyIsIi8vTWFzcXVhZ2UgZGUgY2VydGFpbnMgbW9kYWxlIGRlIGxhIHBhZ2VcclxuJCgnI2Zvcm11bGFpcmUtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4kKCcjY29udGVudC1mb3JtLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4kKCcjcHJldmlvdXMtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4kKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG5cclxuLy9EZWxjYXJhdGlvbiB2YXJpYWJsZVxyXG5jb25zdCAkdHlwZSA9ICQoJyNlcXVpcGVtZW50X1R5cGUnKTtcclxuJHR5cGUuYXR0cigncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcclxuXHJcbmxldCBFcXVpcG1lbnRzID0gW10sXHJcbiAgICBpID0gMCxcclxuICAgIGluZGV4RVZDID0gMCxcclxuICAgIHBvc0luZGV4ID0gMCxcclxuICAgIFByZXNlbmNlRVZDID0gZmFsc2UsXHJcbiAgICBpZEVxdWlwbWVudCA9IDAsXHJcbiAgICB0YWJJbmRleEVxdWlwdCA9IFtdXHJcbnNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksXHJcbiAgICBwcmV2aW91cyA9IFwiXCIsXHJcbiAgICB0YWJFcXVpcGVtZW50VHlwZSA9IFtcIkVWQ1wiLCBcIkNBUlRFXCIsIFwiU0VOU09SXCIsIFwiRE1JXCJdLFxyXG4gICAgdGFiRXF1aXBlbWVudFN1YnR5cGUgPSBbXCJDT1JFXCIsIFwiVFVJXCIsIFwiU0RNVVwiLCBcIlNFTlNFXCIsIFwiVFdJTlNcIl07XHJcblxyXG4vL1ZpZGFnZSBkZXMgaW5wdXRzIGF1IHJlZnJlc2ggZGUgbGEgcGFnZVxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICBkYXRhWyR0eXBlLmF0dHIoJ25hbWUnKV0gPSAkdHlwZS52YWwoKVxyXG5cclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hbHN0b20vY3JlYXRlX2Jhc2VsaW5lJykge1xyXG4gICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICAvLyAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgLy8gJCgnOmlucHV0JywgJyNmb3JtX2VxdWlwZW1lbnQnKS5ub3QoJzpidXR0b24sIDpzdWJtaXQsIDpyZXNldCwgOmhpZGRlbicpLnZhbCgnJyk7XHJcbn0pO1xyXG5cclxuLy9BSkFYIENoYW5nZW1lbnQgZGUgc291cy10eXBlIGVuIGZvbmN0aW9uIGR1IHR5cGVcclxuJHR5cGUuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICBkYXRhWyR0eXBlLmF0dHIoJ25hbWUnKV0gPSAkdHlwZS52YWwoKVxyXG5cclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KVxyXG5cclxuLy9BSkFYIHNvdW1pc3Npb24gZm9ybXVsYWlyZSBkJ2Fqb3V0IGVxdWlwZW1lbnRcclxuJCgnI2Zvcm1fZXF1aXBlbWVudCcpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIC8vRW1ww6pjaGUgbGUgY2hhcmdlbWVudCBkZSBsYSBwYWdlIHNvaXMgZmFpdCBhdXRvbWF0aXF1ZW1lbnRcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge30sXHJcbiAgICAgICAgYWN0aW9uO1xyXG4gICAgLy9SZW1wbGkgZGF0YSBhIHBhcnRpciBkZXMgdmFsZXVyIGRlcyBpbnB1dHNcclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpXHJcblxyXG4gICAgICAgIGlmIChuYW1lICE9IChcImVxdWlwZW1lbnRbX3Rva2VuXVwiKSAmJiBuYW1lICE9IChcInNvdW1pc3Npb25fZXF1aXBlbWVudFwiKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT0gJ3NvdW1pc3Npb25fZWRpdF9lcXVpcGVtZW50Jykge1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBcImVkaXRcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBcImFkZFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgLy8gU2kgbGUgZm9ybXVsYWlyZSBlc3QgcG91ciBham91ZXIgdW4gbm91dmVsIGVxdWlwZW1lbnRcclxuICAgIGlmIChhY3Rpb24gPT0gXCJhZGRcIikge1xyXG4gICAgICAgIC8vUmVtcGxpcyBsZSB0YWJsZWF1IGRlcyDDqXF1aXBlbWVudHNcclxuICAgICAgICBFcXVpcG1lbnRzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgLy9FZmZlY3R1cmUgbGEgcmVxdcOqdGUgYWpheCBwb3VyIGwnYWpvdXQgZCfDqXF1aXBlbWVudFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0YWJFcXVpcHRzOiBFcXVpcG1lbnRzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIE91IHNpIGxlIGZvcm11bGFpcmUgZXN0IHBvdXIgw6lkaXRlciB1biBlcXVpcGVtZW50IGTDqWphIGV4aXN0YW50IHN1ciBsYSBwYWdlIGRlIGwnZXJ0bXMgbGnDqSBhIGNlbHVpLWNpXHJcbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PSBcImVkaXRcIikge1xyXG4gICAgICAgIGxldCBpZEVydG1zID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGVxdWlwZW1lbnQ6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICBpZEVydG1zOiBpZEVydG1zXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnLm1vZGFsLWZvb3RlcicpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3Nob3ctZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgIC8vQm91Y2xlIGxlcyDDqXF1aXBlbWVudHMgZXQgbGVzIGluc3RhbGxlIGF1IGZyb250XHJcbiAgICBFcXVpcG1lbnRzLmZvckVhY2gocmV0dXJuSW5kZXhFbGVtZW50KTtcclxufSk7XHJcblxyXG5cclxuLy9WYWxpZGF0aW9uIGRlIGJhc2VsaW5lIFxyXG4kKCcjY3JlYXRlLWJhc2VsaW5lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQoXCIjYmFzZWxpbmVfbmFtZVwiKS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSBiYXNlbGluZSBuYW1lIFwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI3Nob3ctZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgfVxyXG5cclxufSlcclxuXHJcbmxldCBiYXNlbGluZU5hbWU7XHJcbiQoJyNmb3JtX2Jhc2VsaW5lJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcblxyXG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgPT0gJ2Jhc2VsaW5lW25hbWVdJykge1xyXG5cclxuICAgICAgICAgICAgYmFzZWxpbmVOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBiYXNlbGluZTogZGF0YVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLnRpdGxlLWJhc2VsaW5lJykudGV4dChyZXNwb25zZS5iYXNlbGluZSlcclxuICAgICAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcbi8vVmFsaWRhdGlvbiBkZSB0b3VzIGxlcyDDqXF1aXBlbWVudHMgZXQgZGUgbGEgYmFzZWxpbmVcclxuJCgnI3ZhbGlkLWFsbC1lcXVpcG1lbnRzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoRXF1aXBtZW50cyAhPSBcIlwiKSB7XHJcbiAgICAgICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsIFwiMC40XCIpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS9mbHVzaC1hbGwtZXF1aXB0JyxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBiYXNlbGluZU5hbWU6IGJhc2VsaW5lTmFtZSxcclxuICAgICAgICAgICAgICAgIHRhYkVxdWlwdHM6IEVxdWlwbWVudHNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZEJhc2VsaW5lID0gcmVzcG9uc2UuYmFzZWxpbmU7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hbHN0b20vYmFzZWxpbmUvXCIgKyBpZEJhc2VsaW5lO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBFcXVpcG1lbnRzIGJlZm9yZSB2YWxpZCcpO1xyXG4gICAgfVxyXG5cclxufSlcclxuXHJcbi8vR8OpcmUgbGUgY2xpcXVlIGRlIGxhIHN1cHByZXNzaW9uXHJcbiQoJyNzaG93LWVxdWlwbWVudCcpLm9uKCdjbGljaycsICcuZWRpdC1kZWxldGUtZXF1aXBlbWVudCA+IGEnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKVswXVtcImlkXCJdWzBdID09IFwiZFwiKSB7XHJcbiAgICAgICAgZGVsZXRlRXF1aXBtZW50KGV4dHJhaXROb21icmUoJCh0aGlzKVswXVtcImlkXCJdKSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vY2FjaGUgbGUgbW9kYWwgZCdlZGl0IGQnZXF1aXBlbWVudFxyXG4kKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLmhpZGUoKTtcclxuLy8gR2VyZSBsYSBmZXJtZXR1cmUgZHUgbW9kYWwgZCdlZGl0IGQnZXF1aXBlbWVudFxyXG4kKCcjY2xvc2UtbW9kYWwtZm9ybS1lcXVpcG1lbnQtZWRpdCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0JykuaGlkZSgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxufSlcclxuLy8gXHJcbi8vIFJlcXVldGUgQUpBWCBwb3VyIHJlbXBsaXIgbGUgZm9ybXVsYWlyZSBkJ8OpcXVpcGVtZW50IGF2ZWMgbCdlcXVpcGVtZW50IHNlbGVjdGlvbm5lclxyXG4kKCcuY29udGVudC1kZXNjcmlwdGlvbi1kdHInKS5vbignY2xpY2snLCAnLmVkaXQtZGVsZXRlLWVxdWlwZW1lbnQgPiBhJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgaWRFcXVpcG1lbnQgPSBleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJjbGFzc0xpc3RcIl1bMF0pXHJcbiAgICB2YXIgJHRoaXMgPSAkKFwiI2Zvcm1fZXF1aXBlbWVudF9lZGl0XCIpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKHJlc3BvbnNlW1widHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgZGF0YVskKCcjZXF1aXBlbWVudF9UeXBlJykuYXR0cignbmFtZScpXSA9ICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGkgaW5wdXQgYXZlYyB2YWxldXIgcmVjdSBkZSBsJ2VxdWlwZW1lbnRcclxuICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfVHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9zb3VzX3R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW1wiU291c1R5cGVcIl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIlNvdXNUeXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfRFRSX2JvYXJkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImRUUkJvYXJkXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfSW5kaWNlX0RUUic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJpbmRpY2VEVFJcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9OdW1fc2VyaWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wibnVtU2VyaWVcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbi8vRm9ybXVsYWlyZSBkJ2VkaXQgZGUgbCfDqXF1aXBlbWVudFxyXG4kKCcjZm9ybV9lcXVpcGVtZW50X2VkaXQnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdCcpLmNzcyhcIm9wYWNpdHlcIiwgXCIwLjRcIik7XHJcbiAgICAkKFwiI3dhaXQtc3Bpbm5lclwiKS5jc3MoXCJ6LWluZGV4XCIsIFwiOTk5OTlcIik7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge30sXHJcbiAgICAgICAgYWN0aW9uO1xyXG4gICAgLy9SZW1wbGkgZGF0YSBhIHBhcnRpciBkZXMgdmFsZXVyIGRlcyBpbnB1dHNcclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpXHJcblxyXG4gICAgICAgIGlmIChuYW1lICE9IChcImVxdWlwZW1lbnRbX3Rva2VuXVwiKSAmJiBuYW1lICE9IChcInNvdW1pc3Npb25fZXF1aXBlbWVudFwiKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAnZXF1aXBlbWVudCc6IGRhdGEsXHJcbiAgICAgICAgICAgIFwic291bWlzc2lvbl9lZGl0X2VxdWlwZW1lbnRcIjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuXHJcbi8vUmVxdWV0ZSBBSkFYIGRlIGNyw6lhdGlvbiBkZSB2ZXJzaW9uIGxvZ2ljaWVsXHJcbiQoJyNmb3JtX3ZlcnNpb24nKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJyksXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuXHJcbiAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfSlcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAkdGhpcy5hdHRyKCdhY3Rpb24nKSxcclxuICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlkQmFzZWxpbmU6IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSxcclxuICAgICAgICAgICAgdmVyc2lvbjogZGF0YVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI3RpdGxlLXZlcnNpb24tZXJ0bXMnKS5hcHBlbmQoXCI8cD5cIiArIHJlc3BvbnNlLnZlcnNpb24gKyBcIjwvcD5cIilcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI2Nsb3NlLW1vZGFsLWZvcm0tdmVyc2lvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmV0dXJuSW5kZXhFbGVtZW50KGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG5cclxuICAgIC8vVGVzdCBsJ2V4aXN0ZW5jZSBkZSBsYSBkaXYgZGFucyBsZSBjYXMgb8O5IGVsbGUgZXhpc3RlIGxhIHJlbXBsYWNlIHNpIHBhcyBsYSBtZXQgZW4gcGxhY2VcclxuICAgIGlmICgkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLmxlbmd0aCkge1xyXG4gICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVwbGFjZVdpdGgoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+JylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiNzaG93LWVxdWlwbWVudFwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy90ZXN0IHNpIGwnw6lxdWlwZW1lbnQgZXN0IGxhIGNhcnRlIG91IG5vblxyXG4gICAgaWYgKGVsZW1lbnRbXCJlcXVpcGVtZW50W1R5cGVdXCJdICE9IFwiMlwiKSB7XHJcbiAgICAgICAgLy9Td2l0aCByZXBsYWNlbWVudCBkZSBsJ2lkIGR1IHR5cGUgYXZlYyBzb24gbm9tXHJcbiAgICAgICAgc3dpdGNoIChlbGVtZW50W1wiZXF1aXBlbWVudFtUeXBlXVwiXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIDApKTtcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYWRkQ2xhc3MoXCJkZXNjcmlwdGlvbi1TdWJ0eXBlQ2FyZFwiKVxyXG4gICAgICAgICAgICAgICAgaW5kZXhFVkMgPSAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgMikpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgMykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoZWxlbWVudFtcImVxdWlwZW1lbnRbc291c190eXBlXVwiXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDMpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiNVwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDQpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNvbnRlbnQtZGVzY3JpcHRpb24tZHRyXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W0RUUl9ib2FyZF1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtJbmRpY2VfRFRSXVwiXSArICc8L3A+JylcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W051bV9zZXJpZV1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVFZGl0RGVsZXRlKGluZGV4KSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgRXF1aXBtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKEVxdWlwbWVudHNbaV1bXCJlcXVpcGVtZW50W1R5cGVdXCJdID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICBQcmVzZW5jZUVWQyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChQcmVzZW5jZUVWQykge1xyXG4gICAgICAgICAgICAvL0VjcmlzIGxlIG5vbSBkdSB0eXBlIFwiY2FydGVcIiBzb3VzIGxlIHR5cGUgIEVWQ1xyXG4gICAgICAgICAgICAvLyAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVUeXBlKDUsIDEpKTtcclxuICAgICAgICAgICAgLy9QYXJjb3VzIGxlIHR5cGUgZGUgc291c3R5cGUgXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZWxlbWVudFtcImVxdWlwZW1lbnRbc291c190eXBlXVwiXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDApKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgMikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0ciBjb250ZW50LWRlc2NyaXB0aW9uLWR0ckNhcmRcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtEVFJfYm9hcmRdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W0luZGljZV9EVFJdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W051bV9zZXJpZV1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgRVZDIGVxdWlwZW1lbnQgYmVmb3JlJyk7XHJcbiAgICAgICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIEVxdWlwbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgJCgnLm1vZGFsLWZvb3RlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNzaG93LWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy9TdXByZXNzaW9uIGRlIGwnw6lxdWlwZW1lbnQgZGFucyBsZSB0YWJsZWF1IGV0IGxlIGZyb250XHJcbmZ1bmN0aW9uIGRlbGV0ZUVxdWlwbWVudChwb3NpdGlvbikge1xyXG4gICAgRXF1aXBtZW50cy5zcGxpY2UocG9zaXRpb24sIDEpO1xyXG4gICAgJCgnLmRlc2NyaXB0aW9uJykucmVtb3ZlKCk7XHJcbiAgICBFcXVpcG1lbnRzLmZvckVhY2gocmV0dXJuSW5kZXhFbGVtZW50KTtcclxufVxyXG4vL0V4dHJhaXQgbGUgbm9tYnJlIGQndW5lIHN0cmVpbmdcclxuZnVuY3Rpb24gZXh0cmFpdE5vbWJyZShzdHIpIHtcclxuICAgIHJldHVybiBOdW1iZXIoc3RyLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKSlcclxufVxyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHR5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVR5cGUoc2l6ZSwgaW5kZXgpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1UeXBlIFwiIGlkPVwiZGVzY3JpcHRpb24tdHlwZSBcIj4nICsgdGFiRXF1aXBlbWVudFR5cGVbaW5kZXhdICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHNvdXN0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVTdWJ0eXBlKHNpemUsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXN1YlR5cGUgXCI+JyArIHRhYkVxdWlwZW1lbnRTdWJ0eXBlW2luZGV4XSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpcyBsZSB0aXRyZSBkdSBzb3VzdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlU3VidHlwZUNhcmQoc2l6ZSwgaW5kZXgpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1zdWJ0eXBlXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyB0YWJFcXVpcGVtZW50U3VidHlwZVtpbmRleF0gKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXQgbGVzIDIgaWNvbnMgZCdlZGl0IGV0IGRlbGV0ZVxyXG5mdW5jdGlvbiB3cml0ZUVkaXREZWxldGUoaW5kZXgpIHtcclxuICAgIHJldHVybiAnIDxwIGNsYXNzPVwiZWRpdC1kZWxldGUtZXF1aXBlbWVudFwiPiA8YSBpZD1cImVkaXQtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IDwvYT4gPGEgaWQ9XCJkZWxldGUtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzID0gXCJmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlXCI+IDwvaT48L2E+PC9wPic7XHJcbn07XHJcblxyXG4vKmF1IGNsaWNrIGRlIGwnYWRkIEVxdWlwbWVudCBhZmZpY2hlciBsZSBmb3JtdWxhaXJlIGQnYWpvdXQgZCfDqXF1aXBlbWVudCovXHJcbiQoJyNjcmVhdGUtZXF1aXBtZW50JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnLm1vZGFsLWZvb3RlcicpLmhpZGUoKTtcclxuICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAkKCc6aW5wdXQnLCAnI2Zvcm1fZXF1aXBlbWVudCcpLm5vdCgnOmJ1dHRvbiwgOnN1Ym1pdCwgOnJlc2V0LCA6aGlkZGVuJykudmFsKCcnKTtcclxuICAgIHByZXZpb3VzID0gXCJlcXVpcG1lbnRcIjtcclxufSk7XHJcbi8vIEdlcmUgbGUgY2xpY2sgZHUgcHJldmlvdXNcclxuJChcIiNwcmV2aW91cy1lcXVpcG1lbnRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgICQoJy5tb2RhbC1mb290ZXInKS5zaG93KCk7XHJcbn0pO1xyXG4kKCcjY3JlYXRlLWJhc2VsaW5lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI3Nob3ctZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcubW9kYWwtZm9vdGVyJykuc2hvdygpO1xyXG59KVxyXG4vLyBGZXJtZSBsZSBtb2RhbCBkZSBmb3JtdWxhaXJlIGQnYWpvdXQgZCfDqXF1aXBlbWVudFxyXG4kKCcjY2xvc2UtZXF1aXBlbWVudCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxufSkiLCIvL1ZhbGlkYXRpb24gZGUgbCdlcnRtcyBcclxuJCgnI3ZhbGlkLWVydG1zLW5hbWUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2NvbnRlbnQtZm9ybS1lcnRtc1wiKS5oaWRlKCk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWVxdWlwbWVudCcpLnNob3coKTtcclxufSkiLCIvLyAkKCcjZGVsZXRlLWVydG1zJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuLy8gICAgICQuYWpheCh7XHJcbi8vICAgICAgICAgdXJsOiAkdGhpcy5hdHRyKCdhY3Rpb24nKSxcclxuLy8gICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuLy8gICAgICAgICBkYXRhOiB7fSxcclxuLy8gICAgICAgICBhc3luYzogdHJ1ZSxcclxuLy8gICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbi8vICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4vLyAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyB9KSIsIiQoJyNmb3JtX3BsdWcnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBsZXQgYmFzZWxpbmUgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJGZvcm0pO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2FkZC1wbHVnJyxcclxuICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICBkYXRhVHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZDogYmFzZWxpbmVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG5cclxuLy9FeHRyYWl0IGxlIG5vbWJyZSBkJ3VuZSBzdHJlaW5nXHJcbmZ1bmN0aW9uIGV4dHJhaXROb21icmUoc3RyKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyKHN0ci5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIikpO1xyXG59IiwicmVxdWlyZSEgXCIuL3ByZXNldHNcIjoge3ByZXNldHN9XG5cbnNpbXBsZS1zdHIgPSAoYXJyKSAtPiBhcnIuam9pbiAnJ1xud3JhcCA9IChjb250ZW50KSAtPiBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCIgKyBidG9hKGNvbnRlbnQpXG5cbmRvIC0+XG4gICAgbWFrZSA9XG4gICAgICAgIGhlYWQ6ICh2aWV3Qm94KSAtPiBcIlwiXCJcbiAgICAgICAgICAgICAgICA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJ1dGYtOFwiPz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIjdmlld0JveFwiPlxuICAgICAgICAgICAgICAgIFwiXCJcIlxuXG4gICAgICAgIGdyYWRpZW50OiAoZGlyID0gNDUsIGR1ciA9IDEsIC4uLmNvbG9ycykgLT5cbiAgICAgICAgICAgIHJldCA9IFtAaGVhZCBcIjAgMCAxMDAgMTAwXCJdXG4gICAgICAgICAgICBsZW4gPSBjb2xvcnMubGVuZ3RoICogNCArIDFcbiAgICAgICAgICAgIGRpciA9IGRpciAqIE1hdGguUEkgLyAxODBcbiAgICAgICAgICAgIGd4ID0gTWF0aC5jb3MoZGlyKSAqKiAyXG4gICAgICAgICAgICBneSA9IE1hdGguc3FydChneCAtIGd4ICoqIDIpXG4gICAgICAgICAgICBpZiBkaXIgPiBNYXRoLlBJICogMC4yNSA9PlxuICAgICAgICAgICAgICAgIGd5ID0gTWF0aC5zaW4oZGlyKSAqKiAyXG4gICAgICAgICAgICAgICAgZ3ggPSBNYXRoLnNxcnQoZ3kgLSBneSAqKiAyKVxuICAgICAgICAgICAgeCA9IGd4ICogMTAwXG4gICAgICAgICAgICB5ID0gZ3kgKiAxMDBcbiAgICAgICAgICAgIHJldC5wdXNoIFwiXCJcIjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cImdyYWRpZW50XCIgeDE9XCIwXCIgeDI9XCIjZ3hcIiB5MT1cIjBcIiB5Mj1cIiNneVwiPlwiXCJcIlxuICAgICAgICAgICAgZm9yIGkgZnJvbSAwIHRpbCBsZW4gPT5cbiAgICAgICAgICAgICAgICBpZHggPSBpICogMTAwIC8gKGxlbiAtIDEpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2ggXCJcIlwiPHN0b3Agb2Zmc2V0PVwiI3tpZHh9JVwiIHN0b3AtY29sb3I9XCIje2NvbG9yc1tpICUgY29sb3JzLmxlbmd0aF19XCIvPlwiXCJcIlxuICAgICAgICAgICAgcmV0LnB1c2ggXCJcIlwiXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD48L2RlZnM+XG4gICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiNDAwXCIgZmlsbD1cInVybChcXCNncmFkaWVudClcIj5cbiAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInRyYW5zbGF0ZVwiIGZyb209XCItI3gsLSN5XCJcbiAgICAgICAgICAgICAgICB0bz1cIjAsMFwiIGR1cj1cIiN7ZHVyfXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+PC9yZWN0Pjwvc3ZnPlxuICAgICAgICAgICAgICAgIFwiXCJcIlxuICAgICAgICAgICAgd3JhcCByZXQuam9pbihcIlwiKVxuXG4gICAgICAgIHN0cmlwZTogKGMxPVxcI2I0YjRiNCwgYzI9XFwjZTZlNmU2LCBkdXIgPSAxKSAtPlxuICAgICAgICAgICAgcmV0ID0gW0BoZWFkIFwiMCAwIDEwMCAxMDBcIl1cbiAgICAgICAgICAgIHJldCArKz0gW1xuICAgICAgICAgICAgICAgIFwiXCJcIjxyZWN0IGZpbGw9XCIjYzJcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiLz5cIlwiXCJcbiAgICAgICAgICAgICAgICBcIlwiXCI8Zz48Zz5cIlwiXCJcbiAgICAgICAgICAgICAgICBbXCJcIlwiPHBvbHlnb24gZmlsbD1cIiNjMVwiIFwiXCJcIiArXG4gICAgICAgICAgICAgICAgIFwiXCJcInBvaW50cz1cIiN7LTkwICsgaSAqIDIwfSwxMDAgI3stMTAwICsgaSAqIDIwfSxcIlwiXCIgK1xuICAgICAgICAgICAgICAgICBcIlwiXCIxMDAgI3stNjAgKyBpICogMjB9LDAgI3stNTAgKyBpICogMjB9LDAgXCIvPlwiXCJcIiBmb3IgaSBmcm9tIDAgdGlsIDEzXS5qb2luKFwiXCIpXG4gICAgICAgICAgICAgICAgXCJcIlwiPC9nPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwidHJhbnNsYXRlXCIgXCJcIlwiXG4gICAgICAgICAgICAgICAgXCJcIlwiZnJvbT1cIjAsMFwiIHRvPVwiMjAsMFwiIGR1cj1cIiN7ZHVyfXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+PC9nPjwvc3ZnPlwiXCJcIlxuICAgICAgICAgICAgXS5qb2luKFwiXCIpXG4gICAgICAgICAgICB3cmFwIHJldFxuXG4gICAgICAgIGJ1YmJsZTogKGMxID0gXFwjMzlkLCBjMiA9IFxcIzljZiwgY291bnQgPSAxNSwgZHVyID0gMSwgc2l6ZSA9IDYsIHN3PTEpIC0+XG4gICAgICAgICAgICByZXQgPSBbQGhlYWQoXCIwIDAgMjAwIDIwMFwiKSwgXCJcIlwiPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgZmlsbD1cIiNjMVwiLz5cIlwiXCJdXG4gICAgICAgICAgICBmb3IgaSBmcm9tIDAgdGlsIGNvdW50ID0+XG4gICAgICAgICAgICAgICAgaWR4ID0gLShpIC8gY291bnQpICogZHVyXG4gICAgICAgICAgICAgICAgeCA9IE1hdGgucmFuZG9tISAqIDE4NCArIDhcbiAgICAgICAgICAgICAgICByID0gKCBNYXRoLnJhbmRvbSEgKiAwLjcgKyAwLjMgKSAqIHNpemVcbiAgICAgICAgICAgICAgICBkID0gZHVyICogKDEgKyBNYXRoLnJhbmRvbSEgKiAwLjUpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2ggW1xuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8Y2lyY2xlIGN4PVwiI3hcIiBjeT1cIjBcIiByPVwiI3JcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNjMlwiIHN0cm9rZS13aWR0aD1cIiNzd1wiPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3lcIiB2YWx1ZXM9XCIxOTA7LTEwXCIgdGltZXM9XCIwOzFcIiBcIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiZHVyPVwiI3tkfXNcIiBiZWdpbj1cIiN7aWR4fXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjwvY2lyY2xlPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8Y2lyY2xlIGN4PVwiI3hcIiBjeT1cIjBcIiByPVwiI3JcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNjMlwiIHN0cm9rZS13aWR0aD1cIiNzd1wiPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3lcIiB2YWx1ZXM9XCIzOTA7MTkwXCIgdGltZXM9XCIwOzFcIiBcIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiZHVyPVwiI3tkfXNcIiBiZWdpbj1cIiN7aWR4fXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjwvY2lyY2xlPlwiXCJcIlxuICAgICAgICAgICAgICAgIF0uam9pbihcIlwiKVxuICAgICAgICAgICAgd3JhcChyZXQuam9pbihcIlwiKSArIFwiPC9zdmc+XCIpXG5cbiAgICBoYW5kbGVyID1cbiAgICAgICAgcXVldWU6IHt9XG4gICAgICAgIHJ1bm5pbmc6IGZhbHNlXG4gICAgICAgIG1haW46ICh0aW1lc3RhbXApIC0+XG4gICAgICAgICAgICBrZWVwb24gPSBmYWxzZVxuICAgICAgICAgICAgcmVtb3ZlZCA9IFtdXG4gICAgICAgICAgICBmb3IgayxmdW5jIG9mIEBxdWV1ZSA9PlxuICAgICAgICAgICAgICAgIHJldCA9IGZ1bmMgdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgaWYgIXJldCA9PiByZW1vdmVkLnB1c2ggZnVuY1xuICAgICAgICAgICAgICAgIGtlZXBvbiA9IGtlZXBvbiBvciByZXRcbiAgICAgICAgICAgIGZvciBrLGZ1bmMgb2YgQHF1ZXVlID0+IGlmIHJlbW92ZWQuaW5kZXhPZihmdW5jKSA+PSAwID0+IGRlbGV0ZSBAcXVldWVba11cbiAgICAgICAgICAgIGlmIGtlZXBvbiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKH4+IEBtYWluIGl0KVxuICAgICAgICAgICAgZWxzZSBAcnVubmluZyA9IGZhbHNlXG4gICAgICAgIGFkZDogKGtleSwgZikgLT5cbiAgICAgICAgICAgIGlmICFAcXVldWVba2V5XSA9PiBAcXVldWVba2V5XSA9IGZcbiAgICAgICAgICAgIGlmICFAcnVubmluZyA9PlxuICAgICAgICAgICAgICAgIEBydW5uaW5nID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSAofj4gQG1haW4gaXQpXG5cblxuICAgIHdpbmRvdy5sZEJhciA9IGxkQmFyID0gKHNlbGVjdG9yLCBvcHRpb24gPSB7fSkgLT5cbiAgICAgICAgeG1sbnMgPSB4bGluazogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgcm9vdCA9IGlmIHR5cGVvZiEgc2VsZWN0b3IgaXMgXFxTdHJpbmdcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Igc2VsZWN0b3JcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc2VsZWN0b3JcblxuICAgICAgICBpZiAhcm9vdC5sZEJhciA9PiByb290LmxkQmFyID0gQFxuICAgICAgICBlbHNlIHJldHVybiByb290LmxkQmFyXG5cbiAgICAgICAgY2xzID0gcm9vdC5nZXRBdHRyaWJ1dGUoXFxjbGFzcykgb3IgJydcbiAgICAgICAgaWYgIX5jbHMuaW5kZXhPZignbGRCYXInKSA9PiByb290LnNldEF0dHJpYnV0ZSBcXGNsYXNzLCBcIiNjbHMgbGRCYXJcIlxuICAgICAgICBpZC1wcmVmaXggPSBcImxkQmFyLSN7TWF0aC5yYW5kb20hdG9TdHJpbmcgMTYgLnN1YnN0cmluZyAyfVwiXG4gICAgICAgIGlkID1cbiAgICAgICAgICAgIGtleTogaWQtcHJlZml4XG4gICAgICAgICAgICBjbGlwOiBcIiN7aWQtcHJlZml4fS1jbGlwXCJcbiAgICAgICAgICAgIGZpbHRlcjogXCIje2lkLXByZWZpeH0tZmlsdGVyXCJcbiAgICAgICAgICAgIHBhdHRlcm46IFwiI3tpZC1wcmVmaXh9LXBhdHRlcm5cIlxuICAgICAgICAgICAgbWFzazogXCIje2lkLXByZWZpeH0tbWFza1wiXG4gICAgICAgICAgICBtYXNrLXBhdGg6IFwiI3tpZC1wcmVmaXh9LW1hc2stcGF0aFwiXG4gICAgICAgIGRvbVRyZWUgPSAobixvKSAtPlxuICAgICAgICAgICAgbiA9IG5ld05vZGUgblxuICAgICAgICAgICAgZm9yIGssdiBvZiBvID0+IGlmIGsgIT0gXFxhdHRyID0+IG4uYXBwZW5kQ2hpbGQgZG9tVHJlZShrLCB2IG9yIHt9KVxuICAgICAgICAgICAgbi5hdHRycyhvLmF0dHIgb3Ige30pXG4gICAgICAgICAgICBuXG4gICAgICAgIG5ld05vZGUgPSAobikgLT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgblxuICAgICAgICBkb2N1bWVudC5ib2R5Ll9fcHJvdG9fXy5fX3Byb3RvX18uX19wcm90b19fXG4gICAgICAgICAgICAuLnRleHQgPSAodCkgLT4gQGFwcGVuZENoaWxkIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpXG4gICAgICAgICAgICAuLmF0dHJzID0gKG8pIC0+IGZvciBrLHYgb2YgbyA9PlxuICAgICAgICAgICAgICAgIHJldCA9IC8oW146XSspOihbXjpdKykvLmV4ZWMoaylcbiAgICAgICAgICAgICAgICBpZiAhcmV0IG9yICF4bWxuc1tyZXQuMV0gPT4gQHNldEF0dHJpYnV0ZSBrLCB2XG4gICAgICAgICAgICAgICAgZWxzZSBAc2V0QXR0cmlidXRlTlMgeG1sbnNbcmV0LjFdLCBrLCB2XG4gICAgICAgICAgICAuLnN0eWxlcyA9IChvKSAtPiBmb3Igayx2IG9mIG8gPT4gQHN0eWxlW2tdID0gdlxuICAgICAgICAgICAgLi5hcHBlbmQgPSAobikgLT4gQGFwcGVuZENoaWxkIHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgXCJodHRwOi8vd3d3LnczLm9nLzIwMDAvc3ZnXCIsIG5cbiAgICAgICAgICAgIC4uYXR0ciA9IChuLHYpIC0+IGlmIHY/ID0+IEBzZXRBdHRyaWJ1dGUgbiwgdiBlbHNlIEBnZXRBdHRyaWJ1dGUgblxuICAgICAgICBjb25maWcgPVxuICAgICAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgICAgICBcImltZ1wiOiAnJ1xuICAgICAgICAgICAgXCJwYXRoXCI6ICdNMTAgMTBMOTAgMTBNOTAgOE05MCAxMidcbiAgICAgICAgICAgIFwiZmlsbC1kaXJcIjogXFxidHRcbiAgICAgICAgICAgIFwiZmlsbFwiOiBcXCMyNWJcbiAgICAgICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAzXG4gICAgICAgICAgICBcInBhdHRlcm4tc2l6ZVwiOiBudWxsXG4gICAgICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXFwzXG4gICAgICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAxXG4gICAgICAgICAgICBcImVhc2luZ1wiOiBcXGxpbmVhclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiAwXG4gICAgICAgICAgICBcImltZy1zaXplXCI6IG51bGxcbiAgICAgICAgICAgIFwiYmJveFwiOiBudWxsXG4gICAgICAgICAgICBcInNldC1kaW1cIjogdHJ1ZVxuICAgICAgICAgICAgXCJhc3BlY3QtcmF0aW9cIjogXCJ4TWlkWU1pZFwiXG4gICAgICAgICAgICBcInRyYW5zaXRpb24taW5cIjogZmFsc2VcbiAgICAgICAgICAgIFwibWluXCI6IDBcbiAgICAgICAgICAgIFwibWF4XCI6IDEwMFxuICAgICAgICAgICAgXCJwcmVjaXNpb25cIjogMFxuICAgICAgICAgICAgXCJwYWRkaW5nXCI6IHVuZGVmaW5lZFxuXG4gICAgICAgIGNvbmZpZ1tcInByZXNldFwiXSA9IHJvb3QuYXR0cihcImRhdGEtcHJlc2V0XCIpIG9yIG9wdGlvbltcInByZXNldFwiXVxuXG4gICAgICAgIGlmIGNvbmZpZy5wcmVzZXQ/XG4gICAgICAgICAgICAjIHVzZSB0aGUgZGVmYXVsdCBwcmVzZXRcbiAgICAgICAgICAgIGNvbmZpZyA8PDwgcHJlc2V0c1tjb25maWcucHJlc2V0XVxuXG4gICAgICAgICMgb3ZlcndyaXRlIGlmIHRoZXJlIGFyZSBhcmd1bWVudHMgcGFzc2VkIHZpYSBkYXRhLSogYXR0cmlidXRlc1xuICAgICAgICBmb3IgYXR0ciBvZiBjb25maWdcbiAgICAgICAgICAgIGlmIHRoYXQgPSByb290LmF0dHIgXCJkYXRhLSN7YXR0cn1cIlxuICAgICAgICAgICAgICAgIGNvbmZpZ1thdHRyXSA9IHRoYXRcblxuICAgICAgICBjb25maWcgPDw8IG9wdGlvblxuICAgICAgICBpZiBjb25maWcuaW1nID0+IGNvbmZpZy5wYXRoID0gbnVsbFxuXG4gICAgICAgIGlzLXN0cm9rZSA9IGNvbmZpZy50eXBlID09IFxcc3Ryb2tlXG4gICAgICAgIHBhcnNlLXJlcyA9ICh2KSAtPlxuICAgICAgICAgICAgcGFyc2VyID0gL2RhdGE6bGRiYXJcXC9yZXMsKFteKCldKylcXCgoW14pXSspXFwpL1xuICAgICAgICAgICAgcmV0ID0gcGFyc2VyLmV4ZWModilcbiAgICAgICAgICAgIGlmICFyZXQgPT4gcmV0dXJuIHZcbiAgICAgICAgICAgIHJldCA9IG1ha2VbcmV0LjFdLmFwcGx5IG1ha2UsIHJldC4yLnNwbGl0KFxcLClcbiAgICAgICAgY29uZmlnLmZpbGwgPSBwYXJzZS1yZXMgY29uZmlnLmZpbGxcbiAgICAgICAgY29uZmlnLnN0cm9rZSA9IHBhcnNlLXJlcyBjb25maWcuc3Ryb2tlXG4gICAgICAgIGlmIGNvbmZpZ1tcInNldC1kaW1cIl0gPT0gXFxmYWxzZSA9PiBjb25maWdbXCJzZXQtZGltXCJdID0gZmFsc2VcblxuICAgICAgICBkb20gPVxuICAgICAgICAgICAgYXR0cjpcbiAgICAgICAgICAgICAgICBcInhtbG5zOnhsaW5rXCI6IFxcaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IGNvbmZpZ1tcImFzcGVjdC1yYXRpb1wiXVxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIlxuICAgICAgICAgICAgZGVmczpcbiAgICAgICAgICAgICAgICBmaWx0ZXI6XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5maWx0ZXIsIHg6IC0xLCB5OiAtMSwgd2lkdGg6IDMsIGhlaWdodDogM1xuICAgICAgICAgICAgICAgICAgICBmZU1vcnBob2xvZ3k6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogKGlmICtjb25maWdbXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiXT49MCA9PiBcXGRpbGF0ZSBlbHNlIFxcZXJvZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IE1hdGguYWJzKCtjb25maWdbXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiXSlcbiAgICAgICAgICAgICAgICAgICAgZmVDb2xvck1hdHJpeDogYXR0cjoge3ZhbHVlczogJzAgMCAwIDAgMSAgICAwIDAgMCAwIDEgICAgMCAwIDAgMCAxICAgIDAgMCAwIDEgMCcsIHJlc3VsdDogXCJjbVwifVxuICAgICAgICAgICAgICAgIG1hc2s6XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5tYXNrXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4bGluazpocmVmXCI6IGNvbmZpZy5pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJ1cmwoXFwjI3tpZC5maWx0ZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgcHJlc2VydmVBc3BlY3RSYXRpbzogY29uZmlnW1wiYXNwZWN0LXJhdGlvXCJdXG5cbiAgICAgICAgICAgICAgICBnOlxuICAgICAgICAgICAgICAgICAgICBtYXNrOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLm1hc2stcGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkOiBjb25maWcucGF0aCBvciBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXFwjZmZmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcXCNmZmZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwidXJsKFxcIyN7aWQuZmlsdGVyfSlcIlxuXG4gICAgICAgICAgICAgICAgY2xpcFBhdGg6XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5jbGlwXG4gICAgICAgICAgICAgICAgICAgIHJlY3Q6IHthdHRyOiBjbGFzczogXFxtYXNrLCBmaWxsOiBcXCMwMDB9XG4gICAgICAgICAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZC5wYXR0ZXJuLCBwYXR0ZXJuVW5pdHM6IFxcdXNlclNwYWNlT25Vc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6MCwgeTogMCwgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDBcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGF0dHI6IHg6IDAsIHk6IDAsIHdpZHRoOiAzMDAsIGhlaWdodDogMzAwXG5cbiAgICAgICAgc3ZnID0gZG9tVHJlZSBcXHN2ZywgZG9tXG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFxcZGl2XG4gICAgICAgIHRleHQuc2V0QXR0cmlidXRlIFxcY2xhc3MsIFxcbGRCYXItbGFiZWxcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCBzdmdcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCB0ZXh0XG5cbiAgICAgICAgZ3JvdXAgPSBbMCwwXVxuICAgICAgICBsZW5ndGggPSAwXG5cbiAgICAgICAgQGZpdCA9IH4+XG4gICAgICAgICAgICBpZiBjb25maWdbXCJiYm94XCJdID0+XG4gICAgICAgICAgICAgIGJveCA9IHRoYXQuc3BsaXQoJyAnKS5tYXAoLT4rKGl0LnRyaW0hKSlcbiAgICAgICAgICAgICAgYm94ID0ge3g6IGJveC4wLCB5OiBib3guMSwgd2lkdGg6IGJveC4yLCBoZWlnaHQ6IGJveC4zfVxuICAgICAgICAgICAgZWxzZSBib3ggPSBncm91cC4xLmdldEJCb3ghXG4gICAgICAgICAgICBpZiAhYm94IG9yIGJveC53aWR0aCA9PSAwIG9yIGJveC5oZWlnaHQgPT0gMCA9PiBib3ggPSB7eDogMCwgeTogMCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDB9XG4gICAgICAgICAgICBkID0gKE1hdGgubWF4LmFwcGx5KFxuICAgICAgICAgICAgICBudWxsLCA8W3N0cm9rZS13aWR0aCBzdHJva2UtdHJhaWwtd2lkdGggZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVdPi5tYXAoLT5jb25maWdbaXRdKSlcbiAgICAgICAgICAgICkgKiAxLjVcbiAgICAgICAgICAgIGlmIGNvbmZpZ1tcInBhZGRpbmdcIl0/ID0+IGQgPSArY29uZmlnW1wicGFkZGluZ1wiXVxuXG4gICAgICAgICAgICBzdmcuYXR0cnMgdmlld0JveDogW2JveC54IC0gZCwgYm94LnkgLSBkLCBib3gud2lkdGggKyBkICogMiwgYm94LmhlaWdodCArIGQgKiAyXS5qb2luKFwiIFwiKVxuICAgICAgICAgICAgaWYgY29uZmlnW1wic2V0LWRpbVwiXSA9PiA8W3dpZHRoIGhlaWdodF0+Lm1hcCB+PiBpZiAhcm9vdC5zdHlsZVtpdF0gb3IgQGZpdFtpdF0gPT5cbiAgICAgICAgICAgICAgcm9vdC5zdHlsZVtpdF0gPSBcIiN7Ym94W2l0XSArIGQgKiAyfXB4XCJcbiAgICAgICAgICAgICAgQGZpdFtpdF0gPSB0cnVlXG5cbiAgICAgICAgICAgIHJlY3QgPSBncm91cC4wLnF1ZXJ5U2VsZWN0b3IgXFxyZWN0XG4gICAgICAgICAgICBpZiByZWN0ID0+IHJlY3QuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICB4OiBib3gueCAtIGQsIHk6IGJveC55IC0gZCwgd2lkdGg6IGJveC53aWR0aCArIGQgKiAyLCBoZWlnaHQ6IGJveC5oZWlnaHQgKyBkICogMlxuXG4gICAgICAgIGlmIGNvbmZpZy5wYXRoID0+XG4gICAgICAgICAgICBpZiBpcy1zdHJva2UgPT5cbiAgICAgICAgICAgICAgICBncm91cC4wID0gZG9tVHJlZSBcXGcsIHBhdGg6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgIGQ6IGNvbmZpZy5wYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFxcbm9uZVxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXFxiYXNlbGluZVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGdyb3VwLjAgPSBkb21UcmVlIFxcZywgcmVjdDogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDBcbiAgICAgICAgICAgICAgICAgICAgbWFzazogXCJ1cmwoXFwjI3tpZC5tYXNrLXBhdGh9KVwiLCBmaWxsOiBjb25maWdbXCJmaWxsLWJhY2tncm91bmRcIl1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFxcZnJhbWVcblxuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkIGdyb3VwLjBcbiAgICAgICAgICAgIGdyb3VwLjEgPSBkb21UcmVlIFxcZywgcGF0aDogYXR0cjpcbiAgICAgICAgICAgICAgICBkOiBjb25maWcucGF0aCwgY2xhc3M6IGlmIGlzLXN0cm9rZSA9PiBcXG1haW5saW5lIGVsc2UgXFxzb2xpZFxuICAgICAgICAgICAgICAgIFwiY2xpcC1wYXRoXCI6IGlmIGNvbmZpZy50eXBlID09IFxcZmlsbCA9PiBcInVybChcXCMje2lkLmNsaXB9KVwiIGVsc2UgJydcbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZCBncm91cC4xXG4gICAgICAgICAgICBwYXRoMCA9IGdyb3VwLjAucXVlcnlTZWxlY3RvciAoaWYgaXMtc3Ryb2tlID0+IFxccGF0aCBlbHNlIFxccmVjdClcbiAgICAgICAgICAgIHBhdGgxID0gZ3JvdXAuMS5xdWVyeVNlbGVjdG9yIFxccGF0aFxuICAgICAgICAgICAgaWYgaXMtc3Ryb2tlID0+IHBhdGgxLmF0dHJzIGZpbGw6IFxcbm9uZVxuXG4gICAgICAgICAgICBwYXRpbWcgPSBzdmcucXVlcnlTZWxlY3RvciAncGF0dGVybiBpbWFnZSdcbiAgICAgICAgICAgIGltZyA9IG5ldyBJbWFnZSFcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyIFxcbG9hZCwgLT5cbiAgICAgICAgICAgICAgICBib3ggPSBpZiBjb25maWdbXCJwYXR0ZXJuLXNpemVcIl0gPT4ge3dpZHRoOiArdGhhdCwgaGVpZ2h0OiArdGhhdH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIGltZy53aWR0aCBhbmQgaW1nLmhlaWdodCA9PiB7d2lkdGg6IGltZy53aWR0aCwgaGVpZ2h0OiBpbWcuaGVpZ2h0fVxuICAgICAgICAgICAgICAgIGVsc2Uge3dpZHRoOiAzMDAsIGhlaWdodDogMzAwfVxuICAgICAgICAgICAgICAgIHN2Zy5xdWVyeVNlbGVjdG9yIFxccGF0dGVybiAuYXR0cnMge3dpZHRoOiBib3gud2lkdGgsIGhlaWdodDogYm94LmhlaWdodH1cbiAgICAgICAgICAgICAgICBwYXRpbWcuYXR0cnMge3dpZHRoOiBib3gud2lkdGgsIGhlaWdodDogYm94LmhlaWdodH1cbiAgICAgICAgICAgIGlmIC8uK1xcLi4rfF5kYXRhOi8uZXhlYyhpZiAhaXMtc3Ryb2tlID0+IGNvbmZpZy5maWxsIGVsc2UgY29uZmlnLnN0cm9rZSkgPT5cbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gaWYgIWlzLXN0cm9rZSA9PiBjb25maWcuZmlsbCBlbHNlIGNvbmZpZy5zdHJva2VcbiAgICAgICAgICAgICAgICBwYXRpbWcuYXR0cnMgXCJ4bGluazpocmVmXCI6IGltZy5zcmMgI2lmICFpcy1zdHJva2UgPT4gY29uZmlnLmZpbGwgZWxzZSBjb25maWcuc3Ryb2tlXG5cbiAgICAgICAgICAgIGlmIGlzLXN0cm9rZSA9PlxuICAgICAgICAgICAgICAgIHBhdGgwLmF0dHJzIHN0cm9rZTogY29uZmlnW1wic3Ryb2tlLXRyYWlsXCJdLCBcInN0cm9rZS13aWR0aFwiOiBjb25maWdbXCJzdHJva2UtdHJhaWwtd2lkdGhcIl1cbiAgICAgICAgICAgICAgICBwYXRoMS5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBjb25maWdbXCJzdHJva2Utd2lkdGhcIl1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBpZiAvLitcXC4uK3xeZGF0YTovLmV4ZWMoY29uZmlnLnN0cm9rZSkgPT4gXCJ1cmwoXFwjI3tpZC5wYXR0ZXJufSlcIiBlbHNlIGNvbmZpZy5zdHJva2VcbiAgICAgICAgICAgIGlmIGNvbmZpZy5maWxsIGFuZCAhaXMtc3Ryb2tlID0+XG4gICAgICAgICAgICAgICAgcGF0aDEuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICAgICAgZmlsbDogaWYgLy4rXFwuLit8XmRhdGE6Ly5leGVjKGNvbmZpZy5maWxsKSA9PiBcInVybChcXCMje2lkLnBhdHRlcm59KVwiIGVsc2UgY29uZmlnLmZpbGxcblxuICAgICAgICAgICAgbGVuZ3RoID0gcGF0aDEuZ2V0VG90YWxMZW5ndGghXG4gICAgICAgICAgICBAZml0IVxuICAgICAgICAgICAgQGluaXRlZCA9IHRydWVcbiAgICAgICAgZWxzZSBpZiBjb25maWcuaW1nID0+XG4gICAgICAgICAgICBpZiBjb25maWdbXCJpbWctc2l6ZVwiXSA9PlxuICAgICAgICAgICAgICAgIHJldCA9IGNvbmZpZ1tcImltZy1zaXplXCJdLnNwbGl0KFxcLClcbiAgICAgICAgICAgICAgICBzaXplID0ge3dpZHRoOiArcmV0LjAsIGhlaWdodDogK3JldC4xfVxuICAgICAgICAgICAgZWxzZSBzaXplID0ge3dpZHRoOiAxMDAsIGhlaWdodDogMTAwfVxuXG4gICAgICAgICAgICBncm91cC4wID0gZG9tVHJlZSBcXGcsIHJlY3Q6IGF0dHI6XG4gICAgICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIG1hc2s6IFwidXJsKFxcIyN7aWQubWFza30pXCIsIGZpbGw6IGNvbmZpZ1tcImZpbGwtYmFja2dyb3VuZFwiXVxuICAgICAgICAgICAgc3ZnLnF1ZXJ5U2VsZWN0b3IgJ21hc2sgaW1hZ2UnIC5hdHRycyBkb1xuICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0XG4gICAgICAgICAgICBncm91cC4xID0gZG9tVHJlZSBcXGcsIGltYWdlOiBhdHRyOlxuICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0LCB4OiAwLCB5OiAwLCBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBjb25maWdbXCJhc3BlY3QtcmF0aW9cIl1cbiAgICAgICAgICAgICAgICAjd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIHg6IDAsIHk6IDAsIHByZXNlcnZlQXNwZWN0UmF0aW86IFwieE1pZFlNaWRcIlxuICAgICAgICAgICAgICAgIFwiY2xpcC1wYXRoXCI6IGlmIGNvbmZpZy50eXBlID09IFxcZmlsbCA9PiBcInVybChcXCMje2lkLmNsaXB9KVwiIGVsc2UgJydcbiAgICAgICAgICAgICAgICBcInhsaW5rOmhyZWZcIjogY29uZmlnLmltZywgY2xhc3M6IFxcc29saWRcbiAgICAgICAgICAgIGltZyA9IG5ldyBJbWFnZSFcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyIFxcbG9hZCwgfj5cbiAgICAgICAgICAgICAgICBpZiBjb25maWdbXCJpbWctc2l6ZVwiXSA9PlxuICAgICAgICAgICAgICAgICAgICByZXQgPSBjb25maWdbXCJpbWctc2l6ZVwiXS5zcGxpdChcXCwpXG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSB7d2lkdGg6ICtyZXQuMCwgaGVpZ2h0OiArcmV0LjF9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiBpbWcud2lkdGggYW5kIGltZy5oZWlnaHQgPT4gc2l6ZSA9IHt3aWR0aDogaW1nLndpZHRoLCBoZWlnaHQ6IGltZy5oZWlnaHR9XG4gICAgICAgICAgICAgICAgZWxzZSBzaXplID0ge3dpZHRoOiAxMDAsIGhlaWdodDogMTAwfVxuICAgICAgICAgICAgICAgIHN2Zy5xdWVyeVNlbGVjdG9yICdtYXNrIGltYWdlJyAuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHRcbiAgICAgICAgICAgICAgICBncm91cC4xLnF1ZXJ5U2VsZWN0b3IgJ2ltYWdlJyAuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHRcblxuICAgICAgICAgICAgICAgIEBmaXQhXG4gICAgICAgICAgICAgICAgQHNldCB1bmRlZmluZWQsIGZhbHNlXG4gICAgICAgICAgICAgICAgQGluaXRlZCA9IHRydWVcbiAgICAgICAgICAgIGltZy5zcmMgPSBjb25maWcuaW1nXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQgZ3JvdXAuMFxuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkIGdyb3VwLjFcbiAgICAgICAgc3ZnLmF0dHJzIHdpZHRoOiBcXDEwMCUsIGhlaWdodDogXFwxMDAlICMsIHZpZXdCb3g6ICcwIDAgMTAwIDEwMCdcblxuICAgICAgICBAdHJhbnNpdGlvbiA9XG4gICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICBzcmM6IDBcbiAgICAgICAgICAgICAgICBkZXM6IDBcbiAgICAgICAgICAgIHRpbWU6IHt9XG5cbiAgICAgICAgICAgIGVhc2U6ICh0LGIsYyxkKSAtPlxuICAgICAgICAgICAgICAgIHQgPSB0IC8gKGQgKiAwLjUpXG4gICAgICAgICAgICAgICAgaWYgdCA8IDEgPT4gcmV0dXJuIGMgKiAwLjUgKiB0ICogdCArIGJcbiAgICAgICAgICAgICAgICB0ID0gdCAtIDFcbiAgICAgICAgICAgICAgICByZXR1cm4gLWMgKiAwLjUgKiAodCoodCAtIDIpIC0gMSkgKyBiXG5cbiAgICAgICAgICAgIGhhbmRsZXI6ICh0aW1lLCBkb1RyYW5zaXRpb24gPSB0cnVlKSAtPlxuICAgICAgICAgICAgICAgIGlmICFAdGltZS5zcmM/ID0+IEB0aW1lLnNyYyA9IHRpbWVcbiAgICAgICAgICAgICAgICBbbWluLG1heCxwcmVjXSA9IFtjb25maWdbXCJtaW5cIl0sIGNvbmZpZ1tcIm1heFwiXSwxL2NvbmZpZ1tcInByZWNpc2lvblwiXV1cbiAgICAgICAgICAgICAgICBbZHYsIGR0LCBkdXJdID0gW0B2YWx1ZS5kZXMgLSBAdmFsdWUuc3JjLCAodGltZSAtIEB0aW1lLnNyYykgKiAwLjAwMSwgK2NvbmZpZ1tcImR1cmF0aW9uXCJdIG9yIDFdXG4gICAgICAgICAgICAgICAgdiA9IGlmIGRvVHJhbnNpdGlvbiA9PiBAZWFzZShkdCwgQHZhbHVlLnNyYywgZHYsIGR1cikgZWxzZSBAdmFsdWUuZGVzXG4gICAgICAgICAgICAgICAgaWYgY29uZmlnLnByZWNpc2lvbiA9PiB2ID0gTWF0aC5yb3VuZCh2ICogcHJlYykgLyBwcmVjXG4gICAgICAgICAgICAgICAgZWxzZSBpZiBkb1RyYW5zaXRpb24gPT4gdiA9IE1hdGgucm91bmQodilcbiAgICAgICAgICAgICAgICB2ID4/PSBtaW5cbiAgICAgICAgICAgICAgICB2IDw/PSBtYXhcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gdlxuICAgICAgICAgICAgICAgIHAgPSAxMDAuMCAqICh2IC0gbWluICkgLyAoIG1heCAtIG1pbiApXG4gICAgICAgICAgICAgICAgaWYgaXMtc3Ryb2tlID0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBwYXRoMVxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0cm9rZS1kYXNoYXJyYXlcIjogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIGNvbmZpZ1tcInN0cm9rZS1kaXJcIl0gPT0gXFxyZXZlcnNlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMCAje2xlbmd0aCAqICgxMDAgLSBwKSAqIDAuMDF9ICN7bGVuZ3RoICogcCAqIDAuMDF9IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgPT4gXCIje3AgKiAwLjAxICogbGVuZ3RofSAjeygxMDAgLSBwKSAqIDAuMDEgKiBsZW5ndGggKyAxfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBib3ggPSBncm91cC4xLmdldEJCb3ghXG4gICAgICAgICAgICAgICAgICAgIGRpciA9IGNvbmZpZ1tcImZpbGwtZGlyXCJdXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0gaWYgZGlyID09IFxcYnR0IG9yICFkaXIgPT4gZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJveC55ICsgYm94LmhlaWdodCAqICgxMDAgLSBwKSAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYm94LmhlaWdodCAqIHAgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCwgd2lkdGg6IGJveC53aWR0aFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGRpciA9PSBcXHR0YiA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnksIGhlaWdodDogYm94LmhlaWdodCAqIHAgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCwgd2lkdGg6IGJveC53aWR0aFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGRpciA9PSBcXGx0ciA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnksIGhlaWdodDogYm94LmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYm94LngsIHdpZHRoOiBib3gud2lkdGggKiBwICogMC4wMVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGRpciA9PSBcXHJ0bCA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnksIGhlaWdodDogYm94LmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYm94LnggKyBib3gud2lkdGggKiAoMTAwIC0gcCkgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYm94LndpZHRoICogcCAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHN2Zy5xdWVyeVNlbGVjdG9yIFxccmVjdFxuICAgICAgICAgICAgICAgIG5vZGUuYXR0cnMgc3R5bGVcbiAgICAgICAgICAgICAgICBpZiBkdCA+PSBkdXIgPT4gZGVsZXRlIEB0aW1lLnNyYzsgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIHN0YXJ0OiAoc3JjLCBkZXMsIGRvVHJhbnNpdGlvbikgLT5cbiAgICAgICAgICAgICAgICBAdmFsdWUgPDw8IHtzcmMsIGRlc31cbiAgICAgICAgICAgICAgICAhISggcm9vdC5vZmZzZXRXaWR0aCB8fCByb290Lm9mZnNldEhlaWdodCB8fCByb290LmdldENsaWVudFJlY3RzIWxlbmd0aCApXG4gICAgICAgICAgICAgICAgaWYgIWRvVHJhbnNpdGlvbiBvciAhKCByb290Lm9mZnNldFdpZHRoIHx8IHJvb3Qub2Zmc2V0SGVpZ2h0IHx8IHJvb3QuZ2V0Q2xpZW50UmVjdHMhbGVuZ3RoICkgPT5cbiAgICAgICAgICAgICAgICAgICAgQHRpbWUuc3JjID0gMFxuICAgICAgICAgICAgICAgICAgICBAaGFuZGxlciAxMDAwLCBmYWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICBoYW5kbGVyLmFkZCBpZC5rZXksICh0aW1lKSB+PiByZXR1cm4gQGhhbmRsZXIgdGltZVxuXG4gICAgICAgIEBzZXQgPSAodixkb1RyYW5zaXRpb24gPSB0cnVlKSAtPlxuICAgICAgICAgICAgc3JjID0gQHZhbHVlIG9yIDBcbiAgICAgICAgICAgIGlmIHY/ID0+IEB2YWx1ZSA9IHYgZWxzZSB2ID0gQHZhbHVlXG4gICAgICAgICAgICBkZXMgPSBAdmFsdWVcbiAgICAgICAgICAgIEB0cmFuc2l0aW9uLnN0YXJ0IHNyYywgZGVzLCBkb1RyYW5zaXRpb25cblxuICAgICAgICBAc2V0ICgrY29uZmlnLnZhbHVlIG9yIDApLCBjb25maWdbXCJ0cmFuc2l0aW9uLWluXCJdIG9yIGZhbHNlXG4gICAgICAgIEBcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIFxcbG9hZCwgKC0+XG4gICAgICAgIGZvciBub2RlIGluIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXFwubGRCYXIpID0+XG4gICAgICAgICAgaWYgIW5vZGUubGRCYXIgPT4gbm9kZS5sZEJhciA9IG5ldyBsZEJhciBub2RlXG4gICAgKSwgZmFsc2VcblxubW9kdWxlLmV4cG9ydHMgPSBsZEJhclxuIiwiZXhwb3J0IHByZXNldHMgPVxuICAgIHJhaW5ib3c6XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ00xMCAxMEw5MCAxMCdcbiAgICAgICAgXCJzdHJva2VcIjogJ2RhdGE6bGRiYXIvcmVzLGdyYWRpZW50KDAsMSwjYTU1MWRmLCNmZDUxYWQsI2ZmN2Y4MiwjZmZiODc0LCNmZmViOTApJ1xuICAgICAgICBcImJib3hcIjogXCIxMCAxMCA4MCAxMFwiXG4gICAgZW5lcmd5OlxuICAgICAgICBcInR5cGVcIjogJ2ZpbGwnXG4gICAgICAgIFwicGF0aFwiOiAnTTE1IDVMODUgNUE1IDUgMCAwIDEgODUgMTVMMTUgMTVBNSA1IDAgMCAxIDE1IDUnXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcI2YwMFxuICAgICAgICBcImZpbGxcIjogJ2RhdGE6bGRiYXIvcmVzLGdyYWRpZW50KDQ1LDIsIzRlOSwjOGZiLCM0ZTkpJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFwibHRyXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjNDQ0XG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMVxuICAgICAgICBcImJib3hcIjogXCIxMCA1IDgwIDEwXCJcbiAgICBzdHJpcGU6XG4gICAgICAgIFwidHlwZVwiOiAnZmlsbCdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTUgNUw4NSA1QTUgNSAwIDAgMSA4NSAxNUwxNSAxNUE1IDUgMCAwIDEgMTUgNSdcbiAgICAgICAgXCJzdHJva2VcIjogXFwjZjAwXG4gICAgICAgIFwiZmlsbFwiOiAnZGF0YTpsZGJhci9yZXMsc3RyaXBlKCMyNWIsIzU4ZSwxKSdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcImx0clwiXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDFcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgNSA4MCAxMFwiXG4gICAgdGV4dDpcbiAgICAgICAgXCJ0eXBlXCI6ICdmaWxsJ1xuICAgICAgICBcImltZ1wiOiBcIlwiXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI3MFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCA3MCAyMFwiPjx0ZXh0IHg9XCIzNVwiIHk9XCIxMFwiIHRleHQtYW5jaG9yPVwibWlkZGxlXCIgZG9taW5hbnQtYmFzZWxpbmU9XCJjZW50cmFsXCIgZm9udC1mYW1pbHk9XCJhcmlhbFwiPkxPQURJTkc8L3RleHQ+PC9zdmc+XCJcIlwiXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMS4zXG4gICAgICAgIFwicGF0dGVybi1zaXplXCI6IDEwMFxuICAgICAgICBcImZpbGwtZGlyXCI6IFwibHRyXCJcbiAgICAgICAgXCJpbWctc2l6ZVwiOiBcIjcwLDIwXCJcbiAgICAgICAgXCJiYm94XCI6IFwiMCAwIDcwIDIwXCJcbiAgICBsaW5lOlxuICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTAgMTBMOTAgMTAnXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiAzXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsXCI6IFxcI2RkZFxuICAgICAgICBcInN0cm9rZS10cmFpbC13aWR0aFwiOiAxXG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDEwIDgwIDEwXCJcbiAgICBmYW46XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ00xMCA5MEE0MCA0MCAwIDAgMSA5MCA5MCdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICBcImZpbGxcIjogXFwjMjViXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDNcbiAgICAgICAgXCJzdHJva2UtZGlyXCI6IFxcbm9ybWFsXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICBcImJib3hcIjogXCIxMCA1MCA4MCA0MFwiXG4gICAgY2lyY2xlOlxuICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgXCJwYXRoXCI6ICdNNTAgMTBBNDAgNDAgMCAwIDEgNTAgOTBBNDAgNDAgMCAwIDEgNTAgMTAnXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXFxidHRcbiAgICAgICAgXCJmaWxsXCI6IFxcIzI1YlxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiBcXCNkZGRcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAzXG4gICAgICAgIFwic3Ryb2tlLWRpclwiOiBcXG5vcm1hbFxuICAgICAgICBcInN0cm9rZVwiOiBcXCMyNWJcbiAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXFwzXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsXCI6IFxcI2RkZFxuICAgICAgICBcInN0cm9rZS10cmFpbC13aWR0aFwiOiAwLjVcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgMTAgODAgODBcIlxuICAgIGJ1YmJsZTpcbiAgICAgICAgXCJ0eXBlXCI6ICdmaWxsJ1xuICAgICAgICBcInBhdGhcIjogJ001MCAxMEE0MCA0MCAwIDAgMSA1MCA5MEE0MCA0MCAwIDAgMSA1MCAxMCdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICBcImZpbGxcIjogJ2RhdGE6bGRiYXIvcmVzLGJ1YmJsZSgjMzlkLCNjZWYpJ1xuICAgICAgICBcInBhdHRlcm4tc2l6ZVwiOiBcIjE1MFwiXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDJcbiAgICAgICAgXCJzdHJva2UtZGlyXCI6IFxcbm9ybWFsXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICBcImJib3hcIjogXCIxMCAxMCA4MCA4MFwiXG4iLCIvL2TDqWZpbml0aW9uIGRlcyB2YXJpYWJsZXNcbmxldCBMaXN0ZVBsdWcgPSBbXSxcbiAgICBpID0gMCxcbiAgICB2YWxpZCA9IGZhbHNlO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGxldCBub21icmVfdXJsID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hbHN0b20vYmFzZWxpbmUtdHJhaW4vJyArIG5vbWJyZV91cmwpIHtcbiAgICAgICAgLy9pZGVudGlmaWNhdGlvbiBkZSBsYSBwcm9ncmVzcyBiYXJcbiAgICAgICAgcHJnYmFyID0gbmV3IGxkQmFyKFwiI3Rlc3QtcHJvZ3Jlc3NcIik7XG4gICAgfTtcbn0pO1xuLy8gRGVjbGFyYXRpb24gZCfDqXZlbmVtZW50IGF2YW50IGNoYXJnZW1lbnQgZGUgbCBhcGFnZVxuJCgnI3ZhbGlkLWFsbC1wbHVnJykuaGlkZSgpO1xuJCgnI2NhbmNlbC1hbGwtcGx1ZycpLmhpZGUoKTtcbi8vZGV0ZWN0aW9uIHNpIGxlIGJyb3dzZXIgZ8OocmUgbGUgZHJhZyZkcm9wXG52YXIgaXNBZHZhbmNlZFVwbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmV0dXJuICgoJ2RyYWdnYWJsZScgaW4gZGl2KSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiBkaXYgJiYgJ29uZHJvcCcgaW4gZGl2KSkgJiYgJ0Zvcm1EYXRhJyBpbiB3aW5kb3cgJiYgJ0ZpbGVSZWFkZXInIGluIHdpbmRvdztcbn0oKTtcbnZhciAkZm9ybSA9ICQoJy5ib3gnKTtcbnZhciAkaW5wdXQgPSAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLFxuICAgICRsYWJlbCA9ICRmb3JtLmZpbmQoJ2xhYmVsJyksXG4gICAgc2hvd0ZpbGVzID0gZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICAgICRsYWJlbC50ZXh0KGZpbGVzLmxlbmd0aCA+IDEgPyAoJGlucHV0LmF0dHIoJ2RhdGEtbXVsdGlwbGUtY2FwdGlvbicpIHx8ICcnKS5yZXBsYWNlKCd7Y291bnR9JywgZmlsZXMubGVuZ3RoKSA6IGZpbGVzWzBdLm5hbWUpO1xuICAgIH07XG5cbi8vYWpvdXRlciB1biBwbHVnXG5cbiQoJyNhZGQtZm9ybS1wbHVnJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIC8vICQoJyNjYXJkLWNvbnRlbnQtcGx1ZycpLmFwcGVuZChcInRlc3RcIik7XG4gICAgLy8gY29uc29sZS5sb2coJCgnLmNvbnRlbnQtbmFtZS1kcmFnLXBsdWcnKSlcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgICAkKCcjaW5wdXQtbmFtZS1wbHVnJykudmFsKCcnKTtcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZmFsc2U7XG4gICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy1zdWNjZXNzJyk7XG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykuY3NzKCdmb250LXdlaWdodCcsICcnKTtcbiAgICAgICAgJCgnLmxhYmVsLWRyb3AnKS5odG1sKCc8c3Ryb25nPiBDaG9vc2UgYSBmaWxlIDwvc3Ryb25nPiA8c3BhbiBjbGFzcz1cImJveF9fZHJhZ25kcm9wXCI+b3IgZHJhZyBpdCBoZXJlIDwvc3Bhbj4uPC9sYWJlbD4nKTtcbiAgICAgICAgJCgnI2NvbnRlbnQtbmFtZS1kcmFnLXBsdWcnKS5zaG93KCk7XG4gICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufSlcbi8vb24gb3V2cmUgbGUgZm9ybSBwb3VyIGFqb3V0ZXJcblxuJCgnI2FkZFBsdWdzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn0pO1xuaWYgKGlzQWR2YW5jZWRVcGxvYWQpIHtcbiAgICB2YXIgZHJvcHBlZEZpbGVzID0gZmFsc2U7XG4gICAgJGZvcm0uYWRkQ2xhc3MoJ2hhcy1hZHZhbmNlZC11cGxvYWQnKTsgLy8gbGV0dGluZyB0aGUgQ1NTIHBhcnQgdG8ga25vdyBkcmFnJmRyb3AgaXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyXG4gICAgJGZvcm0ub24oJ2RyYWcgZHJhZ3N0YXJ0IGRyYWdlbmQgZHJhZ292ZXIgZHJhZ2VudGVyIGRyYWdsZWF2ZSBkcm9wJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICAgICRmb3JtLm9uKCdkcmFnb3ZlciBkcmFnZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRmb3JtLmFkZENsYXNzKCdpcy1kcmFnb3ZlcicpO1xuICAgIH0pO1xuICAgICRmb3JtLm9uKCdkcmFnbGVhdmUgZHJhZ2VuZCBkcm9wJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkZm9ybS5yZW1vdmVDbGFzcygnaXMtZHJhZ292ZXInKTtcblxuICAgIH0pO1xuICAgICRmb3JtLm9uKCdkcm9wJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICAgICAgJGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykudGV4dChkcm9wcGVkRmlsZXNbMF0ubmFtZSk7XG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykuY3NzKCdmb250LXdlaWdodCcsICdib2xkJyk7XG4gICAgfSk7XG4gICAgJGZvcm0uY2hhbmdlKCdkcm9wJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICAgICAgJGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfSk7XG59XG4kZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnI3ZhbGlkLXBsdWcnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBQbHVnID0ge307XG4gICAgaWYgKCQoJyNpbnB1dC1uYW1lLXBsdWcnKS52YWwoKSAhPSBcIlwiICYmIGRyb3BwZWRGaWxlcykge1xuXG4gICAgICAgICQoJyN2YWxpZC1hbGwtcGx1ZycpLnNob3coKTtcbiAgICAgICAgJCgnI2NhbmNlbC1hbGwtcGx1ZycpLnNob3coKTtcblxuICAgICAgICBQbHVnWyduYW1lX3BsdWcnXSA9ICQoJyNpbnB1dC1uYW1lLXBsdWcnKS52YWwoKTtcblxuICAgICAgICAvLyBQYXJ0aSBkdSB0cmFpdGVtZW50IGR1IGRyYWcgYW4gZHJvcCBmaWxlXG4gICAgICAgIGlmICgkZm9ybS5oYXNDbGFzcygnaXMtdXBsb2FkaW5nJykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgc2hvd0ZpbGVzKGRyb3BwZWRGaWxlcyk7XG4gICAgICAgICRmb3JtLmFkZENsYXNzKCdpcy11cGxvYWRpbmcnKS5yZW1vdmVDbGFzcygnaXMtZXJyb3InKTtcblxuICAgICAgICBpZiAoaXNBZHZhbmNlZFVwbG9hZCkge1xuICAgICAgICAgICAgdmFyIGFqYXhEYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtLmdldCgwKSk7XG5cbiAgICAgICAgICAgIGlmIChkcm9wcGVkRmlsZXMpIHtcbiAgICAgICAgICAgICAgICAkLmVhY2goZHJvcHBlZEZpbGVzLCBmdW5jdGlvbiAoaSwgZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBhamF4RGF0YS5hcHBlbmQoJGlucHV0LmF0dHIoJ25hbWUnKSwgZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIFBsdWdbJ2tleV9wbHVnJ10gPSBmaWxlLm5hbWU7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFqYXhEYXRhKTtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS91cGxvYWRGaWxlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgLypkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICdmaWxlJyA6IGFqYXhEYXRhLFxuICAgICAgICAgICAgICAgICAgICAnYnVja2V0JzogJ2FwcGxpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgJ3VwbG9hZF9yZXF1ZXN0JzogXCJ1cGxvYWRcIlxuICAgICAgICAgICAgICAgIH0sKi9cbiAgICAgICAgICAgICAgICB4aHI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZ0LmxvYWRlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGVyY2VudENvbXBsZXRlID0gKGV2dC5sb2FkZWQgLyBldnQudG90YWwpICogMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vRG8gc29tZXRoaW5nIHdpdGggdXBsb2FkIHByb2dyZXNzIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmdiYXIuc2V0KHBlcmNlbnRDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBlcmNlbnRDb21wbGV0ZSA9PSAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN0ZXN0LXByb2dyZXNzXCIpLmFkZENsYXNzKCdpcy1ibGluaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldnQubG9hZGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnRvdGFsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhocjtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZGF0YTogYWpheERhdGEsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkZm9ybS5yZW1vdmVDbGFzcygnaXMtdXBsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjdGVzdC1wcm9ncmVzc1wiKS5yZW1vdmVDbGFzcygnaXMtYmxpbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVQbHVnLnB1c2goUGx1Zyk7XG4gICAgICAgICAgICAgICAgICAgIExpc3RlUGx1Zy5mb3JFYWNoKHdyaXRlUGx1Zyk7XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGRhdGEuc3VjY2VzcyA9PSB0cnVlID8gJ2lzLXN1Y2Nlc3MnIDogJ2lzLWVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNjb250ZW50LW5hbWUtZHJhZy1wbHVnJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKExpc3RlUGx1ZylcblxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2cgdGhlIGVycm9yLCBzaG93IGFuIGFsZXJ0LCB3aGF0ZXZlciB3b3JrcyBmb3IgeW91XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29ycnkgYm9ieVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpZnJhbWVOYW1lID0gJ3VwbG9hZGlmcmFtZScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICRpZnJhbWUgPSAkKCc8aWZyYW1lIG5hbWU9XCInICsgaWZyYW1lTmFtZSArICdcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9pZnJhbWU+Jyk7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJGlmcmFtZSk7XG4gICAgICAgICAgICAkZm9ybS5hdHRyKCd0YXJnZXQnLCBpZnJhbWVOYW1lKTtcblxuICAgICAgICAgICAgJGlmcmFtZS5vbmUoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKCRpZnJhbWUuY29udGVudHMoKS5maW5kKCdib2R5JykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAkZm9ybVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLXVwbG9hZGluZycpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSA/ICdpcy1zdWNjZXNzJyA6ICdpcy1lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuc3VjY2VzcykgJGVycm9yTXNnLnRleHQoZGF0YS5lcnJvcik7XG4gICAgICAgICAgICAgICAgJGZvcm0ucmVtb3ZlQXR0cigndGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgJGlmcmFtZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBuYW1lICYgZmlsZSBwbHVnJylcbiAgICB9XG5cblxufSlcblxuJCgnI3Rlc3QtdXBsb2FkJykub24oXCJjbGlja1wiLCBcImJ1dHRvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpbGVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIikuZmlsZXM7XG4gICAgdmFyIHRlbXBEZXN0aW5hdGlvbiA9IFwidGVzdFwiXG4gICAgdmFyIG5hbWVGaWxlID0gXCJpbml0XCJcbiAgICB2YXIgdXBsb2FkU3RhdHVzID0gXCJQRU5ESU5HXCJcbiAgICAvL09uIGRyYWcgZXQgZHJvcFxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogJy9hbHN0b20vcmVxdWVzdEZpbGUnLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICdidWNrZXQnOiAnYXBwbGljYXRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgdGVtcERlc3RpbmF0aW9uID0gcmVzcG9uc2UucGF0aFxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWxzdG9tL3VwbG9hZEZpbGUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICdidWNrZXQnOiAnYXBwbGljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAndXBsb2FkX3JlcXVlc3QnOiBcInVwbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICAnZmlsZW5hbWUnOiBuYW1lRmlsZSxcbiAgICAgICAgICAgICAgICAgICAgJ3RlbXBEZXN0aW5hdGlvbic6IHRlbXBEZXN0aW5hdGlvblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvL2FzayBmb3IgdGhlIHN0YXR1c1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjFcIik7XG4gICAgICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuJCgnI3ZhbGlkLWFsbC1wbHVnJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsIFwiMC40XCIpO1xuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XG4gICAgbGV0IGlkQmFzZWxpbmUgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9mbHVzaC1wbHVnJyxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAnaWRCYXNlbGluZSc6IGlkQmFzZWxpbmUsXG4gICAgICAgICAgICAnUGx1Z3MnOiBMaXN0ZVBsdWdcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvL2FzayBmb3IgdGhlIHN0YXR1c1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuJCgnI2NvbnRlbnQtdHItcGx1ZycpLm9uKCdjbGljaycsICcudGQtdGFibGUgPiAudGQtcGx1ZycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjAuNFwiKTtcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xuXG4gICAgbGV0IGtleSA9ICQodGhpcylbMF1bXCJpZFwiXTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICcvYWxzdG9tL2Rvbndsb2FkRmlsZScsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgJ2tleSc6IGtleVxuICAgICAgICB9LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgXCIxXCIpO1xuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG5cblxuLy9Hw6lyZSBsZSBjbGlxdWUgZGUgbGEgc3VwcHJlc3Npb25cbiQoJyNzaG93LWRvbmUtcGx1ZycpLm9uKCdjbGljaycsICcuY29udGVudC1rZXktbmFtZS1wbHVnID4gYScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKVswXVtcImlkXCJdWzBdID09IFwiZFwiKSB7XG4gICAgICAgIGRlbGV0ZVBsdWcoZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiaWRcIl0pKTtcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKVswXVtcImlkXCJdKTtcbiAgICB9XG59KTtcbi8vRXh0cmFpdCBsZSBub21icmUgZCd1bmUgc3RyZWluZ1xuZnVuY3Rpb24gZXh0cmFpdE5vbWJyZShzdHIpIHtcbiAgICByZXR1cm4gTnVtYmVyKHN0ci5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIikpXG59XG4vL1N1cHJlc3Npb24gZHUgcGx1ZyBkYW5zIGxlIHRhYmxlYXUgZXQgbGUgZnJvbnRcbmZ1bmN0aW9uIGRlbGV0ZVBsdWcocG9zaXRpb24pIHtcbiAgICBMaXN0ZVBsdWcuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAkKCcuY29udGVudC1rZXktbmFtZS1wbHVnJykucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2coTGlzdGVQbHVnKVxuICAgIExpc3RlUGx1Zy5mb3JFYWNoKHdyaXRlUGx1Zyk7XG59XG5cbmZ1bmN0aW9uIHdyaXRlUGx1ZyhlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcbiAgICAvL1Rlc3QgbCdleGlzdGVuY2UgZGUgbGEgZGl2IGRhbnMgbGUgY2FzIG/DuSBlbGxlIGV4aXN0ZSBsYSByZW1wbGFjZSBzaSBwYXMgbGEgbWV0IGVuIHBsYWNlXG4gICAgaWYgKCQoJyNrZXktbmFtZS0nICsgaW5kZXgpLmxlbmd0aCkge1xuICAgICAgICAkKCcja2V5LW5hbWUtJyArIGluZGV4KS5yZXBsYWNlV2l0aChcIjxzcGFuIGNsYXNzPSdjb250ZW50LWtleS1uYW1lLXBsdWcnIGlkPSdrZXktbmFtZS1cIiArIGluZGV4ICsgXCInPjxwPlwiICsgZWxlbWVudC5uYW1lX3BsdWcgKyBcIjwvcD48cD5cIiArIGVsZW1lbnQua2V5X3BsdWcgKyBcIjwvcD48YSBpZD0nZGVsZXRlLXBsdWctXCIgKyBpbmRleCArIFwiJz48aSBjbGFzcz0nZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZSc+PC9pPjwvYT48L3NwYW4+XCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI3Nob3ctZG9uZS1wbHVnJykuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J2NvbnRlbnQta2V5LW5hbWUtcGx1ZycgaWQ9J2tleS1uYW1lLVwiICsgaW5kZXggKyBcIic+PHA+XCIgKyBlbGVtZW50Lm5hbWVfcGx1ZyArIFwiPC9wPjxwPlwiICsgZWxlbWVudC5rZXlfcGx1ZyArIFwiPC9wPjxhIGlkPSdkZWxldGUtcGx1Zy1cIiArIGluZGV4ICsgXCInPjxpIGNsYXNzPSdmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlJz48L2k+PC9hPjwvc3Bhbj5cIik7XG4gICAgfVxuXG59IiwiLy8gVmlkYWdlIGRlcyBpbnB1dHMgYXV4IGNoYW5nZW1lbnQgZGUgc2VsZWN0XHJcbi8vICQoJ3NlbGVjdFtuYW1lPVwidHJhaW5zW3Byb2plY3RzXVwiXSwgc2VsZWN0W25hbWU9XCJ0cmFpbnNbdHJhaW5UeXBlXVwiXScpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAkKCdpbnB1dFtuYW1lPVwidHJhaW5zW25hbWVdXCJdJykudmFsKCcnKTtcclxuLy8gfSk7XHJcblxyXG4vKk1hc3F1YWdlIGRlIGNlcnRhaW5zIMOpbGVtZW50ICovXHJcbiQoJyNjcmVhdGUtZXJ0bXMtMScpLmhpZGUoKTtcclxuJCgnI2NyZWF0ZS1lcnRtcy0yJykuaGlkZSgpO1xyXG4kKFwiI2NyZWF0ZS1lcnRtcy10cmFpbi0xXCIpLmhpZGUoKTtcclxuJCgnI2NyZWF0ZV9zb3VzdHlwZScpLmhpZGUoKTtcclxuJCgnI2NyZWF0ZV90eXBlJykuaGlkZSgpO1xyXG4kKCcjbW9kYWwtYm9keScpLmhpZGUoKTtcclxuJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiQoJyNjbG9zZS1tb2RhbC1mb3JtLWJhc2VsaW5lLXRyYWluJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbn0pXHJcbmZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLScgKyBpKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG59XHJcbmxldCBpZEVxdWlwbWVudCA9IFwiXCIsXHJcbiAgICBpbmRleEVWQztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBub21icmVfdXJsID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hbHN0b20vSW5zdGFuY2VCYXNlbGluZS8nICsgbm9tYnJlX3VybCkge1xyXG5cclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrQmFzZWxpbmVcIiwgKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgJCgnI3NlbGVjdF9iYXNlbGluZV8xJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VsZWN0X2Jhc2VsaW5lXzInKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICQoJyNzZWxlY3RfYmFzZWxpbmVfMScpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICQoJyNzZWxlY3RfYmFzZWxpbmVfMicpLnZhbCgnJyk7XHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG4kKCcjc2VsZWN0X3RyYWluJykuc2hvdygpO1xyXG4kKCcjc2VsZWN0X2xvY29tb3RpdmUnKS5zaG93KCk7XHJcblxyXG5sZXQgY3VycmVudF9jaG9pY2UgPSBcIlwiLFxyXG4gICAgZXJ0bXNfbGVmdCA9IGZhbHNlLFxyXG4gICAgZXJ0bXNfbWlkZGxlID0gZmFsc2UsXHJcbiAgICBlcnRtc19yaWdodCA9IGZhbHNlO1xyXG5cclxuJCgnI2Nsb3NlLW1vZGFsLWJhc2VsaW5lLTEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZXJ0bXNfcmlnaHQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmFkZENsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgZXJ0bXNfbGVmdCA9IGZhbHNlO1xyXG59KVxyXG4kKCcjY2xvc2UtbW9kYWwtYmFzZWxpbmUtMicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmhpZGUoKTtcclxuICAgIGVydG1zX3JpZ2h0ID0gZmFsc2U7XHJcbn0pXHJcbiQoJyNlcnRtcy10cmFpbi0xJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZXJ0bXNfbGVmdCA9IHRydWU7XHJcbiAgICBlcnRtc19taWRkbGUgPSBmYWxzZTtcclxuICAgIC8vbCdlcnRtcyBkZSBnYXVjaGUgc2VsZWN0aW9ubmVyXHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMScpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMScpLnRleHQoJ0Jhc2VsaW5lIGxlZnQnKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtMycpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuc2hvdygpO1xyXG4gICAgaWYgKGVydG1zX3JpZ2h0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuaGlkZSgpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG4kKCcjZXJ0bXMtdHJhaW4tMicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGwnZXJ0bXMgZHUgbWlsaWV1IHNlbGVjdGlvbm5lclxyXG4gICAgZXJ0bXNfbGVmdCA9IGZhbHNlO1xyXG4gICAgZXJ0bXNfcmlnaHQgPSBmYWxzZTtcclxuICAgIGVydG1zX21pZGRsZSA9IHRydWU7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMScpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMycpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMScpLnRleHQoJ0Jhc2VsaW5lIG1pZGxlJyk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5oaWRlKCk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5zaG93KCk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5hZGRDbGFzcygnb2Zmc2V0LW1kLTMnKTtcclxuXHJcbn0pO1xyXG4kKCcjZXJ0bXMtdHJhaW4tMycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGwnZXJ0bXMgZGUgZHJvaXRlIHNlbGVjdGlvbm5lclxyXG4gICAgJCgnI2VydG1zLXRyYWluLTMnKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgZXJ0bXNfcmlnaHQgPSB0cnVlO1xyXG4gICAgZXJ0bXNfbWlkZGxlID0gZmFsc2U7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMicpLnRleHQoJ0Jhc2VsaW5lIHJpZ2h0Jyk7XHJcbiAgICBpZiAoZXJ0bXNfbGVmdCA9PSB0cnVlICYmIGVydG1zX21pZGRsZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtMycpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuICAgIH0gZWxzZSBpZiAoZXJ0bXNfcmlnaHQgPT0gdHJ1ZSAmJiBlcnRtc19sZWZ0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC0zJyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmFkZENsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbn0pO1xyXG5cclxuXHJcbiQoJyNlcnRtcy1sb2NvLTEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlcnRtc19sZWZ0ID0gdHJ1ZTtcclxuICAgIGlmIChlcnRtc19yaWdodCA9PSB0cnVlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5zaG93KCk7XHJcbiAgICB9XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMScpLnRleHQoJ0Jhc2VsaW5lIGxlZnQnKTtcclxuICAgICQoJyNlcnRtcy1sb2NvLTEnKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLWxvY28tMicpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTEnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0zJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxufSk7XHJcbiQoJyNlcnRtcy1sb2NvLTInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlcnRtc19yaWdodCA9IHRydWU7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMicpLnRleHQoJ0Jhc2VsaW5lIHJpZ2h0Jyk7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTMnKS5jc3MoJ29wYWNpdHknLCAnMScpXHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTEnKS5jc3MoJ29wYWNpdHknLCAnMCcpXHJcbiAgICAkKCcjZXJ0bXMtbG9jby0yJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy1sb2NvLTEnKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgaWYgKGVydG1zX2xlZnQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG5cclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmFkZENsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbi8vUmVjdXBlcmUgbGUgc2VsZWN0IGRlIGxhIGJhc2VsaW5lIGV0IGxlIG1ldCBlbiB2aXN1ZWxcclxuJCgnI2FkZC1iYXNlbGluZS0xJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgaWYgKGVydG1zX21pZGRsZSkge1xyXG4gICAgICAgICQoJyNlcnRtcy10cmFpbi0zJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICAkKCcjZXJ0bXMtdHJhaW4tMScpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICB9IGVsc2UgaWYgKGVydG1zX2xlZnQpIHtcclxuICAgICAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICB9XHJcbiAgICAvLyAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICBsZXQgaWRCYXNlbGluZSA9ICQoJyNzZWxlY3RfYmFzZWxpbmVfMSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgICQoJyN0aXRsZV9iYXNlbGluZV9tb2RhbCcpLmh0bWwoJCgnI3NlbGVjdF9iYXNlbGluZV8xIG9wdGlvbjpzZWxlY3RlZCcpLnRleHQoKSk7XHJcbiAgICAvLyAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9DaGVja0VxdWlwZW1lbnRzLycgKyBpZEJhc2VsaW5lLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgJzAuNCcpO1xyXG4gICAgICAgICAgICBsZXQgRXF1aXBtZW50cyA9IEpTT04ucGFyc2UocmVzcG9uc2UuZXF1aXBtZW50cyk7XHJcblxyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLmZvckVhY2goQ291bnROdW1iZXJFcXVpcHQpO1xyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLmZvckVhY2goRmluZEluZGV4RXZjKTtcclxuICAgICAgICAgICAgRXF1aXBtZW50cy5mb3JFYWNoKHJldHVybkluZGV4RWxlbWVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuXHJcbiQoJyNhZGQtYmFzZWxpbmUtMicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcblxyXG4gICAgLy8gJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgbGV0IG5hbWVfYmFzZWxpbmVfMSA9ICQoJyNzZWxlY3RfYmFzZWxpbmVfMiBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgIGNvbnNvbGUubG9nKG5hbWVfYmFzZWxpbmVfMSlcclxuICAgIC8vICQoJyNjb250ZW50LW5hbWUtYmFzZWxpbmUtMScpLmFwcGVuZChcIjxoNT5cIiArIG5hbWVfYmFzZWxpbmVfMSArIFwiPC9oNT5cIilcclxuXHJcbn0pXHJcblxyXG4vLyBSZXF1ZXRlIEFKQVggcG91ciByZW1wbGlyIGxlIGZvcm11bGFpcmUgZCfDqXF1aXBlbWVudCBhdmVjIGwnZXF1aXBlbWVudCBzZWxlY3Rpb25uZXJcclxuJCgnI3Nob3ctZXF1aXBtZW50ICcpLm9uKCdjbGljaycsICcuZGVzY3JpcHRpb24gPiAuY29udGVudC1kZXNjcmlwdGlvbi1kdHIgPiBidXR0b24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICBpZEVxdWlwbWVudCA9IGV4dHJhaXROb21icmUoJCh0aGlzKVswXVtcImlkXCJdKVxyXG4gICAgdmFyICR0aGlzID0gJChcIiNmb3JtX2VxdWlwZW1lbnRfZWRpdF9iYXNlbGluZVwiKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LWJhc2VsaW5lLycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwocmVzcG9uc2VbXCJ0eXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICBkYXRhWyQoJyNlcXVpcGVtZW50X1R5cGUnKS5hdHRyKCduYW1lJyldID0gJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGkgaW5wdXQgYXZlYyB2YWxldXIgcmVjdSBkZSBsJ2VxdWlwZW1lbnRcclxuICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfVHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9zb3VzX3R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW1wiU291c1R5cGVcIl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIlNvdXNUeXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfRFRSX2JvYXJkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImRUUkJvYXJkXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfSW5kaWNlX0RUUic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJpbmRpY2VEVFJcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9OdW1fc2VyaWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wibnVtU2VyaWVcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbi8vUmVtcGxpciBsZXMgaW5wdXRzIGF2ZWMgbGVzIG5vdXZlbGxlcyB2YWxldXJzXHJcbiQoJyNzb3VtaXNzaW9uLWVxdWlwZW1lbnQtZWRpdC1iYXNlbGluZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbn0pXHJcbmxldCBuZXdfZXF1aXBtZW50X251bSA9IFwiXCIsXHJcbiAgICB0b3RhbEVxdWlwdCA9IFwiXCIsXHJcbiAgICBuZXdfZXF1aXBtZW50X251bV9zZXJpZSA9IFtdO1xyXG5cclxuLy8gU291bWlzc2lvbiBmb3JtdWxhaXJlIGRlIHRyYWluXHJcbiQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdF9iYXNlbGluZScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG5cclxuICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICB9KVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC1iYXNlbGluZS8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBlcXVpcGVtZW50OiBkYXRhXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnI2J0bi1hZGQtbnVtYmVyLXNlcmllJyArIGlkRXF1aXBtZW50KS5yZXBsYWNlV2l0aChcIjxwPlwiICsgcmVzcG9uc2UubnVtU2VyaWUgKyBcIjwvcD5cIilcclxuICAgICAgICAgICAgbmV3X2VxdWlwbWVudF9udW1fc2VyaWUucHVzaChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG5ld19lcXVpcG1lbnRfbnVtKys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG4vL1ZhbGlkZXIgbCdpbnN0YW5jZSBkZXMgZXF1aXBlbWVudHNcclxuJCgnI3ZhbGlkLWJhc2VsaW5lLXRyYWluJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKG5ld19lcXVpcG1lbnRfbnVtICE9IHRvdGFsRXF1aXB0KSB7XHJcbiAgICAgICAgYWxlcnQoJ3BsZWFzZSBlbnRlciBudW0gc2VyaWUgYmVmb3JlIGluc3RhbmNlIGJhc2VsaW5lJylcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGxldCBpZF90cmFpbiA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICBsZXQgaWRfYmFzZWxpbmUgPSAkKCcjc2VsZWN0X2Jhc2VsaW5lXzEgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS9hZGRCYXNlbGluZUluc3RhbmNpZXInLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkX3RyYWluOiBpZF90cmFpbixcclxuICAgICAgICAgICAgICAgIGJhc2VsaW5lOiBpZF9iYXNlbGluZSxcclxuICAgICAgICAgICAgICAgIG5ld19lcXVpcHQ6IG5ld19lcXVpcG1lbnRfbnVtX3NlcmllXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2Fsc3RvbS9iYXNlbGluZS10cmFpbi9cIiArIHJlc3BvbnNlLmlkYmFzZWxpbmU7XHJcbiAgICAgICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KVxyXG4vLyBSZXF1ZXRlIEFKQVggcG91ciByZW1wbGlyIGxlIGZvcm11bGFpcmUgZCfDqXF1aXBlbWVudCBhdmVjIGwnZXF1aXBlbWVudCBzZWxlY3Rpb25uZXIgaW5zdGFuY2llclxyXG4kKCcuY2FyZCcpLm9uKCdjbGljaycsICcuZWRpdC1kZWxldGUtZXF1aXBlbWVudCA+IGEnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgaWRFcXVpcG1lbnQgPSBleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJjbGFzc0xpc3RcIl1bMF0pXHJcbiAgICB2YXIgJHRoaXMgPSAkKFwiI2Zvcm1fZXF1aXBlbWVudF9lZGl0X2luc3RhbmNlXCIpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQtaW5zdGFuY2UvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKHJlc3BvbnNlW1widHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgZGF0YVskKCcjZXF1aXBlbWVudF9UeXBlJykuYXR0cignbmFtZScpXSA9ICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpIGlucHV0IGF2ZWMgdmFsZXVyIHJlY3UgZGUgbCdlcXVpcGVtZW50XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X1R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfc291c190eXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVtcIlNvdXNUeXBlXCJdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJTb3VzVHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0RUUl9ib2FyZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJkVFJCb2FyZFwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0luZGljZV9EVFInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiaW5kaWNlRFRSXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfTnVtX3NlcmllJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIm51bVNlcmllXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4vL0Zvcm11bGFpcmUgZCdlZGl0IGRlIGwnw6lxdWlwZW1lbnRcclxuJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0X2luc3RhbmNlJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0JykuY3NzKFwib3BhY2l0eVwiLCBcIjAuNFwiKTtcclxuXHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge30sXHJcbiAgICAgICAgYWN0aW9uO1xyXG4gICAgLy9SZW1wbGkgZGF0YSBhIHBhcnRpciBkZXMgdmFsZXVyIGRlcyBpbnB1dHNcclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpXHJcblxyXG4gICAgICAgIGlmIChuYW1lICE9IChcImVxdWlwZW1lbnRbX3Rva2VuXVwiKSAmJiBuYW1lICE9IChcInNvdW1pc3Npb25fZXF1aXBlbWVudFwiKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LWluc3RhbmNlLycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAnZXF1aXBlbWVudCc6IGRhdGEsXHJcbiAgICAgICAgICAgIFwic291bWlzc2lvbl9lZGl0X2VxdWlwZW1lbnRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgJ2lkZXF1aXBtZW50JzogaWRFcXVpcG1lbnRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBGaW5kSW5kZXhFdmMoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICBpbmRleCA9IGVsZW1lbnRbJ2lkJ107XHJcbiAgICBpZiAoZWxlbWVudFsndHlwZSddWydpZCddID09IFwiMVwiICYmIChlbGVtZW50WydTdGF0dXMnXSA9PSB0cnVlKSkge1xyXG5cclxuICAgICAgICAkKFwiI3Nob3ctZXF1aXBtZW50XCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgZWxlbWVudFsndHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFkZENsYXNzKFwiZGVzY3JpcHRpb24tU3VidHlwZUNhcmRcIilcclxuICAgICAgICBpZiAoZWxlbWVudFsnU291c1R5cGUnXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0clwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZFRSQm9hcmRcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiaW5kaWNlRFRSXCJdICsgJzwvcD4nKVxyXG4gICAgICAgIGlmIChlbGVtZW50WydudW1TZXJpZSddID09IFwiXCIpIHtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPVwicGFkZGluZzogMnB4XCIgaWQgPSBcImJ0bi1hZGQtbnVtYmVyLXNlcmllJyArIGVsZW1lbnRbJ2lkJ10gKyAnXCIgPiBBZGQgbnVtYmVyIG9mIHNlcmllIDwvYnV0dG9uPicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50WydudW1TZXJpZSddICsgJzwvcD4nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbmRleEVWQyA9ICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHVybkluZGV4RWxlbWVudChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuXHJcblxyXG4gICAgaW5kZXggPSBlbGVtZW50WydpZCddO1xyXG5cclxuICAgIGlmICgoZWxlbWVudFsnU3RhdHVzJ10gPT0gdHJ1ZSkgJiYgZWxlbWVudFsndHlwZSddWydpZCddICE9IFwiMVwiKSB7XHJcblxyXG4gICAgICAgIC8vVGVzdCBsJ2V4aXN0ZW5jZSBkZSBsYSBkaXYgZGFucyBsZSBjYXMgb8O5IGVsbGUgZXhpc3RlIGxhIHJlbXBsYWNlIHNpIHBhcyBsYSBtZXQgZW4gcGxhY2VcclxuICAgICAgICBpZiAoJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5yZXBsYWNlV2l0aCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjc2hvdy1lcXVpcG1lbnRcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy90ZXN0IHNpIGwnw6lxdWlwZW1lbnQgZXN0IGxhIGNhcnRlIG91IG5vblxyXG4gICAgICAgIGlmIChlbGVtZW50Wyd0eXBlJ11bJ2lkJ10gIT0gXCIyXCIpIHtcclxuXHJcbiAgICAgICAgICAgIC8vU3dpdGggcmVwbGFjZW1lbnQgZGUgbCdpZCBkdSB0eXBlIGF2ZWMgc29uIG5vbVxyXG4gICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgZWxlbWVudFsndHlwZSddWyduYW1lJ10pKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50WydTb3VzVHlwZSddICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0clwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgICAgIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJkVFJCb2FyZFwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiaW5kaWNlRFRSXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFsnbnVtU2VyaWUnXSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgc3R5bGU9XCJwYWRkaW5nOiAycHhcIiBpZCA9IFwiYnRuLWFkZC1udW1iZXItc2VyaWUnICsgZWxlbWVudFsnaWQnXSArICdcIiA+IEFkZCBudW1iZXIgb2Ygc2VyaWUgPC9idXR0b24+JylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFsnbnVtU2VyaWUnXSArICc8L3A+IDxhIGlkPVwiZWRpdC0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gPC9hPiA8YSBpZD1cImRlbGV0ZS0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3MgPSBcImZhcyBmYS10cmFzaC1hbHQgcG91YmVsbGVcIj4gPC9pPjwvYT4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy9FY3JpcyBsZSBub20gZHUgdHlwZSBcImNhcnRlXCIgc291cyBsZSB0eXBlICBFVkNcclxuICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKHdyaXRlVHlwZSg1LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICAgICAgLy9QYXJjb3VzIGxlIHR5cGUgZGUgc291c3R5cGUgXHJcbiAgICAgICAgICAgIC8vICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNiwgZWxlbWVudFsnU291c1R5cGUnXVsnbmFtZSddKSk7XHJcblxyXG4gICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0ciBjb250ZW50LWRlc2NyaXB0aW9uLWR0ckNhcmRcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZFRSQm9hcmRcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImluZGljZURUUlwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRbJ251bVNlcmllJ10gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPVwicGFkZGluZzogMnB4XCIgaWQgPSBcImJ0bi1hZGQtbnVtYmVyLXNlcmllJyArIGVsZW1lbnRbJ2lkJ10gKyAnXCIgPiBBZGQgbnVtYmVyIG9mIHNlcmllIDwvYnV0dG9uPicpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbJ251bVNlcmllJ10gKyAnPC9wPiA8YSBpZD1cImVkaXQtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IDwvYT4gPGEgaWQ9XCJkZWxldGUtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzID0gXCJmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlXCI+IDwvaT48L2E+JylcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ291bnROdW1iZXJFcXVpcHQoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICB0b3RhbEVxdWlwdCsrO1xyXG59XHJcbi8vRXh0cmFpdCBsZSBub21icmUgZCd1bmUgc3RyZWluZ1xyXG5mdW5jdGlvbiBleHRyYWl0Tm9tYnJlKHN0cikge1xyXG4gICAgcmV0dXJuIE51bWJlcihzdHIucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpKVxyXG59XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlVHlwZShzaXplLCBuYW1lKSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXR5cGUgXCI+JyArIG5hbWUgKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgc291c3R5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVN1YnR5cGUoc2l6ZSwgbmFtZSkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLVR5cGUgXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyBuYW1lICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHNvdXN0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVTdWJ0eXBlQ2FyZChzaXplLCBuYW1lKSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tc3VidHlwZVwiIGlkPVwiZGVzY3JpcHRpb24tc3ViVHlwZSBcIj4nICsgbmFtZSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy8gLy9FY3JpdCBsZXMgMiBpY29ucyBkJ2VkaXQgZXQgZGVsZXRlXHJcbi8vIGZ1bmN0aW9uIHdyaXRlRWRpdERlbGV0ZShpbmRleCkge1xyXG4vLyAgICAgcmV0dXJuICcgPHAgY2xhc3M9XCJlZGl0LWRlbGV0ZS1lcXVpcGVtZW50XCI+IDxhIGlkPVwiZWRpdC0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gPC9hPjwvcD4nO1xyXG4vLyB9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=