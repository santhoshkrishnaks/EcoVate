import dotenv from "dotenv";
import mongoose from "mongoose";
import commentSchema from "../model/model.comments.js";
import ecocalcSchema from "../model/model.ecocalc.js";
import ecoconnectSchema from "../model/model.ecoconnect.js";
import ecocorpSchema from "../model/model.ecocorp.js";
import ecofundSchema from "../model/model.ecofund.js";
import ecovisionSchema from "../model/model.ecovision.js";
import likesSchema from "../model/model.likes.js";
import newsSchema from "../model/model.news.js";
import userSchema from "../model/model.user.js";
import volunteerSchema from "../model/model.volunteer.js";


dotenv.config();


export const connectdb = () => {
  if (!process.env.MONGO_URI) {
    console.error("Mongodb uri is not defined");
    process.exit(1);
  }
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => console.log(err.message));
};



export const User = mongoose.model("User", userSchema);
export const EcoConnect = mongoose.model("EcoConnect", ecoconnectSchema);
export const EcoFund = mongoose.model("EcoFund", ecofundSchema);
export const Volunteer = mongoose.model("Volunteer", volunteerSchema);
export const EcoCorp = mongoose.model("EcoCorp", ecocorpSchema);
export const EcoCalc = mongoose.model("EcoCalc", ecocalcSchema);
export const EcoVision = mongoose.model("EcoVision", ecovisionSchema);
export const Comment = mongoose.model("Comment", commentSchema);
export const News = mongoose.model("News", newsSchema);
export const likes= mongoose.model("Likes",likesSchema); 
