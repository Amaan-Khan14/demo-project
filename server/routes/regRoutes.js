const express = require("express");
const router = express.Router();
const adminRouter = express.Router();

const {
  insertStudent,
  getAllStudentDetails,
  getByName,
} = require("../controllers/studntController");
const { signIn, signOut, validateToken } = require("../controllers/admin");

router.route("/").post(insertStudent);
router.route("/all").get(validateToken, getAllStudentDetails);
router.route("/:name").get(getByName);

adminRouter.route("/").post(signIn);
adminRouter.route("/signout").get(signOut);
adminRouter.route("/me").get(validateToken);

module.exports = { router, adminRouter };
