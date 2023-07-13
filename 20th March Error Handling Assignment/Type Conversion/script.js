// Converting string to number by error
function convertToNumber (str){
    try{
        const num = Number(str);
        if(Number.isNaN(num)){
            throw new Error("Invalid Number");
        }
        return num
    }catch (err){
        return "Invalid Error"
    }
}
console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));