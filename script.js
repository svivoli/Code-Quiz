var containerDiv = $(".container");
var contentDiv = $(".content");
var startDiv = $(".startDiv");
var highScores = $("#highScores");
var playerName = $(".playerName")[0].value;
var backToGame = $("#backToGame");
var quesContentDiv = $(".quesContent");
var gameOverDiv = $(".gameOver");
var highScoresList = $(".highScoresList");
var pTag = $("p");
var h1Tag = $("h1");
var timer = $("#timer");
var startButton = $(".start");
var score = $("#score");
var checkAnsDiv = $(".checkAnswer");
var questionTag = $(".question");

var secondsLeft = 100;

timer.text("Time: " + secondsLeft);

function setTime() {
  var timerInterval = setInterval(function (event) {
    secondsLeft--;
    timer.text("Time: " + secondsLeft);

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      localStorage.setItem("score", secondsLeft);
      gameOverLost();
      return;
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
  questionTitle.text(questions[0].title);
  questionDiv.append(questionTitle);
  answer1.text(questions[0].choices[0]);
  questionDiv.append(answer1);
  questionDiv.append("<br>");
  answer2.text(questions[0].choices[1]);
  questionDiv.append(answer2);
  questionDiv.append("<br>");
  answer3.text(questions[0].choices[2]);
  questionDiv.append(answer3);
  questionDiv.append("<br>");
  answer4.text(questions[0].choices[3]);
  questionDiv.append(answer4);
  questionDiv.append("<br>");
  
  containerDiv.attr("style", "text-align: left");
  contentDiv.html(questionDiv.html());

  localStorage.setItem("playerName", playerName);
});


var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "What tag defines a division or the beginning/end of an individual section in an HTML document?",
    choices: ["br", "div", "table", "meta"],
    answer: "div"
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
    title: "What are the CSS properties that are used to add space around sections of content?",
    choices: ["Cleaner", "Padding", "Break", "Spacing"],
    answer: "Padding"
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
    title: "Which of the following DOES require an end tag (IS NOT an empty element)?",
    choices: ["img", "html", "br", "meta"],
    answer: "html"
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

var checkAns = $("<div class='checkAns'>");
containerDiv.append(checkAns);

function gameOverScore() {
  containerDiv.attr("style", "text-align: center");
  var gameOverScoreDiv = $("<div>");
  localStorage.setItem("score", secondsLeft);
  gameOverScoreDiv.html("<h1>" + "Game Over" + "</h1>" + "<p>" + "Score = " + localStorage.getItem("score") + "</p>");
  contentDiv.html(gameOverScoreDiv.html());
};

function gameOverLost() {
  timer.text("Time's up!");
  containerDiv.attr("style", "text-align: center");
  var gameOverDiv = $("<div>");
  gameOverDiv.html("<h1>" + "Game Over" + "</h1>" + "<p>" + "Score = 0" + "</p>");
  contentDiv.html(gameOverDiv.html());
}

let i=1;
var len = questions.length;
 
$(contentDiv).on("click", ".answer", function(event) {
    event.preventDefault();

    console.log($(this).html());
    console.log(questions[i-1].answer);
    console.log(i-1);
    
    if (i >= 20) {
      console.log("end");
      gameOverScore();
      localStorage.setItem("score", secondsLeft);
      return;
    };
    if ($(this).html() === questions[i-1].answer) {
      checkAns.html("<p>Correct!</p>").delay(3000).hide(1);
    } else {
      checkAns.html("<p>Wrong!</p>").delay(3000).hide(1);
      secondsLeft -= 10;
    };
    checkAns.attr("style", "disply: block");
    checkAns.attr("style", "disply: block");
    newTitle.text(questions[i].title);
    newDiv.html(newTitle);
    newanswer1.text(questions[i].choices[0]);
    newDiv.append(newanswer1);
    newDiv.append("<br>");
    newanswer2.text(questions[i].choices[1]);
    newDiv.append(newanswer2);
    newDiv.append("<br>");
    newanswer3.text(questions[i].choices[2]);
    newDiv.append(newanswer3);
    newDiv.append("<br>");
    newanswer4.text(questions[i].choices[3]);
    newDiv.append(newanswer4);
    newDiv.append("<br>");
    contentDiv.html(newDiv.html());
    i++
});

var highScoresDiv = $("<div>");
var scores = $("<div>");
var player = localStorage.getItem("playerName");
var playerList = [];
playerList.unshift(player);
var highScore = localStorage.getItem("score");
var highScoreList = [];
highScoreList.unshift(highScore);
highScoresDiv.html("<h1>" + "High Scores" + "</h1>");

highScores.on("click", function(event) {
  event.preventDefault();
  containerDiv.attr("style", "text-align: center");
  contentDiv.html(highScoresDiv.html());
  highScoresDiv.append("<br>" + "<h5>" + playerList[0] + ": " + highScoreList[0] + "</h5>");
});

// backToGame.on("click", function(event) {
//   event.preventDefault();
//   containerDiv.attr("style", "text-align: center");
//   contentDiv.html(startDiv.html());
// })


