const person = {
    name: "Mithun",
    age: 21,
    
    address: {
        street: "B8, Block B, Industrial Area",
        city: "Sector 62",
        state: "Noida"
    }
}

function userDetails (obj) {
    const{
        name,
        address: {street},
    } = obj
    return {name, street}
}

console.log(userDetails(person));