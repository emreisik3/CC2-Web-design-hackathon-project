// Video Feedback Questionarrie
function getValue() {
  var textValue = document.getElementById("summary").value;
  console.log(textValue);
  alert("Thank you. Your response has been recorded.");
}

// Hamburger Button and Menu Functionality, same as one from homepage
function hamburgerMenu() {
  var id = null;
  var element = document.getElementById("menu");
  const compElementStyles = window.getComputedStyle(element);
  const menuWidth = compElementStyles.getPropertyValue("width");
  console.log(menuWidth)

  if (`${menuWidth}` === "0px") {
    console.log("w 0");
    var width = 0;
    clearInterval(id);
    id = setInterval(frame, 15);
    function frame() {
      if (width == 40) {
        clearInterval(id);
      } else {
        width++;
        element.style.width = width + 'vw';
      }
    }
  } else if (`${menuWidth}` !== "0px") {
    var id = null;
    var width = 40;
    clearInterval(id);
    id = setInterval(frame, 15);
    function frame() {
      if (width == 0) {
        clearInterval(id);
      } else {
        width--;
        element.style.width = width + 'vw';
      }
    }
  }
}

// Quiz Functionality -> Array of Dictionary containing questions for the ETL Quiz
const questions = [
  {
    question: "What does ETL stand for?",
    answers: [
      { text: "Extract Transform List", correct: false },
      { text: "Extract Take Load", correct: false },
      { text: "Extract Transform Load", correct: true },
      { text: "Examine Test Load", correct: false }
    ]
  },
  {
    question: "What are the two core service components of AWS Glue service?",
    answers: [
      { text: "Apache Spark and Apache Hive", correct: false },
      { text: "Databases and Tables", correct: false },
      { text: "Data Catalog and ETL Jobs", correct: true },
      { text: "JuPyter Notebooks and Crawlers", correct: false }
    ]
  },
  {
    question: "When was AWS Glue service released?",
    answers: [
      { text: "2018", correct: false },
      { text: "2020", correct: false },
      { text: "2017", correct: true },
      { text: "2014", correct: false }
    ]
  },
  {
    question: "What underlying engine is used by Amazon Athena",
    answers: [
      { text: "Trino (previously Presto)", correct: true },
      { text: "Apache Spark", correct: false },
      { text: "MySQL Engine", correct: false },
      { text: "Apache Hadoop", correct: false }
    ]
  },
  {
    question: "What is the primary purpose and use of Managed Workflows for Apache Airflow Service (MWAA)?",
    answers: [
      { text: "Distributed Big Data Computing", correct: false },
      { text: "Task Orchestration for Batch Workloads", correct: true },
      { text: "Large Scale Storage", correct: false },
      { text: "Event Driven Tool", correct: false }
    ]
  }
];

const questionElement = document.getElementById("questions");
//console.log(questionElement);
const answerButtons = document.getElementById("answerbuttons");
//console.log(answerButtons);
let nextButton = document.getElementById("nextbutton");
//console.log(nextButton); 

// Question tracking index and score variables
let currentQuestionIndex = 0;
let score = 0;

// Main Function to Start Quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next Question";
  showQuestions();
}

// Main Function to show questions/answers for Quiz
function showQuestions() {
  clearState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    //console.log(button);
    button.innerHTML = answer.text;
    //console.log(button.innerHTML);
    button.classList.add("btn");
    // https://www.w3schools.com/jsref/met_node_appendchild.asp
    answerButtons.appendChild(button);
    if (answer.correct) {
      // Use dataset property to get correct answer from data structure defined above: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
      button.dataset.correct = answer.correct;
    }
    // addEventLister: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    button.addEventListener("click", userSelection);
  });
}

function clearState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function nextButtonFunction() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestions();
  }
  else {
    getScore();
  }
}

function getScore() {
  clearState();
  questionElement.innerHTML = "Your score is " + score + " out of " + questions.length;
  if (score >= 3) {
    questionElement.innerHTML = "Good job. Your score is " + score + " out of " + questions.length;
  }
  else {
    questionElement.innerHTML = "You got less than half questions correct. Your score is " + score + " out of " + questions.length + "." + " You can retake the quiz by clicking below."
  }
  nextButton.innerHTML = "Click Here to Retake Quiz";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    nextButtonFunction(); // Next Button 
  }
  else {
    startQuiz(); // Restart quiz once user finish all questions
  }
});

function userSelection(event, currentQuestion) {
  event.preventDefault();
  let selectedBtn = event.target;
  // console.log(selectedBtn.dataset['correct']);
  // console.log(selectedBtn.dataset);

  if (isCorrect = selectedBtn.dataset.correct === "true") {
    selectedBtn.classList.add("Correct");
    score++;
    alert("You got that question correct! Nice! Click Ok to close this dialog and continue onto next question!");
  }
  else {
    selectedBtn.classList.add("Incorrect");
  }
  // Checks whether for each button, whether the selected answer is true. If true, adds green color. If incorrect, shows correct answer (green color)
  // https://www.w3schools.com/jsref/jsref_from.asp
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("Correct");
    }
    // Disable button so cannot add new button/answer choice once one is chosen
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

startQuiz();