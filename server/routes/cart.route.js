const express = require("express");
const router = express.Router();
const Cart = require("../controllers/cart.controller");

router.post(
  "/add",
  (req, res, next) => {
    const { userID, bookID, soLuong, gia } = req.body;
    if (!userID || !bookID || !soLuong || !gia) {
      return res.status(400).json({ message: "Thiếu thông tin" });
    }
    next();
  },
  Cart.addToCart
);
router.get("/:userID", Cart.getCart);
router.put("/update", Cart.updateQuantity);
router.delete("/remove/:userID/:bookID", Cart.removeBook);

module.exports = router;
