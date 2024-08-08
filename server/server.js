const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { Webhook } = require("svix");
const bodyParser = require("body-parser");
const user = require("./model/model.user.js");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://admin:Ecovate@ecovate.5mgaa.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Ecovate"
  )
  .then(() => {
    console.log("Connected to mongoose");
    app.listen(5000, () => {
      console.log("NodeApi app is running on localhost 5000");
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

app.get("/api/webhooks", (req, res) => {
  res.send("Hello World");
});

app.post(
  "/api/webhooks",
  // This is a generic method to parse the contents of the payload.
  // Depending on the framework, packages, and configuration, this may be
  // different or not required.
  bodyParser.raw({ type: "application/json" }),
  async function (req, res) {
    // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
    const WEBHOOK_SECRET = "whsec_vDqKKmbRi9fo75tUD3Djnmp992BNdlXk";
    if (!WEBHOOK_SECRET) {
      throw new Error("You need a WEBHOOK_SECRET in your .env");
    }

    // Get the headers and body
    const headers = req.headers;
    const payload = req.body.toString();

    // Get the Svix headers for verification
    const svix_id = headers["svix-id"];
    const svix_timestamp = headers["svix-timestamp"];
    const svix_signature = headers["svix-signature"];

    // If there are no Svix headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response("Error occured -- no svix headers", {
        status: 400,
      });
    }

    // Create a new Svix instance with your secret.
    const wh = new Webhook("whsec_vDqKKmbRi9fo75tUD3Djnmp992BNdlXk");

    let evt;

    // Attempt to verify the incoming webhook
    // If successful, the payload will be available from 'evt'
    // If the verification fails, error out and  return error code
    try {
      evt = wh.verify(payload, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      });
    } catch (err) {
      console.log("Error verifying webhook:", err.message);
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }

    // Do something with the payload
    // For this guide, you simply log the payload to the console
    const { id } = evt.data;
    const eventType = evt.type;
    console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
    console.log("Webhook body:", evt.data);

    return res.status(200).json({
      success: true,
      message: "Webhook received",
    });
  }
);
// Catch-all for 404 errors
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});
