const express = require("express");
const User = require("../../models/User");
const Issue = require("../../models/Issue");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn } = require("../../middleware/isLogged");

/* ISSUE  add favorite */
router.post("/add/:favoriteid", isLoggedIn(), async (req, res, next) => {
  try {
    const { favoriteid } = req.params;
    const id = req.user._id;
    const issue = await Issue.findById(favoriteid);
    await User.findByIdAndUpdate(id, {
      $addToSet: { favoritesIssues: issue },
    });
    return res.json({ status: "Issue added to user fav arr." });
  } catch (error) {
    return res.status(401).json({ status: "Not found." });
  }
});

/* ISSUE  remove favorite */
router.post("/remove/:favoriteid", isLoggedIn(), async (req, res, next) => {
  try {
    const { favoriteid } = req.params;
    const id = req.user._id;
    await User.findById(id)
      .then(async (user) => {
        const favoritesArr = user.favoritesIssues;
        const updatedArr = await Promise.all(
          favoritesArr.filter((e) => e != favoriteid)
        );
        await User.findByIdAndUpdate(id, {
          favoritesIssues: updatedArr.map((issue) => issue._id),
        });
        return res.json({
          status: "Issue removed from user favorites arr.",
        });
      })
      .catch((err) => res.status(401).json({ status: "Not found again." }));
  } catch (error) {
    return res.status(401).json({ status: "Not found." });
  }
});

/* ISSUE  get favorites */

router.get("/list", async (req, res, next) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id).populate("favoritesIssues");
    return res.json(user.favoritesIssues);
  } catch (error) {
    return res.status(401).json({ status: "Not found." });
  }
});

module.exports = router;
