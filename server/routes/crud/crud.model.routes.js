const express = require("express");
const _ = require("lodash");
const { asyncController } = require("../../middleware/asyncController");
const { isAdminRole } = require("../../middleware/isRole");
const uploadCloud = require("../../config/cloudinary.js");

//Function that retrieve a model and options and return a router
const crudGenerator = (
  Model,
  { createProtectFields, extraFieldsCreate, populateFields } = {
    createProtectFields: [],
    extraFieldsCreate: () => ({}),
    populateFields: [],
  }
) => {
  //Generates a new router
  const router = express.Router();

  const allFields = Object.keys(Model.schema.paths);
  const createFields = _.without(
    allFields,
    ...["_id", "__v", "createdAt", "updatedAt", ...createProtectFields]
  );

  //Editable fields
  router.get(
    "/fields",
    asyncController(async (req, res, next) => {
      return res
        .status(200)
        .json({ message: "Fields available to create", createFields });
    })
  );

  /* CRUD Retrieve */
  router.get("/", async (req, res, next) => {
    const objs = await Model.find().populate(populateFields);
    return res
      .status(200)
      .json({ message: "All retrieved successfully", objs });
  });

  /* CRUD Retrieve one */
  router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    const obj = await Model.findById(id).populate(populateFields);
    return res.status(200).json({ message: "Retrieved one successfully", obj });
  });

  /* CRUD Create */
  //TODO insert cloudinary
  router.post(
    "/create",
    uploadCloud.single("picture"),
    asyncController(async (req, res, next) => {
      //   const imgPath = req.file.url;
      //   const imgName = req.file.originalname;
      const imgPath = "path.jpg";
      const imgName = "picture";
      const data = {
        ..._.pick(req.body, createFields),
        ...extraFieldsCreate(req),
        imgPath,
        imgName,
      };
      console.log("--->>> Create data:", data);
      const obj = await Model.create(data);
      return res.status(200).json({ message: "Created successfully", obj });
    })
  );

  /* CRUD Edit */
  router.put(
    "/edit/:id",
    uploadCloud.single("picture"),
    asyncController(async (req, res, next) => {
      const { id } = req.params;
      //   const imgPath = req.file.url;
      //   const imgName = req.file.originalname;
      const imgPath = "path.jpg";
      const imgName = "picture";

      const data = {
        ..._.pick(req.body, createFields),
        ...extraFieldsCreate(req),
        imgPath,
        imgName,
      };
      console.log("--->>> Create data:", data);
      const obj = await Model.findOneAndUpdate({ _id: id }, data, {
        new: true,
      });
      return res.status(200).json({ message: "Updated successfully", obj });
    })
  );

  /* CRUD Delete */
  router.delete(
    "/delete/:id",
    asyncController(async (req, res, next) => {
      const { id } = req.params;
      await Model.findByIdAndRemove(id);
      return res.status(200).json({ message: "Deleted successfully", id });
    })
  );

  return router;
};

module.exports = { crudGenerator };
