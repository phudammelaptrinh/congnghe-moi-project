const Book = require("../models/book.model");

exports.searchBook = async (req, res) => {
  const { ten, idLoaiSach } = req.query;
  try {
    const [rows] = await Book.search({ ten, idLoaiSach });
    res.json(rows);
  } catch (err) {
    console.error("Lỗi tìm kiếm sản phẩm", err);
    res.status(500).json({ message: "Lỗi server" });
  }
};

exports.getHeroBooks = async (req, res) => {
  try {
    const books = await Book.getBooksForHero();
    res.status(200).json(books);
  } catch (err) {
    console.error("❌ Lỗi khi lấy sách Hero:", err);
    res.status(500).json({ message: "Lỗi server" });
  }
};

exports.getBookDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    res.status(200).json(book); // 🚀 Thêm dòng trả về dữ liệu
  } catch (err) {
    console.error("Lỗi khi lấy chi tiết sản phẩm:", err); // ✅ Đã sửa
    res.status(500).json({ message: "Lỗi server" });
  }
};

exports.getFeaturedBooks = async (req, res) => {
  try {
    const books = await Book.getFeaturedBooks();
    res.status(200).json(books);
  } catch (err) {
    console.error("Lỗi khi lấy sách nổi bật:", err);
    res.status(500).json({ message: "Lỗi server" });
  }
};

exports.getTopBooks = async (req, res) => {
  try {
    const books = await Book.getTopBooks();
    res.status(200).json(books);
  } catch (err) {
    console.error("Lỗi khi lấy sách nổi bật:", err);
    res.status(500).json({ message: "Lỗi server" });
  }
};
