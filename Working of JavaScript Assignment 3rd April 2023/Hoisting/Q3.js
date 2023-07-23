function sum (num1, num2){
    console.log(hoistedVariable); // undefined
    var hoistedVariable = num1 + num2; // sum of num1 and num2
    return hoistedVariable;
};

console.log(sum(5, 7))