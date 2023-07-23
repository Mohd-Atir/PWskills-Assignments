function dblWithCallback (num, fn){
    num.forEach(el => {
        console.log(el * 2);
    });

    fn();
}

const myArray = [1, 2, 3, 4, 5];
dblWithCallback(myArray, function(){
    console.log("Element dobuble with callback");
})