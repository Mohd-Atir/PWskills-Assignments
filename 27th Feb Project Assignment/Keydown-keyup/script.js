const btnElement = document.getElementById("keyDownKeyUp");
btnElement.addEventListener("keydown", press);
    function press(){
        alert("You pressed keydown/up on me");
    }