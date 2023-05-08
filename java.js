
"use stric";


const box1= document.querySelector('.box1');
const box2= document.querySelector('.box2');
const box3= document.querySelector('.box3');
const box4= document.querySelector('.box4');



// create array
var level=1;
const boxs = [box1, box3, box2, box4];
var  steps=[];
var gameStarted = false
var currentStep = 0
var checkCount = 0

//calling Events
document.addEventListener("click", startGame);
box1.addEventListener("click", function(){
        check(0)
});
box2.addEventListener("click", function(){
        check(2)
  });
box3.addEventListener("click", function(){
        check(1)
  });
box4.addEventListener("click", function(){
        check(3)
  });


//The first function that say randomy box selected.
function blinkRandomly() {
      var rand= Math.floor(Math.random() * 4| 0) ;
      steps.push(rand);

      return rand
}
  
 function startGame(){
      if (gameStarted == false){
          gameStarted = true
          var rand = blinkRandomly()
          blinkBox(rand)
      }
 }

//This function print randomy index
function blinkBox(index){
    var x= boxs[index];
    x.style.backgroundColor = "white";
    var boxColor="black";
    if (index==0){
      boxColor="green";
      
     
    }
    else if (index==1){
      boxColor="red";
    }
    else if (index==2){
      boxColor="yellow";
    }
    else{
      boxColor="blue";
    }
    setTimeout(() => {  x.style.backgroundColor = boxColor; }, 500);
    
    
  }
  const indicator=document.querySelector('.indicator');
  //function print level and index
function  check(index) {
  if(checkCount < steps.length){
      checkCount++
      if(index == steps[currentStep]){
          currentStep++
          if(checkCount == steps.length){
              let newIndex = blinkRandomly()
              setTimeout(() => {blinkBox(newIndex)}, 1000)
              currentStep = 0
              checkCount = 0
              level++
              console.log("level: " + level);
              indicator.innerHTML="level: " + level
              
          }
      }else{
          console.log("GAME OVER!");
          indicator.innerHTML="GAME OVER!"
          gameStarted = false
      }
  }
}
      

// in the html and js use a sound or audio....


document.addEventListener("keydown", function (event) {
  if (event.key == "Escape") {
    document.querySelector("h1").textContent = "level 1";
    document.querySelector(".green");
    let audio1 = new Audio();
    audio1.src = "audio/green.wav";
    audio1.play();
    document.querySelector(".green").style.boxShadow = "0rem 0rem 1rem white";
    // document.getElementById("green").style.background = "rgba(76, 175, 80, 0)";
  }
});
const div_green = document.querySelector(".green");
let audio1 = new Audio();
audio1.src = "green.wav";
div_green.addEventListener("click", function () {
  audio1.play();
  document.querySelector(".green").style.boxShadow = "0rem 0rem 1rem white";
 
});

const div_red = document.querySelector(".red");
let audio2 = new Audio();
audio2.src = "red.wav";
div_red.addEventListener("click", function () {
  audio2.play();
  document.querySelector(".red").style.boxShadow = "0rem 0rem 1rem white";
});

const div_yellow = document.querySelector(".yellow");
let audio3 = new Audio();
audio3.src = "yellow.wav";
div_yellow.addEventListener("click", function () {
  audio3.play();
  document.querySelector(".yellow").style.boxShadow = "0rem 0rem 1rem white";
});

const div_blue = document.querySelector(".blue");
let audio4 = new Audio();
audio4.src = "blue.wav";
div_blue.addEventListener("click", function () {
  audio4.play();
  document.querySelector(".blue").style.boxShadow = "0rem 0rem 1rem white";
});
