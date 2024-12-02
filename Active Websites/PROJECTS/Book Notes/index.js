import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app=express();
const port=3000;
const db=new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"book-notes",
    password:"spiralhelix27",
    port:5432
}) 

db.connect();

let title='';
let note='';

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index.ejs');
});

app.get('/add',(req,res)=>{
    res.render('add.ejs');
});

app.post('/add',async(req,res)=>{
    title=req.body['new-title'];
    note=req.body['new-note'];
    console.log(title);
    console.log(note);
    
    try{
        await db.query("INSERT INTO books(title,note) VALUES($1,$2)",[title,note]);
    }
    catch(err){
        console.log(err);
    }
    res.redirect('/');
});


app.listen(port,()=>console.log(`Server is running on port ${port}`));

