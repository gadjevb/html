function validateForm() {
    var firstName = document.forms["Registration"]["firstname"].value;
	var lastName = document.forms["Registration"]["lastname"].value;
	var egn = document.forms["Registration"]["egn"].value;
	var age = document.forms["Registration"]["age"].value;
	var address = document.forms["Registration"]["address"].value;
	var password = document.getElementById("pass").value;
	var passwordCon = document.getElementById("conPass").value;
	
    if (firstName == null || firstName == "") {
        alert("First name must be filled out!");
        return false;
    }
	if (lastName == null || lastName == "") {
        alert("Last name must be filled out!");
        return false;
    }
	if (!egn.match(/^\d+$/)) {
        alert("EGN must be filled out, only numeric characters required!");
        return false;
    }
	if (!age.match(/^\d+$/)) {
        alert("Age must be filled out, only numeric characters required!");
        return false;
    }
	if (address == null || address == "") {
        alert("Address must be filled out!");
        return false;
    }
	if (password == null || password == "") {
        alert("Password must be filled out!");
        return false;
    }
	if (passwordCon == null || passwordCon == "") {
        alert("Confirm password must be filled out!");
        return false;
    }
}
