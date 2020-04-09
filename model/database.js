require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
    host: DB_HOST || "127.0.0.1",
    user: DB_USER || "root",
    password: DB_PASS || "root",
    database: DB_NAME || "staycation",
    multipleStatements: true,
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    //edit this to create database tables
    let sql = "";
    // Here we are making sure to wipe out any tables that already exist!
    "SET FOREIGN_KEY_CHECKS = 0; " +

    "DROP TABLE if exists locations; DROP TABLE if exists users; DROP TABLE if exists listings; DROP TABLE if exists bookings; DROP TABLE if exists reviews; " +
    // Here we actually create the tables
    "CREATE TABLE users ( id integer PRIMARY KEY, email varchar(255) UNIQUE NOT NULL, phone_number integer UNIQUE, num_country_code integer, name varchar(255), preferred_contact_method varchar(255) ); " +
    "CREATE TABLE listings ( id integer PRIMARY KEY, user_id integer, date_published date, space_type varchar(255), is_shared boolean, location_id integer, reviews_id integer ); " +
    "CREATE TABLE locations ( id integer PRIMARY KEY, street_name varchar(255), city_name varchar(255), latitude float, longitude float ); " +
    "CREATE TABLE bookings ( id integer PRIMARY KEY, user_id integer, listing_id integer, start_date date, end_date date ); " +
    "CREATE TABLE reviews ( id integer PRIMARY KEY, booking_id integer, rating tinyint, review_body text ); " +
    // Here we enforce referencial integrity through foreign keys
    "ALTER TABLE listings ADD FOREIGN KEY (user_id) REFERENCES users (id); " +
    "ALTER TABLE listings ADD FOREIGN KEY (reviews_id) REFERENCES reviews (id); " +
    "ALTER TABLE bookings ADD FOREIGN KEY (user_id) REFERENCES users (id); " +
    "ALTER TABLE bookings ADD FOREIGN KEY (listing_id) REFERENCES listings (id); " +
    "ALTER TABLE reviews ADD FOREIGN KEY (booking_id) REFERENCES bookings (id); " +
    "SET FOREIGN_KEY_CHECKS = 1; "
    ;

    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(
            "Table creation: `users`, `listings`, `locations`, `bookings` was successful!"
        );

        console.log("Closing...");
    });

    con.end();
});