const questions = [
    {
    question : " To insert a JavaScript into an HTML page, which tag is used",
    answers : [
        {text: "<script=â€™javaâ€™>" , correct : false}, 
        {text: " <javascript>" , correct : false},
        {text: "<script> " , correct : true},
        {text: " <js>" , correct : false},
            ]
    },
    {
        question : "How does Java Script store dates in objects of Date type?",
    answers : [
        {text: "The number of days since January 1st, 1900" , correct : false}, 
        {text: "The number of seconds since January 1st, 1970" , correct : false},
        {text: " The number of milliseconds since January 1st, 1970" , correct : true},
        {text: "The number of picoseconds since January 1st, 1970" , correct : false},
            ]
    },

    {
        question : "Which of the following is used to capture all click events in a window?",
    answers : [
        {text: "window.captureEvents(Event.CLICK);" , correct : true}, 
        {text: "window.routeEvents(Event.CLICK );" , correct : false},
        {text: "window.handleEvents (Event.CLICK);" , correct : false},
        {text: "window.raiseEvents(Event.CLICK );" , correct : false},
            ]
    },

    {
        question : " Which of the following is not a valid JavaScript variable name?",
    answers : [
        {text: "_java_and_ java _names" , correct : false}, 
        {text: " 2java " , correct : true},
        {text: " javaandjava" , correct : false},
        {text: " None of the above" , correct : false},
            ]
    },

    {
        question : " Which of the ways below is incorrect of instantiating a date?",
    answers : [
        {text: "new Date(dateString)" , correct : false}, 
        {text: "new Date()" , correct : false},
        {text: "new Date(seconds)" , correct : true},
        {text: "new Date(year, month, day, hours, minutes, seconds, milliseconds)" , correct : false},
            ]
    },
    {
        question : "Why so Java and JavaScript have similar name?",
    answers : [
        {text: "Java Script is a stripped-down version of Javas" , correct : false}, 
        {text: "The syntax of JavaScript is loosely based on Java syntax" , correct : true},
        {text: " They both support Object Oriented Programming" , correct : false},
        {text: " None of the above" , correct : false},
            ]
    },
    {
        question : " Java Script entities start with ____________ and end with ______________",
    answers : [
        {text: " Semicolon, colon" , correct : false}, 
        {text: "Semicolon, Ampersand" , correct : false},
        {text: "Ampersand, colon" , correct : false},
        {text: "Ampersand, semicolon" , correct : true},
            ]
    },
    {
        question : "How to append a value to an array of Java Script?",
    answers : [
        {text: "arr[arr.length] = value " , correct : true}, 
        {text: "arr[arr.length+1] = new Arrays()" , correct : false},
        {text: " arr[arr.length-1] = value" , correct : false},
        {text: " arr[arr.length*1] = value" , correct : false},
            ]
    },
    {
        question : "What language defines the behavior of a web page?",
    answers : [
        {text: " HTML" , correct : false}, 
        {text: "CSS " , correct : false},
        {text: "  XML" , correct : false},
        {text: "Java Script " , correct : true},
            ]
    },
    {
        question : "How do you call a function named myFunction ?",
    answers : [
        {text: "call myFunction()" , correct : false}, 
        {text: "call function myFunction()" , correct : false},
        {text: " myFunction()  " , correct : true},
        {text: " None of the above" , correct : false},
            ]
    },
]

const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-buttons");

const nextButton = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
     currentQuestionIndex = 0;
     score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerText = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function  resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
            selectedBtn.classList.add("Correct");
            score++;
        }else{
            selectedBtn.classList.add("Incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct ==="true"){
                            button.classList.add("Correct");
            }

            button.disabled = "true";
        });

        nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You have scored ${score} out of ${questions.length}!` ;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
    showQuestion();
    }else{
            showScore();
            
        }
} 

nextButton.addEventListener("click", () => {
   if(currentQuestionIndex < questions.length){
    handleNextButton();
   }else{
    startQuiz();
   }
})

startQuiz();