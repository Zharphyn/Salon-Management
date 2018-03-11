"use strict";

require('dotenv').config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bcrypt = require("bcrypt");
const cookieSession = require("cookie-session");
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require('morgan');
const knexLogger = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Salt rounds used for encryption of passwords
const salt = '10';
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

app.locals.user = {
  name: 'Joel',
  email: 'joel@joel.joel',
  phoneNumber: '555-234-2345'
};
// Mount all resource routes


app.use("/api/users", usersRoutes(knex));
app.use(cookieSession({
  name: 'session',
  keys: ['di', 'brad', 'grace'],
  maxAge: 24 * 60 * 60 * 1000
}))

// Home page
app.get("/", (req, res) => {
  const templateVars = { loggedIn: req.session.loggedIn };
  res.render("index", templateVars);
});

app.get("/products", (req, res) => {
  const templateVars = { loggedIn: req.session.loggedIn };
  res.render("products", templateVars);

});

// Promise resolves with a user or rejects with
function authenticateUser(email, password, req, res) {
  let result = { id: 0, loggedIn: false };
  return knex.table('users')
    .first('id', 'password')
    .where({ email })
    .then((user) => {
      if (user === undefined) throw new Error('No User');
      result.id = user.id;
      result.loggedIn = !!user;
      bcrypt.compare(password, user.password)
        .then((matches) => {
          if (!matches) throw new Error('Password Mismatch')
        })
        .then((user) => {
          req.session.user_id = result.id;
          req.session.loggedIn = result.loggedIn;
          res.redirect('/');
        })
        .catch(err => {
          // Tell them to go away
          console.log(err.message);
        });

    });
}

app.post("/login", (req, res) => {

  const { email, password } = req.body;
  authenticateUser(email, password, req, res);

});

app.get('/profile', (req, res) => {
  const id = req.session.user_id;
  knex.table('users')
    .first('name', 'email', 'phone_number')
    .where({ id })
    .then((result) => {
      if (result === undefined) throw new Error('User not found');
      const templateVars = {
        loggedIn: req.session.loggedIn,
        id: req.session.user_id,
        user: result.name,
        email: result.email,
        phoneNumber: result.phone_number
      };
      console.log('templateVars:', templateVars);
      res.render("userUpdate", templateVars);
    })
    .catch(e => {
      console.log(e.message);
    });

  console.log(req.body)
  const { email, password } = req.body;
  authenticateUser(email, email)
    .then((user) => {
      // Log them in.
      req.session.user_id = user.id;
      req.session.loggedIn = !!user;
      res.redirect('/');
    })
    .catch(err => {
      // Tell them to go away
      console.log(err.message);
    });
});

app.get('/profile/:id', (req, res) => {

});

app.get('/schedule', (req, res) => {

});

app.get('/schedule/:id', (req, res) => {

});

app.post('schedule/:id/edit', (req, res) => {

});

app.post('/register', (req, res) => {
  const { email, password, phone, name } = req.body;

  bcrypt.hash(password, salt, (err, hash) => {
    knex('users')
      .returning('id')
      .insert({
        email: email,
        password: hash,
        name: name,
        phone_number: phone,
        type_id: 1
      }).then((result) => {
        req.session.user_id = result.id;
        req.session.loggedIn = !!result;
        res.redirect('/');
      }).catch(err => {
        console.log(err.message);
      });
  });
});

app.get('/about', (req, res) => {
  const templateVars = { loggedIn: req.session.loggedIn };
  res.render('about', templateVars);
});

app.get('/services', (req, res) => {
  const templateVars = { loggedIn: req.session.loggedIn };
  res.render('service', templateVars);
});

app.get('/contact', (req, res) => {
  const templateVars = { loggedIn: req.session.loggedIn };
  res.render('contact', templateVars);
});

app.post('/profile', (req, res) => {
  res.redirect('/profile');
});

app.post('/editprofile', (req, res) => {
  console.log('In the post function!!');
  const { name, email, phone } = req.body;
  const id = req.session.user_id;
  console.log('id =', id);
  console.log('name =', name);
  console.log('email =', email);
  console.log('phone =', phone);

  knex('users')
    .where({ id })
    .update({
      name: name,
      email: email,
      phone_number: phone
    })
    .then((result) => {
      console.log(result);
    })
    .catch(e => {
      console.log('server.js Error:', e.message);
    });
});

app.post('/profile/update', (req, res) => {

});

app.post('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
});


app.get('/booking', (req, res) => {
  const templateVars = { loggedIn: req.session.loggedIn };
  res.render('booking', templateVars);
});
//handle the database insert
app.post('/booking', (req, res) => {
  console.log(req.body);
  let { special_request, start_time, end_time } = req.body;  
  let { user_id } = req.session;
  !user_id ? user_id = 1 : user_id = user_id;
  knex('appointments')
    .returning('id')
    .insert({
      end_time: end_time,
      special_request: special_request,
      start_time: start_time,
      status_id: 1,
      user_id: user_id,
      user_staff_id: 4
    }).then((result) => {
      res.redirect('/');
    }).catch((err) => {
      // but there will never be error msg
      console.log(err.message);
    });
});
app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
