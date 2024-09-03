import express from "express";
import {
  createComment,
  getComment,
  DeleteComment,
} from "../Controllers/commentsController.js";
import authenticateToken from "../Middleware/auth.js";
const router = express.Router();

router.post("/comment",authenticateToken, createComment);
router.get("/gcomment/:id", authenticateToken,getComment);
router.delete("/dcomment/:id",authenticateToken, DeleteComment);

export default router;
