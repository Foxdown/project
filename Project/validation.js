function CheckAll() {
    var checkev = 0;
    var focused = false;
    var inputTextForUsername = document.getElementById("userName").value;
    var inputTextForPassword = document.getElementById("password").value;
    var inputTextForPasswordVerify = document.getElementById("passwordVerify").value;
    var inputTextForFirstName = document.getElementById("firstName").value;
    var inputTextForLastName = document.getElementById("lastName").value;

    if (/\d/.test(inputTextForUsername) || isNaN(inputTextForUsername)) {
        document.getElementById('userNameError').innerHTML = "";
        checkev++;
    }
    else {
        document.getElementById('userNameError').innerHTML = "Your Username Must contain only letters or numbers";
        checkev = 0;
        focused = true;
        document.getElementById("userName").focus();
    }

    if (inputTextForPassword.length >= 8) {
        document.getElementById('passwordError').innerHTML = "";
        checkev++;
    }
    else {
        document.getElementById('passwordError').innerHTML = "Your Password Must be atleast 8 characters long and both passwords must match";
        checkev = 0;
        if (!focused) {
            focused = true;
            document.getElementById("password").focus();
        }
    }
    if (/\d/.test(inputTextForPasswordVerify) || isNaN(inputTextForPasswordVerify)) {
        document.getElementById('passwordVerify').innerHTML = "";
        checkev++;
    }
    else {
        document.getElementById('passwordVerify').innerHTML = "Your passwords must match";
        checkev = 0;
        focused = true;
        document.getElementById("passwordVerify").focus();
    }if (/\d/.test(inputTextForFirstName) || isNaN(inputTextForFirstName)) {
        document.getElementById('firstName').innerHTML = "";
        checkev++;
    }
    else {
        document.getElementById('firstName').innerHTML = "Your Username Must contain only letters or numbers";
        checkev = 0;
        focused = true;
        document.getElementById("firstName").focus();
    }if (/\d/.test(inputTextForLastName) || isNaN(inputTextForLastName)) {
        document.getElementById('userNameError').innerHTML = "";
        checkev++;
    }
    else {
        document.getElementById('lastName').innerHTML = "Your Username Must contain only letters or numbers";
        checkev = 0;
        focused = true;
        document.getElementById("lastName").focus();
    }

}

