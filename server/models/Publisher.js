const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema(
  {
    _id: Number,
    name: {
      type: String,
      unique: true,
      index: true,
      required: "Name is required"
    },
    locationAddress: {
      type: String,
      required: "Address is required"
    },
    locationCity: {
      type: String,
      required: "City is required"
    },
    locationState: {
      type: String,
      required: "State is required"
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

const Publisher = mongoose.model("Publisher", publisherSchema);

Publisher.collection.createIndexes([
  {
    key: { name: 1 },
    name: "name"
  }
]);

module.exports = Publisher;
