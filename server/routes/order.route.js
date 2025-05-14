const express = require("express");
const router = express.Router();
const { getOrderHistory } = require("../controllers/order.controller");

// router.post("/", createOrder);
router.get("/history/:userId", getOrderHistory);
module.exports = router;
