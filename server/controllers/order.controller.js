const Order = require("../models/order.model");

exports.getOrderHistory = async (req, res) => {
  const { userId } = req.params;
  try {
    const order = await Order.findAllByUser(userId);
    res.json(order);
  } catch (err) {
    console.err("Loi khi tim thay lich su don hang", err);
    res.status(500).json({ message: "Loi ket noi server" });
  }
};
