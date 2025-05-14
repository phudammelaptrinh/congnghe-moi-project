const Book = require("../models/book.model");

exports.searchBook = async (req, res) => {
  const { ten, idLoaiSach } = req.query;
  try {
    const [rows] = await Book.search({ ten, idLoaiSach });
    res.json(rows);
  } catch (err) {
    console.error("Loi tim kiem san pham", err);
    res.status(500).json({ message: "Loi server" });
  }
};

exports.getBookDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Khong tim thay san pham" });
    }
  } catch (err) {
    console.err("Loi khi lay chi tiet san pham ", err);
    res.status(500).json({ message: "Loi server" });
  }
};
