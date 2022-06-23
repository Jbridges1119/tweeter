$(document).ready(function() {
  //SETS CHARACTER COUNTER TO NUMBER ON PAGE REFRESH
  const loadCount = function() {
    const $length = $('#tweet-text').val().length;
    $('output.counter').text(140 - $length)
  }
  loadCount()
  //UPDATES CHARACTER COUNTER IN REAL TIME
  $('#tweet-text').on('input', function() {
    const $length = $('#tweet-text').val().length;
    if ($length < 141) {
      $(this).parents(".new-tweet").find(".counter").text(140 - $length).css('color', '#545149');
    } else {
      $(this).parents(".new-tweet").find(".counter").text(140 - $length).css('color', 'red');
    }
  });

});



