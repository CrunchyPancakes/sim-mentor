const message = document.getElementById("message");

// Initial choice
const majorMinorOptions = document.getElementsByName("major-minor");

// Respond to major/ minor/ elective choice
function majorMinor(choice) {
  message.innerHTML = choice;
}

// Store draggable courses
const courseList = [];

const dropBoxList = document.querySelectorAll(".drop-box .course-btn");

let dragStartIndex;

createCourseList();

function createCourseList() {
  const courses = document.querySelectorAll(".draggable");

  courses.forEach((course, index) => {
    course.setAttribute("data-index", index);

    courseList.push(course);
  });
}

// Drag and drop functions
function dragStart() {
  console.log("Event: ", "dragstart");

  dragStartIndex = +this.closest(".course-btn").getAttribute("data-index");

  console.log(dragStartIndex);
}

function dragEnter() {
  console.log("Event: ", "dragenter");
}

function dragLeave() {
  console.log("Event: ", "dragleave");
}

function dragOver(e) {
  console.log("Event: ", "dragover");
}

function dragDrop() {
  console.log("Event: ", "drop");
  dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);
}

function swapItems(fromIndex, toIndex) {
  const course = courseList[fromIndex];

  dropBoxList[toIndex] = course;
}

// Event Listeners
// User clicks on major/ minor/ elective
majorMinorOptions.forEach(item =>
  item.addEventListener("click", function() {
    console.log(this.value);
    majorMinor(this.value);
  })
);

const draggables = document.querySelectorAll(".draggable");

draggables.forEach(draggable => {
  draggable.addEventListener("dragstart", dragStart);
});

dropBoxList.forEach(droppable => {
  droppable.addEventListener("drop", dragDrop);
  console.log(droppable);
});
