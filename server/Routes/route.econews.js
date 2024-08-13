import express from "express";
import { getnews, postnews, deletenews } from "../Controllers/econewsController.js";

const router = express.Router();

router.post("/econews", postnews);
router.get("/econews", getnews);
router.delete("/econews/:id",deletenews)

export default router;
