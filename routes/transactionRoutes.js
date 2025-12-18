import express from "express";
import { addTransaction } from "../controllers/transactionController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const transactionRouter = express.Router();

transactionRouter.post("/", authMiddleware , addTransaction);

export default transactionRouter;
