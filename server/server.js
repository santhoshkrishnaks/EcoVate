import express from "express";
import bodyParser from "body-parser";
import login from "./Controllers/user.controller.js";
import { connectdb } from "./config/database.js";
import { landController } from "./Controllers/landing.controller.js";
import corprouter from "./Routes/route.ecocorp.js";
import cors from "cors";
import router from "./routes/route.ecoconnect.js";
import fundrouter from "./Routes/route.ecofund.js";
import newsrouter from './routes/route.econews.js'
import calcRouter from "../server/routes/route.ecocalc.js";
import ecovisionrouter from "./Routes/route.ecovision.js";
import volunteerrouter from "./Routes/route.volunteer.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectdb();
app.use(cors());

app.use("/", router);
app.use("/", ecovisionrouter);
app.use("/", volunteerrouter);
app.use("/", newsrouter);
app.get("/", landController);
app.post("/api/webhook", bodyParser.raw({ type: "application/json" }), login);
app.use("/", corprouter);
app.use("/", fundrouter);
app.use("/", calcRouter);
app.listen(5000, () => {
  console.log(`listening on port 5000`);
});
