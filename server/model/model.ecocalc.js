import mongoose from "mongoose";

const ecocalcSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    footprint: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default ecocalcSchema;
