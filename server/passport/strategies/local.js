const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/User");
const { hashPassword, checkHashed } = require("../../lib/hashing");

passport.use(
  new LocalStrategy(async (name, password, done) => {
    console.log("Passport local", name, password);
    try {
      const existUser = await User.findOne({ name });
      console.log("found user", existUser);
      if (existUser) {
        checkHashed(password, existUser.password)
          ? done(null, existUser)
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
