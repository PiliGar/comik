const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      index: true,
      required: "Title is required",
    },
    apiId: {
      type: Number,
    },
    issueNumber: {
      type: String,
    },
    coverDate: {
      type: String,
    },
    volume: {
      type: String,
    },
    excerpt: {
      type: String,
    },
    description: {
      type: String,
    },
    imageName: {
      type: String,
    },
    imageSrc: {
      type: String,
      default:
        "https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Issue = mongoose.model("Issue", issueSchema);

Issue.collection.createIndexes([
  {
    key: { title: 1 },
    name: "title",
  },
]);

module.exports = Issue;
