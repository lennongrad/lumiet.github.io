var questionNumb = 3;
var currQuestion = 0;
var score = 0;
var questionData = [{question : "to dance", answer: "bailar"}, {question: "to sing", answer: "cantar"}, {question: "to speak", answer: "hablar"}];


function getRand(x) {
return Math.floor(Math.random()*x);
}


function setQuestion() {
currQuestion = getRand(questionNumb);
document.getElementById('phrase').innerHTML = questionData[currQuestion].question;
}

function updateScore() {
 document.getElementById('score').innerHTML = "Score: " + score;
}

function getData() {
 alert("got here");
var userAnswer = document.getElementById('submission').value.toLowerCase();
 alert(userAnswer);
  if(userAnswer==questionData[currQuestion].answer) {
    document.getElementById('checkans').innerHTML = "Correct";
    score++;
    updateScore();
    setQuestion();
  }
  else {
   document.getElementById('checkans').innerHTML = "Incorrect, try again"; 
  }
}
