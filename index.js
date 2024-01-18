import School from "./Classes/School.js";
import Student from "./Classes/Student.js";
import Subject from "./Classes/Subject.js";
import Teacher from "./Classes/Teacher.js";

document.addEventListener("DOMContentLoaded", function () {
  const school = new School();
  const subject = new Subject();
  const student = new Student();
  const teacher = new Teacher();

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
    document.getElementById("schoolForm").style.display = "none";
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
    showCreateSubjectForm.style.display = "inline";
    closeCreateSubjectForm.style.display = "none";
    document.getElementById("subjectForm").style.display = "none"; 
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

  //Show Create Student Form
  const showCreateStudentForm = document.getElementById("openStudentForm");
  showCreateStudentForm.addEventListener("click", function () {
    showCreateStudentForm.style.display = "none";
    closeCreateStudentForm.style.display = "inline";
    document.getElementById("studentForm").style.display = "block";
  });

  //Create Student Form Submission
  const createStudentBtn = document.getElementById("createStudentBtn");
  createStudentBtn.addEventListener("click", function (event) {
    event.preventDefault();
    showCreateStudentForm.style.display = "inline";
    closeCreateStudentForm.style.display = "none";
    document.getElementById("studentForm").style.display = "none";
    student.createStudent();
  });

  //Close Student Form
  const closeCreateStudentForm = document.getElementById("closeStudentForm");
  closeCreateStudentForm.addEventListener("click", function () {
    showCreateStudentForm.style.display = "inline";
    closeCreateStudentForm.style.display = "none";
    student.clearFormFields();
    document.getElementById("studentForm").style.display = "none";
  });

  //Show Create Teacher Form
  const showCreateTeacherForm = document.getElementById("openTeacherForm");
  showCreateTeacherForm.addEventListener("click", function () {
    showCreateTeacherForm.style.display = "none";
    closeCreateTeacherForm.style.display = "inline";
    document.getElementById("teacherForm").style.display = "block";
  });

  //Create Teacher Form Submission
  const createTeacherBtn = document.getElementById("createTeacherBtn");
  createTeacherBtn.addEventListener("click", function (event) {
    event.preventDefault();
    showCreateTeacherForm.style.display = "inline";
    closeCreateTeacherForm.style.display = "none";
    document.getElementById("teacherForm").style.display = "none";
    teacher.createTeacher();
  });

  //Close Teacher Form
  const closeCreateTeacherForm = document.getElementById("closeTeacherForm");
  closeCreateTeacherForm.addEventListener("click", function () {
    showCreateTeacherForm.style.display = "inline";
    closeCreateTeacherForm.style.display = "none";
    student.clearFormFields();
    document.getElementById("teacherForm").style.display = "none";
  });

  //Show assignment
  const assignment = document.getElementById("assignment");
  assignment.addEventListener("click", function () {
    document.getElementById("pick-one").style.display = "none";
    document.getElementById("instructions").style.display = "block";
    document.getElementById("solution").style.display = "none";
    solution.style.display = "block";
    assignment.style.display = "none";
  });

  //Show solution
  const solution = document.getElementById("solutionBtn");
  solution.addEventListener("click", function () {
    document.getElementById("pick-one").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("solution").style.display = "block";
    solution.style.display = "none";
    assignment.style.display = "block";
  });
});
