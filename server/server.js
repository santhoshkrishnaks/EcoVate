import express from "express";
import bodyParser from "body-parser";
import login from "./Controllers/user.controller.js";
import { connectdb } from "./config/database.js";
import { landController } from "./Controllers/landing.controller.js";
import corprouter from "./Routes/route.ecocorp.js";
import cors from "cors";
<<<<<<< HEAD
import router from "./routes/ecoconnect.route.js";
import newsroute from '../server/routes/route.econews.js';
=======
import router from "./Routes/route.ecoconnect.js";
import fundrouter from "./Routes/route.ecofund.js";
import calcRouter from "./Routes/route.ecocalc.js"
import ecovisionrouter from "./Routes/route.ecovision.js";
import volunteerrouter from "./Routes/route.volunteer.js";


>>>>>>> e9036aa99915c8f6682f9f69451d3a2d2dafd5ec
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
connectdb();
app.use(cors());
<<<<<<< HEAD
app.use('/',router)
app.use('/',newsroute)
=======


app.use('/',router);
app.use('/',ecovisionrouter);
app.use('/',volunteerrouter);
>>>>>>> e9036aa99915c8f6682f9f69451d3a2d2dafd5ec
app.get("/", landController);
app.post("/api/webhook", bodyParser.raw({ type: "application/json" }), login);
app.use("/",corprouter);
app.use("/",fundrouter);
app.use("/",calcRouter)
app.listen(5000, () => {
  console.log(`listening on port 5000`);
});
