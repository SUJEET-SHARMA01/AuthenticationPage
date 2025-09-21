import mongoose from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    require: [true, "Please enter username"],
  },
  email: {
    type: String,
    require: [true, "please enter your email"],
  },
  password: {
    type: String,
    require: [true, "please enter your password"],
  },
  isVerified: {
    type: Boolean,
    deflate: false,
  },
  isAdmin: {
    type: Boolean,
    deflate: false,
  },
  forgetPAsswordToken: String,
  forgetPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const user = mongoose.model("user", userSchema);
export default user;
