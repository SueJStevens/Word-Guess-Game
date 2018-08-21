# Word-Guess-Game PsuedoCode

## Start The Game
*Note: The functions needed to start the game can be reused to reset the game after the word has been guessed or the user has used up all guesses.*
* Choose a random word
  * Random word comes from array of words
  * pick one of the words in the array using random math functions

## Play The Game
* capture user keystroke

## End of Game - Reset 

  

**Choose Random Word**
--create away of words
--pick one of the words in the array using random


**Create the answer array**
--create an empty array
--use a for loop to identify the number of empty dashes to display the length of the random word chosen.


**Game loop - Player's progress**
--create variable to keep track of letters that remain in the Random Work to be guessed
--Create WHILE LOOP (i.e., while remaining letters > 0)
  *Show player their progress
  *Get another guess from the player

**Game loop -- promoting the player for a guess**
--create a variable from a prompt asking user to put in a letter.
  *player could click cancel, so if guess is null exit the game loop. using Break; in JS
  *player could enter zero letters or enters more than one letter, so guess length <> 1 alert player to enter a single letter
  *Player could enter a valid letter and if so, update the game state with the guess
      --create another for loop using the word length
      --go through each letter in the word based on the index to see if the letter guessed is in the word and if so enter it into the answer array.
      --update remaining letters by subtracting one from it.
--END WHILE LOOP

**Show answer and congratulate the player**
