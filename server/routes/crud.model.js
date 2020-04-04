const express = require("express");
const _ = require("lodash");
const { asyncController } = require("../middleware/asyncController");

//Function that retrieve a model and options and return a router
const crudGenerator = (
  Model,
  { createProtectFields, extraFieldsCreate, populateFields } = {
    createProtectFields: [],
    extraFieldsCreate: () => ({}),
    populateFields: []
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

  /* CRUD Create */
  router.post(
    "/create",
    asyncController(async (req, res, next) => {
      // NOTE: For security reasons, only allow input certain fields
      const data = {
        ..._.pick(req.body, createFields),
        ...extraFieldsCreate(req)
      };
      const obj = await Model.create(data);
      return res.json(obj);
    })
  );

  /* CRUD Edit */

  // router.post("/edit/:id", async (req, res, next) => {
  //   try {
  //     const id = req.params;
  //     const {
  //       name,
  //       birth,
  //       death,
  //       country,
  //       hometown,
  //       excerpt,
  //       description,
  //       picture
  //     } = req.body;
  //     await Professional.findByIdAndUpdate(id, {
  //       name,
  //       birth,
  //       death,
  //       country,
  //       hometown,
  //       excerpt,
  //       description,
  //       picture
  //     });
  //     return res.json({ status: "Profile updated", id });
  //   } catch (error) {
  //     return res.status(401).json({ status: "Not Found" });
  //   }
  // });

  /* CRUD Delete */
  router.get(
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
