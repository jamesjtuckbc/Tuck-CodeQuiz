// Global Variables

var mainContentEl = document.querySelector("#mainContent");
var highScoreEl = document.querySelector("#highscores");
var timerEl = document.querySelector("#timer");
var newDiv = document.createElement('div');
var newH1 = document.createElement('h1');
var newP = document.createElement('p');
var highscoreBool = false;


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
    newP.textContent = "Code Quiz";
    newH1.appendChild(newP);
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

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

// Event listeners
highScoreEl.addEventListener("click", switchPage);

// call first function
initialize();