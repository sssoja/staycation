var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());

function getListings(req, res) {
  db("SELECT * FROM listings ORDER BY id ASC;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
}

router.get("/", (req, res) => {
  res.send("Welcome to the staycation API");
});

router.get("/listings", getListings);

router.post("/listings", (req, res) => {
  db(`INSERT INTO listings (user_id, date_published, space_type, is_shared, location_id, reviews_id) VALUES 
    ("${req.body.user_id}",${req.body.date_published}","${req.body.space_type}","${req.body.is_shared}","${req.body.location_id}","${req.body.reviews_id}");`)
    .then((results) => {
      getListings(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

router.put("/listngs/:listing_id", (req, res) => {
  db(
    `UPDATE listings SET "${req.body.space_type}","${req.body.is_shared}", "${req.body.location_id}" WHERE id=${req.params.listing_id};`
  )
    .then((results) => {
      getListings(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

router.delete("/listings/:listing_id", (req, res) => {
  db(`DELETE FROM listings WHERE id=${req.params.listings_id};`)
    .then((results) => {
      getListings(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
