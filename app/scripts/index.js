'use strict';
var player1 = '<img src="https://github.com/complikatyed/TicTacToe/blob/kmr/app/img/burrito.jpg?raw=true"></img>';
var player2 = '<img src="https://github.com/complikatyed/TicTacToe/blob/kmr/app/img/taco.jpg?raw=true"></img>';
var isPlayer1Turn = true;
var turns = 0;

var fb = new Firebase('https://tictacohno.firebaseio.com/');

$('button').click(function(){
  $('.hidden').show();
  $('button').hide();
  $('.start').hide();
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
    $('.message').append($('<h1>GAME OVER</h1>'));
    $('.message').append($('<div class="gameoverImg"><img src="https://s-media-cache-ak0.pinimg.com/236x/04/93/c1/0493c184b0efb97d3dee513fae63cb2c.jpg"></img></div>'));
    $('table').hide();
    $('.title').hide();
    $('.start').show();
  }
}