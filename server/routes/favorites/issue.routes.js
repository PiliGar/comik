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
    return res
      .status(200)
      .json({ message: "Issue added successfully to user favorites." });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error adding issue to favorites",
      error,
    });
  }
});

/* ISSUE  remove favorite */
router.delete("/remove/:favoriteid", isLoggedIn(), async (req, res, next) => {
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
        return res.status(200).json({
          status: "Issue removed successfully from user favorites arr.",
        });
      })
      .catch((err) => res.status(401).json({ status: "User not found" }));
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error removing issue from favorites",
      error,
    });
  }
});

/* ISSUE  get favorites */
router.get("/list", async (req, res, next) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id).populate("favoritesIssues");
    return res.status(200).json(user.favoritesIssues);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error showing favorites issues",
      error,
    });
  }
});

module.exports = router;
