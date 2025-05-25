const Cart = require("../models/cart.model");

exports.createCart = async (req, res) => {
  try {
    const { userID, items } = req.body;

    const result = await Cart.createCart({ userID, items });
    res.status(201).json({ message: "Tạo giỏ hàng thành công", ...result });
  } catch (err) {
    console.error("Lỗi tạo giỏ hàng:", err);
    res.status(500).json({ message: "Lỗi server" });
  }
};

exports.getCartDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const detail = await Cart.getCartDetail(id);
    res.status(200).json(detail);
  } catch (err) {
    console.error("Lỗi lấy chi tiết giỏ hàng:", err);
    res.status(500).json({ message: "Lỗi server" });
  }
};
