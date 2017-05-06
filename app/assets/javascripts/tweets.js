// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){

  $('#new_tweet').on('submit', function(e){

    e.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      dataType: 'json'
    }).done(function(data){
        console.log(data);
      //  Showing the HTML data on the /tweets page
        //  $('.tweets').prepend(data);
        // Showing the JSON data on the /tweets page
      $('.tweets').prepend('<li class=tweet>' + '<p>' + data.message + '</p>' +
      '<time>'+ data.created_at + '</time>' + '</li>');
      // To clear the message box after submitting a tweet
        $('#tweet_message').val(" ");
    }).fail(function(){
      console.log('Submit was not successful');
    }).always(function(){
    });
  });
});
