import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local"; //importing local strategy from passport  

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//creating a session
app.use(session({
  secret: "TOPSECRETWORD",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24//1 day(in milliseconds)
  }
}))

//initializing passport
//Note-passport module should come after a session is created
app.use(passport.initialize());
app.use(passport.session());//not works if session is not created

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "spiralhelix27",
  port: 5432,
});
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get('/secrets', (req, res) => {
  //if user is authenticated then only he can see the secrets page
  console.log(req.user);

  if (req.isAuthenticated()) {
    res.render('secrets.ejs');
  } else {
    res.redirect('/login');
  }
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      //hashing the password and saving it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed Password:", hash);
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, hash]
          );
          const user = result.rows[0];
          // res.render("secrets.ejs");
          req.login(user, (err) => {
            if (err) {
              console.error("Error logging in:", err);
            } else {
              res.redirect("/secrets");
            }
          })
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// app.post("/login", async (req, res) => {
//   // const email = req.body.username;
//   // const loginPassword = req.body.password;

//   //not needed as passport will automatically grab the username and password from the request body
// });


//passport.authenticate() is a middleware that will run the verify function
app.post("/login", passport.authenticate("local", {
  successRedirect: "/secrets",
  failureRedirect: "/login"
}));

//cb------>callback
//passport can automatically grab the username and password from the request body as long as the input fields are named username and password(login.ejs file for this example)
passport.use(new Strategy(async function verify(username, password, cb) {
  console.log("Username:", username);
  console.log("Password:", password);

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;
      bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (err) {
          // console.error("Error comparing passwords:", err);
          return cb(err);
        } else {
          if (result) {
            // res.render("secrets.ejs");

            return cb(null, user);
            //null means no error
          } else {
            // res.send("Incorrect Password");
            return cb(null, false);
            //false means no user found or incorrect password
            //false means the user is not authenticated(isAuthenticated() will return false)
          }
        }
      });
    } else {
      // res.send("User not found");
      return cb("User not found");
    }
  } catch (err) {
    // console.log(err);
    return cb(err);
  }

}));

passport.serializeUser((user, cb) => {
  cb(null, user);//saving the user info in the session
});

passport.deserializeUser((user, cb) => {
  cb(null, user);//retrieving the user info from the session
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
