const express = require("express");
const router = express.Router();
const Auth = require("../controllers/auth.controller");

router.post("/register", Auth.register);
router.post("/login", Auth.login);
router.post("/logout", Auth.logout);
router.put("/update/:userId", Auth.update);
router.post("/forgot-password", Auth.forgotPassword);
router.post("/reset-password", Auth.resetPassword);

module.exports = router;
