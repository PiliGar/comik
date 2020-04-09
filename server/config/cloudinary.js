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
    const userFile = userID ? `avatar${userID}` : file;
    cb(undefined, userFile);
  },
});

const uploadCloud = multer({ storage });
module.exports = uploadCloud;

const upload = multer({ dest: "uploads/" });
module.exports = upload;

// import multer from "multer";
// import cloudinaryStorage from "multer-storage-cloudinary";
// import cloudinary from "cloudinary";
// import _ from "lodash";

// const storage = cloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: "avatar",
//   allowedFormats: ["jpg", "png"],
//   filename: function (req, file, cb) {
//     const userID = _.get(req, "user._id");
//     const userFile = userID ? `avatar${userID}` : file;
//     cb(undefined, userFile);
//   },
// });

// export const uploadCloudinaryAvatar = multer({ storage });

// export const upload = multer({ dest: "uploads/" });

//----------------

// var cloudinary = require('cloudinary');
// var cloudinaryStorage = require('multer-storage-cloudinary');
// var express = require('express');
// var multer = require('multer');

// var app = express();

// var storage = cloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: 'folder-name',
//   allowedFormats: ['jpg', 'png'],
//   filename: function (req, file, cb) {
//     cb(undefined, 'my-file-name');
//   }
// });

// var parser = multer({ storage: storage });

// app.post('/upload', parser.array('images', 10), function (req, res) {
//   console.log(req.files);
// });
