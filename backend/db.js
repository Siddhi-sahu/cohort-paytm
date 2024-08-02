import mongoose, { Schema } from "mongoose";

mongoose.connect(
  "mongodb+srv://himani:fSKP1zLzZqXtMshG@cluster0.ujlkouj.mongodb.net/paytmDb"
);

const userSchema = new mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
