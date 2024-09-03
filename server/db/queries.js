const getAllStudents = "SELECT * FROM students";
const getStudentsByName = "SELECT * FROM students WHERE first_name ~* $1";
const insertDetails = `
      INSERT INTO students (
        first_name, last_name, date_of_birth, gender, email, phone_number,
        address_line1, city, state, zip_code, country, nationality,
        emergency_contact_name, emergency_contact_phone
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING id
    `;

module.exports = {
  getAllStudents,
  getStudentsByName,
  insertDetails,
};
