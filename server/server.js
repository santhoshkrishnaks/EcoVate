import express from "express";
import dotenv from "dotenv";
import { Webhook } from "svix";
import mongoose from "mongoose";
import User from "./model/model.user.js";
const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB");
    app.listen(5000, () => {
      console.log(`listening on port 5000`);
    });
  })
  .catch((err) => console.log(err.message));

app.get("/", (req, res) => {
  res.send("Hi This is Santhosh");
});
app.use(express.json());
app.post(
  "/api/webhook",
  express.raw({ type: "application/json" }),
  async function (req, res) {
    try {
      const payloadString = req.body.toString();

      const svixHeaders = req.headers;

      const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);

      const evt = wh.verify(payloadString, svixHeaders);

      const { id, ...attributes } = evt.data;

      const eventType = evt.type;

      if (eventType === "user.created") {
        let firstName = attributes.first_name;

        let lastName = attributes.last_name;

        let email = attributes.email_addresses[0].email_address;

        let img = attributes.profile_image_url;

        let usernam = attributes.username;

        const user = new User({
          clerkUserId: id,
          firstName: firstName,
          lastName: lastName,
          userName: usernam,
          profileImg: img,
          emailAddress: email,
        });
        try {
          await user.save();
          console.log("User is created");
        } catch (err) {
          console.error("Error saving user:", err.message);
        }
      } else if (eventType === "user.deleted") {
        const id1 = await User.findOneAndDelete({ clerkUserId: id });
        if (!id1) {
          return res.status(404).json({ message: "User not found" });
        }
        console.log("delete");
      } else if (eventType === "user.updated") {
        const updateData = {
          firstName: attributes.first_name,
          lastName: attributes.last_name,
          userName: attributes.username,
          profileImg: attributes.profile_image_url,
          emailAddress: attributes.email_addresses[0].email_address,
        };
        const id1 = await User.findOneAndUpdate(
          { clerkUserId: id },
          updateData,
          { new: true, runValidators: true }
        );
        if (!id1) {
          return res.status(404).json({ message: "User not found" });
        }
        console.log("Updated");
      }
      res.status(200).json({
        success: true,
        message: "Webhook received",
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }
);
