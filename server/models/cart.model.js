const db = require("../config/db");

const Cart = {
  // Tìm giỏ hàng theo userID
  async findCartByUserID(userID) {
    const [rows] = await db.query("SELECT * FROM cart WHERE userID = ?", [
      userID,
    ]);
    return rows.length > 0 ? rows[0] : null;
  },

  // Tạo giỏ hàng mới
  async createCart(userID) {
    const [result] = await db.query(
      "INSERT INTO cart (id_Cart, userID, ngayTao, ngayCapNhat) VALUES (UUID(), ?, NOW(), NOW())",
      [userID]
    );
    return result;
  },

  // Thêm sách vào chi tiết giỏ hàng
  async addToCartDetail(cartID, bookID, soLuong, gia) {
    const [result] = await db.query(
      "INSERT INTO cartdetail (id_CartDetail, id_Cart, id_book, soLuong, Gia) VALUES (UUID(), ?, ?, ?, ?)",
      [cartID, bookID, soLuong, gia]
    );
    return result;
  },

  // Cập nhật số lượng
  async updateQuantity(Id_CartDetail, soLuong) {
    return db.query(
      "UPDATE cartdetail SET soLuong = ? WHERE Id_CartDetail = ?",
      [soLuong, Id_CartDetail]
    );
  },

  async removeBook(userID, bookID) {
    return db.query(
      `
      DELETE cd FROM cartdetail cd
      JOIN cart c ON cd.id_Cart = c.id_Cart
      WHERE c.userID = ? AND cd.id_book = ?`,
      [userID, bookID]
    );
  },

  // Lấy danh sách chi tiết giỏ hàng của user
  async getCartDetailsByUser(userID) {
    try {
      const [rows] = await db.query(
        `
       SELECT cd.soLuong, cd.Gia, b.tenSach, b.hinh, b.moTa
      FROM cart c
      JOIN cartdetail cd ON c.id_Cart = cd.id_Cart
      JOIN book b ON cd.id_book = b.id_book
      WHERE c.userID = ?
      `,
        [userID]
      );

      if (!rows.length) {
        console.log("🛒 Giỏ hàng trống hoặc không tồn tại cho userID:", userID);
        return [];
      }

      return rows;
    } catch (err) {
      console.error("❌ Lỗi trong truy vấn getCartDetailsByUser:", err.message);
      throw err;
    }
  },
};

module.exports = Cart;
