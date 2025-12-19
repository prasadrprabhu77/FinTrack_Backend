import express from "express";
import { addTransaction, deleteTransaction, getDashboardSummary, getUserTransactions } from "../controllers/transactionController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const transactionRouter = express.Router();

transactionRouter.post("/", authMiddleware , addTransaction);
transactionRouter.get("/", authMiddleware , getUserTransactions);
transactionRouter.get("/summary", authMiddleware , getDashboardSummary);
transactionRouter.delete("/:id", authMiddleware , deleteTransaction);

export default transactionRouter;
