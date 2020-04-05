const express = require("express");
const User = require("../models/User");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn } = require("../middleware/isLogged");

/* CONTACTS get contacts */
router.get("/list", isLoggedIn(), async (req, res, next) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id).populate("contacts");
    return res.json(user.contacts);
  } catch (error) {
    return res.status(401).json(error);
  }
});

/* CONTACTS add contact */
router.post("/add/:contactid", isLoggedIn(), async (req, res, next) => {
  try {
    const { contactid } = req.params;
    const id = req.user._id;
    const contact = await User.findById(contactid);
    await User.findByIdAndUpdate(id, {
      $addToSet: { contacts: contact }
    });
    return res.json({ status: "Contact added to user contacts arr." });
  } catch (error) {
    return res.status(401).json({ status: "Not found." });
  }
});

/* CONTACTS remove contact */
router.post("/remove/:contactid", isLoggedIn(), async (req, res, next) => {
  try {
    const { contactid } = req.params;
    const id = req.user._id;
    await User.findById(id)
      .then(async contact => {
        const contactsArr = contact.contacts;
        const updatedArr = await Promise.all(
          contactsArr.filter(e => e != contactid)
        );
        await User.findByIdAndUpdate(id, {
          contacts: updatedArr.map(contact => contact._id)
        });
        return res.json({ status: "Contact removed from user contacts arr." });
      })
      .catch(err => res.status(401).json({ status: "Not found again." }));
  } catch (error) {
    return res.status(401).json({ status: "Not found." });
  }
});

module.exports = router;
