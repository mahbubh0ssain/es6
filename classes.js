// start with keyword class
// class name start with upperCase (Student) it's convention
// use constructor keyword as function name 😁
// you can use method inside the class that means a function
// call the class name within a variable with new keyword

class Student {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  courseRunning(batch) {
    console.log(
      `${this.name} is doing a course from ${this.year} at Programming Hero batch ${batch}`
    );
  }
}

const mySelf = new Student("Mahbub Hossain", 2022);
mySelf.courseRunning("6");

console.log(mySelf);
