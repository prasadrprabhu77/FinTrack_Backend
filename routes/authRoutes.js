import express from "express";
import { login, signup } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/me", authMiddleware, (req, res) => {
  res.json(req.user);
});

export default authRouter;
