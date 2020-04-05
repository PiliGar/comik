const express = require("express");
const router = express.Router();
const { crudGenerator } = require("./crud.model");
const CharacterModel = require("../models/Character");

//Crud Generator

router.use("/character", crudGenerator(CharacterModel));
router.use("/contact", require("./contact.routes"));
router.use("/user", require("./user.routes"));
router.use("/auth", require("./auth.routes"));

// GET home page
router.get("/", (req, res, next) => {
  res.json({ status: "Welcome here!" });
});

module.exports = router;
