"use strict";
/*Functions that are likely to be reused in many different applications*/

//function for random computer choice
function getRandomInt(seed) {
    return Math.floor(Math.random() * Math.floor(seed));
  }

function changeDisplay(strElementID, displayValue) {
    document.getElementById(strElementID).textContent = displayValue;
}




/*Functions specific to this application*/

//variables
var initial_guessesLeft = 9;
var initial_guesses = "";
var initial_rightChoices = "";
var winCounter = 0; //never gets reset back to zero
var lossCounter = 0; //never gets reset back to zero
var guessesLeft = initial_guessesLeft;
var computerPick = " ";
var userChoices = initial_guesses;
var userChoice = "";

var weather = ['snow and rain','box of rain','wind','bolt','weather report','still water', 'thunder'];
var wordBlank = "";
var rightChoices = "";

var arrEmoji = ['\xa0' + '\u23A7' + 'RIP' + '\u23AB' + '\xa0', '\xa0' + '\u23AB' ,  '\u23A7' + '\xa0', '\u0029', '\u003B', '\u00D7', '\u005F', '\u00D7', '\u0028'];
var emoji = "";
var emoji1 = "";

//call reset function

function resetGame() {

    //reset both display and internal variables
    changeDisplay("lastWord", computerPick);
    changeDisplay("guessesLeft", initial_guessesLeft);
    changeDisplay("wrongGuesses", initial_guesses);

    //reset guessesLeft and guesses
    guessesLeft = initial_guessesLeft;
    userChoices = initial_guesses; 
    rightChoices = initial_rightChoices;
    
    //Computer Picks Random Letter and changes display
    computerPick = weather[getRandomInt(weather.length)];
    changeDisplay("computerPick", computerPick);
    
    //length of word computer picked
    
    //console.log(computerPick.length);
    stringMask(computerPick);
    changeDisplay("wordBlanks", wordBlank);

}

function stringMask(str, str2='') {
    //build display string

    //initialize variable because if you don't reset wordBlank it will repeat in the display
    wordBlank="";
    for (var i=0; i<str.length; i++) {

        //spaces in word phrases are displayes as spaces.  Letters are displyed as underscores
        if (str.charAt(i) === " ") {
            wordBlank = wordBlank + '\xa0\xa0'; // /xa0 is js shorthand for a nonbreaking space.  ie &nbsp;

            //else test to see if the user's choices so far are in the computer pick
        } else if (str2.indexOf(str.charAt(i)) >= 0) {
            wordBlank = wordBlank +  '\xa0' + str.charAt(i);
            
        } else {
            wordBlank = wordBlank + " _";
        }
    }
    //remove the first character as it is a blank space
    wordBlank = wordBlank.substring(1);
    return wordBlank;

}

function buildEmoji(int) {

    //int === 9 means the user chose a correct letter so erase the emoji
    if (int === 9) {
        emoji = "";
        emoji1 = "";
        changeDisplay("emoji", emoji);
        changeDisplay("emoji1", emoji1);
    //int === 8 means the user chose an incorrect letter so the emoji still needs to be erased, but then rebuild starts
    } else if (int === 8) {
        emoji = "";
        emoji1 = "";
        changeDisplay("emoji", emoji);
        changeDisplay("emoji1", emoji1);
        emoji = emoji + arrEmoji[int];
    } else if (int <9 && int > 2) {
        emoji = emoji + arrEmoji[int];
    } else if (int >0) {
        emoji1 = emoji1 + arrEmoji[int];
    } else {
        emoji1 = arrEmoji[int];
    }
    changeDisplay("emoji", emoji);
    changeDisplay("emoji1", emoji1);

}
    

//Start the game
resetGame();

//Capture user keystroke & display
document.onkeyup = function(event) {
    //capture userChoice
    userChoice = event.key;
    userChoice = userChoice.toLowerCase();
    
    //*Ignore anything except letters and ignore duplicate choices*//
    if (userChoice.length === 1 
            && userChoice >= "a" 
            && userChoice <= "z" 
            && userChoices.indexOf(userChoice) < 0) {
        //valid entry

            //is the choice right or wrong
            //indexOf will return a -1 if the letter doesn't exist in the random word
            if (computerPick.indexOf(userChoice) < 0) {

                //deal with comma 
                if (userChoices === "") {
                    userChoices = userChoice;   
                } else {
                    userChoices = userChoices + ", " + userChoice;
                }

                //decrease guesses left
                guessesLeft = guessesLeft - 1;
                changeDisplay("guessesLeft", guessesLeft);
                buildEmoji(guessesLeft);


                //test to see if game over
                if (guessesLeft === 0) {

                    //increment losses
                    lossCounter = lossCounter + 1;
                    changeDisplay("lossCounter", lossCounter);

                    //Reset Game
                    resetGame()
                }
                
                //display user choices as wrong guesses
                changeDisplay("wrongGuesses", userChoices);
                //changeDisplay("userChoice", userChoice);

            } else {

                //fix emoji if this is the first play
                if (guessesLeft === 9) {
                    emoji = "";
                    emoji1 = "";
                    changeDisplay("emoji", emoji);
                    changeDisplay("emoji1", emoji1);            
                }


                //display the user choices as right guesses in the random word display
                rightChoices = rightChoices + userChoice;
                //reformatting the mask to include the right letters entered
                changeDisplay("wordBlanks", stringMask(computerPick, rightChoices))

                //test to see if win;  a win has no more underscores in the mask.
                if (wordBlank.indexOf("_") < 0) {
                    //increment wins, change display & reset game
                    winCounter = winCounter + 1;
                    changeDisplay("winCounter", winCounter)
                    resetGame();
                }

            }

        }

} //close onkeyup function
