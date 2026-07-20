import express from "express";
import { verifyAdminPassword } from "../controller/adminController.js";

const router = express.Router();

router.post("/", verifyAdminPassword);

export default router;