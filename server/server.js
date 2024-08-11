import express from "express";
import bodyParser from "body-parser";
import login from "./Controllers/user.controller.js";
import { connectdb } from "./config/database.js";
import { landController } from "./Controllers/landing.controller.js";
import corprouter from "./Routes/route.ecocorp.js";
import cors from "cors";
import router from "./Routes/route.ecoconnect.js";
import fundrouter from "./Routes/route.ecofund.js";
import calcRouter from "./Routes/route.ecocalc.js"
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
connectdb();
app.use(cors());
app.use('/',router)
app.get("/", landController);
app.post("/api/webhook", bodyParser.raw({ type: "application/json" }), login);
app.use("/",corprouter);
app.use("/",fundrouter);
app.use("/",calcRouter)
app.listen(5000, () => {
  console.log(`listening on port 5000`);
});
