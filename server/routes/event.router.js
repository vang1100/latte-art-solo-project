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
    const user = req.user.id;
 
     const queryText = `
                     INSERT INTO "event"
                         ("event_name", "address", "city", "state", "zip_code", "date", "time", "user_id")
                     VALUES
                         ($1, $2, $3, $4, $5, $6, $7, $8);
                     
                     `;

     pool.query(queryText, [eventName, address, city, state, zipCode, date, time, user])
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
 router.put('/edit/:id', (req, res) => {
    // console.log("this is req.params", req.params);
    // console.log("this is req.body", req.body.city);
    const { id } = req.params;
    const event_name = req.body.event_name;
    const address = req.body.address;
    const zip_code = req.body.zip_code;
    const city = req.body.city;
    const state = req.body.state;
    const date = req.body.date;
    const time = req.body.time;
  
    const sqlText = `
      UPDATE "event" 
      SET "event_name" = $1, "address" = $2, "zip_code" = $3, "city" = $4, "state" = $5, "date" = $6, "time" = $7
      WHERE "id" = $8;
    `;
  

  
    pool.query(sqlText, [event_name, address, zip_code, city, state, date, time, id])
      .then((result) => {
        console.log(`Updated event in the database`, result);
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always responds
      });
  });



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
