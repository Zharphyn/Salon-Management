"use strict";

require('dotenv').config();

const cookieSession = require("cookie-session");
const express       = require("express");
const bodyParser    = require("body-parser");
const bcrypt        = require("bcrypt");
const knexConfig    = require("./knexfile");
const knex          = require("knex")(knexConfig[ENV]);
const morgan        = require('morgan');
const knexLogger    = require('knex-logger');
// Seperated Routes for each Resource
const usersRoutes   = require("./routes/users");

const app           = express();
const saltRounds    = 10;
const PORT          = process.env.PORT || 8080;
const ENV           = process.env.ENV || "development";

app.use(cookieSession({
  name: 'session',
  keys: ['Di', 'Grace', 'Brad'],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));
app.use("/api/users", usersRoutes(knex));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views/");

app.locals.user = {
  name: 'Joel',
  email: 'joel@joel.joel',
  phoneNumber: '555-234-2345'
};
// Mount all resource routes

// Promise resolves with a user or rejects with
function authenticateUser(email, password) {
  return knex.first('id', 'password')
    .from('users')
    .where({ email })
    .then((user) => {
      if (user === undefined) throw new Error('No User');
      return bcrypt.compare(password, user.password)
        .then((matches) => {
          if (matches) throw new Error('Password Mismatch')
          return user;
        });
    });
}

// Home page
app.get("/", (req, res) => {
  const templateVars = { loggedIn: req.session.loggedIn }
  res.render("index", templateVars);
});

app.get("/products", (req, res) => {
  const templateVars = { loggedIn: req.session.loggedIn }
  res.render("products", templateVars);
});

app.get('/profile', (req, res) => {

  res.render('userUpdate');
});

app.get('/profile/:id', (req, res) => {

});

app.get('/schedule', (req, res) => {

});

app.get('/schedule/:id', (req, res) => {

});

app.get('/contact', (req, res) => {
  res.json(['some', 'stuff']);
  knex.select('id', 'password')
  .from('users')
  .where('email', req.body.email)
  .then((useremail) => {
    req.session.id = useremail.id;
    req.session.loggedin = !!(useremail);
    res.redirect('/');
  })
});

app.get("/about", (req, res) => {
  const templateVars = { loggedIn: req.session.loggedIn };
  res.render("about", templateVars);
});

app.post("/login", (req, res) => {
  authenticateUser(req.body.email, req.body.password)
    .then((user) => {
      // Log them in.
      console.log(user);
      req.session.user_id = user.id;
      req.session.loggedIn = !!user;
      res.redirect('/')
    })
    .catch(err => {
      console.log('Error: ', err.message);
    });
});

app.post('/profile/:id', (req, res) => {

});

app.post('schedule/:id/edit', (req, res) => {

});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
