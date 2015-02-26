'use strict';

var fb = new Firebase('https://xogame.firebaseio.com/');
var isPlayer1Turn = true;
var turns = 0;


// Makes game table appear on page
$('.play').click(function(){
  $('.hidden').show();
  $('.play').hide();
});

// Replay button - refreshes table for new game

$('replay').click(function() {
  location.reload();
});

// Swaps between players and tracks # of turns taken
$('td').one('click', function() {
  if (isPlayer1Turn === true) {
    $(this).append('<img src="/img/taco.jpg" height="100px" width="100px">');
    isPlayer1Turn = false;
  } else {
    $(this).append('<img src="/img/burrito.jpg" height="100px" width="100px">');
    isPlayer1Turn = true;
  };
  turns += 1;
  checkTurn();
});


// Tracks the number of turns to determine game over
function checkTurn(){
	if(turns === 9){
		$('.message').append($('<h1>GAME OVER</h1>'));
	};
}


/*$('form').submit(function(event){
	var name = $('.name').val();
	var newPlayer = ({Game: 'Player1'});
	fb.push(newPlayer);
	event.preventDefault();
})*/

/*$('form').submit(function(event){
	var i = 1;
	i += 1;
	var newGame = ({Games: 'Game'+ i});
	fb.push(newGame);
	event.preventDefault();
})*/

//function placePlayer(){
	//query the firebase

	// look for game with 1 player

	//if 1player game exists, place new player in game

	//if 1player game does NOT exist, create new game & insert player

	//start game play
