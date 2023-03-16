function checkPass(){
    let password = document.getElementById("new").value;
    let cnfPassword = document.getElementById("confirm").value;
    console.log(password,cnfPassword);
    let message = document.getElementById("message");

    if(password.length != 0 && cnfPassword.length != 0){
        if(password == cnfPassword){
            message.textContent = "Password matched";
            message.style.backgroundColor = "#fff";
            message.style.color = "green";
            message.style.borderRadius = "25px";
            message.style.fontSize = "10px";
            message.style.padding = "5px"
        }
        else{
            message.textContent = "Password didn't match";
            message.style.backgroundColor = "#fff";
            message.style.color = "red";
            message.style.borderRadius = "25px";
            message.style.fontSize = "10px";
            message.style.padding = "5px"
        }
    }
    else{
        alert("Password can't be empty");
        message.textContent = "";
    }
}