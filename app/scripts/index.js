'use strict'

var fb = new Firebase('https://xogame.firebaseio.com/');
var isPlayer1Turn = true;


/*$('form').submit(function(event){
	var name = $('.name').val();
	var newPlayer = ({Game: 'Player1'});
	fb.push(newPlayer);
	event.preventDefault();
})*/
$('form').submit(function(event){
	var i = 1;
	i += 1;
	var newGame = ({Games: 'Game'+ i});
	fb.push(newGame);
	event.preventDefault();
})

$('button').click(function(){
  $('.hidden').show();
  $('button').hide();
});

/*$('td').on('click', function(event) {
	var $target = $(event.target);
	$target.append('x');
});*/

$('td').one('click', function() {
  if (isPlayer1Turn) {
    $(this).append("X");
    isPlayer1Turn = false;
  } else {
    $(this).append("O");
    isPlayer1Turn = true;
  }
});



//function placePlayer(){
	//query the firebase

	// look for game with 1 player

	//if 1player game exists, place new player in game

	//if 1player game does NOT exist, create new game & insert player

	//start game play
