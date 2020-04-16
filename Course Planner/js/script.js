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

// Handles loading and displaying of courses
// Loading course data
let level100 = [];
let level200 = [];
let level300 = [];
let levelCapstone = [];

// Keep track of courses user has taken/ in progress
let takenCourses = [];

// Load courses from courses.js into the above arrays
storeCourses();

// Display courses on courses taken question screen
displayCourses("level100Question");
displayCourses("level200Question");
displayCourses("level300Question");
displayCourses("levelCapstoneQuestion");

function storeCourses() {
  courses.forEach((course) => {
    if (course.code.charAt(4) == "1") {
      level100.push(course);
    } else if (course.code.charAt(4) == "2") {
      level200.push(course);
    } else if (course.code.charAt(4) == "3") {
      if (course.code == "INFO320" || course.code == "INFO395") {
        levelCapstone.push(course);
      } else {
        level300.push(course);
      }
    }
  });
}

// Displays courses in a parent HTML element.
// ID of the element should take the form: "level100...", "level200...", "level300..." OR "levelCapstone..."
function displayCourses(parentElId) {
  const parentEl = document.getElementById(parentElId);

  let courseLevel; // Which level of courses to use
  courseLevel = parentElId.charAt(5);

  let courseArray = []; // Which array of courses to use
  switch (courseLevel) {
    case "1":
      courseArray = level100;
      break;
    case "2":
      courseArray = level200;
      break;
    case "3":
      courseArray = level300;
      break;
    case "C":
      courseArray = levelCapstone;
  }

  courseArray.forEach((course) => {
    const courseBtn = document.createElement("div");

    // Assign correct stylings (either no, it, OR ba)
    courseSpec = course.spec;
    courseBtn.classList.add(`btn-${courseSpec}-course`);
    courseBtn.classList.add("courseBtn"); // for mass selection of courseBtn's

    courseBtn.innerHTML = `
    <p>${course.code}</p>
    <a href=${course.link}><i class="fas fa-info-circle"></i></a>
    `;

    parentEl.appendChild(courseBtn);
  });
}

function toggleTakenCourse(e) {
  e.target.classList.toggle("selected");
  if (e.target.classList.contains("selected")) {
    takenCourses.push(e.target.innerText);
  } else {
    takenCourses.pop(e.target.innerText);
  }

  console.log(takenCourses);
}

// Add event listeners
const coursesTakenQuestion = document.getElementById("question-3");
const coursesTakenButtons = coursesTakenQuestion.querySelectorAll(".courseBtn");

coursesTakenButtons.forEach((courseBtn) => {
  courseBtn.addEventListener("click", toggleTakenCourse);
});
