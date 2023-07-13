class Employee {
    name = "Shoaib"
    position = "Product manager"
    salary = 80000

    getSalary(){
        console.log(`${this.salary}`);
    }
}

const result = new Employee();
result.getSalary();