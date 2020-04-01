const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      index: true,
      required: "Name is required"
    },
    alias: {
      type: String
    },
    original_name: {
      type: String
    },
    publisher: {
      type: String,
      required: "Publisher is required"
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

const Character = mongoose.model("Character", characterSchema);

Character.collection.createIndexes([
  {
    key: { name: 1 },
    name: "name"
  }
]);

module.exports = Character;
