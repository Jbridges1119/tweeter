/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];




  const createTweetElement = function(data) {
    const $tweet = $(`<article class="oldTweet">
  <header>
    <div class="user"><img src="${data.user.avatars}">${data.user.name}</div>
    <div class="userID">${data.user.handle}</div>
  </header>
  <div class="tweetText">
    <p>${data.content.text}</p>
  </div>
  <footer>
    <p>${data.created_at}</p>
    <div class="icons">
    <i class="fa-solid fa-flag"></i>
    <i class="fa-solid fa-retweet"></i>
    <i class="fa-solid fa-heart"></i>
  </div>
  </footer>
</article>`);
    return $tweet;
  };


  const renderTweets = function(data) {
    data.forEach(person => {
      $('#tweets-container').append(createTweetElement(person));
    });
  };
  renderTweets(data);
});
