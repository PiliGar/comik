const mongoose = require("mongoose");

const professionalSchema = new mongoose.Schema(
  {
    _id: Number,
    name: {
      type: String,
      unique: true,
      index: true,
      required: "Name is required"
    },
    birth: {
      type: String
    },
    death: {
      type: String
    },
    country: {
      type: String
    },
    hometown: {
      type: String
    },
    excerpt: {
      type: String
    },
    description: {
      type: String
    },
    picture: {
      type: String,
      default:
        "https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg"
    }
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
      }
    }
  }
);

const Professional = mongoose.model("Professional", professionalSchema);

Professional.collection.createIndexes([
  {
    key: { name: 1 },
    name: "name"
  }
]);

module.exports = Professional;
