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
        //  $('.tweets').prepend(data);
      // var  sim = $('li').attr('class','tweet'),
      //       kim = $(sim).append('<p>' + data.message + '</p>');
      $('.tweets').prepend('<li class=tweet>' + '<p>' + data.message + '</p>' +
      '<time>'+ data.created_at + '</time>' + '</li>');

      // $('.tweets').prepend('<p>' + data.message + '</p>')
      // .append('<time>'+ data.created_at + '</time>');
        $('#tweet_message').val(" ");
    }).fail(function(){
      console.log('Submit was not successful');
    }).always(function(){
    });
  });
});

// <li class="tweet">
//   <p><%= tweet.message %></p>
//   <time><%= tweet.created_at.strftime('%b %e, %l:%M %p') %></time>
// </li>
// .append('<p>' + data.message + '</p>');
