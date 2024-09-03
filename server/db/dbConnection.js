const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "database-1.cf0e6c0as01l.ap-south-1.rds.amazonaws.com",
  port: 5432,
  database: "demodb",
  ssl: false,
});

pool.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected to database");
});

module.exports = pool;
