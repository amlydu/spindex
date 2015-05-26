// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.turbolinks
//= require_tree .

/*********************************************************************
Content Information Toggling
*********************************************************************/

/* Album Songs */

$(function(){
  $('.accordion h2').click(function() {
  $(this).toggleClass('active').find('i').toggleClass('fa-plus fa-minus')
    .closest('h2').siblings('h2')
    .removeClass('active').find('i').removeClass('fa-minus').addClass('fa-plus');
    $(this).next('.accordion_content').slideToggle().siblings('.accordion_content').slideUp();
  });
});

$(function(){$('.accordion_content').hide();});

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));