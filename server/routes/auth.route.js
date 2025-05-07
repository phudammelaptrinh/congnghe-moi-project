const express = require("express");
const router = express.Router();

const { login, register, logout } = require("../controllers/auth.controller");

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

module.exports = router;
