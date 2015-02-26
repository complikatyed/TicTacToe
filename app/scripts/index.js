'use strict';
var player1 = '<img src="/img/taco.jpg" height="100px" width="100px">';
var player2 = '<img src="/img/burrito.jpg" height="100px" width="100px">';
var isPlayer1Turn = true;
var p1Win = false;
var p2Win = false;
var turns = 0;
var a1; // cell 0 (left cell in top row)
var a2; // cell 1
var a3; // cell 2
var b1; // cell 3 (left cell in middle row)
var b2; // cell 4
var b3; // cell 5
var c1; // cell 6 (left cell in bottom row)
var c2; // cell 7
var c3; // cell 8


// Tracks game play, switches between players, and looks for win or tie game.
$('td').one('click', function(){
  if (isPlayer1Turn === true && p1Win == false && p2Win == false){
  	$(this).append(player1);
    isPlayer1Turn = false;
    turns += 1;
    checkWinner();
    checkTie();
  }
  else if(isPlayer1Turn == false && p1Win == false && p2Win == false) {
  	$(this).append(player2)
    isPlayer1Turn = true;
    turns += 1;
    checkWinner();
    checkTie();
  }
});

// Converts cell position variables to jQuery objects
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
	// Checks to see if player1 wins
    if ((a1 == a2 && a1 == a3 && (a1 == player1)) || //first row
    (b1 == b2 && b1 == b3 && (b1 == player1)) || //second row
    (c1 == c2 && c1 == c3 && (c1 == player1)) || //third row
    (a1 == b1 && a1 == c1 && (a1 == player1)) || //first column
    (a2 == b2 && a2 == c2 && (a2 == player1)) || //second column
    (a3 == b3 && a3 == c3 && (a3 == player1)) || //third column
    (a1 == b2 && a1 == c3 && (a1 == player1)) || //diagonal 1
    (a3 == b2 && a3 == c1 && (a3 == player1)) //diagonal 2
    ){ p1Win = true;
       $('.message').append($('<h1>TACOS FOR THE WIN!</h1>'));
       //$('table').empty();
       $('.title').hide();
       $('.start').show(); }
  // Checks to see if player2 wins
    else if ((a1 == a2 && a1 == a3 && (a1 == player2)) || //first row
    (b1 == b2 && b1 == b3 && (b1 == player2)) || //second row
    (c1 == c2 && c1 == c3 && (c1 == player2)) || //third row
    (a1 == b1 && a1 == c1 && (a1 == player2)) || //first column
    (a2 == b2 && a2 == c2 && (a2 == player2)) || //second column
    (a3 == b3 && a3 == c3 && (a3 == player2)) || //third column
    (a1 == b2 && a1 == c3 && (a1 == player2)) || //diagonal 1
    (a3 == b2 && a3 == c1 && (a3 == player2)) //diagonal 2
    ){ p2Win = true;
      $('.message').append($('<h1>BURRITOS FOR THE WIN!</h1>')); 
      //$('table').empty();
      $('.title').hide();
      $('.start').show(); }
  }


// Checks for a tie game after nine turns
function checkTie(){
  if(turns === 9 && p1Win == false && p2Win == false){
    $('.message').append($('<h1>TIE GAME!</h1>'));
    $('table').empty();
    $('.title').hide();
    $('.message').append($('<div class="gameoverImg"><img src="https://s-media-cache-ak0.pinimg.com/236x/04/93/c1/0493c184b0efb97d3dee513fae63cb2c.jpg"></img></div>'));
    $('.start').show();
  }
}


