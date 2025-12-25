import express from "express";
import { setBudget } from "../controllers/budgetController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const budgetRouter = express.Router();

budgetRouter.post("/", authMiddleware, setBudget);

export default budgetRouter;
