const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here

//******Login******
router.post('/login', (req, res, next) => {
  if((req.body.username != null && req.body.password != null) && (req.body.username != "" && req.body.password != ""))
  {
    db.query(
      'SELECT * FROM CUENTA WHERE username = ? AND password = ?',
      [req.body.username, req.body.password],
      (error, results) => {
        if(error)
        {
          console.error(error);
          res.status(500).json({status:'error'});
        }
        else
        {
          res.status(200).json(results);
        }
      }
    );
  }
  else if((req.body.correo != null && req.body.password != null) && (req.body.correo != "" && req.body.password != ""))
  {
    db.query(
      'SELECT * FROM CUENTA WHERE correo = ? AND password = ?',
      [req.body.correo, req.body.password],
      (error, results) => {
        if(error)
        {
          console.error(error);
          res.status(500).json({status:'error'});
        }
        else
        {
          res.status(200).json(results);
        }
      }
    );
  }
  else
  {
    res.status(500).json({status:'error'});
  }
});

  return router;
}
module.exports = createRouter;


