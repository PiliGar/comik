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
    return res.status(200).json({
      status: 200,
      message: "Character added successfully to user favorites.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error adding character to favorites",
      error,
    });
  }
});

/* CHARACTER  remove favorite */
router.delete("/remove/:favoriteid", isLoggedIn(), async (req, res, next) => {
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
        return res
          .status(200)
          .json({
            status: 200,
            message: "Character removed successfully to user favorites.",
          });
      })
      .catch((err) => res.status(401).json({ status: "User not found" }));
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error removing character from favorites",
      error,
    });
  }
});

/* CHARACTER  get favorites */
router.get("/list", async (req, res, next) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id).populate("favoritesCharacters");
    return res.status(200).json(user.favoritesCharacters);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error showing favorites characters",
      error,
    });
  }
});

module.exports = router;
