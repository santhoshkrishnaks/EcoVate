import express from "express";
import bodyParser from "body-parser";
import login from "./Controllers/userController.js";
import { connectdb } from "./config/database.js";
import { landController } from "./Controllers/landController.js";
const app = express();
connectdb();
app.get("/", landController);
app.post("/api/webhook", bodyParser.raw({ type: "application/json" }), login);
app.listen(5000, () => {
  console.log(`listening on port 5000`);
});
