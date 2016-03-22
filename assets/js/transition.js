//Requires JQuery or Zepto
$(document).ready(function(){

// ---> JQUERY NAVIGATION SHOW SCRIPT <---
// Cache Header
var $header = $('nav');

// height of the header
var $hHeight = $header.height();

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
// ---> JQUERY TYPING Script <---

});
