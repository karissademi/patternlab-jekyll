$(function() {
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

  $(".code-title").click(function () {
    $(this).next(".the-code").toggle("fast");
    $(this).find("i").toggleClass("fa-arrow-circle-down").toggleClass("fa-arrow-circle-right");
});

});
