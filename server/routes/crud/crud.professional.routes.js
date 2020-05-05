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
  const professionals = await Professional.find();
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

/* PROFESSIONAL Create*/
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
      excerpt,
      description,
    } = req.body;
    const newProfessional = await Professional.create({
      name,
      birth,
      death,
      country,
      hometown,
      excerpt,
      description,
      imageSrc: req.file.secure_url,
    });
    return res.status(200).json({
      status: "200",
      message: `Professional ${newProfessional.name} created successfully`,
      newProfessional,
    });
  })
);

/* CRUD Edit */
router.put(
  "/edit/:id",
  uploadCloud.single("picture"),
  asyncController(async (req, res, next) => {
    const { id } = req.params;
    console.log("QUE ES", req.file);
    const {
      name,
      birth,
      death,
      country,
      hometown,
      excerpt,
      description,
    } = req.body;
    const data = {
      name: name,
      birth: birth,
      death: death,
      country: country,
      hometown: hometown,
      excerpt: excerpt,
      description: description,
      imageSrc: req.file.secure_url,
    };
    const professional = await Professional.findOneAndUpdate(id, data, {
      new: true,
    });
    return res.status(200).json({
      status: 200,
      message: `Professional ${professional.name} updated successfully`,
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
      status: 200,
      message: `Professional: ${id} was successfully deleted`,
      id,
    });
  })
);

module.exports = router;
