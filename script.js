const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const heading = document.getElementById("heading");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNewQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNewQuestion();
}
function setNewQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
  heading.innerText = "Quiz App";
  heading.style.color = "black";
}
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (setStatusClass(document.body, correct)) {
    heading.innerText = "correct!";
    heading.style.color = "green";
  } else {
    heading.innerText = "wrong !";
    heading.style.color = "tomato";
  }
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = " Restart ";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
    return true;
  } else {
    element.classList.add("wrong");
    return false;
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
const questions = [
  {
    question: "What is 2 + 2?",
    answers: [
      {
        text: "4",
        correct: true,
      },
      {
        text: "22",
        correct: false,
      },
    ],
  },
  {
    question: "What is 9 * 3?",
    answers: [
      {
        text: "27",
        correct: true,
      },
      {
        text: "23",
        correct: false,
      },
      {
        text: "12",
        correct: false,
      },
      {
        text: "18",
        correct: false,
      },
    ],
  },
  // Randomly generated questions start here
  {
    question: "What is the purpose of a 'for' loop in JavaScript?",
    answers: [
      {
        text: "To iterate over elements of an array",
        correct: true,
      },
      {
        text: "To define a function",
        correct: false,
      },
      {
        text: "To create an object",
        correct: false,
      },
      {
        text: "To conditionally execute code",
        correct: false,
      },
    ],
  },
  {
    question: "What does 'HTML' stand for?",
    answers: [
      {
        text: "Hypertext Markup Language",
        correct: true,
      },
      {
        text: "Hyper Text Makeup Language",
        correct: false,
      },
      {
        text: "Highly Typed Markup Language",
        correct: false,
      },
      {
        text: "Hyperlinks and Text Markup Language",
        correct: false,
      },
    ],
  },
  {
    question: "Which data structure uses LIFO (Last In, First Out) principle?",
    answers: [
      {
        text: "Stack",
        correct: true,
      },
      {
        text: "Queue",
        correct: false,
      },
      {
        text: "Linked List",
        correct: false,
      },
      {
        text: "Array",
        correct: false,
      },
    ],
  },
  {
    question: "What is the output of '2' + 2 in JavaScript?",
    answers: [
      {
        text: "22",
        correct: true,
      },
      {
        text: "4",
        correct: false,
      },
      {
        text: "Error",
        correct: false,
      },
      {
        text: "undefined",
        correct: false,
      },
    ],
  },
  {
    question: "What is the main purpose of CSS?",
    answers: [
      {
        text: "Styling web pages",
        correct: true,
      },
      {
        text: "Executing JavaScript code",
        correct: false,
      },
      {
        text: "Defining server-side logic",
        correct: false,
      },
      {
        text: "Interacting with databases",
        correct: false,
      },
    ],
  },
  {
    question: "What does the 'git clone' command do?",
    answers: [
      {
        text: "Copies a repository from a remote source to your local machine",
        correct: true,
      },
      {
        text: "Creates a new repository on your local machine",
        correct: false,
      },
      {
        text: "Commits changes to a repository",
        correct: false,
      },
      {
        text: "Deletes a repository",
        correct: false,
      },
    ],
  },
  {
    question: "What does the acronym 'API' stand for?",
    answers: [
      {
        text: "Application Programming Interface",
        correct: true,
      },
      {
        text: "Advanced Programming Interface",
        correct: false,
      },
      {
        text: "Automated Programming Interface",
        correct: false,
      },
      {
        text: "Application Process Interface",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which programming language is used for server-side web development?",
    answers: [
      {
        text: "Node.js",
        correct: true,
      },
      {
        text: "HTML",
        correct: false,
      },
      {
        text: "CSS",
        correct: false,
      },
      {
        text: "JavaScript",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the purpose of the 'alt' attribute in an HTML <img> tag?",
    answers: [
      {
        text: "Provides alternative text for an image",
        correct: true,
      },
      {
        text: "Specifies the alignment of an image",
        correct: false,
      },
      {
        text: "Defines the source of an image",
        correct: false,
      },
      {
        text: "Sets the width of an image",
        correct: false,
      },
    ],
  },
  {
    question: "What is the result of 'typeof null' in JavaScript?",
    answers: [
      {
        text: "'object'",
        correct: true,
      },
      {
        text: "'null'",
        correct: false,
      },
      {
        text: "'undefined'",
        correct: false,
      },
      {
        text: "'string'",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the purpose of the 'title' attribute in an HTML element?",
    answers: [
      {
        text: "Provides additional information about the element",
        correct: true,
      },
      {
        text: "Defines a title for the web page",
        correct: false,
      },
      {
        text: "Specifies the style of the element",
        correct: false,
      },
      {
        text: "Sets the font size of the element",
        correct: false,
      },
    ],
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    answers: [
      {
        text: "//",
        correct: true,
      },
      {
        text: "/* */",
        correct: false,
      },
      {
        text: "#",
        correct: false,
      },
      {
        text: "--",
        correct: false,
      },
    ],
  },
  {
    question: "What is the purpose of the 'href' attribute in an HTML <a> tag?",
    answers: [
      {
        text: "Specifies the URL of the link",
        correct: true,
      },
      {
        text: "Defines the height of the link",
        correct: false,
      },
      {
        text: "Sets the target of the link",
        correct: false,
      },
      {
        text: "Provides alternative text for the link",
        correct: false,
      },
    ],
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      {
        text: "var",
        correct: true,
      },
      {
        text: "let",
        correct: false,
      },
      {
        text: "const",
        correct: false,
      },
      {
        text: "variable",
        correct: false,
      },
    ],
  },
  {
    question: "What is the result of 'typeof undefined' in JavaScript?",
    answers: [
      {
        text: "'undefined'",
        correct: true,
      },
      {
        text: "'object'",
        correct: false,
      },
      {
        text: "'null'",
        correct: false,
      },
      {
        text: "'string'",
        correct: false,
      },
    ],
  },
  {
    question: "What does the 'git push' command do?",
    answers: [
      {
        text: "Uploads local repository changes to a remote repository",
        correct: true,
      },
      {
        text: "Downloads changes from a remote repository to your local machine",
        correct: false,
      },
      {
        text: "Creates a new branch",
        correct: false,
      },
      {
        text: "Deletes a branch",
        correct: false,
      },
    ],
  },
];

// Make sure to shuffle the questions array if needed
// You can use a shuffling function like Fisher-Yates shuffle
