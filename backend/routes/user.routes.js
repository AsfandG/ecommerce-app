import express from "express";
import {
  adminLogin,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/adminLogin", adminLogin);

export default router;
