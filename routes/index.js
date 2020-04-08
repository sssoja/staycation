var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

// HTTP Methods
const userFunctions = require("./users.js");
const listingFunctions = require("./listings.js");

router.get("/", (req, res, next) => {
  res.send("Welcome to the staycation API");
});

//router.get("/users", userFunctions.getUsers);
router.post("/users", userFunctions.createUser);

router.get("/listings", listingFunctions.getListings);
router.post("/listings", listingFunctions.createListing);

module.exports = router;
