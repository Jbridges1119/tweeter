$(document).ready(function() {
  //DOC.READY SHOULD ONLY HAVE INVOKE FUNCTIONS AND LISTENERS -- THIS IS ASYNC SO RUNS LAST
  loadCount();
  //UPDATE CHARACTER COUNTER IN REAL TIME
  $('#tweet-text').on('input', counter)

});

const counter = function() {
  const $length = $('#tweet-text').val().length;
  const $location = $(this).closest(".new-tweet").find(".counter").text(140 - $length)
  if ($length < 141) {
    return $location.css('color', '#545149');
  } 
  return $location.css('color', 'red');
};


//SET CHARACTER COUNTER TO NUMBER/COLOUR ON PAGE REFRESH WITH TEXT ALREADY PRESENT
const loadCount = function() {
  const $length = $('#tweet-text').val().length;
  const $location = $('output.counter').text(140 - $length)
  if ($length < 141) {
    return $location.css('color', '#545149');
  } 
  return $location.css('color', 'red');
};

