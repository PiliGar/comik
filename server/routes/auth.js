const express = require("express");
const User = require("../models/User");
const router = express.Router();
const _ = require("lodash");
const passport = require("passport");
const { hashPassword, checkHashed } = require("../lib/hashing");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

/* POST signup */
router.post("/signup", async (req, res, next) => {
  const { name, alias, email, password } = req.body;

  console.log(name, alias, email, password);

  // Create the user
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    const newUser = await User.create({
      name,
      alias,
      email,
      password
    });
    //Directly login user
    req.logIn(newUser, err => {
      res.json(
        _.pick(req.user, [
          "name",
          "alias",
          "email",
          "_id",
          "createdAt",
          "updatedAt"
        ])
      );
    });
    console.log(name, "REGISTERED!");
  } else {
    res.json({ status: "Not able to create because user already exists" });
  }
});

module.exports = router;
