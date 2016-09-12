function validateName() {
    var name = document.forms["Registration"]["name"].value;
	if(name.length < 1){
		alert("You must write your name!");
	}
}
