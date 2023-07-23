{
    // Before declaration
    
    console.log(one); // undefined
    console.log(two); // ReferenceError
    console.log(three); // ReferenceError
    
    var one = "Using var"
    let two = "Using let"
    const three = "Using const"
    
    // After declaration

    console.log(one);
    console.log(two);
    console.log(three);
}