import express from "express";
import {
  getnews,
  postnews,
  deletenews,
} from "../Controllers/econewsController.js";
import authenticateToken from "../Middleware/auth.js";

const router = express.Router();

router.post("/econews",authenticateToken, postnews);
router.get("/econews",authenticateToken, getnews);
router.delete("/econews/:id",authenticateToken, deletenews);

export default router;
