const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const professionalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      index: true,
      required: "Name is required",
    },
    birth: { type: Date, default: Date.now },
    death: { type: Date, default: Date.now },
    country: {
      type: String,
    },
    hometown: {
      type: String,
    },
    excerpt: {
      type: String,
    },
    description: {
      type: String,
    },
    issues: {
      type: [{ type: ObjectId, ref: "Issue" }],
      default: [],
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

const Professional = mongoose.model("Professional", professionalSchema);

Professional.collection.createIndexes([
  {
    key: { name: 1 },
    name: "name",
  },
]);

module.exports = Professional;
