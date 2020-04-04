const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_PATTERN = /^[a-zA-Z]\w{3,14}$/;
const { hashPassword } = require("../lib/hashing");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name is required",
      unique: true,
      index: true
    },
    alias: {
      type: String,
      required: "Alias is required"
    },
    username: {
      type: String,
      trim: true,
      match: [EMAIL_PATTERN, "Please fill a valid email address"],
      sparse: true,
      unique: true,
      index: true,
      default: null,
      lowercase: true
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      match: [PASSWORD_PATTERN, "Invalid password pattern"]
    },
    avatar: {
      type: String,
      default:
        "https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg"
    },
    role: { type: String, default: "subscriber" },
    wantedIssues: {
      type: [{ type: Schema.Types.ObjectId, ref: "Issue" }],
      default: []
    },
    favoritesIssues: {
      type: [{ type: ObjectId, ref: "Issue" }],
      default: []
    },
    favoritesProfessionals: {
      type: [{ type: ObjectId, ref: "Professional" }],
      default: []
    },
    favoritesPublishers: {
      type: [{ type: ObjectId, ref: "Publisher" }],
      default: []
    },
    favoritesCharacters: {
      type: [{ type: ObjectId, ref: "Character" }],
      default: []
    },
    favoriteIssues: {
      type: [{ type: ObjectId, ref: "Issue" }],
      default: []
    },
    contacts: {
      type: [{ type: ObjectId, ref: "User" }],
      default: []
    },
    visits: { type: Number, default: 0 }
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
        return ret;
      }
    }
  }
);

userSchema.pre("save", async function(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  user.password = await hashPassword(user.password);
  next();
});

const User = mongoose.model("User", userSchema);
//"User" will be the ref

User.collection.createIndexes([
  {
    key: { username: 1 },
    name: "username"
  }
]);

module.exports = User;
