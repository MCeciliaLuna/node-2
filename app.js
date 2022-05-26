const express = require('express');
const req = require('express/lib/request');
const app = express()
const port = 8000

app.use(express.json()) //generar un método instantáneo, patra configuraciones solamente
app.use(express.urlencoded())//recibir del front como JSON y poder manipularla a través de un objeto

app.get('/home', (req,res) => {
  //res.send('accediste de forma exitosa al Home')
  res.status(200).json({ //status de la respuesta, como el error 404 not found
    mensaje:"Hola",
    comisión:24,
    división: "i"
  }) //generalmente vamos a enviar siempre JSONs
})

app.post('/crear-usuario',(req,res) => {
  //console.log(req.body) //trae todo el objeto
  const {nombre,apellido} = req.body //desestructuramos los datos para pedir sólo 2 de 4

  res.json({
    mensaje: `usuario @${nombre + apellido} creado exitosamente `
  })
})

app.put

app.listen(port,() => {
  console.log('Servidor corriendo en puerto ' + port)
})
