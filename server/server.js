import express from "express";
import bodyParser from "body-parser";
import login from "./Controllers/userController.js";
import { connectdb } from "./config/database.js";
import { landController } from "./Controllers/landController.js";
import corprouter from "./Routes/route.ecocorp.js";
import cors from "cors";
const app = express();
app.use(express.json());
connectdb();
app.use(cors({
  origin: 'http://localhost:5173', // Allow only your frontend
  methods: 'GET,POST,PUT,DELETE',  // Allow specific methods
  allowedHeaders: 'Content-Type,Authorization', // Allow specific headers
}));

app.get("/", landController);
app.post("/api/webhook", bodyParser.raw({ type: "application/json" }), login);
app.use("/api",corprouter)


app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
