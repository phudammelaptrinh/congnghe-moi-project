const connectDB = require("../config/db");
const db = require("../config/db");
const { search } = require("../routes/auth.route");

const Book = {
  async search({ ten, idLoaiSach }) {
    const conn = await connectDB();
    let sql = `
      SELECT s.*, l.tenLoaiSach
      FROM sach s
      JOIN loaisach l ON s.id_LoaiSach = l.id_LoaiSach
      WHERE 1=1
    `;
    const params = [];

    //neu co ten thi thuc hien sql
    if (ten) {
      sql += "AND s.tacGia LIKE ?";
      params.push(`%${ten}`);
    }

    if (loaiSachID) {
      sql += "AND s.id_LoaiSach = ?";
      params.push(idLoaiSach);
    }

    return conn.query(sql, params);
  },

  async findById(id_book) {
    const db = await connectDB();
    const sql = `
      SELECT s.*, l.tenLoaiSach
      FROM sach s
      JOIN loaisach l ON s.id_LoaiSach = l.id_LoaiSach
      WHERE s.id_book = ?
    `;
    const [rows] = await db.query(sql, [id_book]);
    return rows.length > 0 ? rows[0] : null;
  },
};

module.exports = Book;
