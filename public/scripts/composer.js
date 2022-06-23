$(document).ready(function() {
  //MOVES WINDOW TO TOP OF PAGE
  $(`.scrollTop`).click(function(event){
    event.preventDefault();
    $("html").animate({ scrollTop: 0}, 'fast');
  })

//FADES IN/OUT SCROLLTOP BUTTONM
  $(window).scroll(function(){
    if ($(this).scrollTop() > 80) {
        $('.hidden').fadeIn();
    } else {
        $('.hidden').fadeOut();
    }
});

});