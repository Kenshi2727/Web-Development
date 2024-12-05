import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  password: "spiralhelix27",
  database: "secrets",
  host: "localhost",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body['username'];
  const password = req.body['password'];
  const checkResult = await db.query("SELECT * FROM users WHERE email=$1", [email]);
  try {
    if (checkResult.rows.length > 0) {
      res.send("User already exists");
    }
    else {
      await db.query("INSERT INTO users (email,password) VALUES ($1,$2)", [email, password]);
      res.render("secrets.ejs");
    }
  }
  catch (err) {
    console.error(err);
  }

});

app.post("/login", async (req, res) => {
  const email = req.body['username'];
  const password = req.body['password'];
  try {
    const result = await db.query("SELECT password FROM users WHERE email=$1", [email]);
    if (result.rows.length === 0) {
      res.send("User does not exist");
    }
    else {
      const retrievedPassword = result.rows[0].password;
      console.log("retrieving--------->", retrievedPassword);

      if (retrievedPassword === password) {
        res.render("secrets.ejs");
      }
      else {
        res.send("Incorrect password");
      }
    }
  }
  catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
