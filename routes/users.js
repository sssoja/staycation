// var express = require("express");
// const db = require("../model/helper");

var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());

const VERSION = "v1";

router.get('/users', (req, res) => {
    // Respond by send the full list of data in "users" table
    db("SELECT * FROM users ORDER BY id ASC;")
        .then(results => {
            res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
});






// function createUser(req, res) {
//     db(`INSERT INTO users (email, phone_number, num_country_code, name, preferred_contact_method) VALUES
//   ("${req.body.email}","${req.body.phone_number}","${req.body.num_country_code}","${req.body.name}","${req.body.preferred_contact_method}");`)
//         .then((results) => {
//             getUsers(req, res, next);
//         })
//         .catch((err) => res.status(500).send(err));
// }

// function getUserById(req, res) {
//     db(`SELECT * FROM users WHERE id=${req.params.user_id};`)
//         .then((results) => {
//             getUsers(req, res, next);
//         })
//         .catch((err) => res.status(500).send(err));
// }

// function updateUser(req, res) {
//     db(
//             `UPDATE users SET email=${req.body.email}, phone_number=${req.body.phone_number},
//     num_country_code=${req.body.num_country_code}, name=${req.body.name},
//     preferred_contact_method=${req.body.preferred_contact_method} WHERE id=${req.params.user_id};`
//         )
//         .then((results) => {
//             getUsers(req, res, next);
//         })
//         .catch((err) => res.status(500).send(err));
// }

// function deleteUser(req, res) {
//     db(`DELETE FROM users WHERE id=${req.params.user_id};`)
//         .then((results) => {
//             getUsers(req, res, next);
//         })
//         .catch((err) => res.status(500).send(err));
// }

// module.exports = {
//     getUsers,
//     createUser,
//     getUserById,
//     updateUser,
//     deleteUser,
// };


module.exports = router;