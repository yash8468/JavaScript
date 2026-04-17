let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector("#subt");
const userInput=document.querySelector("#guessField");
const guessSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");
const startOver=document.querySelector(".resultParas");

const p=document.createElement("p");

let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){   
  //validate value is between 1 and 100 or not

    if(isNaN(guess)){
        alert("Please Enter a Valid Number");
    }else if(guess<1){
        alert("please Enter a number more than 1");
    }else if(guess>100){
        alert("Please Enter a Number less than 100");   
    }else{
          prevGuess.push(guess);
          if(numGuess===11){
               displayGuess(guess);
               displayMessage(`Game Over , Random number was ${randomNumber}`);
               endGame();
          }else{
               displayGuess(guess);
               checkGuess(guess);
          }
    }
}

function checkGuess(guess){
    //check value is equal to the random number or not , 
    //if equal then will tell you won
    // if guess value is low, then will tell user guess is too low 
     // if guess value is high, then will tell user guess is too high 

     if(guess===randomNumber){
        displayMessage("you guessed it right");
        endGame();
     }else if(guess<randomNumber){
        displayMessage("Number is Too Low");
     }else if(guess>randomNumber){
        displayMessage("Number is Too High");
     }  
}


function displayGuess(guess){                //or cleanupGuess method
     //here we will be showing a previous gueesses array with remaining gusses count
       userInput.value='' ;  // after value submit=>cleaned the user input
       guessSlot.innerHTML+=`${guess},`;
       numGuess++;
       remaining.innerHTML=`${11-numGuess}`;
    
}

function displayMessage(message){
    //whatever guess user entered checked in checkGuess method
    //but that checked messages will show here
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
      //end game means=>clear all values
      userInput.value=''
      userInput.setAttribute('disabled','')  //after chances over then,then this not allowed to accept the input in userInput

      p.classList.add("button")
      p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
      startOver.appendChild(p);
      playGame=false;
      newGame();
}

function newGame(){

    const newGameButton=document.querySelector("#newGame");

    newGameButton.addEventListener("click",function(e){

        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML="";
        remaining.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true

    })


}




