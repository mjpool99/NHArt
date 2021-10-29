const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 80;
const app = express();
const mongoose = require('mongoose');
const Show = require('./src/models/dateModel');
const Contact = require('./src/models/contactModel');
const Location = require('./src/models/locationModel');
const cookieSession = require('cookie-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const User = require('./src/models/users')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieSession({
  name: 'mysession',
  keys: ['vueauthrandomkey'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(passport.initialize());
app.use(passport.session());

let users = [{
  username: process.env.VUE_APP_USERNAME,
  password: process.env.VUE_APP_PASSWORD
}];

//This is the database connection with Mongoose

const dbURI = `mongodb+srv://${process.env.VUE_APP_DBUSER}:${process.env.VUE_APP_DBPASS}@cluster0.lqma0.mongodb.net/nhArt?retryWrites=true&w=majority`


mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .catch(err => {
    console.log(err)
  })


//This is the MongoDB call for the show dates page

app.get('/ShowDates', (req, res) => {
  Show.find()
    .then(result => {
      res.send(result)
    })
})
app.get('/contact', (req, res) => {
  Contact.find()
    .then(result => {
      res.send(result)
    })
})
app.get('/ShowLocation', (req, res) => {
  Location.find()
    .then(result => {
      res.send(result)
    })
})

//Admin page
let options = {
  new: true
}
app.post('/adminDates', (req, res) => {
  let currentYear = new Date().getFullYear()
  Show.findByIdAndUpdate({_id: "61770a294a49552dbbdc1436"}, { date: `${req.body.month1} ${req.body.day1}, ${currentYear}`}, options, function(error,result){
    if(error){
      console.log(error)
    }else{
      console.log(result)
    }
  })
  Show.findByIdAndUpdate({_id: "61770a4b4a49552dbbdc1437"}, { date: `${req.body.month2} ${req.body.day2}, ${currentYear}`}, options, function(error,result){
    if(error){
      console.log(error)
    }else{
      console.log(result)
    }
  })
  Show.findByIdAndUpdate({_id: "61770a584a49552dbbdc1438"}, { date: `${req.body.month3} ${req.body.day3}, ${currentYear}`}, options, function(error,result){
    if(error){
      console.log(error)
    }else{
      console.log(result)
    }
  })
})
app.post('/adminContactPhone', (req, res) => {
  Contact.findByIdAndUpdate({_id: "617706154a49552dbbdc1435"}, { Phone: `${req.body.phone1}-${req.body.phone2}-${req.body.phone3}`}, options, function(error,result){
    if(error){
      console.log(error)
    }else{
      console.log(result)
    }
  })
})
app.post('/adminContactEmail', (req, res) => {
  Contact.findByIdAndUpdate({_id: "617706154a49552dbbdc1435"}, {Email: `${req.body.email}`}, options, function(error,result){
    if(error){
      console.log(error)
    }else{
      console.log(result)
    }
  })
})
app.post('/adminLocation', (req, res) => {
  Location.findByIdAndUpdate({_id: "617754154a49552dbbdc143a"}, {url: `https://www.google.com/maps/embed/v1/place?key=AIzaSyDdaJGlgtHh9Xrtt5cee2MEXcTIhLzphn0&q=${req.body.Name},${req.body.City}+${req.body.State}`}, options, function(error,result){
    if(error){
      console.log(error)
    }else{
      console.log(result)
    }
  })
})

//Login for admin page

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(400).send([user, "Cannot log in", info]);
    }

    req.login(user, err => {
      res.send("Logged in");
    });
  })(req, res, next);
});

app.get("/logout", function (req, res) {
  req.logout();

  console.log("logged out")

  return res.send();
});



const authMiddleware = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect("/login")
  } else {
    return next()
  }
}

app.get("/admin", authMiddleware, (req, res) => {
  let user = users.find(user => {
    return user.id === req.session.passport.user
  })
})


passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password"
    },

    (username, password, done) => {
      let user = users.find((user) => {
        return user.username === username && user.password === password
      })

      if (user) {
        done(null, user)
      } else {
        done(null, false, { message: 'Incorrect username or password' })
      }
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  let user = users.find((user) => {
    return user.id === id
  })

  done(null, user)
})




//Server config
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port)
