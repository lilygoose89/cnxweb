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

$(".open").click( function () {
  var container = $(this).parents(".descriptionTitle");
  var expandedDescription = container.find(".expandedDescription");
  var trigger = container.find(".faq-t");

  expandedDescription.slideToggle(200);

  if (trigger.hasClass("faq-o")) {
    trigger.removeClass("faq-o");
  }
  else {
    trigger.addClass("faq-o");
  }

  if (container.hasClass("expanded")) {
    container.removeClass("expanded");
  }
  else {
    container.addClass("expanded");
  }
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
