function validateForm() {
    var firstName = document.forms["Registration"]["firstname"].value;
	var lastName = document.forms["Registration"]["lastname"].value;
	var egn = document.forms["Registration"]["egn"].value;
	var age = document.forms["Registration"]["age"].value;
	var address = document.forms["Registration"]["address"].value;
	var password = document.getElementById("pass").value;
	var passwordCon = document.getElementById("conPass").value;
	var i;
	var temp;
	
    if (firstName == null || firstName == "" || firstName.length > 15) {
        alert("First name must be filled out, 1 to 15 symbols allowed!");
        return false;
    }
	if (lastName == null || lastName == "" || lastName.length > 15) {
        alert("Last name must be filled out, 1 to 15 symbols allowed!");
        return false;
    }
	if (!egn.match(/^\d+$/) || egn.length != 10) {
        alert("EGN must be filled out with exactly 10 numbers!");
        return false;
    }
	if (!age.match(/^\d+$/) || age < 18 || age > 118) {
        alert("Age must be filled out, only numeric characters required between [18,118]!");
        return false;
    }
	if (address == null || address == "" || address.length > 100) {
        alert("Address must be filled out, length must be hundred characters or less!");
        return false;
    }
	if (password == null || password == "" || password.length > 18) {
        alert("Password must be filled out, up to 18 character are allowed!");
        return false;
    }else{
		for(i = 0; i < password.length; i++){
			temp = password.charCodeAt(i);
			if((temp > 47 && temp < 58) || (temp > 64 && temp < 91) || (temp > 96 && temp < 123)){
				continue;			
			}else{
				alert("Only latin letters and digits allowed in field Password!");
				return false;
			}
		}
	}
	if (passwordCon == null || passwordCon == "" || passwordCon.length > 18) {
        alert("Confirm Password must be filled out, up to 18 character are allowed!");
        return false;
    }else{
		for(i = 0; i < passwordCon.length; i++){
			temp = passwordCon.charCodeAt(i);
			if((temp > 47 && temp < 58) || (temp > 64 && temp < 91) || (temp > 96 && temp < 123)){
				continue;			
			}else{
				alert("Only latin letters and digits allowed in field Confirm Password!");
				return false;
			}
		}
	}
}
