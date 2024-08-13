import express from "express";
import {
  createComment,
  getComment,
  DeleteComment,
} from "../Controllers/commentsController.js";
const router = express.Router();

router.post("/comment", createComment);
router.get("/gcomment/:id", getComment);
router.delete("/dcomment/:id", DeleteComment);

export default router;
