const express = require('express');
const router = express.Router();

/**
 * RUNNING PUG FILE
 */
router.get('/simplepug', function(req, res){
  res.render('simple_view');
});

/***
 * DYNAMIC PUG
 */
router.get('/dynamicview', function(req, res){
  res.render('dynamic_view', {
     name: `${req.query.name}`, 
     url:"http://www.tutorialspoint.com"
  });
});

module.exports = router;