//estructura para la creación
const {Schema,model} = require('mongoose')
const user = new Schema({
  nombre: String,
  apellido: String,
  edad: Number,
  altura: Number
}) //creamos la estructura del usuario

module.exports = model('User', user)