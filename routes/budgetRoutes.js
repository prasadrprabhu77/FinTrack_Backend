import express from "express";
import { getAllBudgets, getCurrentMonthBudget, setBudget } from "../controllers/budgetController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const budgetRouter = express.Router();

budgetRouter.post("/", authMiddleware, setBudget);
budgetRouter.get("/", authMiddleware, getCurrentMonthBudget );
budgetRouter.get("/all", authMiddleware, getAllBudgets );

export default budgetRouter;
