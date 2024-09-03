import { postcorp, getcorp } from "../Controllers/ecocorp.controller.js";
import express from "express";
import authenticateToken from "../Middleware/auth.js";

const router = express.Router();

router.post("/ecocorp",authenticateToken, postcorp);
router.get("/ecocorp",authenticateToken, getcorp);

export default router;
