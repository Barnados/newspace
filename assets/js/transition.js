//Requires JQuery or Zepto
$(document).ready(function(){

// Cache Header
var $header = $('nav');

// Get height of global-header to use later as starting point
var $hHeight = $header.height();

// Set initial position to current position on page
var prevTop = $(window).scrollTop();

// Scroll event
$(window).on('scroll', function(e) {
  st = $(this).scrollTop(); // Set scroll location
  if (st > prevTop && st > $hHeight) {
    $header.addClass('js-nav-scrolling');
  } else {
    $header.removeClass('js-nav-scrolling');
  }
  prevTop = st;
});

});
