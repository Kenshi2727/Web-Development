import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db=new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"world",
  password:"spiralhelix27",
  port:5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  let countries=[];
  const result=await db.query("select country_code from visited_countries");
  result.rows.forEach((country)=>{
    countries.push(country.country_code);
    });
    console.log(result.rows);
    res.render('index.ejs',{countries:countries,total:countries.length});
    // db.end();
  });


app.post("/add",async(req,res)=>{
  const country=req.body.country;
  const result=await db.query("select country_code from countries where country_name=$1",[country]);
  
  //if condition handles those inputs where there is no match
  if(result.rows.length!=0){
  const country_code=result.rows[0].country_code;
  console.log("console check---->",result.rows);
  
  await db.query("insert into visited_countries(country_code)values($1)",[country_code]);
  res.redirect('/');
  //db.end();
  }
})
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
