import {
  getLikes,
  postLike,
  UpdateLike,
  getlik,
} from "../Controllers/likes.controller.js";
import express from "express";

const router = express.Router();

router.post("/plike", postLike);
router.get("/like", getlik);
router.get("/glike", getLikes);
router.put("/ulike", UpdateLike);
export default router;
