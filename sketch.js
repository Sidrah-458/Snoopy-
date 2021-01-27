var database;
var canvas;
var form;
var woodstock, snoopy;
var sadSnoopy, happySnoopy, sadWoodstock, happyWoodstock;
var ball;
var WoodstockImage, snoopyImage;
var sadSnoopyImage, happySnoopyImage, sadWoodstockImage, happyWoodstockImage;
var ballImage;
var background, backgroundImage;

var gameState = 0;



function preload(){
snoopyImage = loadImage("Images/Snoopy.png");
woodstockImage = loadImage("Images/Woodstock.jpg");
sadSnoopyImage = loadImage("Images/Sad Snoopy.png");
happySnoopyImage = loadImage("Images/Happy Snoopy.png");
sadWoodstockImage = loadImage("Images/Sad Woodstock.png");
happyWoodstockImage = loadImage("Images/Happy Woodstock.png");
ballImage = loadImage("Images/Ball.png");
backgroundImage = loadImage("Images/Background.png");

}



function setup(){
database = firebase.database();

canvas = createCanvas(500,500);







}



function draw(){

background("green");

form.display();

drawSprites();




}









  





















