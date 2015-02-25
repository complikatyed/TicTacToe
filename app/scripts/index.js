'use strict'

var fb = new Firebase('https://xogame.firebaseio.com/');

/*$('form').submit(function(event){
	var name = $('.name').val();
	var newPlayer = ({Game: 'Player1'});
	fb.push(newPlayer);
	event.preventDefault();
})*/

$('button').click(function(){
  $('.hidden').show();
  $('button').hide();
});

$('form').submit(function(event){
	var name = $('.name').val();
	var newPlayer = ({Game: 'Player1'});
	fb.push(newPlayer);
	event.preventDefault();
})

function placePlayer(){
	//query the firebase

	// look for game with 1 player

	//if 1player game exists, place new player in game

	//if 1player game does NOT exist, create new game & insert player

	//start game play
}