const express = require('express');
const router = express.Router();
const queries = require('../utils/queries');

router.post('/login',(req, res) => {
  const {emailid, password} = req.body;
  const params = {
    emailid, password
  }
  queries.getUserByEmailAndPassword(params,(err, users) => {
    if (err) {
      res.status(500).send('Error retrieving users from the database');
    } else {
      res.json(users);
    }
  });
});

module.exports = router;