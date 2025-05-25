const express = require("express");
const router = express.Router();
const { createCart, getCartDetail } = require("../controllers/cart.controller");

router.post("/create", createCart);
router.get("/:id", getCartDetail);

module.exports = router;
