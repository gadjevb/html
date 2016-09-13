function validator() {
	var fraction = document.getElementById("frac").value;
	if(fraction.match(/\b[0-9]{1,10}[.,]{1}[0-9]{1,5}\b/g) || fraction.match(/^[0-9]{1,10}$/g)) {
		alert("Valid");
	}else{
		alert("Not valid");
	}
}
