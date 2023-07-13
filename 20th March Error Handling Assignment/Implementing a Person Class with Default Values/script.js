// Implementing a Person Class with Default Values

class Person {
  constructor(name = "unknown", age = 0) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const person1 = new Person("Shoaib", 22);
person1.getDetails();

const person2 = new Person();
person2.getDetails();
