class Subject {
    constructor(name) {
      this.name = name;
      this.teacher = {};
    }

    createSubject() {     
        const name = document.getElementById('subjectName').value;    
        const newSubject = new Subject(name); 
        subjects.push(newSubject);
    
        console.log('New Subject:', newSubject);
    
        this.updateSubjectList();
    
        this.clearFormFields();
      }
      updateSubjectList() {     
        const subjectList = document.getElementById('subjectList');
        subjectList.innerHTML = '';
    
        subjects.forEach((subject, index) => {
          const listItem = document.createElement('li');
          listItem.textContent = `Subject ${index + 1}: ${subject.name}`;
          subjectList.appendChild(listItem);
        });
      }

      
    clearFormFields() {
        document.getElementById('subjectName').value = '';
      }
  }

  const subjects = [];
  
  export default Subject;