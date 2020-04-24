const express = require("express");
const User = require("../../models/User");
const router = express.Router();
const _ = require("lodash");
const { asyncController } = require("../../middleware/asyncController");
const { isLoggedIn } = require("../../middleware/isLogged");
const { isAdminRole } = require("../../middleware/isRole");
const uploadCloud = require("../../config/cloudinary.js");

/* USER Avatar */

router.post(
  "/profilepic",
  uploadCloud.single("picture"),
  async (req, res, next) => {
    console.log(req.file);
    const user = req.user;
    console.log("QUIEN", user.name);
    console.log("ID", user.id);
    //user.imageSrc = req.file.secure_url;
    //const updatedUser = await user.save();
    const data = {
      imageSrc: req.file.secure_url,
    };
    const updatedUser = await User.findOneAndUpdate({ _id: user.id }, data, {
      new: true,
    });
    console.log("BACK", updatedUser);
    return res.json({
      status: 200,
      message: "Uploaded completed",
      user: updatedUser,
    });
  }
);

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
router.get("/", (req, res, next) => {
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
