import School from './Classes/School.js'
import instructions from './instructions.js';



document.addEventListener('DOMContentLoaded', function () {
    const school = new School();
    
    //Show Create School Form
    const showCreateSchoolForm = document.getElementById('openSchoolForm');
    showCreateSchoolForm.addEventListener('click', function () {
        showCreateSchoolForm.style.display = 'none';
        closeCreateSchoolForm.style.display = 'inline';
        document.getElementById('schoolForm').style.display = 'block';
    });

    //Create School Form Submission
    const createSchoolBtn = document.getElementById('createSchoolBtn');
    createSchoolBtn.addEventListener('click', function () {
      school.createSchool();
    });

    //Close Form
    const closeCreateSchoolForm = document.getElementById('closeSchoolForm');
    closeCreateSchoolForm.addEventListener('click', function () {
        showCreateSchoolForm.style.display = 'inline';
        closeCreateSchoolForm.style.display = 'none';
        school.clearFormFields();
        document.getElementById('schoolForm').style.display = 'none';
  
    })
});

class Student{
    constructor(name, age, gender){
        this.name=name;
        this.age = age;
        this.gender=gender;
        this.subjects = [];
    }
}

class Teacher{
    constructor(name){
        this.name= name;
        this.subjects = [];
    }
}

class Subject{
    constructor(name){
        this.name=name;
        this.teacher = {};
    }
}
