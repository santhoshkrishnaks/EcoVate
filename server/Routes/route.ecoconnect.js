import express from "express";
import {
  createPost,
  deletebyId,
  DeleteLike,
  getPostAll,
  getPostbyUser,
  UpdateLike,
} from "../Controllers/ecoconnect.controller.js";
const router = express.Router();

router.post("/posts", createPost);
router.get("/gposts", getPostAll);
router.get("/getposts/:username", getPostbyUser);
router.delete("/dposts/:id", deletebyId);
router.put("/dlikes/:id1", DeleteLike);
router.put("/ulikes/:id1", UpdateLike);

export default router;
