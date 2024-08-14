import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    post_id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
commentSchema.statics.findById = function (id) {
  return this.where({ post_id: new RegExp(id, "i") });
};
export default commentSchema;
