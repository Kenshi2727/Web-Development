const prompt = require('prompt-sync')();
var guest_list = ['Kenshi', 'John', 'Emily', 'Michael', 'Sarah', 'David', 'Olivia', 'Daniel', 'Sophia', 'Matthew', 'Isabella', 'Andrew', 'Ava', 'William', 'Mia', 'James', 'Charlotte', 'Joseph', 'Amelia', 'Benjamin'];
var guest=prompt("Enter your name:");
if (guest_list.includes(guest)){
    console.log("Welcome to the party");
}
else{
    console.log("Sorry, you are not invited so get lost!");
}
