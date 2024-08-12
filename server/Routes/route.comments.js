import express from "express";
import { createComment, getComment, UpdateComments } from "../Controllers/commentsController";
const router = express.Router();

router.post("/comment",createComment);
router.get("/gcomment/:id", getComment);
router.put("/pcomment/", UpdateComments);

export default router;
