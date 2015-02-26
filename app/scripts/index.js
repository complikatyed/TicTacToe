'use strict';
var player1 = 'X';
var player2 = 'O';
var isPlayer1Turn = true;
var turns = 0;
var xMoves = [];
var oMoves = [];
var possibleWins = ['0', '1', '2'];
var winString = JSON.stringify(possibleWins);

var fb = new Firebase('https://tictacohno.firebaseio.com/');

$('button').click(function(){
  $('.hidden').show();
  $('button').hide();
});

$('td').one('click', function(){
  if (isPlayer1Turn === true){
  	$(this).append(player1);
  	xMoves = xMoves.[$(this).attr('class')];
    isPlayer1Turn = false;
    turns += 1;
    checkWinner();
    checkTurn();
  }
  else {
  	$(this).append(player2)
  	oMoves = oMoves.concat($(this).attr('class'));
    isPlayer1Turn = true;
    turns += 1;
    checkWinner();
    checkTurn();
  }
});

function checkWinner(){
	if(JSON.stringify(xMoves) == winString){
		$('.title').hide();
		$('.message').append($('<h1>X WON THE GAME!!!!</h1>'));
	}
}

function checkTurn(){
  if(turns === 9){
    $('.message').append($('<h1>GAME OVER</h1>'));
    $('.title').hide();
  }
}


// function render(b){
// 	var $table = $('<table></table>');

// 	b._forEach(function(row)
// 	{
// 	  var $tr = $('<tr></tr>');
// 	  row.forEach(function(cell){
//         $tr.append($('<td>'+ cell + '</td>'));
//         $table.append($tr);
// 	  });
// 	 });
// }

