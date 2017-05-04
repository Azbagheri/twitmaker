// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){

  $('#create_tweet').click('submit', function(e){
    e.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      dataType: 'html'
    }).done(function(data){
        $('.tweets').prepend(data);
    }).fail(function(){
      console.log('Submit was not successful');
    }).always(function(){
    });
  });
})
