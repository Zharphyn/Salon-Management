"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const app         = express();
const bcrypt      = require("bcrypt");

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');
var cookieSession = require('cookie-session')
app.use(cookieSession({
  name: 'session',
  keys: ['Di', 'Grace', 'Brad'],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.set("views", "views/");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  const templateVars = {loggedIn: req.session.loggedin};
  // var x = 'innnocuous cheerful message not written by a crazy mentor';

  res.render("index", templateVars);
});

app.get("/products", (req, res) => {
  const templateVars = { loggedIn: req.session.loggedin };
  res.render("products", templateVars);
});

app.post("/login", (req, res) => {
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

app.get("/contact", (req, res) => {
  const templateVars = { loggedIn: req.session.loggedIn };
  res.render("contact", templateVars);
});


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
