import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("A wild Kenshi has invaded our magical tarry forest!He has a request:<h1>Japanese swords have Chinese katanas</h1>.")
    console.log(req.rawHeaders);
});
app.listen(port, () => console.log(`Server is running on port ${port}.`));
