var express = require("express");
var router = express.Router();

// HTTP Methods
const userFunctions = require("./users.js");
const listingFunctions = require("./listings.js");

router.get("/", (req, res, next) => {
  res.send("Welcome to the staycation API");
});

router.get("/users", usersFunctions.getUsers);
router.post("/users", usersFunctions.createUser);

router.get("/listings", listingsFunctions.getListings);
router.post("/listings", listingsFunctions.createListing);

module.exports = router;
