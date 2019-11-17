var containerDiv = $(".container");
var contentDiv = $(".content");
var highScores = $("#highScores");
var quesContentDiv = $(".quesContent");
var gameOverDiv = $(".gameOver");
var pTag = $("p");
var h1Tag = $("h1");
var timer = $("#timer");
var startButton = $(".start");
var score = $("#score");
var checkAnsDiv = $(".checkAnswer");
var questionTag = $(".question");

var secondsLeft = 95;

timer.text("Time: " + secondsLeft);

function setTime() {
  var timerInterval = setInterval(function (event) {
    secondsLeft--;
    timer.text("Time: " + secondsLeft);

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      gameOverLost();
    }

  }, 1000);
}

var questionDiv = $("<div>");
var questionTitle = $("<h2>");
var answer1 = $("<button class='answer'>");
var answer2 = $("<button class='answer'>");
var answer3 = $("<button class='answer'>");
var answer4 = $("<button class='answer'>");

startButton.on("click", function (event) {
  event.preventDefault();
  setTime();
  questionTitle.text("What group of tags are used to define the text headers in the body of the HTML document?");
  questionDiv.append(questionTitle);
  answer1.text("a. td");
  questionDiv.append(answer1);
  questionDiv.append("<br>");
  answer2.text("b. h1 to h6");
  questionDiv.append(answer2);
  questionDiv.append("<br>");
  answer3.text("c. button");
  questionDiv.append(answer3);
  questionDiv.append("<br>");
  answer4.text("d. footer");
  questionDiv.append(answer4);
  questionDiv.append("<br>");
  
  containerDiv.attr("style", "text-align: left");
  contentDiv.html(questionDiv.html());
});


var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "What tag defines a devision or the beginning/end of an individual section in an HTML document?",
    choices: ["<br>", "<div>", "<table>", "<meta>"],
    answer: "<div>"
  },
  {
    title: "What tag defines the body of the HTML document, and usually includes all of the contents such as the text, hyperlinks, images, tables, lists, and more?",
    choices: ["<br>/</br>", "<body>/</body>", "<title>/</title>", "<head>/</head>"],
    answer: "<body>"
  },
  {
    title: "What is the name of the stylesheet that defines the presentation of an HTML of XML document?",
    choices: ["Java", "jQuery", "CSS", "PHP"],
    answer: "CSS"
  },
  {
    title: "The link element must go inside the ___ section of the HTML document or page.",
    choices: ["Footer", "Body", "Paragraph", "Head"],
    answer: "Head"
  },
  {
    title: "What is the name of the property that is used to define the special state of an element?",
    choices: ["Pseudo-class", "Syntax", "Alignment", "Style"],
    answer: "Pseudo-class"
  },
  {
    title: "What is the box called in CSS that wraps around every HTML element?",
    choices: ["Float", "Boundary", "Wrap", "Box-model"],
    answer: "Box-model"
  },
  {
    title: "What are the CSS properties that are used to ass space around sections of content?",
    choices: ["Cleaner", "Padding", "Break", "Spacing"],
    answer: "Padding"
  },
  {
    title: "What is the name given to the CSS element that starts on the same line and only takes up as much width (space) as necessary?",
    choices: ["Block-level", "Line", "Inline", "Spacer"],
    answer: "Inline"
  },
  {
    title: "What is the value called that defines colors such as the following: #FFFF00?",
    choices: ["RGB Value", "Decimal Value", "Color Value", "Hex Value"],
    answer: "Hex Value"
  },
  {
    title: "What is the name of the statement that is used to exit or end a loop?",
    choices: ["Falter statement", "Break statement", "Conditional statement", "Close statement"],
    answer: "Break statement"
  },
  {
    title: "What is the default behavior called that is used to move declarations to the top of the current scope?",
    choices: ["Hoisting", "Jumping", "Sorting", "Arranging"],
    answer: "Hoisting"
  },
  {
    title: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
    choices: ["Condtional loop", "Else loop", "While loop", "For loop"],
    answer: "While loop"
  },
  {
    title: "What is the format called that is used for storing and transporting data?",
    choices: ["HTML", "Font", "Syntax", "JSON"],
    answer: "JSON"
  },
  {
    title: "What can loops offer JavaScript code as a whole?",
    choices: ["Cross-platform support.", "Cleaner syntax.", "Added plug-ins.", "Improved performance."],
    answer: "Improved performance."
  },
  {
    title: "In JavaScript, what element is used to store and manipulate text, usually in multiples?",
    choices: ["Recorders", "Variables", "Arrays", "Strings"],
    answer: "Strings"
  },
  {
    title: "What is a Javascript element that represents either TRUE or FALSE?",
    choices: ["Variable", "Event", "Condition", "Boolean"],
    answer: "Boolean"
  },
  {
    title: "A loop that never ends is referred to as a(n) ___.",
    choices: ["While loop", "Infinite loop", "Recursive loop", "For loop"],
    answer: "Infinite loop"
  },
  {
    title: "Jay is considering adding a repetition statement within his Java programming final project. He is unsure of the number of times each loop needs to execute. Which of the statements below best fits the need identified by Jay within his programming?",
    choices: ["While loop", "If-else", "For loop", "Switch statement"],
    answer: "While loop"
  },
  {
    title: "___ is the process of finding errors and fixing them within a program.",
    choices: ["Compiling", "Executing", "Debugging", "Scanning"],
    answer: "Debugging"
  },
  {
    title: "Which of the following is not a required part of a for loop?",
    choices: ["Iterator", "Condition", "String", "Increment"],
    answer: "String"
  },
  {
    title: "Where are global variables defined?",
    choices: ["In the HTML document", "In the CSS document", "Outside of functions", "Inside of functions"],
    answer: "Outside of functions"
  },
  {
    title: "Which is the proper way to reference a class in the CSS document?",
    choices: ["#className {}", "className {}", ".className {}", "@className {}"],
    answer: ".className {}"
  },
  {
    title: "Which command is used to push changes to GitHub from terminal?",
    choices: ["git pwd", "git push add", "git init", "git push origin master"],
    answer: "git push origin master"
  },
  {
    title: "Which of the following DOES require an end tag (IS NOT an empty element)?",
    choices: ["<img>", "<html>", "<br>", "<meta>"],
    answer: "<html>"
  },
  {
    title: "Which is the proper div class for a bootstrap element that spans 12 columns on a medium display?",
    choices: ["column-md-12", "column-12-md", "col-md-12", "col-12-md"],
    asnwer: "col-md-12"
  },
  {
    title: "Which of the following will display a box with a message and an okay button only in the browser?",
    choices: ["confirm()", "alert()", "prompt()", "None of the above"],
    answer: "confirm()"
  },
  {
    title: "Under which index is the string 'yellow' in the following array? var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']",
    choices: ["0", "1", "2", "3"],
    answer: "2"
  },
  {
    title: "Which of the following is the iterator in the following for loop? for (var i=0; i<array.length; i++) {}",
    choices: ["for", "i=0", "i<array.length", "i++"],
    answer: "i=0"
  }
];

var newDiv = $("<div>");
var newTitle = $("<h2>");
var newanswer1 = $("<button class='answer'>");
var newanswer2 = $("<button class='answer'>");
var newanswer3 = $("<button class='answer'>");
var newanswer4 = $("<button class='answer'>");

$(contentDiv).on("click", ".answer", function(event) {
    event.preventDefault();
    newTitle.text(questions[0].title);
    newDiv.append(newTitle);
    newanswer1.text("a. " + questions[0].choices[0]);
    newDiv.append(newanswer1);
    newDiv.append("<br>");
    newanswer2.text("b. " + questions[0].choices[1]);
    newDiv.append(newanswer2);
    newDiv.append("<br>");
    newanswer3.text("c. " + questions[0].choices[2]);
    newDiv.append(newanswer3);
    newDiv.append("<br>");
    newanswer4.text("d. " + questions[0].choices[3]);
    newDiv.append(newanswer4);
    newDiv.append("<br>");
    contentDiv.html(newDiv.html());

    // var checkAns = $("<div>");
    // if (answer1.html() === questions[0].answer[0]) {
    //   checkAns.html("<p>Correct!</p>");
    // } else {
    //   checkAns.html("<p>Wrong!</p>");
    //   secondsLeft -10;
    // };
    // checkAns.attr("style", "disply: block");
    // questionDiv.append(checkAns);

});


// for (var i = 0; i < questions.length; i++) {
//   answer.on("click", function(event) {
//     event.preventDefault();
//     newTitle.text(questions[i].title);
//     newDiv.append(newTitle);
//     newanswer1.text("a" + questions[i].choices[0]);
//     newDiv.append(newanswer1);
//     newDiv.append("<br>");
//     newanswer2.text("b" + questions[i].choices[1]);
//     newDiv.append(newanswer2);
//     newDiv.append("<br>");
//     newanswer3.text("c" + questions[i].choices[2]);
//     newDiv.append(newanswer3);
//     newDiv.append("<br>");
//     newanswer4.text("d" + questions[i].choices[3]);
//     newDiv.append(newanswer4);
//     newDiv.append("<br>");


//     var checkAns = $("<div>");
//     if (ans1 === answer) {
//       checkAns.html("<p>Correct!</p>");
//     } else {
//       checkAns.html("<p>Wrong!</p>");
//     };
//     questionDiv.append(checkAns);
//   })
// };


// highScores.on("click", function(event) {
//   event.preventDefault();
//   var highScoresList = $("<div>");
//   var scoresOl = $("<ol>");
//   highScoresList.html("<h1>" + "High Scores" + "<h1>" )
// })

function gameOverLost() {
  timer.text("Time's up!");
  containerDiv.attr("style", "text-align: center");
  var gameOverDiv = $("<div>");
  gameOverDiv.html("<h1>" + "Game Over" + "</h1>" + "<p>" + "Score = 0" + "</p>");
  contentDiv.html(gameOverDiv.html());
}




// var nextQuestion = $(".nextQuestion")
// // var ansButtons = $(".ansButtons");

// for (var i=0; i<questions.length; i++) {
//   ans1.on("click", function(event) {
//     event.preventDefault();
//     var newQuesDiv = $("<div>");
//     newQuesDiv.html("<h1>" + questions[i].title + "<h1>" + "<button>" + questions[i].choices[0] + "<br>" + "<button>" + questions[i].choices[1] + "<br>" + "<button>" + questions[i].choices[2] + "<br>" + "<button>" + questions[i].choices[3] + "<br>");
//     newQuesDiv.html(newQuesDiv.html());
//   })
// }