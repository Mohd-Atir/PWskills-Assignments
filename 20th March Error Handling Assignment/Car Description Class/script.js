// Getting car description by creating "class" using "constructor" and also without "constructor"

class myCar {
  // constructor(c, m, y){
  //     this.company = c
  //     this.model = m
  //     this.year = y
  // }

  company = "Skoda";
  model = "Rapid";
  year = 2023;

  getDescription() {
    // console.log(this);
    console.log(`This is a ${this.company} ${this.model} ${this.year}`); // Output: This is a Skoda Rapid 2023
  }
}

const result = new myCar("Skoda", "Rapid", 2023);
result.getDescription();