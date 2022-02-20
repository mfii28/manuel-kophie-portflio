!(function($){
 
    $('.search-close').hide();
    $('#search-box').hide();

    $('.search-open').on('click', function(){
        $('#search-box').slideToggle();
        $('.search-close').show();
        $('.search-open').hide();

    });
    $('.search-close').on('click', function(){
        $('#search-box').slideUp(500);
        $('.search-open').show();
        $('.search-close').hide();

    });



   // Initi AOS
   AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
  });


})(jQuery);


