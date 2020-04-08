const express = require("express");
const router = express.Router();
const { crudGenerator } = require("./crud.model");
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
router.use(
  "/professional",
  crudGenerator(Professional, {
    createProtectFields: ["issues"],
    populateFields: ["issues"],
    extraFieldsCreate: async (req) => {
      if (!req.user) {
        throw new Error("To create a frase you have to login first");
      }
      const { issues } = req.body;
      const arrIssues = issues.split("|").map((id) => id.trim());
      console.log("arrIssues --->>>", arrIssues);
      const issuesObj = await Promise.allSettled(
        arrIssues
          .filter((issue) => issue)
          .map((issue) => {
            return Issue.findOneAndUpdate(
              { title: issue },
              {
                new: true,
                upsert: true,
              }
            );
          })
      );
      console.log("issuesObj --->>>", issuesObj);

      const issueIds = issuesObj.map((issue) => issue.value._id);
      console.log("issueIds --->>>", issueIds);
      return {
        issues: issueIds,
      };
    },
  })
);

router.use("/contact", require("./user/contact.routes"));
router.use("/auth", require("./auth/auth.routes"));
router.use("/user", require("./user/user.routes"));

// GET home page
router.get("/", (req, res, next) => {
  res.json({ status: "Welcome here!" });
});

module.exports = router;

// app.use(
//     "/frase",
//     crudGenerator(FraseModel, {
//       createProtectFields: ["creator"],
//       populateFields: ["ta", "creator"],
//       extraFieldsCreate: req => {
//         if (!req.user)
//           throw new Error("To create a frase you have to login first");
//         return {
//           creator: req.user._id
//         };
//       }
//     })
//   );
