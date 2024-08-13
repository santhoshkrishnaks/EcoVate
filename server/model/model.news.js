import mongoose from "mongoose";

const newsSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: {
    type: String,
    required: true,
  },
});
export default newsSchema;
