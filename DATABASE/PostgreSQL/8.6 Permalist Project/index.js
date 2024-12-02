import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db= new pg.Client({
  user: "postgres",
  host: "localhost",
  password:"spiralhelix27",
  database:"permalist",
  port:5432
})

db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  // { id: 1, title: "Buy milk" },
  // { id: 2, title: "Finish homework" },
];

app.get("/", async(req, res) => {
  try{
  const result=await db.query("SELECT * FROM items ORDER BY id ASC");
  items=result.rows;
  console.log(items);
  }
  catch(err){
    console.log(err);
  }
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async(req, res) => {
  const item = req.body.newItem;
  try{
    db.query("INSERT INTO items(TITLE) VALUES($1)",[item]);
  }
  catch(err){
    console.log(err);
  }
  res.redirect("/");
});

app.post("/edit", async(req, res) => {
  const id=req.body.updatedItemId;
  const title=req.body.updatedItemTitle;
  try{
    db.query("UPDATE items SET title=$1 WHERE id=$2",[title,id]);
  }
  catch(err){
  console.log(err);
  } 
  res.redirect("/");
});

app.post("/delete", async(req, res) => {
  const id=req.body.deleteItemId;
  try{
    await db.query("DELETE FROM items WHERE id=$1",[id]);
  }
  catch(err){
    console.log(err);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
