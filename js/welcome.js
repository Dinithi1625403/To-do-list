function showSignUpForm() {
    document.getElementById("signUpFormModal").style.display = "block";
    
}

function hideSignUpForm() {
    document.getElementById("signUpFormModal").style.display = "none";
   
}
function signUp() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    if (name == "" || email == "" || password == "" || confirmPassword == "") {
        alert("Please fill in all fields!");
        return;
    }
    if (password != confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    
    if(password.length < 8){
        alert("Password must be at least 8 characters long!");
        return;
    }
    if(password.search(/[a-z]/) < 0){
        alert("Password must contain at least one lowercase letter!");
        return;
    }
    if(password.search(/[A-Z]/) < 0){
        alert("Password must contain at least one uppercase letter!");
        return;
    }
    if(password.search(/[0-9]/) < 0){
        alert("Password must contain at least one digit!");
        return;
    }
    if(password.search(/[!@#$%^&*]/) < 0){
        alert("Password must contain at least one special character!");
        return;
    }
    if(email.search(/@/) < 0){
        alert("Invalid email address! Please include '@' symbol.");
        return;
    }
    if(email.search(/\./) < 0){
        alert("Invalid email address! Please include '.' symbol.");
        return;
    }
    if(terms&conditions.checked == false){
        alert("Please agree to the terms and conditions!");
        return;
    }

    else {
        alert("Sign up successful!");
        window.location.href = "home.html";
    }
    
}
function showLoginForm() {
    document.getElementById("signUpFormModal").style.display = "none";
    document.getElementById("loginFormModal").style.display = "block";
    
    
}
function hideLoginForm() {
    document.getElementById("signUpFormModal").style.display = "none";
    document.getElementById("loginFormModal").style.display = "none";
  
}
function login(){
    if(password == "" || email == ""){
        alert("Please fill in all fields!");
        return;
    }
    /*if(email.search(/@/) < 0){
        alert("Invalid email address! Please include '@' symbol.");
        return;
    }
    if(email.search(/\./) < 0){
        alert("Invalid email address! Please include '.' symbol.");
        return;
    }*/

    else {
        alert("Login successful!");
        window.location.href = "home.html";
    }
}

