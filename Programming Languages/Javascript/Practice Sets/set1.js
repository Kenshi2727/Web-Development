// let s = 'two';
// s += 2;

// console.log(s);
// console.log(typeof s);

// const fixed = {
//     "love": 30,
//     "month": "july",
//     "girl": 'ejzb' //shift left by 1
// }
// // fixed = 2; //error
// // console.log(fixed);


// fixed["new key"] = "new Value";
// console.log(fixed);

//word meaning program


const meanings = {
    "love": "a strong feeling of affection",
    "month": "a period of time",
    "friend": "a person worth of torturing",
    "crush": "someone worth propsoing",
    "momo": "a type of food"
}

for (let key in meanings) {
    console.log("word:", key, "|", "meaning:", meanings[key]);

}



