const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../config/restrict_mid");
const checkRole = require('../config/checkRoles')

router.get("/", restricted, checkRole("sales"), (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
