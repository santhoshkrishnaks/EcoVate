import express from "express";
import bodyParser from "body-parser";
import login from "./Controllers/userController.js";
import { connectdb } from "./config/database.js";
import { landController } from "./Controllers/landController.js";
import ecoconnectroutes from './routes/ecoconnect.route.js';
const app = express();
connectdb();
app.use(express.json());
app.use('/api',ecoconnectroutes)
app.get("/", landController);
app.post("/api/webhook", bodyParser.raw({ type: "application/json" }), login);
app.listen(5000, () => {
  console.log(`listening on port 5000`);
});
