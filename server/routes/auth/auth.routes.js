const express = require("express");
const User = require("../../models/User");
const router = express.Router();
const _ = require("lodash");
const passport = require("passport");
const { hashPassword } = require("../../lib/hashing");
const { isLoggedIn } = require("../../middleware/isLogged");

/* AUTH Signup */
router.post("/signup", async (req, res, next) => {
  const { name, alias, username, password } = req.body;

  console.log(name, alias, username);
  console.log(`--->>> New sing up request: ${name} | ${alias} | ${username}`);

  if (username === "" || password === "") {
    res.status(400).json({
      message: "Please enter both, username and password to sign up.",
    });
    return;
  }

  // Create the user
  const existingUser = await User.findOne({ username });
  if (!existingUser) {
    const newUser = await User.create({
      name,
      alias,
      username,
      password,
    });
    //Directly login user
    req.logIn(newUser, (err) => {
      res.json(_.pick(req.user, ["name", "alias", "username", "_id"]));
    });
    console.log(`--->>> New user registered: ${name}`);
  } else {
    res.status(400).json({
      message: "Not able to create a new user because this user already exists",
    });
  }
});

/* AUTH Login */
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      console.log(`--->>> Login ERROR: ${err}`);
      return res
        .status(500)
        .json({ status: 500, message: "Autentication Error" });
    }
    if (!user) {
      return res.status(401).json({ status: 401, message: "Unathorised" });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ status: 500, message: "Session save went bad" });
      }
      return res.json(_.pick(req.user, ["name", "alias", "username", "_id"]));
    });
  })(req, res, next);
});

/* AUTH Edit */
//--->>> TODO Can't edit with email hashed
router.put("/edit", isLoggedIn(), async (req, res, next) => {
  try {
    const id = req.user._id;
    const { name, alias, username, password } = req.body;
    await User.findByIdAndUpdate(id, {
      name,
      alias,
      username,
      password: hashPassword(password),
    });
    return res.status(200).json({ status: "200", message: "Profile updated!" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});

/* AUTH Logout */
router.post("/logout", isLoggedIn(), async (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.status(200).json({ message: "User logged out successfully" });
  } else {
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});

/* AUTH Whoami */
router.post("/whoami", (req, res, next) => {
  console.log(`--->>> Current user logged: 👽 ${req.user}`);
  if (req.user)
    return res
      .status(200)
      .json(_.pick(req.user, ["name", "alias", "username", "_id"]));
  else return res.status(401).json({ status: "No user session present" });
});

module.exports = router;
