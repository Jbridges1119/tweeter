$(document).ready(function() {

$('#tweet-text').on('input', function () {
  const $length = $(this).val().length
  if ($length > 140) {
    $(this).parents(".new-tweet").find(".counter").text(140 - $length).css('color', 'red');
  } else {
  $(this).parents(".new-tweet").find(".counter").text(140 - $length).css('color', '#545149')
  }
});

});



