// Function to show the sign-up form
function showSignUpForm() {
    showSuccessModal();
    document.getElementById("signUpFormModal").style.display = "block";
    document.getElementById("loginFormModal").style.display = "none";
}

// Function to hide the sign-up form
function hideSignUpForm() {
    document.getElementById("signUpFormModal").style.display = "none";
}

// Function to show the sign-up success modal
function showSuccessModal() {
    // Add your code here to handle the success modal
    document.getElementById("signUpSuccessModal").style.display = "block";
    document.getElementById("signUpFormModal").style.display = "none";
}

// Function to handle the sign-up process
function signUp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Write the code here to handle the error condition
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields!");
        showSignUpForm();
        return;
    }
    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        showSignUpForm();
        return;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        showSignUpForm();
        return;
    }
    if(!password.match(/[a-z]/g)){
        alert("Password must contain at least one lowercase letter!");
        showSignUpForm();
        return;
    }
    if(!password.match(/[A-Z]/g)){
        alert("Password must contain at least one uppercase letter!");
        showSignUpForm();
        return;
    }
    if(!password.match(/[0-9]/g)){
        alert("Password must contain at least one number!");
        showSignUpForm();
        return;
    }
    if(!password.match(/[^a-zA-Z\d]/g)){
        alert("Password must contain at least one special character!");
        showSignUpForm();
        return;
    }
    
    if (!email.includes("@") || !email.includes(".") || email.includes(" ")) {
        alert("Invalid email address!");
        showSignUpForm();
        return;
    }

    // If there is no error, then show the success modal
showSuccessModal();
}
    

// Function to hide the sign-up success modal
function hideSuccessModal() {
    document.getElementById("signUpSuccessModal").style.display = "none";
}

// Function to show the login form
function showLoginForm() {
    document.getElementById("signUpFormModal").style.display = "none";
    document.getElementById("loginFormModal").style.display = "block";
}

// Function to hide the login form
function hideLoginForm() {
    document.getElementById("signUpFormModal").style.display = "none";
    document.getElementById("loginFormModal").style.display = "none";
}

// Function to handle the login process
function login() {
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    if (password === "" || email === "") {
        alert("Please fill in all fields!");
        return;
    }

    alert("Login successful!");
    window.location.href = "home.html";
}
