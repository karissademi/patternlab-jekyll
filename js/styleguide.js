$(document).ready(function() {
  $('body').scrollspy({
    target: 'nav.main',
    offset: 70
  });
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 40) {
      $('nav.main').removeClass('top');
    } else {
      $('nav.main').addClass('top');
    }
  });

});
