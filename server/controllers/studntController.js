const pool = require("../db/dbConnection");
const {
  insertDetails,
  getAllStudents,
  getStudentsByName,
} = require("../db/queries");
const jwt = require("jsonwebtoken");

const insertStudent = async (req, res) => {
  const {
    first_name,
    last_name,
    date_of_birth,
    gender,
    email,
    phone_number,
    address_line1,
    city,
    state,
    zip_code,
    country,
    nationality,
    emergency_contact_name,
    emergency_contact_phone,
  } = req.body;

  const values = [
    first_name,
    last_name,
    date_of_birth,
    gender,
    email,
    phone_number,
    address_line1,
    city,
    state,
    zip_code,
    country,
    nationality,
    emergency_contact_name,
    emergency_contact_phone,
  ];

  pool.query(insertDetails, values, (error, results) => {
    console.log(error);
    if (error) {
      return res.status(400).json({ success: "false", error: error.message });
    }

    return res.status(201).json({
      success: "true",
      message: "Student added successfully",
    });
  });
};

const getAllStudentDetails = async (req, res) => {
  pool.query(getAllStudents, (error, results) => {
    if (error) {
      return res.status(400).json({ success: "false", error: error.message });
    }
    if (results.rows.length === 0) {
      return res
        .status(404)
        .json({ success: "false", error: "No student found" });
    }

    return res.status(200).json({ success: "true", data: results.rows });
  });
};

const getByName = async (req, res) => {
  const { name } = req.params;
  pool.query(getStudentsByName, [name], (error, results) => {
    if (error) {
      return res.status(400).json({ success: "false", error: error.message });
    }

    if (results.rows.length === 0) {
      return res
        .status(404)
        .json({ success: "false", error: "Student not found" });
    }

    return res.status(200).json({ success: "true", data: results.rows });
  });
};

module.exports = {
  insertStudent,
  getAllStudentDetails,
  getByName,
};
