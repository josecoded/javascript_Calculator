
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function modulus(a, b) {
    return a % b;
}



function askUser()
var a = prompt("Enter first number");
var b = prompt("Enter second number");
var operator = prompt("Enter operator");
var result = 0;
if (operator == "+") {
    result = add(a, b) ;
}
else if (operator =="-") {
    result = subtract(a, b);
}
else if (operator == "*") {
    result = multiply(a, b);
}
else if (operator == "/") {
    result = divide(a, b);
}
else if (operator == "%") {
    result = modulus(a, b)
}
else {
    alert("please enter a valid operator");
}
alert(result);

askUser():