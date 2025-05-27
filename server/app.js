const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const cookieParser = require("cookie-parser");

// Load biến môi trường từ .env
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoute = require("./routes/auth.route");
app.use("/api/auth", authRoute);

const bookRoute = require("./routes/book.route");
app.use("/api/book", bookRoute);

const orderRoute = require("./routes/order.route");
app.use("/api/order", orderRoute);

//test api

app.get("/", (req, res) => {
  res.send("Server đang chạy ....");
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
