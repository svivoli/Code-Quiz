# Code Quiz

### Links to Project

https://github.com/svivoli/Code-Quiz  
https://svivoli.github.io/Code-Quiz/

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

### User Experience

![Start game](https://i.imgur.com/HpGTYuc.jpg)

The user is greeted with a description of the game and a form to enter their name. Once they press the start button, the timer begins counting down and the first question appears.

![Question](https://i.imgur.com/jWVjNUK.png)

Each question has four answer choices, each contained in their own button. Once the user clicks an answer, the next question appears, and "Correct!" or "Wrong!" should appear beneath the buttons.

![Game Over](https://i.imgur.com/Fgow3av.jpg)

If a user does not reach the end of the questions before the time is up, a "Game Over" message is displayed, and their score is 0. If they do answer all of the questions, their score (= time left) is displayed.

### My Experience

All in all this project was rather difficult. There were a lot of components that felt beyond my scope of knowledge thus far, but it made it a huge learning experience. I still feel like my code could be much more concise, so I look forward to circling back to polish it and fix the broken parts.

-- Sarah Vivoli
