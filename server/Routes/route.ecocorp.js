import {postcorp, getcorp} from "../Controllers/ecocorpController.js";
import express from "express";

const router=express.Router();
 
router.post('/ecocorp',postcorp);
router.get('/ecocorp',getcorp)

export default router;