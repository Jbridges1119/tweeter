/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//FOR .HTML -- CHANGE .HTML TO .TEXT
//CONVERTS TEXT INPUT INTO SAFE TEXT
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


//CREATES TWEET USING INFO FROM AN OBJECT
  const createTweetElement = function(data) {
    const tweet = `<article class="oldTweet">
  <header>
    <div class="user"><img src="${escape(data.user.avatars)}">${escape(data.user.name)}</div>
    <div class="userID">${escape(data.user.handle)}</div>
  </header>
  <div class="tweetText">
    <p>${escape(data.content.text)}</p>
  </div>
  <footer>
    <p>${timeago.format(escape(data.created_at))}</p>
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
    data.forEach(person => {
      $('#tweets-container').prepend(createTweetElement(person));
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
      .then(() => {$.ajax({
        url: '/tweets',
        type: 'GET',
        dataType: 'json',
        success: function(res) {
          $('#tweets-container').prepend(createTweetElement(res[res.length -1]));
        }
      })})
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
