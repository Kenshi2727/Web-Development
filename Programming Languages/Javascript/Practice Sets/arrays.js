// let array = [1, true, "three"];
// console.log(typeof array);

// let num = [1, 7, 4, 3, 5, 6, 2];
// console.log(num.toString());
// console.log(num.join("-"));
// console.log(num.pop());
// console.log(num);
// delete num[0];
// console.log(num);
// num.sort((a, b) => b - a);
// console.log(num);

let name = "Kenshi";
console.log(Array.from(name));

for (let i in name) {
    console.log(name[i]);
}

let arr = [1, 2, 3, 4, 5];
arr.forEach((value, index, array) => {
    console.log(value, index, array);
});

console.log(arr.reduce((p1, p2) => p1 + p2));
