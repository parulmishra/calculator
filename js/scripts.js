function start(){
var num1 = parseInt(prompt("enter first number"));
var num2 = parseInt(prompt("enter second number"));
var operation = prompt("what operation you want +, -, *, /");
var result;
function add(num1, num2)
{
	return num1+num2;
};
function sub(num1, num2)
{
	return num1-num2;
};
function mul(num1, num2)
{
	return num1*num2;
};
function div(num1, num2)
{
	return num1/num2;
};
if(operation === "+")
	result = add(num1, num2);
else if(operation === "-")
	resutl = sub(num1, num2);
else if(operation === "*")
	result = mul(num1, num2);
else 
	result = div(num1, num2);

document.getElementById("val").innerHTML += "<h1>" + result + "</h1>";
};

window.onload = start;