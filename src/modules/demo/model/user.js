const mongoose = require("mongoose");
const { composeWithMongoose } = require("graphql-compose-mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    profileImage: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = {
  UserSchema: mongoose.model("users", UserSchema),
  UserTC: composeWithMongoose(mongoose.model("users", UserSchema)),
};
