'use strict';
var player1 = 'X';
var player2 = 'O';
var isPlayer1Turn = true;
var xWin = false;
var oWin = false;
var turns = 0;
var a1;
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;

var fb = new Firebase('https://tictacohno.firebaseio.com/');

$('button').click(function(){
  $('.hidden').show();
  $('button').hide();
});

$('td').one('click', function(){
  if (isPlayer1Turn === true && xWin == false && oWin == false){
  	$(this).append(player1);
    isPlayer1Turn = false;
    turns += 1;
    checkWinner();
    checkTurn();
  }
  else if(isPlayer1Turn == false && xWin == false && oWin == false) {
  	$(this).append(player2)
    isPlayer1Turn = true;
    turns += 1;
    checkWinner();
    checkTurn();
  }
});

function boardCheck() {
    a1 = $('.a1').html();
    a2 = $('.a2').html();
    a3 = $('.a3').html();
    b1 = $('.b1').html();
    b2 = $('.b2').html();
    b3 = $('.b3').html();
    c1 = $('.c1').html();
    c2 = $('.c2').html();
    c3 = $('.c3').html();
};

function checkWinner(){
	boardCheck();
	// CHECKS IF X WON
    if ((a1 == a2 && a1 == a3 && (a1 == "X")) || //first row
    (b1 == b2 && b1 == b3 && (b1 == "X")) || //second row
    (c1 == c2 && c1 == c3 && (c1 == "X")) || //third row
    (a1 == b1 && a1 == c1 && (a1 == "X")) || //first column
    (a2 == b2 && a2 == c2 && (a2 == "X")) || //second column
    (a3 == b3 && a3 == c3 && (a3 == "X")) || //third column
    (a1 == b2 && a1 == c3 && (a1 == "X")) || //diagonal 1
    (a3 == b2 && a3 == c1 && (a3 == "X")) //diagonal 2
    ){ xWin = true;
      alert('X Won!'); }
    else if ((a1 == a2 && a1 == a3 && (a1 == "o")) || //first row
    (b1 == b2 && b1 == b3 && (b1 == "O")) || //second row
    (c1 == c2 && c1 == c3 && (c1 == "O")) || //third row
    (a1 == b1 && a1 == c1 && (a1 == "O")) || //first column
    (a2 == b2 && a2 == c2 && (a2 == "O")) || //second column
    (a3 == b3 && a3 == c3 && (a3 == "O")) || //third column
    (a1 == b2 && a1 == c3 && (a1 == "O")) || //diagonal 1
    (a3 == b2 && a3 == c1 && (a3 == "O")) //diagonal 2
    ){ oWin = true;
      alert('O Won!'); }
  }



function checkTurn(){
  if(turns === 9){
    $('.message').append($('<h1>GAME OVER</h1>'));
    $('.title').hide();
  }
}



