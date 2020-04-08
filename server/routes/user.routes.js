const express = require("express");
const User = require("../models/User");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn } = require("../middleware/isLogged");
const { isAdminRole } = require("../middleware/isRole");

/* USER Get single user */
router.get("/:id", isLoggedIn(), async (req, res, next) => {
  const { id } = req.params;
  User.findOne({ _id: id })
    .populate("wantedIssues")
    .populate("favoritesIssues")
    .populate("favoritesProfessionals")
    .populate("favoritesPublishers")
    .populate("favoritesCharacters")
    .populate("favoriteIssues")
    .populate("contacts")
    .then((user) => {
      res.status(200).json({ message: "User retrived", user });
    })
    .catch((err) => res.status(500).json(err));
});

/* USER Get users */
router.get("/", isAdminRole(), (req, res, next) => {
  User.find()
    .populate("wantedIssues")
    .populate("favoritesIssues")
    .populate("favoritesProfessionals")
    .populate("favoritesPublishers")
    .populate("favoritesCharacters")
    .populate("favoriteIssues")
    .populate("contacts")
    .then((users) => {
      res.status(200).json({ message: "Users retrived", users });
    })
    .catch((err) => res.status(500).json(err));
});

/* USER edit single user by admin */
router.put("/:id", isAdminRole(), (req, res, next) => {
  const { id } = req.params;
  User.findOneAndUpdate({ _id: id }, req.body, { new: true })
    .then((data) => res.status(200).json({ message: "User updated", data }))
    .catch((err) => res.status(500).json(err));
});

/* USER delete user by admin */
router.delete("/:id", isAdminRole(), (req, res, next) => {
  const { id } = req.params;
  User.findByIdAndRemove({ _id: id }, req.body, { new: true })
    .then((data) => res.status(200).json({ message: "User deleted", data }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
