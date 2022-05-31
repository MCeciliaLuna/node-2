const express = require('express');
const req = require('express/lib/request');
const app = express()

const User = require('./models/usuario')

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
  const {nombre,apellido, edad, altura} = req.body //desestructuramos los datos para pedir sólo 2 de 4

  const nuevoUsuario = new User({
    nombre,
    apellido,
    edad,
    edad,
    altura
  })
  const response = await nuevoUsuario.save()

  res.json({
    mensaje: `usuario @${nombre + apellido} creado exitosamente `,
    response
  })
})

app.patch('/editar-usuario/:nombre/:apellido', (req,res)=>{ //dos puntos indican un parámetro porque la ruta tiene que saber qué es lo que estoy cambiando
  const {nombre, apellido} = req.params
   
  res.json({
    mensaje:`usuario @${nombre + apellido} modificado exitosamente`
  })
}) //PUT cambia todo el objeto, PATCH cambia un elemento del objeto

app.put('/editar-todo-el-usuario/:nombre/:apellido', (req,res) => {
  const {nombre, apellido} = req.params;
  const {edad, altura} = req.body;

  res.json({
    nombre,
    apellido, //redunda decir edad:edad, directamente podemos mandar el nombre del parámetro
    edad,
    altura
  })
})

app.listen(port,() => {
  console.log('Servidor corriendo en puerto ' + port)
})