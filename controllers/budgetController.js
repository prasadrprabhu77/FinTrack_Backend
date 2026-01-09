import Budget from "../models/Budget.js";

export const setBudget = async (req, res) => {
  try {
    const { month, year, amount } = req.body;

    if (!month || !year || !amount) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const budget = await Budget.findOneAndUpdate(
      {
        userId: req.user._id,
        month,
        year
      },
      {
        amount
      },
      {
        new: true,
        upsert: true
      }
    );

    res.status(200).json({
      message: "Budget saved successfully",
      budget
    });
  } catch (error) {
    // duplicate key edge case safety
    if (error.code === 11000) {
      return res.status(400).json({ message: "Budget already exists" });
    }
    res.status(500).json({ message: error.message });
  }
};

export const getCurrentMonthBudget = async (req, res) => {
  try {
    const now = new Date();
    const month = now.getMonth() + 1; // JS months are 0-based
    const year = now.getFullYear();

    const budget = await Budget.findOne({
      userId: req.user._id,
      month,
      year
    });

    if (!budget) {
      return res.status(200).json({
        message: "No budget set for this month",
        budget: null
      });
    }

    res.status(200).json({ budget });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({
      userId: req.user._id,
    }).sort({ year: 1, month: 1 });

    res.status(200).json(budgets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
