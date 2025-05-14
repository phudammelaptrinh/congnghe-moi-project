const express = require("express");
const router = express.Router();

const { searchBook } = require("../controllers/book.controller");

router.post("/searchBook", searchBook);
module.exports = router;
