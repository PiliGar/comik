const express = require("express");
const User = require("../../models/User");
const Character = require("../../models/Character");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn } = require("../../middleware/isLogged");

/* CHARACTER  add favorite */
router.post("/add/:favoriteid", isLoggedIn(), async (req, res, next) => {
  try {
    const { favoriteid } = req.params;
    const id = req.user._id;
    const character = await Character.findById(favoriteid);
    await User.findByIdAndUpdate(id, {
      $addToSet: { favoritesCharacters: character },
    });
    return res.json({ status: "Character added to user fav arr." });
  } catch (error) {
    return res.status(401).json({ status: "Not found." });
  }
});

/* CHARACTER  remove favorite */
router.post("/remove/:favoriteid", isLoggedIn(), async (req, res, next) => {
  try {
    const { favoriteid } = req.params;
    const id = req.user._id;
    await User.findById(id)
      .then(async (user) => {
        const favoritesArr = user.favoritesCharacters;
        const updatedArr = await Promise.all(
          favoritesArr.filter((e) => e != favoriteid)
        );
        await User.findByIdAndUpdate(id, {
          favoritesCharacters: updatedArr.map((character) => character._id),
        });
        return res.json({
          status: "Character removed from user favorites arr.",
        });
      })
      .catch((err) => res.status(401).json({ status: "Not found again." }));
  } catch (error) {
    return res.status(401).json({ status: "Not found." });
  }
});

/* CHARACTER  get favorites */
router.get("/list", async (req, res, next) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id).populate("favoritesCharacters");
    return res.json(user.favoritesCharacters);
  } catch (error) {
    return res.status(401).json({ status: "Not found." });
  }
});

module.exports = router;
