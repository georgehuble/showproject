var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-64px";
  }
  prevScrollpos = currentScrollPos;
}

$(function () { // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    // animate to second panel
    .to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
    .to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
    .to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
    // animate to third panel
    .to("#slideContainer", 0.5, {z: -150, delay: 1})
    .to("#slideContainer", 1,   {x: "-50%"})
    .to("#slideContainer", 0.5, {z: 0})
    // animate to forth panel
    .to("#slideContainer", 0.5, {z: -150, delay: 1})
    .to("#slideContainer", 1,   {x: "-75%"})
    .to("#slideContainer", 0.5, {z: 0});

  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "500%"
  })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addTo(controller);
});


$('.trash__button-minus').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('.trash__quantity').find('input');
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 1;
  }

  $input.val(value);

});

$('.trash__button-plus').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('.trash__quantity').find('input');
  var value = parseInt($input.val());

  if (value < 9) {
    value = value + 1;
  } else {
    value = 9;
  }

  $input.val(value);
});

function hover(element) {
  element.setAttribute('src', 'images/trash_header-bisque.svg');
}

function unhover(element) {
  element.setAttribute('src', 'images/trash_header-white.svg');
}


function changeImage(url) {
  document.getElementById("choiceImage").style.backgroundImage = url;
}

document.getElementById("1-st").onclick = function() { changeImage('url("images/catalog/Coffee.jpg")'); }
document.getElementById("2-nd").onclick = function() { changeImage('url("images/catalog/ColdGrey.jpg")'); }
document.getElementById("3-rd").onclick = function() { changeImage('url("images/catalog/Coral.jpg")'); }
document.getElementById("4-th").onclick = function() { changeImage('url("images/catalog/Graphite.jpg")'); }
document.getElementById("5-th").onclick = function() { changeImage('url("images/catalog/OLIVE.jpg")'); }


