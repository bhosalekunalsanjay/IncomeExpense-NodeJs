const express = require('express');
const router = express.Router();
const queries = require('../utils/queries');

/**
 * WITHOUT ROUTE PARAMS
 */
router.get('/', (req, res) => {
  queries.getAllUsers((err, users) => {
    if (err) {
      res.status(500).send('Error retrieving users from the database');
    } else {
      res.json(users);
    }
  });
});

/**
 * WITH ROUTE PARAMS
 */
router.get('/:Id', (req, res) => {
  const Id = req.params.Id;
  //res.send(users.find(user => user.id == Id) ?? "No data found");
});

module.exports = router;