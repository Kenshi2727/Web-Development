import express from "express";
const app = express();
const port = 3000;
app.listen(port, () => console.log("Server started!"));
app.get("/", (req, res) => res.send("Welcome to roots of Kenshi Dynasty"));
app.get("/about", (req, res) => res.send("About Kenshi Dynasty"));
app.get("/contact", (req, res) => res.send("<h1>Contact Thunder King <span style='color:red'>'Kenshi'</span></h1>"));
