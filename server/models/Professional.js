const mongoose = require("mongoose");

const professionalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      index: true,
      required: "Name is required"
    },
    birth: {
      type: String,
      required: "Birth is required"
    },
    death: {
      type: String
    },
    country: {
      type: String,
      required: "Country is required"
    },
    hometown: {
      type: String,
      required: "Hometown is required"
    },
    excerpt: {
      type: String,
      required: "Excerpt is required"
    },
    description: {
      type: String,
      required: "Description is required"
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
