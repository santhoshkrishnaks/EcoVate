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
import authenticateToken from "../Middleware/auth.js";
const router = express.Router();

router.post("/posts",authenticateToken, createPost);
router.get("/gposts",authenticateToken, getPostAll);
router.get("/getposts/:username",authenticateToken, getPostbyUser);
router.delete("/dposts/:id",authenticateToken, deletebyId);
router.put("/dlikes/:id1",authenticateToken, DeleteLike);
router.put("/ulikes/:id1", authenticateToken,UpdateLike);
router.get("/posts/:id", authenticateToken,getpostbyid);

export default router;
