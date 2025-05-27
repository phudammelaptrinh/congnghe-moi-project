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
    try {
      const { Id_CartDetail, soluong } = req.body;
      console.log("📥 Body nhận được:", req.body);

      if (!Id_CartDetail || soluong == null) {
        return res.status(400).json({ error: "Thiếu dữ liệu" });
      }

      const result = await Cart.updateQuantity(Id_CartDetail, soluong);
      console.log("✅ Kết quả cập nhật:", result);

      res.json({ message: "Cập nhật thành công" });
    } catch (error) {
      console.error("❌ Lỗi SQL hoặc server:", error);
      res.status(500).json({ error: "Lỗi server khi cập nhật giỏ hàng" });
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
