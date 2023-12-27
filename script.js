// Complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(value) {
    this._age = value;
  }
}

class Student extends Person {
  // Method for the Student class
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  // Method for the Teacher class
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
