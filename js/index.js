let emailEl = document.getElementById("floatingInput");
let passwordEl = document.getElementById("floatingPassword");
let passShow = document.getElementById("passShow");

window.onload = () => {
    if((localStorage.getItem("email") != null) && localStorage.getItem("pass") != null){
        emailEl.value = JSON.parse(localStorage.getItem("email"));
        passwordEl.value = JSON.parse(localStorage.getItem("pass"));
        login()
    } 
}

function login(){
    let user = {
        email: emailEl.value,
        password: passwordEl.value
    }
    localStorage.setItem("email" , JSON.stringify(user.email));
    localStorage.setItem("pass" , JSON.stringify(user.password));
}

passShow.addEventListener("click" , () => {
    if(passwordEl.type === "password") {
        passwordEl.type = "text";
        passShow.setAttribute( "class" ,"fa-regular fa-eye");
    }else {
        passwordEl.type = "password";
        passShow.setAttribute( "class" ,"fa-regular fa-eye-slash");
    }
})