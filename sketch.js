var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var rider1img,rider2img, rider3img, rider4img;
var groundimg;
var riders, rider1, rider2, rider3, rider4;

function preload(){
  rider1img = loadImage("../images/Motor10.png")
  rider2img = loadImage("../images/Motor20.png")
  rider3img = loadImage("../images/Motor30.png")
  rider4img = loadImage("../images/Motor40.png")
    backgroundImage = loadImage("../images/City0.png")
    groundimg = loadImage("../images/ground0.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
