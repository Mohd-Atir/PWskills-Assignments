function getperson (persson){
    try{
        if(typeof persson !== 'object' || !persson.name || !persson.age){
            throw new Error("Invalid parameter type")
        }
        return `Name: ${person.name} Age: ${person.age}`
    }catch (error){
        return error.message
    }
}

const person = {name: "Shoaib", age: 22};
console.log(getperson(person));

const person2 = {name: "Shoaib"};
console.log(getperson(person2));