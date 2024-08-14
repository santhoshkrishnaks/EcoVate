import express from "express";
import login from "../Controllers/user.controller.js";
import { landController } from "../Controllers/landing.controller.js";
import bodyParser from "body-parser";
const router = express.Router();
router.post(
  "/api/webhook",
  bodyParser.raw({ type: "application/json" }),
  login
);
router.get("/", landController);

export default router;
