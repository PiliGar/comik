const express = require("express");
const User = require("../models/User");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn } = require("../middleware/isLogged");
const { isAdminRole } = require("../middleware/isRole");

/* USER Get users */

//---- >>>> TODO populate
router.get("/", isAdminRole(), (req, res, next) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.status(500).json(err));
});

/* USER Get single user */

//---- >>>> TODO populate
router.get("/:id", isLoggedIn(), (req, res, next) => {
  const id = req.user._id;
  User.findOne({ _id: id })
    .then(user => {
      res.json(user);
    })
    .catch(err => res.status(500).json(err));
});

/* USER edit single user by admin */

router.put("/:id", isAdminRole(), (req, res, next) => {
  const { id } = req.params;
  User.findOneAndUpdate({ _id: id }, req.body, { new: true })
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
