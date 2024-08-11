import express from "express";
import bodyParser from "body-parser";
import login from "./Controllers/user.controller.js";
import { connectdb } from "./config/database.js";
import { landController } from "./Controllers/landing.controller.js";
import corprouter from "./Routes/route.ecocorp.js";
import cors from "cors";
import router from "./routes/ecoconnect.route.js";
import ecovisionrouter from "./Routes/route.ecovision.js";
import volunteerrouter from "./Routes/route.volunteer.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
connectdb();
app.use(cors());


app.use('/ecoconnect',router);
app.use('/',ecovisionrouter);
app.use('/',volunteerrouter);
app.get("/", landController);
app.post("/api/webhook", bodyParser.raw({ type: "application/json" }), login);
app.use("/",corprouter);


app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
