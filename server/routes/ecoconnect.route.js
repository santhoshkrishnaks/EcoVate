import express from "express";
import {
  createPost,
  deletebyId,
  getPostAll,
  getPostbyUser,
} from "../Controllers/ecoconnect.controller.js";
const router = express.Router();

router.post("/posts", createPost);
router.get("/posts", getPostAll);
router.get("/posts/:username", getPostbyUser);
router.delete("/posts/:title", deletebyId);

export default router;
