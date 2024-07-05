import express from "express";
import bodyPraser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyPraser.urlencoded({ extended: true }));

app.post("/submit",(req,res)=>console.log(req.body));//since html form will have action="/submit" and method="post" so this will be called when form is submitted

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
