class Teacher {
    constructor(name) {
      this.name = name;
      this.subjects = [];
    }

    createTeacher() {     
        const name = document.getElementById('teacherName').value;    
        const newTeacher = new Teacher(name); 
        teachers.push(newTeacher);
    
        console.log('New Teacher:', newTeacher);
    
        this.updateTeacherList();
    
        this.clearFormFields();
      }
      updateTeacherList() {     
        const teacherList = document.getElementById('teacherList');
        teacherList.innerHTML = '';
    
        teachers.forEach((teacher, index) => {
          const listItem = document.createElement('li');
          listItem.textContent = `Teacher nr ${index + 1}: ${teacher.name}`;
          teacherList.appendChild(listItem);
        });
      }

      
    clearFormFields() {
        document.getElementById('teacherName').value = '';
      }
  }

  const teachers = [];

  export default Teacher;