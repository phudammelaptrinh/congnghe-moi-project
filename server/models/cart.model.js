const connectDB = require("../config/db");

const Cart = {
  async createCart({ userID, items }) {
    const conn = await connectDB();

    //tinh tong tien
    const total = items.reduce((acc, item) => acc + item.gia * item.soLuong, 0);

    // tao cart moi
    const [cartResult] = await conn.query(
      "INSERT INTO cart (userID, ngayTao, ngayCapNhat) VALUES (?, NOW(), NOW())",
      [userID]
    );

    const id_Cart = cartResult.insertId;

    // them tung san pham vao cartdetail
    for (const item of items) {
      await conn.query(
        "INSERT INTO cartdetail (id_Cart, id_book, soLuong, Gia) VALUES (?, ?, ?, ?)",
        [id_Cart, item.id_book, item.soLuong, item.gia]
      );
    }

    return { id_Cart, total };
  },

  async getCartDetail(id_Cart) {
    const conn = await connectDB();
    const sql = `
      SELECT cd.*, b.tacGia, b.loaiSach, b.hinh, b.moTa, b.Gia AS giaGoc, b.tenSach
      FROM cartdetail cd
      JOIN book b ON cd.id_book = b.id_book
      WHERE cd.id_Cart = ?
    `;
    const [rows] = await conn.query(sql, [id_Cart]);
    return rows;
  },
};

module.exports = Cart;
