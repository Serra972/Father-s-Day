var DB, greeting, nameBar, fatherNameBar, startButton, endButton;
var voterRef, voterCountRef;
var voterCount=0, name = null, fatherName = null, vote = null;
var name, emailID, arr = [];
var gameState = 1;

function updateCount(count){
  DB.ref('/').update({
    voterCount : count
  });
}

function setup() {
  DB = firebase.database();
  createCanvas(800,800);

  greeting = createElement('h1',"Welcome ");
  greeting.position(width/2+300,300);
  nameBar = createInput("Name");
  nameBar.position(width/2+290,400);
  emailIDBar = createInput("Father's Name");
  emailIDBar.position(width/2+290,450);
  startButton = createButton("Start");
  startButton.position(700,500);

  

  startButton.mousePressed(()=>{
    greeting.hide();
    nameBar.hide();
    emailIDBar.hide();
    startButton.hide();

    Question1();
    gameState = 2;
  })
  
    
}

function draw() {
  background("orange");
  voterCountRef = DB.ref('voterCount');
  voterCountRef.on("value",(data)=>{
    voterCount = data.val();
  });
  vote = arr;
}