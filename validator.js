function validator() {
	var fraction = document.getElementById("frac").value;
	var array = fraction.split(/[.,]+/);
	if(array.length == 2){
		var left = array[0];
		var right = array[1];
		if(left.length > 0 && left.length < 11 && right.length > 0 && right.length < 6 && left.match(/^\d+$/) && right.match(/^\d+$/)) {
			alert("Valid!");
		}else{
			alert("Not valid!");
		}
	}else if(array.length == 1){
		var left = array[0];
		if(left.length > 0 && left.length < 11 && left.match(/^\d+$/))	{
			alert("Valid!");
		}else{
			alert("Not valid!");
		}
	}else{
		alert("Not valid!");
	}
}
