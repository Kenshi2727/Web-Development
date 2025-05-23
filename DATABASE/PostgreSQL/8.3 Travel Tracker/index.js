import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

async function checkVisited() {
  const result = await db.query("select country_code from visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  let countries = [];
  const result = await db.query("select country_code from visited_countries");
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log(result.rows);
  res.render('index.ejs', { countries: countries, total: countries.length });
  // db.end();
});


app.post("/add", async (req, res) => {
  const country = req.body.country;

  try {
    const result = await db.query("select country_code from countries where lower(country_name) like '%' || $1 || '%';",
      [country.toLowerCase()]
    );

    //if condition handles those inputs where there is no match
    if (result.rows.length != 0) {
      const country_code = result.rows[0].country_code;
      console.log("console check---->", result.rows);

      try {
        await db.query("insert into visited_countries(country_code)values($1)",
          [country_code]);
      }
      catch (err) {
        console.log(err);
        const countries = await checkVisited();
        res.render('index.ejs', {
          countries: countries,
          total: countries.length,
          error: "Country has already been added,try again."
        });
      }
      res.redirect('/');
      //db.end();
    }
  }
  catch (error) {
    console.log("I am here with error--->", error);
    const countries = await checkVisited();
    res.render('index.ejs', {
      countries: countries,
      total: countries.length,
      error: "Country does not exist,try again."
    });
  }
})
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
