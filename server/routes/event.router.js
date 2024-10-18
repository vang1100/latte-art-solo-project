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
    // console.log('req.body', req.body);
 
     const eventName = req.body.event_name;
     const address = req.body.address;
     const city = req.body.city;
     const state = req.body.state;
     const zipCode = req.body.zip_code;
     const date = req.body.date;
     const time = req.body.time;
  
 
     const queryText = `
                     INSERT INTO "event"
                         ("event_name", "address", "zip_code", "city", "state", "date", "time")
                     VALUES
                         ($1, $2, $3, $4, $5, $6, $7);
                     
                     `;

     pool.query(queryText, [eventName, address, city, state, zipCode, date, time])
     .then(result => {
         console.log('database insert resposnse successful', result);
         res.sendStatus(201);
     })
     .catch(error => {
         console.log('database insert response failed', error);
         res.sendStatus(500);
     });
 });

 // PUT

 // DELETE

 router.delete('/:id', (req, res) => {
  //  console.log('delete this', req.params.id);

   const deleteId = req.params.id
   const queryText = 'DELETE FROM "event" WHERE "id" = $1;';

   pool.query(queryText,[deleteId])
   .then((response) => {
    console.log('delete ID susccessful. event Id: ', response);
    res.sendStatus(200);
   })
   .catch((error) => {
    console.log('error in router delete for event id', error);
    res.sendStatus(500);
   });
 });
module.exports = router;
