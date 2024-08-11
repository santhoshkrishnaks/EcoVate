import express from "express";

import { createPost, getPosts } from "../Controllers/ecoconnect.controller.js";
const router = express.Router();

router.post("/posts", createPost);
router.post("/posts", getPosts);

export default router;
