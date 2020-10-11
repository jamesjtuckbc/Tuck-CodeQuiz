// Global Variables

var mainContentEl = document.querySelector("#mainContent");
var highScoreEl = document.querySelector("#highscores");
var timerEl = document.querySelector("#timer");
var newDiv = document.createElement("div");
var btnDiv = document.createElement("div");
var answer1DivRow = document.createElement("div");
var answer2DivRow = document.createElement("div");
var answer3DivRow = document.createElement("div");
var answer4DivRow = document.createElement("div");
var answer1DivCol = document.createElement("div");
var answer2DivCol = document.createElement("div");
var answer3DivCol = document.createElement("div");
var answer4DivCol = document.createElement("div");
var newH1 = document.createElement("h1");
var newP = document.createElement("p");
var newBtn = document.createElement("button");
var answerBtn1 = document.createElement("button");
var answerBtn2 = document.createElement("button");
var answerBtn3 = document.createElement("button");
var answerBtn4 = document.createElement("button");
var highScoreLabelEl = document.createElement("label");
var highScoreInputEl = document.createElement("input");
var highscoreBool = false;
var newScore = 0;
var questionNumber = 0;
var time = 75;
var timerCountDown;

// questions and answers array
var questions = [
    {
        question: "Which of the following is an advantage of using JavaScript?",
        answer1: "Less server interaction",
        answer2: "Immediate feedback to the visitors",
        answer3: "Increased interactivity",
        answer4: "All of the above.",
        correctAnswer: "answer4",
    },
    {
        question: "Which built-in method returns the character at the specified index?",
        answer1: "characterAt()",
        answer2: "getCharAt()",
        answer3: "charAt()",
        answer4: "None of the above.",
        correctAnswer: "answer3",
    },
    {
        question: "JavaScript is a ___ -side programming language.",
        answer1: "Client",
        answer2: "Server",
        answer3: "Both",
        answer4: "None",
        correctAnswer: "answer3",
    },
    {
        question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
        answer1: "alertBox(“Hello DataFlair!”);",
        answer2: "alert(Hello DataFlair!);",
        answer3: "msgAlert(“Hello DataFlair!”);",
        answer4: "alert(“Hello DataFlair!”);",
        correctAnswer: "answer4",
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        answer1: "min(x,y);",
        answer2: "Math.min(x,y)",
        answer3: "Math.min(xy)",
        answer4: "min(xy);",
        correctAnswer: "answer2",
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        answer1: "catch",
        answer2: "label",
        answer3: "try",
        answer4: "default",
        correctAnswer: "answer4",
    },
    {
        question: "Which are the correct \"if\" statements to execute certain code if “x” is equal to 2?",
        answer1: "if(x 2)",
        answer2: "if(x = 2)",
        answer3: "if(x == 2)",
        answer4: "if(x != 2 )",
        correctAnswer: "answer3",
    },
    {
        question: "What is the correct JavaScript syntax to print “DataFlair” in the console?",
        answer1: "print(“DataFlair”);",
        answer2: "console.print(“DataFlair”);",
        answer3: "log.console(“DataFlair”);",
        answer4: "console.log(“DataFlair”);",
        correctAnswer: "answer4",
    },
    {
        question: "Which of the following print content on the browser window?",
        answer1: "document.write(“print content”);",
        answer2: "response.write(“print content”);",
        answer3: "document.write(print content);",
        answer4: "write(“print content”);",
        correctAnswer: "answer1",
    },
    {
        question: "Which method will you use to round the number 24.76 to the nearest integer?",
        answer1: "round(24.76);",
        answer2: "rnd(24.76);",
        answer3: "Math.round(24.76);",
        answer4: "Math.rnd(24.76);",
        correctAnswer: "answer3",
    }
]



// DOM Element setup

mainContentEl.appendChild(newDiv);
newDiv.setAttribute("class", "centered container justify-content-md-center");
answerBtn1.setAttribute("id", "answer1");
answerBtn2.setAttribute("id", "answer2");
answerBtn3.setAttribute("id", "answer3");
answerBtn4.setAttribute("id", "answer4");
answer1DivRow.setAttribute("class", "row");
answer2DivRow.setAttribute("class", "row");
answer3DivRow.setAttribute("class", "row");
answer4DivRow.setAttribute("class", "row");
answer1DivCol.setAttribute("class", "col-12 mt-4");
answer2DivCol.setAttribute("class", "col-12 mt-4");
answer3DivCol.setAttribute("class", "col-12 mt-4");
answer4DivCol.setAttribute("class", "col-12 mt-4");
btnDiv.setAttribute("class", "row justify-content-md-center");
answerBtn1.setAttribute("class", "btn btn-primary answerBtn");
answerBtn2.setAttribute("class", "btn btn-primary answerBtn");
answerBtn3.setAttribute("class", "btn btn-primary answerBtn");
answerBtn4.setAttribute("class", "btn btn-primary answerBtn");

// FUNCTIONS
// function to create first page
function initialize() {
    clearInterval(timerCountDown);
    timerEl.style.display = "inline";
    newBtn.style.display = "block";
    time = 75;
    newScore = 0;
    mainContentEl.setAttribute("class", "centered container");
    newDiv.textContent = "";
    mainContentEl.appendChild(newDiv);

    newDiv.setAttribute("class", "centered container justify-content-md-center");
    newH1.setAttribute("class", "centered display-4");
    newH1.textContent = "Code Quiz";
    newDiv.appendChild(newH1);

    newP.setAttribute("class", "centered lead");
    newP.textContent = "This is a fun quiz on coding!";
    newH1.appendChild(newP);
    newH1.appendChild(btnDiv);

    newBtn.setAttribute("class", "centered btn");
    newBtn.textContent = "Start Quiz"
    newBtn.setAttribute("id", "startQuiz");
    btnDiv.appendChild(newBtn);
    document.querySelector("#startQuiz").addEventListener("click", function () {
        questionNumber = 0;
        newQuestion();
        timer();
    });
};

// function to create highscore page
function highScore() {
    removeAllChildNodes(mainContentEl);
    highScoreInputEl.value = "";
    timerEl.style.display = "none";
    mainContentEl.setAttribute("class", "centered container");
    newDiv.textContent = "";
    mainContentEl.appendChild(newDiv);
    newDiv.setAttribute("class", "centered container justify-content-md-center");
    newH1.setAttribute("class", "centered display-4");
    newH1.textContent = "High Scores";
    newDiv.appendChild(newH1);

    // newP.setAttribute("class", "centered lead");
    var highScoreUser = JSON.parse(localStorage.getItem("allEntries"));
    if (highScoreUser == null) {

    } else {
        for (var i = 0; i < highScoreUser.length; i++) {
            var newP = document.createElement("p");
            newP.setAttribute("class", "centered lead");
            newP.textContent = "Initials: " + highScoreUser[i].initials + " - Score: " + highScoreUser[i].score + " - Time Remaining: " + highScoreUser[i].timeRemaining;
            newH1.appendChild(newP);
        }
    }


    highScoreEl.textContent = "Code Quiz";

};

// function to create switch page
function switchPage(event) {
    event.preventDefault();
    if (highscoreBool) {
        removeAllChildNodes(mainContentEl);
        highScoreEl.textContent = "View Highscores";
        highscoreBool = false;
        initialize();
    } else {
        removeAllChildNodes(mainContentEl);
        highscoreBool = true;
        highScore();
    }

};

// function to clear child nodes i.e. when switching pages
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

// function to create question and answer buttons
function newQuestion() {
    if (questionNumber < questions.length) {
        // set buttons to blue
        answerBtn1.setAttribute("class", "btn btn-primary answerBtn");
        answerBtn2.setAttribute("class", "btn btn-primary answerBtn");
        answerBtn3.setAttribute("class", "btn btn-primary answerBtn");
        answerBtn4.setAttribute("class", "btn btn-primary answerBtn");
        // hide button from previous "page"
        newBtn.style.display = "none";

        // set question text
        newDiv.textContent = questions[questionNumber].question;
        // set answer texts for buttons
        answerBtn1.textContent = questions[questionNumber].answer1;
        answerBtn2.textContent = questions[questionNumber].answer2;
        answerBtn3.textContent = questions[questionNumber].answer3;
        answerBtn4.textContent = questions[questionNumber].answer4;
        // add rows for page layout
        newDiv.append(answer1DivRow);
        newDiv.append(answer2DivRow);
        newDiv.append(answer3DivRow);
        newDiv.append(answer4DivRow);
        // add columns for page layout
        answer1DivRow.append(answer1DivCol);
        answer2DivRow.append(answer2DivCol);
        answer3DivRow.append(answer3DivCol);
        answer4DivRow.append(answer4DivCol);
        // add buttons to divs
        answer1DivCol.append(answerBtn1);
        answer2DivCol.append(answerBtn2);
        answer3DivCol.append(answerBtn3);
        answer4DivCol.append(answerBtn4);
    } else {
        // end of questions - stop timer and update DOM
        clearInterval(timerCountDown);
        newHighScore();
    };

};

// function to record highscore
function newHighScore() {
    // clear DOM
    removeAllChildNodes(mainContentEl);
    clearInterval(timerCountDown);
    // show hidden button and update DOM elements
    newBtn.style.display = "inline";
    mainContentEl.setAttribute("class", "centered container");
    newDiv.textContent = "";
    mainContentEl.appendChild(newDiv);
    newDiv.setAttribute("class", "centered container justify-content-md-center");
    newH1.setAttribute("class", "centered display-4");
    newH1.textContent = "High Scores";
    newDiv.appendChild(newH1);

    newP.setAttribute("class", "centered lead");
    newP.textContent = "";
    newH1.appendChild(newP);

    highScoreEl.textContent = "Code Quiz";

    highScoreLabelEl.setAttribute("for", "highScoreInput")
    highScoreLabelEl.textContent = "Please enter your initials"
    newP.append(highScoreLabelEl);

    highScoreInputEl.setAttribute("placeholder", "JJT")
    highScoreInputEl.setAttribute("id", "highScoreInput")
    highScoreLabelEl.append(highScoreInputEl);

    newBtn.textContent = "Submit";
    newDiv.append(newBtn);
    // click event to add new highscore
    newBtn.addEventListener("click", function (event) {
        event.preventDefault();
        // pull allEntries back from local storage
        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        // check if null or undefined
        if (existingEntries == null) existingEntries = [];
        // update user object
        var user = {
            initials: highScoreInputEl.value,
            score: (newScore + (time * .5)),
            timeRemaining: time
        };

        // Save allEntries back to local storage
        existingEntries.push(user);
        localStorage.setItem("allEntries", JSON.stringify(existingEntries));

        // update Bool, clear timer, and go to highscore page
        highscoreBool = true;
        
        highScore();

    });
};

// timer function
function timer() {
    timerCountDown = setInterval(function () {
        if (time <= 1) {
            newHighScore()
            clearInterval(timerCountDown);
        }
        time--;
        timerEl.textContent = "Time: " + time;
    }, 1000)
};
// Event listeners
highScoreEl.addEventListener("click", switchPage);

answerBtn1.addEventListener("click", function () {
    if (questions[questionNumber].correctAnswer === "answer1") {
        // correct answer
        newScore += 5
        questionNumber++
        answerBtn1.setAttribute("class", "btn btn-success answerBtn");
        setTimeout(newQuestion, 500);
    } else {
        // wrong answer
        time -= 5;
        questionNumber++
        answerBtn1.setAttribute("class", "btn btn-danger answerBtn");
        setTimeout(newQuestion, 500);
    }

});
answerBtn2.addEventListener("click", function () {
    if (questions[questionNumber].correctAnswer === "answer2") {
        // correct answer
        newScore += 5
        questionNumber++
        answerBtn2.setAttribute("class", "btn btn-success answerBtn");
        setTimeout(newQuestion, 500);
    } else {
        // wrong answer
        time -= 5;
        questionNumber++
        answerBtn2.setAttribute("class", "btn btn-danger answerBtn");
        setTimeout(newQuestion, 500);
    }
});
answerBtn3.addEventListener("click", function () {
    if (questions[questionNumber].correctAnswer === "answer3") {
        // correct answer
        newScore += 5
        questionNumber++
        answerBtn3.setAttribute("class", "btn btn-success answerBtn");
        setTimeout(newQuestion, 500);
    } else {
        // wrong answer
        time -= 5;
        questionNumber++
        answerBtn3.setAttribute("class", "btn btn-danger answerBtn");
        setTimeout(newQuestion, 500);
    }
});
answerBtn4.addEventListener("click", function () {
    if (questions[questionNumber].correctAnswer === "answer4") {
        // correct answer
        newScore += 5
        questionNumber++
        answerBtn4.setAttribute("class", "btn btn-success answerBtn");
        setTimeout(newQuestion, 500);
    } else {
        // wrong answer
        time -= 5;
        questionNumber++
        answerBtn4.setAttribute("class", "btn btn-danger answerBtn");
        setTimeout(newQuestion, 500);
    }
});
// call first function
initialize();