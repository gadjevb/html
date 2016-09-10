
	function validator(){
		var firstName = document.forms["Registration"]["firstname"].value;
		var lastName = document.forms["Registration"]["lastname"].value;
		var egn = document.forms["Registration"]["egn"].value;
		var age = document.forms["Registration"]["age"].value;
		var address = document.forms["Registration"]["address"].value;
		var password = document.forms["Registration"]["password"].value;
		var confirmPassword = document.forms["Registration"]["confirmPassword"].value;
		
		if((firstName == null || firstName == "") || (lastName == null || lastName == "")|| (isNaN(egn)) || (isNaN(age)) || (address == null || address = "") || (password == null || password == "") ||(confirmPassword == null || confirmPassword == "")){
			alert("One or more of the fileds are empty, please enter data!");
			return false;		
		}
	}
