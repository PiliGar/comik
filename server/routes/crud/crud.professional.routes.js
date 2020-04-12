const express = require("express");
const Professional = require("../../models/Professional");
const Issue = require("../../models/Issue");
const { asyncController } = require("../../middleware/asyncController");
const { isLoggedIn } = require("../../middleware/isLogged");
const { isAdminRole } = require("../../middleware/isRole");
const uploadCloud = require("../../config/cloudinary.js");
const router = express.Router();

/* PROFESSIONAL  retrieve */
router.get("/", async (req, res, next) => {
  const professionals = await Professional.find().populate("issues");
  return res.status(200).json({
    message: "All professionals retrieved successfully",
    professionals,
  });
});

/* PROFESSIONAL  get one */
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const professional = await Professional.findById(id).populate("issues");
  return res.status(200).json({
    message: `Professional ${professional.name} retrieved successfully`,
    professional,
  });
});

/* PROFESSIONAL Create */
//TODO insert cloudinary
router.post(
  "/create",
  uploadCloud.single("picture"),
  asyncController(async (req, res, next) => {
    const {
      name,
      birth,
      death,
      country,
      hometown,
      issues,
      excerpt,
      description,
    } = req.body;
    //   const imgSrc = req.file.url;
    //   const imgName = req.file.originalname;
    const imgSrc = "path.jpg";
    const imgName = "picture";
    const arrIssues = issues.split("|").map((title) => title.trim());
    console.log("arrIssues--->>>", arrIssues);
    const issuesObj = await Promise.all(
      arrIssues
        .filter((issue) => issue)
        .map((issue) => {
          return Issue.findOneAndUpdate(
            { title: issue },
            { title: issue },
            {
              new: true,
              upsert: true,
            }
          );
        })
    );
    console.log("issuesObj--->>>", issuesObj);

    const arrIds = issuesObj.map((issue) => issue._id);
    console.log("arrIds--->>>", arrIds);

    const data = {
      name: name,
      birth: birth,
      death: death,
      country: country,
      hometown: hometown,
      issues: arrIds,
      excerpt: excerpt,
      description: description,
    };
    const professional = await Professional.create(data).populate("issues");
    return res.status(200).json({
      message: `New professional ${professional.name} created successfully`,
      professional,
    });
  })
);

/* CRUD Edit */
router.put(
  "/edit/:id",
  uploadCloud.single("picture"),
  asyncController(async (req, res, next) => {
    const { id } = req.params;
    const {
      name,
      birth,
      death,
      country,
      hometown,
      issues,
      excerpt,
      description,
    } = req.body;
    //   const imgSrc = req.file.url;
    //   const imgName = req.file.originalname;
    const imgSrc = "path.jpg";
    const imgName = "picture";
    const arrIssues = issues.split("|").map((title) => title.trim());
    console.log("arrIssues--->>>", arrIssues);
    const issuesObj = await Promise.all(
      arrIssues
        .filter((issue) => issue)
        .map((issue) => {
          return Issue.findOneAndUpdate(
            { title: issue },
            { title: issue },
            {
              new: true,
              upsert: true,
            }
          );
        })
    );
    console.log("issuesObj--->>>", issuesObj);

    const arrIds = issuesObj.map((issue) => issue._id);
    console.log("arrIds--->>>", arrIds);
    const data = {
      name: name,
      birth: birth,
      death: death,
      country: country,
      hometown: hometown,
      issues: arrIds,
      excerpt: excerpt,
      description: description,
    };
    const professional = await Professional.findOneAndUpdate(id, data, {
      new: true,
    }).populate("issues");
    return res.status(200).json({
      message: `New professional ${professional.name} updated successfully`,
      professional,
    });
  })
);

/* CRUD Delete */
router.delete(
  "/delete/:id",
  asyncController(async (req, res, next) => {
    const { id } = req.params;
    await Professional.findByIdAndRemove(id);
    return res.status(200).json({
      message: `Professional: ${id} was successfully deleted`,
      id,
    });
  })
);

module.exports = router;