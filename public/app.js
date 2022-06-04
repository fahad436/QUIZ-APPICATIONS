var quizData = [  
  {  
   question: "Which language runs in a web browser?",  
   a: "Java",  
   b: "C",  
   c: "Python",  
   d: "JavaScript",  
   correct: "d",  
  },  
  {  
   question: "What does CSS stand for?",  
   a: "Central Style Sheets",  
   b: "Cascading Style Sheets",  
   c: "Cascading Simple Sheets",  
   d: "Cars SUVs Sailboats",  
   correct: "b",  
  },  
  {  
   question: "What does HTML stand for?",  
   a: "Hypertext Markup Language",  
   b: "Hypertext Markdown Language",  
   c: "Hyperloop Machine Language",  
   d: "Helicopters Terminals Motorboats Lamborginis",  
   correct: "a",  
  },  
  {  
   question: "What year was JavaScript launched?",  
   a: "1996",  
   b: "1995",  
   c: "1994",  
   d: "none of the above",  
   correct: "b",  
  },  
];  



    
// console.log(quizData)
// realtime database main daalny ka tareeka...............
    
    //  bar bar database likhny k bajye us ko variable main daal do
    // var database = firebase.database().ref('quiz')

    // // tu ab hum apny input ko database main keys k throug bhejay gay
    // var key = database.push().key;
    // // // console.log(key)
    // var quiz = {
    //     value: quizData.value,
    //     key: key
    // }
    // database.child(key).set();


 var quiz = document.getElementById("quiz");  
 var answerElements = document.querySelectorAll(".answer");  
 var questionElement = document.getElementById("question");  
 var a_text = document.getElementById("a_text");  
 var b_text = document.getElementById("b_text");  
 var c_text = document.getElementById("c_text");  
 var d_text = document.getElementById("d_text");  
 var submitButton = document.getElementById("submit");  
 var currentQuiz = 0; 
 var fname =  document.getElementById("fname");  
 var score = 0;  



 var deselectAnswers = () => {  
   answerElements.forEach((answer) => (answer.checked = false));  
 };  
 var getSelected = () => {  
  var answer;  
  answerElements.forEach((answerElement) => {  
   if (answerElement.checked) answer = answerElement.id;  
  });  
  
   return answer;  
}; 
  
 var loadQuiz = () => {  
  deselectAnswers();  
  var currentQuizData = quizData[currentQuiz];  
  questionElement.innerText = currentQuizData.question;  
  a_text.innerText = currentQuizData.a;  
  b_text.innerText = currentQuizData.b;  
  c_text.innerText = currentQuizData.c;  
  d_text.innerText = currentQuizData.d;  
 };  
 loadQuiz();  
 submitButton.addEventListener("click", () => {  
  var answer = getSelected();  
  if (answer) {  
   if (answer === quizData[currentQuiz].correct) score++;  
   currentQuiz++;  
   if (currentQuiz < quizData.length) loadQuiz();  
   else {  
    quiz.innerHTML = `  
      <h2>You answered ${score}/${quizData.length} questions correctly</h2>  
       <button onclick="history.go(0)">Play Again</button> `
   }  
   }  

    if (fname.value === "") {
     alert('please enter your name')
   }
   else
   firebase.database().ref('fname').set(fname.value)
    firebase.database().ref('score').set(score)
     console.log(score)
  
 });  

