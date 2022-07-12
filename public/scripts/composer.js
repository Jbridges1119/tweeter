$(document).ready(function() {
  //MOVES WINDOW TO TOP OF PAGE
  $(`.scrollTop`).click(toTop);

  //FADES IN/OUT SCROLLTOP BUTTON
  $(window).scroll(toTopFade);
});

//MOVES WINDOW TO TOP OF PAGE
const toTop = function(event) {
  event.preventDefault();
  $("html").animate({ scrollTop: 0}, 'fast');
};

