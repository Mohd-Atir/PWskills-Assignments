function ageInDays (personObj, callbackFn){
    const fullName = `${personObj.firstName} ${personObj.lastName}`;
    const ageInDays = `${personObj.age * 365}`;
    callbackFn(fullName, ageInDays);
}

function logResult(fullName, ageInDays){
    console.log(`The person's full name is: ${fullName} and their age in days is: ${ageInDays}`);
}


const personObj = {
    firstName: "Shoaib",
    lastName: "Alam",
    age: 20
}

ageInDays(personObj, logResult);