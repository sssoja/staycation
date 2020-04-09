// var express = require("express");
// var router = express.Router();
// const bodyParser = require("body-parser");

// router.use(bodyParser.json());

// router.get("/", (req, res, next) => {
//     res.send("Welcome to the staycation API");
// });

// // HTTP Methods
// const userFunctions = require("./users.js");
// const listingFunctions = require("./listings.js");

// router.get("/v1/users", userFunctions.getUsers);
// router.get("/v1/users/:user_id", userFunctions.getUserById);
// router.post("/v1/users", userFunctions.createUser);
// router.put("/v1/users/:user_id", userFunctions.updateUser);
// router.delete("/v1/users/:user_id", userFunctions.deleteUser);
// router.get("/v1/listings", listingFunctions.getListings);
// router.get("/v1/listings/:listing_id", listingFunctions.getListingById);
// router.post("/v1/listings", listingFunctions.createListing);
// router.put("/v1/listings/:listing_id", listingFunctions.updateListing);
// router.delete("/v1/listings/:listing_id", listingFunctions.deleteListing);

// module.exports = router;