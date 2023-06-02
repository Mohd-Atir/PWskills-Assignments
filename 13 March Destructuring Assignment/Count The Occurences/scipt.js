const wordCounter = (str) => {
    const words = str.split(" ");
    const myMap = new Map();

    for(const word of words){
        if(myMap.has(word)){
            myMap.set(word, myMap.get(word) + 1);
        }else{
            myMap.set(word, 1)
        }
    }
    return myMap
}
console.log(wordCounter("My name is Atir and I am learning web dev from PW Skills"));