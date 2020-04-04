const express = require("express");
const User = require("../models/User");
const router = express.Router();
const _ = require("lodash");
const passport = require("passport");
const { isLoggedIn } = require("../middleware/isLogged");

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
      res.json(_.pick(req.user, ["name", "alias", "username", "_id"]));
    });
    console.log(name, "User registered!");
  } else {
    res.json({
      status: "Not able to create a new user because this user already exists"
    });
  }
});

/* AUTH Login */
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
      return res.json(_.pick(req.user, ["name", "alias", "username", "_id"]));
    });
  })(req, res, next);
});

/* AUTH Edit */
router.put("/edit", isLoggedIn(), async (req, res, next) => {
  try {
    const id = req.user._id;
    const { name, alias, username, password } = req.body;
    await User.findByIdAndUpdate(id, {
      name,
      alias,
      username,
      password
    });
    return res.json({ status: "Profile updated!" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});

/* AUTH Logout */
router.post("/logout", isLoggedIn(), async (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.json({ status: "Log out" });
  } else {
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});

/* AUTH Whoami */
router.post("/whoami", (req, res, next) => {
  console.log("--->>> que user", req.user);
  if (req.user)
    return res.json(_.pick(req.user, ["name", "alias", "username", "_id"]));
  else return res.status(401).json({ status: "No user session present" });
});

module.exports = router;
