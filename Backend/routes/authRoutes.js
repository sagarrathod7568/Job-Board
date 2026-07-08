import express from "express";
import { googleLogin } from "../controllers/authController.js";

const router = express.Router();

// Google Login
router.post("/google", googleLogin);

export default router;
