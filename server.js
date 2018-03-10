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
  res.render("index");
});

app.get("/products", (req, res) => {
  res.render("products");
});


app.post("/login", (req, res) => {
  knex.select('id', 'password')
  .from('users')
  .where('email', req.body.email)
  .then((useremail) => {
    console.log(bcrypt('123', 10));
    res.redirect('/');
  })
});

app.get('/profile',(req,res)=>{
  res.render('userUpdate');
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
