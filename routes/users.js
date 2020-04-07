var express = require("express");
var router = express.Router();

function getUsers(req, res) {
  db("SELECT * FROM users ORDER BY id ASC;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
}

// future feature (account creation)
function createUser(req, res) {
  console.log(req.body);
  db(`INSERT INTO users (email, phone_number, num_country_code, name, preferred_contact_method) VALUES 
  ("${req.body.email}",${req.body.phone_number}","${req.body.num_country_code}","${req.body.name}","${req.body.preferred_contact_method}");`)
    .then((results) => {
      getUsers(req, res);
    })
    .catch((err) => res.status(500).send(err));
}

module.exports = {
  getUsers,
  createUser,
  //   getUserById,
  //   updateUser,
  //   deleteUser
};

module.exports = router;
