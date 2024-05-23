
function timer(){
  var minutes=10;
      var stop=10*60*1000;
      setInterval(function(){
          minutes-=1;
          document.getElementById('timer-text').innerHTML =minutes + " minutes left";
      },(60*1000));
      setTimeout(() => {
          alert("Time's Up, restart page to try again");
          document.getElementById('timer-text').innerHTML="Time's Up";
      },stop);
}



//functions

function createQuiz(){
 const output = [];
  
quizQuestions.forEach(
   (currentQuestion, questionNumber) => {

     const options = [];

     for(letter in currentQuestion.options){
       options.push(
         `<label class="option-label" >
           <input class="option-input"  type="radio" name="question${questionNumber}" value="${letter}">
           ${currentQuestion.options[letter]}
         </label><br>`
       );
     }

     output.push(
       `<div class="question-containers">
       <div class="question"> ${(questionNumber+1)}. ${currentQuestion.question} </div>
       <div class="options"> ${options.join('')} </div>
       </div>`
     );
   }
 );

 quizContainer.innerHTML = output.join('');
 console.log(quizContainer)
}


function showResults(){
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.options');

  // keep track of user's answers
  let numCorrect = 0;

  quizQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;

      answerContainers[questionNumber].style.color = 'rgba(4, 138, 40)';
    }
    else{
      answerContainers[questionNumber].style.color = 'rgba(138, 4, 17)';
    }
  });

  
  if(numCorrect===20){
    resultsContainer.innerHTML = `Your results are: ${numCorrect} out of ${quizQuestions.length}. You are a Swiftie!! Take the survey if you haven't already.`;
  }
  else if(numCorrect<5){
    resultsContainer.innerHTML = `Your results are: ${numCorrect} out of ${quizQuestions.length}. You don't listen to Taylor Swift. Maybe it's time to change that! Refrensh the page to take the quiz again!`;
  }
  else if(numCorrect>=5 && numCorrect>15){
    resultsContainer.innerHTML = `Your results are: ${numCorrect} out of ${quizQuestions.length}. You're a fan. Explore this website to learn more! Refrensh the page to take the quiz again!`;
  }
  else if(numCorrect>=15 && numCorrect<20){
    resultsContainer.innerHTML = `Your results are: ${numCorrect} out of ${quizQuestions.length}. You're a Taylor Stan!! Let's see if we can make you a Swiftie! Refrensh the page to take the quiz again! `;
  }
}
//variabless
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const quizQuestions = [
    {
      question: "What's Taylor's full name?",
      options: {
        a: "Taylor Allison Swift",
        b: "Taylor Swift",
        c: "Taylor Meridith Swift"
      },
      correctAnswer: "a"
    },
    {
      question: "What is Taylor's Lucky Number?",
      options: {
        a: "15",
        b: "22",
        c: "13"
      },
      correctAnswer: "c"
    },
    {
      question: "When was Taylor Born?",
      options: {
        a: "December 13, 1989",
        b: "January 13, 1989",
        c: "December 22, 1989",
      },
      correctAnswer: "a"
    },
    {
        question: "Which song did Taylor win her first grammy for?",
        options: {
          a: "White Horse",
          b: "Love Story",
          c: "You Belong with me",
        },
        correctAnswer: "a"
    },
    {
        question: "Where was Taylor discovered?",
        options: {
          a: "Bluebird Cafe",
          b: "Red Cafe",
          c: "Starbucks",
        },
        correctAnswer: "a"
    },
    {
        question: "When did Taylor release her first album?",
        options: {
          a: "2007",
          b: "2006",
          c: "2008",
        },
        correctAnswer: "b"
    },
    {
        question: "How tall is Taylor Swift?",
        options: {
          a: "5 ft 11 inches",
          b: "5 ft 10 inches",
          c: "5 ft 7 inches",
        },
        correctAnswer: "a"
    },
    {
        question: "What is the name of Taylor Swift's childhood best friend?",
        options: {
          a: "Katy",
          b: "Selena",
          c: "Abigail",
        },
        correctAnswer: "c"
    },
    {
        question: "Which record label did Taylor Swift first sign with?",
        options: {
          a: "Big Machine Records",
          b: "Sony Entertaiment",
          c: "Music Canada",
        },
        correctAnswer: "a"
    },
    {
        question: "What is Taylor's brother's name?",
        options: {
          a: "Mack",
          b: "Austin",
          c: "She doesn't have a brother",
        },
        correctAnswer: "b"
    },
    {
        question: "What is Taylor's most popular song?",
        options: {
          a: "Blank Space",
          b: "Shake it Off",
          c: "All To Well",
        },
        correctAnswer: "b"
    },
    {
        question: "Which show did Taylor appear on in 2009?",
        options: {
          a: "CSI",
          b: "Law and Order",
          c: "She can't act",
        },
        correctAnswer: "a"
    },
    {
        question: "What are Taylor's Cats Name?",
        options: {
          a: "She doesn't have pets",
          b: "Olivia, Meridith, and Benjamin",
          c: "Killy, Sam, Ben",
        },
        correctAnswer: "b"
    },
    {
        question: "Taylor is the godmother of which celebrity's kid?",
        options: {
          a: "Selena Gomez",
          b: "Katy Perry",
          c: "Jamie King",
        },
        correctAnswer: "c"
    },
    {
        question: "Who taught Taylor to play the guitar?",
        options: {
          a: "A repairman",
          b: "A teacher",
          c: "Her dad",
        },
        correctAnswer: "a"
    },
    {
        question: "How many studio albums does Taylor have?",
        options: {
          a: "6",
          b: "3",
          c: "10",
        },
        correctAnswer: "c"
    },
    {
        question: "What is Taylor Swift's first song?",
        options: {
          a: "The Best Day",
          b: "Tim McGraw",
          c: "Love Story",
        },
        correctAnswer: "a"
    },
    {
        question: "Which song is the lyric 'I remember it all too well' from?",
        options: {
          a: "All to Well",
          b: "Ours",
          c: "Look at what you made me do",
        },
        correctAnswer: "a"
    },
    {
        question: "What is Taylor Swift's favourite color?",
        options: {
          a: "Blue",
          b: "Purple",
          c: "Red",
        },
        correctAnswer: "b"
    },
    {
        question: "What is the name of Taylor Swift's most recent album?",
        options: {
          a: "Red TV",
          b: "Evermore",
          c: "Midnights",
        },
        correctAnswer: "c"
    },
];

createQuiz();



