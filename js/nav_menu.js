(function($){
  $('.nav-toggle').click(function(e){
      e.preventDefault();
      $('.nav-toggle').toggleClass('active');
      $('.nav-menu').toggleClass('active');
      $('.nav-overlay').toggleClass('active');
      $('.mobile-nav').toggleClass('active');
  })
  $('.nav-overlay').click(function(e){
      e.preventDefault();
      $('.nav-toggle').toggleClass('active');
      $('.nav-menu').toggleClass('active');
      $('.nav-overlay').toggleClass('active');
      $('.mobile-nav').toggleClass('active');
  })
  $(document).scroll(function(e) {
    e.preventDefault();
    var $nav = $(".nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  })
})(jQuery);