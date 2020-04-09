const express = require("express");
const router = express.Router();
const { crudGenerator } = require("./crud/crud.model.routes");
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
router.use("/professional", require("./crud/crud.professional.routes"));
router.use("/contact", require("./user/contact.routes"));
router.use("/auth", require("./auth/auth.routes"));
router.use("/user", require("./user/user.routes"));

// GET home page
router.get("/", (req, res, next) => {
  res.json({ status: "Welcome comik!" });
});

module.exports = router;
