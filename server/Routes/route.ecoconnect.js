import express from "express";
import {
  createPost,
  deletebyId,
  DeleteLike,
  getPostAll,
  getPostbyUser,
  UpdateLike,
  getpostbyid,
} from "../Controllers/ecoconnect.controller.js";
const router = express.Router();

router.post("/posts", createPost);
router.get("/gposts", getPostAll);
router.get("/getposts/:username", getPostbyUser);
router.delete("/dposts/:title", deletebyId);
router.put("/dlikes/:id1", DeleteLike);
router.put("/ulikes/:id1", UpdateLike);
router.get("/posts/:id", getpostbyid);

export default router;
