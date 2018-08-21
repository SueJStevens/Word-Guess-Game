# Word-Guess-Game PsuedoCode

## Start The Game
*Note: The functions needed to start the game can be reused to reset the game after the word has been guessed or the user has used up all guesses.*
* Choose a random word
  * Random word comes from array of words
  * Pick one of the words in the array using random math functions

## Play The Game
* Capture user keystroke
* Test capture
  * Ignore anything except letters and ignore duplicate entries.  *Note: there should be a variable that contains the list of user entries.  It will be empty at the start of the game*
  * Test keystroke against the random word
  * Branch into a right choice / wrong choice
    * Wrong Choice
      * Display User Choice with format of comma in between letters
      * Decrease guesses left by one
      * Test to see if there are any gusses left 
        * If End of Game
          * Increment Losses Counter by 1
          * Reset Game
    * Right Choice
      * Update Random Word Display
      * Display to User
      * Test to see End of Game because word complete
        * If End of Game 
          * Increment Wins Counter by 1
          * Reset Game
          