import express from "express";
import { addTransaction, getUserTransactions } from "../controllers/transactionController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const transactionRouter = express.Router();

transactionRouter.post("/", authMiddleware , addTransaction);
transactionRouter.get("/", authMiddleware , getUserTransactions);

export default transactionRouter;
