// Lead in questions
const questions = document.querySelectorAll(".questions-container");
console.log(questions[0]);
let questionIndex = 0;

const backButton = document.getElementById("back-q");
const nextButton = document.getElementById("next-q");

function backQuestion() {
  if (questionIndex == 0) {
    console.log("Can't go back");
    return;
  }
  questionIndex--;
  displayQuestions();
}

function nextQuestion() {
  if (questionIndex == questions.length - 1) {
    console.log("Can't go next");
    return;
  }
  questionIndex++;
  displayQuestions();
}

function displayQuestions() {
  for (i = 0; i < questions.length; i++) {
    if (i == questionIndex) {
      questions[i].classList.remove("hide");
    } else {
      questions[i].classList.add("hide");
    }
  }
}

// Event listeners
window.onload = displayQuestions();
backButton.addEventListener("click", backQuestion);
nextButton.addEventListener("click", nextQuestion);
