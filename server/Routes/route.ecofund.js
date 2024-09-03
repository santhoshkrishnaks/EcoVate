import express from "express";
import {
  createPayment,
  getPayment,
  getAllFund,
  getTotalPayments,
} from "../Controllers/ecofund.controller.js";
import authenticateToken from "../Middleware/auth.js";
const router = express.Router();

router.post("/ecofund",authenticateToken, createPayment);
router.get("/ecofund/:username",authenticateToken, getPayment);
router.get("/ecofund",authenticateToken, getAllFund);
router.get("/fundtotal", authenticateToken,getTotalPayments);
export default router;
