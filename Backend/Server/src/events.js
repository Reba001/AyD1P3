const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here

  //********** PETICIONES HTTP PARA LOS MOCKS *************** */
  router.get('/mock_get_usuarios', (req,res,next)=>{
    const prod = require('../test/usuarios');
    console.log(prod);
    res.status(200).jsonp(prod());
  });




//******Login******
router.post('/login', (req, res, next) => {
  if(req.body.username != null || req.body.password != null || req.body.username != "" || req.body.password != "")
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
  else if(req.body.correo != null || req.body.password != null || req.body.coreo != "" || req.body.password != "")
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

//******Registrar usuario******
router.post('/registrar_usuario', (req, res, next) => {
  db.query(
    'INSERT INTO USUARIO(nombre, apellido, dpi, edad) VALUES(?,?,?,?)',
    [req.body.nombre, req.body.apellido, req.body.dpi, req.body.edad],
    (error, results) => {
      if(error)
      {
        console.error(error);
        res.status(500).json({status:'error'});
      }
      else
      {
        res.status(200).json({status:'ok'});
      }
    }
  );
});

//******Obtener ultimo usuario******
router.get('/ultimo_usuario', (req, res, next) => {
  db.query(
    'SELECT MAX(id_usuario) AS id FROM USUARIO',
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
});

//******Registrar cuenta******
router.post('/registrar_cuenta', (req, res, next) => {
  db.query(
    'INSERT INTO CUENTA(username, correo, password, id_usuario) VALUES(?,?,?,?)',
    [req.body.username, req.body.correo, req.body.password, req.body.id],
    (error, results) => {
      if(error)
      {
        console.error(error);
        res.status(500).json({status:'error'});
      }
      else
      {
        res.status(200).json({status:'ok'});
      }
    }
  );
});

//******Verificar username******
router.post('/verificar_user', (req, res, next) => {
  db.query(
    'SELECT * FROM CUENTA WHERE username=?',
    [req.body.username],
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
});

//******Verificar correo******
router.post('/verificar_correo', (req, res, next) => {
  db.query(
    'SELECT * FROM CUENTA WHERE correo=?',
    [req.body.correo],
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
});

//******Registrar giftcard******
router.post('/registrar_giftcard', (req, res, next) => {
  db.query(
    'INSERT INTO GIFTCARDS(nombre, descripcion, imagen, change_rate, activa) VALUES(?,?,?,?,?)',
    [req.body.nombre, req.body.descripcion, req.body.imagen, req.body.change_rate, req.body.activa],
    (error, results) => {
      if(error)
      {
        console.error(error);
        res.status(500).json({status:'error'});
      }
      else
      {
        res.status(200).json({status:'ok'});
      }
    }
  );
});

//******Desactivar giftcard******
router.put('/desactivar_giftcard', (req, res, next) => {
  db.query(
    'UPDATE GIFTCARDS SET activa = 0 WHERE id_giftcards = ?',
    [req.body.id],
    (error, results) => {
      if(error)
      {
        console.error(error);
        res.status(500).json({status:'error'});
      }
      else
      {
        res.status(200).json({status:'ok'});
      }
    }
  );
});

//******Desactivar availability******
router.post('/registrar_av', (req, res, next) => {
  db.query(
    'INSERT INTO AVAILABITILY(total, id_giftcards) VALUES(?,?)',
    [req.body.total, req.body.id],
    (error, results) => {
      if(error)
      {
        console.error(error);
        res.status(500).json({status:'error'});
      }
      else
      {
        res.status(200).json({status:'ok'});
      }
    }
  );
});

//******Obtener informacion de usuario ******
router.get('/get_info_usuario', (req, res, next) => {
  db.query(
    'SELECT u.nombre, u.apellido, u.dpi, u.edad, c.username, c.correo, c.password\
    FROM\
      USUARIO  u\
    INNER JOIN CUENTA  c\
    ON u.id_usuario = c.id_usuario\
    AND c.username = ?',
    [req.body.username],
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
});

//******Factura******
router.post('/registrar_compra', (req, res, next) => {
  db.query(
    'INSERT INTO FACTURA(fecha, estado, no_tarjeta, id_usuario)',
    [req.body.fecha, req.body.estado, req.body.tarjeta, req.body.id],
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
});

//******Factura******
router.post('/registrar_detalle', (req, res, next) => {
  db.query(
    'INSERT INTO DETALLE(cantidad, precio, id_factura, id_giftcards)',
    [req.body.cantidad, req.body.precio, req.body.factura, req.body.gift],
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
});

  return router;
}
module.exports = createRouter;


