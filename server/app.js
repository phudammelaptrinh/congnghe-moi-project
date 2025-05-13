const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");

// Load biến môi trường từ .env
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoute = require("./routes/auth.route");
app.use("/api/auth", authRoute); // login, register nằm trong /api/auth

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
