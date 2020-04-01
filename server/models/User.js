const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const SALT_WORK_FACTOR = 10;
const IMAGE_URL = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg)/g;
const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
const userSchema = new mongoose.Schema(
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
    email: {
      type: String,
      trim: true,
      match: [EMAIL_PATTERN, "Please fill a valid email address"],
      sparse: true,
      unique: false,
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
    wanted_issues: [{ type: Schema.Types.ObjectId, ref: "Issues" }],
    favorites_issues: [{ type: Schema.Types.ObjectId, ref: "Issues" }],
    favorites_professionals: [
      { type: Schema.Types.ObjectId, ref: "Professionals" }
    ],
    favorite_publishers: [{ type: Schema.Types.ObjectId, ref: "Publishers" }],
    favorites_characters: [{ type: Schema.Types.ObjectId, ref: "Characters" }],
    favorite_issues: [{ type: Schema.Types.ObjectId, ref: "Issues" }],
    contacts: [{ type: Schema.Types.ObjectId, ref: "Users" }],
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
userSchema.pre("save", function(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt
    .genSalt(SALT_WORK_FACTOR)
    .then(salt => {
      bcrypt.hash(user.password, salt).then(hash => {
        user.password = hash;
        next();
      });
    })
    .catch(error => next(error));
});

const User = mongoose.model("User", userSchema);

User.collection.createIndexes([
  {
    key: { username: 1 },
    name: "username"
  }
]);

module.exports = User;
