import express from "express";
import { postCalc, getCalc } from "../Controllers/ecocalc.controller.js";

const router = express.Router();


router.post("/ecocalc", postCalc);
router.get("/ecocalc", getCalc);

export default router;
