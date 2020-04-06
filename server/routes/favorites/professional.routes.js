const express = require("express");
const User = require("../../models/User");
const Professional = require("../../models/Professional");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn } = require("../../middleware/isLogged");

/* PROFESSIONAL  add favorite */
router.post("/add/:favoriteid", isLoggedIn(), async (req, res, next) => {
  try {
    const { favoriteid } = req.params;
    const id = req.user._id;
    const professional = await Professional.findById(favoriteid);
    await User.findByIdAndUpdate(id, {
      $addToSet: { favoritesProfessionals: professional },
    });
    return res.json({ status: "Professional added to user fav arr." });
  } catch (error) {
    return res.status(401).json({ status: "Not found." });
  }
});

/* PROFESSIONAL  remove favorite */
router.post("/remove/:favoriteid", isLoggedIn(), async (req, res, next) => {
  try {
    const { favoriteid } = req.params;
    const id = req.user._id;
    await User.findById(id)
      .then(async (user) => {
        const favoritesArr = user.favoritesProfessionals;
        const updatedArr = await Promise.all(
          favoritesArr.filter((e) => e != favoriteid)
        );
        await User.findByIdAndUpdate(id, {
          favoritesProfessionals: updatedArr.map(
            (professional) => professional._id
          ),
        });
        return res.json({
          status: "Professional removed from user favorites arr.",
        });
      })
      .catch((err) => res.status(401).json({ status: "Not found again." }));
  } catch (error) {
    return res.status(401).json({ status: "Not found." });
  }
});

/* PROFESSIONAL  get favorites */

router.get("/list", async (req, res, next) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id).populate("favoritesProfessionals");
    return res.json(user.favoritesProfessionals);
  } catch (error) {
    return res.status(401).json({ status: "Not found." });
  }
});

/* CRUD */

module.exports = router;
