const jwt = require("jsonwebtoken");
require("dotenv").config();

const signIn = async (req, res) => {
  const { name, password } = req.body;

  if (name === "admin" && password === "admin") {
    const token = jwt.sign({ name }, "secret");
    return res
      .status(200)
      .cookie("token", token)
      .json({ success: "true", message: "Login successful" });
  }
  return res
    .status(400)
    .json({ success: "false", error: "Invalid credentials" });
};

const signOut = async (req, res) => {
  return res
    .status(200)
    .clearCookie("token")
    .json({ success: "true", message: "Logout successful" });
};

const validateToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ success: "false", error: "Unauthorized" });
  }
  try {
    jwt.verify(token, "secret", (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is unauthorized");
      }
      next();
    });
  } catch (error) {
    return res.status(400).json({ success: "false", error: error.message });
  }
};

module.exports = {
  signIn,
  signOut,
  validateToken,
};
