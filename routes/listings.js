var express = require("express");

function getListings(req, res) {
  db("SELECT * FROM listings ORDER BY id ASC;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
}

function createListing(req, res) {
  db(`INSERT INTO listings (user_id, date_published, space_type, is_shared, location_id, reviews_id) VALUES 
  ("${req.body.user_id}",${req.body.date_published}","${req.body.space_type}","${req.body.is_shared}","${req.body.location_id}","${req.body.reviews_id}");`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
}

module.exports = {
  getListings,
  createListing,
  //   getUListingById,
  //   updateListing,
};
