import express from "express";
import { createPayment ,getPayment,getAllFund,getTotalPayments} from "../Controllers/ecofund.controller.js";
const router=express.Router();

router.post("/ecofund",createPayment);
router.get("/ecofund/:username",getPayment);
router.get("/ecofund",getAllFund);
router.get("/fundtotal",getTotalPayments);
export default router;