require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "staycation",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  //edit this to create database tables
  let sql =
    "DROP TABLE if exists listings; CREATE TABLE listings(id INT NOT NULL AUTO_INCREMENT, email VARCHAR(40) UNIQUE NOT NULL, phone_number INTEGER UNIQUE, num_country_code INTEGER, name VARCHAR(40), preferred_contact_method VARCHAR(40), PRIMARY KEY (id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `listings` was successful!");

    console.log("Closing...");
  });

  con.end();
});
