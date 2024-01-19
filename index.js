import School from "./Classes/School.js";
import Student from "./Classes/Student.js";
import Subject from "./Classes/Subject.js";
import Teacher from "./Classes/Teacher.js";
import { SCHOOL, STUDENT, SUBJECT, TEACHER } from "./Utils/contants.js";

const assignment = document.getElementById("assignment");
const solution = document.getElementById("solutionBtn");

document.addEventListener("DOMContentLoaded", function () {

  assignment.addEventListener("click", function () {
    document.getElementById("pick-one").style.display = "none";
    toggleElementVisisbility()
    document.getElementById("instructions").style.display = "block";
    document.getElementById("solution").style.display = "none";
    solution.classList.toggle("hider");
    assignment.classList.toggle("hider");
  });

  //Show solution

  solution.addEventListener("click", function () {
    document.getElementById("pick-one").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("solution").style.display = "block";
    solution.style.display = "none";
    assignment.style.display = "block";
  });

  attachEventListeners(SCHOOL);
  attachEventListeners(SUBJECT);
  attachEventListeners(STUDENT);
  attachEventListeners(TEACHER);
});


function attachEventListeners(formElements) {
    const [formBtn, form, submitFormBtn] = formElements;

    formBtn.addEventListener("click", function () {
    toggleElementVisisbility(formBtn, form);
  });

  submitFormBtn.addEventListener("click", function (event) {
    event.preventDefault();
    toggleElementVisisbility(formBtn, form);
    switch (submitFormBtn) {
      case SCHOOL[2]:
        new School().create();
        break;
      case SUBJECT[2]:
        new Subject.create();
        break;
      case STUDENT[2]:
        new Student.create();
        break;
      case TEACHER[2]:
        new Teacher.create();
        break;
      default:
        break;
    }
  });
};


function toggleElementVisisbility(openBtn, form) {
  changeButtonSymbol(openBtn);
  form.classList.toggle("hider");
}

function changeButtonSymbol(element) {
  element.innerText =
    element.innerText === "add_circle" ? "cancel" : "add_circle";
}
