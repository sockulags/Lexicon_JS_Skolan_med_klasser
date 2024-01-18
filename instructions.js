const instructions = `The assignment is to create a school system using JavaScript classes to practice object-oriented programming. Here's a summary of the tasks:

1. **Create a School class:**
   - Instanciate variables: \`name\`, \`address\`, \`zipcode\`, \`city\`, \`students\` (empty array), and \`teachers\` (empty array).

   \`\`\`javascript
   class School {
     constructor(name) {
       this.name = name;
       this.students = [];
       this.teachers = [];
       // other properties...
     }
   }
   \`\`\`

2. **Create a Subject class:**
   - Instanciate variables: \`name\`, \`students\` (empty array), and \`teacher\` (empty object).

   \`\`\`javascript
   class Subject {
     // code...
   }
   \`\`\`

3. **Create a Student class:**
   - Instanciate variables: \`name\`, \`age\`, \`gender\`, and \`subjects\` (empty array).

   \`\`\`javascript
   class Student {
     // code...
   }
   \`\`\`

4. **Create a Teacher class:**
   - Instanciate variables: \`name\` and \`subjects\` (empty array).

   \`\`\`javascript
   class Teacher {
     // code...
   }
   \`\`\`

5. **Create instances:**
   - Create instances of \`School\`, three instances of \`Subject\`, five instances of \`Student\`, and two instances of \`Teacher\`. Be creative with variable names.

6. **Add a subject to a teacher's array:**
   - Use \`push()\` or \`unshift()\` to add a subject to a teacher's array. Print both the teacher and the subject in the console.

7. **Add a student to a subject's student array:**
   - Solve the issue by adding a reference on both sides (circular reference). Create a function \`addSubjectToTeacher\` to establish this connection.

8. **Create and explain methods:**
   - Create and place methods \`addTeacher\`, \`enlistToSubject\`, \`addStudent\`, and \`addSubject\` in the appropriate classes.

9. **Explore and test methods:**
   - Play around with the methods in the console, adding and removing instances.

10. **Additional methods:**
    - Create methods like \`quitSubject\`, \`removeTeacher\`, \`relegateStudent\`, and \`fireTeacher\`. Consider handling connections between classes properly.

11. **Logical connections:**
    - Implement logic at the end of the script file to connect students to the school, subjects to students, and teachers to subjects.

12. **Display functions:**
    - Create a standalone function \`displayAllStudents\` to loop through all students in the school and print their details.

13. **More display functions:**
    - Create functions like \`displayAllSubjectsOfStudent\`, \`displayAllStudentsEnlistedToSubject\`, and \`displayAllTeachers\`.

14. **Introduce a Grade class:**
    - Add a new class for grades with appropriate variables and methods. Consider relationships with other classes.

15. **Experiment and inspect:**
    - Play around with the new class and its methods in the console.

This assignment aims to reinforce understanding of class syntax, relationships between classes, and the principles of object-oriented programming in JavaScript.
`;

export default instructions;