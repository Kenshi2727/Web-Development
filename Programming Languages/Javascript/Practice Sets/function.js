const marks = obj => {
    for (let key in obj) {
        console.log(obj[key]);
    }
}

obj = {
    harry: 98,
    sally: 100,
    john: 80,
    jenny: 90
}

console.log("Marks are:", marks(obj));
