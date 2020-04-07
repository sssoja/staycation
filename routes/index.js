var express = require("express");
var router = express.Router();
const db = require("../model/helper");

const usersFunctions = require("./users.js");
const listingsFunctions = require("./listings.js");

router.get("/", (req, res, next) => {
  res.send("Welcome to the staycation API");
});

router.get("/users", usersFunctions.getUsers);
router.post("/users", usersFunctions.createUser);

router.get("/listings", listingsFunctions.getListings);
router.post("/listings", listingsFunctions.createListing);

module.exports = router;
