const express = require("express");
const _ = require("lodash");
const { asyncController } = require("../middleware/asyncController");
const User = require("../models/User");

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
      return res.json({ createFields });
    })
  );

  /* CRUD Retrieve */
  router.get("/", async (req, res, next) => {
    const objs = await Model.find().populate(populateFields);
    return res.json(objs);
  });

  /* CRUD Retrieve one */
  router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    const objs = await Model.findById(id).populate(populateFields);
    return res.json(objs);
  });

  /* CRUD Create */
  router.post(
    "/create",
    asyncController(async (req, res, next) => {
      // NOTE: For security reasons, only allow input certain fields
      const data = {
        ..._.pick(req.body, createFields),
        ...extraFieldsCreate(req),
      };
      const obj = await Model.create(data);
      return res.json(obj);
    })
  );

  /* CRUD Edit */
  router.put(
    "/edit/:id",
    asyncController(async (req, res, next) => {
      const { id } = req.params;
      // NOTE: For security reasons, only allow input certain fields
      const data = {
        ..._.pick(req.body, createFields),
        ...extraFieldsCreate(req),
      };
      const obj = await Model.findOneAndUpdate({ _id: id }, data, {
        new: true,
      });
      return res.json(obj);
    })
  );

  /* CRUD Delete */
  router.post(
    "/delete/:id",
    asyncController(async (req, res, next) => {
      const { id } = req.params;
      await Model.findByIdAndRemove(id);
      return res.json({ status: "Deleted", id });
    })
  );

  return router;
};

module.exports = { crudGenerator };
