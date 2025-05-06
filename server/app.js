const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const authRoute = require("./routes/auth.route");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", authRoute);
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
