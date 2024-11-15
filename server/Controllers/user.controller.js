import { User, connectdb } from "../config/database.js";
import { Webhook } from "svix";
import dotenv from "dotenv";
dotenv.config();

export const login = async (req, res) => {
  try {
    const payloadString = JSON.stringify(req.body); // Ensure correct format

    const svixHeaders = req.headers; // Pass headers as received

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);

    const evt = wh.verify(payloadString, svixHeaders);

    const { id, ...attributes } = evt.data;
    const eventType = evt.type;

    if (eventType === "user.created") {
      const user = new User({
        clerkUserId: id,
        firstName: attributes.first_name,
        lastName: attributes.last_name,
        userName: attributes.username,
        profileImg: attributes.profile_image_url,
        emailAddress: attributes.email_addresses[0].email_address,
      });
      await user.save();
      console.log("User created:", user);
    } else if (eventType === "user.deleted") {
      const user = await User.findOneAndDelete({ clerkUserId: id });
      if (!user) {
        console.error("User not found for deletion");
        return res.status(500).json({ message: "User not found" });
      }
      console.log("User deleted:", user);
    } else if (eventType === "user.updated") {
      const updateData = {
        firstName: attributes.first_name,
        lastName: attributes.last_name,
        userName: attributes.username,
        profileImg: attributes.profile_image_url,
        emailAddress: attributes.email_addresses[0].email_address,
      };
      const user = await User.findOneAndUpdate(
        { clerkUserId: id },
        updateData,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!user) {
        console.error("User not found for update");
        return res.status(500).json({ message: "User not found" });
      }
      console.log("User updated:", user);
    }

    res.status(200).json({
      success: true,
      message: "Webhook received",
    });
  } catch (err) {
    console.error("Error processing webhook:", err.message);
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const getuser = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ userName: new RegExp(username, "i") });
    if (!user) {
      res.status(404).json("Not Found");
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
