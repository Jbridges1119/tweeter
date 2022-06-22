/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//CREATES TWEET USING INFO FROM AN OBJECT
  const createTweetElement = function(data) {
    const tweet = `<article class="oldTweet">
  <header>
    <div class="user"><img src="${data.user.avatars}">${data.user.name}</div>
    <div class="userID">${data.user.handle}</div>
  </header>
  <div class="tweetText">
    <p>${data.content.text}</p>
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

//LOOPS THOUGH AN OBJECT AND FEEDS INFO TO CALLBACK - APPENDS DATA WITH CALLBACK RETURN
  const renderTweets = function(data) {
    data.slice().reverse().forEach(person => {
      $('#tweets-container').append(createTweetElement(person));
    });
  };

  $(document).ready(function() {
  
  $("form").submit(function( event ) {
    event.preventDefault();

    if($(this).children('#tweet-text').val().length > 140){
      alert("Tweet muse be under 140 characters")
    } else if (!$(this).children('#tweet-text').val().length) {
      alert("Please add text to your tweet")
    } else {
      $.post("/tweets", $(this).serialize())
      .then($.ajax({
        url: '/tweets',
        type: 'GET',
        dataType: 'json',
        success: function(res) {
          $('#tweets-container').prepend(createTweetElement(res[res.length -1]));
        }
      }))
    }
  })

  const loadTweets = function() {
      $.ajax({
        url: '/tweets',
        type: 'GET',
        dataType: 'json',
        success: function(res) {
          renderTweets(res)
        }
      });
    }
  loadTweets()

});
