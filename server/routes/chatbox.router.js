const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  //console.log('get router for chatbox');
  let queryText = `SELECT "comment", "date", "username" FROM "chatbox"
JOIN "user" ON "user"."id" = "chatbox"."user_id";`;

  pool.query(queryText)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.log('error in queryText for chatbox', error);
    res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

    const comment= req.body.comment;
    const date = req.body.date;
    const userId = req.user.id;

    const queryText = `
    INSERT INTO "chatbox"
        ("comment", "date", "user_id")
    VALUES
        ($1, $2, $3);
    
    `;
pool.query(queryText, [comment, date, userId])
.then(result => {
console.log('database insert resposnse successful', result);
res.sendStatus(201);
})
.catch(error => {
console.log('database insert response failed', error);
res.sendStatus(500);
});
 
});

module.exports = router;
