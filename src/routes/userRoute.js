import express from "express";
import { getUser, signup } from "../controllers/userController.js";
import { userAuth } from "../middleware/userAuth.js";

const router = express.Router();

router.get("/test", signup);
router.post("/signup", signup);
router.get("/getUser", userAuth, getUser);

export default router;
