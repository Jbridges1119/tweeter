$(document).ready(function() {
  //SET CHARACTER COUNTER TO NUMBER/COLOUR ON PAGE REFRESH WITH TEXT ALREADY PRESENT
  const loadCount = function() {
    const $length = $('#tweet-text').val().length;
    if ($length < 141) {
      $('output.counter').text(140 - $length).css('color', '#545149');
    } else {
      $('output.counter').text(140 - $length).css('color', 'red');
    }
  };
  loadCount();
  //UPDATE CHARACTER COUNTER IN REAL TIME
  $('#tweet-text').on('input', function() {
    const $length = $('#tweet-text').val().length;
    if ($length < 141) {
      $(this).parents(".new-tweet").find(".counter").text(140 - $length).css('color', '#545149');
    } else {
      $(this).parents(".new-tweet").find(".counter").text(140 - $length).css('color', 'red');
    }
  });

});



