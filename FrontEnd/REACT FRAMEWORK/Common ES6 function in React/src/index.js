// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// //array.forEach() does not return anythng
// const newNumbers = numbers.map((x) => {
//   return x * 2;
// });
// console.log(newNumbers);
// console.log(
//   numbers.find((num) => {
//     return num > 6;
//   })
// );

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

import emojipedia from "./emojipedia";

console.log(
  emojipedia.map((emoji) => {
    return emoji.meaning.substring(0, 100);
  })
);
