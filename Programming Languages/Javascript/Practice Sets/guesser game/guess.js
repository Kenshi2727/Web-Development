const prompt = require('prompt-sync')();
let random = Math.floor((Math.random(100) * 100) + 1);
let guess = prompt('Guess a number between 1 and 100: ');
let score = 100;
while (guess != random) {
    score--;
    guess = prompt('Guess again chutiye 😂😂😂:');
}
console.log("Fuck off!!You guessed that means you cheated!!!😒😒😒");
console.log("Fuck off your score:", score);

