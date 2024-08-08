import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import {Webhook} from 'svix'
import bodyParser from 'body-parser'
dotenv.config();
mongoose.connect("mongodb+srv://admin:Ecovate@ecovate.5mgaa.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Ecovate").then(() => {
    console.log("Connected to mongoose");
    app.listen(5000, () => {
      console.log("NodeApi app is running on localhost 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
const app= express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/api/webhooks',
  bodyParser.raw({ type: 'application/json' }),
  async function (req, res) {
    try {
      const payloadString = req.body.toString();
      const svixHeaders = req.headers;

      const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);
      const evt = wh.verify(payloadString, svixHeaders);

      const { id, ...attributes } = evt.data;

      const eventType = evt.type;

      if (eventType === 'user.created') {
        console.log('User is created');
        console.log(`User ${id} is ${eventType}`);
        console.log(attributes);
      }

      res.status(200).json({
        success: true,
        message: 'Webhook received',
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }
);
