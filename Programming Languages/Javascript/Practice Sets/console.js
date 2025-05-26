console.log(console);// This will log the console object itself
const obj = { name: "how are you dylan", type: "greet", isValid: true }
console.table(obj);

console.time("Loop time");
for (let i = 0; i < 10; i++) {
    console.count("Loop iteration");
}
console.timeEnd("Loop time");