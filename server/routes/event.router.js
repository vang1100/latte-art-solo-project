const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', function(req, res) {
  
    let queryText = 'SELECT * FROM "event";'; 
  
  // sending the query to the DB
    pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in queryText', error);
      res.sendStatus(500);
    })
  });

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
