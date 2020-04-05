const express = require("express");
const User = require("../models/User");
const Publisher = require("../models/Publisher");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn } = require("../middleware/isLogged");

/* PUBLISHER  add favorite */
router.post("/add/:favoriteid", isLoggedIn(), async (req, res, next) => {
  try {
    const { favoriteid } = req.params;
    const id = req.user._id;
    const publisher = await Publisher.findById(favoriteid);
    await User.findByIdAndUpdate(id, {
      $addToSet: { favoritesPublishers: publisher }
    });
    return res.json({ status: "Publisher added to user fav arr." });
  } catch (error) {
    return res.status(401).json({ status: "Not found." });
  }
});

/* PUBLISHER  remove favorite */
router.post("/remove/:favoriteid", isLoggedIn(), async (req, res, next) => {
  try {
    const { favoriteid } = req.params;
    const id = req.user._id;
    await User.findById(id)
      .then(async user => {
        const favoritesArr = user.favoritesPublishers;
        const updatedArr = await Promise.all(
          favoritesArr.filter(e => e != favoriteid)
        );
        await User.findByIdAndUpdate(id, {
          favoritesPublishers: updatedArr.map(publisher => publisher._id)
        });
        return res.json({
          status: "Publisher removed from user favorites arr."
        });
      })
      .catch(err => res.status(401).json({ status: "Not found again." }));
  } catch (error) {
    return res.status(401).json({ status: "Not found." });
  }
});

/* PUBLISHER  get favorites */
router.get("/list", async (req, res, next) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id).populate("favoritesPublishers");
    return res.json(user.favoritesPublishers);
  } catch (error) {
    return res.status(401).json({ status: "Not found." });
  }
});

module.exports = router;
