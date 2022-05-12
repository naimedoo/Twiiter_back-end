const mongoose = require("mongoose");
const userModel = require("./uer.model");

const userSchema = new mongoose.Schema({
  tweet: String,
  phoneNumber: Number,
  username: String,
  followers: [
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  ],
  retweet: String,
});
module.exports = mongoose.model("User", userSchema);
