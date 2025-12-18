import Transaction from "../models/Transaction.js";

export const addTransaction = async (req, res) => {
  try {
    const { type, amount, category, note, wallet, date } = req.body;

    // basic validation
    if (!type || !amount || !category) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const transaction = await Transaction.create({
      userId: req.user._id,
      type,
      amount,
      category,
      note,
      wallet,
      date
    });

    res.status(201).json({
      message: "Transaction added successfully",
      transaction
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getUserTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      userId: req.user._id
    }).sort({ date: -1 });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
