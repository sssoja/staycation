var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get("/", (req, res, next) => {
  res.send("Welcome to the staycation API");
});

// HTTP Methods
const userFunctions = require("./users.js");
const listingFunctions = require("./listings.js");

router.get("/users", userFunctions.getUsers);
router.get("/users/:user_id", userFunctions.getUserById);
router.post("/users", userFunctions.createUser);
router.put("/users/:user_id", userFunctions.updateUser);
router.delete("/users/:user_id", userFunctions.deleteUser);
router.get("/listings", listingFunctions.getListings);
router.get("/listings/:listing_id", listingFunctions.getListingById);
router.post("/listings", listingFunctions.createListing);
router.put("/listings/:listing_id", listingFunctions.updateListing);
router.delete("/listings/:listing_id", listingFunctions.deleteListing);

module.exports = router;
