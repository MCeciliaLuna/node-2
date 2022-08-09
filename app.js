const express = require('express')
const app = express()

require('./database/db')

const user = require('./routes/users')

const port = 8000

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.json({
    message: 'Conectado exitosamente'
  })
})

app.post('/user', user)


app.listen(port, () => {
  console.log('App corriendo en puerto ' + port)
})