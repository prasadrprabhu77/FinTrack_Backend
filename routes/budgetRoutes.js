import express from "express";
import { getCurrentMonthBudget, setBudget } from "../controllers/budgetController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const budgetRouter = express.Router();

budgetRouter.post("/", authMiddleware, setBudget);
budgetRouter.get("/", authMiddleware, getCurrentMonthBudget );

export default budgetRouter;
