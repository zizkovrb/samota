//=require ../_vendor/jquery/dist/jquery.js
//=require ../_vendor/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js
//=require ../_vendor/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js

$(document).ready(function() {
  $('.navbar').on('click', 'a', function(e) {
    e.preventDefault();

    var target = e.target;
    var to = $(target).offset().top;

    $('html, body').animate({scrollTop: to}, 500);
  });
});
