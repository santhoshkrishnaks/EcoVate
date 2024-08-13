import mongoose from "mongoose";

const likesSchema = mongoose.Schema({
  post_id: { type: String, required: true },
  username: { type: String, required: true },
  liked: { type: Boolean, required: false, default:true },
});
export default likesSchema;
