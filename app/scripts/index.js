'use strict';
var player1 = '<img src="/img/taco.jpg" height="100px" width="100px">';
var player2 = '<img src="/img/burrito.jpg" height="100px" width="100px">';
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
    if ((a1 == a2 && a1 == a3 && (a1 == player1)) || //first row
    (b1 == b2 && b1 == b3 && (b1 == player1)) || //second row
    (c1 == c2 && c1 == c3 && (c1 == player1)) || //third row
    (a1 == b1 && a1 == c1 && (a1 == player1)) || //first column
    (a2 == b2 && a2 == c2 && (a2 == player1)) || //second column
    (a3 == b3 && a3 == c3 && (a3 == player1)) || //third column
    (a1 == b2 && a1 == c3 && (a1 == player1)) || //diagonal 1
    (a3 == b2 && a3 == c1 && (a3 == player1)) //diagonal 2
    ){ xWin = true;
       $('.message').append($('<h1>TACOS FOR THE WIN!</h1>'));
       $('.title').hide();  }
    else if ((a1 == a2 && a1 == a3 && (a1 == player2)) || //first row
    (b1 == b2 && b1 == b3 && (b1 == player2)) || //second row
    (c1 == c2 && c1 == c3 && (c1 == player2)) || //third row
    (a1 == b1 && a1 == c1 && (a1 == player2)) || //first column
    (a2 == b2 && a2 == c2 && (a2 == player2)) || //second column
    (a3 == b3 && a3 == c3 && (a3 == player2)) || //third column
    (a1 == b2 && a1 == c3 && (a1 == player2)) || //diagonal 1
    (a3 == b2 && a3 == c1 && (a3 == player2)) //diagonal 2
    ){ oWin = true;
      $('.message').append($('<h1>BURRITOS FOR THE WIN!</h1>'));
      $('.title').hide();  }
  }



function checkTurn(){
  if(turns === 9 && xWin == false && owin == false){
    $('.message').append($('<h1>TIE GAME!</h1>'));
    $('.title').hide();
  }
}


// Makes game table appear on page
$('.play').click(function(){
  $('.hidden').show();
  $('.play').hide();
});

// Replay button - refreshes table for new game

$('replay').click(function() {
  location.reload();
});
