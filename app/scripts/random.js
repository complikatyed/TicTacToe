  var userCount = Object.keys(data);


// code from the yacht or not 
var FIREBASE_URL     = 'https://xogame.firebaseio.com',
    fb               = new Firebase(FIREBASE_URL),
    fbUsers          = new Firebase(FIREBASE_URL + '/users'),
    browseUserNumber = 0;

/////////////////////////////////////////////////////////////////
//    Working on Firebase Functionality with  xogame firebase  //
/////////////////////////////////////////////////////////////////

function placePlayer(){
  //query the firebase
 
  // look for game with 1 player

  //if 1player game does NOT exist, create new game & insert player
 
  //start game play
-}

-$('form').submit(function(event){
- var name = $('.name').val();
- var newPlayer = ({Game: 'Player1'});
- fb.push(newPlayer);
- event.preventDefault();
-})


$('td').on('click', function(event) {
 var $target = $(event.target);
 $target.append('x');
});


 $('form').submit(function(event){
  var name = $('.name').val();
  var fb = new Firebase('https://xogame.firebaseio.com/');
  fb.push(newPlayer);
  event.preventDefault();
 })

 // Another attempt to create a new game (with a game number)
$('form').submit(function(event){
  var i = 1;
  i += 1;
  var newGame = ({Games: 'Game'+ i});
  fb.push(newGame);
  event.preventDefault();
})

// Leftover from previous code that we discarded  
 $('button').click(function(){
   $('.hidden').show();
   $('button').hide();
 });
 
 // Initial attempt to create a new game
-$('form').submit(function(event){
- var name = $('.name').val();
- var newPlayer = ({Game: 'Player1'});
- fb.push(newPlayer);
- event.preventDefault();
-})

// Code I was messing with
$('td').on('click', function(event) {
  var $target = $(event.target);
  $target.append('x');
});

// Attempting to assign players to existing game in firebase
var gameRef = ('https://xogame.firebaseio.com/games/game1');

if (fb.child(player1 = false) {
 fb.child('player1').set(true);
} else if (player2 === false) {
 fb.child('player2').set(true); 
} else
new game created
