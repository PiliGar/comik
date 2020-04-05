const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/User");
const { hashPassword, checkHashed } = require("../../lib/hashing");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    console.log("Passport local", username, password);
    try {
      const foundUser = await User.findOne({ username });
      console.log("found user", foundUser);
      if (foundUser) {
        checkHashed(password, foundUser.password)
          ? done(null, foundUser)
          : done(null, false);
      } else {
        done(null, false);
      }
    } catch (error) {
      console.log("Signup failed", error);
      done(error);
    }
  })
);
