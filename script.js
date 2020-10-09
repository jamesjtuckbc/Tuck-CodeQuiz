// Global Variables

var mainContentEl = document.querySelector("#mainContent");
var highScoreEl = document.querySelector("#highscores");
var timerEl = document.querySelector("#timer");
var newDiv = document.createElement('div');
var newH1 = document.createElement('h1');
var newP = document.createElement('p');
var newBtn = document.createElement('button');
var highscoreBool = false;




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
        answer1: "answer 1",
        answer2: "answer 2",
        answer3: "answer 3",
        answer4: "answer 4",
        correctAnswer: "answer3",
    },
    {
        question: "question 3",
        answer1: "answer 1",
        answer2: "answer 2",
        answer3: "answer 3",
        answer4: "answer 4",
        correctAnswer: "answer4",
    },
    {
        question: "question 4",
        answer1: "answer 1",
        answer2: "answer 2",
        answer3: "answer 3",
        answer4: "answer 4",
        correctAnswer: "answer1",
    },
    {
        question: "question 5",
        answer1: "answer 1",
        answer2: "answer 2",
        answer3: "answer 3",
        answer4: "answer 4",
        correctAnswer: "answer2",
    },
    {
        question: "question 6",
        answer1: "answer 1",
        answer2: "answer 2",
        answer3: "answer 3",
        answer4: "answer 4",
        correctAnswer: "answer3",
    },
    {
        question: "question 7",
        answer1: "answer 1",
        answer2: "answer 2",
        answer3: "answer 3",
        answer4: "answer 4",
        correctAnswer: "answer4",
    },
    {
        question: "question 8",
        answer1: "answer 1",
        answer2: "answer 2",
        answer3: "answer 3",
        answer4: "answer 4",
        correctAnswer: "answer1",
    },
    {
        question: "question 9",
        answer1: "answer 1",
        answer2: "answer 2",
        answer3: "answer 3",
        answer4: "answer 4",
        correctAnswer: "answer2",
    },
    {
        question: "question 10",
        answer1: "answer 1",
        answer2: "answer 2",
        answer3: "answer 3",
        answer4: "answer 4",
        correctAnswer: "answer3",
    }
]



// FUNCTIONS


// function to create first page
function initialize() {
    mainContentEl.setAttribute("class","centered");
    newDiv.textContent = "";
    mainContentEl.appendChild(newDiv);

    newDiv.setAttribute("class","centered jumbotron");
    newH1.setAttribute("class","centered display-4");
    newH1.textContent = "Code Quiz";
    newDiv.appendChild(newH1);
    
    newP.setAttribute("class","centered lead");
    newP.textContent = "This is a fun quiz on coding!";
    newH1.appendChild(newP);

    newBtn.setAttribute();
};

// function to creat highscore page
function highScore() {
    mainContentEl.setAttribute("class","centered");
    newDiv.textContent = "";
    mainContentEl.appendChild(newDiv);
    newDiv.setAttribute("class","centered jumbotron");
    newH1.setAttribute("class","centered display-4");
    newH1.textContent = "High Scores";
    newDiv.appendChild(newH1);
    
    newP.setAttribute("class","centered lead");
    newP.textContent = "highscore subtext";
    newH1.appendChild(newP);

    highScoreEl.textContent = "Code Quiz";
};

// function to create switch page
function switchPage(event) {
    event.preventDefault();
    if(highscoreBool) {
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
function newQuestion(){
    for(var i = 0; i < questions.length; i++){

    };
};

// Event listeners
highScoreEl.addEventListener("click", switchPage);

// call first function
initialize();