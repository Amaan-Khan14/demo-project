const express = require("express");
const pool = require("./db/dbConnection");
const cookieParser = require("cookie-parser");
const app = express();
const { adminRouter, router } = require("./routes/regRoutes");
const cors = require("cors");

app.use(
  cors({
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

app.use("/", router);
app.use("/admin", adminRouter);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
