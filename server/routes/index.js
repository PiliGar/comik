const express = require("express");
const router = express.Router();
const { crudGenerator } = require("./crudGenerator.routes");
const Professional = require("../models/Professional");
const Issue = require("../models/Issue");
const Publisher = require("../models/Publisher");
const Character = require("../models/Character");

router.use("/character/favorite", require("./favorites/character.routes"));
router.use("/character", crudGenerator(Character));
router.use("/publisher/favorite", require("./favorites/publisher.routes"));
router.use("/publisher", crudGenerator(Publisher));
router.use("/issue/wanted", require("./wanted/issue.routes"));
router.use("/issue/favorite", require("./favorites/issue.routes"));
router.use("/issue", crudGenerator(Issue));
router.use(
  "/professional/favorite",
  require("./favorites/professional.routes")
);
router.use("/professional", crudGenerator(Professional));
router.use("/contact", require("./contact.routes"));
router.use("/auth", require("./auth.routes"));
router.use("/user", require("./user.routes"));

// GET home page
router.get("/", (req, res, next) => {
  res.json({ status: "Welcome here!" });
});

module.exports = router;
