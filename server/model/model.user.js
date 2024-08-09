import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
    },
    profileImg: {
      type: String,
    },
    emailAddress: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default userSchema;
