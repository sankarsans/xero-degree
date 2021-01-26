
$(window).load(function() {
  $("#loader").delay(1000).fadeOut("slow");
})
      

$(document).ready(function(){
    $('.next').click(function () {

        var nextId = $(this).parents('.tab-pane').next().attr("id");
        $('[href=#' + nextId + ']').tab('show');
        return false;
  
      })
  
      $('.back').click(function () {
  
        var prevId = $(this).parents('.tab-pane').prev().attr("id");
        $('[href=#' + prevId + ']').tab('show');
        return false;
  
      })
  
      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  
        //update progress
        var step = $(e.target).data('step');
        var percent = (parseInt(step) / 4) * 100;
  
        $('.progress-bar').css({
          width: percent + '%'
        });
        $('.progress-bar').text("Step " + step + " of 5");
  
        //e.relatedTarget // previous tab
  
      })
  
      $('.first').click(function () {
  
        $('#myWizard a:first').tab('show')
  
      })
    
      // (function () {
      //   var $,
      //     __indexOf = [].indexOf || function (item) {
      //       for (var i = 0, l = this.length; i < l; i++) {
      //         if (i in this && this[i] === item) return i;
      //       }
      //       return -1;
      //     };
  
      //   $ = jQuery;
  
      //   $.fn.validateCreditCard = function (callback, options) {
      //     var bind, card, card_type, card_types, get_card_type, is_valid_length, is_valid_luhn, normalize, validate,
      //       validate_number, _i, _len, _ref;
      //     card_types = [{
      //       name: 'amex',
      //       pattern: /^3[47]/,
      //       valid_length: [15]
      //     }, {
      //       name: 'diners_club_carte_blanche',
      //       pattern: /^30[0-5]/,
      //       valid_length: [14]
      //     }, {
      //       name: 'diners_club_international',
      //       pattern: /^36/,
      //       valid_length: [14]
      //     }, {
      //       name: 'jcb',
      //       pattern: /^35(2[89]|[3-8][0-9])/,
      //       valid_length: [16]
      //     }, {
      //       name: 'laser',
      //       pattern: /^(6304|670[69]|6771)/,
      //       valid_length: [16, 17, 18, 19]
      //     }, {
      //       name: 'visa_electron',
      //       pattern: /^(4026|417500|4508|4844|491(3|7))/,
      //       valid_length: [16]
      //     }, {
      //       name: 'visa',
      //       pattern: /^4/,
      //       valid_length: [16]
      //     }, {
      //       name: 'mastercard',
      //       pattern: /^5[1-5]/,
      //       valid_length: [16]
      //     }, {
      //       name: 'maestro',
      //       pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
      //       valid_length: [12, 13, 14, 15, 16, 17, 18, 19]
      //     }, {
      //       name: 'discover',
      //       pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
      //       valid_length: [16]
      //     }];
      //     bind = false;
      //     if (callback) {
      //       if (typeof callback === 'object') {
      //         options = callback;
      //         bind = false;
      //         callback = null;
      //       } else if (typeof callback === 'function') {
      //         bind = true;
      //       }
      //     }
      //     if (options == null) {
      //       options = {};
      //     }
      //     if (options.accept == null) {
      //       options.accept = (function () {
      //         var _i, _len, _results;
      //         _results = [];
      //         for (_i = 0, _len = card_types.length; _i < _len; _i++) {
      //           card = card_types[_i];
      //           _results.push(card.name);
      //         }
      //         return _results;
      //       })();
      //     }
      //     _ref = options.accept;
      //     for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      //       card_type = _ref[_i];
      //       if (__indexOf.call((function () {
      //           var _j, _len1, _results;
      //           _results = [];
      //           for (_j = 0, _len1 = card_types.length; _j < _len1; _j++) {
      //             card = card_types[_j];
      //             _results.push(card.name);
      //           }
      //           return _results;
      //         })(), card_type) < 0) {
      //         throw "Credit card type '" + card_type + "' is not supported";
      //       }
      //     }
      //     get_card_type = function (number) {
      //       var _j, _len1, _ref1;
      //       _ref1 = (function () {
      //         var _k, _len1, _ref1, _results;
      //         _results = [];
      //         for (_k = 0, _len1 = card_types.length; _k < _len1; _k++) {
      //           card = card_types[_k];
      //           if (_ref1 = card.name, __indexOf.call(options.accept, _ref1) >= 0) {
      //             _results.push(card);
      //           }
      //         }
      //         return _results;
      //       })();
      //       for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      //         card_type = _ref1[_j];
      //         if (number.match(card_type.pattern)) {
      //           return card_type;
      //         }
      //       }
      //       return null;
      //     };
      //     is_valid_luhn = function (number) {
      //       var digit, n, sum, _j, _len1, _ref1;
      //       sum = 0;
      //       _ref1 = number.split('').reverse();
      //       for (n = _j = 0, _len1 = _ref1.length; _j < _len1; n = ++_j) {
      //         digit = _ref1[n];
      //         digit = +digit;
      //         if (n % 2) {
      //           digit *= 2;
      //           if (digit < 10) {
      //             sum += digit;
      //           } else {
      //             sum += digit - 9;
      //           }
      //         } else {
      //           sum += digit;
      //         }
      //       }
      //       return sum % 10 === 0;
      //     };
      //     is_valid_length = function (number, card_type) {
      //       var _ref1;
      //       return _ref1 = number.length, __indexOf.call(card_type.valid_length, _ref1) >= 0;
      //     };
      //     validate_number = (function (_this) {
      //       return function (number) {
      //         var length_valid, luhn_valid;
      //         card_type = get_card_type(number);
      //         luhn_valid = false;
      //         length_valid = false;
      //         if (card_type != null) {
      //           luhn_valid = is_valid_luhn(number);
      //           length_valid = is_valid_length(number, card_type);
      //         }
      //         return {
      //           card_type: card_type,
      //           valid: luhn_valid && length_valid,
      //           luhn_valid: luhn_valid,
      //           length_valid: length_valid
      //         };
      //       };
      //     })(this);
      //     validate = (function (_this) {
      //       return function () {
      //         var number;
      //         number = normalize($(_this).val());
      //         return validate_number(number);
      //       };
      //     })(this);
      //     normalize = function (number) {
      //       return number.replace(/[ -]/g, '');
      //     };
      //     if (!bind) {
      //       return validate();
      //     }
      //     this.on('input.jccv', (function (_this) {
      //       return function () {
      //         $(_this).off('keyup.jccv');
      //         return callback.call(_this, validate());
      //       };
      //     })(this));
      //     this.on('keyup.jccv', (function (_this) {
      //       return function () {
      //         return callback.call(_this, validate());
      //       };
      //     })(this));
      //     callback.call(this, validate());
      //     return this;
      //   };
  
      // }).call(this);
})



$(window).load(function(){
    const updateProperties = (elem, state) => {
        elem.style.setProperty('--x', `${state.x}px`)
        elem.style.setProperty('--y', `${state.y}px`)
        elem.style.setProperty('--width', `${state.width}px`)
        elem.style.setProperty('--height', `${state.height}px`)
        elem.style.setProperty('--radius', state.radius)
        elem.style.setProperty('--scale', state.scale)
      }
     
      document.querySelectorAll('.cursor').forEach(cursor => {
        let onElement
  
        const createState = e => {
          const defaultState = {
            x: e.clientX,
            y: e.clientY,
            width: 40,
            height: 40,
            radius: '50%'
          }
  
          const computedState = {}
          const hoverBtn = document.querySelector(".cursor");
          hoverBtn.classList.remove("mystyle");
          if (onElement != null) {
            const { top, left, width, height } = onElement.getBoundingClientRect()
            const radius = window.getComputedStyle(onElement).borderTopLeftRadius
            const hoverBtn = document.querySelector(".cursor");
            hoverBtn.classList.add("mystyle");
            // hoverBtn.style.display = 'none'
            // alert("button")
            // computedState.style.display="none"
            // computedState.x = left + width / 2
            // computedState.y = top + height / 2
            computedState.width = 80
            computedState.height = 80
            // computedState.add
            // computedState.radius = radius
          }
          
          return {
            ...defaultState,
            ...computedState
          }
        }
  
        document.addEventListener('mousemove', e => {
          const state = createState(e)
          updateProperties(cursor, state)
        })
  
        document.querySelectorAll('a, button').forEach(elem => {
          elem.addEventListener('mouseenter', () => (onElement = elem))
          elem.addEventListener('mouseleave', () => (onElement = undefined))
        })
      })
})


function openNav() {
  // alert("open")
  document.querySelector(".left-nav").style.cssText = "left :360px;transition: 0.5s";
  document.querySelector(".bg-light").style.cssText = "left :360px;transition: 0.5s";
  document.querySelector("main").style.cssText = "transform :translateX(360px);transition: 0.5s";
  document.getElementById("mySidenav").style.cssText = "width: 360px; transition: 0.5s";
  
  
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.cssText = "width:0 ; transition: 0.5s";
  document.querySelector("main").style.cssText = "transform :translateX(0px);transition: 0.5s";
  document.querySelector(".copy-span").style.visibility = "hidden";
  document.querySelector(".left-nav").style.cssText = "left :0px;transition: 0.5s";
  document.querySelector(".bg-light").style.cssText = "left :0px;transition: 0.5s";
}



function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  // alert("copied");
  var displayElement = document.querySelector(".copy-span");
  displayElement.style.visibility = "visible";
}


$('.dropdown-menuHeader a').click(function(){
  $('#selected').text($(this).text());
});

$('.dropdown-menuContact a').click(function(){
  $('#selectedone').text($(this).text());
});
$('.dropdown-menuContactone a').click(function(){
  $('#selectedtwo').text($(this).text());
});
$('.dropdown-menuContacttwo a').click(function(){
  $('#selectedthree').text($(this).text());
});