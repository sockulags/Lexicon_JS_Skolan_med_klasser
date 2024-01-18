class School {
    constructor(name, zipcode, city) {
      this.name = name;
      this.zipcode = zipcode;
      this.city = city;
      this.students = [];
      this.teachers = [];
      this.subjects = [];
    }
  
    createSchool() {     
      const name = document.getElementById('schoolName').value;
      const zipcode = document.getElementById('zipcode').value;
      const city = document.getElementById('city').value;
  
      const newSchool = new School(name, zipcode, city);  
      this.schools.push(newSchool);
  
      console.log('New School:', newSchool);
  
      this.updateSchoolList();
  
      this.clearFormFields();
    }
  
    updateSchoolList() {     
      const schoolList = document.getElementById('schoolList');
      schoolList.innerHTML = '';
  
      this.schools.forEach((school, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `School ${index + 1}: ${school.name}, ${school.city}`;
        schoolList.appendChild(listItem);
      });
    }
  
    clearFormFields() {
      document.getElementById('schoolName').value = '';
      document.getElementById('zipcode').value = '';
      document.getElementById('city').value = '';
    }
  }
  
export default School;
  