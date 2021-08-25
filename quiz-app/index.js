const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
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

const quiz = document.getElementById('quiz')
const questionElement = document.getElementById('question')
//putting all the elements with answer class, like below, will put them in an array and all the nodes will be available
const answersElement = document.querySelectorAll('.answer')
const aText = document.getElementById('a_text')
const bText = document.getElementById('b_text')
const cText = document.getElementById('c_text')
const dText = document.getElementById('d_text')
const submitButton = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]
  questionElement.innerHTML = currentQuizData.question
  aText.innerHTML = currentQuizData.a
  bText.innerHTML = currentQuizData.b
  cText.innerHTML = currentQuizData.c
  dText.innerHTML = currentQuizData.d

}

loadQuiz()

function getSelected() {
  let answer = undefined;
  answersElement.forEach((result) => {
    if (result.checked) {
      answer = result.id
    }
  })
  return answer;
}


submitButton.addEventListener('click', () => {
  const currentQuizData = quizData[currentQuiz]
  const answer = getSelected()
  if (answer === currentQuizData.correct) {
    console.log('you are correct')
    currentQuiz++
  } else {
    console.log('you are incorrect')
    currentQuiz++
  }
  loadQuiz()
})





// let quizQuestions = [];

// function quiz() {
//   fetch('https://opentdb.com/api.php?amount=10')
//     .then((res) => {
//       if (!res.ok) {
//         throw Error('whoops! We cant find that page. ')
//       }
//       return res.json();
//     })
//     .then((data) => {
//       const html = data.results.map((quiz) => {
//         return `
//         <div>
//         <h4>${quiz.question}</h4>
//         <ul class='answers'>
//         <button>${quiz.incorrect_answers[0]}</button>
//         <button>${quiz.incorrect_answers[1]}</button>
//         <button>${quiz.incorrect_answers[2]}</button>
//         <button>${quiz.correct_answer}</button>

//         </ul>
//         </div>
//         `

//       })
//       console.log(data)
//       return document.querySelector('#app').innerHTML = html
//     })
//     .catch((error) => console.log('Error: ', error))
// }

// quiz()

