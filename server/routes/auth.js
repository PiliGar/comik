const express = require("express");
const User = require("../models/User");
const router = express.Router();
const _ = require("lodash");
const passport = require("passport");
const { hashPassword, checkHashed } = require("../lib/hashing");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

/* AUTH Signup */
router.post("/signup", async (req, res, next) => {
  const { name, alias, username, password } = req.body;

  console.log(name, alias, username);

  // Create the user
  const existingUser = await User.findOne({ username });
  if (!existingUser) {
    const newUser = await User.create({
      name,
      alias,
      username,
      password
    });
    //Directly login user
    req.logIn(newUser, err => {
      res.json(
        _.pick(req.user, [
          "name",
          "alias",
          "username",
          "_id",
          "createdAt",
          "updatedAt"
        ])
      );
    });
    console.log(name, "REGISTERED!");
  } else {
    res.json({
      status: "Not able to create newUser because user already exists"
    });
  }
});

/* AUTH Login */

//Login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, fealureDetails) => {
    if (err) {
      console.log(err);
      return res.json({ status: 500, message: "Autentication Error" });
    }
    if (!user) {
      return res.json({ status: 401, message: fealureDetails.message });
    }
    req.logIn(user, err => {
      if (err) {
        return res.status(500).json({ message: "Session save went bad" });
      }
      return res.json(
        _.pick(req.user, [
          "name",
          "alias",
          "username",
          "_id",
          "createdAt",
          "updatedAt"
        ])
      );
    });
  })(req, res, next);
});

module.exports = router;
