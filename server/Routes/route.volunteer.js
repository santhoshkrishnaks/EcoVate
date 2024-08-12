import { postvolunteer, getvolunteer } from "../Controllers/volunteer.controller.js";
import express from "express";

const router = express.Router();

router.post('/volunteer',postvolunteer);
router.get('/volunteer',getvolunteer);

export default router;