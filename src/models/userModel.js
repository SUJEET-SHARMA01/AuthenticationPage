import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please enter username"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true, // prevents duplicate emails
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgetPasswordToken: String,
  forgetPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

// Prevent overwrite error in Next.js hot reload
const user = mongoose.models.users || mongoose.model("users", userSchema);
export default user;
