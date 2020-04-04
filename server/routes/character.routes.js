const express = require("express");
const Character = require("../models/Character");

const router = express.Router();

router.get("/", (req, res, next) => {
  Character.find()
    .then(characters => {
      res.json(characters);
    })
    .catch(err => res.status(500).json(err));
});

router.post("/", (req, res, next) => {
  const newCharacter = new Character(req.body);
  newCharacter
    .save()
    .then(character => {
      res.json(character);
    })
    .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Character.findOne({ _id: id })
    .then(character => {
      res.json(character);
    })
    .catch(err => res.status(500).json(err));
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  Character.findOneAndUpdate({ _id: id }, req.body, { new: true })
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  Character.findOneAndRemove({ _id: id })
    .then(() => res.json({ message: "Removed succesfully" }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
