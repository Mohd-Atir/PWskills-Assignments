const decrement = document.getElementById("decrement");
const value = document.getElementById("value");
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");

decrement.addEventListener("click", () =>{
    const displayValue = Number(value.innerText);
    if(displayValue > 0){
        value.innerText = displayValue - 1;
    }
    else{
        alert("Negative Number not allowed")
    }
});

increment.addEventListener("click", () =>{
    const displayValue = Number(value.innerText);
    value.innerText = displayValue +1;
});

reset.addEventListener("click", () =>{
    value.innerText = 0;
});
