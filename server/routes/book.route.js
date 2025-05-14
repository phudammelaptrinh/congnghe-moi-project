const express = require("express");
const router = express.Router();

const { searchBook, getBookDetail } = require("../controllers/book.controller");

router.post("/searchBook", searchBook);
router.post("/:id", getBookDetail);
module.exports = router;
