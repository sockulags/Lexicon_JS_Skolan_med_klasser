class Student {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.subjects = [];
    }

    createStudent() {     
        const name = document.getElementById('studentName').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
    
        const newStudent = new Student(name, age, gender);  
        students.push(newStudent);
    
        console.log('New student:', newStudent);
    
        this.updateStudentList();
    
        this.clearFormFields();
      }
    
      updateStudentList() {     
        const studentList = document.getElementById('studentList');
        studentList.innerHTML = '';
    
        students.forEach((student, index) => {
          const listItem = document.createElement('li');
          listItem.textContent = `Student nr ${index + 1}: ${student.name}, ${student.age} years old`;
          studentList.appendChild(listItem);
        });
      }
    
      clearFormFields() {
        document.getElementById('studentName').value = '';
        document.getElementById('age').value = '';
        document.getElementById('gender').value = '';
      }
  }

  const students = [];

  export default Student;