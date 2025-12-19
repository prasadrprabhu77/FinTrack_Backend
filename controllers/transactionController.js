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


export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    // check ownership
    if (transaction.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this transaction" });
    }

    await transaction.deleteOne();

    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getDashboardSummary = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      userId: req.user._id
    });

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach((tx) => {
      if (tx.type === "income") {
        totalIncome += tx.amount;
      } else if (tx.type === "expense") {
        totalExpense += tx.amount;
      }
    });

    res.status(200).json({
      totalIncome,
      totalExpense,
      balance: totalIncome - totalExpense
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCategoryWiseExpense = async (req, res) => {
  try {
    const data = await Transaction.aggregate([
      {
        $match: {
          userId: req.user._id,
          type: "expense"
        }
      },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          total: 1
        }
      }
    ]);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
