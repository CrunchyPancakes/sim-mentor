// Classes
class Course {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

let myCourse = new Course("INFO101");
window.onload = myCourse.printName();

// Lead in questions
const questions = document.querySelectorAll(".questions-container");
console.log(questions[0]);
let questionIndex = 0;

const backButton = document.getElementById("back-q");
const nextButton = document.getElementById("next-q");

// Keeping track of user input
const majorMinorElectiveElements = document.getElementsByName(
  "major-minor-elective"
);
let majorMinorElectiveInput = "";

const specialisationElements = document.getElementsByName("specialisation");
let specialisationInput = "";

// Functions
// Navigating questions
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

// Storing user input
// Major/Minor/Elective question
function getRadioInput(radioElements) {
  let toReturn = null;
  radioElements.forEach((element) => {
    if (element.checked) {
      toReturn = element.id;
    }
  });

  return toReturn;
}

function setMajorMinorElectiveInput() {
  majorMinorElectiveInput = getRadioInput(majorMinorElectiveElements);
  console.log(majorMinorElectiveInput);
}

function setSpecialisationInput() {
  specialisationInput = getRadioInput(specialisationElements);
  console.log(specialisationInput);
}

// Event listeners
window.onload = displayQuestions();
backButton.addEventListener("click", backQuestion);
nextButton.addEventListener("click", nextQuestion);

majorMinorElectiveElements.forEach((element) => {
  element.addEventListener("click", setMajorMinorElectiveInput);
});

specialisationElements.forEach((element) => {
  element.addEventListener("click", setSpecialisationInput);
});
