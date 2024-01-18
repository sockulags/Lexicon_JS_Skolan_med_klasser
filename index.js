import School from "./Classes/School.js";
import Subject from "./Classes/Subject.js";

document.addEventListener("DOMContentLoaded", function () {
  const school = new School();
  const subject = new Subject();

  //Show Create School Form
  const showCreateSchoolForm = document.getElementById("openSchoolForm");
  showCreateSchoolForm.addEventListener("click", function () {
    showCreateSchoolForm.style.display = "none";
    closeCreateSchoolForm.style.display = "inline";
    document.getElementById("schoolForm").style.display = "block";
  });

  //Create School Form Submission
  const createSchoolBtn = document.getElementById("createSchoolBtn");
  createSchoolBtn.addEventListener("click", function (event) {
    event.preventDefault();
    showCreateSchoolForm.style.display = "inline";
    closeCreateSchoolForm.style.display = "none";
    school.createSchool();
  });

  //Close School Form
  const closeCreateSchoolForm = document.getElementById("closeSchoolForm");
  closeCreateSchoolForm.addEventListener("click", function () {
    showCreateSchoolForm.style.display = "inline";
    closeCreateSchoolForm.style.display = "none";
    school.clearFormFields();
    document.getElementById("schoolForm").style.display = "none";
  });

  //Show Create Subject Form
  const showCreateSubjectForm = document.getElementById("openSubjectForm");
  showCreateSubjectForm.addEventListener("click", function () {
    showCreateSubjectForm.style.display = "none";
    closeCreateSubjectForm.style.display = "inline";
    document.getElementById("subjectForm").style.display = "block";
  });

  //Create Subject Form Submission
  const createSubjectBtn = document.getElementById("createSubjectBtn");
  createSubjectBtn.addEventListener("click", function (event) {
    event.preventDefault();
    subject.createSubject();
  });

  //Close Subject Form
  const closeCreateSubjectForm = document.getElementById("closeSubjectForm");
  closeCreateSubjectForm.addEventListener("click", function () {
    showCreateSubjectForm.style.display = "inline";
    closeCreateSubjectForm.style.display = "none";
    subject.clearFormFields();
    document.getElementById("subjectForm").style.display = "none";
  });


  //Show assignment
  const assignment = document.getElementById("assignment");
  assignment.addEventListener("click", function () {
    document.getElementById('pick-one').style.display = 'none';
    document.getElementById("instructions").style.display = "block";
    document.getElementById("solution").style.display = "none";
    solution.style.display = 'block';
    assignment.style.display = 'none';
  });

  //Show solution
  const solution = document.getElementById("solutionBtn");
  solution.addEventListener("click", function () {
    document.getElementById('pick-one').style.display = 'none';
    document.getElementById("instructions").style.display = "none";
    document.getElementById("solution").style.display = "block";
    solution.style.display = 'none';
    assignment.style.display = 'block';
  });
});




