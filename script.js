// Global Variables

var mainContentEl = document.querySelector("#mainContent");
var highScoreEl = document.querySelector("#highscores");
var timerEl = document.querySelector("#timer");
var newDiv = document.createElement("div");
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
var time = 60;
var timerCountDown;

// html object
var htmlObj = {
    mainPage: {

    }
};
// arrays
// questions array
var questions = [
    {
        question: "question 1",
        answer1: "answer 1",
        answer2: "answer 2",
        answer3: "answer 3",
        answer4: "answer 4",
        correctAnswer: "answer2",
    },
    {
        question: "question 2",
        answer1: "q2answer 1",
        answer2: "q2answer 2",
        answer3: "q2answer 3",
        answer4: "q2answer 4",
        correctAnswer: "answer3",
    },
    {
        question: "question 3",
        answer1: "q3answer 1",
        answer2: "q3answer 2",
        answer3: "q3answer 3",
        answer4: "q3answer 4",
        correctAnswer: "answer4",
    },
    {
        question: "question 4",
        answer1: "q4answer 1",
        answer2: "q4answer 2",
        answer3: "q4answer 3",
        answer4: "q4answer 4",
        correctAnswer: "answer1",
    },
    {
        question: "question 5",
        answer1: "q5answer 1",
        answer2: "q5answer 2",
        answer3: "q5answer 3",
        answer4: "q5answer 4",
        correctAnswer: "answer2",
    },
    {
        question: "question 6",
        answer1: "q6answer 1",
        answer2: "q6answer 2",
        answer3: "q6answer 3",
        answer4: "q6answer 4",
        correctAnswer: "answer3",
    },
    {
        question: "question 7",
        answer1: "q7nswer 1",
        answer2: "q7nswer 2",
        answer3: "q7nswer 3",
        answer4: "q7nswer 4",
        correctAnswer: "answer4",
    },
    {
        question: "question 8",
        answer1: "q8answer 1",
        answer2: "q8answer 2",
        answer3: "q8answer 3",
        answer4: "q8answer 4",
        correctAnswer: "answer1",
    },
    {
        question: "question 9",
        answer1: "q9answer 1",
        answer2: "q9answer 2",
        answer3: "q9answer 3",
        answer4: "q9answer 4",
        correctAnswer: "answer2",
    },
    {
        question: "question 10",
        answer1: "q10answer 1",
        answer2: "q10answer 2",
        answer3: "q10answer 3",
        answer4: "q10answer 4",
        correctAnswer: "answer3",
    }
]



// FUNCTIONS

mainContentEl.appendChild(newDiv);
newDiv.setAttribute("class", "centered");
answerBtn1.setAttribute("id", "answer1")
answerBtn2.setAttribute("id", "answer2")
answerBtn3.setAttribute("id", "answer3")
answerBtn4.setAttribute("id", "answer4")
answerBtn1.setAttribute("class", "answerBtn")
answerBtn2.setAttribute("class", "answerBtn")
answerBtn3.setAttribute("class", "answerBtn")
answerBtn4.setAttribute("class", "answerBtn")
// function to create first page
function initialize() {
    clearInterval(timerCountDown);
    timerEl.style.display = "block";
    time = 60;
    newScore = 0;
    mainContentEl.setAttribute("class", "centered");
    newDiv.textContent = "";
    mainContentEl.appendChild(newDiv);

    newDiv.setAttribute("class", "centered");
    newH1.setAttribute("class", "centered display-4");
    newH1.textContent = "Code Quiz";
    newDiv.appendChild(newH1);

    newP.setAttribute("class", "centered lead");
    newP.textContent = "This is a fun quiz on coding!";
    newH1.appendChild(newP);

    newBtn.setAttribute("class", "centered btn");
    newBtn.textContent = "Start Quiz"
    newBtn.setAttribute("id", "startQuiz");
    newP.appendChild(newBtn);
    document.querySelector("#startQuiz").addEventListener("click", function () {
        questionNumber = 0;
        newQuestion();
        timer();
    });
};

// function to create highscore page
function highScore() {
    timerEl.style.display = "none";
    mainContentEl.setAttribute("class", "centered");
    newDiv.textContent = "";
    mainContentEl.appendChild(newDiv);
    newDiv.setAttribute("class", "centered");
    newH1.setAttribute("class", "centered display-4");
    newH1.textContent = "High Scores";
    newDiv.appendChild(newH1);

    newP.setAttribute("class", "centered lead");
    var highScoreUser = JSON.parse(localStorage.getItem("user"));
    console.log(highScoreUser);
    for(var i = 0; i < highScoreUser.length; i++) {
        newP.textContent = "Initials: " + highScoreUser[i].initials + " - Score: " + highScoreUser[i].score + " - Time Remaining: " + highScoreUser[i].timeRemaining;
    }
    newH1.appendChild(newP);

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
        newDiv.textContent = questions[questionNumber].question;

        answerBtn1.textContent = questions[questionNumber].answer1;
        answerBtn2.textContent = questions[questionNumber].answer2;
        answerBtn3.textContent = questions[questionNumber].answer3;
        answerBtn4.textContent = questions[questionNumber].answer4;

        newDiv.append(answerBtn1);
        newDiv.append(answerBtn2);
        newDiv.append(answerBtn3);
        newDiv.append(answerBtn4);
    } else {
        clearInterval(timerCountDown);
        newHighScore();
    };

};

// function to record highscore
function newHighScore() {
    removeAllChildNodes(mainContentEl);
    mainContentEl.setAttribute("class", "centered");
    newDiv.textContent = "";
    mainContentEl.appendChild(newDiv);
    newDiv.setAttribute("class", "centered");
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
    newBtn.setAttribute("id","imputSubmit")
    newP.append(newBtn);

    newBtn.addEventListener("click",function(event) {
        event.preventDefault();
        var user = [{
            initials: highScoreInputEl.value,
            score: newScore,
            timeRemaining: time
        }];
        var oldUsers = JSON.parse(localStorage.getItem("user"));
        
            user.push(oldUsers);
            localStorage.setItem("user", JSON.stringify(user));
     
        // localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
        highscoreBool = true;
        clearInterval(timerCountDown);
        highScore();
    });
};

// timer function
function timer() {
    timerCountDown = setInterval(function(){
        if(time === 1) {
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
        newScore+=5
        questionNumber++
        console.log("Correct");
        newQuestion();
    } else {
        time-=5;
        questionNumber++
        console.log("wrong");
        newQuestion();
    }

});
answerBtn2.addEventListener("click", function () {
    if (questions[questionNumber].correctAnswer === "answer2") {
        newScore+=5
        questionNumber++
        console.log("Correct");
        newQuestion();
    } else {
        time-=5;
        questionNumber++
        console.log("wrong");
        newQuestion();
    }
});
answerBtn3.addEventListener("click", function () {
    if (questions[questionNumber].correctAnswer === "answer3") {
        newScore+=5
        questionNumber++
        console.log("Correct");
        newQuestion();
    } else {
        time-=5;
        questionNumber++
        console.log("wrong");
        newQuestion();
    }
});
answerBtn4.addEventListener("click", function () {
    if (questions[questionNumber].correctAnswer === "answer4") {
        newScore+=5
        questionNumber++
        console.log("Correct");
        newQuestion();
    } else {
        time-=5;
        questionNumber++
        console.log("wrong");
        newQuestion();
    }
});
// call first function
initialize();