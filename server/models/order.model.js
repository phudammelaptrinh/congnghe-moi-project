const connectDB = require("../config/db");

const Order = {
  async findAllByUser(id_book) {
    const db = await connectDB();
    const sql = `
       SELECT o.*, 
             GROUP_CONCAT(CONCAT(s.tacGia, ' x', d.soLuong) SEPARATOR ', ') AS danhSachSach
      FROM \`order\` o
      JOIN orderdetail d ON o.id_Order = d.id_Order
      JOIN sach s ON d.id_book = s.id_book
      WHERE o.userID = ?
      GROUP BY o.id_Order
      ORDER BY o.ngayDatHang DESC
    `;
    const [rows] = await db.query(sql, [userID]);
    return rows;
  },
};

module.exports = Order;
