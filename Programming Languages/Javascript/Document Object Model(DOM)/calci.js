//Higher order function implementation
function calculate(num1,num2,operator){
    return operator(num1,num2);
}

//add
function add(num1,num2){
    return num1+num2;
}
//subtract
function subtract(num1,num2){
    return num1-num2;
}
//multiply
function multiply(num1,num2){
    return num1*num2;
}
//divide
function divide(num1,num2){
    return num1/num2;
}

let num1 = 10;
let num2 = 20;
let operator = multiply;
console.log(calculate(num1,num2,operator));