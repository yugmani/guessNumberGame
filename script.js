
// Variable to store the list of guesses 
let listGuess = [];

// Variable for store the correct random number 
var correctNumber = getRandomNumber();

//Game initialized with onloading
window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}


//  Functionality for playing the whole game

function playGame(){
  var guessNumber = document.getElementById("number-guess").value;
  // console.log("Your Guess: "+ guessNumber);
  displayResult(guessNumber);
  saveGuessHistory(guessNumber);
  displayHistory();
}


//  Show the result for if the guess it too high, too low, or correct
//  HINT: Use if, else if, else statement 

 function displayResult(guessNumber){
    if (correctNumber > guessNumber){
      // console.log("too low");
      showNumberBelow();
      
    } else if (correctNumber < guessNumber){
      // console.log("too high");
      showNumberAbove();
    }
    else { 
      // console.log("You won!");
      // console.log("Correct Number is: " + correctNumber);
      showYouWon();
    }
 }

//  Initialize a new game by resetting all values and content on the page
//  HINT: reset the correctNumber, guesses, and HTML content
 
function initGame(){
  listGuess = [];
  correctNumber = getRandomNumber();
  resetResultContent();
  displayHistory();
  document.getElementById("history").innerHTML = "";
  document.getElementById("number-guess").innerHTML = "";
}


// Reset the HTML content for guess history
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

//  Return a random number between 1 and 100
//  HINT: Use Math.random 
function getRandomNumber(){
  var randomNumber = Math.floor(Math.random()*100)+1;
  return randomNumber;
}

//  Save guess history 
//  HINT: Search Google "append to array in javascript"
function saveGuessHistory(guess) {
  listGuess.push(guess);
  // console.log(listGuess);
}

//  Display guess history to user
//  HINT: use while loop and string concatentation to create a list of guesses

function displayHistory() {
  let index = listGuess.length -1;
  let list = "<ul class='list-group'>";

  while (index>=0){
    list += "<li class = 'list-group-item'>"+ "You guessed "+ listGuess[index]+"</li>";
    index-=1;
  }

  list += '</ul>'
  document.getElementById("history").innerHTML = list;
  document.getElementById("number-guess").value = "";
}

// Retrieve the dialog based on if the guess is wrong or correct 

function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<h2 class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<h2 class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</h2>"
  return dialog;
}

//  Retrieve the dialog using the getDialog() function and save it to variable called dialog
//  HINT: Use the 'won' and text parameters 
function showYouWon(){
  const text = "Awesome job, you got it!"
  dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

// Retrieve the dialog using the getDialog() function and save it to variable called dialog
// HINT: Use the 'warning' and text parameters 
function showNumberAbove(){
  const text = "Your guess is too high!"
  dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

// Retrieve the dialog using the getDialog() function and save it to variable called dialog
// HINT: Use the 'warning' and text parameters
function showNumberBelow(){
  const text = "Your guess is too low!"
  dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
