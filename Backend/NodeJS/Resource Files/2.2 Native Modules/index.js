const fs = require("fs");
fs.writeFile("message.txt", "Good Morning Everyone! A wild Kenshi has invaded our sexy domain!!!", (err) => {
    if (err) throw err;
});

fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
