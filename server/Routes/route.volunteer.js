import { postvolunteer, getvolunteer, decideApplication } from "../Controllers/volunteer.controller.js";
import express from "express";

const router = express.Router();

router.post('/volunteer', postvolunteer);
router.get('/volunteer', getvolunteer);
router.post('/volunteer/decision', decideApplication);

export default router;
