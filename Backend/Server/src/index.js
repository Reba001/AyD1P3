const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const events = require('./events');

//Conexión a la base de datos
const connection = mysql.createConnection({
  //Propiedades
  host: '35.233.234.107',
  user: 'root',
  password: '123',
  database: 'gifthub'
});

connection.connect((error) => {
  if(error)
  {
    throw error;
  }
  console.log('Conexión exitosa');
});

const app = express()
  .use(cors())
  .use(bodyParser())
  .use(events(connection));

app.get('/', (req, res) => {

});

app.listen('3000', () => {
  console.log('Servidor iniciado en puerto 3000');
});

