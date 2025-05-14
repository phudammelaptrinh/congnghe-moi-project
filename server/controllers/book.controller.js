const book = require("../models/book.model");

exports.searchBook = async (req, res) => {
  const { ten, idLoaiSach } = req.query;
  try {
    const [rows] = await book.search({ ten, idLoaiSach });
    res.json(rows);
  } catch (err) {
    console.error("Loi tim kiem san pham", err);
    res.status(500).json({ message: "Loi server" });
  }
};
