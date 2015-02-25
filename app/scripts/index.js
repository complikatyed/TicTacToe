'use strict'

var fb = new Firebase('https://tictacohno.firebaseio.com/');

$('form').submit(function(event){
	var name = $('.name').val();
	var newPlayer = ({Game: 'Player1'});
	fb.push(newPlayer);
	event.preventDefault();
})

$('button').click(function(){
  $('.hidden').show();
  $('button').hide();
});