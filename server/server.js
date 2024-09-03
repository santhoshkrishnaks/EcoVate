import express from "express";
import { connectdb } from "./config/database.js";
import corprouter from "./Routes/route.ecocorp.js";
import cors from "cors";
import connectrouter from "./Routes/route.ecoconnect.js";
import fundrouter from "./Routes/route.ecofund.js";
import newsrouter from "./Routes/route.econews.js";
import calcRouter from "./Routes/route.ecocalc.js";
import ecovisionrouter from "./Routes/route.ecovision.js";
import volunteerrouter from "./Routes/route.volunteer.js";
import commentrouter from "./Routes/route.comments.js";
import likerouter from "./Routes/route.likes.js";
import userrouter from './Routes/route.user.js'


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


connectdb();

app.use("/", connectrouter);    
app.use("/", ecovisionrouter);
app.use("/", volunteerrouter);
app.use("/", newsrouter);
app.use('/',userrouter)
app.use("/", corprouter);
app.use("/", fundrouter);
app.use("/", calcRouter);
app.use("/", commentrouter);
app.use("/", likerouter); 



app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
