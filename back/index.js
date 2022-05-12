const express = require("express");
const app = express();
const mongoose = require("mongoose");
const HomepageRouter = require("./controllers/user.controller");
const TweetRouter = require("./controllers/tweet.controller");
const CommentRouter = require("./controllers/comment.controller");
const localStrategy = require("passport-local");
const passport = require("passport");
const session = require("express-session");
const userModel = require("./models/user.model");
const bCrypt = require("bcrypt");

mongoose.connect("mongodb://localhost:27017/twitter-users");

const PORT = 3002;
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "tweetfavorite",
    resave: true,
    saveUninitialized: false,
  })
);
passport.use(
  new localStrategy((username, passsword, done) => {
    userModel
      .findOne({
        username,
      })
      .then((user) => {
        if (!user) {
          return done(null, false);
        }
        if (!isSame) {
          return done(null, false);
        }
        done(null, user);
      });
  })
);

passport.serializeUser((user, done) => {
  console.log("serialUser user", user);
  done(null, user._id);
});
passport.deserializeUser(async (_id, done) => {
  try {
    console.log("deserialize user", _id);
    done(null, user);
  } catch (err) {
    done(null, false);
  }
});

app.use("/homepage", HomepageRouter);
app.use("./tweet", TweetRouter);
app.use("./comment", CommentRouter);

app.listen(PORT, () => {
  console.log("App is listening on port :", PORT);
});

app.post("/signup", (req, res) => {
  const body = req.body;
  console.log(body);
  bCrypt.hash(body.password, 10).then((hash) => {
    body.password = hash;
    userModel.create(body).then((user) => res.json(user));
  });
});

app.post("/Login", (req, res, next) => {
  res.send("OK");
});
app.get("/profil", (req, res, next) => {});
app.post("/Profil", (req, res, next) => {});
