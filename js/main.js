//load the DOM
$(document).ready(function(){

  //log
  console.log('ready!');

  //click hamburger icon
  $('.toggle-mobile-menu').click(function(){

      //show mobile menu
      $('#mobile-menu').toggleClass('mobile-menu-visible')
  });

});

//collapsing logo on homepage
if($(".home-hero-section").length){
  $("body").addClass("home")

  $(window).scroll(function (){
    if($(this).scrollTop() > 10){
      $("body").addClass("scrolling");
      $("#logo").removeClass("col-6").addClass("col-2");
    } else {
      $("body").removeClass("scrolling");
      $("#logo").removeClass("col-2").addClass("col-6");
    }
  });
} else {
  $("#logo").removeClass("col-6").addClass("col-2");
}

// faqs and expanding accordions
$(".open").click(function () {

  $(this).toggleClass("expanded");
  $(this).find(".expandedDescription").slideToggle(200);

});

// Assign flexslider function to class .flexslider
$('.flexslider').flexslider({

  // Customize flexslider properties
  animation: "slide",
  slideshowSpeed: 5000,
  animationSpeed: 1000,
  slideshow: false,
  directionNav: false,
  controlNav: false,
  start: function (slider) {

    // Click on the left arrow
    $('#flex-left').on('click', function(event){

      // prevent default action
      event.preventDefault();

      // Move to previous slide
      $('.flexslider').flexslider('prev');

    });

    // Click on the right arrow
    $('#flex-right').on('click', function(event){

      // prevent default action
      event.preventDefault();

      // Move to next slide
      $('.flexslider').flexslider('next');

    });

  }


});

// homepage hero auto-typing
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid white }";
  document.body.appendChild(css);
};

//smooth scrolling better because rachel
$('a[href^="#"]').on('click',function () {
  var link = this.hash.substr(1);
  var section = $('*[id=' + link + ']');

  $('html,body').animate({
    scrollTop: section.offset().top - 48
  }, 800);
  return false;
});
