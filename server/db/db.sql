CREATE DATABASE demodb;

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone_number VARCHAR(20) NOT NULL,
    address_line1 TEXT NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    country VARCHAR(50) NOT NULL,
    nationality VARCHAR(50) NOT NULL,
    emergency_contact_name VARCHAR(100) NOT NULL,
    emergency_contact_phone VARCHAR(20) NOT NULL,
    middle_name VARCHAR(50)  DEFAULT NULL,
    student_id VARCHAR(20) UNIQUE  DEFAULT NULL,
    enrollment_date DATE  DEFAULT NULL,
    expected_graduation_year INTEGER  DEFAULT NULL,
    program_of_study VARCHAR(100)  DEFAULT NULL,
    previous_school VARCHAR(100)  DEFAULT NULL,
    preferred_language VARCHAR(50)  DEFAULT NULL,
    extracurricular_interests TEXT  DEFAULT NULL
);
