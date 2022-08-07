const express = require('express')
const router = express.Router() //determinar las rutas principales de nuestras peticiones

router
  .get('/', (req, res) => {
    res.send('Recibió la data');
  })
  // .put('/user', (req, res) => {
  //   res.send('Get a random book');
  // })

  module.exports = router