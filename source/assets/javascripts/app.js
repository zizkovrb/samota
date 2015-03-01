//=require ../_vendor/jquery/dist/jquery.js
//=require ../_vendor/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js
//=require ../_vendor/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js
//=require ../_vendor/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js

//=require ../_vendor/eventEmitter/EventEmitter.js
//=require ../_vendor/imagesloaded/imagesloaded.js
//=require ../_vendor/fluidbox/jquery.fluidbox.js

$(document).ready(function() {
  $('.navbar').on('click', 'a', function(e) {
    e.preventDefault();

    var target = $(this).attr('href');
    var to = $(target).offset().top;

    $('html, body').animate({scrollTop: to}, 500, function() {
      window.location.hash = target; 
    });
  });

  $('.image').fluidbox();
  $('.navbar-brand').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({scrollTop: 0}, 500, function() {
      window.location.hash = ''; 
    });

  });
});
