const express = require("express");
const User = require("../../models/User");
const Issue = require("../../models/Issue");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn } = require("../../middleware/isLogged");

/* ISSUE  add wanted */
router.post("/add/:wantedid", isLoggedIn(), async (req, res, next) => {
  try {
    const { wantedid } = req.params;
    const id = req.user._id;
    const issue = await Issue.findById(wantedid);
    await User.findByIdAndUpdate(id, {
      $addToSet: { wantedIssues: issue },
    });
    return res.status(200).json({
      status: 200,
      message: "Issue added successfully to user wanted.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error adding issue to wanted",
      error,
    });
  }
});

/* ISSUE  remove wanted */
router.delete("/remove/:wantedid", isLoggedIn(), async (req, res, next) => {
  try {
    const { wantedid } = req.params;
    const id = req.user._id;
    await User.findById(id)
      .then(async (user) => {
        const wantedArr = user.wantedIssues;
        const updatedArr = await Promise.all(
          wantedArr.filter((e) => e != wantedid)
        );
        await User.findByIdAndUpdate(id, {
          wantedIssues: updatedArr.map((issue) => issue._id),
        });
        return res.status(200).json({
          status: 200,
          message: "Issue removed successfully from user wanted arr.",
        });
      })
      .catch((err) => res.status(401).json({ status: "User not found" }));
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error removing issue from wanted",
      error,
    });
  }
});

/* ISSUE  get wanted */
router.get("/list", async (req, res, next) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id).populate("wantedIssues");
    return res.status(200).json(user.wantedIssues);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error showing wanted issues",
      error,
    });
  }
});

module.exports = router;
