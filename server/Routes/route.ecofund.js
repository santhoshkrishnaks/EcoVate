import express from "express";
import { createPayment ,getPayment,getAllFund} from "../Controllers/ecofund.controller.js";
const router=express.Router();

router.post("/ecofund",createPayment);
router.get("/ecofund/:username",getPayment);
router.get("/ecofund",getAllFund);

export default router;