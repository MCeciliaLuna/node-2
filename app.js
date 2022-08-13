const express = require('express')
const app = express()

require('./database/db')

const user = require('./routes/users')

const port = 8000

app.use(express.json())
app.use(express.urlencoded())

app.get('/get', user)
app.post('/user', user)
app.delete('/delete', user)
app.patch('/patch', user)
app.put('/put', user)


app.listen(port, () => {
  console.log('App corriendo en puerto ' + port)
})