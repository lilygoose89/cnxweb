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
