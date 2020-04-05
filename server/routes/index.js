const express = require("express");
const router = express.Router();

router.use("/character", require("./character.routes"));
router.use("/publisher", require("./publisher.routes"));
router.use("/issue", require("./issue.routes"));
router.use("/professional", require("./professional.routes"));
router.use("/contact", require("./contact.routes"));
router.use("/auth", require("./auth.routes"));
router.use("/user", require("./user.routes"));

// GET home page
router.get("/", (req, res, next) => {
  res.json({ status: "Welcome here!" });
});

module.exports = router;
