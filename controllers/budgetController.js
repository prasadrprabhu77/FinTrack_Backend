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
