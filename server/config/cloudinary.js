const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");
const _ = require("lodash");

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "comik",
  allowedFormats: ["jpg", "png"],
  filename: function (req, file, cb) {
    const userID = _.get(req, "user._id");
    const userFile = userID ? `picture${userID}` : file;
    cb(undefined, userFile);
  },
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
