const btnElement = document.getElementById("onKeyPress");
btnElement.addEventListener("keypress", press);
    function press(){
        alert("You just pressed key on me");
    }