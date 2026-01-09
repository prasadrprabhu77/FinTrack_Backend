import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";
import budgetRouter from "./routes/budgetRoutes.js";

dotenv.config();
connectDB()

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// auth routes 
app.use("/api/auth", authRouter)

//Transaction Routes
app.use("/api/transactions", transactionRouter)

// Budget Routes
app.use("/api/budget", budgetRouter );

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});