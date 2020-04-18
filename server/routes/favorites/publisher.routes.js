const express = require("express");
const User = require("../../models/User");
const Publisher = require("../../models/Publisher");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn } = require("../../middleware/isLogged");

/* PUBLISHER  add favorite */
router.post("/add/:favoriteid", isLoggedIn(), async (req, res, next) => {
  try {
    const { favoriteid } = req.params;
    const id = req.user._id;
    const publisher = await Publisher.findById(favoriteid);
    await User.findByIdAndUpdate(id, {
      $addToSet: { favoritesPublishers: publisher },
    });
    return res
      .status(200)
      .json({ message: "Publisher added successfully to user favorites." });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error adding publisher to favorites",
      error,
    });
  }
});

/* PUBLISHER  remove favorite */
router.delete("/remove/:favoriteid", isLoggedIn(), async (req, res, next) => {
  try {
    const { favoriteid } = req.params;
    const id = req.user._id;
    await User.findById(id)
      .then(async (user) => {
        const favoritesArr = user.favoritesPublishers;
        const updatedArr = await Promise.all(
          favoritesArr.filter((e) => e != favoriteid)
        );
        await User.findByIdAndUpdate(id, {
          favoritesPublishers: updatedArr.map((publisher) => publisher._id),
        });
        return res.status(200).json({
          message: "Publisher removed successfully to user favorites.",
        });
      })
      .catch((err) => res.status(401).json({ status: "User not found" }));
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error removing publisher from favorites",
      error,
    });
  }
});

/* PUBLISHER  get favorites */
router.get("/list", async (req, res, next) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id).populate("favoritesPublishers");
    return res.status(200).json(user.favoritesPublishers);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error showing favorites publishers",
      error,
    });
  }
});

module.exports = router;
