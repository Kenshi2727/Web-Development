import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "spiralhelix27",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

let users = [
  { id: 1, name: "Angela", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}
app.get("/", async (req, res) => {
  // const countries = await checkVisisted();
  let countries = [];
  const result = await db.query("SELECT country_code FROM visited_countries WHERE user_id=$1",[currentUserId]);
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });

  //current color
  const color=await db.query("select color from users where id=$1",[currentUserId]);
  const current_color=color.rows[0].color;

  //all users
  const users_data=await db.query("select * from users");
  users=users_data.rows;
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: current_color,
  });
});


app.post("/add", async (req, res) => {
  const input = req.body["country"];
  console.log("add json----------------------->",req.body);
  
  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
  
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code,user_id) VALUES ($1,$2)",
        [countryCode,currentUserId]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});


app.post("/user", async (req, res) => {
  if(req.body.add)
    res.render('new.ejs');
  else{
  // console.log(req.body)
  currentUserId = req.body.user; // Update the global currentUserId variable
  const data=await db.query("select country_code from visited_countries where user_id=$1",[currentUserId]);
  // console.log(data.rows);
  let countries=[];
  // let users=[];
  data.rows.forEach((country)=>countries.push(country.country_code));
  const color=await db.query("select color from users where id=$1",[currentUserId]);
  // const name=await db.query("select name from users where id=$1",[currentUserId]);
  const user_color=color.rows[0].color;
  // const user_name=name.rows[0].name;
  // users.push({
  //           id:currentUserId,
  //           name:user_name,
  //           color:user_color
  //           })
  //           console.log("color-->",color.rows[0].color);
  // const test=console.log(await db.query("select * from users"));
  const users_data=await db.query("select * from users");
  const users=users_data.rows;
  res.render('index.ejs',{countries:countries,total:countries.length,users:users,color:user_color})
  }
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
  const name=req.body.name;
  const color=req.body.color;
  const data=await db.query("insert into users(name,color) values($1,$2) returning id",[name,color]);
  const id=data.rows[0].id;
  currentUserId=id;//update user id to avoid conflict with id on current tab
  console.log("user_id-->",id);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
