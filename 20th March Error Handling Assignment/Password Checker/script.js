class User{
    constructor (userName, password){
        this.userName = userName
        this._password = password
    }

    get password(){
        return this._password.replace(/./g, "*");
    }

    set password(newPassword){
        if(newPassword.length >= 8 && /[0-9]/.test (newPassword) && /[A-Z]/.test (newPassword)){
            this._password = newPassword
        }
        else{
            console.log("Error: Password must be atleast 8 charactors long and contain one number and one uppercase letter");
        }
    }
}

const user = new User("Shoaib", "Password123");
console.log(user.password); // ***********

user.password = "Pass@123";
console.log(user.password); // ********

user.password = "Pass"; // Error: Password must be atleast 8 charactors long and contain one number and one uppercase letter
user.password = "Password"; // Error: Password must be atleast 8 charactors long and contain one number and one uppercase letter
user.password = "password123"; // Error: Password must be atleast 8 charactors long and contain one number and one uppercase letter