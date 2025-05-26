const express = require("express");
const router = express.Router();

const {
  searchBook,
  getBookDetail,
  getHeroBooks,
  getFeaturedBooks,
  getTopBooks,
} = require("../controllers/book.controller");

router.post("/searchBook", searchBook);
router.get("/hero", getHeroBooks);
router.get("/featured", getFeaturedBooks);
router.get("/topbook", getTopBooks);
router.post("/:id", getBookDetail);

module.exports = router;
