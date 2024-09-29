const prompt = require('prompt-sync')();
var key=0;
var output=[];
function fizzBuzz(i){
    output.push(i);
    if(i%3===0 && i%5===0){
        output.pop();
        output.push("FizzBuzz");
    }
    else if(i%3===0){
        output.pop;
        output.push("Fizz");
    }
    else if(i%5===0){
        output.pop();
        output.push("Buzz");
    }
    console.log(output);
}

var i=1;
while(key===0){
    fizzBuzz(i++);
    key=parseInt(prompt("Do you want to continue? (0/1)"));
}