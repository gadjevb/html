function validator() {
	var value = document.getElementById("frac").value;
	var array = value.split(/[.,]+/);
	console.log(array);
	if(array.length == 2){
		var left = array[0];
		var right = array[1];
		if(left.length > 0 && left.length < 11 && right.length > 0 && right.length < 6) {
			alert("Valid!");
		}else{
			alert("Not valid!");
		}
	}else if(array.length == 1){
		var left = array[0];
		if(left.length > 0 && left.length < 11)	{
			alert("Valid!");
		}else{
			alert("Not valid!");
		}
	}else{
		alert("Not valid!");
	}
}
