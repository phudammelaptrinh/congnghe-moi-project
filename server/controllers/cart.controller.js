const Cart = require("../models/cart.model");

class CartController {
  static async addToCart(req, res) {
    const { userID, bookID, soLuong, gia } = req.body;

    try {
      let cart = await Cart.findCartByUserID(userID);

      if (!cart) {
        await Cart.createCart(userID);
        cart = await Cart.findCartByUserID(userID);
      }

      await Cart.addToCartDetail(cart.id_Cart, bookID, soLuong, gia);

      res.status(201).json({ message: "✅ Đã thêm vào giỏ hàng" });
    } catch (error) {
      console.error("❌ Lỗi khi thêm vào giỏ:", error.message);
      res.status(500).json({ error: "❌ Lỗi khi thêm vào giỏ" });
    }
  }

  static async getCart(req, res) {
    const { userID } = req.params;
    console.log("🔍 Lấy giỏ hàng của userID:", userID);

    try {
      const cartDetails = await Cart.getCartDetailsByUser(userID);
      console.log("🛒 Chi tiết giỏ hàng:", cartDetails);
      return res.json(cartDetails);
    } catch (error) {
      console.error("❌ Lỗi khi lấy giỏ hàng:", error.message);
      res.status(500).json({ error: "Không thể lấy giỏ hàng" });
    }
  }

  static async updateQuantity(req, res) {
    console.log("📦 req.body:", req.body);

    const { Id_CartDetail, soLuong } = req.body || {};

    if (!Id_CartDetail || soLuong === undefined) {
      return res.status(400).json({ message: "Thiếu dữ liệu" });
    }

    try {
      await Cart.updateQuantity(Id_CartDetail, soLuong);
      res.json({ message: "Cập nhật thành công" });
    } catch (error) {
      console.error("❌ Lỗi UPDATE:", error); // ❗ log toàn bộ object error
      res.status(500).json({ message: "Lỗi server", error: error.message });
    }
  }

  static async removeBook(req, res) {
    const { userID, bookID } = req.params;

    try {
      await Cart.removeBook(userID, bookID);
      res.json({ message: "✅ Đã xoá sách khỏi giỏ hàng" });
    } catch (error) {
      console.error("❌ Lỗi khi xoá sách:", error.message);
      res.status(500).json({ error: "❌ Không thể xoá sách khỏi giỏ" });
    }
  }
}

module.exports = CartController;
