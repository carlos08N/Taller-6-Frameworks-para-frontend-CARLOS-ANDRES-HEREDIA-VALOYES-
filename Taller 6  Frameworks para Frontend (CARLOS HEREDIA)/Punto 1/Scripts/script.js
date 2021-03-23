function suma(){
	let n1 = document.getElementById("n1").value;
	let n2 = document.getElementById("n2").value;
	if(n1 == "" || n2 == ""){
		alert("Debe introducir dos valores numericos");	
	}else{
		if(!/^([0-9])*$/.test(n1) || !/^([0-9])*$/.test(n2)){
			alert("Los valores ingresados deben ser numericos");
		}else{
			document.getElementById("resul").innerHTML = "["+ (Number(n1)+Number(n2)) +"]";
		}
	}
}
function resta(){
	let n1 = document.getElementById("n1").value;
	let n2 = document.getElementById("n2").value;
	if(n1 == "" || n2 == ""){
		alert("Debe introducir dos valores numericos");	
	}else{
		if(!/^([0-9])*$/.test(n1) || !/^([0-9])*$/.test(n2)){
			alert("Los valores ingresados deben ser numericos");
		}else{
			document.getElementById("resul").innerHTML = "["+ (Number(n1)-Number(n2)) +"]";
		}
	}
}
function multiplicar(){
	let n1 = document.getElementById("n1").value;
	let n2 = document.getElementById("n2").value;
	if(n1 == "" || n2 == ""){
		alert("Debe introducir dos valores numericos");	
	}else{
		if(!/^([0-9])*$/.test(n1) || !/^([0-9])*$/.test(n2)){
			alert("Los valores ingresados deben ser numericos");
		}else{
			document.getElementById("resul").innerHTML = "["+ (Number(n1)*Number(n2)) +"]";
		}
	}
}
function dividir(){
	let n1 = document.getElementById("n1").value;
	let n2 = document.getElementById("n2").value;
	if(n1 == "" || n2 == ""){
		alert("Debe introducir dos valores numericos");	
	}else{
		if(!/^([0-9])*$/.test(n1) || !/^([0-9])*$/.test(n2)){
			alert("Los valores ingresados deben ser numericos");
		}else{
			document.getElementById("resul").innerHTML = "["+ (Number(n1)/Number(n2)) +"]";
		}
	}
}
function potenciar(){
	let n1 = document.getElementById("n1").value;
	let n2 = document.getElementById("n2").value;
	if(n1 == "" || n2 == ""){
		alert("Debe introducir dos valores numericos");	
	}else{
		if(!/^([0-9])*$/.test(n1) || !/^([0-9])*$/.test(n2)){
			alert("Los valores ingresados deben ser numericos");
		}else{
			document.getElementById("resul").innerHTML = "["+ (Math.pow(Number(n1), Number(n2))) +"]";
		}
	}
}