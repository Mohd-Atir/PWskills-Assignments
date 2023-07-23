function manipulateString (str){
    return function logString(){
        console.log(`The manipulatedString is: ${str.toUpperCase()}`);
    }
}

const result = manipulateString("Shoaib");
result();