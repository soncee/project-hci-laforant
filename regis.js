function validateCredentials() {

    var username = document.getElementById("name");
    var usernameLen = document.getElementById("name").value;

    var email = document.getElementById("email").value;

    var pass = document.getElementById("password");
    var passwordValue = document.getElementById("password").value;
    var passwordConfirmValue = document.getElementById("password-confirmation").value;

    var phone = document.getElementById("phone").value;

    var dob = document.getElementById("dob");

    var country = document.getElementById("country").value;


    var agree= document.getElementById("agree");



    if (username.value == "") {
        alert('Username is empty, please fill the username.');
    } else if (usernameLen.length < 2) {
        alert('Username must contain atleast 2 characters.');
    }

    if (email.includes('@') && email.includes('.co')) {

    } else {
        alert('Email is invalid');
    }

    if (pass.value == "") {
        alert('Password is empty, please fill the password');
    } else if (passwordValue != passwordConfirmValue) {
        alert('Please confirm your password!')
    }

    if(phone.length<10||phone.length>12){
        alert('wrong phone number, please input a valid phone number');
    }

    if (dob.value == "") {
        alert("Fill with (DD/MM/YYYY).");
    }

    if (country.length < 1) {
        alert('Please choose your region.');
    }

    if(!agree.checked){
        alert('please agree of terms and conditions');
    }


}