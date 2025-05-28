const db = require("../config/db");

const Book = {
  async search({ ten, idLoaiSach }) {
    let sql = `
      SELECT s.*, l.tenLoaiSach
      FROM book s
      JOIN booktype l ON s.id_LoaiSach = l.id_LoaiSach
      WHERE 1=1
    `;
    const params = [];

    if (ten) {
      sql += " AND s.tacGia LIKE ?";
      params.push(`%${ten}%`);
    }

    if (idLoaiSach) {
      sql += " AND s.id_LoaiSach = ?";
      params.push(idLoaiSach);
    }

    const [rows] = await db.query(sql, params);
    return rows;
  },

  async findById(id_book) {
    const sql = `
      SELECT s.*, l.tenLoaiSach
      FROM book s
      JOIN booktype l ON s.id_LoaiSach = l.id_LoaiSach
      WHERE s.id_book = ?
    `;
    const [rows] = await db.query(sql, [id_book]);
    return rows.length > 0 ? rows[0] : null;
  },

  async getBooksForHero() {
    try {
      const sql = `
        SELECT hinh, moTa, tacGia, tenSach, loaiSach
        FROM book
        LIMIT 4
      `;
      const [rows] = await db.query(sql);
      console.log("✅ Dữ liệu sách cho Hero:", rows);
      return rows;
    } catch (err) {
      console.error("❌ Lỗi trong Book.getBooksForHero:", err);
      throw err;
    }
  },

  async getFeaturedBooks() {
    const sql = `
      SELECT hinh, moTa, tacGia, tenSach, loaiSach
      FROM book
      ORDER BY soLuong DESC
      LIMIT 3
    `;
    const [rows] = await db.query(sql);
    return rows;
  },

  async getTopBooks() {
    const sql = `
      SELECT hinh, moTa, tacGia, tenSach, loaiSach
      FROM book
      ORDER BY soLuong DESC
      LIMIT 5
    `;
    const [rows] = await db.query(sql);
    return rows;
  },
};

module.exports = Book;
