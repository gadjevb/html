var operator = true;

function appendDigit(parameter) {
	var val = document.getElementById("present").value;
	val = val + parameter;
	document.getElementById("present").value = val;
	operator = true;
}

function appendOperator(parameter) {
	if(operator){
		var val = document.getElementById("present").value;
		if(val.length == 0 && parameter != '-'){
			alert("Equation must not start with operator!");		
		}else{
			val = val + parameter;
			document.getElementById("present").value = val;
			operator = false;
		}
	}else{
		alert("You are not allowed to have two consecutive operators!");
	}
}

function clr() {
	operator = true;
	document.getElementById("present").value = "";
}

function equate() {
	if(operator){
		var val = document.getElementById("present").value;
		var answer = eval(val);
		document.getElementById("present").value = answer;
	}else{
		alert("The equation must end with digit, not operator!");
	}
}

function removeLast() {
	var val = document.getElementById("present").value;
	val = val.substring(0,val.length-1);
	document.getElementById("present").value = val;
	var last = val.substring(val.length-1,val.length);
	if(last == '+' || last == '-' || last == '/' || last == '*'){
		operator = false;	
	}else{
		operator = true;	
	}
}
