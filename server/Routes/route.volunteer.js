import { postvolunteer, getvolunteer, decideApplication } from "../Controllers/volunteer.controller.js";
import express from "express";
import authenticateToken from "../Middleware/auth.js";

const router = express.Router();

router.post('/volunteer',authenticateToken, postvolunteer);
router.get('/volunteer',authenticateToken, getvolunteer);
router.post('/volunteer/decision',authenticateToken, decideApplication);

export default router;
