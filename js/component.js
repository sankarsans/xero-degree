
$(window).load(function() {
  // $("#loader").delay(1000).slideUp("slow");
  $("#loader .loader-wrapper").delay(00).fadeOut("slow");
  $("#loader").delay(1000).css( {'width' : '-350%' ,  'transition' : '0.8s' });
  $("#loader").fadeOut('slow')
})
      

function openNav() {
  // alert("open")
  document.querySelector(".new-nav").style.cssText = "left :360px;transition: 0.5s";
  document.querySelector(".bg-light").style.cssText = "left :360px;transition: 0.5s";
  document.querySelector("main").style.cssText = "transform :translateX(360px);transition: 0.5s";
  document.getElementById("mySidenav").style.cssText = "width: 360px; transition: 0.5s";
}

function goToPage(numberPage){
  new Swiper('.swiper-container-app ').slideTo(numberPage,1000,false);
  document.querySelector(".menu").style.cssText = "transition: 0.5s;display:none";
}



function openNavMenu() {
  document.querySelector(".menu").style.cssText = "transition: 0.5s;display:block";
}

function closeNavMenu() {
  document.querySelector(".menu").style.cssText = "transition: 0.5s;display:none";
}

function openOffer() {
  document.querySelector('.sidenav').style.cssText = "transition: 0.5s;width:100%";
  document.querySelector(".menu").style.cssText = "transition: 0.5s;display:none";
}
function closeOffer() {
  document.querySelector('.sidenav').style.cssText = "transition: 0.5s;width:0%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.cssText = "width:0 ; transition: 0.5s";
  document.querySelector("main").style.cssText = "transform :translateX(0px);transition: 0.5s";
  document.querySelector(".copy-span").style.visibility = "hidden";
  document.querySelector(".new-nav").style.cssText = "left :0px;transition: 0.5s";
  document.querySelector(".bg-light").style.cssText = "left :0px;transition: 0.5s";
}

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

function addActive(elem) {
  // get all 'a' elements
  var a = document.getElementsByTagName('a');
  // loop through all 'a' elements
  for (i = 0; i < a.length; i++) {
      // Remove the class 'active' if it exists
      a[i].classList.remove('active')
  }
  // add 'active' classs to the element that was clicked
  elem.classList.add('active');
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


$(document).ready(function(){ 
  $('#video-id,.demo-play-btn').click(function(){ 
    $('#video-id').get(0).paused ? $('#video-id').get(0).play() : $('#video-id').get(0).pause(); 
    $(".demo-play-btn").toggle();
  }); 
});

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

$('.dropdown-menuContactthree a').click(function(){
  $('#selectedfour').text($(this).text());
});
$('.dropdown-menuContactFive a').click(function(){
  $('#selectedFive').text($(this).text());
});
$('.dropdown-menuContactFour a').click(function(){
  $('#selectedFour').text($(this).text());
});

$('.dropdown-menuContactSix a').click(function(){
  $('#selectedSix').text($(this).text());
});
$('.dropdown-menuContactSevan a').click(function(){
  $('#selectedSevan').text($(this).text());
});
$('.dropdown-menuContactEight a').click(function(){
  $('#selectedEight').text($(this).text());
});

$('.dropdown-menuContactNine a').click(function(){
  $('#selectedNine').text($(this).text());
});


$(document).ready(function () {
  var quantitiy = 0;
  $('.quantity-right-plus').click(function (e) {
    e.preventDefault();
    var quantity = parseInt($('#quantity').val());
    $('#quantity').val(quantity + 1);
  });

  $('.quantity-left-minus').click(function (e) {
    e.preventDefault();
    var quantity = parseInt($('#quantity').val());
    if (quantity > 0) {
      $('#quantity').val(quantity - 1);
    }
  });
});


$(function() {  
  $('.btn-common')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });
  $('[href=#]').click(function(){return false});
});


