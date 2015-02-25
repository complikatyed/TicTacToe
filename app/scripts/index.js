'use strict';
var player1 = 'X';
var player2 = 'O';
var isPlayer1Turn = true;
var turns = 0;

var fb = new Firebase('https://tictacohno.firebaseio.com/');

$('button').click(function(){
  $('.hidden').show();
  $('button').hide();
});

$('td').one('click', function(){
  if (isPlayer1Turn === true){
  	$(this).append(player1);
    isPlayer1Turn = false;
    turns += 1;
    checkTurn();
  }
  else {
  	$(this).append(player2)
    isPlayer1Turn = true;
    turns += 1;
    checkTurn();
  }
});

function checkTurn(){
  if(turns === 9){
    $('.message').append($('<h1>GAME OVER</h1>'))
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

