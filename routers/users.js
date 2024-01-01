const express = require('express');
const router = express.Router();
const dummyData = require('../dummy');
const users = dummyData.users;

/**
 * WITHOUT ROUTE PARAMS
 */
router.get('/', (req, res) => {
  res.json(dummyData);
});

/**
 * WITH ROUTE PARAMS
 */
router.get('/:Id', (req, res) => {
  const Id = req.params.Id;
  res.send(users.find(user => user.id == Id) ?? "No data found");
});

module.exports = router;