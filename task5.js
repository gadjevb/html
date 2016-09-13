function validateName(name) {
	var value = document.forms["Registration"][name].value;

	if (value.length < 1 || value.length > 15) {
        alert(name + " must be filled out, 1 to 15 symbols allowed!");
    }
}

function validateEGN(egn) {
	var value = document.forms["Registration"][egn].value;

	if (!value.match(/^\d{10}$/)) {
        alert("EGN must be filled out with exactly 10 numbers!");
    }
}

function validateAge(age) {
	var value = document.forms["Registration"]["age"].value;

	if (!value.match(/^\d+$/) || value < 18 || value > 118) {
        alert("Age must be filled out, only numeric characters required between [18,118]!");
    }
}

function validateAddress(address) {
	var value = document.forms["Registration"][address].value;

	if (value.length < 1 || value.length > 100) {
        alert("Address must be filled out, length must be hundred characters or less!");
    }
}

function validatePassword(name, password) {
	var value = document.getElementById(password).value;

	if (value.length < 1 || value.length > 18) {
        alert(name + " must be filled out, up to 18 character are allowed!");
    }else{
		if(!value.match(/^[a-zA-Z0-9]+$/)){
			alert("Only latin letters and digits are allowed!")
		}
	}
}
