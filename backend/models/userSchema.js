import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  title: String,
  area: String,
  bio: String,
  image: String,
});

const User = mongoose.model("users", userSchema);

export default User;
