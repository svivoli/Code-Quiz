# Code Quiz

### Description

The purpose of this project was to create an interactive timed quiz that generates questions pertaining to HTML, CSS, and Javascript. This can be used as a study tool or a fun way to test one's knowledge of coding. The user answers questions by clicking buttons and is taken to the next question on the click of their answer. They quiz is timed from its start and each wrong answer reduces the time by 10 seconds. The time remaining on the clock once they have answered all of the questions is their final score. Names and high scores are saved and can be accessed by the user.

Components:
1. Bootstrap navbar
- Link to high scores
- Back to game link (hidden until user clicks high scores link)
- Timer that counts down once user starts game
2. Container div created in html document
3. Original start page created in html document
- h1, p, form, button
4. jQuery generated child divs
5. jQuery generated titles (questions)
- questions (30), choices (4 per question), correct answer stored in array
6. jQuery generated buttons
- jQuery on click functions to start game and switch to next question
7. jQuery generated "Game Over" div when timer reaches 0 or when all questions have been answered
8. Local storage variable for high scores using user-inputted name and time left on timer once all questions have been answered
9. Global iterator used to access elements in the array
- incremented without a for loop using a local increment and if statements
9. Super cool background image

### Links to Project

https://github.com/svivoli/Code-Quiz  
https://svivoli.github.io/Code-Quiz/index.html


### User Experience

![Start game](https://i.imgur.com/HpGTYuc.jpg)

The user is greeted with a description of the game and a form to enter their name. Once they press the start button, the timer begins counting down and the first question appears.

![Question](https://i.imgur.com/jWVjNUK.png)

Each question has four answer choices, each contained in their own button. Once the user clicks an answer, the next question appears, and "Correct!" or "Wrong!" should appear beneath the buttons.

![Game Over](https://i.imgur.com/Fgow3av.jpg)

If a user does not reach the end of the questions before the time is up, a "Game Over" message is displayed, and their score is 0. If they do answer all of the questions, their score (= time left) is displayed.

### My Experience

Unresolved Errors:

![AnsCheck Error Console](https://i.imgur.com/FaEjTH2.png)

This was my attempt at figuring out why my "checkAns" div, which is meant to display "Wrong" or "Correct" depending on which answer the user selects, was displaying wrong no matter what answer was selected.  
On the left is the array of questions, starting at 0.  
In the console I have printed 3 things:   
1. $(this).html() - html content of the answer button clicked by the user 
2. questions[i-1].answer - this gets very confusing, brace yourself. I should be printing questions[i].answer to print the answer of the current question, but for some reason the application was jumping ahead two questions after the first question was answered in terms of searching for the correct answer. However once I used the i-1 hack another problem arose in that the quiz skipped the second question (does not display its title or choices to the user) but still read its answer. This is the reason 1-3 do not match up.
3. i - to be able to differentiate the sets of answers

![High Scores Error](https://i.imgur.com/UQWUwNr.png)

This is what is supposed to be the high scores page. With jQuery I have made an onclick event handler for the View High Scores link in the navbar that creates a div containing the title and an empty list to be filled with high scores. The list is supposed to retrieve names and high scores from local storage set earlier in the code. It does so successfully with the score but not with the user's name. I am assuming this has something to do with the fact that the user's name was entered via an html form and is being retrieved via jQuery.

All in all this project was rather difficult. There were a lot of components that felt beyond my scope of knowledge thus far, but it made it a huge learning experience. I still feel like my code could be much more concise, so I look forward to circling back to polish it and fix the broken parts.

-- Sarah Vivoli
