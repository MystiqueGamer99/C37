var canvas, database;
var gameState = 0;
var playerCount = 0;
var form, game, player;
var allPlayers;
var car1, car2, car3, car4;
var cars

function setup(){
  canvas = createCanvas(displayWidth-40,displayHeight-80)
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start()
}

function draw(){
  if (playerCount === 4){
    gameState = 1;
  }
  
  if (gameState === 1){
    clear();
    game.play();
  }
}