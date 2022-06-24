/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//CONVERTS TEXT INPUT INTO SAFE TEXT -- FOR .HTML CHANGE .HTML TO .TEXT
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//CREATES TWEET USING INFO FROM AN OBJECT
const createTweetElement = function(data) {
  const tweet = `<article class="oldTweet">
  <header>
    <div class="user"><img src="${data.user.avatars}">${escape(data.user.name)}</div>
    <div class="userID">${escape(data.user.handle)}</div>
  </header>
  <div class="tweet">
    <p>${escape(data.content.text)}</p>
  </div>
  <footer>
    <p>${timeago.format(data.created_at)}</p>
    <div class="icons">
    <i class="fa-solid fa-flag"></i>
    <i class="fa-solid fa-retweet"></i>
    <i class="fa-solid fa-heart"></i>
  </div>
  </footer>
</article>`;
  return tweet;
};

//LOOPS THOUGH AN OBJECT AND FEEDS INFO TO CALLBACK - PREPENDS DATA WITH CALLBACK RETURN
const renderTweets = function(data) {
  data.forEach(person => {
    $('#tweets-container').prepend(createTweetElement(person));
  });
};


//LOADS WHEN INDEX.HTML IS READY
$(document).ready(function() {
  //LOADS TWEET HISTORY FROM "/TWEETS"
  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      type: 'GET',
      dataType: 'json',
      success: function(res) {
        renderTweets(res);
      }
    });
  };
  loadTweets();

  //WRITE A NEW TWEET BUTTON
  $(".open").click(function(event) {
    event.preventDefault();
    $("html").animate({ scrollTop: 0}, 'fast');
    $(`.new-tweet`).slideToggle(250);
    $('#tweet-text').focus();
  });

  //SUBMIT NEW TWEET BUTTON -- IF OVER 140 OF EMPTY - THROW ERROR MESSAGE
  $("form").submit(function(event) {
    event.preventDefault();
    $(`.alert`).slideUp(75);
    if ($(this).children('#tweet-text').val().length > 140) {
      $(".counter").effect("bounce", {times:3, distance: 25}, 400);
      $(`.alertspan`).text(`Character count cannot be over 140. Currently at ${$(this).children('#tweet-text').val().length}.`);
      $(`.alert`).slideDown(350);
    } else if (!$(this).children('#tweet-text').val().length) {
      $(".counter").effect("bounce", {times:3, distance: 25}, 400);
      $(`.alertspan`).text('Tweet cannot be empty.');
      $(`.alert`).slideDown(350);
    } else {
      $.post("/tweets", $(this).serialize())
        .then(() => {
          loadTweets();
          $('#tweet-text').val("");
          $('output.counter').text(140 - $('#tweet-text').val().length).css('color', '#545149');
        });
    }
  });
});
