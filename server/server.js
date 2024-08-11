import express from "express";
import bodyParser from "body-parser";
import login from "./Controllers/userController.js";
import { connectdb } from "./config/database.js";
import { landController } from "./Controllers/landController.js";
import corprouter from "./Routes/route.ecocorp.js";
import cors from "cors";
import router from "./routes/ecoconnect.route.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
connectdb();
app.use(cors());
app.use('/ecoconnect',router)
app.get("/", landController);
app.post("/api/webhook", bodyParser.raw({ type: "application/json" }), login);
app.use("/api",corprouter);
app.listen(5000, () => {
  console.log(`listening on port 5000`);
});
