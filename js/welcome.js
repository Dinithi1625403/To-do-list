// Function to show the sign-up form
function showSignUpForm() {
    
    document.getElementById("signUpFormModal").style.display = "block";
    document.getElementById("loginFormModal").style.display = "none";
}

// Function to hide the sign-up form
function hideSignUpForm() {
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
   // Dini1625403@
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
    alert("Sign up Successfully")
    
    window.open("home.html");

    // If there is no error, then show the success modal
   
}
    

// Function to hide the sign-up success modal


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
    const password = document.getElementById("Lpassword").value;
    const email = document.getElementById("Lemail").value;

    if (password === "" || email === "") {
        alert("Please fill in all fields!");
        showLoginForm();
        return;
    }

    alert("Login successful!");
    window.open("home.html")
}


/*
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    window.location.href = "home.html";
  }
  



  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{1142467833710729}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));



   
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});


/*{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}*/

/*

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
    window.open("home.html");
  }
*/










