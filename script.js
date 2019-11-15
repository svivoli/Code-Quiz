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

var secondsLeft = 75;

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

startButton.on("click", function (event) {
  event.preventDefault();
  setTime();
  var questionDiv = $("<div>");
  questionDiv.html("<h2 class=nextQuestion>" + "What group of tags are used to define the text headers in the body of the HTML document?" + "</h2>" + "<br>" + "<button class=ans1>" + "a. td" + "</button>" + "<br>" + "<button class=ans2>" + "b. h1 to h6" + "</button>" + "<br>" + "<button class=ans3>" + "c. button" + "</button>" + "<br>" + "<button class=ans4>" + "d. footer" + "</button>" + "<br>");
  containerDiv.attr("style", "text-align: left");
  contentDiv.html(questionDiv.html());
});

// var answerClick = function() {
//   checkAnsDiv.setAttribute("style", "display: block");
//   contentDiv.innerHTML = "this is question 2";
//   // for (var i = 0; i < questions.length; i++) {
//   //   h1Tag.textContent = "hi";
//   //   ansButton1.value = "a" + questions.i[choices[0]];
//   //   ansButton2.value = "b" + questions.i[choices[1]];
//   //   ansButton3.value = "c" + questions.i[choices[2]];
//   //   ansButton4.value = "d" + questions.i[choices[3]];
//   // }
// };

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
    title: "What tag is used to define an image-or add an image- to an HTML page?",
    choices: ["<table>", "<meta>", "<div>", "<img>"],
    answer: "<img>"
  },
  {
    title: "What tag is used to underline a word of line of text?",
    choices: ["<li>", "<s>", "<u>", "<ul>"],
    answer: "<ul>"
  },
  {
    title: "What tag is required in all HTML documents, and is used to define the title?",
    choices: ["<head>", "<body>", "<br>", "<title>"],
    answer: "<title>"
  },
  {
    title: "What tag defines a devision or the beginning/end of an individual section in an HTML document?",
    choices: ["<br>", "<div>", "<table>", "<meta>"],
    answer: "<div>"
  },
  {
    title: "What tag is used to define-and place-an interactive button in an HTML document?",
    choices: ["<src>", "<button>", "<td>", "<clickfield>"],
    answer: "<button>"
  },
  {
    title: "What tag defines the body of the HTML document, and usually includes all of the contents such as the text, hyperlinks, images, tables, lists, and more?",
    choices: ["<br>/</br>", "<body>/</body>", "<title>/</title>", "<head>/</head>"],
    answer: "<body>"
  },
  {
    title: "what tag is used to tdefine a table or image notation (caption)?",
    choices: ["<!DOCTYPE>", "<embed>", "<code>", "<caption>"],
    answer: "<caption>"
  },
  {
    title: "What is the name of the stylesheet that defines the presentation of an HTML of XML document?",
    choices: ["Java", "jQuery", "CSS", "PHP"],
    answer: "CSS"
  },
  {
    title: "What is the most important CSS property, used for controlling the layout?",
    choices: ["Margin", "Display", "<div>", "Table"],
    answer: "Display"
  },
  {
    title: "The link element must go inside the ___ section of the HTML document or page.",
    choices: ["Footer", "Body", "Paragraph", "Head"],
    answer: "Head"
  },


];



var ans1 = $(".ans1");
var ans2 = $(".ans2");
var ans3 = $(".ans3");
var ans4 = $(".ans4");
var nextQuestion = $(".nextQuestion")
// // var ansButtons = $(".ansButtons");

// for (var i=0; i<questions.length; i++) {
//   ans1.on("click", function(event) {
//     event.preventDefault();
//     var newQuesDiv = $("<div>");
//     newQuesDiv.html("<h1>" + questions[i].title + "<h1>" + "<button>" + questions[i].choices[0] + "<br>" + "<button>" + questions[i].choices[1] + "<br>" + "<button>" + questions[i].choices[2] + "<br>" + "<button>" + questions[i].choices[3] + "<br>");
//     newQuesDiv.html(newQuesDiv.html());
//   })
// }

for (var i = 0; i < questions.length; i++) {
  ans1.on("click", function(event) {
    event.preventDefault();
    nextQuestion.html(questions[i].title);
    ans1.html(questions[i].choices[0]);
    ans2.html(questions[i].choices[1]);
    ans3.html(questions[i].choices[2]);
    ans4.html(questions[i].choices[3]);

    var checkAns = $("<div>");
    if (ans1 === answer) {
      checkAns.html("<p>Correct!</p>");
    } else {
      checkAns.html("<p>Wrong!</p>");
    };
    questionDiv.append(checkAns);
  })
};

for (var i = 0; i < questions.length; i++) {
  ans2.on("click", function(event) {
    event.preventDefault();
    nextQuestion.html(questions[i].title);
    ans1.html(questions[i].choices[0]);
    ans2.html(questions[i].choices[1]);
    ans3.html(questions[i].choices[2]);
    ans4.html(questions[i].choices[3]);

    var checkAns = $("<div>");
    if (ans2 === answer) {
      checkAns.html("<p>Correct!</p>");
    } else {
      checkAns.html("<p>Wrong!</p>");
    };
  })
};

for (var i = 0; i < questions.length; i++) {
  ans3.on("click", function(event) {
    event.preventDefault();
    nextQuestion.html(questions[i].title);
    ans1.html(questions[i].choices[0]);
    ans2.html(questions[i].choices[1]);
    ans3.html(questions[i].choices[2]);
    ans4.html(questions[i].choices[3]);

    var checkAns = $("<div>");
    if (ans3 === answer) {
      checkAns.html("<p>Correct!</p>");
    } else {
      checkAns.html("<p>Wrong!</p>");
    };
  })
};

for (var i = 0; i < questions.length; i++) {
  ans4.on("click", function(event) {
    event.preventDefault();
    nextQuestion.html(questions[i].title);
    ans1.html(questions[i].choices[0]);
    ans2.html(questions[i].choices[1]);
    ans3.html(questions[i].choices[2]);
    ans4.html(questions[i].choices[3]);

    var checkAns = $("<div>");
    if (ans4 === answer) {
      checkAns.html("<p>Correct!</p>");
    } else {
      checkAns.html("<p>Wrong!</p>");
    };
  })
};


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