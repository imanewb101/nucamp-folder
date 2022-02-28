class Student{
    constructor(name,email,community){
        this.name = name; 
        this.email = email; 
        this.community = community; 
    }
}

class Bootcamp{
    constructor(name,level,students = []){
        this.name = name; 
        this.level = level; 
        this.students = students; 
    }
    registerStudent(student){
        //loops into the students array to filter and check if there are repeating occurences that equal to the student passed into the method, and checks the email portion of student using student.email, loops to the full length of the array 
        //if the statement is true, print its already registered 
        //if not, add the student object to the students array, then print out the email passed with the current name of the bootcamp that was passed in, either fullstack or web dev fundamentals 
        //returns the students array
        if (this.students.filter(registeredStudent => registeredStudent.email === student.email).length) {
            console.log(`This student is already registered!`); 
        } else {
            this.students.push(student); 
            console.log(`Registering ${student.email} to the bootcamp ${this.name}`); 
        }
        return this.students; 
    }
}