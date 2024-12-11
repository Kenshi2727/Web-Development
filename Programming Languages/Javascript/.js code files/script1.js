console.log("var v/s let v/s const");
var a = 10;

console.log("--------var---------");

{
    var a="test";//var can be redeclared
    console.log(a);
}
console.log(a);

console.log("--------let---------");

let b = 20;
{
    let b="test";//let cannot be redeclared
    console.log(b);
}   

console.log(b);

const maalik="Kenshi";
// let maalik="Goro"; ----> Cannot redeclare a const variable hence will throw an error

var z;
console.log(z);//undefined

// const hey; ----> Cannot declare a const variable without initializing it hence will throw an error