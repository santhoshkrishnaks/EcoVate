import {
  getLikes,
  postLike,
  UpdateLike,
  getlik,
} from "../Controllers/likes.controller.js";
import authenticateToken from "../Middleware/auth.js";
import express from "express";

const router = express.Router();

router.post("/plike",authenticateToken, postLike);
router.get("/like",authenticateToken, getlik);
router.get("/glike",authenticateToken, getLikes);
router.put("/ulike",authenticateToken, UpdateLike);
export default router;
