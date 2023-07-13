function numberChecker (numbers){
    return function(number){
        return numbers.includes(number);
    }
}

const arr = [1, 2, 3, 4, 5];
const numCheck = numberChecker(arr);

console.log(numCheck(3));
console.log(numCheck(6));