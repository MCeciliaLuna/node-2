const express = require('express')
const app = express()

const user = require('./routes/users')

const port = 8000

app.get('/', (req, res) => {
  res.json({
    message: 'Conectado exitosamente'
  })
})

app.use('/user', user)


app.listen(port, () => {
  console.log('App corriendo en puerto ' + port)
})