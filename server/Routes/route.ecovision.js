import {
  getvision,
  postvision,
  approveVision,
  rejectVision,
} from "../Controllers/ecovision.controller.js";
import express from "express";
import authenticateToken from "../Middleware/auth.js";

const ecovisionrouter = express.Router();

ecovisionrouter.get("/ecovision",authenticateToken, getvision);
ecovisionrouter.post("/ecovision",authenticateToken, postvision);
ecovisionrouter.post("/approvevision",authenticateToken, approveVision);
ecovisionrouter.post("/rejectvision",authenticateToken, rejectVision);

export default ecovisionrouter;
