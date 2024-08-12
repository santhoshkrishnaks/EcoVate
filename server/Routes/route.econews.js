import express from "express";
import { getnews, postnews } from "../Controllers/econewsController.js";

const router = express.Router();

router.post("/econews", postnews);
router.get("/econews", getnews);

export default router;
