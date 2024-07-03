import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("A wild Kenshi has invaded our magical tarry forest!He has a request:" + req)
    console.log(req);    
});
app.listen(port, () => console.log(`Server is running on port ${port}.`));
